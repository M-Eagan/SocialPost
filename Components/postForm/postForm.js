"use strict";

{
    angular.module("app")
        .component('postForm', {
            templateUrl: 'SocialPosts/postForm/postForm.html',
            bindings: {
                onSubmit: '<'
            }
        });
}