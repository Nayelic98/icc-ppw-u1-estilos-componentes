import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBar {
  progreso = signal(0);

  actualizarProgreso(event: Event) {
    const input = event.target as HTMLInputElement;
    this.progreso.set(Number(input.value));
  }
  
 }
