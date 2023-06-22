import { FormBuilder, FormsModule, Validators, ReactiveFormsModule, FormControl} from '@angular/forms';
import { Component } from '@angular/core';
import { Observable, startWith, map } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}


  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  myControl = new FormControl('');
  options: string[] = ['Boksburg', 'Germiston', 'Alberton'];
  filteredOptions!: Observable<string[]>;


  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  startDate = new Date(1990, 0, 1);

}
