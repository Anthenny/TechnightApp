import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';
import COLORS from '../const/colors';

export default function Button({ title, onPress = () => {} }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.form__button}
    >
      <Text style={styles.form__buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  form__button: {
    width: '100%',
    backgroundColor: COLORS.orange,
    borderRadius: 6,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80
  },
  form__buttonText: {
    fontSize: 18,
    color: COLORS.white
  }
});
