import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {
  students: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:5245/api/students')
      .subscribe({
        next: (data) => this.students = data,
        error: (err) => {
          console.error('Failed to load students:', err);
          alert('Could not fetch student records.');
        }
      });
  }
}
