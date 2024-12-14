import p5 from 'p5';

class Boid {
  constructor(p) {
    this.position = p.createVector(p.random(p.width), p.random(p.height)); // Use p for p5 instance methods
    this.velocity = p5.Vector.random2D(); // Use p5 for global methods
    this.velocity.setMag(p.random(2, 4));
    this.acceleration = p.createVector();
    this.maxForce = 0.2;
    this.maxSpeed = 5;
    this.alignVal =1;
    this.cohesionVal =1;
    this.separationVal = 1;
  }

  edges(p) {
    if (this.position.x > p.width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = p.width;
    }
    if (this.position.y > p.height) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
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
        let diff = p5.Vector.sub(this.position, other.position); // Use p5 for global methods
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

  flock(p, boids) {
    let alignment = this.align(p, boids);
    let cohesion = this.cohesion(p, boids);
    let separation = this.separation(p, boids);

    alignment.mult(this.alignVal);
    cohesion.mult(this.cohesionVal);
    separation.mult(this.separationVal);

    this.acceleration.add(alignment);
    this.acceleration.add(cohesion);
    this.acceleration.add(separation);
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.acceleration.mult(0);
  }

  show(p) {
    p.strokeWeight(6);
    p.stroke(255);
    p.point(this.position.x, this.position.y);
  }
}

export default Boid;
