'use client';

import * as React from 'react';
/**
 * Allows child elements to be transitioned in and out.
 *
 * Demos:
 *
 * - [Transitions](https://mui.com/base-ui/react-transitions/#hooks)
 *
 * API:
 *
 * - [useTransitionTrigger API](https://mui.com/base-ui/react-transitions/hooks-api/#use-transition-trigger)
 */
export function useTransitionTrigger(requestEnter) {
  const [state, dispatch] = React.useReducer(transitionStateReducer, {
    elementExited: !requestEnter,
    inProgress: false
  });
  const hasTransition = React.useRef(false);
  const handleEntering = React.useCallback(() => {
    dispatch('entering');
  }, []);
  const handleEntered = React.useCallback(() => {
    dispatch('entered');
  }, []);
  const handleExiting = React.useCallback(() => {
    dispatch('exiting');
  }, []);
  const handleExited = React.useCallback(() => {
    dispatch('exited');
  }, []);
  React.useEffect(() => {
    if (!hasTransition.current) {
      if (requestEnter) {
        dispatch('entered');
      } else {
        dispatch('exited');
      }
    }
  }, [requestEnter]);
  const registerTransition = React.useCallback(() => {
    hasTransition.current = true;
    return () => {
      hasTransition.current = false;
    };
  }, []);
  const contextValue = React.useMemo(() => ({
    requestedEnter: requestEnter,
    onEntering: handleEntering,
    onEntered: handleEntered,
    onExiting: handleExiting,
    onExited: handleExited,
    registerTransition,
    hasExited: state.elementExited
  }), [handleEntering, handleEntered, handleExiting, handleExited, requestEnter, registerTransition, state.elementExited]);
  return {
    contextValue,
    hasExited: state.elementExited,
    transitionInProgress: state.inProgress
  };
}
function transitionStateReducer(_, action) {
  switch (action) {
    case 'entering':
      return {
        elementExited: false,
        inProgress: true
      };
    case 'entered':
      return {
        elementExited: false,
        inProgress: false
      };
    case 'exiting':
      return {
        elementExited: false,
        inProgress: true
      };
    case 'exited':
      return {
        elementExited: true,
        inProgress: false
      };
    default:
      throw new Error(`Unhandled action: ${action}`);
  }
}