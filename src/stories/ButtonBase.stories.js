import ButtonBase from '../components/ButtonBase';

const story = {
  title: 'ButtonBase',
  component: ButtonBase,
};

export default story;

function TemplateStory(args) {
  return <ButtonBase {...args} />;
}

const defaultArgs = {
  type: 'button',
  size: 'btn-small',
  children: 'button',
  onClick: () => alert('button clicked'),
};

const WithVariantPrimary = TemplateStory.bind({});
WithVariantPrimary.args = {
  ...defaultArgs,
  variant: 'primary',
};

const WithVariantSecondary = TemplateStory.bind({});
WithVariantSecondary.args = {
  ...defaultArgs,
  variant: 'secondary',
};

const WithVariantUnset = TemplateStory.bind({});
WithVariantUnset.args = {
  ...defaultArgs,
  variant: 'unset',
};

export { WithVariantPrimary, WithVariantSecondary, WithVariantUnset };
