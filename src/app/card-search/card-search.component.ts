import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ScryService } from '../scry.service';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.css'],
})
export class CardSearchComponent implements OnInit {
  searchTerm: string = '';
  autocompleteResults: any;
  searchResults: any;
  constructor(private scryService: ScryService) {}

  ngOnInit(): void {}

  autocompleteCall = () => {
    this.scryService
      .autocompleteSearchCardName(this.searchTerm)
      .subscribe((response: any) => {
        this.autocompleteResults = response;
        console.log(this.autocompleteResults);
      });
  };

  setSearchTerm = (form: NgForm) => {
    this.searchTerm = form.form.value.term;
    console.log(this.searchTerm);
    this.autocompleteCall();
  };

  searchSubmit = () => {
    // this.scryService
    //   .fuzzySearchCard(this.searchTerm)
    //   .subscribe((response: any) => {
    //     console.log(response);

    //     if (response.error.object === 'error') {
    //       console.log(
    //         response.status,
    //         response.code,
    //         response.type,
    //         response.details
    //       );
    this.scryService
      .searchCardReturnList(this.searchTerm)
      .subscribe((response) => {
        this.searchResults = response;
        console.log(response);
        this.scryService.searchResults = response;
        console.log(this.searchResults);
        console.log(this.searchResults.data);
      });
    //   } else if (response.object === 'card') {
    //     this.searchResults = response;
    //     console.log(this.searchResults);
    //   } else {
    //     this.searchResults = response;
    //     console.log(this.searchResults);
    //   }
    // });
  };
}
