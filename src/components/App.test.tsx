import React from "react";
import { App } from "./App";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});
