import '@stoplight/elements/styles.min.css';

import { API } from '@stoplight/elements';
import React from 'react';

export const MaximoAPI: React.FC = () => {
  return (
    <API
      basePath="maximo"
      apiDescriptionUrl="https://raw.githubusercontent.com/Chazki-Unified/chazki-api-bucket/main/src/components/constans/yaml/maximo.yaml"
    />
  );
};
