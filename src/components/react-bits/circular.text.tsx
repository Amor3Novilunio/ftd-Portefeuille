import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface CircularTextProps {
    text: string;
    spinDuration?: number;
    onHover?: 'slowDown' | 'speedUp' | 'pause' | 'goBonkers';
    className?: string;
}

const CircularText: React.FC<CircularTextProps> = ({
    text,
    spinDuration = 20,
    onHover = 'speedUp',
    className = ''
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const spinTween = useRef<gsap.core.Tween | null>(null);
    const letters = Array.from(text);

    useEffect(() => {
        if (!containerRef.current) return;

        spinTween.current = gsap.to(containerRef.current, {
            rotate: 360,
            duration: spinDuration,
            ease: 'linear',
            repeat: -1,
            transformOrigin: '50% 50%'
        });

        return () => {
            spinTween.current?.kill();
        };
    }, [spinDuration, text]);

    const handleMouseEnter = () => {
        if (!spinTween.current || !containerRef.current) return;

        switch (onHover) {
            case 'slowDown':
                spinTween.current.timeScale(0.5);
                break;

            case 'speedUp':
                spinTween.current.timeScale(4);
                break;

            case 'pause':
                spinTween.current.pause();
                break;

            case 'goBonkers':
                spinTween.current.timeScale(20);
                gsap.to(containerRef.current, {
                    scale: 0.8,
                    duration: 0.3,
                    ease: 'power2.out'
                });
                break;
        }
    };

    const handleMouseLeave = () => {
        if (!spinTween.current || !containerRef.current) return;

        spinTween.current.resume();
        spinTween.current.timeScale(1);

        gsap.to(containerRef.current, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    };

    return (
        <div
            ref={containerRef}
            className={`m-0 mx-auto rounded-full w-[200px] h-[200px] relative font-black text-white text-center cursor-pointer origin-center ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {letters.map((letter, i) => {
                const rotationDeg = (360 / letters.length) * i;
                const factor = Math.PI / letters.length;
                const x = factor * i;
                const y = factor * i;

                const transform = `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`;

                return (
                    <span
                        key={i}
                        className="absolute inline-block inset-0 text-xl"
                        style={{ transform }}
                    >
                        {letter}
                    </span>
                );
            })}
        </div>
    );
};

export default CircularText;
