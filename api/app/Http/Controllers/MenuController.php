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
}
