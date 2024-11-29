import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterService } from '../service/filter.service';

@Component({
  selector: 'app-header',
  imports: [ RouterModule, CommonModule, FormsModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  filterOrder: string = '';

  constructor(private filterService: FilterService) {}

  onFilterChange(): void {
    this.filterService.setFilterOrder(this.filterOrder);
  }}
