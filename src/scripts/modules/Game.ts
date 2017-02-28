// imports
	import { Deck } from './Deck';
	import { Card } from './Card';    
	import * as _   from 'lodash'
// -------

export class Game {

    private _deck: Deck;
	private _prediction: Card;
	private _choices: Array<Card>;

	constructor(deck: Deck = new Deck(), prediction? : Card, choices? : Array<Card>) {
        this.deck = deck; 
		if(prediction){ this.prediction = prediction } else { this.updatePrediction(); }
		if(choices){ this.choices = choices } else { this.updateChoices(); }
	}

	updatePrediction(card? : Card){
		this.prediction = card ? card : this.getRandomPrediction()
	}

	updateChoices(){
		let newChoices = [];
		for( let i=0; i < 99 + 1; i++){
			if(i %  9 == 0){
				newChoices.push(this.prediction)
			}
			else {
				newChoices.push(this.deck.getCopyOfRandomCard())
			}
		}
		this.choices = newChoices;
	}

	getRandomPrediction() : Card{
		return this.deck.getCopyOfRandomCard()
	}

// Getters / Setters
	public get deck(): Deck {
		return this._deck;
	}

	public set deck(value: Deck) {
		this._deck = value;
	}
	
	public get prediction(): Card {
		return this._prediction;
	}

	public set prediction(value: Card) {
		this._prediction = value;
	}

	public get choices(): Array<Card> {
		return this._choices;
	}

	public set choices(value: Array<Card>) {
		this._choices = value;
	}
	
	
//------------------- 
    

}