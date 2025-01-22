import { Component, OnInit } from '@angular/core';
import { DatasService } from '../../service/datas.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FilterByNamePipe } from '../../pipes/filter-by-name.pipe';
import { FormsModule } from '@angular/forms';
import { FilterService } from '../../service/filter.service';

@Component({
  selector: 'app-artisan',
  imports: [ CommonModule, RouterModule, FilterByNamePipe, FormsModule ],
  templateUrl: './artisan.component.html',
  styleUrl: './artisan.component.scss'
})
export class ArtisanComponent implements OnInit {

	datas: any;
	filterOrder:string = '';
  	category: string='';

  	getStarBackground(index: number, note: number): string {
		const fullStars = Math.floor(note); // Nombre d'étoiles pleines
		const fraction = note - fullStars; // Partie décimale de la note

		if (index < fullStars) {
		  	return 'linear-gradient(to right, #FFD700 100%, #E0E0E0 0%)'; // Étoile entièrement remplie (dorée)
		} else if (index === fullStars) {
		  	const percent = fraction * 100; // Pourcentage de remplissage de l'étoile partielle
			return `linear-gradient(to right, #FFD700 ${percent}%, #E0E0E0 ${percent}%)`; // Étoile partiellement remplie
		} else {
		  	return 'linear-gradient(to right, #E0E0E0 100%, #E0E0E0 0%)'; // Étoile vide (grise)
		}
	}

	constructor(
		private route: ActivatedRoute,
		private datasService: DatasService, // Nom en camelCase pour respecter les conventions
		private filterService: FilterService
	) {}

	ngOnInit(): void {
		const allDatas = this.datasService.getDatas(); // Récupère toutes les données
		this.datas = allDatas; // Assurez-vous que toutes les données sont chargées au départ

		this.filterService.filterOrder$.subscribe((filterOrder) => {
			this.filterOrder = filterOrder;
		});

		this.route.params.subscribe((params) => {
			if (params['category']) {
				this.category = params['category'];
				this.datas = allDatas.filter((data: any) => data.category === this.category);
			} else {
				this.datas = allDatas; // Charge toutes les données si aucune catégorie n'est spécifiée
			}
		});
	}
}
