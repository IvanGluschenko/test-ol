import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularDraggableModule } from 'angular2-draggable';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from '@modules/map/components/map.component';
import { FormComponent } from '@modules/form/components/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubFormComponent } from '@modules/form/components/sub-form/sub-form.component';
import { PrimengModule } from "@app/modules/primeng.module"

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    FormComponent,
    SubFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularDraggableModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
