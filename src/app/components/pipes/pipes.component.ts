import { Component } from '@angular/core';
import { ReadNumberPipe } from './read-number.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [ReadNumberPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  isAdd = false
  n=2

  pow(degree: number) {
    return Math.pow(this.n, degree)
  }

  text = 'hello world'

  toUpperCase(text: string) {
    return text.toUpperCase()
  }
}
