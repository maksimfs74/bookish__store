import React from 'react';
import { useParams } from 'react-router-dom';
import s from './PostPageId.module.scss'
import axios from 'axios';


const PostIdPage = () =>{
   const [item,setItem] = React.useState({});
   const { id } = useParams();

   React.useEffect(()=>{
async function fetchItems(){
   try{
      const {data} = await axios.get('https://638ac08681df38ab345ad996.mockapi.io/items/' + id)
      setItem(data);
   }catch(error){
      alert('Error while try get items');
      console.warn(error);
   }
}
fetchItems();
   },[])
   
   return(
      <div className={s.content}>
         <h2 className={s.content__title} onClick={()=>console.log(item)}>You opened the book's page with ID  = {id}</h2>
      <img  src={item.imageUrl} />
      <h3 className={s.content__title}> {item.name}</h3>
      <p className={s.content__title}>{item.description}</p>
      </div>
   );
}

export default PostIdPage;