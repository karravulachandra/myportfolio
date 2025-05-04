import React, { useEffect, useRef } from 'react';

interface CircuitBackgroundProps {
  className?: string;
}

// Tech element types
type ElementType = 'server' | 'storage' | 'dataPacket' | 'processor' | 'circuit';

// Tech element interface
interface TechElement {
  type: ElementType;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  speed?: number;
  progress?: number;
  active?: boolean;
  blinkRate?: number;
  blinkState?: boolean;
  lastBlink?: number;
  path?: {x: number, y: number}[];
  pathIndex?: number;
}

const CircuitBackground: React.FC<CircuitBackgroundProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initial resize
    resizeCanvas();

    // Resize on window resize
    window.addEventListener('resize', resizeCanvas);

    // Circuit nodes
    const nodes: {x: number, y: number, connections: number[], type: 'normal' | 'server' | 'storage' | 'processor'}[] = [];
    const numNodes = Math.floor(canvas.width * canvas.height / 25000);

    // Create random nodes
    for (let i = 0; i < numNodes; i++) {
      // Determine node type
      let type: 'normal' | 'server' | 'storage' | 'processor' = 'normal';
      const typeRand = Math.random();
      if (typeRand > 0.9) {
        type = 'server';
      } else if (typeRand > 0.8) {
        type = 'storage';
      } else if (typeRand > 0.7) {
        type = 'processor';
      }

      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        connections: [],
        type
      });
    }

    // Connect nodes (each node connects to 1-3 closest nodes)
    nodes.forEach((node, i) => {
      const distances: {index: number, distance: number}[] = [];

      // Calculate distances to all other nodes
      nodes.forEach((otherNode, j) => {
        if (i !== j) {
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          distances.push({ index: j, distance });
        }
      });

      // Sort by distance
      distances.sort((a, b) => a.distance - b.distance);

      // Connect to 1-3 closest nodes
      const connectionsCount = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < Math.min(connectionsCount, distances.length); j++) {
        if (distances[j].distance < canvas.width / 5) {
          node.connections.push(distances[j].index);
        }
      }
    });

    // Tech elements
    const techElements: TechElement[] = [];

    // Create servers (3-5)
    const numServers = Math.floor(Math.random() * 3) + 3;
    for (let i = 0; i < numServers; i++) {
      techElements.push({
        type: 'server',
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        width: 40,
        height: 60,
        rotation: 0,
        active: Math.random() > 0.3,
        blinkRate: 500 + Math.random() * 1000,
        blinkState: false,
        lastBlink: 0
      });
    }

    // Create storage units (2-4)
    const numStorage = Math.floor(Math.random() * 3) + 2;
    for (let i = 0; i < numStorage; i++) {
      techElements.push({
        type: 'storage',
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        width: 50,
        height: 30,
        rotation: Math.random() * Math.PI * 2,
        active: Math.random() > 0.3,
        blinkRate: 800 + Math.random() * 1200,
        blinkState: false,
        lastBlink: 0
      });
    }

    // Create processors (4-6)
    const numProcessors = Math.floor(Math.random() * 3) + 4;
    for (let i = 0; i < numProcessors; i++) {
      techElements.push({
        type: 'processor',
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        width: 30,
        height: 30,
        rotation: Math.random() * Math.PI * 2,
        active: true,
        blinkRate: 200 + Math.random() * 300,
        blinkState: false,
        lastBlink: 0
      });
    }

    // Create data packets (10-15)
    const numDataPackets = Math.floor(Math.random() * 6) + 10;
    for (let i = 0; i < numDataPackets; i++) {
      // Create a path between random nodes
      const startNodeIndex = Math.floor(Math.random() * nodes.length);
      const endNodeIndex = nodes[startNodeIndex].connections[
        Math.floor(Math.random() * nodes[startNodeIndex].connections.length)
      ];

      if (endNodeIndex === undefined) continue;

      const startNode = nodes[startNodeIndex];
      const endNode = nodes[endNodeIndex];

      techElements.push({
        type: 'dataPacket',
        x: startNode.x,
        y: startNode.y,
        width: 6,
        height: 6,
        rotation: 0,
        speed: 0.5 + Math.random() * 1.5,
        progress: 0,
        path: [
          { x: startNode.x, y: startNode.y },
          { x: endNode.x, y: endNode.y }
        ],
        pathIndex: 0
      });
    }

    // Animation variables
    let time = 0;
    const waveAmplitude = canvas.height / 50;
    const waveFrequency = 0.01;
    const waveSpeed = 0.05;

    // Pulse variables
    const pulses: {x: number, y: number, radius: number, maxRadius: number, speed: number, alpha: number}[] = [];
    const maxPulses = 5;

    // Add initial pulses
    for (let i = 0; i < maxPulses; i++) {
      addPulse();
    }

    function addPulse() {
      if (pulses.length >= maxPulses) return;

      // Random node as pulse source
      const nodeIndex = Math.floor(Math.random() * nodes.length);
      const maxRadius = Math.random() * 100 + 50;

      pulses.push({
        x: nodes[nodeIndex].x,
        y: nodes[nodeIndex].y,
        radius: 0,
        maxRadius,
        speed: Math.random() * 0.5 + 0.5,
        alpha: 1
      });
    }

    // Draw server
    function drawServer(x: number, y: number, width: number, height: number, active: boolean) {
      // Server rack
      ctx.beginPath();
      ctx.rect(x - width/2, y - height/2, width, height);
      ctx.strokeStyle = active ? 'rgba(66, 153, 225, 0.6)' : 'rgba(66, 153, 225, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Server units
      const unitHeight = height / 5;
      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.rect(x - width/2 + 2, y - height/2 + i * unitHeight + 2, width - 4, unitHeight - 2);
        ctx.fillStyle = active ? `rgba(66, 153, 225, ${0.1 + i * 0.1})` : 'rgba(66, 153, 225, 0.1)';
        ctx.fill();

        // Status lights
        if (active) {
          ctx.beginPath();
          ctx.arc(x + width/2 - 5, y - height/2 + i * unitHeight + unitHeight/2, 1, 0, Math.PI * 2);
          ctx.fillStyle = i % 2 === 0 ? 'rgba(0, 255, 0, 0.7)' : 'rgba(255, 165, 0, 0.7)';
          ctx.fill();
        }
      }
    }

    // Draw storage
    function drawStorage(x: number, y: number, width: number, height: number, rotation: number, active: boolean) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      // Storage unit
      ctx.beginPath();
      ctx.rect(-width/2, -height/2, width, height);
      ctx.strokeStyle = active ? 'rgba(66, 153, 225, 0.6)' : 'rgba(66, 153, 225, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Disk platters
      const numDisks = 3;
      const diskSpacing = width / (numDisks + 1);
      for (let i = 1; i <= numDisks; i++) {
        ctx.beginPath();
        ctx.arc(-width/2 + i * diskSpacing, 0, height/3, 0, Math.PI * 2);
        ctx.strokeStyle = active ? 'rgba(66, 153, 225, 0.5)' : 'rgba(66, 153, 225, 0.2)';
        ctx.lineWidth = 0.5;
        ctx.stroke();

        if (active) {
          ctx.beginPath();
          ctx.arc(-width/2 + i * diskSpacing, 0, height/6, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(66, 153, 225, 0.2)';
          ctx.fill();
        }
      }

      ctx.restore();
    }

    // Draw processor/semiconductor
    function drawProcessor(x: number, y: number, width: number, height: number, rotation: number, active: boolean, blinking: boolean) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      // Processor chip
      ctx.beginPath();
      ctx.rect(-width/2, -height/2, width, height);
      ctx.strokeStyle = active ? (blinking ? 'rgba(66, 153, 225, 0.8)' : 'rgba(66, 153, 225, 0.6)') : 'rgba(66, 153, 225, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Circuit traces
      const gridSize = 4;
      const cellSize = width / gridSize;

      for (let i = 0; i < gridSize; i++) {
        // Horizontal traces
        ctx.beginPath();
        ctx.moveTo(-width/2, -height/2 + i * cellSize);
        ctx.lineTo(width/2, -height/2 + i * cellSize);
        ctx.strokeStyle = active ? 'rgba(66, 153, 225, 0.3)' : 'rgba(66, 153, 225, 0.1)';
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // Vertical traces
        ctx.beginPath();
        ctx.moveTo(-width/2 + i * cellSize, -height/2);
        ctx.lineTo(-width/2 + i * cellSize, height/2);
        ctx.stroke();
      }

      // Transistor points
      for (let i = 0; i < 5; i++) {
        const tx = (Math.random() - 0.5) * width * 0.8;
        const ty = (Math.random() - 0.5) * height * 0.8;

        ctx.beginPath();
        ctx.arc(tx, ty, 1, 0, Math.PI * 2);
        ctx.fillStyle = active ? (blinking ? 'rgba(255, 255, 255, 0.8)' : 'rgba(66, 153, 225, 0.6)') : 'rgba(66, 153, 225, 0.3)';
        ctx.fill();
      }

      ctx.restore();
    }

    // Draw data packet
    function drawDataPacket(x: number, y: number, width: number, height: number) {
      ctx.beginPath();
      ctx.rect(x - width/2, y - height/2, width, height);
      ctx.fillStyle = 'rgba(66, 153, 225, 0.8)';
      ctx.fill();

      // Data packet trail
      ctx.beginPath();
      ctx.rect(x - width/2 - width, y - height/2, width, height);
      ctx.fillStyle = 'rgba(66, 153, 225, 0.4)';
      ctx.fill();

      ctx.beginPath();
      ctx.rect(x - width/2 - width*2, y - height/2, width, height);
      ctx.fillStyle = 'rgba(66, 153, 225, 0.2)';
      ctx.fill();
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update time
      time += 0.01;

      // Draw waveform
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);

      for (let x = 0; x < canvas.width; x += 5) {
        const y = canvas.height / 2 +
                 Math.sin(x * waveFrequency + time * waveSpeed) * waveAmplitude +
                 Math.sin(x * waveFrequency * 2 + time * waveSpeed * 1.5) * waveAmplitude / 2;
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = 'rgba(66, 153, 225, 0.2)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw circuit connections
      ctx.lineWidth = 0.5;
      nodes.forEach((node, i) => {
        node.connections.forEach(j => {
          const otherNode = nodes[j];

          // Calculate distance for opacity
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = canvas.width / 5;
          const opacity = 1 - (distance / maxDistance);

          // Digital signal effect
          const signalOffset = (time * 50) % distance;
          const signalLength = 10;

          // Calculate point along the line at signalOffset
          const ratio = signalOffset / distance;
          const signalX = node.x - dx * ratio;
          const signalY = node.y - dy * ratio;

          // Draw connection line
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(otherNode.x, otherNode.y);
          ctx.strokeStyle = `rgba(66, 153, 225, ${opacity * 0.2})`;
          ctx.stroke();

          // Draw digital signal
          if (Math.random() > 0.7) {
            ctx.beginPath();
            ctx.arc(signalX, signalY, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(66, 153, 225, 0.8)';
            ctx.fill();
          }
        });
      });

      // Draw circuit nodes
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);

        // Different colors for different node types
        let fillColor = 'rgba(66, 153, 225, 0.5)';
        if (node.type === 'server') {
          fillColor = 'rgba(0, 255, 0, 0.5)';
        } else if (node.type === 'storage') {
          fillColor = 'rgba(255, 165, 0, 0.5)';
        } else if (node.type === 'processor') {
          fillColor = 'rgba(255, 0, 255, 0.5)';
        }

        ctx.fillStyle = fillColor;
        ctx.fill();
      });

      // Update and draw tech elements
      techElements.forEach(element => {
        // Update blinking state
        if (element.blinkRate && element.lastBlink !== undefined) {
          const now = Date.now();
          if (now - element.lastBlink > element.blinkRate) {
            element.blinkState = !element.blinkState;
            element.lastBlink = now;
          }
        }

        // Draw based on type
        switch (element.type) {
          case 'server':
            drawServer(element.x, element.y, element.width, element.height, element.active || false);
            break;
          case 'storage':
            drawStorage(element.x, element.y, element.width, element.height, element.rotation, element.active || false);
            break;
          case 'processor':
            drawProcessor(element.x, element.y, element.width, element.height, element.rotation, element.active || false, element.blinkState || false);
            break;
          case 'dataPacket':
            if (element.path && element.pathIndex !== undefined && element.progress !== undefined && element.speed) {
              const currentPath = element.path[element.pathIndex];
              const nextPath = element.path[element.pathIndex + 1];

              if (nextPath) {
                // Move along path
                const dx = nextPath.x - currentPath.x;
                const dy = nextPath.y - currentPath.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                element.progress += element.speed;

                if (element.progress >= distance) {
                  element.progress = 0;
                  element.pathIndex++;

                  // If reached end of path, reset to start
                  if (element.pathIndex >= element.path.length - 1) {
                    element.pathIndex = 0;
                    element.x = element.path[0].x;
                    element.y = element.path[0].y;
                  }
                } else {
                  const ratio = element.progress / distance;
                  element.x = currentPath.x + dx * ratio;
                  element.y = currentPath.y + dy * ratio;
                }

                drawDataPacket(element.x, element.y, element.width, element.height);
              }
            }
            break;
        }
      });

      // Update and draw pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i];

        // Update pulse
        pulse.radius += pulse.speed;
        pulse.alpha = 1 - (pulse.radius / pulse.maxRadius);

        // Draw pulse
        ctx.beginPath();
        ctx.arc(pulse.x, pulse.y, pulse.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(66, 153, 225, ${pulse.alpha * 0.5})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Remove pulse if it's too big
        if (pulse.radius > pulse.maxRadius) {
          pulses.splice(i, 1);

          // Add a new pulse
          if (Math.random() > 0.7) {
            addPulse();
          }
        }
      }

      // Add new pulse randomly
      if (Math.random() > 0.99 && pulses.length < maxPulses) {
        addPulse();
      }

      // Add new data packet occasionally
      if (Math.random() > 0.995) {
        const startNodeIndex = Math.floor(Math.random() * nodes.length);
        if (nodes[startNodeIndex].connections.length > 0) {
          const endNodeIndex = nodes[startNodeIndex].connections[
            Math.floor(Math.random() * nodes[startNodeIndex].connections.length)
          ];

          const startNode = nodes[startNodeIndex];
          const endNode = nodes[endNodeIndex];

          techElements.push({
            type: 'dataPacket',
            x: startNode.x,
            y: startNode.y,
            width: 6,
            height: 6,
            rotation: 0,
            speed: 0.5 + Math.random() * 1.5,
            progress: 0,
            path: [
              { x: startNode.x, y: startNode.y },
              { x: endNode.x, y: endNode.y }
            ],
            pathIndex: 0
          });
        }
      }

      requestAnimationFrame(animate);
    }

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 -z-10 opacity-30 dark:opacity-30 ${className || ''}`}
    />
  );
};

export default CircuitBackground;
