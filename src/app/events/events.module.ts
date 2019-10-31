import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { FindeventComponent } from './findevent/findevent.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { LayoutModule } from '../layout/layout.module';
import { VieweventsComponent } from './viewevents/viewevents.component';



@NgModule({
  declarations: [FindeventComponent, CreateEventComponent, VieweventsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    LayoutModule
    
  ]
})
export class EventsModule { }
