import React from "react";
import Header from "./Header";

import Enzyme, { render } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it("should render", () => {
  //const t = "Item Title";
  const t = "Find Pokemon";

  const wrapper = render(<Header title={t} />);
  expect(wrapper.text()).toBe("Find Pokemon");
});
