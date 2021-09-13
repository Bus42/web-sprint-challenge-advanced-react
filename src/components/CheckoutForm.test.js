import React from "react";
// eslint-disable-next-line no-unused-vars
import MutationObserver from "mutationobserver-shim";
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />);
});

test("shows success message on submit with form details", async () => {
  render(<CheckoutForm />);
  const firstNameInput = screen.queryByLabelText(/first name:/i);
  userEvent.type(firstNameInput, "Leeroy");
  const lastNameInput = screen.queryByLabelText(/last name:/i);
  userEvent.type(lastNameInput, "Jenkins");
  const addressInput = screen.queryByLabelText(/address:/i);
  userEvent.type(addressInput, "Leeroy");
  const cityInput = screen.queryByLabelText(/city:/i);
  userEvent.type(cityInput, "New York City");
  const stateInput = screen.queryByLabelText(/state:/i);
  userEvent.type(stateInput, "New York");
  const zipInput = screen.queryByLabelText(/zip:/i);
  userEvent.type(zipInput, "10010");
  const checkoutButton = screen.getByTestId("checkoutButton");
  userEvent.click(checkoutButton);
  await waitFor(() => {
    screen.getByTestId("successMessage");
  });
});
