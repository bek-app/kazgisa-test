import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { UserFormComponent } from './pages/user-form/user-form.component';
import { UserDocumentsComponent } from './pages/user-documents/user-documents.component';
import { UserFinallyComponent } from './pages/user-finally/user-finally.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'form',
    component: FormComponent,
  },

  {
    path: 'user-form',
    component: UserFormComponent,
  },

  {
    path: 'user-documents',
    component: UserDocumentsComponent,
  },

  {
    path: 'user-finally',
    component: UserFinallyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
