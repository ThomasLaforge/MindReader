// imports
    import { Deck }          from './Deck';
    import { Card }          from './Card';    
    import * as _            from 'lodash'
// -------

export class Game {

    private _deck: Deck;
	private _prediction: Card;

	constructor(deck: Deck = new Deck(), prediction? : Card) {
        this.deck = deck; 
		this.prediction = prediction ? prediction : this.getRandomPrediction();
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
	
//------------------- 
    

}