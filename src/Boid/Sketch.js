// Flocking
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/124-flocking-boids.html
// https://youtu.be/mhjuuHl6qHM
import p5 from 'p5'
import Boid from './boid'
const flock = [];

let alignSlider, cohesionSlider, separationSlider;

function setup(p,canvasRef) {
  const canvas = p.createCanvas(p.windowWidth, p.windowHeight);

  canvas.parent(canvasRef)
  alignSlider = p.createSlider(0, 2, 1.5, 0.1);
  cohesionSlider = p.createSlider(0, 2, 1, 0.1);
  separationSlider = p.createSlider(0, 2, 2, 0.1);
  for (let i = 0; i < 300; i++) {
    flock.push(new Boid(p));
  }
}

function draw(p) {
  p.background(0);
  for (let boid of flock) {
    boid.edges(p);
    boid.flock(p,flock);
    boid.update(p);
    boid.show(p);
  }

//   let colors = [];
//   colorMode(HSB, 255);
//   for (let i = 0; i < flock.length; i += 3) {
//     let r = map(flock[i].velocity.mag(), 0, 5, 0, 255);
//     let g = map(flock[i + 1].velocity.mag(), 0, 5, 0, 255);
//     let b = map(flock[i + 2].velocity.mag(), 0, 5, 0, 255);
//     colors.push(color(r, g, b));
//   }

//   let w = width / colors.length;
//   let h = 100;
//   colors.sort((a, b) => hue(a) - hue(b));
//   for (let i = 0; i < colors.length; i++) {
//     let c = colors[i];
//     fill(c);
//     noStroke();
//     rect(i * w, height - h, w, h);
//   }
}

export default function Sketch(ref){
    return  (p) => {
        p.setup = () => setup(p, ref);
        p.draw = () => draw(p);
      };

}
