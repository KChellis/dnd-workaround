import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import { routing } from './app-routing';
import { CharacterFormComponent } from './character-form/character-form.component';
import { SpellListComponent } from './spell-list/spell-list.component';
import { SelectComponent } from './select/select.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerComponent,
    CharacterFormComponent,
    SpellListComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
