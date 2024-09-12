import { fireEvent, render,screen } from "@testing-library/react";
import RTLgetByPlaceholderText from "../TestingComponent/RTLgetByPlaceholderText";

test("getByPlaceholderText test",()=>{
    render(<RTLgetByPlaceholderText/>)
    const input = screen.getByPlaceholderText("enter name");
    expect(input).toBeInTheDocument()
})