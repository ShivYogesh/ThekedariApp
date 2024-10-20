import { Routes } from '@angular/router';
import { TenderindexComponent } from '../projectcomponent/masters/tenderindex/tenderindex.component';
import { LoginComponent } from '../sharedcomponent/loginApp/login/login.component';
import { NotFoundComponent } from '../sharedcomponent/not-found/not-found.component';
import { isLogedGuard } from '../sharedcomponent/Gaurds/is-loged.guard';
import { UserComponent } from '../projectcomponent/user/user/user.component';

export const routes: Routes = [
    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path:"tenderindex",title:"TenderIndex",component:TenderindexComponent,canActivate:[isLogedGuard]},
    {path:"login",component:LoginComponent},
    {path:"user",component:UserComponent},

    {path:"**",component:NotFoundComponent}

    
];
