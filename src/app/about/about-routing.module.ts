import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { HowItWorksPageComponent } from './how-it-works-page/how-it-works-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'how-it-works',
    component: HowItWorksPageComponent
  },
  {
    path: 'us',
    component: AboutUsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
