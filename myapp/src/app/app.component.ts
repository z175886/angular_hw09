// import { Component } from '@angular/core';


// export class PlayingCard {

//   cardVal: string="";
//   suit: string= "";

// }
// @Component({  


//   selector: 'app-root',
//   template:`<h1> Hello world! {{title}} <br/>
//  {{card.cardVal}} OF {{card.suit}}.  <br/>
//  Card: <input [(ngModel)] = "card.cardVal">
//  <ul><li *ngFor="let card of cards"> {{card.cardVal}}</li></ul> 
//  <table> 
//    <tr *ngFor = "let card of cards"> 
//    <td><ul><li> {{card.cardVal}}</li></ul></td>
//    <td><ul><li> {{card.suit}}</li></ul></td>
//    </tr>
// </table>
// <ul *ngFor="let item of firstNames; let i = index; ">
//  <li>{{"item" + i +":"+ item}}</li>
// </ul>

// <input [(ngModel)]="myinput">
//  <input type='button' (click)=doSomething(myinput)>
//  {{myoutput}} <br>

//  <input [(ngModel)]="myinput1">
//  <input type='button' (click)=doSomething(myinput1)>
//  {{myoutput1}} <br>

// <!-- Show cards in unordered list. -->
// <ul><li *ngFor="let card of cards" (click)="onSelect(card)">
//  {{card.cardVal}}</li>
//  </ul>
// <!-- Show is selectedCard is defined. -->
// <div *ngIf="selectedCard">
//  <h2>{{selectedCard.cardVal}} **</h2>
//  <input [(ngModel)]="selectedCard.cardVal" placeholder="name" />
// </div>


// `
// })

// export class AppComponent {
//   title = 'This is Angular!';
//   cards: PlayingCard[] = [
// {cardVal: "Ace", suit: "Spades"},
// {cardVal: "Two", suit:"Clubs"},
// {cardVal: "Six", suit:"Hearts"},
//   ];
//   // Declare and initialize a PlayingCard object.
//   card: PlayingCard = {
//   cardVal: "Ace",
//   suit: "Spades"
//   };
//   card1: PlayingCard = {
//     cardVal: "Ace",
//     suit: "Spades"
//     };

//     firstNames = ['abe', 'amy', 'al'];

//     myinput = '';
//     myoutput = '';
//     myinput1 = '';
//     myoutput1 = '';
//     doSomething(someContent:any) {
//     alert(someContent);
//     this.myoutput = someContent;
//     }
   
//     selectedCard!: PlayingCard;
 
//     onSelect(card: PlayingCard) { 
//       alert(card.suit);
//     this.selectedCard = card; 
    
//     }
   
//  }

import { Component } from '@angular/core';
@Component({
 selector: 'app-root',
 template:
 `
<section>
<form #myForm="ngForm">
Name:
<input type="text" pattern="[a-zA-Z ]*" minlength="3" required 
[(ngModel)]="myName" name="firstName" #firstName="ngModel" >
<div [hidden]="firstName.valid || firstName.pristine">
This control is invalid.</div>
<p *ngIf="firstName?.errors?.['required']">This field is required.</p>
<p *ngIf="firstName?.errors?.['pattern']">
Only alphabetical characters are allowed.</p>
<p *ngIf="firstName?.errors?.['minlength']">
This entry must have at least three characters.</p>
<button type="submit" class="btn btn-default" 
[disabled]="!myForm.form.valid" (click)="onSubmit()">Submit</button>


LastName:
<input type="text" pattern="[a-zA-Z ]*" minlength="2" required
[(ngModel)]="myLastName" name="LastName" #LastName="ngModel" >
<div [hidden]="LastName.valid || LastName.pristine">
This control is invalid.</div>
<p *ngIf="LastName?.errors?.['required']">This field is required.</p>
<p *ngIf="LastName?.errors?.['pattern']">
Only alphabetical characters are allowed.</p>
<p *ngIf="LastName?.errors?.['minlength']">
This entry must have at least three characters.</p>
<button type="submit" class="btn btn-default"
[disabled]="!myForm.form.valid" (click)="onSubmit()">Submit</button>
</form>


</section>
`
})
export class AppComponent {
 myName: string;
 myLastName!:string;
 constructor() {
 this.myName = "frank";
 this.myLastName = "";
 }
 onSubmit() {
 alert(this.myName);
 alert(this.myLastName);
 }
}

