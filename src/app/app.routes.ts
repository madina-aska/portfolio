import { Routes } from '@angular/router';
import { MainContent } from './main-content/main-content';
import { PrivacyPolicy } from './main-content/privacy-policy/privacy-policy';
import { LegalNotice } from './main-content/legal-notice/legal-notice';

export const routes: Routes = [
    { path: '', component: MainContent }, // landing page
    { path: 'privacy-policy', component: PrivacyPolicy },
    { path: 'legal-notice', component: LegalNotice },
    { path: '', redirectTo: '/', pathMatch: 'full' }, 
    { path: '**', redirectTo: '' } 
];
