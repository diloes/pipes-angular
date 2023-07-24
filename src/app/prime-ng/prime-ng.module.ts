import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    PanelModule,
    ToolbarModule,
  ],
})
export class PrimeNgModule {}

/**
 * NOTAS:
 * - En este archivo vamos a importar y exportar los modulos de PrimeNg
 */
