/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { __storybook__ } from 'utils';
import type { Step } from './multiview.component';
import { MultiView } from './multiview.component';
import { Alerter } from '../alerter/alerter.component';

export default {
  title: `${__storybook__.TITLES.shared}/MultiView`,
  component: MultiView,
} as ComponentMeta<typeof MultiView>;

const steps: Step[] = [
  {
    id: 'staff1',
    title: 'Staff 1',
    Component: () => (
      <>
        <p>Name: Emmanuel Onah</p>
        <p>Age: 110</p>
        <p>From: Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, impedit.</p>
        <p>Occupation: Software engineer</p>
      </>
    ),
  },
  {
    id: 'staff2',
    title: 'Staff 2',
    Component: () => (
      <>
        <p>Name:Judy Jackson</p>
        <p>Age: 100</p>
        <p>From: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, expedita.</p>
        <p>Occupation: Medical doctor</p>
      </>
    ),
  },
  {
    id: 'staff3',
    title: 'Staff 3',
    Component: () => (
      <>
        <p>Name: Jane Jasper</p>
        <p>Age: 110</p>
        <p>From: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, asperiores.</p>
        <p>Occupation: Pilot</p>
      </>
    ),
  },
  {
    id: 'staff4',
    title: 'Staff 4',
    Component: () => (
      <>
        <p>Name: Jeremiah Joseph</p>
        <p>Age: 22</p>
        <p>From: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, aliquid.</p>
        <p>Occupation: Farmer</p>
        <button
          type="submit"
          onSubmit={(ev) => {
            ev.preventDefault();

            // eslint-disable-next-line no-alert
            window.alert('Successfully submitted');
          }}
        >
          Submit
        </button>
      </>
    ),
  },
];

export const CanNext: ComponentStory<typeof MultiView> = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const steps: Step[] = [
    {
      id: 'staff1',
      title: 'Staff 1',
      Component: () => (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus hic maiores quam ullam omnis, porro maxime
          eligendi recusandae quod illum.
        </p>
      ),
    },
    {
      id: 'staff2',
      title: 'Staff 2',
      Component: () => (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus hic maiores quam ullam omnis, porro maxime
          eligendi recusandae quod illum.
        </p>
      ),
    },
    {
      id: 'staff3',
      title: 'Staff 3',
      Component: () => (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus hic maiores quam ullam omnis, porro maxime
          eligendi recusandae quod illum.
        </p>
      ),
    },
    {
      id: 'staff4',
      title: 'Staff 4',
      Component: () => (
        <>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus hic maiores quam ullam omnis, porro
            maxime eligendi recusandae quod illum.
          </p>
          <button
            type="submit"
            onClick={(ev) => {
              ev.preventDefault();

              setIsSubmitted(true);
            }}
          >
            Submit
          </button>
        </>
      ),
    },
  ];

  return (
    <>
      <MultiView heading="Company staffs" steps={steps} canNext />
      {isSubmitted && <Alerter type="success">Successfully submitted</Alerter>}
    </>
  );
};

export const CanNotNext: ComponentStory<typeof MultiView> = () => (
  <MultiView heading="Company staffs" steps={steps} canNext={false} />
);
