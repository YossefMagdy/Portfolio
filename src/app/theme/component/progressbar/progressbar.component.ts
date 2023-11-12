import { trigger, state, style, transition, animate } from '@angular/animations';
import {   AfterViewChecked, ChangeDetectorRef, Component,Input } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss'],

  animations:[trigger('percentAnimation',[
    state('start',style({
      'width':'0%'
      
    })),
    state('end',style({
      'width':'{{width}}%'
    }),{params: {width: 0 }}
    ),
    transition('start=>end',animate('1s'))

  ])]
})

export class ProgressbarComponent implements AfterViewChecked {

  constructor(private cd:ChangeDetectorRef){}
@Input() SkillName:string=''
@Input() width!:string
percent=0
percentCountStop=setInterval(()=>{
  this.percent++;
  if(this.percent==+this.width){
    clearInterval(this.percentCountStop);
  }

},25)

state='start'

ngAfterViewChecked(): void {

  this.state='end';
  this.cd.detectChanges()
}



}
