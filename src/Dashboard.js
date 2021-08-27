import React,{useEffect, useState,useRef,useContext} from 'react';
import Filterboxbang from './Filterboxbang';
import Searchname from './Searchname';
import Topthree from './Topthree';
import Adspage from "./Adspage";
import {create} from "./App";
function Dashboard() {
   const{setNextpage,nextpage}=useContext(create);
    const[one,setOne]=useState(false);
   

       const rfcode=`${localStorage.getItem("username")}/HJVBKydiytdB/${localStorage.getItem("account")}/BoXaNg`;         
    const handlesearch=(e)=>{
        e.preventDefault();
        setOne(true);
        setNextpage(<div class="black-one">
          <Searchname />
        </div>)

    }
    const handlefilter=(e)=>{
        e.preventDefault();
        setOne(true);
        setNextpage(<div class="black-one">
          <Filterboxbang />
        </div>)
    }
    const handletop=(e)=>{
        e.preventDefault();
        setOne(true);
        setNextpage(<div class="black-one">
          <Topthree  />
        </div>)
    }
    const handlewithdraw=(e)=>{
        e.preventDefault();
  if(localStorage.getItem('username')&& localStorage.getItem('rfcode')){  
        alert(`Sorry ${localStorage.getItem("rfcode")}, this request is not available at the moment `)
    setAds(true);
  }else{
    alert(`Please generate your Refferal code first `)
    setAds(true); 
  }
        
    }
    const[ads,setAds]=useState(false);

    const handlerfcode=(e)=>{
        e.preventDefault();
        setAds(true);
        if(localStorage.getItem('account')&&localStorage.getItem('username')){
            localStorage.setItem("rfcode",rfcode)
        }else{
             alert(`PLease join boxang before any transaction `)
            setAds(true);  
        }
       
    }
    useEffect(()=>{
    setInterval(() => {
        if(localStorage.getItem("rfcode")){
            setAds(false);
        }
    }, 15000);
    },[ads])
    
    
    return (
        <div>
           {!one?<div>
               <div class="col-4" >
  <div class="innercontainer" >
      
      <h1>₦3000</h1>
      </div></div>
      <div class="withdraw"><ul>
          <li><span onClick={(e)=>handlewithdraw(e)}>Withdraw</span></li><hr/>
          <li><span onClick={(e)=>handlerfcode(e)}>Generate Refferal Code</span></li>          </ul></div>
         <div><hr/>
           {
              ! localStorage.getItem("rfcode")?
               <div><i>No Refferal Code Yet...</i></div>:<div>{ads?<div><Adspage/></div>:<div><small><i>Your Refferal Code is</i> : {localStorage.getItem("rfcode")}</small></div>}</div>
           }<hr/>
         </div>
          <div  class="form-container-one">
             <button class="btn" onClick={(e)=>handlesearch(e)}>Search for name on Boxang</button><br/>
             <button class="btn" onClick={(e)=>handlefilter(e)} >Filter Boxang</button><br/>
             <button class="btn" onClick={(e)=>handletop(e)}>Top 35 on Boxang</button><br/>
          </div></div>:<div>{nextpage}</div>}<div class="footer">
          <div class="container">
<div class="row">
<div class="footer-col-1">
<h3>Download our App</h3>
<p>Download App for Android  phone.</p>
<div class="app-logo">
<img src="./img/boxbangone.png" width="100%"/>

</div>
</div></div></div>
          <hr/>
<p class="copyright">
    &copy;Copyright 2021-Boxang</p>
</div>
        </div>
    )
}

export default Dashboard
