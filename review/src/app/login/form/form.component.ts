import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  reviewForm!: FormGroup ;

  constructor(private fb:FormBuilder) {}
  ngOnInit(): void {
    this.reviewForm = this.fb.group({
      act: [
        'Duo',
        [
          Validators.required
        ]
      ],
      pwd: [
        'qwer12345',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(8)
        ]
      ]

    })
  }
  @ViewChild('test', {read: ElementRef})test :ElementRef | undefined;

  testChild() {
    console.log(this.test);
  }
}
