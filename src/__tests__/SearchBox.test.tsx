import { fireEvent, render, screen } from "@testing-library/react";
import { vitest } from "vitest";
import { MemoryRouter, createSearchParams } from "react-router-dom";
import { SearchBox } from "../components/SearchBox/SearchBox";

const mockedUseNavigate = vitest.fn();

vitest.mock("react-router-dom", () => ({
  ...require("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
  Outlet: () => <></>,
}));

const params = { q: "Test" };
describe("Testing SearchBox", () => {
  test("Should match snapshot", () => {
    const container = render(
      <MemoryRouter
        initialEntries={[
          { pathname: "/", search: `${createSearchParams(params)}` },
        ]}
      >
        <SearchBox />
      </MemoryRouter>
    ).container;

    expect(container).toMatchSnapshot();
  });

  test("should call useNavigate ", () => {
    render(<SearchBox />);
    const searchInput = screen.getByRole("textbox");
    const searchBtn = screen.getByRole("button");

    fireEvent.change(searchInput, { target: { value: "Testing" } });
    fireEvent.click(searchBtn);

    expect(mockedUseNavigate).toHaveBeenCalled();
  });
});
