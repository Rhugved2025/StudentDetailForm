import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ add this
import { StudentFormComponent } from './student-form/student-form.component';
import { ViewStudentsComponent } from './view-students/view-students.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, StudentFormComponent, ViewStudentsComponent], // ✅ add CommonModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm = true;
}
