import p5 from 'p5';

class Boid {
  constructor(p) {
    this.position = p.createVector(p.random(p.width), p.random(p.height)); // Use p for p5 instance methods
    this.velocity = p5.Vector.random2D(); // Use p5 for global methods
    this.velocity.setMag(p.random(2, 4));
    this.acceleration = p.createVector();
    this.randomize= (val, rand)=>{
        return val -rand + p.random(rand*2)
    }
    this.color = p.color(this.randomize(217, 60),this.randomize(133, 20),60);
    this.maxForce = 0.5;
    this.maxSpeed = 8;
    this.alignVal =1.5;
    this.cohesionVal =2;
    this.separationVal = 3;
    this.mouseVal = 3
    this.delay = 0;
  }
  setDelay(int){
    this.delay=int;

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
  mouseAttraction(p, cluster, invert) {
    let mousePos = p.createVector(p.mouseX, p.mouseY); // Get mouse position
    let desired = p5.Vector.sub(mousePos, this.position); // Vector pointing from boid to mouse
    let distance = desired.mag(); // Distance from the boid to the mouse
    
    // Set a perception radius for mouse attraction (similar to the other behaviors)
    let perceptionRadius = 100; // You can adjust this value to control the range
    
    // If the mouse is within the perception radius, or mouse is clicked apply the attraction force
    if (cluster || distance < perceptionRadius ) {
        
        desired.setMag(this.maxSpeed); // Set the desired speed towards the mouse
        let steer = p5.Vector.sub(desired, this.velocity); // Calculate steering force
        steer.limit(this.maxForce); // Limit the force applied
        if(invert)steer.mult(-3)
        return steer;
    } else {
        // No attraction force if outside the perception radius
        return p.createVector(0, 0);
    }
  }
  
  flock(p, boids,cluster, ratio) {
    //if delay, do not flock, seperate!
    if(this.delay>0){
        console.log(this.delay)
        this.delay--;
        let separation = this.separation(p, boids);
        separation.mult(this.separationVal);
        this.acceleration.add(separation);
    }
    else{
        let alignment = this.align(p, boids);
        let cohesion = this.cohesion(p, boids);
        let separation = this.separation(p, boids);
        let mouseForce = this.mouseAttraction(p, cluster, ratio); // Get the force toward the mouse
      
        alignment.mult(this.alignVal);
        cohesion.mult(this.cohesionVal);
        separation.mult(this.separationVal);
        mouseForce.mult(this.mouseVal)
        
        this.acceleration.add(alignment);
        this.acceleration.add(cohesion);
        this.acceleration.add(separation);
        this.acceleration.add(mouseForce); // Add mouse attraction force
    }
  }
  

  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.acceleration.mult(0);
  }

  show(p, image) {
    p.push(); // Save the current drawing settings

    // Move the origin to the boid's position
    p.translate(this.position.x, this.position.y);

    // Calculate the angle based on the velocity vector
    let angle = p.atan2(this.velocity.x, this.velocity.y);
    angle -= 90;
    // Rotate the canvas by the calculated angle
    p.rotate(angle);

    // Draw the image, centered and scaled to the boid's size
    p.image(image, -10, -20, 20, 40); // Offset by half of width (10) and height (12.5)

    p.pop(); // Restore the drawing settings
}

}

export default Boid;
