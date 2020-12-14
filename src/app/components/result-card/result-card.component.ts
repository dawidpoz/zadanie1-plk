import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.css']
})
export class ResultCardComponent implements OnInit {

  constructor() { }

  @Input() isMale: boolean = false;
  @Input() notFound: boolean = false;
  @Input() id: string = ""; 
  @Input() count: number = 0; 
  @Input() probability: number = 0; 
  @Input() gender: string = ""; 

  ngOnInit(): void {
  }

  formatName(name: string): string{
    return name[0].toUpperCase() + name.substring(1).toLowerCase();
  }

}
