import React from "react";
import s from './Input.module.scss';
import search from '../../Photos/search.svg'

const Input = () => {
const [value,setValue] = React.useState('')   
const onInputChange = (e) =>{
   setValue(e.target.value)
}

   return (
      <div className={s.input__box}>
         <input value={value} onChange={(e)=>onInputChange(e)} className={s.input} type="text" />
         <img className={s.input__img} src={search} alt="" />
      </div>
   );
}

export default Input;