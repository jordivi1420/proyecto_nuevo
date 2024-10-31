import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';



import { ObjetoComponent } from './pages/objeto/objeto.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { authGuard } from './guards/auth.guard';
import { DeniedComponent } from './pages/denied/denied.component';

import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component';
import { CrearEstudianteComponent } from './pages/estudiantes/crear-estudiante/crear-estudiante.component';
import { MostrarEstudiantesComponent } from './pages/estudiantes/mostrar-estudiantes/mostrar-estudiantes.component';
import { ActualizarEstudianteComponent } from './pages/estudiantes/actualizar-estudiante/actualizar-estudiante.component';
import { EliminarEstudianteComponent } from './pages/estudiantes/eliminar-estudiante/eliminar-estudiante.component';


import { VigilantesComponent } from './pages/vigilantes/vigilantes.component';
import { CrearVigilantesComponent } from './vigilantes/crear-vigilantes/crear-vigilantes.component';
import { MostrarVigilantesComponent } from './vigilantes/mostrar-vigilantes/mostrar-vigilantes.component';
import { ActualizarVigilantesComponent } from './vigilantes/actualizar-vigilantes/actualizar-vigilantes.component';
import { EliminarVigilanteComponent } from './vigilantes/eliminar-vigilante/eliminar-vigilante.component';


import { RegistroingresoComponent } from './pages/registroingreso/registroingreso.component';
import { CrearRegistroingresoComponent } from './registroingreso/crear-registroingreso/crear-registroingreso.component';
import { MostrarRegistroingresoComponent } from './registroingreso/mostrar-registroingreso/mostrar-registroingreso.component';
import { ActualizarRegistroingresoComponent } from './registroingreso/actualizar-registroingreso/actualizar-registroingreso.component';
import { EliminarRegistroingresoComponent } from './registroingreso/eliminar-registroingreso/eliminar-registroingreso.component';

export const routes: Routes = [
    { path: 'login', title: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, 
        children: [
            
        { path: 'vigilante', title: 'Vigilantes', component: VigilantesComponent,canActivate:[authGuard], data:{roles: ['Vigilante'] } },
        { path: 'crear-vigilantes', title: 'Crear Vigilantes', component: CrearVigilantesComponent,canActivate:[authGuard], data:{roles: ['Vigilante'] } },
        { path: 'mostrar-vigilantes', title: 'Mostrar Vigilantes', component: MostrarVigilantesComponent,canActivate:[authGuard], data:{roles: ['Vigilante'] } },
        { path: 'actualizar-vigilantes', title: 'Actualizar Vigilantes', component: ActualizarVigilantesComponent,canActivate:[authGuard], data:{roles: ['Vigilante'] } },
        { path: 'eliminar-vigilante', title: 'Eliminar Vigilantes', component: EliminarVigilanteComponent,canActivate:[authGuard], data:{roles: ['Vigilante'] } },

        { path: 'estudiante', title: 'Estudiantes', component: EstudiantesComponent,canActivate:[authGuard], data:{roles: ['Vigilante','Admin','Estudiante'] } },
        {path:'crear-estudiante',title: 'Crear Estudiante',component: CrearEstudianteComponent,canActivate:[authGuard], data:{roles: ['Admin'] }},
        {path: 'mostrar-estudiantes',title:'Mostrar Estudiantes',component: MostrarEstudiantesComponent,canActivate:[authGuard], data:{roles: ['Estudiante', 'Vigilante'] }},
        {path:'actualizar-estudiante',title:'Actualizar Estudiantes',component: ActualizarEstudianteComponent,canActivate:[authGuard], data:{roles: ['Admin'] }},
        {path: 'eliminar-estudiante', title: 'Eliminar Estudiantes',component: EliminarEstudianteComponent,canActivate:[authGuard], data:{roles: ['Admin'] }},

        { path: 'registroingreso', title: 'Registro Ingreso', component: RegistroingresoComponent,canActivate:[authGuard], data:{roles: ['Vigilante','Admin','Estudiante'] } },
        { path: 'crear-registroingreso', title: 'Crear Resgistro', component: CrearRegistroingresoComponent,canActivate:[authGuard], data:{roles: ['Vigilante','Admin'] } },
        { path: 'mostrar-registroingreso', title: 'Mostrar Resgistro', component: MostrarRegistroingresoComponent,canActivate:[authGuard], data:{roles: ['Vigilante','Admin'] } },
        { path: 'actualizar-registroingreso', title: 'Actualizar Resgistro', component: ActualizarRegistroingresoComponent,canActivate:[authGuard], data:{roles: ['Vigilante','Admin'] } },   
        { path: 'eliminar-registroingreso', title: 'Crear Resgistro', component: EliminarRegistroingresoComponent,canActivate:[authGuard], data:{roles: ['Vigilante','Admin'] } },   

        { path: 'usuario', title: 'Usuarios', component: UsuariosComponent,canActivate:[authGuard], data:{roles: ['Admin'] } },
        { path: 'objeto', title: 'Registro Objeto', component: ObjetoComponent,canActivate:[authGuard], data:{roles: ['Profesor','Admin','Estudiante'] } },
        { path: 'access-denied', title: 'Access denied', component: DeniedComponent },
        { path: 'inicio', title: 'Principal', component: InicioComponent,canActivate:[authGuard], data:{roles: ['Vigilante','Admin','Estudiante'] }
    }
    ]},
    { path: '', redirectTo: 'login', pathMatch: 'full' },  // Redirección inicial
    { path: '**', redirectTo: 'login' }  // Manejo de rutas no definidas

];