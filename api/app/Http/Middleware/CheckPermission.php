<?php

namespace App\Http\Middleware;

use Closure;

class CheckPermission
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $permission)
    {
        if (!$this->isAllowed($request->user()->role, $permission)) {
            return response()->json(['msg' => 'Not authorized for this operation.'], 401);
        }
        return $next($request);
    }

    static function isAllowed($role, $minRole) {
        $rolesOrder = ['user', 'writer', 'editor', 'administrator'];
        if (in_array($role, $rolesOrder)) {
            return array_search($role, $rolesOrder) >= array_search($minRole, $rolesOrder);
        }
        return false;
    }
}
