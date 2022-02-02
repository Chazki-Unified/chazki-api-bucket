import '@stoplight/elements/styles.min.css';

import { API } from '@stoplight/elements';
import React from 'react';

export const Zoom: React.FC = () => {
  return (
    <API
      basePath="zoom-api"
      apiDescriptionUrl="https://raw.githubusercontent.com/stoplightio/Public-APIs/master/reference/zoom/openapi.yaml"
    />
  );
};
