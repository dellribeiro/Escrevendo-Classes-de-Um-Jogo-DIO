import { Heroi } from './Heroi.js';

export class Mago extends Heroi {
    atacar() {
        console.log(`O mago atacou usando magia`);
    }
}