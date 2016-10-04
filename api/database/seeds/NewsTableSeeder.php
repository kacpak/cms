<?php

use Illuminate\Database\Seeder;

class NewsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('news')->delete();
        App\News::create(['title' => 'Hello World', 'content' => 'Lorem Ipsum dolor sit amet...', 'author_id' => 1]);
        App\News::create(['title' => 'Pierwsza odsłona', 'content' => 'Miło mi przedstawić najnowszą odsłonę systemu CMS', 'author_id' => 3]);
        App\News::create(['title' => 'Witajcie witajcie!!!', 'content' => 'Co to za cudo!', 'author_id' => 2]);
    }
}
