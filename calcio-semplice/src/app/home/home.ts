import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="home">
      <h2>Benvenuti nell'App Calcio</h2>
      <p>Scopri tutto sul mondo del calcio!</p>
      
      <div class="stats">
        <div class="stat-card">
          <h3>{{ numGiocatori }}</h3>
          <p>Giocatori</p>
        </div>
        <div class="stat-card">
          <h3>{{ numSquadre }}</h3>
          <p>Squadre</p>
        </div>
        <div class="stat-card">
          <h3>{{ numPartite }}</h3>
          <p>Partite</p>
        </div>
      </div>

      <div class="featured">
        <h3>Giocatori Top</h3>
        <div class="giocatori-list">
          <div *ngFor="let g of giocatoriTop" class="giocatore-card">
            <strong>{{ g.nome }}</strong>
            <span>{{ g.squadra }}</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .home {
      max-width: 800px;
      margin: 0 auto;
    }
    .stats {
      display: flex;
      gap: 2rem;
      margin: 2rem 0;
    }
    .stat-card {
      flex: 1;
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      text-align: center;
    }
    .stat-card h3 {
      margin: 0;
      font-size: 2rem;
      color: #005baa;
    }
    .featured {
      margin-top: 2rem;
    }
    .giocatori-list {
      display: grid;
      gap: 1rem;
    }
    .giocatore-card {
      background: white;
      padding: 1rem;
      border-radius: 6px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      display: flex;
      justify-content: space-between;
    }
  `]
})
export class HomeComponent implements OnInit {
  numGiocatori = 0;
  numSquadre = 0;
  numPartite = 0;
  giocatoriTop: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.numGiocatori = this.dataService.getGiocatori().length;
    this.numSquadre = this.dataService.getSquadre().length;
    this.numPartite = this.dataService.getPartite().length;
    this.giocatoriTop = this.dataService.getGiocatori().slice(0, 3);
  }
}