<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class Admin extends Model
{
    use HasFactory;
    //
    public function adminLogin($request)
    {
        $credentials = $request->only('email', 'password');

        $admin = User::where('email', $credentials['email'])
                    ->where('status', 1)
                    ->first();

        if ($admin && Hash::check($credentials['password'], $admin->password)) {
            return $admin;
        }

        return null;
    }

}
