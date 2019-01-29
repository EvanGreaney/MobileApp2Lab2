export interface Lab2_Interface
{
    tasks:Array<string>;
    addTask(task:string):number;
    listAllTasks():void;
    deleteTask(task:string):number;
}