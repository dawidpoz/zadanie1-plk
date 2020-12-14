import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppResultComponent } from './components/app-result/app-result.component';
import { AppSearchComponent } from './components/app-search/app-search.component';
import { AppErrorComponent } from './components/app-error/app-error.component';
import { ResultCardComponent } from './components/result-card/result-card.component';
import { ResultCardItemComponent } from './components/result-card-item/result-card-item.component';
import { ButtonBackComponent } from './components/button-back/button-back.component';

@NgModule({
  declarations: [
    AppComponent,
    AppResultComponent,
    AppSearchComponent,
    AppErrorComponent,
    ResultCardComponent,
    ResultCardItemComponent,
    ButtonBackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
