import React,{useState,useContext} from 'react';
import {create} from "./App";

function Admin() {
  const{datacreated,}=useContext(create);

    const[search,setSearch]=useState("");
 
    return (
        <div class="black-one">
            <div class="searche"><input value={search} id="text" type="text" placeholder="Please enter a username..." onChange={(e)=>setSearch(e.target.value)}/>
          </div>
          <br/>
          <br/>     
          <div>
              { datacreated.filter((lists)=>{
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
