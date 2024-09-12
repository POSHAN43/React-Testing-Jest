import { fireEvent, render,screen } from "@testing-library/react";
import RTLgetAllByRole from "../TestingComponent/RTLgetAllByRole";


test("Check get All by Role",()=>{
  render(<RTLgetAllByRole/>)
  const btns = screen.getAllByRole("button");   //btns recieve all element match with role
  const options = screen.getAllByRole("option");
  for(let i=0;i<btns.length;i++)
  {
    expect(btns[i]).toBeInTheDocument();
  }

  for(let i=0;i<options.length;i++)
    {
      expect(options[i]).toBeInTheDocument();
    }
})