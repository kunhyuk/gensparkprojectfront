import { Component, OnInit } from '@angular/core';
import { Card } from '../card'
import { CardService } from '../card.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cards: Card[];

  constructor(private cardService: CardService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCards();
  }

  private getCards(){
    this.cardService.getCardsList().subscribe(data => {
      this.cards = data;
    });
  }

  cardDetails(id: number){
    this.router.navigate(['card-details', id]);
  }

  updateCard(id: number){
    this.router.navigate(['update-card', id]);
  }

  deleteCard(id: number){
    this.cardService.deleteCard(id).subscribe( data => {
      console.log(data);
      this.getCards();
    })
  }
}