import { View, Image, StyleSheet } from 'react-native';
import React from 'react';

const Statusbar = () => {
  return (
    <View>
      <Image
        style={styles.navbar__image}
        source={require('../assets/developers_logo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar__image: {
    marginTop: 60,
    marginLeft: 35,
    marginBottom: 50
  }
});
export default Statusbar;
