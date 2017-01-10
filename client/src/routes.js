import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import LoginPage from './components/LoginForm.jsx';
import SignupPage from './components/SignUpForm.jsx';

const routes={
         componen:Base,
         childRoutes:[
                        {path:'/', component:HomePage},
                        {path:'/login', component:LoginPage},
                        {path:'/signup',component:SignupPage}
                     ]

};
export default routes;