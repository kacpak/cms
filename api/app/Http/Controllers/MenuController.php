<?php

namespace App\Http\Controllers;

use App\Menu;

use App\Http\Requests;

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
}
