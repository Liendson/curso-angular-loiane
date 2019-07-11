import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AulasComponent } from './aulas.component';
import { Aulas2Component } from './aulas2/aulas2.component';
import { Aulas3Component } from './aulas3/aulas3.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AulasComponent,
    Aulas2Component,
    Aulas3Component
  ],
  exports: [
    AulasComponent,
    Aulas2Component,
    Aulas3Component
  ],
})
export class AulasModule { }
