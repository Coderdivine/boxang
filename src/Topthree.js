import React,{useState} from 'react'

function Topthree() {
    
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
         <div><div class="col-35" ><div class="left-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
         <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
       </svg></div>
<h1>Top 35 on Boxang</h1><br/>

        </div>
         
          <br/>
          <br/>
          <div>
              {arr.map(i=>
                <div class="listed-one">
                    <ul>
                        <li>{i.rf}</li><small><i>456</i></small>
                    </ul>
                </div>)}
          </div>
        </div>
    )
}

export default Topthree
