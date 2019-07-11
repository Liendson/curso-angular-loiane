import { AulasModule } from './aulas/aulas.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FundoAmareloDirective } from './diretivas/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { HighlightMouseDirective } from './diretivas/highlight-mouse.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent,
    HighlightMouseDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AulasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
