import { authRoutes } from './../auth/router';
import { homeRoutes } from '../home/router';


export const appRoutes = [
    ...homeRoutes,
    ...authRoutes
];
