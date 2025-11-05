import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Squadra } from '../services/data';

@Component({
  selector: 'app-squadre',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="squadre">
      <h2>Squadre di Calcio</h2>
      
      <div class="squadre-list">
        <div *ngFor="let squadra of squadre" class="squadra-card">
          <h3>{{ squadra.nome }}</h3>
          <p>{{ squadra.campionato }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .squadre {
      max-width: 800px;
      margin: 0 auto;
    }
    .squadre-list {
      display: grid;
      gap: 1rem;
    }
    .squadra-card {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      border-left: 4px solid #005baa;
    }
    .squadra-card h3 {
      margin: 0 0 0.5rem 0;
      color: #005baa;
    }
  `]
})
export class SquadreComponent implements OnInit {
  squadre: Squadra[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.squadre = this.dataService.getSquadre();
  }
}