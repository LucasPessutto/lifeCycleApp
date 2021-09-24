import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {

  name: string = ""
  age: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
