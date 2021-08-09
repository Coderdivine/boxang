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
    useEffect(() => {
        socket.on("connection",({id,person,income})=>{
            if(id.current!==id){
               // setData(person)
                 personpage.push(person)
                idpage.push(id)
                incomepage.push(income)
            }
           
              
        })
    }, [])

   
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

    const get=()=>{
        
         setCounter(counter++);
        setPerson(person++);

     if(counter===30000){
        socket.emit("message",{id:id.current,person:person,income:income})
     }else if(counter===60000){
        socket.emit("message",{id:id.current,person:person,income:income})

     
    }else if(counter===120000){
        socket.emit("message",{id:id.current,person:person,income:income})

     
    }else if(counter===2400000){
        socket.emit("message",{id:id.current,person:person,income:income})

     
    }else if(counter===300000){
        socket.emit("message",{id:id.current,person:person,income:income})

     
    }else if(counter===600000){
        socket.emit("message",{id:id.current,person:person,income:income})

     
    }else if(counter===1200000){
        socket.emit("message",{id:id.current,person:person,income:income})

     
    }else if(counter===2400000){
        socket.emit("message",{id:id.current,person:person,income:income})
           }else if(counter===3600000){
        socket.emit("message",{id:id.current,person:person,income:income})

     
    }

    }
    useEffect(() => {
        get()
    }, [])
    return (
        <div><i class="bi bi-arrow-left-circle-fill"></i>
            <div class="graph">           <Barchat data={incomepage} income={incomepage} person={personpage}/>    
                   </div>
            {counter}{person}{income}
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
