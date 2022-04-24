/* eslint-disable no-unused-vars */
import React from 'react';

type CustomEvent = Event | React.SyntheticEvent;

export function composeEvents<EventReturnType>(
  ourEvent: (ev: CustomEvent) => EventReturnType,
  theirEvent?: (ev: CustomEvent | any) => EventReturnType
) {
  return (ev: CustomEvent) => {
    if (!ev.defaultPrevented) ourEvent(ev);

    if (theirEvent) theirEvent(ev);
  };
}
