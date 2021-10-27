import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(
    private router: Router
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
        label: 'About project',
        command: $event => { this.router.navigate(['about']) }
      }
  ];
  }

}
