<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class AdminUserSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('users')->insert([
            'name' => 'Super Admin',
            'email' => 'admin@example.com',
            'email_verified_at' => now(),
            'password' => Hash::make('securePassword123'),
            'role' => 1,
            'status' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
