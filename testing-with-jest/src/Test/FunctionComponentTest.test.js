import { fireEvent, render,screen } from "@testing-library/react";
import FunctionComponentTest from "../TestingComponent/FunctionComponentTest";
import { handleOtherMethod } from "../TestingComponent/FunctionComponentTest";
test("test function method",()=>{
    render(<FunctionComponentTest/>)
    const btn = screen.getByTestId("btn1");
    fireEvent.click(btn);
    expect(screen.getByText("Poshan bhaiya")).toBeInTheDocument()
})

test("test outer method in function component",()=>{
    expect(handleOtherMethod()).toMatch("Hi poshu")
})