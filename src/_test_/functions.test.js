import { sum, sayHello } from './functions'

test('sum can add two numbers'), () => {
    const result = sum(5, 5)
    expect(result).toBe(10)
}

test('sum can add a number and a number that is a string'), () => {
    const result = sum('2', 5)
    expect(result).toBe(7)
}

