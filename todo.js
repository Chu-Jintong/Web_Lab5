function getTasks()
{
    let stored=localStorage.getItem('tasks');
    if(stored==null)
    {
        return [];
    }
    return JSON.parse(stored);/* It will be the array sutomatically.*/
    /* Read the information from the localStorage*/
}
    function saveTasks(tasks)/*We need to save the infromation to the localstorage*/
    {
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    function displayTasks()
    {
        let tasks=getTasks();/* get the tasklist*/
        let list=document.getElementById('taskList');
        list.innerHTML='';
        for(let i=0;i<tasks.length;i++)
        {
            list.innerHTML+='<li>'+tasks[i]+'<button onclick="removeTask('+i+ ')">Remove</button></li>';
        }
    }
    function addTask()
    {
        let input=document.getElementById('taskInput');
        let text=input.value.trim();/*read the task and clear the blank*/
        if(text=='')
        {
            alert('Please enter a task!');
            return;
        }
        let tasks=getTasks();
        tasks.push(text);/*Add to the end of the content*/
        saveTasks(tasks);
        displayTasks();
        input.value='';
    }
    function removeTask(index)
    {
        let tasks=getTasks();
        tasks.splice(index,1);/*From the index,we need to delete one information.*/
        saveTasks(tasks);
        displayTasks();
    }
    displayTasks();

