import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  student = {
    name: '',
    age: null,
    email: ''
  };

  constructor(private http: HttpClient) {}

 onSubmit() {
  this.http.post('http://localhost:5245/api/students', this.student, { responseType: 'text' })
    .subscribe({
      next: (res: string) => {
        alert(res); // should show "Saved student successfully"
      },
      error: (err) => {
        console.error('HTTP Error:', err);
        alert('Failed to save student');
      }
    });
}

}
