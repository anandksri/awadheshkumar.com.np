import React, { useEffect, useRef } from 'react';

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const mouse = {
      x: width / 2,
      y: height / 2,
      radius: 140
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.radius = Math.random() * 2 + 1;
        const colors = ['#00BFFF', '#00E5FF', '#7C3AED', '#38BDF8'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        // Interactive push with mouse
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouse.radius - distance) / mouse.radius;
          this.x -= forceDirectionX * force * 1.5;
          this.y -= forceDirectionY * force * 1.5;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const particleCount = Math.min(Math.floor((width * height) / 18000), 75);
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particle connections
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.2;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.strokeStyle = `rgba(0, 191, 255, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40"
    />
  );
};
