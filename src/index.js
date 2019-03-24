// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { AccessibilityInfo } from 'react-native';

function useAccessibilityInfo() {
  const [isScreenReaderEnabled, setScreenReaderEnabled] = useState(false);

  useEffect(() => {
    function updateState(isEnabled) {
      setScreenReaderEnabled(isEnabled);
    }

    AccessibilityInfo.fetch().then(updateState);
    AccessibilityInfo.addEventListener('change', updateState);

    return () => AccessibilityInfo.removeEventListener('change', updateState);
  }, []);

  return isScreenReaderEnabled;
}

export default useAccessibilityInfo;
