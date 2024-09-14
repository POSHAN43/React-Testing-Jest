import { fireEvent, render, screen } from '@testing-library/react';
import JavascriptQuery from '../TestingComponent/JavascriptQuery';

test("Javascript query test case", ()=>{
    render(<JavascriptQuery/>)
    const element = document.querySelector("#testId")
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Hello Poshu")
    expect(element).toHaveAttribute("class")
})