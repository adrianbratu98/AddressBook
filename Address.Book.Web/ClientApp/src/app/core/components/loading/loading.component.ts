import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  loading: boolean = false;

  constructor(private loadingService: LoadingService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadingService.loadingCountChanged.subscribe(
      (loadingCount: number) => {
        if(loadingCount == 0)
          this.loading = false
        else
          this.loading = true; 
        this.cd.detectChanges();
      }
    )
  }

}
