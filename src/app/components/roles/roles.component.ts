import { Component, OnInit } from '@angular/core';
import { IRoles } from 'src/app/shared/models/user.model';

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
  }
] 

  roles: IRoles[] = this.mockup;

  
  constructor() { }

  ngOnInit(): void {
  }

}
