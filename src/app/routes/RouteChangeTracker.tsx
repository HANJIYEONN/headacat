// import React, { useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from 'src/store/store';
// import LoginInitialize from '../pages/auth/LoginInitialize';
// import { publicRoutes } from './allRoutes';

// const RouteChangeTracker = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const userInfo = useSelector((state: RootState) => state.auth.userInfo);

//   useEffect(() => {
//     const restrictedRoutes: string[] = ['/', '/login'];
//     const menuRoutes: string[] = [];
//     publicRoutes.forEach((route) => {
//       menuRoutes.push(route.path);
//     });

//     if (!menuRoutes.includes(location.pathname)) {
//       navigate('/error');
//     }

//     //login したらログイン画面に行かないようにする
//     if (restrictedRoutes.includes(location.pathname)) {
//       navigate(userInfo?.email ? '/myPage' : '/login');
//     }
//   }, []);

//   return null;
// };

// export default RouteChangeTracker;
