import { authRoutes } from './../auth/router';
import { homeRoutes } from '../home/router';
import { duffadesRoutes } from '../duffades/router';



export const appRoutes = [
    ...homeRoutes,
    ...duffadesRoutes,
    ...authRoutes
];
