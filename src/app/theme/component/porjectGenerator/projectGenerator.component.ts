import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projectGenerator',
  templateUrl: './projectGenerator.component.html',
  styleUrls: ['./projectGenerator.component.scss']
})
export class PorjectComponent {
  constructor(){}
  @Input() projectName:string=''
  @Input() projectImage:string=''
  @Input() projectDescription:string=''
  @Input() DemoLink:string=''
  @Input() repo:string=''


  GoToRepo(){
    window.open(this.repo)
  }
}
