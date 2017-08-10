import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';



export const homeRoutes = [
    { component: ListComponent, name: 'Duffades', segment: 'duffades' },
    { component: FormComponent, name: 'Form', segment: 'form' }    
];
