let tasks:Array<string> = [];
let x:number;
let printout:number

function addTask(task:string):number
{
    tasks.push(task);
    console.log("The String has been added to the Array");
    return tasks.length;
}
x = addTask("Evan");
console.log(x);

function listAllTasks()
{
    tasks.forEach(function(task){
    console.log(task);
    })
}
console.log(listAllTasks());

function deleteTask(task:string):number
{
   let index:number = tasks.indexOf(task,0);
   if(index > -1){
       tasks.splice(index,1);
       console.log("The Item "+tasks+" has been deleted");
   }
   else{
       console.log("Item Not Found");
   }
    return tasks.length;
}

printout = deleteTask("Evan");
console.log(printout);



