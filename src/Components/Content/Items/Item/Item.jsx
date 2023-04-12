import React from 'react';
import s from './Item.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { countPrice } from '../../../../redux/slices/CartSlice';
import { useNavigate } from 'react-router-dom';
const Item = ({name,imageUrl,id,price}) =>{
   const router = useNavigate();
   const dispatch = useDispatch();
   const cartItem = useSelector(((state)=>  state.CartSlice.items.find(obj=>obj.id === id)))
   const addItem = cartItem? cartItem.addCount : 0;
const onButtonClick = (e) =>{
   e.stopPropagation();
   const item = {
      id,
      name,
      price,
      imageUrl,
   }
   dispatch(countPrice(item));
}

   return(
      <div onClick={()=>router(`/item/${id}`)} className={s.item}>
         <img className={s.item__img} src={imageUrl} alt="" />
         <h3 className={s.item__title}>{name}</h3>
         <p className={s.item__description}>No description</p>
         <p className={s.item__description}>{price}</p>
         <button className={s.button} onClick={(e)=>onButtonClick(e)}> add{addItem>0 &&<i>{addItem}</i> }</button>
      </div>
   );
}

export default Item;