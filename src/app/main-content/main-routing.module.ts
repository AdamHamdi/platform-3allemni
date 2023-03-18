import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { MainComponent } from './main.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [ 
  {
    path: '',
    component: MainComponent,
    children: [{
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },
    {
      path: 'quiz',
      component: QuizComponent
    },  {
      path: 'dashboard',
      component: BaseComponent
    },
    {
      path: 'test-evaluation',
      component: EvaluationComponent
    },
  ]}
  ]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
