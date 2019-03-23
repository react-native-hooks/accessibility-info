// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { AccessibilityInfo } from 'react-native';

function useAccessibilityInfo() {
  const [isScreenReaderEnabled, setScreenReaderEnabled] = useState(false);

  useEffect(() => {
    AccessibilityInfo.fetch().then(isEnabled =>
      setScreenReaderEnabled(isEnabled),
    );
    AccessibilityInfo.addEventListener('change', isEnabled =>
      setScreenReaderEnabled(isEnabled),
    );
    return () =>
      AccessibilityInfo.removeEventListener('change', isEnabled =>
        setScreenReaderEnabled(isEnabled),
      );
  }, []);

  return isScreenReaderEnabled;
}

export default useAccessibilityInfo;
