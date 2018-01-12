// do not use deprecated js code
'use strict';

var Task = function (name) {
    this.name = name;
    this.completed = false;

    this.complete = function(){
        console.log("complete task " + this.name);
        this.completed = true;
    }

    this.save = function () {
        console.log("saving task " + this.name);
    }
}

//using prototype

// ClassName.prototype.method = function(){
//      body
//  }

Task.prototype.complete = function () {
    console.log("complete task " + this.name);
        this.completed = true;
}

Task.prototype.save = function () {
    console.log("saving task " + this.name);
}

// instancias
var task1 = new Task("Create demo for constructors");
var task2 = new Task("Create demo for modules");
var task3 = new Task("Create demo for singleton");
var task4 = new Task("Create demo for prototypes");

task1.complete();
task2.save();
task3.save();
task4.save();