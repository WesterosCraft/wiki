import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>WesterosCraft Wiki</span>,
  project: {
    link: 'https://westeroscraft.com/',
  },
  chat: {
    link: 'https://discord.com/invite/pBS5TH4',
  },
  docsRepositoryBase: 'https://github.com/WesterosCraft/WesterosCraftWiki',
  footer: {
    text: 'WesterosCraft',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – WesterosCraft Wiki',
    };
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  gitTimestamp: ({ timestamp }) => <>Last updated on {timestamp.toLocaleDateString()}</>,
};

export default config;
