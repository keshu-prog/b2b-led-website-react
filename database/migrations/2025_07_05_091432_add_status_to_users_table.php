<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('role')->default('1')->comment('1=>Admin,2=>Sub Admin, 3=>User')->after('remember_token');
            $table->tinyInteger('status')
                  ->default(1)
                  ->comment('-1 = deleted, 0 = inactive, 1 = active')
                  ->after('role');
        });
    }

};
