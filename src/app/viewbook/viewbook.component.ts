import { Component, OnInit } from '@angular/core';
import {BookstoreService} from '../bookstore.service';
import{ Book} from '../book';
import {Router} from '@angular/router';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {
	public books:Book[]=[]
  constructor(private _service: BookstoreService, private _route: Router) { }

  ngOnInit(): void {
	this.getbooks();
  }
  
  getbooks(){
	//when the page is open, we want to call to the API
	this._service.getBooksFromServer().subscribe(data=> this.books = data,)
}
	RedirectToAddBook(){
		this._route.navigate(['/addbook'])
	}
	RedirectToDeleteBook(){
		this._service.deleteBookFromServer();
	}
	RedirectToOldestAndLatest(){
		this._route.navigate(['/oldestandlatest'])
	}

}
