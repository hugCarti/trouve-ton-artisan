import { Component, OnInit } from '@angular/core';
import { DatasService } from '../service/datas.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artisan',
  imports: [ CommonModule, RouterModule ],
  templateUrl: './artisan.component.html',
  styleUrl: './artisan.component.scss'
})
export class ArtisanComponent implements OnInit {

  datas: any;
  category: string | null = null;

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
		private datasService: DatasService // Nom en camelCase pour respecter les conventions
	) {}

  ngOnInit(): void {
     // Écoute les changements du paramètre "category"
     this.route.params.subscribe((params) => {
      this.category = params['category']; // Récupère la catégorie depuis l'URL

      // Filtre les données par catégorie
      const allDatas = this.datasService.getDatas();
      this.datas = allDatas.filter((data: any) => data.category === this.category);
    });
  }
}
