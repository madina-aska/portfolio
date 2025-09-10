import { Component } from '@angular/core';
import { Header } from "../../shared/header/header";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-notice',
  imports: [Header, TranslateModule],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss'
})
export class LegalNotice {
  

}
