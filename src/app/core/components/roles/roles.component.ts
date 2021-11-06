import { Component, OnInit } from '@angular/core';
import { IRoles, Perm } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  mockup = [
    {
      name: 'Administrator',
      permission: 'VU'
    },    
    {
      name: 'Administrator',
      permission: 'VU'
    },    
    {
      name: 'Administrator',
      permission: 'VU'
    },
  ] 

  roles: IRoles[] = this.mockup;
  perm: any[] = Perm;


  constructor() { }

  ngOnInit(): void {
  }

}
