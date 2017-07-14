
//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//Components
import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import {FaqComponent } from './faq/faq.component';

/* Feature Modules */
import { ProductModule } from './products/product.module';

//Service
import {FaqService } from './faq/faq.service'

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'faq', component:FaqComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    FaqComponent  ],
    providers:[FaqService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
