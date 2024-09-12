import { fireEvent, render,screen } from "@testing-library/react";
import ButtonBox from "../TestingComponent/ButtonBox";

test("Button event test case",()=>{
    render(<ButtonBox/>)
    const btn = screen.getByRole("button");
    fireEvent.click(btn);
    expect(screen.getByText("Poshu")).toBeInTheDocument()
})