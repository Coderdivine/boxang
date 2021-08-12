import React,{createContext,useEffect,useState,useRef} from 'react'
import './App.css';
import Homepage from './Homepage';
export const create=createContext();
function App() {
  const counter=localStorage.getItem('counter')?localStorage.getItem('counter'):0;
  const id =useRef(`${Date.now()}`);
  const[person,setPerson]=useState(0);
  const[income,setIncome]=useState(0);
  const[persondata,setPersondata]=useState([45,67,44,35,1,4,5]);
  const[incomedata,setIncomedata]=useState([5,78,3,45,65,43,34]);
  const[iddata,setIddata]=useState(['1','2','3','4','5','6','7']);
  const[nextpage,setNextpage]=useState(<div class="balck-one">...</div>);

  useEffect(() => {
           
            
    const timeinterval=setTimeout(() => {
        setPerson(person+1);
        setIncome(income+1);
    },1000);
         
         return () => {
            clearInterval(timeinterval)
         }
     }, [person,income]);
     const[datacreated,setDatacreated]=useState([{
        id:1,
        name:"username",
        accno:"account",
        password:"password",
        rfcode:"rfcode"
    },{
        id:2,
        name:"username",
        accno:"account",
        password:"password",
        rfcode:"rfcode"
    },{
        id:3,
        name:"username",
        accno:"account",
        password:"password",
        rfcode:"rfcode"
    },{
        id:1,
        name:"username",
        accno:"account",
        password:"password",
        rfcode:"rfcode"
    },{
        id:2,
        name:"username",
        accno:"account",
        password:"password",
        rfcode:"rfcode"
    },{
        id:3,
        name:"username",
        accno:"account",
        password:"password",
        rfcode:"rfcode"
    }]) 
     useEffect(() => {
        
      if(counter==30){
          getUpdate()
      }else if(counter==60){
          getUpdate()
      }else if(counter==120){
          getUpdate()
      }else if(counter==200){
          getUpdate()
      }else if(counter==240){
          getUpdate()
      }else if(counter==300){
          getUpdate()
      }else if(counter==360){
          getUpdate()
      }else if(counter==420){
          getUpdate()
      }
      else if(counter==480){
          getUpdate()
      }else if(counter==600){
          getUpdate()
      }else if(counter==700){
          getUpdate()
      }else if(counter==720){
          getUpdate()
      }else if(counter==900){
          getUpdate()
      }else if(counter==900){
          getUpdate()
      }else if(counter==1020){
          getUpdate()
      }else if(counter==1800){
          getUpdate()
      }else if(counter==2700){
          getUpdate()
      }else if(counter==3600){
          getUpdate()
          setIncomedata([]);
          setPersondata([])
          setIddata([]);
      }
  }, [counter]);
  const getUpdate=()=>{
    setIddata([...iddata,id.current]);
    setPersondata([...persondata,person]);
    setIncomedata([...incomedata,income]);
    localStorage.setItem('data',JSON.stringify(persondata));
    localStorage.setItem('dataincome',JSON.stringify(incomedata));
    localStorage.setItem('dataid',JSON.stringify(iddata));

} 
useEffect(() => {
  const localcounter=    localStorage.setItem('data',JSON.stringify(persondata));
      if(localcounter){
          setPersondata(localcounter);
      }
      
     }, [persondata]); 
     useEffect(() => {
   const localcounter=   localStorage.setItem('dataincome',JSON.stringify(incomedata));
   if(localcounter){
      setIncomedata(localcounter);
  }
  
  }, [incomedata]);
       useEffect(() => {
      const localcounter= localStorage.setItem('dataid',JSON.stringify(iddata));
          if(localcounter){
              setIddata(localcounter);
          }
          
       }, [iddata])
       const[one,setOne]=useState(<div>...</div>);
  return (
    <div>
      <create.Provider value={{setPerson,setIncome,person,income,counter,persondata,incomedata,iddata,setPersondata,setIncomedata,setIddata,setNextpage,nextpage,datacreated,setDatacreated,one,setOne}}>
       <Homepage/>
    </create.Provider>
      
    </div>
  )
}

export default App

