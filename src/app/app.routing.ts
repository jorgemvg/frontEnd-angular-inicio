import {ModuleWithProviders, ApplicationModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppModule} from './app.module';

//Importar componentes propios
import {EmpleadoComponent} from './empleados/empleado.component';
import {EmpresaComponent} from './empresas/empresa.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ErrorComponent } from './error/error.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'empresas', children: [ 
        {path: 'empresa', component: EmpresaComponent}
     ]},
    {path: 'empleados', children: [  
      {path: 'empleado', component: EmpleadoComponent}
    ]},
    {path: 'contacto', component: ContactoComponent},
    {path: 'contacto/:param', component: ContactoComponent},
    {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<AppModule> = RouterModule.forRoot(appRoutes);