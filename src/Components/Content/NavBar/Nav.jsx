import React from "react";
import s from './Nav.module.scss'; 

const Nav = ({active, setActive}) =>{

   let items = ["All","Nonfiction", "Utopies","Scienth","Religions"];
   const onNavbarItemClick = (index) =>{
      setActive(index)
   }
   return(
   <div>
      <nav className={s.navbar}>
      {
         items.map((el,index)=>{
            return <div onClick={()=>onNavbarItemClick(index)} className={index === active ? `${s.active}` : `${s.navbar__item}` } key={index} >{el}</div>
         })
      }
      </nav>
   </div>
   );
}

export default Nav;