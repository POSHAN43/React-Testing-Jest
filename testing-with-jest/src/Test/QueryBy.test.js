import { fireEvent, render, screen } from '@testing-library/react';
import QueryBy from '../TestingComponent/QueryBy';


test("queryBy test case",()=>{
    render(<QueryBy/>)
    // const btn = screen.getByText("Login");   //In such scenario Login is false and not visibile in the screen that's why test case failed
    const btn = screen.queryByText("Login")   //It will check inside the code as well as in the screen
    expect(btn).not.toBeInTheDocument()    //the text does not display in the screen
})