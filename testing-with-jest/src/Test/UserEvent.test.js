import userEvent from "@testing-library/user-event"
import { fireEvent, render,screen } from "@testing-library/react";
import UserEvent from "../TestingComponent/UserEvent";
test("User event test case", async ()=>{
    userEvent.setup()
    render(<UserEvent/>)
    const btn = screen.getByText("Click");
    await userEvent.click(btn)   //this is alternative of fireEvent
    expect(screen.getByText("Poshan Paikra")).toBeInTheDocument()
})