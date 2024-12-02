import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header Component", () => {
  test("Body should be Renderes", () => {
    render(<Header />);
  });
});
