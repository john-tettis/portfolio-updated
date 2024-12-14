// Flocking
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/124-flocking-boids.html
// https://youtu.be/mhjuuHl6qHM
import p5 from 'p5'
import Boid from './boid'
const flock = [];
//ms for minimum click time to activate the delay / scatter
const mouseReleaseDuration = 100
let mouseDuration = 0;
let mouseReleased = false;

function setup(p,canvasRef) {
  const canvas = p.createCanvas(p.windowWidth, p.windowHeight);

  canvas.parent(canvasRef)

  for (let i = 0; i < 100; i++) {
    flock.push(new Boid(p));
  }
}

function draw(p) {
  // console.log({mouseReleased, isMousePressed})
  if(p.mouseIsPressed) mouseDuration++;
  p.background(p.color(12, 33, 47));
  for (let boid of flock) {
    if(mouseReleased === true){
      
      boid.setDelay(100);
    }
   
    boid.edges(p);
    boid.flock(p,flock,p.mouseIsPressed);
    boid.update(p);
    boid.show(p);
  }
  mouseReleased = false;
  
}

// Function to handle mouse release


export default function Sketch(ref){
    return  (p) => {
      
        p.setup = () => setup(p, ref);
        p.draw = () => draw(p);
        p.mouseReleased= ()=> {
          if(mouseDuration >  mouseReleaseDuration){
            mouseReleased = true
            mouseDuration = 0;
            console.log('MOUSE RELEASE')
          }
         
        }
        
      };

}
