import React,{useState,useRef,useEffect} from 'react'
import Piechat from './Piechart';





function Searchname(props) {
    const listed =props.list;
    const counter=localStorage.getItem('counter')?localStorage.getItem('counter'):0;
    const[person,setPerson]=useState(0);
    const[income,setIncome]=useState(0);
    const[persondata,setPersondata]=useState([45,67,44,35,1,4,5]);
    const[incomedata,setIncomedata]=useState([5,78,3,45,65,43,34]);
    const[iddata,setIddata]=useState(['1','2','3','4','5','6','7']);
    const id =useRef(`${Date.now()}`);
    const[search,setSearch]=useState("");
    
             const handleback=(e)=>{
                 e.preventDefault();
                 window.location="./Dashboard";
             }
       
        useEffect(() => {
           
            
       const timeinterval=setTimeout(() => {
           setPerson(person+1);
           setIncome(income+1);
       },1000);
            
            return () => {
               clearInterval(timeinterval)
            }
        }, [person,income])
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
    }, [counter])
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
       
return (
        <div>
             <div class="left-1"><span onClick={(e)=>handleback(e)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
         <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
       </svg></span></div>
       <small>{counter}</small><br/>
       <small>{person}</small><br/>
       <small>{income}</small>
            <div class="graph">
      <Piechat data={persondata} />
       </div>
            <div class="search"><input value={search} id="text" type="text" placeholder="Please enter your username..." onChange={(e)=>setSearch(e.target.value)}/><h1><span>Search</span></h1>
          </div>
          <br/>
          <br/>     
          <div>
              {listed.map(i=>
                <div class="listed">
                    <ul>
                        <li>{i.name}</li><br/>
                        <small><i>You are Verified on Boxang</i></small>
                    </ul>
                </div>)}
          </div>
        </div>
    )
}

export default Searchname
