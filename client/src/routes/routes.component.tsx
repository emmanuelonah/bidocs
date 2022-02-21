import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';

import { ConfigAccessibility } from 'components/shared';
import BreadcrumbsImp from 'components/shared/breadcrumbs';

const PATHS = {
  home: '/',
} as const;

function Test() {
  return (
    <>
      <p>Welcome home</p>
      <ConfigAccessibility />
    </>
  );
}

function Routes() {
  return (
    <BrowserRouter>
      <BreadcrumbsImp.Root>
        <BreadcrumbsImp.Breadcrumbs>
          <Switch>
            <Route path={PATHS.home} element={<Test />} />
            <Route path="*" element={<Test />} />
          </Switch>
        </BreadcrumbsImp.Breadcrumbs>
      </BreadcrumbsImp.Root>
    </BrowserRouter>
  );
}

export { Routes };
