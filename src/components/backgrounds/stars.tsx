"use client";
import React, { useState, useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

interface StarsProps {
    className?: string;
    count?: number;
    minSpeed?: number;
    maxSpeed?: number;
    starColor?: string;
}

export const Stars = ({
    className,
    count = 100,
    minSpeed = 0.5,
    maxSpeed = 1.5,
    starColor = "#FFF",
}: StarsProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let stars: { x: number; y: number; speed: number; opacity: number }[] = [];

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            stars = [];
            for (let i = 0; i < count; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
                    opacity: Math.random(),
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach((star) => {
                ctx.fillStyle = starColor;
                ctx.globalAlpha = star.opacity;
                ctx.beginPath();
                ctx.arc(star.x, star.y, 1, 0, Math.PI * 2);
                ctx.fill();

                star.y += star.speed;
                if (star.y > canvas.height) {
                    star.y = 0;
                    star.x = Math.random() * canvas.width;
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [count, minSpeed, maxSpeed, starColor]);

    return (
        <canvas
            ref={canvasRef}
            className={cn("absolute inset-0 h-full w-full pointer-events-none", className)}
        />
    );
};
