import { Component, inject } from '@angular/core';
import { AuthService } from '../data/services/auth.service';
import { User } from '../data/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: false,
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  router = inject(Router)
  authService = inject(AuthService)
  user: User = {id: 0, username: "", password: "", email: ""}
  error: string = ""

  login(event: Event) {
    event.preventDefault()
    this.authService.login(this.user).subscribe(token => {
      if (token.success) {
        localStorage.setItem("token", token.token)
        this.router.navigate(['list'])
      }
      else {
        this.error = token.message
      }
    })
  }
}
