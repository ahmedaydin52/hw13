import { Component, OnInit } from '@angular/core';
import {BookstoreService} from '../bookstore.service';
import{ Book} from '../book';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
	public book: any;
  constructor(private _service: BookstoreService, private _route: BookstoreService) { }

  ngOnInit(): void {
	this.addbook();
  }
  addbook(){
	this._service.addbookFormSubmit().subscribe(data=>this.book=data)
}

}
