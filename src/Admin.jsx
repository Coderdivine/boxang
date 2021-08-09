import React,{useEffect,useState} from 'react'

function Admin() {
    const[search,setSearch]=useState("");
     const arr=[{name:"chimdindu",account:"4567890",password:"12345",rf:"hEfhFVVFjVJjHVKhfBrhjJKfK"},
     {name:"sam",account:"4567890",password:"12345",rf:"hEfhFVVFjVJjHVKhfBrhjJKfK"},
     {name:"semi",account:"4567890",password:"12345",rf:"hEfhFVVFjVJjHVKhfBrhjJKfK"},
     {name:"avatar",account:"4567890",password:"12345",rf:"hEfhFVVFjVJjHVKhfBrhjJKfK"},
     {name:"alex",account:"4567890",password:"12345",rf:"hEfhFVVFjVJjHVKhfBrhjJKfKJjHVKhfBrhjJKfK"},
     {name:"jp",account:"4567890",password:"12345",rf:"hEfhFVVFjVJjHVKhfBrhjJKfK"},
     {name:"odogwu",account:"4567890",password:"12345",rf:"hEfhFVVFjVJjHVKhfBrhjJKfK"},
     {name:"black-x",account:"4567890",password:"12345",rf:"hEfhFVVFjVJjHVKhfBrhjJKfK"},
     {name:"daddyo",account:"4567890",password:"12345",rf:"hEfhFVVFjVJjHVKhfBrhjJKfK"},
     
    ]
    return (
        <div class="black-one"><i class="bi bi-arrow-left-circle-fill"></i>
            <div class="searche"><input value={search} id="text" type="text" placeholder="Please enter a username..." onChange={(e)=>setSearch(e.target.value)}/>
          </div>
          <br/>
          <br/>     
          <div>
              { arr.filter((lists)=>{
     if(search==""){return lists}else if(lists.name.toLowerCase().includes(search.toLowerCase())){return lists}
   }).map(i=>
                <div class="lists">
                     <li>Name: {i.name}</li><br/><h2><i>Account Number: {i.account}</i></h2><br/>
                     <li>Password: {i.password}</li><br/><h>Refferal Code: <i><small>{i.rf}</small></i></h>
                       <br/> <small><i>Is Verified on Boxang</i></small>
                    
                </div>)}
          </div>
        </div>
    )
}

export default Admin
