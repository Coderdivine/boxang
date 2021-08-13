import React,{useState,useContext,useEffect} from 'react';
import Adspage from './Adspage';
import Dashbaord from './Dashboard';
import Admin  from './Admin';
import Home from './Home';
import {Axios} from "./Contact";
import {create} from "./App";
 
function Homepage() {
    const{datacreated,setDatacreated,one,setOne}=useContext(create);
    const[name,setName]=useState("");
    const[pass,setPass]=useState("")
    const[load,setLoad]=useState(true);
   const[change,setChange]=useState(true);
   const[username,setUsername]=useState("");
   const[account,setAccount]=useState("")
   const[password,setPassword]=useState("");
   const[rfcode,setRfcode]=useState("");
  
   const [fa,setFa]=useState(false);
   const[counter,setCounter]=useState(0);
   const[counterlive,setCounterlive]=useState(true);

   useEffect(() => {
       if(counterlive){
  const timeinterval=setTimeout(() => {
      setCounter(counter+1);
  },1000);
       
       return () => {
          clearInterval(timeinterval)
       }}
   }, [counter,counterlive])
   useEffect(() => {
       setInterval(() => {
          setChange(false); 
       }, 3000);
   }, [])
   useEffect(() => {
       const localcounter=localStorage.setItem('counter',counter);
       if(localcounter){
           setCounter(localcounter);
       }
       
   }, [counter])
   const handleDashboard=(e)=>{
       setLoad(false);
       
       setOne(<div class="black"><Dashbaord /></div>);
   }
   const handleDash=(e)=>{
       if(name==="ikboxang123" && pass==="ikboxangasdasd"){
    setLoad(false);
    setOne(<div class="black"><Admin /></div>);}
}
 const  handleJoin=async(e)=>{
     e.preventDefault();
     localStorage.setItem('username',username)
     localStorage.setItem('account',account)
const res={
    
    name:username,
    accno:account,
    password:password,
    rfcode:rfcode
}
const resq=await Axios.post("/create",res).then((response)=>{
    console.log("success")
}).then(()=>{alert("success")});
if(resq)getdata()
    
}
const getdata=async()=>{
    
    
    const resq=await Axios.get("/employee").then((response)=>{
        console.log("success")
    })
    if(resq && resq.data)
    setDatacreated(resq.data)
        
}
useEffect(() => {
   getdata();
}, [])
const handlefa=(e)=>{
    setFa(true);
}
    return (
        <div>{load?<div>
            {change?<div>
            <Home/>
            </div>
            :<div>
                <div class="inner-container">
            <div class="row" >
            <div class="col-2" >
               
            <h1>Welcome To <br/>Boxang !
</h1><br/>
              <button class="btn" onClick={(e)=>handleDashboard(e)}><h2>View Dashboard</h2></button>

            </div>
            <div class="col-2" >
            <div class="inner-container" > 
             </div>
            </div>
            </div>
            </div>
            
  <div class="container">
  <div class="row">
  <div class="col-2" >
   </div>
   <div class="col-2" >
     <div class="form-container">
     <div class="form-btn" >
     <span onclick="login()">Join</span>
      <hr id="Indicator"/>
     </div>
      <form id="Loginform" onSubmit={(e)=>handleJoin(e)}>
     <input type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
     <input type="text" placeholder="Account Number" onChange={(e)=>setAccount(e.target.value)}/>
      <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
      <input type="text" placeholder="Referral Code" onChange={(e)=>setRfcode(e.target.value)}/>

      <button type="submit" class="btn">Join</button>
      
     </form>
     </div>
     </div>
     </div>
     <br/>
    
     <div class="faq">
         <h1><span onClick={(e)=>handlefa(e)}>FAQ's</span></h1>
         <div>{!fa?<div></div>:<div>
            <p>
        
        How to use Boxang ?<br/>
        Thanks for choosing Boxang.
        To start with, what is Boxang?<br/>
         Boxang is a service created to
        pay individual that has the must shared refferal code everymonth,
        at the end of everymonth Boxang pays the to 35  must shared refferal on Boxang
        and all refferal gets deleted to level Competition for everyone .<br/>
            <h> How To Use Boxang</h><br/>
          Once your page is done loading,
        and you haven't join Boxang you are just a visitor
        ,you have to enter your name ,account Number,
        Password ,and a refferal code not yours.
        When you join wait for 3minute then go to dashboard and click on 'search for name on Boxang' ,then search for your name. <br/>If your name is avaliable
        that means you are verified on boxang
        else your are not verified you just have to wait or try again
        .<br/>
            <h> Different Pages on Boxang</h><br/>
            <ul><li>Dashboard:<br/> This page is used to access a lot of things on boxang,you would 
        be given a sum of 3000naira as a const value on boxang 
        Note: The only time you can withdraw you have to meet up with the following requirements.</li>
        <li>Generate Refferal code:<br/> you can only generate RF code once.</li>
        <li>Search for name on boxang :<br/>
        search for name on boxang allows you to know if your verified on boxang or not
        and also shows you the percentage of people that visit the site every day.</li>
        <li>Filter Boxang:<br/> This page allows you check how many times your refferal code has been used on boxang. This page also comes with a graph that shows the percentage of people against their income.At the end of everymonth, 
        60% is shared to the to 35 on boxang.</li>
        <li>Top 35 on Boxang:<br/>
        This page shows or countdown the days remaining and also give feedback images.
        It also shows top 35 Refferal code on Boxang.</li>
        </ul>
        Note: 
        Every month all refferal code would be deleted form the database
        to level competiton in Boxang.
        
                </p>
             </div>}</div>
  
     </div>
<div class="footer">
<div class="container">
<div class="row">
<div class="footer-col-1">
<h3>Download our App</h3>
<p>Download App for Android  phone.</p>
<div class="app-logo">
<img src="./img/boxbangone.png" width="100%"/>
</div></div>
<div class="admin">
        <input value={name} onChange={(e)=>setName(e.target.value)}/>
        <input value={pass} onChange={(e)=>setPass(e.target.value)}/>
        <button onClick={(e)=>handleDash(e)}>A</button>
</div>
<div class="footer-col-2">
   <img/> 
</div>


</div>
<hr/>
<p class="copyright">
    &copy;Copyright 2021-Boxang. All rights reserved.</p>
</div>
</div>
     </div>
          </div>
            }</div>
           :<div>{one}</div>}
        </div>
    )
}

export default Homepage;
