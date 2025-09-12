import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, TranslateModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private viewportScroller = inject(ViewportScroller);
  private translate = inject(TranslateService);
  private router = inject(Router);

  menuOpen: boolean = false;

  currentLang: string = this.translate.currentLang || 'en';

  @Input() logo: string = './assets/img/logo.png';

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
  }

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

    navigateToSection(sectionId: string) {
    if (this.router.url === '/') {
      // Already on home page
      this.scrollTo(sectionId);
    } else {
      // Navigate to home, then scroll
      this.router.navigate(['/']).then(() => {
        setTimeout(() => this.scrollTo(sectionId), 50); // small delay for DOM
      });
    }
  }

  scrollTo(sectionId: string) {
    this.viewportScroller.scrollToAnchor(sectionId);
  }
}
