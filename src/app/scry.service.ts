import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScryService {
  baseURL: string = 'http://localhost:4200';
  scryfallURL: string = 'https://api.scryfall.com/cards/';
  randomCard: any;
  favoriteCards: any[] = [];
  searchResults: any;
  // randomCardImageURI: string = ''

  constructor(private http: HttpClient) {}

  getRandomCard = () => {
    return this.http.get(`${this.scryfallURL}random`);
  };

  autocompleteSearchCardName = (currentTerm) => {
    return this.http.get(`${this.scryfallURL}autocomplete?q=${currentTerm}`);
  };

  fuzzySearchCard = (chosenCardOption) => {
    return this.http.get(`${this.scryfallURL}named?fuzzy=${chosenCardOption}`);
  };

  searchCardReturnList = (submittedTerm) => {
    return this.http.get(`${this.scryfallURL}search?q=${submittedTerm}`);
  };

  // getRandomCardImages = () => {
  //   return this.http.get
  // }

  // addFavorite = (card: any): void => {
  //   this.favoriteCards.push(card);
  //   console.log(this.favoriteCards);
  // };
  // getFavorites = (): any[] => {
  //   return this.favoriteCards;
  // };
}
