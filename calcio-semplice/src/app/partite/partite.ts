import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Partita } from '../services/data';

@Component({
  selector: 'app-partite',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="partite">
      <h2>Partite di Calcio</h2>
      
      <div class="partite-list">
        <div *ngFor="let partita of partite" class="partita-card">
          <div class="teams">
            <span class="team home">{{ partita.casa }}</span>
            <span class="vs">VS</span>
            <span class="team away">{{ partita.trasferta }}</span>
          </div>
          <div class="date">
            {{ partita.data }}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .partite {
      max-width: 800px;
      margin: 0 auto;
    }
    .partite-list {
      display: grid;
      gap: 1rem;
    }
    .partita-card {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      text-align: center;
    }
    .teams {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin-bottom: 0.5rem;
    }
    .team {
      font-weight: bold;
      font-size: 1.1rem;
    }
    .vs {
      color: #666;
      font-size: 0.9rem;
    }
    .date {
      color: #666;
    }
  `]
})
export class PartiteComponent implements OnInit {
  partite: Partita[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.partite = this.dataService.getPartite();
  }
}