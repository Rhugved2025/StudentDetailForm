import { Component } from '@angular/core';
import { StudentFormComponent } from './student-form/student-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentFormComponent],
  template: `<app-student-form></app-student-form>`,
})
export class AppComponent {}
