import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JbulbComponent } from './jbulb/jbulb.component';
import { JinComponent } from './jin/jin.component';
import { JoutComponent } from './jout/jout.component';

@NgModule({
  declarations: [
    AppComponent,
    JbulbComponent,
    JinComponent,
    JoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
