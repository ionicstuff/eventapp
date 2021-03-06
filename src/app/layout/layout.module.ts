import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { AsidenavbarComponent } from './asidenavbar/asidenavbar.component';
import { FooternavbarComponent } from './footernavbar/footernavbar.component';


@NgModule({
  declarations: [
    TopnavbarComponent, 
    AsidenavbarComponent, 
    FooternavbarComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    TopnavbarComponent,
    AsidenavbarComponent,
    FooternavbarComponent
  ]
})
export class LayoutModule { }
