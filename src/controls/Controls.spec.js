// Test away!

/*
Controls Component
provide buttons to toggle the closed and locked states.
buttons' text changes to reflect the state the door will be in if clicked
the closed toggle button is disabled if the gate is locked
the locked toggle button is disabled if the gate is open
*/

import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";


afterEach(cleanup);

it("renders", () => {
    const { asFragment } = render(<Controls text="closed" />);
    expect(asFragment()).toMatchSnapshot();
});


