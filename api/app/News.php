<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class News extends Model
{
    protected $table = 'news';

    protected $guarded = ['id', 'deleted_at'];

    protected $dates = ['created_at', 'updated_at', 'deleted_at', 'published_at'];

    public function author()
    {
        return $this->belongsTo('App\User');
    }
}
