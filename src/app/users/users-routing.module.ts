import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ViewfriendsComponent } from './viewfriends/viewfriends.component';
import { AddfriendsComponent } from './addfriends/addfriends.component';


const routes: Routes = [
  {path:'profile', component:ProfileComponent},
  {path:'viewfriends', component: ViewfriendsComponent},
  {path:'addfriend', component:AddfriendsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
