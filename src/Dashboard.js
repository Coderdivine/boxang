import React,{useEffect, useState,useRef,useContext} from 'react';
import Filterboxbang from './Filterboxbang';
import Searchname from './Searchname';
import Topthree from './Topthree';
import Adspage from "./Adspage";
import {create} from "./Homepage";
function Dashboard(props) {
    const listed=props.list;
    const[one,setOne]=useState(false);
    
    const[person,setPerson]=useState(0);
    const[income,setIncome]=useState(0);
    const id =useRef(`${Date.now}`);
    const[nextpage,setNextpage]=useState(<div class="balck-one">...</div>);
       const rfcode=`${localStorage.getItem("username")}/HJVBKydiytdB/${localStorage.getItem("account")}/BoXaNg`;         
    const handlesearch=(e)=>{
        e.preventDefault();
        setOne(true);
        setNextpage(<div class="black-one">
          <Searchname list={listed}/>
        </div>)

    }
    const handlefilter=(e)=>{
        e.preventDefault();
        setOne(true);
        setNextpage(<div class="black-one">
          <Filterboxbang list={listed}/>
        </div>)
    }
    const handletop=(e)=>{
        e.preventDefault();
        setOne(true);
        setNextpage(<div class="black-one">
          <Topthree list={listed} />
        </div>)
    }
    const handlewithdraw=(e)=>{
        e.preventDefault();
  if(localStorage.getItem('username')&& localStorage.getItem('rfcode')){  
        alert(`${localStorage.getItem("rfcode")} `)
    setAds(true);
  }else{
    alert(`PLease generate your Refferal code first `)
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
    const handleback=(e)=>{
        e.preventDefault();
        window.location="./Dashboard";
    }
    
    return (
        <div>
           {!one?<div><div class="left-1"><span onClick={(e)=>handleback(e)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
         <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
       </svg></span></div>
               <div class="col-4" >
  <div class="innercontainer" >
      
      <h1>₦3000</h1>
      </div></div>
      <div class="withdraw"><ul>
          <li><span onClick={(e)=>handlewithdraw(e)}>Withdraw</span></li><hr/>
          <li><span onClick={(e)=>handlerfcode(e)}>Generate Refferal Code</span></li>          </ul></div>
         <div>
           {
              ! localStorage.getItem("rfcode")?
               <div><i>No Refferal Code Yet...</i></div>:<div>{ads?<div><Adspage/></div>:<div><small><i>Your Refferal Code is</i> : {localStorage.getItem("rfcode")}</small></div>}</div>
           }
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
