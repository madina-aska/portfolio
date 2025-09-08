import { Component, inject } from '@angular/core';
import { socialLinks } from '../../social-links';
import { TranslateModule } from '@ngx-translate/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [TranslateModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  links = socialLinks;

  private viewportScroller = inject(ViewportScroller);

  scrollTo(sectionId: string) {
    this.viewportScroller.scrollToAnchor(sectionId);
  }
}
