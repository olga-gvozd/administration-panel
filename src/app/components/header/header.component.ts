import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { PersistService } from 'src/app/services/persist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly persistService: PersistService
  ) { }

  ngOnInit(): void {
    this.initMenu();
  }

  private initMenu(): void {
    this.items = [
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

}
