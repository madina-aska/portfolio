import { Component, inject } from '@angular/core';
import { socialLinks } from '../../social-links';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [TranslateModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  links = socialLinks;

  private viewportScroller = inject(ViewportScroller);

  scrollTo(sectionId: string) {
    this.viewportScroller.scrollToAnchor(sectionId);
  }


   currentLang: string;

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang || 'en';
    
    // Optional: Listen for language changes
    this.translate.onLangChange.subscribe(event => {
      this.currentLang = event.lang;
    });
  }
}
