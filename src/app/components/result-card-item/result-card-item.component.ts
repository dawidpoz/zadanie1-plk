import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-card-item',
  templateUrl: './result-card-item.component.html',
  styleUrls: ['./result-card-item.component.css']
})
export class ResultCardItemComponent implements OnInit {

  @Input() odmiana: string = "";
  @Input() image: string = "";
  @Input() id: string = ""; 
  @Input() count: number = 0; 
  @Input() probability: number = 0; 
  @Input() gender: string = ""; 
  @Input() class: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
