import { render, screen } from "@testing-library/react";
import Body from "../components/Body";
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
    const shimmerElements = screen.findAllByTestId("shimmer-main");
    expect(shimmerElements).toHaveLength(30);
  });
  test("renders list of restuarants", async () => {
    render(<Body />);
    const restuarants = await screen.findAllByTestId("rest-card");
    expect(restuarants).toHaveLength(8);
  });
});
