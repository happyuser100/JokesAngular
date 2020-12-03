import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
       private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

  ngOnInit(): void {
    debugger
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  // onSubmit() {
  //   debugger
  //   this.router.navigate(["jokes"]);
  // }

  login()
  {
    debugger
    this.router.navigate(["jokes"]);
  }
}
