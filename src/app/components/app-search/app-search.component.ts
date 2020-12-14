import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LocationService } from "../../services/location.service";

@Component({
  selector: 'app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.css']
})
export class AppSearchComponent implements OnInit {
  clicked: boolean = false;

  constructor(private locationService: LocationService, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Angular Nauka");
  }

  onClick(x: String): void{
    this.clicked = true;
    if(x !== null || x !== "") this.locationService.changeLocation(x.replace("/",""));
    else{
      this.clicked = false;
    }
    this.clicked = false;
    //console.log(x);
  }

}
