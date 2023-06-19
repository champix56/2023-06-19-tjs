import React, { lazy, Suspense } from 'react';

const LazyFlexVertical3rdGrow = lazy(() => import('./FlexVertical3rdGrow'));

const FlexVertical3rdGrow = props => (
  <Suspense fallback={null}>
    <LazyFlexVertical3rdGrow {...props} />
  </Suspense>
);

export default FlexVertical3rdGrow;
