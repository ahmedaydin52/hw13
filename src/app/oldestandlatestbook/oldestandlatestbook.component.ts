import { Component, OnInit } from '@angular/core';
import{ Book} from '../book';
import {BookstoreService} from '../bookstore.service';

@Component({
  selector: 'app-oldestandlatestbook',
  templateUrl: './oldestandlatestbook.component.html',
  styleUrls: ['./oldestandlatestbook.component.css']
})
export class OldestandlatestbookComponent implements OnInit {
	public books:Book[]=[]
  constructor(private _service: BookstoreService) { }

  ngOnInit(): void {
	this. getbooks();
  }
  getbooks(){
  this._service.getOldestAndLatestBookFromServer().subscribe(data=> this.books = data,)
	}
}
