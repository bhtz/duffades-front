import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';



export const duffadesRoutes = [
    { component: ListComponent, name: 'Duffades', segment: 'duffades', menu: true },
    { component: FormComponent, name: 'Form', segment: 'duffades/new' }
];
