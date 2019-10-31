import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { LayoutModule } from '../layout/layout.module';
import { ViewfriendsComponent } from './viewfriends/viewfriends.component';
import { AddfriendsComponent } from './addfriends/addfriends.component';


@NgModule({
  declarations: [ProfileComponent, ViewfriendsComponent, AddfriendsComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    LayoutModule
  ]
})
export class UsersModule { }
