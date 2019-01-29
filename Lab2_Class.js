"use strict";
exports.__esModule = true;
var toDoClass = /** @class */ (function () {
    function toDoClass() {
        this.tasks = [];
    }
    toDoClass.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("The String has been added to the Array");
        return this.tasks.length;
    };
    toDoClass.prototype.listAllTasks = function () {
        this.tasks.forEach(function (task) {
            console.log(task);
        });
    };
    toDoClass.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task, 0);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("The Item " + this.tasks + " has been deleted");
        }
        else {
            console.log("Item Not Found");
        }
        return this.tasks.length;
    };
    return toDoClass;
}());
var testClass = new toDoClass();
testClass.addTask("Bob");
testClass.addTask("Bill");
testClass.addTask("Bryan");
testClass.listAllTasks();
testClass.deleteTask("Bob");
