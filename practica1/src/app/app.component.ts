import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive], // RouterOutlet is required here for routing to work
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected the typo in 'styleUrls'
})
export class AppComponent {
  title = 'practica1';
}
