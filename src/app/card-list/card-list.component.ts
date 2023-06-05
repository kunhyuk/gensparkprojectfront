import { Component, OnInit } from '@angular/core';
import { Card } from '../card'
import { CardService } from '../card.service'
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cards: Card[];
  todoCard: Card[] = [];
  doingCard: Card[] = [];
  doneCard: Card[] = [];

  constructor(private cardService: CardService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCards();
    
  }

  // private getCards(){
  //   this.cardService.getCardsList().subscribe(data => {
  //     this.cards = data;
  //   }
    
  //   );

    
  // }

  private getCards(){
    this.cardService.getCardsList().subscribe(data => {
      this.cards = data;
      data.map(dat => {
        if (dat.status == "To-do") {
          this.todoCard.push(dat)
        } else if (dat.status == "Doing") {
          this.doingCard.push(dat)
        } else if (dat.status == "Done") {
          this.doneCard.push(dat)
        }
      })
    }
    
    );

    
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

  isTodo(card: Card[]) {

    // card.forEach((element) => {
      
    //   if (element.status==="To-do") {
    //     this.todoCard.push(element)
    //   } else if (element.status==="Doing") {
    //     this.doingCard.push(element)
    //   } else if (element.status==="Done") {
    //     this.doneCard.push(element)
    //   }
    // });
  }
}