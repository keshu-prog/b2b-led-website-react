<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
class AdminController extends Controller
{
    protected $AdminModel;
    public function __construct(Admin $adminModel)
    {
        $this->AdminModel = $adminModel;
    }

    public function login(){
        return view('admin.login');
    }

    public function Logout(){
        Auth::logout();
        session()->invalidate();
        session()->regenerateToken();
        return redirect('/ad_maticlegend')->with('message', 'You have been logged out.');
    }

    public function dologin(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $admin = $this->AdminModel->adminLogin($request);

        if (!$admin) {
            return back()->with('error', 'Invalid login details');
        }

        Session::put('admin_id', $admin->id);
        return redirect()->route('admin.dashboard1');
    }

    public function loginRoleBased(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            // dd($user);
            if ($user->status != 1) {
                Auth::logout();
                return back()->with('error', 'Your account is inactive.');
            }

            if ($user->role == 1) {
                return redirect()->route('admin.dashboard1');
            }
            //  elseif ($user->role == 2) {
            //     return redirect()->route('subadmin.dashboard');
            // } else {
            // return redirect()->route('user.dashboard');
            // }
    }

    return back()->with('error', 'Invalid credentials.');
}

    public function AdminDashboard(){
        $user = Auth::user();
        // dd($user->role);
        if($user->role == 1 || $user->role == 2){
            return view('admin.includes.dashboard', compact('user'));
        } else {
            return view('admin.login');
        }
    }

}
