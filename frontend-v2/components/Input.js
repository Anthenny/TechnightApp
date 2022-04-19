import { View, StyleSheet, TextInput, Text } from 'react-native';
import React, { useState } from 'react';
import COLORS from '../const/colors';

export default function Input({ ref, error, onFocus = () => {}, ...props }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <TextInput
        keyboardType="phone-pad"
        autoCorrect={false}
        onFocus={() => {
          onFocus();
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        style={[
          styles.form__input,
          {
            borderColor: error
              ? COLORS.errorRed
              : isFocused
              ? COLORS.darkBlue
              : COLORS.black,
            marginBottom: error ? 7 : 25
          }
        ]}
        {...props}
      />
      {error && <Text style={styles.form__input_error}>{error}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  form__input: {
    width: '100%',
    borderWidth: 0.5,
    padding: 12,
    fontSize: 18,
    borderRadius: 6
  },
  form__input_error: {
    color: COLORS.errorRed,
    fontSize: 14,
    marginBottom: 20
  }
});
