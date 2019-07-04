import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AulasComponent } from './aulas.component';
import { Aulas2Component } from './aulas2/aulas2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AulasComponent,
    Aulas2Component
  ],
  exports: [
    AulasComponent
  ],
})
export class AulasModule { }
