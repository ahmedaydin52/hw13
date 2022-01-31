import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookstoreService {
	constructor(private _http:HttpClient){}
	
	getBooksFromServer():Observable<any>{
		return this._http.get<any>("http://localhost:8081/bookStore")
	}
	
	addbookFormSubmit():Observable<any>{
		return this._http.get<any>("http://localhost:8081/bookStore");//um keine Fehlermeldung zu bekommen, da post irgendwie nicht funktioniert
	//Mein Ansatz| return this._http.post<any>("http://localhost:8081/bookStore",<any>).subscribe(data=>this.book=data), 
	}
	
	deleteBookFromServer():Observable<any>{
		return this._http.delete("http://localhost:8081/bookStore",)
	}
	
	getOldestAndLatestBookFromServer():Observable<any>{
		return this._http.get<any>("http://localhost:8081/bookStore/oldestandlatest")
	}
}
