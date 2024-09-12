import sum from "../TestingComponent/sum";

test("Testing for sum function",()=>{
    expect(sum(10,12)).toBe(22)
})