import React,{useState,useEffect,useRef} from 'react'
import Barchat from './Barchat';
import io from 'socket.io-client';
const socket=io('http://loaclhost:4000');

const incomepage=[];
const personpage=[];
const idpage=[];

function Filterboxbang() {
    
    const[search,setSearch]=useState("");
    const[counter,setCounter]=useState(0);
    const[person,setPerson]=useState(0);
    const[data,setData]=useState("");
    const[income,setIncome]=useState(0);
    const id =useRef(`${Date.now()}`);
   
  

   
     const arr=[{name:"chimdindu",account:"4567890",password:"12345",rf:"hEfhFVVFjVJjHVKhfBrhjJKfK"},
     {name:"chimdindu",account:"4567890",password:"12345",rf:"hEfhFVVFjVJjHVKhfBrhjJKfK"},
     {name:"chimdindu",account:"4567890",password:"12345",rf:"hEfhFVVFjVJjHVKhfBrhjJKfK"},
     {name:"chimdindu",account:"4567890",password:"12345",rf:"hEfhFVVFjVJjHVKhfBrhjJKfK"},
     {name:"chimdindu",account:"4567890",password:"12345",rf:"hEfhFVVFjVJjHVKhfBrhjJKfK"},
     {name:"chimdindu",account:"4567890",password:"12345",rf:"hEfhFVVFjVJjHVKhfBrhjJKfK"},
     {name:"chimdindu",account:"4567890",password:"12345",rf:"hEfhFVVFjVJjHVKhfBrhjJKfK"},
     {name:"chimdindu",account:"4567890",password:"12345",rf:"hEfhFVVFjVJjHVKhfBrhjJKfK"},
     {name:"chimdindu",account:"4567890",password:"12345",rf:"hEfhFVVFjVJjHVKhfBrhjJKfK"},
    {name:"chimdindu",account:"4567890",password:"12345",rf:"hEfhFVVFjVJjHVKhfBrhjJKfK"},
    {name:"chimdindu",account:"4567890",password:"12345",rf:"hEfhFVVFjVJjHVKhfBrhjJKfK"},
    {name:"chimdindu",account:"4567890",password:"12345",rf:"hEfhFVVFjVJjHVKhfBrhjJKfK"},
    {name:"chimdindu",account:"4567890",password:"12345",rf:"hEfhFVVFjVJjHVKhfBrhjJKfK"},
    {name:"chimdindu",account:"4567890",password:"12345",rf:"hEfhFVVFjVJjHVKhfBrhjJKfK"},
   

]

  
    return (
        <div><i class="bi bi-arrow-left-circle-fill"></i>
            <div class="graph">           <Barchat/>    
                   </div>
           
           <div class="search"><input value={search} id="text" type="text" placeholder="Please enter your Refferal Code..." onChange={(e)=>setSearch(e.target.value)}/><h1><span>Search</span></h1>
          </div>
          <br/>
          <br/>
          <div>
              { arr.filter((lists)=>{
     if(search==""){return lists}else if(lists.rf.toLowerCase().includes(search.toLowerCase())){return lists}
   }).map(i=>
                <div class="listed-one">
                    <ul>
                        <li>{i.rf}</li><small><i>456</i></small>
                    </ul>
                </div>)}
          </div>
        </div>
    )
}

export default Filterboxbang
