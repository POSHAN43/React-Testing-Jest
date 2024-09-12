import { fireEvent, render,screen } from "@testing-library/react";
import RTLgetAllByLabelText from "../TestingComponent/RTLgetAllByLabelText";

test("Test get label by test",()=>{
    render(<RTLgetAllByLabelText/>)
    const input = screen.getAllByLabelText("Username");
    for(let i=0;i<input.length;i++)
    {
        expect(input[i]).toBeInTheDocument();
    // expect(input).toHaveValue("Poshu")
    }
    
})

// test("Test getByLabelText checkbox",()=>{
//     render(<RTLgetLabelByText/>)
//     const inputCheckbox = screen.getByLabelText("Skills");
//     expect(inputCheckbox).toBeInTheDocument();
//     expect(inputCheckbox).toBeChecked()
// })