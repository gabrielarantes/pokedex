import React from "react";
import FindPokemon from "./FindPokemon";

import Enzyme, { render } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

it("should render", () => {
  const wrapper = render(<FindPokemon />);
  console.log(wrapper);
});
