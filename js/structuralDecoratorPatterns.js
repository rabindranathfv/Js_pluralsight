// do not use deprecated js code
'use strict';

// used to add new functionallity to an existing object without being obstrusive

class Task {
    constructor(name){
    this.name = name;
    this.completed = false;
    };
}
    Task.prototype.complete = function () {
        console.log("complete task " + this.name);
            this.completed = true;
    }
    
    Task.prototype.save = function () {
        console.log("saving task " + this.name);
    }

var myTask = new Task('legacy task');
myTask.complete();
myTask.save();

var urgentTask = new Task('Urgent task');
// use decorter patter without chance based class

/*
urgentTask.priority = 2;
urgentTask.notify = function () {
    console.log('the priority is ' + this.priority + ' for important people')
}



urgentTask.save = function() {
    Task.notify();
    // making a bind with save task method with the newone 
    Task.prototype.save.call(this)
}
*/
urgentTask.save();
urgentTask.complete();


/* Decorater another way

*/

var urgentTask_ut = function(name, priority) {
    //making bind with class Task and attributes, using <class>.call(this, attribute)
    Task.call(this,name);
    this.priority = priority;
}

urgentTask_ut.prototype = Object.create(Task.prototype);

urgentTask_ut.prototype.notify = function() {
    console.log('Some important stuf');
}

urgentTask_ut.prototype.save = function() {
    this.notify();
    console.log('newest save version');
    Task.prototype.save.call(this);
}


var ut = new urgentTask_ut('Urgent task Rework',1);
console.log(ut);
ut.save();