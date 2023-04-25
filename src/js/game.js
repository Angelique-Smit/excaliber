import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        let spongebob = new Actor()
        spongebob.graphics.use(Resources.patrick.toSprite());
        spongebob.scale = new Vector(2.5 , 2.5);
        spongebob.pos = new Vector(400 , 300);
        this.add(spongebob);

        for (let i = 0; i < 40; i++) {
        console.log(i)

        let fish = new Actor()
        fish.graphics.use(Resources.Fish.toSprite());
        fish.pointer.useGraphicsBounds = true;
        fish.enableCapturePointer = true;
        fish.pos = new Vector(Math.random() * 800 , Math.random() * 600);
        fish.vel = new Vector(Math.random() * 10 , Math.random() * 10);
        this.add(fish);

        let sus = new Actor()
        sus.graphics.use(Resources.amongUs.toSprite());
        sus.pointer.useGraphicsBounds = true;
        sus.enableCapturePointer = true;
        sus.scale = new Vector(0.1 , 0.1);
        sus.pos = new Vector(Math.random() * 800 , Math.random() * 600);
        sus.vel = new Vector(Math.random() * 10 , Math.random() * 10);
        this.add(sus);

        fish.on("pointerup", () => {
            fish.kill();
        })

        sus.on("pointerup", () => {
            sus.kill();
        })

        }  
    }
}

new Game()
