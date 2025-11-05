import { Injectable } from '@angular/core';

export interface Giocatore {
  id: number;
  nome: string;
  squadra: string;
  ruolo: string;
  eta: number;
}

export interface Squadra {
  id: number;
  nome: string;
  campionato: string;
}

export interface Partita {
  id: number;
  casa: string;
  trasferta: string;
  data: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private giocatori: Giocatore[] = [
    { id: 1, nome: 'Lionel Messi', squadra: 'Inter Miami', ruolo: 'Attaccante', eta: 36 },
    { id: 2, nome: 'Cristiano Ronaldo', squadra: 'Al Nassr', ruolo: 'Attaccante', eta: 38 },
    { id: 3, nome: 'Kylian Mbappé', squadra: 'PSG', ruolo: 'Attaccante', eta: 24 },
    { id: 4, nome: 'Kevin De Bruyne', squadra: 'Manchester City', ruolo: 'Centrocampista', eta: 32 }
  ];

  private squadre: Squadra[] = [
    { id: 1, nome: 'Juventus', campionato: 'Serie A' },
    { id: 2, nome: 'Inter', campionato: 'Serie A' },
    { id: 3, nome: 'Milan', campionato: 'Serie A' },
    { id: 4, nome: 'Napoli', campionato: 'Serie A' }
  ];

  private partite: Partita[] = [
    { id: 1, casa: 'Juventus', trasferta: 'Inter', data: '2024-11-15' },
    { id: 2, casa: 'Milan', trasferta: 'Napoli', data: '2024-11-16' },
    { id: 3, casa: 'Roma', trasferta: 'Lazio', data: '2024-11-17' }
  ];

  getGiocatori(): Giocatore[] {
    return this.giocatori;
  }

  getSquadre(): Squadra[] {
    return this.squadre;
  }

  getPartite(): Partita[] {
    return this.partite;
  }
}