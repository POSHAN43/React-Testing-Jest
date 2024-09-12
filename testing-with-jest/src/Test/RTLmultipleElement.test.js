import { fireEvent, render,screen } from "@testing-library/react";
import RTLmultipleElement from "../TestingComponent/RTLmultipleElement";


test("Check input fiels",()=>{
    render(<RTLmultipleElement/>)
    const input1 = screen.getByRole("textbox",{name:"full name"})
    const input2 = screen.getByRole("textbox",{name:"Email"})
    const btn1 = screen.getByRole("button",{name:"Click"});
    const btn2 = screen.getByRole("button",{name:"Show"});
    const div1 = screen.getByRole("custom-role")   //custom role 
    expect(div1).toBeInTheDocument()
    expect(input1).toBeInTheDocument()
    expect(input2).toBeInTheDocument()
    expect(btn1).toBeInTheDocument()
    expect(btn2).toBeInTheDocument()
})