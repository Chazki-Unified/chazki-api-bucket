import '@stoplight/elements/styles.min.css';

import { API } from '@stoplight/elements';
import React from 'react';

export const ChileFifoAPI: React.FC = () => {
  return (
    <API
      basePath="fifo"
      apiDescriptionUrl="https://raw.githubusercontent.com/Chazki-Unified/chazki-api-bucket/main/src/components/constans/yaml/chile-fifo.yaml"
    />
  );
};
