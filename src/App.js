import s from './App.module.scss';
import Header from './Components/Header/Header'
import Main from './Components/Content/Main'
import Cart from './Components/Content/Cart/Cart';
import { Route, Routes } from 'react-router-dom';
import Error from './Components/Content/Error/Error';
import PostIdPage from './Components/Content/PostPageId/PostPageId';
function App() {
  return (
    <div className={s.app}>
      <Header />
      <Routes>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/" element={<Main />} />
        <Route path="/Error" element={<Error />} />
        <Route path='item/:id' element={<PostIdPage />} />
      </Routes>
    </div>
  );
}

export default App;
