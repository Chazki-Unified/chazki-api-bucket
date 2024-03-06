import '@stoplight/elements/styles.min.css';

import { API } from '@stoplight/elements';
import React from 'react';

export const ChileAPI: React.FC = () => {
  return (
    <API
      basePath="chile"
      apiDescriptionUrl="https://raw.githubusercontent.com/Chazki-Unified/chazki-api-bucket/main/src/components/constans/yaml/chile-legacy.yaml"
    />
  );
};
