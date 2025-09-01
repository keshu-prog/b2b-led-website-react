<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class HandleCors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);

        // Add CORS headers here
        $response->headers->set('Access-Control-Allow-Origin', '*'); // You can change '*' to specify allowed origins
        $response->headers->set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        $response->headers->set('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');
        $response->headers->set('Access-Control-Allow-Credentials', 'true');
        $response->headers->set('Access-Control-Max-Age', '3600');

        // Handle preflight requests (OPTIONS request)
        if ($request->getMethod() === "OPTIONS") {
            return response()->json([], 200);
        }

        return $response;
    }
}
