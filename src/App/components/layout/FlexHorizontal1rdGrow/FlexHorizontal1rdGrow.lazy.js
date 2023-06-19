import React, { lazy, Suspense } from 'react';

const LazyFlexHorizontal1RdGrow = lazy(() => import('./FlexHorizontal1RdGrow'));

const FlexHorizontal1RdGrow = props => (
  <Suspense fallback={null}>
    <LazyFlexHorizontal1RdGrow {...props} />
  </Suspense>
);

export default FlexHorizontal1RdGrow;
