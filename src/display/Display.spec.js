// Test away!

/*
Display Component
displays if gate is open/closed and if it is locked/unlocked
displays 'Closed' if the closed prop is true and 'Open' if otherwise
displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise
when locked or closed use the red-led class
when unlocked or open use the green-led class
*/

import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// import renderer from "react-test-renderer";
import Display from "./Display";


afterEach(cleanup);

it("renders", () => {
    const { asFragment } = render(<Display text="closed" />);
    expect(asFragment()).toMatchSnapshot();
});

// it("matches HERE>>", () => {
//     expect(locked()).toBe(false);
//     expect(closed()).toBe(false);
// })

// test("TEST TEST TEST", () => {
//     return fetchData().then(data => {
//         expect(data).toBe(<Display locked={false} closed={false} /> );
//     });
// });

// it("matches snapshot", () => {
//     const tree = renderer
//         .create(<Display locked={false} closed={false} /> )
//         .toJSON();
//         expect(tree).toMatchSnapshot();
// });