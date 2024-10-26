import { Mago } from './Mago.js';
import { Guerreiro } from './Guerreiro.js';
import { Monge } from './Monge.js';
import { Ninja } from './Ninja.js';

const mago = new Mago("Gandalf", 150);
const guerreiro = new Guerreiro("Conan", 30);
const monge = new Monge("Liu Kang", 35);
const ninja = new Ninja("Hanzo", 25);

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
