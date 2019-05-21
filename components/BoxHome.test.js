import React from "react";
import BoxHome from "./BoxHome";

import Enzyme, { render } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it("should render", () => {
  //const t = "Item Title";
  const t = "Find Pokemon";

  const wrapper = render(<BoxHome title={t} />);
  expect(wrapper.text()).toBe("Find Pokemon");
});
