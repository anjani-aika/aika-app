const DEEP_LINK='aika://app/';
const config = {
  screens: {
    Home: {
      screens: {
        Explore: {
          screens: {
            feeds: {
              path: 'feedback/:id',
              parse: {
                id: id => `${id}`,
              },
            },
          },
        },
      },
    },
  },
};

const linking = {
  prefixes: [DEEP_LINK],
  config,
};

export default linking;
