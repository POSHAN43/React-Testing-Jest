import { render,screen } from "@testing-library/react";
import Snapshot from "../TestingComponent/Snapshot";

test("Snapshot testing",()=>{
    const container = render(<Snapshot/>)
    expect(container).toMatchSnapshot()
})