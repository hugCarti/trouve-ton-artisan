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
