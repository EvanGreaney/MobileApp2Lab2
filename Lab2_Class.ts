import {Lab2_Interface} from './Lab2_Interface';

class toDoClass implements Lab2_Interface{
    tasks: Array<string> =[]; 
       addTask(task: string): number {
       this.tasks.push(task);
        console.log("The String has been added to the Array");
        return this.tasks.length;
    }
    listAllTasks(): void {
        this.tasks.forEach(function(task){
            console.log(task);
            })
    }
    deleteTask(task: string): number {
        let index:number = this.tasks.indexOf(task,0);
   if(index > -1){
       this.tasks.splice(index,1);
       console.log("The Item "+this.tasks+" has been deleted");
   }
   else{
       console.log("Item Not Found");
   }
    return this.tasks.length;
    }
}
let testClass = new toDoClass();
testClass.addTask("Bob");
testClass.addTask("Bill");
testClass.addTask("Bryan");
testClass.listAllTasks();
testClass.deleteTask("Bob");