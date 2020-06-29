import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from './user.model'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

   // URL
   public urlUsers: string = environment.baseUrl + 'v1/users/'

   // Data
   public user: User
   public users: User[] = []
   public usersFiltered: User[] = []
 
   constructor(
     private http: HttpClient
   ) { }
 
   create(body: Form): Observable<any> {
     return this.http.post<any>(this.urlUsers, body).pipe(
       tap((res) => {
         this.user = res
         console.log('Created: ', this.user)
       })
     )
   }
   
   getAll(): Observable<User[]> {
     return this.http.get<User[]>(this.urlUsers).pipe(
       tap((res: User[]) => {
         this.users = res
         console.log('Users: ', this.users)
       })
     )
   }
 
   getOne(id: string): Observable<User> {
     let urlID = this.urlUsers + id + '/'
     return this.http.get<User>(urlID).pipe(
       tap((res: User) => {
         this.user = res
         console.log('User: ', this.user)
       })
     )
   }
 
   update(id: string, body: Form): Observable<User> {
     let urlID = this.urlUsers + id + '/'
     return this.http.put<User>(urlID, body).pipe(
       tap((res: User) => {
         this.user = res
         console.log('Updated: ', this.user)
       })
     )
   }
 
   delete(id: string): Observable<any> {
     let urlID = this.urlUsers + id + '/'
     return this.http.get<any>(urlID).pipe(
       tap((res: any) => {
         console.log('Deleted: ', res)
       })
     )
   }
 
   filter(filters: string): Observable<User[]> {
     let urlFilter = this.urlUsers + '?' + filters
     return this.http.get<User[]>(urlFilter).pipe(
       tap((res: User[]) => {
         this.usersFiltered = res
         console.log('Filtered: ', this.usersFiltered)
       })
     )
   }

}
