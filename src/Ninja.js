import { Heroi } from './Heroi.js';

export class Ninja extends Heroi {
    atacar() {
        console.log(`O ninja atacou usando shuriken`);
    }
}