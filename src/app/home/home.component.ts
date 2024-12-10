import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatasService } from '../service/datas.service';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ CommonModule, RouterModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

	datas: any;

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
		private datasService: DatasService,
	) {}

	ngOnInit(): void {
		this.datas = this.datasService.getDatas();
	}
}
