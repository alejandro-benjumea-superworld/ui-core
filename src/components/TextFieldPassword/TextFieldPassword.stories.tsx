import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextFieldPassword } from '.';

export default {
  title: 'Components/TextFieldPassword',
  component: TextFieldPassword,
} as ComponentMeta<typeof TextFieldPassword>;

const Template: ComponentStory<typeof TextFieldPassword> = (args) => (
  <TextFieldPassword {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  label: 'Lorem ipsum dolor sit amet',
  value: 'Aliquam at tempus metus',
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  helperText: 'Lorem ipsum dolor sit amet',
  label: 'Error',
  value: 'Aliquam at tempus metus',
};
