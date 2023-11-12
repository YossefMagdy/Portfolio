import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  projectInfo=[
    {projectName:'MovieDb',projectImage:'./assets/MovieDB.PNG',projectDescription:'This clone version of the themoviedb website built with Angular Using themoviedb API .',demoLink:'https://yossefmagdy.github.io/MovieDB-Clone/home',repo:'https://github.com/YossefMagdy/MovieDB-Clone'},

    {projectName:'E-shop',projectImage:'./assets/E-shop.PNG',projectDescription:'E-commerce website to display and get many types of prroducts .',demoLink:'https://yossefmagdy.github.io/E-shop',repo:'https://github.com/YossefMagdy/E-shop'},

    {projectName:'GamerOver',projectImage:'./assets/GameOver.PNG',projectDescription:'Game-Over is a gaming platform website that allows users to browse games from different categories and play them online .',demoLink:'https://yossefmagdy.github.io/GameOver',repo:'https://github.com/YossefMagdy/GameOver'},

    {projectName:'Notes',projectImage:'./assets/Notes.PNG',projectDescription:'A note app is a digital application for creating and managing notes, reminders .',demoLink:'https://yossefmagdy.github.io/Notes/home',repo:'https://github.com/YossefMagdy/Notes'},

    {projectName:'Yummy-Project',projectImage:'./assets/Yummyproject.PNG',projectDescription:'In this Project you can search and check many recipes of food, know which country came from and the source for each one .',demoLink:'https://yossefmagdy.github.io/Yummy-Project/',repo:'https://github.com/YossefMagdy/Yummy-Project'},

    {projectName:'DrawDragResize',projectImage:'./assets/DrawDragResize.PNG',projectDescription:'DrawDrag is a web application that combines the power of HTML ,CSS, Javascript and Bootstrap to create an interactive drawing tool .',demoLink:'https://yossefmagdy.github.io/DrawDragResize/',repo:'https://github.com/YossefMagdy/DrawDragResize'},

    {projectName:'GameReview',projectImage:'./assets/GameRv.PNG',projectDescription:'Game-Over is a gaming platform website that allows users to browse games from different categories and play them online .',demoLink:'https://yossefmagdy.github.io/Games/',repo:'https://github.com/YossefMagdy/Games'},

    {projectName:'WeatherApp',projectImage:'./assets/WeatherApp.PNG',projectDescription:'WeatherApp web application designed to provide users with up-to-date weather information for their location or any location of their choice .',demoLink:'https://yossefmagdy.github.io/weather-App/',repo:'https://github.com/YossefMagdy/weather-App'},

    {projectName:'Simone',projectImage:'./assets/Simone.PNG',projectDescription:'Simone-Personal Portifolio .',demoLink:'https://yossefmagdy.github.io/Template-04-HTML_AND_CSS/',repo:'https://github.com/YossefMagdy/Template-04-HTML_AND_CSS'},


  ]

  ngOnInit(): void {
  }
  
}
