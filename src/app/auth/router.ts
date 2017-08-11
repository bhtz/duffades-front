import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const authRoutes = [
    { component: LoginComponent, name: 'Login', segment: 'login', menu: true },
    { component: RegisterComponent, name: 'Register', segment: 'register', menu: true },
    { component: SettingsComponent, name: 'Settings', segment: 'settings', menu: true }
];
