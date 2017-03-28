'use strict';

const emptyFunction = function() {};

function StatusBar() {
  return null;
}

StatusBar.setBarStyle = emptyFunction;
StatusBar.setHidden = emptyFunction;
StatusBar.setNetworkActivityIndicatorVisible = emptyFunction;
StatusBar.setBackgroundColor = emptyFunction;
StatusBar.setTranslucent = emptyFunction;
StatusBar.isReactNativeComponent = true;

export default StatusBar;