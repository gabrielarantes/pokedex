import React from "react";
import MyPokedex from "./MyPokedex";

import Enzyme, { render } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it("should render", () => {
  const wrapper = render(<MyPokedex />);
  console.log(wrapper);
});
