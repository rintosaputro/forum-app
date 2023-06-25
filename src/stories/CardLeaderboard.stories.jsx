import CardLeaderboard from '../components/CardLeaderboard';

const story = {
  title: 'CardLeaderboard',
  component: CardLeaderboard,
};

export default story;

function TemplateStory(args) {
  return <CardLeaderboard {...args} />;
}

export const Default = TemplateStory.bind({});
Default.args = {
  score: 200,
  user: {
    avatar:
      'https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg',
    email: 'emailtest@mail.com',
    id: 'user-1',
    name: 'user test',
  },
};
