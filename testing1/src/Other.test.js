import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('Test first react app case with text and img-title', () => {
  render(<App />);
  const text = screen.getByText("react test case");
  const imgTitle = screen.getByTitle("Jesko car img")

  expect(text).toBeInTheDocument();
  expect(imgTitle).toBeInTheDocument();

});

test("Test second: Input box", () => {
  render(<App />)
  let checkInput = screen.getByRole("textbox");
  let checkInputPlaceholder = screen.getByPlaceholderText("enter your name");

  expect(checkInput).toBeInTheDocument();
  expect(checkInputPlaceholder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name", "username");
  expect(checkInput).toHaveAttribute("id", "userId");
  expect(checkInput).toHaveAttribute("type", "text");
  expect(checkInput).toHaveAttribute("value", "user1");





});


test('calls onChange when user types username', () => {
  render(<App />)
  const input = screen.getByRole("textbox")

  expect(input.value).toBe("user1")//initial value="user1"

  //fire = simulate typing
  fireEvent.change(input, { target: { value: "newUser" } })

  expect(input.value).toBe("newUser")


})