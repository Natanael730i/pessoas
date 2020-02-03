import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaComponent } from './pessoa/pessoa.component';

//ip pc mesa http://192.168.0.107:9090/pessoa ou pessoas


const routes: Routes = [
  {
    path: '', component: PessoaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
