import { Client } from './../client';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-lifecycle',
  templateUrl: './main-lifecycle.component.html',
  styleUrls: ['./main-lifecycle.component.css']
})
export class MainLifecycleComponent implements OnInit {

  public clients: Client[] = []
  public name: string = ""
  public age: number = 0
  public food: string = ""
  public editClient: number = -1

  public foods: string[] = ["Rice", "Beans", "Pizza"]

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    if (this.editClient == -1){
      this.clients.push({
        name: this.name,
        age: this.age,
        food: this.food
      })
    } else {
      this.clients[this.editClient].name = this.name
      this.clients[this.editClient].age = this.age
      this.clients[this.editClient].food = this.food
      this.editClient = -1
    }
    this.name = ""
    this.age = 0
    this.food = ""
  }

  edit(i: number) {
    this.name = this.clients[i].name
    this.age = this.clients[i].age
    this.food = this.clients[i].food
    this.editClient = i
  }

  remove(i: number) {
    this.clients.splice(i, 1)
  }
}
