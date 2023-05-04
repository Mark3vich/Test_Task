import { Component } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myapp';
  user: User[] = [];
  userToEdit?: User = new User;

  constructor(private users: UserService) {}

  ngOnInit(): void {
    
  }
 
  updateUserList(users: User[]) { 
    this.user = users;
  }

  editUser(user: User) {
    this.userToEdit = user;
  }
}
