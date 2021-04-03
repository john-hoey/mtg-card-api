import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScryService } from '../scry.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  // @Output() favoriteEvent = new EventEmitter<any>();

  // @Input() gifRef: any;

  // @Input() favoritesRef!: any[];

  // favorites: any[] = [];

  constructor(private scryService: ScryService) {}

  ngOnInit(): void {
    // this.getAndSetFavorites();
  }
  // getAndSetFavorites = (): void => {
  //   this.favorites = this.scryService.getFavorites();
  // };
  // emitFavoriteEvent = (card: any): void => {
  //   this.favoriteEvent.emit(card);
  // };
  // checkFavorite = (card: any): boolean => {
  //   return this.favoritesRef.some((item) => {
  //     return item.id === card.id;
  //   });
  // };
}
