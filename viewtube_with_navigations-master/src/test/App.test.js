import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "../App";
import { screen } from "@testing-library/react";
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import AppRouter from '../views/home/AppRouter';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });


jest.mock("../views/watchvideo", () => () => (
  <div>Hello, I am the dummy watch view</div>
));
let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);

});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;

});

test("default route is configured to navigate to home view", () => {
  act(() => {
    render(<App />, container);
  });
  expect(window.location.pathname).toEqual("/videos");
});

test("clicking video card should navigate to watch view", () => {
  act(() => {
    render(<App />, container);
  });

  act(() => {
    document.getElementsByClassName("MuiCardMedia-root")[0].click();
  });

  expect(window.location.pathname).toMatch(/videos\/[a-zA-Z]+/i);
  expect(container.textContent).toContain("Hello, I am the dummy watch view");
});

test("clicking upload video link should navigate to studio view", () => {

  act(() => {
    render(<App />, container);
  });
  act(() => {
    screen.getByText(/Upload video/).click();
  });
  expect(window.location.pathname).toMatch(/studio/i);
});

test('invalid url should be handled', () => {
  let pathMap = {};
  const component = shallow(<AppRouter />);
  pathMap = component.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.element.$$typeof;
    return pathMap;
  }, {});
  expect(typeof pathMap['*']).toBe('symbol');
})