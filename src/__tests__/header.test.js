import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import store from "../utils/store"; // Import your Redux store if needed
import Header from "../components/Header"; // Import the Header component
import Logout from "./components/Logout"; // Import the Logout component
import { auth } from "../components/Firebase";
import { signOut } from "firebase/auth";

// Mock Firebase Auth
jest.mock("firebase/auth", () => ({
  signOut: jest.fn(),
}));

// Mock useSelector for getting photoURL from Redux store
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("Header Component", () => {
  beforeEach(() => {
    // Mock Redux store and selectors
    useSelector.mockImplementation((selector) =>
      selector({ user: { userDetails: { photoURL: "test-photo.jpg" } } })
    );

    // Set up your component wrapped with Router and Redux provider
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
  });

  it("should render the header with logo and navigation links", () => {
    // Check if the logo image is present
    const logo = screen.getByAltText("food-logo");
    expect(logo).toBeInTheDocument();

    // Check if the navigation links are present
    const aboutLink = screen.getByText("About");
    const cartLink = screen.getByText("Cart");
    expect(aboutLink).toBeInTheDocument();
    expect(cartLink).toBeInTheDocument();
  });

  it("should navigate to the About page when About link is clicked", () => {
    const aboutLink = screen.getByText("About");
    fireEvent.click(aboutLink);
    expect(window.location.pathname).toBe("/about"); // Assumes you are using react-router
  });

  it("should navigate to the Cart page when Cart link is clicked", () => {
    const cartLink = screen.getByText("Cart");
    fireEvent.click(cartLink);
    expect(window.location.pathname).toBe("/cart"); // Assumes you are using react-router
  });

  it("should render the Logout component and handle logout correctly", async () => {
    // Render Logout component
    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <Router>
          <Logout />
        </Router>
      </Provider>
    );

    // Check if photo is rendered correctly
    const photo = getByAltText("food-logo");
    expect(photo).toHaveAttribute("src", "test-photo.jpg");

    // Check if the logout button is rendered
    const logoutButton = getByText("Logout");
    expect(logoutButton).toBeInTheDocument();

    // Simulate click on the logout button
    fireEvent.click(logoutButton);

    // Check if Firebase signOut function is called
    expect(signOut).toHaveBeenCalledWith(auth);

    // You can also mock other actions like dispatch, localStorage removal, etc., and check their calls.
    // Example for dispatch:
    // expect(dispatch).toHaveBeenCalledWith(setUserDetails(null));
  });
});
