import React from "react";
import Home from "./Home";

import Enzyme, { render } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it("should render", () => {
  const wrapper = render(<Home />);
  console.log(wrapper);
});
