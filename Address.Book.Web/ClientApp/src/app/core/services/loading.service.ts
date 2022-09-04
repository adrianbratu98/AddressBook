import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loadingCount: number = 0;
  loadingStopped: boolean = false;
  loadingCountChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  startLoading() {
    this.loadingCount++;
    this.loadingStopped = false;
    this.loadingCountChanged.emit(this.loadingCount);
  }

  stopLoading() {
    this.loadingCount--;
    this.loadingStopped = true;
    this.loadingCountChanged.emit(this.loadingCount);
  }
}
