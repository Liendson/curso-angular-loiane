import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';


import { LogService } from './shared/log.service';
import { AulasModule } from './aulas/aulas.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FundoAmareloDirective } from './diretivas/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { HighlightMouseDirective } from './diretivas/highlight-mouse.directive';
import { NgElseDirective } from './diretivas/ng-else.directive';
import { AlertasComponent } from './diretivas-customizadas/alertas/alertas.component';
import { CursosComponent } from './cursos/cursos.component';
import { PipesComponent } from './pipes/pipes.component';
import { CamelCasePipe } from './pipes/camel-case.pipe';

registerLocaleData(localePt, 'pt');
@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent,
    AlertasComponent,
    HighlightMouseDirective,
    NgElseDirective,
    CursosComponent,
    PipesComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AulasModule,
  ],
  providers: [AlertasComponent, LogService, { provide: LOCALE_ID, useValue: 'pt'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
