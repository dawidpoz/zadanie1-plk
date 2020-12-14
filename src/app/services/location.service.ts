import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private router: Router) { }

  public changeLocation(name: String): void{
    this.router.navigate(['/'+`${name}`]);
    //console.log({name});
  }

  public goToMainPage(): void{
    this.router.navigate(['/']);
  }
}
