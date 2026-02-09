import sum from "./sum.js";

describe("test for sum function", ()=>{
    test("adds 2 + 2 to equals 4", ()=>{
        expect(sum(2,2)).toBe(4);
    });
    test("adds -4 + -5 to equals -9", ()=>{
        expect(sum(-4,-5)).toBe(-9);
    });
})
