import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListData {

  heros:any[]=["Audi","BMW","Frotune"]

  getData()
  {
    return this.heros
  }
}