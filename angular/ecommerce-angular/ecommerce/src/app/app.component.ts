import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy{
  title = 'ecommerce';

  public ngOnInit(): void {
    console.log('Init');
    
  }
  public ngAfterViewInit(): void {
    console.log('After view init');
    
  }
  // public ngOnChanges(): void {
    
  // }

  public ngOnDestroy(): void {
    console.log('Destroy');
    
  }
}
