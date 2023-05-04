import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "User";
  protected headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  protected options = { headers: this.headers };
  protected picService = '';
  constructor(private http: HttpClient) { }

  public getUsers() : Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/${this.url}`,this.options); 
  } 

  public createUsers(user: User) : Observable<User[]> { 
    return this.http.post<User[]>(`${environment.apiUrl}/${this.url}`, user);
  } 

}
