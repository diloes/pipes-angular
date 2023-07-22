import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    PanelModule,
  ],
})
export class PrimeNgModule {}

/**
 * NOTAS:
 * - En este archivo vamos a importar y exportar los modulos de PrimeNg
 */
