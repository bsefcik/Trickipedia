import {NgModule} from '@angular/core';
import {GsHeader} from './header/header';
import {GsFooter} from './footer/footer';
import {GsHomePage} from './homepage/homepage';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GsHomePage,
    GsHeader,
    GsFooter
  ],
  exports: [
    GsHomePage,
    GsHeader,
    GsFooter
  ]
})

export class ComponentModule {}
