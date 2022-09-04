import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { UserAddress } from 'src/app/core/models/dto/user-address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() address: UserAddress | undefined;
  @Output() close: EventEmitter<UserAddress> = new EventEmitter<UserAddress>();

  constructor() { }

  ngOnInit(): void { }
}
