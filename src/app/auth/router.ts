import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const authRoutes = [
    { component: LoginComponent, name: 'Login', segment: 'login' },
    { component: RegisterComponent, name: 'Register', segment: 'register' },
    { component: SettingsComponent, name: 'Settings', segment: 'settings' }
];
