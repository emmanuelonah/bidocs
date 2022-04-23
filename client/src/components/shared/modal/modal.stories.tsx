import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Modal from './modal.component';
import { __storybook__, theme } from 'utils';

const details = [
  '401 - something: "wrong wrong"',
  '404 - not found endpoint: "api.emmanuelonah.com/v1/users"',
  '500 - Internal server error.',
];
const message = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsum asperiores aperiam';

export default {
  title: `${__storybook__.TITLES.shared}/Modal`,
  component: Modal,
} as ComponentMeta<typeof Modal>;

export const SuccessModal: ComponentStory<typeof Modal> = () => (
  <ThemeProvider theme={theme}>
    <Modal type="success">
      <Modal.Header>Header Success</Modal.Header>
      <Modal.Body message={message} details={details} />
    </Modal>
  </ThemeProvider>
);

export const WarningModal: ComponentStory<typeof Modal> = () => (
  <ThemeProvider theme={theme}>
    <Modal type="warning">
      <Modal.Header>Header Warning</Modal.Header>
      <Modal.Body message={message} />
    </Modal>
  </ThemeProvider>
);

export const DangerModal: ComponentStory<typeof Modal> = () => (
  <ThemeProvider theme={theme}>
    <Modal type="danger">
      <Modal.Header>Header Danger</Modal.Header>
      <Modal.Body message={message} />
      <Modal.Footer>Footer Danger</Modal.Footer>
    </Modal>
  </ThemeProvider>
);
