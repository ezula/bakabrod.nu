import ReactGA from 'react-ga4';

export const initGA = (id: string) => {
  if (process.env.NODE_ENV !== 'development') {
    console.log('Enabling GA.');
    ReactGA.initialize(id);
    ReactGA.send({
      hitType: 'pageview',
      page: '/',
      title: 'Surdegskalkylatorn',
    });
  }
};
