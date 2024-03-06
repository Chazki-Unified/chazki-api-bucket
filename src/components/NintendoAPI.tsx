import '@stoplight/elements/styles.min.css';

import { API } from '@stoplight/elements';
import React from 'react';

export const TonnyAPI: React.FC = () => {
  return (
    <API
      basePath="tonny"
      apiDescriptionUrl="https://raw.githubusercontent.com/Chazki-Unified/chazki-api-bucket/main/src/components/constans/yaml/nintendo.yaml"
    />
  );
};
