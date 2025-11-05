import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router'; // Aggiungi RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule], // Aggiungi RouterModule qui
  template: `
    <header class="header">
      <h1>⚽ Calcio App</h1>
      <nav>
        <a routerLink="/">Home</a>
        <a routerLink="/squadre">Squadre</a>
        <a routerLink="/giocatori">Giocatori</a>
        <a routerLink="/partite">Partite</a>
      </nav>
    </header>
    
    <main class="main">
      <router-outlet></router-outlet>
    </main>

    <footer class="footer">
      <p>&copy; 2024 Calcio App - Esercitazione Angular</p>
    </footer>
  `,
  // ... rest dello styles
})
export class AppComponent {
  title = 'calcio-semplice';
}