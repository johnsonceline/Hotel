import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() bookMessage: string;

  constructor() { }

  ngOnInit() {
  }


  payment: any = [];

    model: any = {};
  
    payNow() {

    this.payment.push(this.model);
    console.log(this.model);
    
  }

  


}
