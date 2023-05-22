import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncryptRoutingModule } from './encrypt-routing.module';
import { EncryptPageComponent } from './encrypt-page/encrypt-page.component';
import { CryptoService } from '../crypto/crypto.service';
import { EncryptFormsComponent } from './encrypt-forms/encrypt-forms.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EncryptPageComponent,
    EncryptFormsComponent
  ],
  imports: [
    CommonModule,
    EncryptRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    CryptoService
  ]
})
export class EncryptModule { }
