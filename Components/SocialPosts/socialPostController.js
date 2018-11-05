"use strict";
{
    angular.module('app')
        .controller('socialPostController', function(){
            const $ctrl =this;

            $ctrl.posts = [
                {title: "Cat", thought: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus velit, aliquam quis velit non, dictum luctus ipsum."},
                {title: "Dog", thought: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus velit, aliquam quis velit non, dictum luctus ipsum."},
                {title: "Mouse", thought: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus velit, aliquam quis velit non, dictum luctus ipsum."},
                {title: "Fish", thought: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus velit, aliquam quis velit non, dictum luctus ipsum."},
            ];

            $ctrl.selectColor = function (posts) {
                $ctrl.item = posts;
            };

            $ctrl.delete = function (index) {
                $ctrl.posts.splice(index, 1);
            }

            $ctrl.addPost = function(addPost) {
                $ctrl.posts.unshift(addPost);
                $ctrl.show = false;
                // $ctrl.hide = false;
            }

            $ctrl.openForm = function() {
                $ctrl.show = true;
                // $ctrl.hide = true;
            }
        });
}