import { Component } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Import routes

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // Ensure RouterOutlet is imported here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Fixed typo (styleUrl -> styleUrls)
})
export class AppComponent {
  title = 'practica1';
}
