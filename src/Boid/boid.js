import p5 from 'p5';

class Boid {
  constructor(p) {
    this.position = p.createVector(p.random(p.width), p.random(p.height));
    this.velocity = p5.Vector.random2D();
    this.velocity.setMag(p.random(2, 4));
    this.acceleration = p.createVector();
    this.randomize = (val, rand) => {
      return val - rand + p.random(rand * 2);
    };
    this.color = p.color(this.randomize(217, 60), this.randomize(133, 20), 60);
    this.maxForce = 0.5;
    this.maxSpeed = 8;
    this.alignVal = 1.5;
    this.cohesionVal = 2;
    this.separationVal = 3;
    this.mouseVal = 3;
    this.delay = 0;

    this.trail = []; // Store the previous positions
    this.trailLength = 15; // Maximum number of positions to store for the trail
  }

  setDelay(int) {
    this.delay = int;
  }

  edges(p) {
    if (this.position.x > p.width) {
      this.trail = []
      this.position.x = 0;
    } else if (this.position.x < 0) {
        this.trail = []
      this.position.x = p.width;
    }
    if (this.position.y > p.height) {
        this.trail = []
      this.position.y = 0;
    } else if (this.position.y < 0) {
        this.trail = []
      this.position.y = p.height;
    }
  }

  align(p, boids) {
    let perceptionRadius = 25;
    let steering = p.createVector();
    let total = 0;
    for (let other of boids) {
      let d = p.dist(this.position.x, this.position.y, other.position.x, other.position.y);
      if (other != this && d < perceptionRadius) {
        steering.add(other.velocity);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  separation(p, boids) {
    let perceptionRadius = 24;
    let steering = p.createVector();
    let total = 0;
    for (let other of boids) {
      let d = p.dist(this.position.x, this.position.y, other.position.x, other.position.y);
      if (other != this && d < perceptionRadius) {
        let diff = p5.Vector.sub(this.position, other.position);
        diff.div(d * d);
        steering.add(diff);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  cohesion(p, boids) {
    let perceptionRadius = 50;
    let steering = p.createVector();
    let total = 0;
    for (let other of boids) {
      let d = p.dist(this.position.x, this.position.y, other.position.x, other.position.y);
      if (other != this && d < perceptionRadius) {
        steering.add(other.position);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.sub(this.position);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }
    return steering;
  }

  mouseAttraction(p, cluster, invert) {
    let mousePos = p.createVector(p.mouseX, p.mouseY);
    let desired = p5.Vector.sub(mousePos, this.position);
    let distance = desired.mag();

    let perceptionRadius = 100;

    if (cluster || distance < perceptionRadius) {
      desired.setMag(this.maxSpeed);
      let steer = p5.Vector.sub(desired, this.velocity);
      steer.limit(this.maxForce);
      if (invert) steer.mult(-3);
      return steer;
    } else {
      return p.createVector(0, 0);
    }
  }

  flock(p, boids, cluster, ratio) {
    if (this.delay > 0) {
      this.delay--;
      let separation = this.separation(p, boids);
      separation.mult(this.separationVal);
      this.acceleration.add(separation);
    } else {
      let alignment = this.align(p, boids);
      let cohesion = this.cohesion(p, boids);
      let separation = this.separation(p, boids);
      let mouseForce = this.mouseAttraction(p, cluster, ratio);

      alignment.mult(this.alignVal);
      cohesion.mult(this.cohesionVal);
      separation.mult(this.separationVal);
      mouseForce.mult(this.mouseVal);

      this.acceleration.add(alignment);
      this.acceleration.add(cohesion);
      this.acceleration.add(separation);
      this.acceleration.add(mouseForce);
    }
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.acceleration.mult(0);

    // Add the current position to the trail
    this.trail.push(this.position.copy());
    if (this.trail.length > this.trailLength) {
      this.trail.shift(); // Remove the oldest position
    }
  }

  show(p) {
    // Draw the trail
    for (let i = 0; i < this.trail.length - 1; i++) {
      let alpha = p.map(i, 0, this.trail.length - 1, 0, 255); // Fade effect
      p.stroke(p.red(this.color), p.green(this.color), p.blue(this.color), alpha);
      p.strokeWeight(2 + i * 10/15);
      p.line(
        this.trail[i].x,
        this.trail[i].y,
        this.trail[i + 1].x,
        this.trail[i + 1].y
      );
    }

    // Draw the boid as a point
    p.strokeWeight(10);
    p.stroke(this.color);
    p.point(this.position.x, this.position.y);
  }
}

export default Boid;
