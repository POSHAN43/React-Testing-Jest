import userEvent from "@testing-library/user-event"
import { fireEvent, render,screen } from "@testing-library/react";
import FunctionProps from "../TestingComponent/functionProps";

test("function props testing", async ()=>{
    const testFunction = jest.fn();
    userEvent.setup();
    render(<FunctionProps testFunction={testFunction}/>)
    const btn = screen.getByRole("button");
    await userEvent.click(btn);
    expect(testFunction).toBeCalled()
})