import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, PrimeNgModule],
  exports: [MenuComponent],
})
export class SharedModule {}

/**
 * NOTAS:
 * - Aquí importamos el nuestro PrimeNgModule para utilizar los elementos que exportamos de este (por ejemplo el menuBar)
 * en toda la carpeta shared.
 */
