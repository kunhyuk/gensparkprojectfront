import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Card } from '../card';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-card',
  templateUrl: './update-card.component.html',
  styleUrls: ['./update-card.component.css']
})
export class UpdateCardComponent implements OnInit {

  id: number;
  card: Card = new Card();
  constructor(private cardService: CardService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    console.log("working");
    console.log(this.card);
    this.id = this.route.snapshot.params['id'];

    this.cardService.getCardById(this.id).subscribe(data => {
      this.card = data;
      console.log(data);
      console.log(this.card);

    }, error => console.log("error", error));
  }

  onSubmit(){
    this.cardService.updateCard(this.id, this.card).subscribe( data =>{
      console.log(data);
      console.log(this.card);
      this.goToCardList();
    }
    , error => console.log(error));
  }

  goToCardList(){
    this.router.navigate(['/cards']);
  }
//   onChange(value: any) {
//     this.card.status = value.target.value;
// }

}
