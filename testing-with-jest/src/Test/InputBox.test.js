import { fireEvent, render,screen } from "@testing-library/react";
import InputBox from "../TestingComponent/InputBox";

test("Check whether input box present",()=>{
    render(<InputBox/>)
    const checkInput = screen.getByRole("textbox");
    expect(checkInput).toBeInTheDocument()
})

test("Check input box placeholder",()=>{
    render(<InputBox/>)
    const checkPlaceholder = screen.getByPlaceholderText("Enter name");
    expect(checkPlaceholder).toBeInTheDocument()
})

test("check for name, id, type attributes",()=>{
    render(<InputBox/>)
    const checkInput = screen.getByRole("textbox")
    expect(checkInput).toHaveAttribute("name","username")
    expect(checkInput).toHaveAttribute("id","userId")
    expect(checkInput).toHaveAttribute("type","text")
    // expect(checkInput).toHaveAttribute("value","Poshan Kumar")
})

test("Check for on change event",()=>{
    render(<InputBox/>)
    const input = screen.getByRole("textbox")
    fireEvent.change(input,{target:{value:"ab"}})
    expect(input.value).toBe("ab")
})

//This is only for understand
// describe("UI test case group",()=>{
//     test("Test case 1",()=>{
//         render(<InputBox/>)
//         const checkInput = screen.getByRole("textbox")
//         expect(checkInput).toHaveAttribute("id","userId")
//     })

//     test("Test case 2",()=>{
//         render(<InputBox/>)
//         const checkInput = screen.getByRole("textbox")
//         expect(checkInput).toHaveAttribute("type","text")
//     })
  
// })

// describe.only("API test case group",()=>{
//     test("Test case 1 API",()=>{
//         render(<InputBox/>)
//         const checkInput = screen.getByRole("textbox")
//         expect(checkInput).toHaveAttribute("id","userId")
//     })

//     test("Test case 2 API",()=>{
//         render(<InputBox/>)
//         const checkInput = screen.getByRole("textbox")
//         expect(checkInput).toHaveAttribute("type","text")
//     })
  
// })
// describe.skip("Server test case group",()=>{
//     test("Test case 1 API",()=>{
//         render(<InputBox/>)
//         const checkInput = screen.getByRole("textbox")
//         expect(checkInput).toHaveAttribute("id","userId")
//     })

//     test("Test case 2 API",()=>{
//         render(<InputBox/>)
//         const checkInput = screen.getByRole("textbox")
//         expect(checkInput).toHaveAttribute("type","text")
//     })
  
// })