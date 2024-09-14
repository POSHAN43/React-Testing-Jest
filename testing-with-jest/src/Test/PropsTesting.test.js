import { fireEvent, render,screen } from "@testing-library/react";
import PropsTesting from "../TestingComponent/PropsTesting";

test("Props testing",()=>{
    render(<PropsTesting name={"Poshan"}/>)

    const user = screen.getByText("Poshan");
    expect(user).toBeInTheDocument()
})