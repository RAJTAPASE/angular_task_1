import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  employee: any[] = [
    {
  "eid": 1,
  "name": "A",
  "email": "fsdgfsgfjgvcgv@gfdgshdak.com",
  "gender": "Female",
  "phone": 8767978700,

    }, {
  "eid": 2,
  "name": "B",
  "email": "khfyge@dhdf.in",
  "gender": "Male",
  "phone":854762543,
    }, {
  "eid": 3,
  "name": "C",
  "email": "nkywewj@jytd.edu",
  "gender": "Female",
  "phone":583656593,
    }, {
  "eid": 4,
  "name": "D",
  "email": "wvalek3@vk.com",
  "gender": "Male",
  "phone":5482348,
    }
    ]
}
