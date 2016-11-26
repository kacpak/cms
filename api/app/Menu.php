<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $table = 'menu';

    /**
     * Scope a query to only include top level menu
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeAllTopLevel($query)
    {
        return $query->whereNull('parent_id');
    }

    public function children()
    {
        return $this->hasMany('App\Menu', 'parent_id');
    }

    /**
     * Scope a query to include top level menu with its children
     */
    public function scopeNested($query)
    {
        return $query->allTopLevel()->with('children');
    }
}
