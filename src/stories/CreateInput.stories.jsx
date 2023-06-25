import { MemoryRouter } from 'react-router-dom';
import CreateInput from '../components/CreateInput';

const story = {
  title: 'CreateInput',
  component: CreateInput,
};

export default story;

function TemplateStory(args) {
  return (
    <MemoryRouter>
      <CreateInput {...args} />
    </MemoryRouter>
  );
}

const Default = TemplateStory.bind({});
Default.args = {
  onPostThread: ({ title, body, category }) => {
    alert(`${title} ${body} ${category}`);
  },
};

export { Default };
