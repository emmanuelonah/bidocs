import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ConfigAccessibility } from 'components/shared';

import { Fallback } from './fallback.component';
import { ErrorHandler } from './error-handler.component';
import { ErrorBoundary } from './error-boundary.component';
import { InternetNotifier } from './internet-notifier.component';

type RouterProps = {
  children: React.ReactNode;
};

function Router(props: RouterProps) {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ErrorHandler>
          <InternetNotifier />
          <ConfigAccessibility />
          <Routes>
            <React.Fragment>
              {props.children}
              <Route path="*" element={<Fallback />} />
            </React.Fragment>
          </Routes>
        </ErrorHandler>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export { Router };
