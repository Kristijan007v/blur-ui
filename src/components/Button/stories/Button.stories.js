import Button from "../src/Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default",
  ariaLabel: "Default button",
  disabled: false,
  onClick: () => {
    console.log("Clicked");
  },
};
