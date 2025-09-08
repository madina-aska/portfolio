import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-about-me',
  imports: [TranslateModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss'
})
export class AboutMe {
  constructor(private viewportScroller: ViewportScroller) {}

  scrollToContact() {
    this.viewportScroller.scrollToAnchor('contact');
  }

}
