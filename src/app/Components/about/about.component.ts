import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [trigger('divAnimation', [
    state('down', style({
      'transform': 'translatey(200%)'
    })),
    state('up', style({
      'transform': 'translatey(0)'
    })),
    transition('down=>up',animate(500))
  ])]
})
export class AboutComponent implements OnInit, AfterViewInit {
  state = 'down';
  constructor(private cd:ChangeDetectorRef){}

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    this.state='up';
    this.cd.detectChanges()

  }

}
