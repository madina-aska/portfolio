import { Component, inject } from '@angular/core';
import { socialLinks } from '../../social-links';
import { Router, RouterModule } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [RouterModule, TranslateModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  links = socialLinks;

  private viewportScroller = inject(ViewportScroller);

  scrollTo(sectionId: string) {
    this.viewportScroller.scrollToAnchor(sectionId);
  }

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
