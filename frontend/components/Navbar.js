import { View, Image, StyleSheet } from 'react-native';
import React from 'react';

const Navbar = () => {
  return (
    <View style={styles.navbar__container}>
      <Image
        style={styles.navbar__image}
        source={require('../assets/developers_logo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar__container: {
    height: '10%',
    width: '100%'
  },
  navbar__image: {
    marginTop: '5%',
    marginLeft: 35
  }
});
export default Navbar;
