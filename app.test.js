import { capitalize } from "./capitalize";
import { reverseString } from "./reverseString";
import { calculator } from "./calculator";
import { caesarCipher } from "./caesarCipher";
import { analyzeArray } from "./analyzeArray";

describe('Capitalize Function', () => {
    test('Capitalize works', () => {
        expect(capitalize).toBeDefined();
    })

    test('Capitalize should return False for datatypes other than string', () => {
        expect(capitalize(9)).toBeFalsy();
    })
    
    test('capitalize should return String', () => {
        expect(capitalize("string")).toBe("String");
    })
    
    test('capitalize should return String2', () => {
        expect(capitalize("string2")).toBe("String2");
    })
})

describe('reverseString Function ', () => {
    test('ReverseString should exist', () => {
        expect(reverseString).toBeDefined();
    })

    test('reverseString should return reversed Paramter', () => {
        expect(reverseString("string")).toBe("gnirts");
        expect(reverseString("abc")).toBe('cba');
    })
})

describe('calculator object', () => {
    test('calculator object should exist', () => {
        expect(calculator).toBeDefined();
    })

    test('test arithmetic functions from calculator', () => {
        expect(calculator.add(2, 3)).toBe(5);
        expect(calculator.sub(3, 1)).toBe(2);
        expect(calculator.div(10, 2)).toBe(5);
        expect(calculator.mul(2, 3)).toBe(6);
    })
})

describe('caesar cipher function', () => {
    test('first parameter should be alphabet', () => {
        expect(caesarCipher(1, 1)).toBe("first paramter should be string");
    })

    test('second parameter shoulb be Number', () => {
        expect(caesarCipher('abc', '2')).toBe("Second Parameter should be Number");
    })


    test('implement test wrapping', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
        expect(caesarCipher('abc', 1)).toBe('bcd');
    })

    test('test case preservation', () => {
        expect(caesarCipher('ABc', 1)).toBe('BCd');
    })

    test('punctuation and space test', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!'); 
    })

})


describe('analize an array to get its stats', () => {
    test('check the returned obj fields : average,min,max,length', () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
        })
    })
    
})