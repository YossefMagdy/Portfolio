import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

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

}
