import React from 'react';

import dynamic from 'next/dynamic'

const DynamicPublish = dynamic(
  import('../component/FormContainer'),
  {
    ssr: false   //这个要加上,禁止使用 SSR
  }
)

const Com = () => <DynamicPublish />

export default Com;
// export default FormContainer;