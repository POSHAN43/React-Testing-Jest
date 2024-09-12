import { fireEvent, render,screen } from "@testing-library/react";
import RTLgetLabelByText from "../TestingComponent/RTLgetLabelByText";

test("Test get label by test",()=>{
    render(<RTLgetLabelByText/>)
    const input = screen.getByLabelText("Username");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("Poshu")
})

test("Test getByLabelText checkbox",()=>{
    render(<RTLgetLabelByText/>)
    const inputCheckbox = screen.getByLabelText("Skills");
    expect(inputCheckbox).toBeInTheDocument();
    expect(inputCheckbox).toBeChecked()
})