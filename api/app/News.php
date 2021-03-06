<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class News extends Model
{
    use SoftDeletes;

    protected $table = 'news';

    protected $guarded = ['id', 'deleted_at'];

    protected $dates = ['created_at', 'updated_at', 'deleted_at', 'published_at'];

    protected $hidden = ['author_id'];

    public function author()
    {
        return $this->belongsTo('App\User');
    }

    public function scopePublished($query)
    {
        return $query->whereDate('published_at', '<=', Carbon::now());
    }
}
