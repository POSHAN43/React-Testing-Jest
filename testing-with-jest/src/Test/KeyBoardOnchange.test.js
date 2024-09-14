import userEvent from "@testing-library/user-event"
import { fireEvent, render,screen } from "@testing-library/react";
import KeyBoardOnChange from "../TestingComponent/KeyBoardOnChange";
import act from 'react'
test("User event test case on change", async ()=>{
    userEvent.setup()
    render(<KeyBoardOnChange/>)
    const input = screen.getByRole("textbox");
   await act( async ()=>{
        await userEvent.type(input,"Poshan")   //this is alternative of fireEvent
    })
    
    expect(screen.getByText("Poshan")).toBeInTheDocument()
})