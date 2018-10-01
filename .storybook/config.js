import { configure, addDecorator } from "@storybook/react";
import centered from "@storybook/addon-centered";

// center components
addDecorator(centered);

function loadStories() {
  require("glob-loader!./stories.pattern");
}

configure(loadStories, module);
