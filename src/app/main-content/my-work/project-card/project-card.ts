import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-card',
  imports: [TranslateModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  @Input() title = '';
  @Input() techStack = '';
  @Input() imageUrl = '';
  @Input() description = '';
  @Input() url = '';
  @Input() liveTestUrl = '';
  @Input() index = 0;
  router: any;

  openProject() {
    if (!this.url) return;

    if (this.url.startsWith('http')) {
      window.open(this.url, '_blank');
    } else {
      this.router.navigate([this.url]);
    }
  }

  openLiveTest() {
    if (!this.liveTestUrl) return;

    if (this.liveTestUrl.startsWith('http')) {
      window.open(this.liveTestUrl, '_blank'); // external link
    } else {
      this.router.navigate([this.liveTestUrl]); // internal route
    }
  }
}
