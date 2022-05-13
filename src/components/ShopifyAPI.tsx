import '@stoplight/elements/styles.min.css';

import { API } from '@stoplight/elements';
import React from 'react';

export const ShopifyAPI: React.FC = () => {
  return (
    <API
      basePath="shopify"
      apiDescriptionUrl="https://raw.githubusercontent.com/Chazki/chazki-api-bucket/feature/ic-124/src/components/constans/yaml/shopify.yaml"
    />
  );
};