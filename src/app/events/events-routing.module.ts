import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindeventComponent } from './findevent/findevent.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventdetailComponent } from './eventdetail/eventdetail.component';


const routes: Routes = [
  {path:'searchevent', component:FindeventComponent},
  {path:'create-event', component:CreateEventComponent},
  {path:'eventdetail', component:EventdetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
