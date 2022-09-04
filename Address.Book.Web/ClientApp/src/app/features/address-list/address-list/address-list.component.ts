import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/core/models/dto/user';
import { UserAddress } from 'src/app/core/models/dto/user-address';
import { AddressListService } from 'src/app/core/services/addres-list.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { AddressComponent } from '../address/address.component';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit, OnDestroy {

  users: User[] = [];
  private getUsersSubs: Subscription | undefined;
  reinitAdress: EventEmitter<UserAddress> = new EventEmitter<UserAddress>();
  showAddressModal: boolean = false;
  selectedAddress: UserAddress | undefined;
  
  constructor(private loadingService: LoadingService, private addressListService: AddressListService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  ngOnDestroy(): void {
    if(this.getUsersSubs && !this.getUsersSubs.closed) {
      this.getUsersSubs.unsubscribe();
      this.loadingService.stopLoading();
    }
  }

  private getUsers() {
    this.loadingService.startLoading();
    this.getUsersSubs = this.addressListService.getUserList().subscribe(
      (users) => {
        this.users = users;
        this.loadingService.stopLoading();
      },
      (error) => {
        alert("Getting users error");
        this.loadingService.stopLoading();
      }
    )
  }

  showAddress(address: UserAddress) {
    this.selectedAddress = address;
    this.showAddressModal = true;
  }

  showConfirm() {

  }
   
}
