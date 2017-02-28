import { CardInterface, CardSuit } from './MindReader';

class Card implements CardInterface {

    private _value: number;
	private _color: CardSuit;


	constructor(value: number, color: number|CardSuit) {
		this._value = value;
		this._color = color;
	}

	getColorName(){
		switch (this.color) {
			case CardSuit.Hearts:
				return 'hearts'
			case CardSuit.Diamonds:
				return 'diamonds'
			case CardSuit.Clubs:
				return 'clubs'
			case CardSuit.Spades:
				return 'spades'
		}
	}

	getStringifyColor(){
		switch (this.color) {
			case CardSuit.Hearts:
				return '♥'
			case CardSuit.Diamonds:
				return '♦'
			case CardSuit.Clubs:
				return '♣'
			case CardSuit.Spades:
				return '♠'
		}
	}
    getStringifyValue(){
		if(this.value <= 10 && this.value != 1){
			return this.value.toString()			
		}
		else{
			switch (this.value) {
				case 11:
					return 'J'
				case 12:
					return 'Q'
				case 13:
					return 'K'
				case 1:
					return 'A'
			}
		}
	}

	public get value(): number {
		return this._value;
	}

	public set value(value: number) {
		this._value = value;
	}

	public get color(): CardSuit {
		return this._color;
	}


	public set color(value: CardSuit) {
		this._color = value;
	}
	
}

export { Card };
