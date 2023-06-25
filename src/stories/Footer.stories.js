import { MemoryRouter } from 'react-router-dom';
import Footer from '../components/Footer';

const story = {
  title: 'Footer',
  component: Footer,
};

export default story;

function TemplateStory(args) {
  return (
    <MemoryRouter>
      <Footer {...args} />
    </MemoryRouter>
  );
}

const Default = TemplateStory.bind({});

Default.args = {
  onSignOut: () => alert('event onSignOut'),
};

export { Default };
