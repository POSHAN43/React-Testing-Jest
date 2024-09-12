import { render,screen } from "@testing-library/react";
import FirstTest from "../TestingComponent/firstTest";

test("First test case for case senetive",()=>{
    render(<FirstTest/>)
    const text = screen.getByText("React First Test case");
    expect(text).toBeInTheDocument()
})
test("First test case for case insenetive",()=>{
    render(<FirstTest/>)
    const text = screen.getByText(/React First Test Case/i);
    expect(text).toBeInTheDocument()
})
test("Test case for check image title",()=>{
    render(<FirstTest/>)
    const title = screen.getByTitle("logo for test")
    expect(title).toBeInTheDocument()
})