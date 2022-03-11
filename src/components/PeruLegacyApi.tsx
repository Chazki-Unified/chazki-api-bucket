import '@stoplight/elements/styles.min.css';

import { API } from '@stoplight/elements';
import React from 'react';

export const PeruAPI: React.FC = () => {
  return (
    <API
      basePath="peru"
      apiDescriptionUrl="https://raw.githubusercontent.com/Chazki/chazki-api-bucket/netlify/src/components/constans/yaml/peru-legacy.yaml"
    />
  );
};
