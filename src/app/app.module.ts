import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgClassAssignmentComponent } from './ng-class-assignment/ng-class-assignment.component';
import { PasswordAssignmentComponent } from './password-assignment/password-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    NgClassAssignmentComponent,
    PasswordAssignmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
