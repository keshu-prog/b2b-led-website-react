<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config("app.name") }} - {{ ucfirst(Route::currentRouteName()) }}</title>

    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="">
    <meta name="robots" content="index, follow">
    
    <meta property="og:title" content="">
    <meta property="og:description" content="">
    <meta property="og:site_name" content="">
    <meta property="og:locale" content="{{ app()->getLocale() }}">
    <meta property="og:image" content="">
    <meta property="og:url" content="">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="">
    <meta name="twitter:title" content="{{ config('app.name') }} - {{ ucfirst(Route::currentRouteName()) }}">
    <meta name="twitter:description" content="">
    <meta name="twitter:image" content="">
    <meta name="twitter:url" content="{{ url()->current() }}">
    <link rel="shortcut icon" href="">
    <!-- <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"> -->
    
    @viteReactRefresh
    @vite('resources/react_frontend/main.tsx')

    <script type="application/ld+json">
    
    </script>
</head>
<body>
<div id="root"></div>
</body>
</html>
