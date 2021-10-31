export interface IUser {
  name: string;
  username: string;
  email: string;
  role?: string;
}
export interface IRoles {
  name: string;
  permission?: string
}

export const Perm = [
  {
    name: 'VU',
    description: 'View users'
  },    
  {
    name: 'MU',
    description: 'Manage users'
  },    
  {
    name: 'VA',
    description: 'View administrators'
  },
  {
    name: 'MR',
    description: 'Manage roles'
  },    
  {
    name: 'MA',
    description: 'Manage administrators'
  },    
  {
    name: 'VR',
    description: 'View roles'
  }
]
