import React, { useEffect, useRef } from 'react';

const DynamicBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const backgroundColor = (o = 1) =>`rgba(72, 162, 68,${o})`;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Resize canvas to fit window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.fillStyle = backgroundColor(); // Set your desired background color here
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

   //globla variable storage
    let particles = [];
    const particleCount = 2;
    const maxParticles = 150
    let lastMousePos = null; // Store last mouse position but initialize to null to avoid artifacts
  

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radiusConstant = 6;
        this.radius = this.radiusConstant;
        this.color = `hsl(${Math.random() * 20 + 48}, 100%, 56%)`;
        

        this.speedX = (Math.random() - 0.5) * 8;
        this.speedY = (Math.random() - 0.5) * 8;
        this.alive = true;
        this.reversed = false;
      }

      update() {
        
        if (this.radius > 0) {
          this.x += this.speedX;
          this.y += this.speedY;
          this.radius +=  -0.2;
        }
        else {
          this.radius=0;
          this.alive = false;
        }
      }
      draw() {
        if (this.radius > 0 || this.reversed) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
          ctx.closePath();
        }
       
      }
    }

    // Smoothly interpolate particles between the mouse's positions
    const drawParticlesSmoothly = (e) => {
        const newMousePos = { x: e.x, y: e.y };
        //check first to make sure the mouse has already been on the canvas since it left again
        if(lastMousePos){
                    // Calculate distance and create particles between the previous and current mouse positions
            const dx = newMousePos.x - lastMousePos.x;
            const dy = newMousePos.y - lastMousePos.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Number of particles to create based on how fast the mouse is moving
            const steps = Math.max(Math.floor(distance / 5), 1); // Adjust 5 for smoother/faster drawing

            for (let i = 0; i < steps; i++) {
                const x = lastMousePos.x + (dx / steps) * i;
                const y = lastMousePos.y + (dy / steps) * i;
                for(let j=0; j<particleCount;j++){
                    particles.push(new Particle(x, y));
                }
            
            }
        }
        else{
            for(let j=0; j<particleCount;j++){
                particles.push(new Particle(e.x,e.y));
            }
        }
      

      

      // Update the last mouse position
      lastMousePos = newMousePos;
    };

    document.body.addEventListener('mousemove', drawParticlesSmoothly);
    //set previous mouse positino to null to avoid random lines being drawn when mouse leaves at (0,0) and returns at (500,500)
    canvas.addEventListener('mouseleave',()=>lastMousePos = null);

    // Animate particles
   
    const animate = () => {
      ctx.fillStyle = backgroundColor(.1); // Set your desired background color here
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      particles = particles.filter((particle,i) => {
        particle.update();
        particle.draw();
        return particle.alive;
      });


      requestAnimationFrame(animate);
    };
    animate();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', drawParticlesSmoothly);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
      }}
    ></canvas>
  );
};

export default DynamicBackground;
