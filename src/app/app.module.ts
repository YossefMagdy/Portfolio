import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Components/main/main.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { AboutComponent } from './Components/about/about.component';
import { ResumeComponent } from './Components/resume/resume.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HeaderComponent } from './Components/header/header.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { ProgressbarComponent } from './theme/component/progressbar/progressbar.component';
import { PorjectComponent } from './theme/component/porjectGenerator/projectGenerator.component';
import { DarkModeComponent } from './theme/component/dark-mode/dark-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SideBarComponent,
    AboutComponent,
    ResumeComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    HeaderComponent,
    SkillsComponent,
    ProgressbarComponent,
    PorjectComponent,
    DarkModeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxTypedJsModule,
    ToastrModule.forRoot(),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
