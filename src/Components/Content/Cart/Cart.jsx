import React from 'react';
import s from './Cart.module.scss'; 
import trash from '../../../Photos/trash.svg'
import dtrash from '../../../Photos/dtrash.svg'
import CartItem from './CartItem/CartItem';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeItems } from '../../../redux/slices/CartSlice';
import PayPopup from './PayPopup/PayPopup';

const Cart = () =>{
const dispatch = useDispatch();
   const Items = useSelector(((state)=> state.CartSlice.items));
   const Count  = useSelector((state)=> state.CartSlice.count);
   const[isShowed, setIsShowed] = React.useState(false);
   return(
      <div className={s.cart}>
         { Count>0 ?
        ( <div className={s.cart__container}>
         <header className={s.cart__header}>
         <div className={s.img__box}>
            <img className={s.img} src={trash} alt="" />
            <h4 className={s.header__title}>Shopping Cart</h4>
         </div>
         <div onClick={()=>dispatch(removeItems())} className={s.secondcard__header}>
            <img src={dtrash} alt="" className={s.header__img} />
            <p className={s.header__text}>Clean out the shopping cart</p>
         </div>
      </header>
      <main className={s.main}>
         {
            Items.map((el,index)=>{
               return <CartItem key={index} {...el} >{el}</CartItem>
            })
         }
      </main>
      <footer className={s.footer}>
         <div className={s.footer__text}>
<h4 className={s.footer__texttitle}>Your count: <span> {Count}p</span></h4>
         </div>
         <div className={s.footer__btns}>
         <NavLink to='/'>
         <button className={s.button}>return back</button>
         </NavLink>

{/* <button onClick={()=>setIsShowed(!isShowed)} className={s.button} >pay now</button> */}
         </div>
      </footer>
         </div>) : (<div>Your shopping cart is empty</div>)
}
{/* {
   isShowed && <div className={s.popup}>
      < PayPopup />
   </div> 
} */}

      </div>
      
   );
}
export default Cart;