import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  id: number
  card: Card
  constructor(private route: ActivatedRoute, private cardService: CardService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.card = new Card();
    this.cardService.getCardById(this.id).subscribe( data => {
      this.card = data;
    });
  }
}