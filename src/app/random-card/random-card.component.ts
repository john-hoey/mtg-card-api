import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScryService } from '../scry.service';

@Component({
  selector: 'app-random-card',
  templateUrl: './random-card.component.html',
  styleUrls: ['./random-card.component.css'],
})
export class RandomCardComponent implements OnInit {
  @Output() favoriteEvent = new EventEmitter<any>();

  @Input() cardRef: any;

  @Input() favoritesRef!: any[];
  randomCard: any;
  randomCardNormalImage: any;
  favoriteCards: any[] = [];

  constructor(private scryService: ScryService) {}

  ngOnInit(): void {
    this.getAndSetRandomCard();
  }

  getAndSetRandomCard = () => {
    this.scryService.getRandomCard().subscribe((response: any) => {
      this.randomCard = response;
      this.scryService.randomCard = response;
      this.randomCardNormalImage = response.image_uris.normal;
      console.log(this.randomCardNormalImage);

      console.log(this.randomCard);
    });
  };

  // getAndSetFavorite = (card: any) => {
  //   this.scryService.addFavorite(card).subscribe((response:any) => {
  //     this.scryService.randomCard = response
  //   })
  // };
  // onFavorite = (card: any): void => {
  //   this.scryService.addFavorite(card);
  //   this.getAndSetFavorites();
  // };
  // getAndSetFavorites = (): void => {
  //   this.favoriteCards = this.scryService.getFavorites();
  // };
  // emitFavoriteEvent = (card: any): void => {
  //   this.favoriteEvent.emit(card);
  // };
}
