import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TechComponent } from './tech/tech.component';
import { SportsComponent } from './sports/sports.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';

import { Ng2PaginationModule } from 'ng2-pagination';

import { NewsService } from './news.service';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TechComponent,
    SportsComponent,
    EntertainmentComponent,
    ContactComponent,
    AboutComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2PaginationModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'entertainment',
        component: EntertainmentComponent
      },
      {
        path: 'technology',
        component: TechComponent
      },
      {
        path: 'sports',
        component: SportsComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'terms',
        component: TermsComponent
      }
    ])
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
