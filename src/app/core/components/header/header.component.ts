import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/core/services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { PersistService } from 'src/app/core/services/persist.service';
import { Language, LanguageList } from '../../models/language.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  itemsMenu: MenuItem[] = [];
  languageMenu: Language[] = LanguageList;
  selectedLanguage = this.languageMenu[0];

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
    readonly translate: TranslateService,
    private readonly persistService: PersistService
  ) { 
    // Register translation languages
    translate.addLangs(['en', 'ru']);
    // Set default language
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.initMenu();
  }

  private initMenu(): void {
    this.itemsMenu = [
      {
        label: 'Administrators',
        command: $event => { this.router.navigate(['administrators']) }
      },
      {
        label: 'Users',
        command: $event => { this.router.navigate(['users']) }
      },
      {
        label: 'Roles',
        command: $event => { this.router.navigate(['roles']) }
      },
      {
        label: 'About',
        command: $event => { this.router.navigate(['about']) }
      },
      {
        label: 'Language',
        command: $event => { this.router.navigate(['language']) }
      },
      {
        label: 'Sign out',
        command: () => { this.logout() }
      }
    ];
  }

  logout(): void {
    this.authService.setLoginStatus(false);
    this.persistService.clearToken();
    this.router.navigate(['auth']);
  }

  changeLang(event: any): void {
    this.selectedLanguage = event.value;
    this.switchLanguage(event.value);
    console.log(event);
  }

  //Switch language
  switchLanguage(lang: string): void {
    this.translate.use(lang);
  }

}
