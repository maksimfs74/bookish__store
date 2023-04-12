import React from "react";
import s from './Main.module.scss';
import Nav from './NavBar/Nav';
import Items from './Items/Items'
import Footer from "./Footer/Footer";
import Dropdown from "./Dropdown/Dropdown";
import { fetchData } from "../../redux/slices/DataSlice";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "./Skeleton/Skeleton";
const Main = () => {

   const [active, setActive] = React.useState(0);
   const list = [{ name: 'price', sortProperty: 'price' }, { name: 'rating', sortProperty: 'rating' }];
   const [drop, setDrop] = React.useState(0)

   const filterItem = list[drop].sortProperty
   const category = active > 0 ? `category=${active}` : ''; // this is future sorting
   const dispatch = useDispatch();
   const items = useSelector((state) => state.counterSlice.items);
   const Loading = useSelector((state)=>state.counterSlice.loading);
   console.log(Loading);
   React.useEffect(() => {
      dispatch(fetchData({
         category,
         filterItem
      }))
   }, [active, drop])
   return (
      <div className={s.main}>
         
         <div className={s.navmenu}>
            <Nav active={active} setActive={setActive} />
            <Dropdown drop={drop} setDrop={setDrop} />
         </div>
<div className={s.main__items}>
<h1 className={s.main__title}>All Books</h1>
       <div className={s.skeletons}>  {Loading && [... new Array(3)].map((_,index)=>{
            return <Skeleton key={index}></Skeleton> 
         })}
         <Items className={s.main__items} Users={items} /></div>
</div>
         
         <Footer />
      </div>
   );
}

export default Main;