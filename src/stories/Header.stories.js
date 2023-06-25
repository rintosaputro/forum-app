import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

const story = {
  title: 'Header',
  component: Header,
};

export default story;

function TemplateStory() {
  return (
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
}

const Default = TemplateStory.bind({});

export { Default };
