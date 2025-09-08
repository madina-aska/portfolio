import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonials',
  imports: [TranslateModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  @ViewChild('slider') slider!: ElementRef<HTMLDivElement>;

  private startX = 0;
  private scrollLeft = 0;

  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].pageX;
    this.scrollLeft = this.slider.nativeElement.scrollLeft;
  }

  onTouchMove(event: TouchEvent) {
    const x = event.touches[0].pageX;
    const walk = this.startX - x;
    this.slider.nativeElement.scrollLeft = this.scrollLeft + walk;
  }

  onTouchEnd() {}
}
