import ButtonCategory from '../components/ButtonCategory';

const story = {
  title: 'ButtonCategory',
  component: ButtonCategory,
};

export default story;

function TemplateStory(args) {
  return <ButtonCategory {...args} />;
}

export const Default = TemplateStory.bind({});
Default.args = {
  children: 'Button Categories',
  isActive: true,
  onCategory: () => alert('onCategory function'),
};
