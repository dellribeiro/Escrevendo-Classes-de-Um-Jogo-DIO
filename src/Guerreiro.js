import { Heroi } from './Heroi.js';

export class Guerreiro extends Heroi {
    atacar() {
        console.log(`O guerreiro atacou usando espada`);
    }
}