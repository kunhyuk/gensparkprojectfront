import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  card: Card = new Card();
  // options=["To-do", "Done", "Doing"]
  // listOfOptions = []
  constructor(private cardService: CardService,
    private router: Router) { }

  ngOnInit(): void {
    // this.setOptions();
  }

  saveCard(){
    this.cardService.createCard(this.card).subscribe( data =>{
      console.log(data);
      this.goToCardList();
    },
    error => console.log(error));
  }

  goToCardList(){
    this.router.navigate(['/cards']);
  }
  
  onSubmit(){
    console.log(this.card);
    this.saveCard();
  }

//   onChange(value: any) {
//     this.card.status = value.target.value;
// }

  // setOptions() {
  //   setTimeout(() => {
  //     this.listOfOptions.push(this.options);
  //   }, 5000)
  // }
}