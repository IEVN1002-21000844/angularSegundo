import { Routes } from "@angular/router";

export default[
    {
        path: 'zodicao',
        loadComponent: ()=> import('./zodicao/zodicao.component'),
    },
    {
        path: 'ejemplo1',
        loadComponent: ()=> import('./ejemplo1/ejemplo1.component'),
    }
] as Routes