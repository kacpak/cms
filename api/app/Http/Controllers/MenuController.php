<?php

namespace App\Http\Controllers;

use App\Menu;
use Illuminate\Http\Request;

class MenuController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Menu::nested()->get();
    }

    public function all()
    {
        return Menu::all();
    }

    public function store(Request $request) {
        $menuItem = new Menu();
        $menuItem->name = $request->input('name');
        $menuItem->href = $request->input('href');
        $menuItem->isNewTab = $request->input('isNewTab');
        $menuItem->parent_id = $request->input('parent_id');
        $menuItem->save();

        return $menuItem;
    }

    public function destroy($id)
    {
        // TODO role validation
        Menu::find($id)->delete();
    }

    public function update(Request $request, Menu $menu)
    {
        // TODO check permissions
        $menu->name = $request->input('name');
        $menu->href = $request->input('href');
        $menu->isNewTab = $request->input('isNewTab');
        $menu->parent_id = $request->input('parent_id');
        $menu->save();
        return $menu;
    }
}
