import { Component } from '@angular/core';
import { Header } from "../../shared/header/header";
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-privacy-policy',
  imports: [Header, TranslateModule, RouterModule],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss'
})
export class PrivacyPolicy {

}
