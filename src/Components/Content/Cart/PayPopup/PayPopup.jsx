import React from 'react';
import s from './PayPopup.module.scss';
import { useSelector } from 'react-redux';

const PayPopup = () =>{
   const count = useSelector((state)=> state.CartSlice.count)
   
   return(
      <div className={s.popup}>
         <h3 className={s.popup__title}>Here is your total count</h3>
         <p className={s.popup__result}>{count}p</p>
      </div>
      );
}

export default PayPopup;