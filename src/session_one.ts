//const TODO = () => Error('Not implemented')

/**
 * 1: Return the sum of two numbers
 */

export function sum(a: number, b: number): number {
    return a + b
}

/**
 *  Calculate the length of a Vec2
 */

export interface Vec2 {
    x: number
    y: number
}

export function lengthVec2(v: Vec2): number {
    return Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2))
}

/**
 * Calculate the length of a Vec3
 */

export interface Vec3 extends Vec2 {
    z: number
}

export function lengthVec3(v: Vec3): number {
    return Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2) + Math.pow(v.z, 2))
}

/**
 * Calculate the nth Fibonacci number
 */

export function fibo(n: number): number {
    return n <= 2 ? n - 1 : fibo(n - 1) + fibo(n - 2)
}

/**
 * Return the longest string of three
 */

export function longestOfThree(a: string, b: string, c: string): string {
    return a.length > b.length && a.length > c.length ? a : b.length > c.length ? b : c 
}

/**
 * Return the longest string of many
 */

export function longestOfMany(...strings: string[]): string {
    let long: string = ''
    for(let i : number = 0; i < strings.length; i++) {
        if(strings[i].length > long.length) {
            long = strings[i]
        }
    }
    return long
}

/**
 * Check if a value is a number
 */
export function isNumber(value: any): value is number {
    return typeof value === 'number'
}

export interface User {
    name: string
    nick?: string
}

/**
 * Get users nick name, or return a name if one doesn't exist
 */
export function getUserHandle(user: User): string {
    return user.nick ? user.nick : user.name
}

export interface Country {
    name: string
    code: string
    population: number
}

/**
 * Test if a given object is a Country
 */
export function isCountry(obj: unknown): obj is Country {
    const country = obj as Country
    return country && country.name && country.code && country.population ? true : false
}

/**
 * Return an array only with elements that are greater than the param n
 */

export function greaterThanNumber(
    input: Array<number>,
    n: number
): Array<number> {
    return input.filter(num => num > n)
}

/**
 * Return the power of n for each value in the input array
 */

export function toPowerOf(input: Array<number>, n: number): Array<number> {
    return input.map(num => Math.pow(num, n))
}
