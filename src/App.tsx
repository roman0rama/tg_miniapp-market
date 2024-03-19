import { useEffect, useState } from 'react';
import { useInitData, useMiniApp } from '@tma.js/sdk-react';
import React from 'react'
import "./App.css";
import { Route, Routes, Outlet } from 'react-router-dom';
import { Categories, Home, Liked, Basket, Cabinet, Product, SelectedCategory, Reviews } from './pages';
import { Header } from './components/header/Header';
import { getUserAvatarURL } from './features/telegram/getPhoto';
import HomeLoader from './shared/ui/loaders/HomeLoader';
import { validateUser } from './api/user';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './features/redux/store';
import { fetchCategoriesAsync } from './features/redux/category/categorySlice';
import { fetchProductsAsync } from './features/redux/product/productSlie';
import { fetchReviewsAsync } from './features/redux/reviews/reviewsSlice';

function App() {
  const miniApp = useMiniApp();
  const initData = useInitData();
  const [userAvatar, setAvatar] = useState('')

  const loaded = useSelector((state: RootState) =>
    state.category.loading &&
    state.reviews.loading &&
    state.products.loading
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    miniApp.ready();
  }, [miniApp]);

  useEffect(() => {
    getUserAvatarURL(initData?.user.id)
      .then(avatarURL => {
        if (avatarURL) {
          setAvatar(avatarURL)
        } else {
          console.log("Аватар пользователя не найден.");
        }
      })
      .catch(error => {
        console.error("Произошла ошибка при получении аватара пользователя:", error);
      });
  }, [miniApp]);

  useEffect(() => {
    const fetchData = async () => {
      await validateUser({ id: initData?.user.id, fullName: (initData?.user.firstName + initData?.user.lastName) });
      dispatch(fetchCategoriesAsync());
      dispatch(fetchReviewsAsync());
      dispatch(fetchProductsAsync());
    };
    fetchData()
  }, [miniApp]);

  return (
      <div>
        {
          loaded ? (
            <HomeLoader/>
          ) : (
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='cabinet' element={<Cabinet name={initData?.user.firstName} avatar={userAvatar}/>} />
                <Route path='categories' element={<Categories />} />
                <Route path='categories/:categoryName' element={<SelectedCategory />} />
                <Route path='product/reviews/:productId' element={<Reviews />} />
                <Route path='liked' element={<Liked />} />
                <Route path='basket' element={<Basket />} />
                <Route path='product/:productId' element={<Product />} />
                <Route path='*' element={<div>Error</div>} />
              </Route>
            </Routes>
          )
        }
      </div>
  );
}

function Layout() {
  const initData = useInitData();

  return (
    <div>
      <Header name={initData?.user.firstName}/>
      <Outlet />
    </div>
  );
}

export default App;
