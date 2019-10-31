import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { FindeventComponent } from './events/findevent/findevent.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { VieweventsComponent } from './events/viewevents/viewevents.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'findevent', component:FindeventComponent},
  {path:'createevent', component:CreateEventComponent},
  {path:'viewevents', component:VieweventsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
