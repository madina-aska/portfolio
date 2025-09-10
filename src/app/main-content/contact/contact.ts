import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { socialLinks } from '../../social-links';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, TranslateModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  links = socialLinks;

  private viewportScroller = inject(ViewportScroller);

  scrollTo(sectionId: string) {
    this.viewportScroller.scrollToAnchor(sectionId);
  }

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  };

  showSuccess = false;

  post = {
    endPoint: 'https://madina-askarzada.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.showSuccess = true;

            setTimeout(() => {
              this.showSuccess = false;
            }, 3000);

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
            
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && !ngForm.form.valid) {
      ngForm.resetForm(); 
    }
  }
}
