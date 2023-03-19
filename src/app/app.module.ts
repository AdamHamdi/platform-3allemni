import { NgModule,CUSTOM_ELEMENTS_SCHEMA, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import { MainComponent } from './main-content/main.component';
import { BaseComponent } from './main-content/base/base.component';
import { QuizComponent } from './main-content/quiz/quiz.component';
import { NavebarComponent } from './main-content/navebar/navebar.component';
import { EvaluationComponent } from './main-content/evaluation/evaluation.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MainComponent,BaseComponent, 
    QuizComponent,NavebarComponent,
    EvaluationComponent,
    
     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
