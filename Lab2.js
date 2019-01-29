var tasks = [];
var x;
var printout;
function addTask(task) {
    tasks.push(task);
    console.log("The String has been added to the Array");
    return tasks.length;
}
x = addTask("Evan");
console.log(x);
function listAllTasks() {
    tasks.forEach(function (task) {
        console.log(task);
    });
}
console.log(listAllTasks());
function deleteTask(task) {
    var index = tasks.indexOf(task, 0);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log("The Item " + tasks + " has been deleted");
    }
    else {
        console.log("Item Not Found");
    }
    return tasks.length;
}
printout = deleteTask("Evan");
console.log(printout);
