export type Circle = { kind: 'circle'; radius: number };

export type Rectangle = { kind: 'rectangle'; width: number; height: number };

export type Square = { kind: 'square'; side: number };

export type Shape = Circle | Rectangle | Square;

export function calculateArea(shape: Shape): number {
  switch(shape.kind) {
    case 'circle':
      return Math.PI * shape.radius * shape.radius;
    case 'rectangle':
      return shape.width * shape.height;
    case 'square':
      return shape.side * shape.side;
  }
}
