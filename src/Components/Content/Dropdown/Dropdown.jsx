import React from "react";
import s from './Dropdown.module.scss';

const Dropdown = ({drop,setDrop}) => {

   const list = ["Price", "Rating"];
   const [open, setOpen] = React.useState(false);

   const onLiClick = (index) => {
      setDrop(index);
      setOpen(false);
   }
   const listValue = list[drop];
   const filterRef = React.useRef();
   React.useEffect(()=>{
      const handleOutside = (event) =>{
            if(!event.composedPath().includes(filterRef.current)){
               setOpen(false);
            }
      };
      document.body.addEventListener('click', handleOutside);
      
      return () =>{
         document.body.removeEventListener('click',handleOutside);
      }
      
         },[])

   return (
      <div className={s.dropdown}>
         <div ref={filterRef} className={s.dropdown__block}>
            <p className={s.dropdown__p} onClick={() => setOpen(!open)}>Sort by:</p> <span className={s.dropdown__value}> {listValue}</span>
            <div className={s.menu}>
            <ul className={s.ul}>
               {
                  open && (
                     list.map((el, index) => {
                        return <li  onClick={() => onLiClick(index)} className={drop === index ? `${s.active}` : `${s.li}`} key={index} >{el}</li>
                     }))
               }
            </ul>
         </div>
         </div>
      </div>
   )
}

export default Dropdown;