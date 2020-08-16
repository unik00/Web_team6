<?php

namespace App\Http\Controllers;

use App\Country;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class CountryController extends Controller
{
    function list(){
        $list = Country::all();
        return response()->json([
            'countries' => $list
        ]);
    }
    function addOrUpdateCountry(Request $request){
        $name = $request->name;
        $id = $request->id;
        DB::beginTransaction();
        try {
            $country = Country::find($id);
            if($country){
                $country->name = $name;
            }
            else {
                $country = new Country;
                $country->name = $name;
            }
            $country->save();
            DB::commit();
            return response()->json(['success' => true, 'message' => 'Cập nhật thành công']);
        } catch (\Exception $e){
            DB::rollback();
            return response()->json(['success' => false, 'message' => 'Cập nhật thất bại']);
        }
    }

    function removeCountry(Request $request){
        $id = $request->id;
        DB::beginTransaction();
        try {
            $country = Country::find($id);
            $country->delete();
            DB::commit();
            return response()->json(['success' => true, 'message' => 'Xoá thành công']);
        }catch (\Exception $e){
            DB::rollback();
            return response()->json(['success' => false, 'message' => 'Xoá thất bại']);
        }
    }

}
