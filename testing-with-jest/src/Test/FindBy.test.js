import { fireEvent, render, screen } from '@testing-library/react';
import FindBy from '../TestingComponent/FindBy';

test("FindBy test case", async ()=>{
    // const tag = screen.getByText("Data found");
    render(<FindBy/>)
    // const tag = await screen.findByText("Data found");    //by default test execute max 1 sec so the data should be load before 1 sec to overcome this problem add timeout in perameter
    const tag = await screen.findByText("Data found",{},{timeout:3000});   //it will check after 3000 milisec
    expect(tag).toBeInTheDocument()
})