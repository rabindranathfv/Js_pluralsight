// do not use deprecated js code
'use strict';

// using to check if the instance was create one time, and prevent just one object of that type


var repo = function () {
    var called = 0;

    var save = function () {
        called++;
        console.log('saving objet ');
        console.log('llamada '+ called);
    }

    console.log('new repo is up');
    return {
        save: save
    }
}

var my_repo = repo ();

var taskHandler = function () {
    var save_handler =function () {
        my_repo.save('hi i am taskHandler saving this repo');
    }
    return {
        save: save_handler
    }
}

var test_repo = repo('test object');
test_repo.save
test_repo.save_handler;
