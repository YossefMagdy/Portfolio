import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],

})
export class SkillsComponent implements OnInit {

  constructor() { }

 FirstSkills=[
    {name:'HTML/HTML5',percent:'95'},
    {name:'CSS/CSS3',percent:'95'},
    {name:'JavaScript',percent:'85'},
    {name:'jQuery',percent:'85'},
    {name:'Tailwindcss',percent:'70'},
    {name:'Bootstrap',percent:'85'},
  ]
 SecondSkills=[
    {name:'Angular',percent:'90'},
    {name:'SQL',percent:'70'},
    {name:'Git / GitHub',percent:'80'}
  ]
  

  ngOnInit(): void {
  }

}
