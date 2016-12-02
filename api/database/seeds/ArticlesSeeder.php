<?php

use App\Article;
use Illuminate\Database\Seeder;

class ArticlesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Article::query()->truncate();
        Article::create([
            'title' => 'Pierwszy artykuł',
            'slug' => 'pierwszy_artykul',
            'content' => 'A oto i pierwszy artykuł.<br>Cieszmy się wszyscy :D',
            'author_id' => 1
        ]);
        Article::create([
            'title' => 'Inny artykuł',
            'slug' => 'inny_artykul',
            'content' => 'Ho Ho Ho!<br>Idą święta :D',
            'author_id' => 3
        ]);
    }
}
