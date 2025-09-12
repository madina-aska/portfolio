import { Component } from '@angular/core';
import { ProjectCard } from './project-card/project-card';
import { TranslateModule } from '@ngx-translate/core';

interface Project {
  title: string;
  techStack: string;
  imageUrl: string;
  description: string;
  url: string;
  liveTestUrl: string;
}

@Component({
  selector: 'app-my-work',
  imports: [ProjectCard, TranslateModule],
  templateUrl: './my-work.html',
  styleUrl: './my-work.scss',
})
export class MyWork {
  projects: Project[] = [
    {
      title: 'Pollo Loco',
      techStack: 'JavaScript | HTML | CSS',
      imageUrl: './assets/img/El Pollo Loco.jpg',
      description: 'PROJECTS.POLLO_LOCO.DESCRIPTION',
      url: 'https://github.com/madina-aska/el_pollo_loco.git',
      liveTestUrl: 'https://madina-askarzada.com/el_pollo_loco', 
    },
    {
      title: 'Join',
      techStack: 'Angular | TypeScript | HTML | SCSS | Firebase',
      imageUrl: './assets/img/Join.jpg',
      description: 'PROJECTS.JOIN.DESCRIPTION',
      url: 'https://github.com/madina-aska/el_pollo_loco.git',
      liveTestUrl: 'https://github.com/madina-aska/el_pollo_loco.git', // must give the ptoject url in my own server
    },
  ];
}
