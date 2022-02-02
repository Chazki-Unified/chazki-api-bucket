import '@stoplight/elements/styles.min.css';

import { API } from '@stoplight/elements';
import React from 'react';

export const AventonAPI: React.FC = () => {
  return (
    <API
      basePath="aventon"
      apiDescriptionUrl="https://raw.githubusercontent.com/Chazki/chazki-api-bucket/main/aventon.yaml"
    />
  );
};
