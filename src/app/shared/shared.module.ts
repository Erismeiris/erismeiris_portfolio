import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './sideBar/sideBar.component';
import { CenterComponent } from '../components/center/center.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { ExperienceComponent } from '../components/experience/experience.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ContactComponent } from '../components/contact/contact.component';




@NgModule({
  exports:[
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    CenterComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent


  ],
  imports: [
    CommonModule,
    CarouselModule,
    BrowserAnimationsModule,
    RouterModule
    
  
    
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    CenterComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
    
    
  ]
})
export class SharedModule { }
