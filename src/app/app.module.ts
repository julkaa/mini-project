import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NewsComponent } from './news/news.component';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import {AuthGuard} from "./guards/auth.guard";
import { StartPhraseComponent } from './start-phrase/start-phrase.component';
import { NavComponent } from './nav/nav.component';
import {LazyLoadImageModule} from "ng-lazyload-image";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    NewsComponent,
    LoginComponent,
    StartPhraseComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LazyLoadImageModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
