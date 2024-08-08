import { fireEvent, render, screen } from '@testing-library/react';
import Input from './Input';

beforeAll(()=>{
    console.log("before test case")
})
beforeEach(()=>{
    console.log("Before each test case")
})
test("On change event test", ()=>{
    render(<Input/>)
    let input = screen.getByRole("textbox");
    fireEvent.change(input,{target:{value:"a"}})
    expect(input.value).toBe("a")
  })

test("On click event test", ()=>{
    render(<Input/>)
    let btn = screen.getByRole("button");
    fireEvent.click(btn);
    expect(screen.getByText("Poshan Love Sudha")).toBeInTheDocument();
})

// test("snapshot testing", ()=>{
//     const container = render(<Input/>)
//     expect(container).toMatchSnapshot()
// })

