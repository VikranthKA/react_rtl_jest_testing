import sum from "./sum";

test("Testing the sum fn",()=>{
    let a = 10;
    let b = 20;
    let output = 30;
    expect(sum(a,b)).toBe(output)
})