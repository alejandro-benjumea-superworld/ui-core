import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CollapseList, CollapseListButtonItem } from '.';

const DATA = [
  {
    id: '1',
    label: '1',
    hidden: false,
  },
  {
    id: '2',
    label: '2',
    hidden: false,
  },
  {
    id: '3',
    label: '3',
    hidden: true,
  },
];

export default {
  title: 'Components/CollapseList',
  component: CollapseList,
} as ComponentMeta<typeof CollapseList>;

const Template: ComponentStory<typeof CollapseList> = (args) => (
  <CollapseList
    {...args}
    render={({ label }) => (
      <CollapseListButtonItem>{label}</CollapseListButtonItem>
    )}
  />
);

export const Basic = Template.bind({});
Basic.args = {
  expanded: {
    defaultValue: false,
    control: {
      type: 'boolean',
    },
  },
  data: DATA,
};
