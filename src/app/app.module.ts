import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { StructuresComponent } from './structures/structures.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoWayComponent,
    StructuresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
