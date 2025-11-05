import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, Giocatore } from '../services/data';

@Component({
  selector: 'app-giocatori',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="giocatori">
      <h2>Giocatori di Calcio</h2>
      
      <div class="search">
        <input 
          type="text" 
          [(ngModel)]="searchTerm" 
          placeholder="Cerca giocatore..."
          (input)="filtraGiocatori()">
      </div>

      <div class="giocatori-list">
        <div *ngFor="let g of giocatoriFiltrati" class="giocatore-card">
          <div class="info">
            <h3>{{ g.nome }}</h3>
            <p><strong>Squadra:</strong> {{ g.squadra }}</p>
            <p><strong>Ruolo:</strong> {{ g.ruolo }}</p>
            <p><strong>Età:</strong> {{ g.eta }}</p>
          </div>
        </div>
      </div>

      <div *ngIf="giocatoriFiltrati.length === 0" class="no-results">
        Nessun giocatore trovato
      </div>
    </div>
  `,
  styles: [`
    .giocatori { max-width: 800px; margin: 0 auto; }
    .search { margin: 1rem 0 2rem 0; }
    .search input { 
      width: 100%; 
      padding: 0.75rem; 
      border: 2px solid #ddd; 
      border-radius: 6px; 
      font-size: 1rem; 
    }
    .giocatori-list { display: grid; gap: 1rem; }
    .giocatore-card { 
      background: white; 
      padding: 1.5rem; 
      border-radius: 8px; 
      box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
    }
    .giocatore-card h3 { margin: 0 0 0.5rem 0; color: #005baa; }
    .giocatore-card p { margin: 0.25rem 0; }
    .no-results { text-align: center; padding: 2rem; color: #666; }
  `]
})
export class GiocatoriComponent implements OnInit {
  giocatori: Giocatore[] = [];
  giocatoriFiltrati: Giocatore[] = [];
  searchTerm = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.giocatori = this.dataService.getGiocatori();
    this.giocatoriFiltrati = this.giocatori;
  }

  filtraGiocatori() {
    if (!this.searchTerm.trim()) {
      this.giocatoriFiltrati = this.giocatori;
    } else {
      this.giocatoriFiltrati = this.giocatori.filter(g =>
        g.nome.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}