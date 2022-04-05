import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import localePt from '@angular/common/locales/pt'; //muito mais fácil simplesmente usar js
//não tem aspas pois é variável, não lib
import { registerLocaleData } from '@angular/common'; //muito mais fácil simplesmente usar js
import { RouterModule } from '@angular/router';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' }, //muito mais fácil simplesmente usar js
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'} //isso é útil
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
