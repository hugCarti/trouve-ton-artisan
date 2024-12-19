import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatasService } from '../service/datas.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-artisan-form',
  standalone: true,
  imports: [ RouterModule, CommonModule, ReactiveFormsModule ],
  templateUrl: './artisan-form.component.html',
  styleUrl: './artisan-form.component.scss'
})
export class ArtisanFormComponent implements OnInit {

  dataId: any;
  envoieForm: FormGroup;

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
    private fb: FormBuilder
  ) {
    this.envoieForm = this.fb.group({
      input1: ['', Validators.required],
      input2: ['', Validators.required],
      textarea: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Récupération de l'Id depuis l'URL
    const datasId = Number(this.route.snapshot.paramMap.get('id'));

    if (datasId) {
      this.dataId = this.datasService.getDataById(datasId);
    }
  }

  onSubmit(): void {
    if (this.envoieForm.valid) {
      alert('Mail envoyé');
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }
}