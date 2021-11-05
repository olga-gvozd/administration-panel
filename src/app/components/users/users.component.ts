import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
  mockup =[
    {
      name: 'User',
      username: 'user',
      email: 'user@angulardemoapp.com'
    }
  ]
  users: IUser[] = this.mockup;
  constructor() { }

  ngOnInit(): void {
  }

}
