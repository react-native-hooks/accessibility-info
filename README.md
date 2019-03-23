# @rnhooks/acessibility-info [![Build Status](https://travis-ci.com/react-native-hooks/acessibility-info.svg?branch=master)](https://travis-ci.com/react-native-hooks/acessibility-info) [![Maintainability](https://api.codeclimate.com/v1/badges/66997889d9122a22f79b/maintainability)](https://codeclimate.com/github/react-native-hooks/acessibility-info/maintainability)

> React Native hook for [Accessibility Info](https://facebook.github.io/react-native/docs/accessibilityinfo#docsNav)

### Installation

```bash
yarn add @rnhooks/acessibility-info
```

### Usage

```js
import useAccessibilityInfo from '@rnhooks/acessibility-info';

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

| return                | Default | Description                                                    |
| --------------------- | ------- | -------------------------------------------------------------- |
| isScreenReaderEnabled | `false` | `true` when the screen reader is enabled and `false` otherwise |
