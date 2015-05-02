<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Laravel and Angular Comment System</title>

    <!-- CSS -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css"> <!-- load bootstrap via cdn -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css"> <!-- load fontawesome -->
    <style>
        body        { padding-top:30px; }
        form        { padding-bottom:20px; }
        .comment    { padding-bottom:20px; }
    </style>

    <!-- JS -->  
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-route.js"></script>


    <!-- ANGULAR -->
    <!-- all angular resources will be loaded from the /public folder -->
        <script src="js/controllers/mainController.js"></script> <!-- load our controller -->
        <script src="js/services/projectsService.js"></script> <!-- load our service -->
        <script src="js/app.js"></script> <!-- load our application -->

</head>
<!-- declare our angular app and controller -->
<body class="container" ng-app="myApp" ng-controller="authCtrl">

    <div class="col-md-4">
        <h2>Register</h2>

        <form class="form-horizontal" ng-submit="register()">
    <div class="control-group">
        <label class="control-label" for="inputEmail">Email</label>
        <div class="controls">
            <input type="text" id="inputEmail" placeholder="Email" ng-model="authData.email" required>
        </div>
    </div>
    <div class="control-group">
        <label class="control-label" for="inputPassword">Password</label>
        <div class="controls">
            <input type="password" id="inputPassword" placeholder="Password" ng-model="authData.password" required>
        </div>
    </div>
    <div class="control-group">
        <div class="controls">
            <button type="submit" class="btn">Sign in</button>
        </div>
    </div>

</form>
    </div>
<!--    <pre>
    {{ projectData }}
    </pre> -->

    <!-- LOADING ICON -->
    <!-- show loading icon if the loading variable is set to true -->
    <!-- <p class="text-center" ng-show="loading"><span class="fa fa-meh-o fa-5x fa-spin"></span></p> -->

    <!-- THE COMMENTS -->
    <!-- hide these comments if the loading variable is true -->
<!--    <div class="comment" ng-hide="loading" ng-repeat="laravelproject in laravelprojects"> 
        <h3>Comment #{{ laravelproject.id }} <small>by {{ laravelproject.name }}</h3>
        <p>{{ laravelproject.description }}</p>

        <p><a href="#" ng-click="deleteComment(comment.id)" class="text-muted">Delete</a></p>
    </div> -->

    <div class="col-md-8"></div>

</body>
</html>