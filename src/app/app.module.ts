import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './pages/form/form.component';
import { UserFormComponent } from './pages/user-form/user-form.component';
import { UserDocumentsComponent } from './pages/user-documents/user-documents.component';
import { UserFinallyComponent } from './pages/user-finally/user-finally.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UserFormComponent,
    UserDocumentsComponent,
    UserFinallyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
