// do not use deprecated js code
'use strict';

// using to check if the instance was create one time, and prevent just one object of that type


var repo = function () {
    var called = 0;

    var save = function (task) {
        called++;
        console.log('saving objet ' + task );
        console.log('llamada '+ called);
    }

    console.log('new repo is up');
    return {
        save: save
    }
}

var my_repo = repo ();

var taskHandler = function () {
    return {
        save: function () {
            my_repo.save('hi i am taskHandler saving this repo');
        }
    }
}

var test_repo = repo('test object');
taskHandler.save();
