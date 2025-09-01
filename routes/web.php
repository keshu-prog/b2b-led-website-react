<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\SampleController;


Route::get('/', function () {
    return view('welcome');
});


Route::prefix('sample')->name('sample.')->group(function () {
    Route::get('/buttons', [SampleController::class, 'buttons'])->name('buttons');
    
});

Route::get('/ad_maticlegend', [AdminController::class,'login'])->name('login'); 
Route::post('/dologin', [AdminController::class,'loginRoleBased']); 
Route::get('/logout', [AdminController::class,'Logout'])->name('adminLogout');


Route::middleware(['auth', \App\Http\Middleware\CheckRole::class.':1'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', [AdminController::class, 'AdminDashboard'])->name('dashboard1');
});

// Route::middleware(['auth', 'check.role:2'])->prefix('subadmin')->group(function () {
//     Route::get('/dashboard', [SubAdminController::class, 'dashboard'])->name('subadmin.dashboard');
// });

// Route::middleware(['auth', 'check.role:3'])->prefix('user')->group(function () {
//     Route::get('/dashboard', [UserController::class, 'dashboard'])->name('user.dashboard');
// });

// Route::middleware([App\Http\Middleware\CheckLogin::class])->group(function () {

//     // Route::prefix('admin')->name('admin.')->group(function () {
//     //     Route::get('/dashboard', [AdminController::class, 'AdminDashboard'])->name('sddashboard');
       
//     // });

//     // // User routes with /user prefix
//     // Route::prefix('user')->name('user.')->group(function () {
//     //     Route::get('/dashboard', [UserController::class, 'UserDashboard'])->name('dashboard');
//     //     // Add more user routes here
//     // });

// });
