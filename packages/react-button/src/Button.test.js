import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Button from "./Button";

Enzyme.configure({ adapter: new EnzymeAdapter() });
jest.dontMock("./Button");

describe("Button", () => {
  it("renders a button by default", () => {
    const component = shallow(<Button />);
    expect(component.find(Button)).toBeDefined();
  });

  it("renders a button with children is set", () => {
    const wrapper = shallow(<Button>Valider</Button>);
    expect(wrapper.props().children).toBe("Valider");
  });

  it("renders a button with default className is set", () => {
    const wrapper = shallow(<Button>Valider</Button>);
    expect(wrapper.props().className).toBe("react-ui-button");
  });

  it("renders a button with default disabled is set", () => {
    const wrapper = shallow(<Button>Valider</Button>);
    expect(wrapper.props().disabled).toBe(false);
  });

  it("renders a button with classname active is set", () => {
    const wrapper = shallow(<Button active>Valider</Button>);
    expect(wrapper.props().className).toBe("react-ui-button button-active");
  });

  it("renders a button with classname disabled is set", () => {
    const wrapper = shallow(<Button disabled>Valider</Button>);
    expect(wrapper.props().className).toBe("react-ui-button button-disabled");
  });
});
