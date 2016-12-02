<?php

namespace App\Http\Controllers;

use App\Article;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

use App\Http\Requests;

class ArticlesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Model
     */
    public function index()
    {
        return Article::orderBy('published_at', 'DESC')
            ->orderBy('created_at', 'DESC')
            ->orderBy('id', 'DESC')
            ->with(['author' => function($query) {
                $query->select('id', 'name');
            }])
            ->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Model
     */
    public function show($id)
    {
        return Article::with(['author' => function($query) { $query->select('id', 'name'); }])
            ->findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // TODO role validation
        Article::find($id)->delete();
    }
}
