"use strict";

{
    angular.module("app")
        .component('postForm', {
            templateUrl: 'Components/postForm/postForm.html',
            bindings: {
                onSubmit: '<'
            }
        });
}