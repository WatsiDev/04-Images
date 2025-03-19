import { Component, computed, inject } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { toSignal } from '@angular/core/rxjs-interop';
import { GifService } from '../../services/gif.services';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-gif-history',
  imports: [GifListComponent],
  templateUrl: './gif-history.component.html'
})
export default class GifHistoryComponent {
 GifService = inject(GifService)

 query=toSignal(inject(ActivatedRoute).params.pipe(map((params) => params['query']))
);
gifsByKey=computed(() => this.GifService.getHistoryGifs(this.query()));
}
