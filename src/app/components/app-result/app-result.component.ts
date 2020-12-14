import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Config, RestApiCommunicationService } from "../../services/rest-api-communication.service";
import { LocationService } from "../../services/location.service";
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './app-result.component.html',
  styleUrls: ['./app-result.component.css']
})
export class AppResultComponent implements OnInit {
  
  gender: string = "";
  id: string = "";
  isMale: boolean = false;
  isLoaded: boolean = false;
  notFound: boolean = false;
  count: number = 0;
  probability: number = 0;

  constructor(private restApiCommunicationService: RestApiCommunicationService, public locationService: LocationService, public route: ActivatedRoute, private titleService: Title) { }

  ngOnInit(): void {
    this.id = this.getId();
    this.titleService.setTitle(this.id + " - Angular Nauka");
    this.prepareCard(this.id);
  }
    
  prepareCard(name: string){
    this.restApiCommunicationService.getInfo(name).subscribe((data: Config) =>
    {
      this.gender = data["gender"];
      this.count = data["count"];
      this.probability = data["probability"];

      if(this.gender === "male") this.isMale = true;
      if(this.gender === null) this.notFound = true;

      this.isLoaded = true;
    });
  }

  back(): void{
    this.locationService.goToMainPage();
  }

  getId(): string{
      return this.route.snapshot.paramMap.get("id") || '';
  }

}
