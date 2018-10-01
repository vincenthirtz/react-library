import React, { Component } from "react";
import classNames from 'classnames';
import styled from "styled-components";
import { ThemeContext } from "../../../.themes/theme-context";

class Button extends Component {
  render() {
    const {
      children,
      theme,
      circle,
      active,
      disabled,
      ...props
    } = this.props;
    const cls = classNames(
      "react-ui-button",
      active && "button-active",
      disabled && "button-disabled",
      circle && "button-circle"
    );

    return (
      <ThemeContext.Consumer>
        {theme => (
          <ButtonStyled
            {...props}
            className={cls}
            disabled={disabled}
            theme={theme.button}
          >
            {children}
          </ButtonStyled>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Button;

const ButtonStyled = styled.button`
  font-family: ${props => props.theme.fontFamily};
  padding: ${props => props.theme.padding};
  font-size: ${props => props.theme.fontSize};
  line-height: ${props => props.theme.lineHeight};
  font-weight: ${props => props.theme.fontWeight};
  height: ${props => props.theme.height};
  border-radius: ${props => props.theme.borderRadius};
  margin: ${props => props.theme.margin};
  background: ${props => props.theme.background};
  border: ${props => props.theme.border};
  color: ${props => props.theme.color};
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  -webkit-appearance: button;
  cursor: pointer;

  @media (min-width: 48em) {
    width: auto;
    margin: 0;
  }

  &:focus {
    outline: none;
  }

  &:active,
  &.button-active {
    box-shadow: none;
  }

  &.button-circle {
    border-width: 0.071em;
    width: 2.857em;
    height: 2.857em;
    padding: 0.429em 0;
    line-height: 1.428571429;
    border-radius: 50%;
  }

  &:hover,
  &.button-active {
    background: ${props => props.theme.hover && props.theme.hover.background};
    border: ${props => props.theme.hover && props.theme.hover.border};
    color: ${props => props.theme.hover && props.theme.hover.color};
  }
  &.button-disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: ${props =>
      props.theme.disabled && props.theme.disabled.background};
    border: ${props => props.theme.disabled && props.theme.disabled.border};
    color: ${props => props.theme.disabled && props.theme.disabled.color};
    &:hover,
    &.button-active {
      background: ${props =>
        props.theme.disabled &&
        props.theme.disabled.hover &&
        props.theme.disabled.hover.background};
      border: ${props =>
        props.theme.disabled &&
        props.theme.disabled.hover &&
        props.theme.disabled.hover.border};
      color: ${props =>
        props.theme.disabled &&
        props.theme.disabled.hover &&
        props.theme.disabled.hover.color};
    }
  }
`;
