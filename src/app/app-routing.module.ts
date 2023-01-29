import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { QueryComponent } from './view/home/query/query.component';
import { RegistrationComponent } from './view/home/registration/registration.component';
import { MessageComponent } from './view/message/message.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: "full" },
  { path: 'cadastrar-veiculo', component: RegistrationComponent},
  { path: 'consultar-veiculo', component: QueryComponent },
  { path: "editar-veiculo/:id", component: RegistrationComponent },
  { path: "enviar-mensagem", component: MessageComponent },
  {
    path: '**',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
