import React from 'react'
import { useState, useEffect } from 'react'
import Form from './Form';
import List from './List';
const App = () => {
  const API_URL="https://jsonplaceholder.typicode.com/";
  const [reqType, setReqType]=useState('users');
  const [items,setItems]= useState([]);

  useEffect(()=>{
    const fetchReq=async()=>{
      try {
        const res= await fetch(`${API_URL}${reqType}`);
        if(!res.ok) throw new Error("there was an error")
        const data=await res.json();
        
        setItems(data);
        
      } catch (error) {
        console.log(error);
      }
    }
    fetchReq();
  },[reqType])
 
  return (
    <div className='App'>
      <Form 
      reqType={reqType}
      setReqType={setReqType}
      />
      <List
      items={items}
      />
    </div>
  )
}

export default App