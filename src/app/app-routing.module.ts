import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MermberListComponent } from './members/mermber-list/mermber-list.component';
import { MermberDetailsComponent } from './members/mermber-details/mermber-details.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'',runGuardsAndResolvers:'always',
canActivate:[AuthGuard],
children:
[
  {path:'members',component:MermberListComponent,canActivate : [AuthGuard]},
  {path:'members/:id',component:MermberDetailsComponent},
  {path:'lists',component:ListsComponent},
  {path:'messages',component:MessagesComponent},
  {path:'**',component:HomeComponent,pathMatch:'full'},
]
} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
