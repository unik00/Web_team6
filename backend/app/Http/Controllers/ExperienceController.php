<?php

namespace App\Http\Controllers;

use App\Company;
use App\Experience;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ExperienceController extends Controller
{
    function addExperience(Request $request){
        $id = $request->User()->id;
        $type = $request->User()->type;
        if($type == "Student"){
            DB::beginTransaction();
            try {
                $company_id = $request->company_id;
                $start = $request->start;
                $end = $request->end;
                $description = $request->description;
                $exp = Experience::where('user_id', $id)->where('company_id', $company_id)->first();
                if(!$exp){
                    $exp = new Experience;
                    $exp->user_id = $id;
                    $exp->company_id = $company_id;
                    $exp->start = $start;
                    $exp->end = $end;
                    $exp->description = $description;
                    $exp->save();
                    
                    DB::commit();
                    return response()->json([
                        'success' => true,
                        'message' => 'Thêm kinh nghiệm thành công'
                    ]);
                }
            
            } catch (\Exception $e){
                DB::rollback();
                return response()->json([
                    'success' => false,
                    'message' => 'Lỗi hệ thống. Vui lòng thử lại.'
                ]);
            }
        }
        else {
            return response()->json([
                'success' => false,
                'message' => 'Bạn không có quyền thêm kinh nghiệm'
            ]);
        }
    }
    function removeExperience(Request $request){
        $id = $request->User()->id;
        $exp_id = $request->exp_id;
        DB::beginTransaction();
        try{
            $exp = Experience::find($exp_id);
            if($exp) $exp->delete();
            DB::commit();
            return response()->json([
                'success' => true,
                'message' => 'Bạn xoá kinh nghiệm thành công'
            ]);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json([
                'success' => false,
                'message' => 'Lỗi hệ thống. Vui lòng thử lại'
            ]);
        }
    }

    function getExperience(Request $request){
        $user_id = $request->id;
        $list = Experience::where('user_id', $user_id)->get();
        foreach($list as $ls){
            $company_id = $ls->company_id;
            $company = Company::find($company_id);
            $ls->company_name = $company->name;
        }
        return response()->json([
            'success' => true,
            'exps' => $list
        ]);
    }
}
