import { Routes } from '@angular/router';
import { TenderindexComponent } from '../projectcomponent/masters/tenderindex/tenderindex.component';
import { LoginComponent } from '../sharedcomponent/loginApp/login/login.component';
import { NotFoundComponent } from '../sharedcomponent/not-found/not-found.component';
import { isLogedGuard } from '../sharedcomponent/Gaurds/is-loged.guard';
import { UserComponent } from '../projectcomponent/user/user/user.component';
import { DeshboardComponent } from '../sharedcomponent/deshboard/deshboard/deshboard.component';
import { LayoutComponent } from '../sharedcomponent/layout/layout.component';
import { TenderIndexListComponent } from '../projectcomponent/tender-index-list/tender-index-list.component';

export const routes: Routes = [
    {path:'',redirectTo:'/login',pathMatch:'full'},
   
    {path:'login',component:LoginComponent},

    {path:'',component:LayoutComponent,
        children:[
           /* {path:'deshboard',title:"Deshboard",component:DeshboardComponent,canActivate:[isLogedGuard]},
           {path:'user',title:"User",component:UserComponent,canActivate:[isLogedGuard]},
            {path:'tenderindex',title:"TenderIndex",component:TenderindexComponent,canActivate:[isLogedGuard]},
            {path:'tenderindexlist',title:"TenderIndexList",component:TenderIndexListComponent},
            */
            {path:'deshboard',title:"Deshboard",component:DeshboardComponent},
            {path:'user',title:"User",component:UserComponent},
            {path:'tenderindex',title:"TenderIndex",component:TenderindexComponent},
            {path:'tenderindexlist',title:"TenderIndexList",component:TenderIndexListComponent},

        ]
    },
    {path:"**",component:NotFoundComponent}

    
];
