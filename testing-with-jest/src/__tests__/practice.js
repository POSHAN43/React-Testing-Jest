import { render,screen } from "@testing-library/react";
import ButtonBox from "../TestingComponent/ButtonBox";

beforeAll(()=>{              //execute only once before all test cases
    console.log("--------before All hook called---------")
})
beforeEach(()=>{             //execute before each test cases
    console.log("------before Each hook called")
})
test("Practice test case",()=>{
    render(<ButtonBox/>)
    const btn = screen.getByRole("button")
    expect(btn).toBeInTheDocument()
})

test("Practice test case 1",()=>{
    render(<ButtonBox/>)
    const btn = screen.getByRole("button")
    expect(btn).toBeInTheDocument()
})

afterAll(()=>{            //execute after all test cases only once
    console.log("-------After all hook called")
})
afterEach(()=>{           //execute after each test cases
    console.log("------After Each hook called")
})