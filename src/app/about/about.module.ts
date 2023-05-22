import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { HowItWorksPageComponent } from './how-it-works-page/how-it-works-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';


@NgModule({
  declarations: [
    HowItWorksPageComponent,
    AboutUsPageComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
