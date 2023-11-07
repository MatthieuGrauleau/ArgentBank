import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../Pages/Home';
import SignIn from '../Pages/SignIn';
import User from '../Pages/User';
import ProtectedRoute from '../components/ProtectedRoute';
import { Provider } from 'react-redux';
import store from '../redux/store';

export default function Router() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Layout />}
          >
            <Route
              index
              element={<Home />}
            />
            <Route
              path='/SignIn'
              element={<SignIn />}
            />
            <Route
              path='/User'
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
            <Route
              path='*'
              element={<Home />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
