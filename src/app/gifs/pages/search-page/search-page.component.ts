import { Component, inject, signal } from '@angular/core';
import { GifService } from '../../services/gif.services';
import { Gif } from '../../interfaces/gif.interface';
import { GifListComponent } from "../../components/gif-list/gif-list.component";

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
})
export default class SearchPageComponent {
  GifService = inject(GifService);
  gifs=signal<Gif[]>([]);

  onSearch(query:string){
    this.GifService.searchGifs(query).subscribe((resp)=>{
      this.gifs.set(resp);
    });
  }
}
