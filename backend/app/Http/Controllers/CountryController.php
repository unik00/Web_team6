<?php

namespace App\Http\Controllers;

use App\Country;
use Illuminate\Http\Request;

class CountryController extends Controller
{
    function list(){
        $list = Country::all();
        return response()->json([
            'countries' => $list
        ]);
    }
}
