import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const authRoutes = [
    { component: LoginComponent, name: 'Login', segment: 'login' },
    { component: RegisterComponent, name: 'Register', segment: 'register' }
];
