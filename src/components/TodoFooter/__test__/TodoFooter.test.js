import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import {BrowserRouter} from "react-router-dom"

const MockTodoFooter = ({numberOfIncompleteTasks}) =>{
    return(
    <BrowserRouter>
    <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
    )

}

it('should render the correct amount of incomplete tasks', () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);
  const paragraphElement = screen.getByText(/5 tasks left/i);
  expect(paragraphElement).toBeInTheDocument();
});

it('should render "task" when the number of incomplete tasks is one', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it('should render "task" when the number of incomplete tasks is truthy', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeTruthy();
  });

  it('should render the correct amount of incomplete tasks and visible', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paragraphElement = screen.getByText(/5 tasks left/i);
    // it will be fail forexample if opacity equal to zero (0)
    expect(paragraphElement).toBeVisible();
  });

  it('should render the correct amount of incomplete tasks and contain true html tag', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toContainHTML("p");
  });

  it('should render the correct amount of incomplete tasks and text content', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toHaveTextContent("5 tasks left");
  });

  it('should render the correct amount of incomplete tasks and not falys', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).not.toBeFalsy();
  });

  it('should render the correct amount of incomplete tasks and reach element attribute', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement.textContent).toBe("5 tasks left");
  });