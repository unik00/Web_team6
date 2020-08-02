<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use App\Message_user;
use Illuminate\Http\Request;
use App\Message_content;
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
        $message_user = Message_user::where('sender_id', $sender_id)->where('recipient_id', $request->recipient_id)->first();
        if(empty($message_user)) {
            $message_user = new Message_user;
            $message_user->sender_id = $sender_id;
            $message_user->recipient_id = $request->recipient_id;
        }

        DB::beginTransaction();
        try {
            $message_user->save();
            $message_content = new Message_content;
            $message_content->content = $request->message;
            $message_content->conversation_id = $message_user->id;
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
        $conversation = Message_user::where('sender_id', $id)->get();
        return response()->json(['data' => $conversation]);
    }

    function readMessage(Request $request){
        $sender_id = $request->User()->id;
        $conversation_id = $request->conversation_id;
        $message = Message_content::where('conversation_id', $conversation_id)->get();
        return response()->json(['data' => $message]);
    }
}
