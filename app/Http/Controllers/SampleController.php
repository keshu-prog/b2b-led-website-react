<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class SampleController extends Controller
{
    public function buttons(){
        $user = Auth::user();
        return view('pages.ui-features.buttons', compact('user'));
    }
}
