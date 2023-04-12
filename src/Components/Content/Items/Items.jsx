import React from 'react';
import s from './Items.module.scss';
import Item from './Item/Item'

const Items = ({Users}) => {

   return (
      <div   className={s.items}>
        {
         Users.map((el,index)=>{
            return <Item key={index} {...el} >{el}</Item > 
         })
        }
      </div>
   );
}

export default Items;