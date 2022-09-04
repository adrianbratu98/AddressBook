import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressListRoutingModule } from './address-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddressComponent } from './address/address.component';



@NgModule({
  declarations: [
    AddressListComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    AddressListRoutingModule,
    SharedModule
  ]
})
export class AddressListModule { }
