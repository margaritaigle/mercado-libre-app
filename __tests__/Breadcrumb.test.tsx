import { render } from "@testing-library/react";
import { Breadcrumb } from "../src/components/Breadcrumb/Breadcrumb";

const pathsFromRoot = [
  { name: "Test 1", id: "123" },
  { name: "Test 2", id: "142" },
];

describe("Testing <Breadcrumb />", () => {
  const container = render(
    <Breadcrumb pathsFromRoot={pathsFromRoot} />
  ).container;
  test("Should match snapshot", () => {
    expect(container).toMatchSnapshot();
  });
});
