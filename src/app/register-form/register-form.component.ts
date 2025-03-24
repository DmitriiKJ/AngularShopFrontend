import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../data/services/auth.service';
import { User } from '../data/interfaces/user.interface';

@Component({
  selector: 'app-register-form',
  standalone: false,
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  router = inject(Router)
  authService = inject(AuthService)
  user: User = {id: 0, username: "", password: "", email: ""}
  error: string = ""

  register(event: Event) {
    event.preventDefault()
    if (this.user.username.length < 2) {
      this.error = "Username length must be more or equal 2"
    }
    else if (this.user.password.length < 2) {
      this.error = "Password length must be more or equal 2"
    }
    else if (this.user.email.length < 2) {
      this.error = "Email length must be more or equal 2"
    }
    else {
      this.authService.register(this.user).subscribe(res => {
        if (res.success) {
          this.router.navigate([''])
        }
        else {
          // It also can be, if user with the same name exists (It will be hanled later)
          this.error = "Something happened on the server"
        }
      })
    }

  }
}
