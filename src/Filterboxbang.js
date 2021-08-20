import React,{useState,useEffect,useContext} from 'react'
import Barchat from './Barchat';
import {create} from "./App";
import Dashboard  from './Dashboard';



function Filterboxbang() {
    const{datacreated}=useContext(create);

    const {setNextpage}=useContext(create);
    const[search,setSearch]=useState("");
    const handleback=(e)=>{
        setNextpage(<div><Dashboard/></div>)
      }
   const doshow=()=>{
     localStorage.setItem("dye","dont show");
   }
  

   


  
    return (
        <div><div class="left-1"><span onClick={(e)=>handleback(e)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
      </svg></span></div>
            <div class="graph">           <Barchat/>  <hr/>  
            {
!localStorage.getItem("dye")?<div>
 <small>This Line graph 
             estimate the  income you produce and helps you estimate the time you have stayed on boxang.</small>
              <br/><a class="a" onClick={()=>doshow()}><small>Don't show me this again</small></a> </div>:<div><small>...</small></div>
  
  }</div>
           
           
           <div class="search"><input value={search} id="text" type="text" placeholder="Please enter your Refferal Code..." onChange={(e)=>setSearch(e.target.value)}/><h1><span>Search</span></h1>
          </div>
          <br/>
          <br/>
          <div>
              { datacreated.filter((lists)=>{
     if(search==""){return lists}else if(lists.rfcode.toLowerCase().includes(search.toLowerCase())){return lists}
   }).map(i=>
                <div class="listed-one">
                    <ul>
                        <li>{i.rfcode}</li><small><i>{datacreated.filter(x=>x.rfcode===i.rfcode).length}</i></small>
                    </ul>
                </div>)}
          </div>
        </div>
    )
}

export default Filterboxbang
