import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  message='';
  userDetailForm:FormGroup;

  show:boolean=false;

  constructor(private fb:FormBuilder) {
  

   }


  ngOnInit(): void {
    this.userDetailForm=this.fb.group({
      FirstName:['',[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z ]{3,20}$')]],
      LastName:['',[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z ]{3,20}$')]],
      Email:['',[Validators.required,Validators.email]],
      Password:['',Validators.required],
      DOB:['',Validators.required],
      gender:['',Validators.required],
      Designation:['',Validators.required],
      Level:['',Validators.required]
    })
  
      
  }

  


  Submit(){
    if(this.userDetailForm.valid)
    {
      alert("Form Submitted");
    }
    else
    {
      alert("Form Data not Correct!");
    }
    
  }

  get fetchFormData(){

    return this.userDetailForm.controls;

  }

  
}
