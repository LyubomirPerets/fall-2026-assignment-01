export type Circle = {};

export type Rectangle = {};

export type Square = {};

export type Shape = Circle | Rectangle | Square;

export function calculateArea(shape: Shape): number {
  for (const key in shape) {
    if (shape.hasOwnProperty(key)) {
      throw new Error(`Invalid shape type: ${key}`);
    }
  }
  return 0;
}
