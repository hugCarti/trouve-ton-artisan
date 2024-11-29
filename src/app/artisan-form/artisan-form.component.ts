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

  onSubmit(formValue:  {nom: string, objet: string, message: string}) {
    console.log(formValue);
    
  }
}