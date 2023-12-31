import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MermberListComponent } from './members/mermber-list/mermber-list.component';
import { MermberDetailsComponent } from './members/mermber-details/mermber-details.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';
import { TestErrorComponent } from './errors/test-error/test-error.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { PreventUnsavedChangesGuard } from './_guards/prevent-unsaved-changes.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'',runGuardsAndResolvers:'always',
canActivate:[AuthGuard],
children:
[
  {path:'members',component:MermberListComponent,canActivate : [AuthGuard]},
  {path:'members/:username',component:MermberDetailsComponent},
  {path:'member/edit',component:MemberEditComponent,canDeactivate:[PreventUnsavedChangesGuard]},
  {path:'lists',component:ListsComponent},
  {path:'messages',component:MessagesComponent},
  
]
},
{path:'errors',component:TestErrorComponent} ,
{path:'not-found',component:NotFoundComponent} ,
{path:'server-error',component:ServerErrorComponent} ,
{path:'**',component:HomeComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
