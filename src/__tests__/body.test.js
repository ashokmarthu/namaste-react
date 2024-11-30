import { render } from "@testing-library/react";
import Body from "../components/Body";
test(" Body should be loaded on render", () => {
  const header = render(<Body />);
  it("search Button to be rendered", () => {
    const search = screen.getByText("search");
    expect(search).toBeInTheDocument();
  });
});
