<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <link rel="stylesheet" href="css/app.css">

    </head>
    <body>
       <div class="container-fluid" id="app">
           <div class="row row-eq-height">
               <div class="col-md">
                   <!-- <youtube-dashboard></youtube-dashboard>-->
                   <router-view></router-view>
               </div>
           </div>
       </div>
       <script src="js/app.js"></script>
    </body>
</html>
