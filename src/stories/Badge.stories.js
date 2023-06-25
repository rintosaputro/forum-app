import Badge from '../components/Badge';

const story = {
  title: 'Badge',
  component: Badge,
};

export default story;

function TemplateStory(args) {
  return <Badge {...args} />;
}

const WithSizeBig = TemplateStory.bind({});
WithSizeBig.args = {
  children: 'Some Badge',
  size: 'big',
};

const WithSizeNormal = TemplateStory.bind({});
WithSizeNormal.args = {
  children: 'Some Badge',
  size: 'normal',
};

export { WithSizeBig, WithSizeNormal };
