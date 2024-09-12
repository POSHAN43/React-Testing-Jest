import { fireEvent, render,screen } from "@testing-library/react";
import RTLgetAllByPlaceholderText from "../TestingComponent/RTLgetByPlaceholderText";

test("getByPlaceholderText test",()=>{
    render(<RTLgetAllByPlaceholderText/>)
    const inputs = screen.getAllByPlaceholderText("enter name");
    for(let i=0;i<inputs.length;i++)
    {
    expect(inputs[i]).toBeInTheDocument()
    }
})