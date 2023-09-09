 import React from 'react';
 import { useEffect, useState } from 'react';
 
 const Starting = () => {
    const [ hidden, setHidden ] = useState('flex');
    
    useEffect(() => {
        function hideLoading() {
            document.body.style.overflow = 'hidden';
      
            setTimeout(() => {
                setHidden('none');
                document.body.style.overflow = 'auto';
            }, 1500)
        }
        hideLoading();
    }, [])
   
   return (
    <div className="starting" style={{display: hidden}}>
        <img src="img/logo/rihis-final-logo.svg" alt="" />
        <img src="img/wall/roll.svg" alt="" />
    </div>
   )
 }
 
 export default Starting