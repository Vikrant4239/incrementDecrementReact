import React, { useState,useEffect } from 'react'
import './style.css';

const UseState = () => {
    const initialData = 0;
    const [myNum,setmyNum]=useState(initialData)
    useEffect(()=>{
        document.title=`Chat(${myNum})`
    })

  return (
    <div>
      <div className='center_div'>
      <p>{myNum}</p>
      <div className='button2' onClick={()=> setmyNum(myNum+1)}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      INCREMENT

      </div>
      <div className='button2' onClick={()=>myNum>0?setmyNum(myNum-1):0}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      DECREMENT

      </div>

      </div>
    </div>
  )
}

export default UseState
