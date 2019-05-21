import { catchpk, deletepk } from "./actions";

test("Action : catchpk", () => {
  let cpk = catchpk({ name: "mew", height: 10 });
  expect(cpk).toEqual({
    type: "CATCH",
    pokemon: { name: "mew", height: 10 }
  });
});

test("Action : deletepk", () => {
  let dpk = deletepk({ name: "mew", height: 10 });
  expect(dpk).toEqual({
    type: "CATCH",
    pokemon: { name: "mew", height: 10 }
  });
});
