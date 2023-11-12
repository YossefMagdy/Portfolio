import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss'],
  animations: [
    trigger('clipAth', [
      state('normal', style({
        'clip-path': 'circle(0% at 50% 6%)',
        'background-color': '#1d1e24'
      })),
      state('change', style({
        'clip-path': ' circle(100% at 50% 7%)',
        'background-color': 'transparent',
        'z-index': '-1'
      })),
      state('normal2', style({
        'clip-path': 'circle(0% at 50% 7%)',
        'background-color': 'white'
      })),
      transition('*=>*', animate('1s'))
    ])
  ]
})
export class DarkModeComponent implements OnInit {

  ngOnInit(): void {
    particlesJS.load('particles-js', 'assets/particles.json', function () {
    });
  }
  dark: boolean = true
  state = 'normal'

  changeTheme() {
    if (this.dark) {
      this.state = 'normal2'
      particlesJS.load('particles-js', 'assets/particles.json', function () {
      });
      document.documentElement.style.setProperty('--primary', '#878e99');
      document.documentElement.style.setProperty('--Secondry', '#c4cfde');
      document.documentElement.style.setProperty('--Onhover', '#ff014f');
      document.documentElement.style.setProperty('--MainBackground', '#1d1e24');
      document.documentElement.style.setProperty('--SecondryBackground', '#212428');
      document.documentElement.style.setProperty('--alertText', 'white');
      document.documentElement.style.setProperty('--AlertBox', '#f10');
      document.documentElement.style.setProperty('--inputBackground', '#191B1E');
      document.documentElement.style.setProperty('--contactIcon', '#1d1e24');
    } else {
      this.state = 'change'
      particlesJS.load('particles-js', 'assets/particlesLightMode.json', function () {
      });
      document.documentElement.style.setProperty('--primary', 'black');
      document.documentElement.style.setProperty('--Secondry', 'black');
      document.documentElement.style.setProperty('--Onhover', '#ff014f');
      document.documentElement.style.setProperty('--MainBackground', '#c4c8ca');
      document.documentElement.style.setProperty('--SecondryBackground', 'white   ');
      document.documentElement.style.setProperty('--alertText', 'white');
      document.documentElement.style.setProperty('--AlertBox', 'white');
      document.documentElement.style.setProperty('--inputBackground', 'white');
      document.documentElement.style.setProperty('--contactIcon', '#ffff');

    }

    console.log(document.documentElement.style)
  }


}
