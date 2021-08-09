import React,{useState,useRef,useEffect} from 'react'
import Piechat from './Piechart';
import io from 'socket.io-client';
const socket=io('http://loaclhost:4000');


const personpage=[];
const idpage=[];
function Searchname() {
    const[person,setPerson]=useState(0);
    const[counter,setCounter]=useState(0)
    const id =useRef(`${Date.now()}`);

    const[search,setSearch]=useState("");
     const arr=[{name:"chimdindu",account:"4567890",password:"12345",rf:"hEfhFVVFjVJjHVKhfBrhjJKfK"},
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
        <div>
             <i class="bi bi-arrow-left-circle-fill"></i>
            <div class="graph">
      <Piechat />
       </div>
            <div class="search"><input value={search} id="text" type="text" placeholder="Please enter your username..." onChange={(e)=>setSearch(e.target.value)}/><h1><span>Search</span></h1>
          </div>
          <br/>
          <br/>     
          <div>
              {arr.map(i=>
                <div class="listed">
                    <ul>
                        <li>{i.name}</li><br/>
                        <small><i>You are Verified on Boxang</i></small>
                    </ul>
                </div>)}
          </div>
        </div>
    )
}

export default Searchname
