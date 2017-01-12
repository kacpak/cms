<?php

use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('menu')->delete();
        App\Menu::create(['order' => 1, 'name' => 'Google', 'href' => 'http://google.com']);
        App\Menu::create(['order' => 2, 'name' => 'Wirtualna Polska (new tab)', 'href' => 'http://wp.pl', 'isNewTab' => true]);
        App\Menu::create(['order' => 3, 'name' => 'Wyróżnione newsy']);
        App\Menu::create(['order' => 4, 'name' => 'Werther', 'href' => 'news/2', 'parent_id' => 3]);
        App\Menu::create(['order' => 4, 'name' => 'Far far away', 'href' => 'news/4', 'parent_id' => 3]);
        App\Menu::create(['order' => 5, 'name' => 'Cicero', 'href' => 'articles/1']);
        App\Menu::create(['order' => 6, 'name' => 'Li Europan lingues', 'href' => 'articles/2']);
    }
}
