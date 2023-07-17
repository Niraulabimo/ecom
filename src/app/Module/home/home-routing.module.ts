import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaindemoComponent } from './maindemo/maindemo.component';
import { CoursehubComponent } from './coursehub/coursehub.component';

const routes: Routes = [
  { path: 'maindemo', component: MaindemoComponent },
  { path: 'coursehub', component: CoursehubComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
  constructor() {
    console.log('Home routing loaded');
  }
}
