
import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { SimpsonsService } from '../simpson/service/simpsons-service';
import { PaginationService } from '../simpson/service/pagination-service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-simpsons-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './simpsons-page.html',
})
export class SimpsonsPageComponent {
  private simpsonsService = inject(SimpsonsService);
  paginationService = inject(PaginationService);
  
  simpsonsResource = toSignal(
    this.simpsonsService.getCharacters(this.paginationService.currentPage()).pipe(
      map(res => res)
    ),
    { initialValue: null }
  );

  
}