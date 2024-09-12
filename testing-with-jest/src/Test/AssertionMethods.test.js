import { fireEvent, render,screen } from "@testing-library/react";
import AssertionMethods from "../TestingComponent/AssertionMethods";

test("Assertion test for input box",()=>{
    render(<AssertionMethods/>)
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument()   //Check present in screen
    expect(input).toHaveValue()  //To check value attribute
    expect(input).toHaveValue("Poshan Paikra")  //To check value attribute match with given name 
    expect(input).toBeEnabled()  //To check input is enabled hai
    // expect(input).toBeDisabled()  //To check input is disabled hai
    expect(input).toHaveAttribute("id")  //To check id present in input field
    expect(input).toHaveAttribute("data-test")  //To check id present in input field
    expect(input).toHaveClass("test-style")  //To check class in input field
})