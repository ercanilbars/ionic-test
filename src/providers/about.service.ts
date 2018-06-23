import { Injectable,Inject } from '@angular/core';
import {About} from '../entities/about';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/observable';



@Injectable()
export class AboutService {
  
  constructor(private http:HttpClient,@Inject('apiUrl') private apiUrl) { }
  getAbout():Observable<About[]>{


  return this.http.get<About[]>(this.apiUrl+'/about')


 
  }
}
