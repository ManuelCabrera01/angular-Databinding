import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-two-way-binding',
  templateUrl: './my-two-way-binding.component.html',
  styleUrls: ['./my-two-way-binding.component.css']
})
export class MyTwoWayBindingComponent implements OnInit {
 username: String = "";

 onKey(value) {
       console.log(`Input value: ${value}`);
   }
  constructor() { }

  ngOnInit() {
  }

}
