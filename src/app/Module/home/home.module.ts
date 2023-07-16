import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CoursehubComponent } from './coursehub/coursehub.component';
import { DistantlearningComponent } from './distantlearning/distantlearning.component';
import { KindergartenComponent } from './kindergarten/kindergarten.component';
import { LanguageComponent } from './language/language.component';
import { MaindemoComponent } from './maindemo/maindemo.component';
import { UniversityComponent } from './university/university.component';


@NgModule({
  declarations: [
    CoursehubComponent,
    DistantlearningComponent,
    KindergartenComponent,
    LanguageComponent,
    MaindemoComponent,
    UniversityComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
