import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { SecondComponentComponent } from "./components/second-component/second-component.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, FirstComponentComponent, SecondComponentComponent]
})
export class AppComponent {
  title = 'hello-angular-second-attempt';
}
