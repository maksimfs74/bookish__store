import React from "react";
import s from './CartItem.module.scss';
import { useSelector, useDispatch } from 'react-redux'
import { removeElement,removeItem,countPrice } from "../../../../redux/slices/CartSlice";
import { useNavigate } from 'react-router-dom';

const CartItem = ({name, imageUrl,id,price}) => {
   const router = useNavigate();
   const dispatch = useDispatch();
   const cartItem = useSelector(((state)=>  state.CartSlice.items.find(obj=>obj.id === id)))
   const addItem = cartItem? cartItem.addCount : 0;
   
   return (
      <div className={s.container}>
         <div onClick={()=>router(`/item/${id}`)} className={s.img__section}>
            <img className={s.img} src={imageUrl} alt="" />
            <div className={s.img__text}>
               <h5 className={s.img__texttitle}>{name}</h5>
               <p className={s.img__textdescription}>description</p>
            </div>
         </div>
         <div className={s.buttons__section}>
            <button onClick={() => dispatch(removeElement({id}))} className={s.btn}>minus</button>
            <p>{addItem}</p>
            <button onClick={() => dispatch(countPrice({id}))}  className={s.btn}>plus</button>
         </div>
         <div className={s.price__section}>
            <h5 className={s.price__value}><span>{price}</span></h5>
            <button onClick={() => dispatch(removeItem({id}))}  className={s.btn}>delete</button>
         </div>

      </div>
   );
}

export default CartItem;