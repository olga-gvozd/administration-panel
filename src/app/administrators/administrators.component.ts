import { Component, OnInit } from '@angular/core';
import { IUser } from '../shared/models/user.model';


@Component({
  selector: 'app-administrators',
  templateUrl: './administrators.component.html',
  styleUrls: ['./administrators.component.scss']
})
export class AdministratorsComponent implements OnInit {

  mockup = [
    {
      name: 'Administrator',
      username: 'admin',
      email: 'admin@vuedemoapp.com',
      role: 'ADMINISTRATOR'
    },
    {
      name: 'Administrator',
      username: 'admin',
      email: 'admin@vuedemoapp.com',
      role: 'ADMINISTRATOR'
    }
  ]

  admins: IUser[] = this.mockup;

  constructor() { }

  ngOnInit(): void {
  }

}