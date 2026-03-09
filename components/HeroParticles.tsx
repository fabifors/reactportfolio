"use client";

import { useEffect, useRef } from "react";

const PRIMARY_H = 170;
const PRIMARY_S = 70;
const PRIMARY_L = 55;
const ACCENT_H = 195;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  opacity: number;
  accent: boolean;
}

export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    const CONNECT_DIST = 130;
    let particles: Particle[] = [];

    function buildParticles() {
      const isMobile = width < 768;
      const count = isMobile ? 45 : 90;
      particles = [];
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.06 + Math.random() * 0.14;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          r: 0.8 + Math.random() * 1.2,
          opacity: 0.25 + Math.random() * 0.45,
          accent: Math.random() < 0.2,
        });
      }
    }

    function resize() {
      const parent = canvas!.parentElement;
      width = canvas!.width = parent ? parent.offsetWidth : window.innerWidth;
      height = canvas!.height = parent ? parent.offsetHeight : window.innerHeight;
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.12;
            const h = particles[i].accent ? ACCENT_H : PRIMARY_H;
            ctx.strokeStyle = `hsl(${h} ${PRIMARY_S}% ${PRIMARY_L}% / ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        const h = p.accent ? ACCENT_H : PRIMARY_H;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${h} ${PRIMARY_S}% ${PRIMARY_L}% / ${p.opacity})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    buildParticles();
    draw();

    const ro = new ResizeObserver(() => {
      resize();
      buildParticles();
    });
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
