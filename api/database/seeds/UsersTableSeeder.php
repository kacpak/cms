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
        DB::table('users')->delete();
        DB::table('users')->insert([
            'name' => 'Admin',
            'email' => 'admin@test.pl',
            'role' => 'administrator',
            'password' => Hash::make('pass')
        ]);
        DB::table('users')->insert([
            'name' => 'Great Editor',
            'email' => 'editor@test.pl',
            'role' => 'editor',
            'password' => Hash::make('pass')
        ]);
        DB::table('users')->insert([
            'name' => 'Writer',
            'email' => 'writer@test.pl',
            'role' => 'writer',
            'password' => Hash::make('pass')
        ]);
        DB::table('users')->insert([
            'name' => 'Joe',
            'email' => 'user@test.pl',
            'role' => 'user',
            'password' => Hash::make('pass')
        ]);
    }
}