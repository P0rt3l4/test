import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL_API = 'http://localhost:3000/api/users';
  dataUser: User = {
    username: '',
    password: '',
    perfil_id: 0,
    correo: '',
    telefono: '',
    estatus: 1,
    createAt:'',
    update:'',
    usuario_id_actualizacion: 0,
  };
  Users: User[];
  constructor(private http:HttpClient) { }

  getUsers(){
    let result =this.http.get<User[]>(this.URL_API)
    console.log(result)
    return this.http.get<User[]>(this.URL_API);
  }

  createUser(User:User){
    return this.http.post(this.URL_API,User)
  }
  updateUser(User:User){
    return this.http.put(`${this.URL_API}/${User.id}`,User)
  }

  deleteUser(id:string){
    return this.http.delete(`${this.URL_API}/${id}`);
  }
}
