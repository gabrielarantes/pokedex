import React from "react";
import Splashscreen from "./Splashscreen";

import Enzyme, { render } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it("should render", () => {
  const wrapper = render(<Splashscreen />);
  console.log(wrapper);
});
