import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatasService } from '../service/datas.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-artisan-form',
  standalone: true,
  imports: [ RouterModule, CommonModule, FormsModule ],
  templateUrl: './artisan-form.component.html',
  styleUrl: './artisan-form.component.scss'
})
export class ArtisanFormComponent implements OnInit {

  dataId: any;

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

  formData = {
    name: '',
    email: '',
    message: '',
  };

  sendEmail(form: any) {
    if (!this.dataId || !this.dataId.email) {
      console.error("L'adresse email du destinataire est introuvable !");
      return;
    }

    const recipientEmail = this.dataId.email; // Email du professionnel
    const subject = encodeURIComponent(`Form Submission from ${this.formData.name}`);
    const body = encodeURIComponent(
      `Nom: ${this.formData.name}\nEmail: ${this.formData.email}\nMessage:\n${this.formData.message}`
    );

    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink; // Redirection vers le client mail
  }

  constructor(
    private route: ActivatedRoute,
    private datasService: DatasService
  ) {}

  ngOnInit(): void {
    // Récupération de l'Id depuis l'URL
    const datasId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('datas Id from URL:', datasId); // Ajoutez ce log pour vérifier l'Id

    if (datasId) {
      this.dataId = this.datasService.getDataById(datasId);
      console.log('Retrieved datasId:', this.dataId); // Log pour vérifier le produit
    }
  }
}