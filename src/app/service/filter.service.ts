import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class FilterService {
  private filterSubject = new BehaviorSubject<string>(''); // Initialisation avec une chaîne vide
  filterOrder$ = this.filterSubject.asObservable();

  setFilterOrder(filterOrder: string): void {
    this.filterSubject.next(filterOrder);
  }
}
