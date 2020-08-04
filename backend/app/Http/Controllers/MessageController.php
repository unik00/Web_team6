<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use App\Message_user;
use Illuminate\Http\Request;
use App\Message_content;
use App\Student;
use App\Company;
use App\School;
class MessageController extends Controller
{
    /** Send Message Create
    *
    * @param sender_id : id sender
    * @param recipient_id : id receipient
    * @param message : message
    */
    function sendMessage(Request $request){
        $sender_id = $request->User()->id;
        $message_user = Message_user::where(function($query)  use ($request, $sender_id) {
            $query->where('sender_id', $request->recipient_id)->where('recipient_id', $sender_id);
        })->orWhere(function($query) use ($request, $sender_id) {
            $query->where('sender_id', $sender_id)
                  ->where('recipient_id', $request->recipient_id);
        })->first();
        if(empty($message_user)) {
            $message_user = new Message_user;
            $message_user->sender_id = $sender_id;
            $message_user->recipient_id = $request->recipient_id;
        }

        DB::beginTransaction();
        try {
            $message_user->touch();
            $message_content = new Message_content;
            $message_content->content = $request->message;
            $message_content->conversation_id = $message_user->id;
            $message_content->sender_id = $sender_id;
            $message_content->save();
            DB::commit(); // database query successfull

            return response()->json([
                'success' => true,
                'message' => 'Gửi tin nhắn thành công.'
            ]);

        } catch (\Exception $e) {
            DB::rollback(); // database query error
            return response()->json([
                'success' => false,
                'message' => 'Lỗi hệ thống. Vui lòng thử lại sau !'
            ], 503);
        }
    }

    function readConversation(Request $request){
        $id = $request->User()->id;
        $conversation = Message_user::where('sender_id', $id)->orWhere('recipient_id', $id)->orderBy('updated_at', 'desc')->get();
        foreach ($conversation as $cvs) {
            $id_other = $cvs->sender_id;
            if($id_other == $id) $id_other = $cvs->recipient_id;
            $cvs->unread = Message_content::where('conversation_id', $cvs->id)->where('sender_id', $id_other)->where('is_read', 0)->count();
            $user = Student::where('user_id', $id_other)->first();
             if(!$user) $user = School::where('user_id', $id_other)->first();
             if(!$user) $user = Company::where('user_id', $id_other)->first();
            if(!$user) {
                return response()->json(['success' => false, 'message' => 'Người dùng không tồn tại']);
            }
            $cvs->name = $user->name;
            $cvs->myid = $id;
            $cvs->other_id = $id_other;
        }
        return response()->json(['success' => true, 'data' => $conversation]);
    }

    function readMessage(Request $request){
        $sender_id = $request->User()->id;
        $conversation_id = $request->conversation_id;
        $message_user = Message_user::find($conversation_id);
        if($message_user->sender_id != $sender_id && $message_user->recipient_id != $sender_id){
            return response()->json(['success' => false, 'message' => 'Bạn không thể xem cuộc trò chuyện này']);
        }
        $message = Message_content::where('conversation_id', $conversation_id)->orderBy('created_at', 'asc')->get();
        foreach ($message as $ms){
            $ms->is_read = true;
            $ms->save();
            $ms->myid = $sender_id;
            $ms->other_id = ($message_user->sender_id == $sender_id) ? $message_user->recipient_id : $message_user->sender_id;
            $ms->is_sender = ($sender_id == $ms->sender_id) ? true : false;
        }

        return response()->json(['success' => true, 'data' => $message]);
    }
}
