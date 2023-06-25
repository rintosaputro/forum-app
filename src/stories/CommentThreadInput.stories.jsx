import CommentThreadInput from '../components/CommentThreadInput';

const story = {
  title: 'CommentThreadInput',
  component: CommentThreadInput,
};

export default story;

function TemplateStory(args) {
  return <CommentThreadInput {...args} />;
}

const Default = TemplateStory.bind({});
Default.args = {
  onReply: (text) => alert(text),
};

export { Default };
