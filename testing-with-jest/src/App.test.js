import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import renderer from 'react-test-renderer'
import Users from './Users';
test("React First Test Case",()=>{
  render(<App/>);
  const text = screen.getByText("First React Test Case"); //for case sensetive
  const title = screen.getByTitle("logo generated");
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument()
})

test("React Second Test Case",()=>{
  render(<App/>);
  const text = screen.getByText(/First React Test CasE/i);  //for case insetive
  expect(text).toBeInTheDocument();
})

test("React Input box Test Case",()=>{
  render(<App/>);
  const checkInput = screen.getByRole("textbox");
  const checkPlaceholder = screen.getByPlaceholderText("Enter user name");
  expect(checkInput).toBeInTheDocument();
  expect(checkPlaceholder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name","username");
  expect(checkInput).toHaveAttribute("id","inputName");
  expect(checkInput).toHaveAttribute("type","text");
  expect(checkInput).toHaveAttribute("value","Sudha Paikra")
})
describe("group",()=>{
  test("React Second Test Case",()=>{
    render(<App/>);
    const text = screen.getByText(/First React Test CasE/i);  //for case insetive
    expect(text).toBeInTheDocument();
  })

  test("React First Test Case",()=>{
    render(<App/>);
    const text = screen.getByText("First React Test Case"); //for case sensetive
    const title = screen.getByTitle("logo generated");
    expect(text).toBeInTheDocument();
    expect(title).toBeInTheDocument()
  })
})

test("class component testing", ()=>{
  let componentData = renderer.create(<Users/>).getInstance();
  expect(componentData.getDetails()).toMatch("Poshan")
})
