import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatasService } from '../service/datas.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FilterByNamePipe } from '../filter-by-name.pipe';
import { FormsModule } from '@angular/forms';
import { FilterService } from '../service/filter.service';

@Component({
  selector: 'app-home',
  imports: [ CommonModule, RouterModule, FilterByNamePipe, FormsModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

	datas: any;
	filterOrder:string = '';

	constructor(
		private route: ActivatedRoute,
		private datasService: DatasService,
		private filterService: FilterService
	) {}

	ngOnInit(): void {
		this.datas = this.datasService.getDatas();
		this.filterService.filterOrder$.subscribe(
		  	(filterOrder) => (this.filterOrder = filterOrder)
		);
	}
}
