import { useEffect, useRef, useState } from 'react';
import Data from './Data';
export default ()=>{
  const [taskList,setTaskList] = useState(Data);
  const [priorityList,setPriorityList] = useState([{id:1,priority: "Low"},{id:2,priority: "Normal"},{id:3,priority: "High"}]);
  const [defaultTaskStatus, setDefaultTaskStatus] = useState("active");
  const [totalActiveTask,setTotalActiveTask] = useState(0);
  const [totalDeActiveTask, setTotalDeActiveTask] = useState(0);
  const [activeButtonStatus,setActiveButtonStatus] = useState(true);
  const [deActiveButtonStatus,setDeActiveButtonStatus] = useState(false);
  
  const taskField = useRef();
  const priorityField = useRef();

  useEffect(()=>{
    console.log("useEffect Executed.....");
    let activeTask = taskList.filter((task)=>task.status=='active').length;
    let deActiveTask = taskList.length - activeTask;
    setTotalActiveTask(activeTask);
    setTotalDeActiveTask(deActiveTask);
  },[taskList]);

  const saveTask = (event)=>{
    event.preventDefault();
    let taskName = taskField.current.value;
    let pid = priorityField.current.value;
    let date = new Date();
    let createdDate = date.getDate()+"/"+date.getMonth()+"/"+date.getYear();
  
    let newTask = {title: taskName,pid:pid,date: createdDate,status: 'active'};
    setTaskList([...taskList,newTask]);
  }

  const changeTaskStatus = (status,title)=>{
    let index = taskList.findIndex(task=>task.title == title);
    let task = taskList[index];
    task.status = status;
    taskList.splice(index,1);
    setTaskList([...taskList,task]);
  }
  return <div className="container mt-5">
    <form onSubmit={saveTask}>
      <div className="row">
        <div className="col-md-6 col-lg-6">
          <input ref={taskField} placeholder="Enter Task Title" type="text" className="form-control"/>
        </div>
        <div className="col-md-6 col-lg-6">
          <select ref={priorityField} className="form-control">
            {priorityList.map((priority,index)=><option value={priority.id}>
              {priority.priority}
            </option>)}
          </select>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
        <button className="btn btn-success" type='submit'>Save</button>
        </div>
      </div>
    </form>
    <div className="row mt-5">
      <div className="col-md-3 col-lg-3">
        <button onClick={()=>{setDefaultTaskStatus('active');setDeActiveButtonStatus(false);setActiveButtonStatus(true);}} disabled={activeButtonStatus} className="btn btn-success">Active ({totalActiveTask})</button>
        <button onClick={()=>{setDefaultTaskStatus('deactive');setDeActiveButtonStatus(true);setActiveButtonStatus(false);}} disabled={deActiveButtonStatus} className="btn btn-primary ml-3">Deactive ({totalDeActiveTask})</button>
      </div>
    </div>
    <table className="table mt-5">
      <thead>
         <tr>
          <th>S.no</th>
          <th>Title</th>
          <th>Date</th>
          <th>Priority</th>
          <th>Status</th>
         </tr>
      </thead>
      <tbody>
        {
        taskList.sort((a,b)=>{return b.pid-a.pid}).
        filter(task=>task.status == defaultTaskStatus).
        map((task,index)=><tr style={{backgroundColor: task.pid==3 ? 'tomato' : task.pid==2 ? 'lightgreen' : 'grey'}} key={index}>
          <td>{index+1}</td>
          <td>{task.title}</td>
          <td>{task.date}</td>
          <td>
            {priorityList.find(priority=>priority.id == task.pid).priority}
          </td>
          <td>
            {
            task.status=='active'?<button onClick={()=>changeTaskStatus('deactive',task.title)} className="btn btn-danger">Deactive</button>
            :<button onClick={()=>changeTaskStatus('active',task.title)} className="btn btn-danger">Active</button>
            }
          </td>
        </tr>)}
      </tbody>
    </table>
  </div>
}