//Check to make sure that main.js is linked to index.html
// console.log("Working");

/* globals angular: false*/

//Adding angular module to main.js file
angular.module('angularIntro', [])
//Adding controller to angular module so that I can display angular on the index.html file. The two arguments are the name of the controller and then the function that controls the controller.
    .controller('angularController', angularController);
    
//Function with the controller name to display javascript methods/functions/variables in index.html file
    function angularController () {
        var click = this;
        click.message = function ($event) {
        //Event where message prints to the console
            //console.log("The button was clicked!");
        //Event where the H1 text shows in button
            click.messageShow = false;
        };
        click.messageShow = true;
        click.list = function () {
            click.listShow = false;
        };
        click.listShow = true;
        
    }
