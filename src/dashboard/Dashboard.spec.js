// Test away

//Purpose of this file?????
//Only displays the controls and the display????

import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";


afterEach(cleanup);

it("renders", () => {
    const { asFragment } = render(<Dashboard text="closed" />);
    expect(asFragment()).toMatchSnapshot();
});


