import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  title!: string;
  description!: string;
  imageUrl!: string;

  ngOnInit() {
    /* Valeurs par défaut */
    this.title = 'Projet 1';
    this.description = "Description du projet 1"
    this.imageUrl = "url de l'image à afficher"
  }
}
