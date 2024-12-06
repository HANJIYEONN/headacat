import React, {Suspense} from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import PageLoader from './PageLoader';
// import BaseLayout from '../layout/BaseLayout';
// import RouteChangeTracker from 'src/routes/RouteChangeTracker';
import {publicRoutes} from './allRoutes';
import BasePage from '../layout/BasePage';
// import BasePage from 'src/layout/BasePage';
// import Login from 'src/pages/auth/Login';
// import PageNotFound from 'src/pages/error/PageNotFound';

const noLayoutPages = ['/login', '/logout', '/error'];

const BaseRoutes = () => {
  const nodeRef = React.useRef(null);
  const location = useLocation();
  const currentKey = location.pathname.split('/')[1] || '/';
  const timeout = {enter: 500, exit: 500};

  // RouteChangeTracker();

  if (noLayoutPages.indexOf(location.pathname) > -1) {
    return (
      <BasePage>
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            {/* ({location.pathname === '/error'} ?
            <Route path="/error" element={<PageNotFound />} />:
            <Route path="/login" element={<Login />} />) */}
          </Routes>
        </Suspense>
      </BasePage>
    );
  } else {
    return (
      // <BaseLayout>
      <TransitionGroup>
        <CSSTransition
          nodeRef={nodeRef}
          in
          timeout={timeout}
          classNames="fade"
          key={currentKey}
          exit={false}>
          <div>
            <Suspense fallback={<PageLoader />}>
              <Routes location={location}>
                {publicRoutes.map((route, idx) => {
                  return (
                    <Route
                      path={route.path}
                      key={idx}
                      element={route.component}
                    />
                  );
                })}
              </Routes>
            </Suspense>
          </div>
        </CSSTransition>
      </TransitionGroup>
      // </BaseLayout>
    );
  }
};

export default BaseRoutes;
