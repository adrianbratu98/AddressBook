import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from '../models/dto/user';
import { UserAddress } from '../models/dto/user-address';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressListService { 

  private baseUrl = "https://localhost:7036/api";

  constructor(private httpClient: HttpClient) { }

  getUserList() : Observable<User[]> {
    return this.httpClient.get<User[]>(`${ this.baseUrl }/user/getList`, { responseType: 'json' })
      .pipe(delay(1500));
  }
}
