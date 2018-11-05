"use strict";

{
    angular.module("app")
        .component('posts', {
            controller: "socialPostController",
            templateUrl: 'Components/posts/posts.html',
            bindings: {
                item: '<',
            }
        });
}