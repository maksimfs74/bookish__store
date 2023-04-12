import React from 'react';
import s from './Header.module.scss';
import photo from '../../Photos/book-bookmark.svg'
import { NavLink } from 'react-router-dom';
import Input from '../../UI/Input/Input';
import { useSelector } from 'react-redux';
const Header = () => {
   const Count  = useSelector((state)=> state.CartSlice.count);
   const allItems = useSelector(((state)=>  state.CartSlice.allItems));
   return (
      <div className={s.header}>
         <nav className={s.header__nav}>
            <NavLink className={s.link} to='/'><div className={s.header__logo}>
               <div className={s.header__photo}><img className={s.header__img} src={photo} alt="" /></div>
               <div className={s.header__text}>
                  <h3 className={s.header__title}>Bokish Store</h3>
                  <p className={s.header__description} > You'll find book for your soul</p>
               </div>
            </div>
            </NavLink>
            {/* <Input /> */}
            <NavLink to='/Cart'>
               <button className={s.button}>
                  <span className={s.first__value}>{Count}p</span>
                  <span className={s.second__value}>{allItems}</span>
               </button>
            </NavLink>
         </nav>
      </div>
   );
}

export default Header;