import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { CaptchaService } from 'src/app/services/captcha.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  providers: [CaptchaService],
})
export class EditUserComponent implements OnInit {
  @Input() user?: User;
  @Output() usersUpdate = new EventEmitter<User[]>();
  public isVisited = false;
  private inputValue = '';
  private passwordValue = '';
  private message = '';
  private isFlag = false;

  private isInputValue = '';
  private isField = true;

  private response: any;
  private downloadWasSuccessful = false;

  constructor(
    private userService: UserService,
    private valueCaptcha: CaptchaService
  ) {}

  ngOnInit(): void {}
  // 
  public getInputValue2(argument: any): any {
    this.isInputValue = argument.target.value;
    return this.isInputValue;
  }

  public getInput(): any {
    return this.isInputValue;
  }

  public isInputUndefind(argument: any): boolean {
    if (argument.target.value != '') {
      this.isField = false;
    }
    return this.isField;
  }
  // 
  public getField(): boolean {
    return this.isField;
  }

  public output(
    param0: boolean,
    param1: boolean | null,
    param2: boolean | null,
    param3: boolean | null,
    param4: boolean | null,
    param5: boolean | null
  ): string | null {
    if (
      param0 == true &&
      param1 == false &&
      param2 == false &&
      param3 == false &&
      param4 == false &&
      param5 == false
    ) {
      return null;
    }
    return '';
  }

  public valueInput(event: any): String {
    this.inputValue = event.target.value;
    if (this.inputValue == this.passwordValue) {
      this.isFlag = true;
      this.message = ' valid';
    } else {
      this.isFlag = false;
      this.message = ' No valid';
    }
    return this.message;
  }

  public checkForm(): boolean {
    return this.isFlag ? true : false;
  }

  public getMessage() {
    return this.message;
  }

  public createCaptcha() {
    this.passwordValue = this.valueCaptcha.getValue();
    return this.passwordValue;
  }

  protected checkVisited(): void {
    this.isVisited = !this.isVisited;
  }

  protected getUser(): void {
    setTimeout(() => {
      this.userService
        .getUsers()
        .subscribe((users: User[]) => (this.response = users));
      this.downloadWasSuccessful = true;
    }, 500);
  }

  protected createElement() {
    if (this.downloadWasSuccessful == true) {
      let masiv = [
        this.response.name,
        this.response.email,
        this.response.telephone,
        this.response.message,
      ];

      const currentDiv = document.getElementById('container');
      let text = document.createTextNode('');

      for (let i = 0; i < masiv.length; i++) {
        let newElement = document.createElement('div');
        if (i % 2 == 0) {
          newElement.classList.add('block1');
        } else {
          newElement.classList.add('block2');
        }
        text = document.createTextNode(masiv[i]);
        newElement.appendChild(text);
        currentDiv?.appendChild(newElement);
      }
      this.downloadWasSuccessful = false;
    }
  }

  protected removeElement(): void {
    document.getElementById('removeElements')?.remove();
  }

  protected createUser(user: User): void {
    this.userService
      .createUsers(user)
      .subscribe((users: User[]) => this.usersUpdate.emit(users));
  }
}
