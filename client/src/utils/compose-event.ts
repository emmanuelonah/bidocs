import React from 'react';

type CustomEvent = Event | React.SyntheticEvent;

// eslint-disable-next-line no-unused-vars
function composeEvent<EventReturnType>(ourEvent: (ev: CustomEvent) => EventReturnType, theirEvent?: (ev: CustomEvent) => EventReturnType) {
  return (ev: CustomEvent) => {
    if (!ev.defaultPrevented) ourEvent(ev);

    if (theirEvent) theirEvent(ev);
  };
}

export { composeEvent };
