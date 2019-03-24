# @rnhooks/accessibility-info [![Build Status](https://travis-ci.com/react-native-hooks/accessibility-info.svg?branch=master)](https://travis-ci.com/react-native-hooks/accessibility-info) [![Maintainability](https://api.codeclimate.com/v1/badges/2e060eaf8a629702a8c6/maintainability)](https://codeclimate.com/github/react-native-hooks/accessibility-info/maintainability)

> React Native hook for [Accessibility Info](https://facebook.github.io/react-native/docs/accessibilityinfo#docsNav)

### Installation

```bash
yarn add @rnhooks/accessibility-info
```

### Usage

```js
import useAccessibilityInfo from '@rnhooks/accessibility-info';

function App() {
  const isScreenReaderEnabled = useAccessibilityInfo();

  return (
    <View style={styles.container}>
      <Text style={styles.type}>Screen reader is:</Text>
      <Text style={styles.effectiveType}>
        {isScreenReaderEnabled ? 'on' : 'off'}
      </Text>
    </View>
  );
}
```

### Output

| Name                  | Type    | Default | Description                                                    |
| --------------------- | ------- | ------- | -------------------------------------------------------------- |
| isScreenReaderEnabled | boolean | `false` | `true` when the screen reader is enabled and `false` otherwise |
