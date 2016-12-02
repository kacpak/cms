<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Article extends Model
{
    use SoftDeletes;

    protected $guarded = ['id', 'deleted_at'];

    protected $dates = ['created_at', 'updated_at', 'deleted_at', 'published_at'];

    protected $hidden = ['author_id'];

    public function author()
    {
        return $this->belongsTo('App\User');
    }
}
