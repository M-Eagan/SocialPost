"use strict";

{
    angular.module("app")
        .component('posts', {
            controller: "postController",
            templateUrl: 'Components/posts/posts.html',
            bindings: {
                item: '<',
            }
        });
}