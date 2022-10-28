
import './App.css';
import {useState} from 'react'

function App() {
  let [ToDos,setToDos]=useState([])
  let [ToDo,setToDo]=useState('')
 let remove=(id) =>{
  console.log(id);
  setToDos(ToDos.filter((item,index)=>id!==item.id))

 }

 console.log(ToDos);


 
return (
  <div className="app">
  <div className="mainHeading">
    <h1>ToDo List</h1>
  </div>
  <div className="subHeading">
    <br />
    <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
  </div>
  <div className="input">
    <input value={ToDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
    <i onClick={()=>setToDos([{value:ToDo,id:Date.now(),status:false},...ToDos])} className="fas fa-plus"></i>
  </div>
  <div style={{display:'flex'}}>
    
  
  <div className="todos">
    {ToDos.map((value,index)=>{
      return(
        <div key={index} className="todo">
        <div className="left">
          <input onClick={(e)=>{setToDos(ToDos.filter((item)=> { 
            if(item.id===value.id){
            console.log(e.target.checked);
             item.status=e.target.checked;
          }
          console.log(item.id);
          return item
          })
          )}
          } type="checkbox" name="" id="" />
          <p>{value.value}</p>
        </div>
        <div className="right">
          <i onClick={()=>remove(value.id)} className="fas fa-times"></i>
        </div>
      </div>
      )

    })}
   
  </div>
  <div>
    {ToDos.map((value)=>{
      if(value.status)
      {
        return (
        <p style={{background:"white"}}>{value.value}</p>
      )
    }
      
    })}
  </div>
  </div>
</div>
);
}

export default App;
