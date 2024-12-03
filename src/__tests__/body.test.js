import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Body from "../components/Body";
import { testData } from "../__mocks__/testData";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(testData), // Mock response
  })
);

describe("Body Component", () => {
  test(" Body should be loaded on render", () => {
    render(<Body />);
  });
  test("input box to be rendered", () => {
    render(<Body />);
    const searchElement = screen.getByPlaceholderText("search for restuarants");
    expect(searchElement).toBeInTheDocument();
  });
  test("search Button to be rendered", () => {
    render(<Body />);
    const button = screen.getByRole("button", { name: /search/i });
    expect(button).toBeInTheDocument();
  });
  test("renders list of shimmer UI", () => {
    render(<Body />);
    const shimmerElements = screen.getAllByTestId("shimmer-main");
    expect(shimmerElements).toHaveLength(30);
  });
  test("renders list of restuarants", async () => {
    await act(async () => render(<Body />));
    await waitFor(
      () => {
        const resElements = screen.getAllByTestId("resCard");
        expect(resElements).toHaveLength(8); // Expecting 8 restaurant cards
      },
      { timeout: 1000 }
    );
  });
});
