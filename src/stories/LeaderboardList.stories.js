import LeaderboardsList from '../components/LeaderboardsList';

const story = {
  title: 'LeaderboardsList',
  component: LeaderboardsList,
};

export default story;

function TemplateStory(args) {
  return <LeaderboardsList {...args} />;
}

const Default = TemplateStory.bind({});

Default.args = {
  leaderboards: [
    {
      score: 200,
      user: {
        avatar:
                'https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg',
        email: 'emailtest@mail.com',
        id: 'user-1',
        name: 'user test',
      },
    },
    {
      score: 1500,
      user: {
        avatar:
                  'https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg',
        email: 'email 2t@mail.com',
        id: 'user-2',
        name: 'user 2',
      },
    },
  ],
};

export { Default };
