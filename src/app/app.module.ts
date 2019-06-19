import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassmatesComponent } from './classmates/classmates.component';
import { ClassmateDetailsComponent } from './classmate-details/classmate-details.component'; // <-- NgModel lives here

@NgModule({
  imports: [ //modules
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [ //components
    AppComponent,
    ClassmatesComponent,
    ClassmateDetailsComponent,
  ],
  providers: [], //services
  bootstrap: [AppComponent]
})
export class AppModule {
  title = 'my classroom heroes'
}
