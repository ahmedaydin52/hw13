import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import {ViewbookComponent} from './viewbook/viewbook.component';
import {OldestandlatestbookComponent} from'./oldestandlatestbook/oldestandlatestbook.component';

const routes: Routes = [{ path:'', component:ViewbookComponent},
						{path:'addbook',component:AddbookComponent},
						{path:'oldestandlatest',component:OldestandlatestbookComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
