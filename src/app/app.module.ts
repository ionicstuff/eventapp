import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { EventsModule } from './events/events.module';
import { UsersModule } from './users/users.module';
import { NotificationsModule } from './notifications/notifications.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EventsModule,
    UsersModule,
    NotificationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
