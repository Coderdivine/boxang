import React,{useEffect,useState} from 'react'

function Admin(props) {
  const listed =props.list;
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
        <div class="black-one"><div class="left-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
      </svg></div>
            <div class="searche"><input value={search} id="text" type="text" placeholder="Please enter a username..." onChange={(e)=>setSearch(e.target.value)}/>
          </div>
          <br/>
          <br/>     
          <div>
              { listed.filter((lists)=>{
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
