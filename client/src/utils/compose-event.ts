/* eslint-disable no-unused-vars */
import React from 'react';

type CustomEvent = Event | React.SyntheticEvent;

function composeEvent<EventReturnType>(
  ourEvent: (ev: CustomEvent) => EventReturnType,
  theirEvent?: (ev: CustomEvent) => EventReturnType
) {
  return (ev: CustomEvent) => {
    if (!ev.defaultPrevented) ourEvent(ev);

    if (theirEvent) theirEvent(ev);
  };
}

export { composeEvent };
