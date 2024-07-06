const world = 'world';

// require('./Design Patterns/strategy');

export function hello(who: string = world): string {
  return `Hello ${who}! `;
}

hello('Sid');
