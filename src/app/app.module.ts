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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputMaskModule } from 'primeng/inputmask';
import { TimeInputComponent } from './components/time-input/time-input.component';
import { DocumentListComponent } from './components/document-list/document-list.component'
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { DocumentComponent } from './components/document/document.component';

const config: SocketIoConfig = { url: 'http://localhost:4444', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    FormComponent,
    SubFormComponent,
    TimeInputComponent,
    DocumentListComponent,
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularDraggableModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    BrowserAnimationsModule,
    InputMaskModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
