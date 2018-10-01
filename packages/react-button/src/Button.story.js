import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Button from "./Button";

const button = storiesOf("react-button", module);

button.add("Button Default", withInfo(``)(() => <Button>bouton</Button>));

button.add("Button Active", withInfo(``)(() => <Button active>bouton</Button>));

button.add("Button Disabled", withInfo(``)(() => <Button disabled>bouton</Button>));

button.add("Button circle", withInfo(``)(() => <Button circle>+</Button>));
