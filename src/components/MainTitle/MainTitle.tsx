import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface Coordinate {
  x: number;
  y: number;
}
const SPEED = 0.09;

export default function MainTitle() {
  const mousePosition = useRef<Coordinate>({ x: 0, y: 0 });
  const [target, setTarget] = useState<Coordinate>({ x: 0, y: 0 });

  const requestRef = useRef<number>();

  const animate = () => {
    setTarget((prev) => ({
      x: prev.x + (mousePosition.current.x - prev.x) * SPEED,
      y: prev.y + (mousePosition.current.y - prev.y) * SPEED,
    }));

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const handleMousemove = (e: MouseEvent) => {
      mousePosition.current.x = e.pageX - window.innerWidth / 2;
      mousePosition.current.y = e.pageY - window.innerWidth / 2;
    };

    window.addEventListener('mousemove', handleMousemove);

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMousemove);
      requestRef.current && window.cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <Container>
      <span
        style={{
          transform: `translate3d(${-target.x / 5}px, ${target.y / 5}px, 0)`,
        }}
      >
        Gatsby101
      </span>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  font-style: italic;
  color: white;
`;
