import { sum } from "./sum";

test("Testing for sum function 1", ()=>{
    expect(sum(10,10)).toBe(20)
})

test("Testing for sum function 2", ()=>{
    let a = 40;
    let b =50;
    let out = 90;
    expect(sum(a,b)).toBe(out)
})