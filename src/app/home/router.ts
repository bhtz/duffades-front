import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

export const homeRoutes = [
    { component: HomeComponent, name: 'Home', segment: 'home' },
    { component: AboutComponent, name: 'About', segment: 'about' }
];
