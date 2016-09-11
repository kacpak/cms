<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder  {

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Admin',
            'email' => 'test@test.pl',
            'password' => Hash::make('pass')
        ]);
        DB::table('users')->insert([
            'name' => 'Admin2',
            'email' => 'test2@test.pl',
            'password' => Hash::make('pass')
        ]);
    }
}