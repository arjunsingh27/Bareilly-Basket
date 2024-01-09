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
  var _React$useReducer = React.useReducer(transitionStateReducer, {
      elementExited: !requestEnter,
      inProgress: false
    }),
    state = _React$useReducer[0],
    dispatch = _React$useReducer[1];
  var hasTransition = React.useRef(false);
  var handleEntering = React.useCallback(function () {
    dispatch('entering');
  }, []);
  var handleEntered = React.useCallback(function () {
    dispatch('entered');
  }, []);
  var handleExiting = React.useCallback(function () {
    dispatch('exiting');
  }, []);
  var handleExited = React.useCallback(function () {
    dispatch('exited');
  }, []);
  React.useEffect(function () {
    if (!hasTransition.current) {
      if (requestEnter) {
        dispatch('entered');
      } else {
        dispatch('exited');
      }
    }
  }, [requestEnter]);
  var registerTransition = React.useCallback(function () {
    hasTransition.current = true;
    return function () {
      hasTransition.current = false;
    };
  }, []);
  var contextValue = React.useMemo(function () {
    return {
      requestedEnter: requestEnter,
      onEntering: handleEntering,
      onEntered: handleEntered,
      onExiting: handleExiting,
      onExited: handleExited,
      registerTransition: registerTransition,
      hasExited: state.elementExited
    };
  }, [handleEntering, handleEntered, handleExiting, handleExited, requestEnter, registerTransition, state.elementExited]);
  return {
    contextValue: contextValue,
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
      throw new Error("Unhandled action: ".concat(action));
  }
}