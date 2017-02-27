import {Card} from './Card';
import {CardSuit} from './MindReader'

import * as _ from 'lodash';

export class Deck {
    //Constructor   : arrayDeck with all cards, shuffle him, and create a discard array
    //removeCard    : remove a card from the rest of the game
    //shuffle       : shuffle the arrayDeck
    //length        : give the length of the deck
    //drawCards     : return an array with the firts cards of the deck.

    constructor(protected arrayDeck? : Array<Card>) {
        if(!arrayDeck){
            this.initDeck();
        }
        else{
            this.arrayDeck = arrayDeck
        }
    }

    initDeck(withJoker = false, nbColor = 4):void{
        this.arrayDeck = []
        // TODO:
        if(withJoker){
            for(let i=0; i<2; i++){
                this.addCard({
                    value: 0,
                    color: 4
                })
            }
        }
        
        for (let color = 0; color < nbColor; color++) {
            for (let value = 1; value < 13 + 1; value++) {
                this.addCard( { 
                    value: value, 
                    color: color}
                );
            }
        }
        this.shuffle();
    }

    // States of arrays : deck and discard
    shuffle(){
        this.arrayDeck = _.shuffle( this.arrayDeck );
    }

    addCard(card:Card|{value: number, color: CardSuit}){
        if( !(card instanceof Card) ){ 
            card = new Card(card.value, card.color)
        }
        this.arrayDeck.push(<Card>card);
    }

    getCopyOfCard(index: number){
        if(index < 0 || index > this.arrayDeck.length - 1){
            throw new Error('Try to get a card at index : ' + index + ' who doesn\'t exist in deck')
        }
        return this.arrayDeck[index]
    }

    getCopyOfRandomCard(){
        let randomIndex: number = Math.floor(this.getNbCard() * Math.random())
        return this.getCopyOfCard(randomIndex);
    }

    getNbCard(){
        return this.arrayDeck.length;
    }
}