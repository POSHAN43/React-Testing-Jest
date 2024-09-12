import { fireEvent, render,screen } from "@testing-library/react";
import RTLQuery from "../TestingComponent/RTLQuery";

test("Check input fiels",()=>{
    render(<RTLQuery/>)
    const inputField = screen.getByRole("textbox")   //getByRole is used to find single element for testing
    const btn1 = screen.getByRole("button");
    expect(inputField).toBeInTheDocument()  //check whether input field present in the document
    expect(inputField).toHaveValue("Poshan Paikra")   //check the given value present or not
    expect(inputField).toBeDisabled()   //check wether disabled or not
    expect(btn1).toBeInTheDocument()
})