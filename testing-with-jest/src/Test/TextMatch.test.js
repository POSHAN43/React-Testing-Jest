import { fireEvent, render,screen } from "@testing-library/react";
import TextMatch from "../TestingComponent/TextMatch";

test("Text match with string test case",()=>{
    render(<TextMatch/>)
    // const div1 = screen.getByText("Hello Poshu");  //check exactly the same text
    const div1 = screen.getByText("Hello posh",{exact:false});  //check if at least some of the letter
    expect(div1).toBeInTheDocument()
})

test("Text match with regex test case",()=>{
    render(<TextMatch/>)
    // const div1 = screen.getByText(/Hello/);  //check substring match by regex
    // const div1 = screen.getByText(/Hello posh/i);  //check substring and case insesitive
    const div1 = screen.getByText(/Hello p?oshu/i);  //does not metter wether "p hai ya ni hai"
    expect(div1).toBeInTheDocument()
})

test("Text match with function test case",()=>{
    render(<TextMatch/>)
    const div1 = screen.getByText((content,element)=>content.startsWith("Hello"));  
    expect(div1).toBeInTheDocument()
})