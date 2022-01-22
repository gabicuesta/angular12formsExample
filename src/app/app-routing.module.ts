import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponentComponent } from './components/form-component/form-component.component';


const routes: Routes = [
  { path: 'form', component: FormComponentComponent },
  { path: '**', component: FormComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
