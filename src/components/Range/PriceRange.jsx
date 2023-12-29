import React, { useState, useEffect } from 'react';

const DraggableElement = () => {
  const [isDragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = e => {
      if (isDragging) {
        const x = e.clientX;
        const y = e.clientY;

        setPosition({ x, y });
      }
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = () => {
    setDragging(true);
  };

  return (
    <div
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: '#3498db',
        position: 'absolute',
        cursor: 'move',
        left: `${position.x - 25}px`,
        top: `${position.y - 25}px`,
      }}
      onMouseDown={handleMouseDown}
    >
      <p>
        Coordinates: ({position.x}, {position.y})
      </p>
    </div>
  );
};

export default DraggableElement;
