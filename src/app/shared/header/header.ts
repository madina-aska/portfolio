import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, TranslateModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private translate = inject(TranslateService);

  currentLang: string = this.translate.currentLang || 'en';

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
  }

  @Input() logo: string = './assets/img/logo.png';

  private viewportScroller = inject(ViewportScroller);

  scrollTo(sectionId: string) {
    this.viewportScroller.scrollToAnchor(sectionId);
  }

  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;

    const burger = document.querySelector('.burger') as HTMLElement;
    if (burger) {
      if (this.menuOpen) {
        burger.classList.add('hidden');
      } else {
        burger.classList.remove('hidden');
      }
    }
  }
}
