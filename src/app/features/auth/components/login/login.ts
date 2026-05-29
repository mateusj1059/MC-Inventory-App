import { Component, inject, ChangeDetectorRef } from '@angular/core';  
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from "../../services/auth";
import { LoginRequest } from '../../models/auth';

@Component({
  selector: 'login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  private _AuthService = inject(AuthService);
  private _cdr = inject(ChangeDetectorRef);  

  user = '';
  password = '';
  error = '';
  activeTab = 'login';

  sendLogin() {
    this.error = '';
    const body: LoginRequest = {
      email: this.user,
      password: this.password
    }
    this._AuthService.login(body).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        this.error = err.error.message;
        this._cdr.detectChanges();  
      },
    });
  }
}