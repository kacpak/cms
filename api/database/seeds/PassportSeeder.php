<?php

use Illuminate\Database\Seeder;

class PassportSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('oauth_clients')->insert([
            'name' => 'samplePasswordClient',
            'secret' => 'wupuUfoaaIseyxR9jxvCqI2NtfPz2LEY5djEG1jw',
            'redirect' => '',
            'personal_access_client' => false,
            'password_client' => true,
            'revoked' => false
        ]);
    }
}
