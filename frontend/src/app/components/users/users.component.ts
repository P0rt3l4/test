import { Component, OnInit, ɵɵsanitizeUrlOrResourceUrl } from '@angular/core';
import {UserService} from '../../services/user.service'
import {NgForm} from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public UserService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.UserService.getUsers().subscribe(
      res=>{
        this.UserService.Users = res;
      },
      err => console.log(err)
    )
  }

  resetForm(form:NgForm){
    form.onReset()
  }
  formUser(form:NgForm){
    if(form.value.id){
      this.updateUser(form);
    }else{
      this.createUser(form)
    }
    console.log(form.value);
  }

  deleteUser(id:any){
    if(confirm("Are your sure want to delete it?")){
      this.UserService.deleteUser(id).subscribe(
        res=>{
          this.getUsers();
        },
        err=>{console.log(err)}
      );
    }
  }

  editUser(User:User){
    console.log(User)
      this.UserService.dataUser = User;
  }

  createUser(form:NgForm){
    this.UserService.createUser(form.value).subscribe(
      res=>{
        console.log(res)
        this.getUsers();
        form.reset();
      },
      err=>{console.log(err)}
      );
  }
  updateUser(form:NgForm){
    this.UserService.updateUser(form.value).subscribe(
      res=>{
        console.log(res)
        this.getUsers();
        form.reset();
      },
      err=>{console.log(err)}
      );
  }

}
