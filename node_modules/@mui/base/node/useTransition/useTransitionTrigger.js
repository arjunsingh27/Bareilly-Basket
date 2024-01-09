"use strict";
'use client';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTransitionTrigger = useTransitionTrigger;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
function useTransitionTrigger(requestEnter) {
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