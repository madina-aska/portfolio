import { Component } from '@angular/core';
import { Header } from '../shared/header/header';
import { AboutMe } from './about-me/about-me';
import { Home } from './home/home';
import { SkillSet } from './skill-set/skill-set';
import { MyWork } from './my-work/my-work';
import { Testimonials } from './testimonials/testimonials';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-main-content',
  imports: [Header,Home, AboutMe, SkillSet, MyWork, Testimonials, Contact],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss'
})
export class MainContent {

}
