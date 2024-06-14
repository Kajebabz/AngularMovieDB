import { Component } from '@angular/core';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, SearchBarComponent, RouterOutlet]
})
export class AppComponent {
  title = 'AngularMovieDB';
}
