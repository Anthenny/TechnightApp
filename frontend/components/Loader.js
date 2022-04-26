import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ActivityIndicator
} from 'react-native';
import React from 'react';
import COLORS from '../const/colors';

const loader = ({ visible = false }) => {
  const { height, width } = useWindowDimensions();
  return (
    visible && (
      <View style={[styles.loader__container, { height, width }]}>
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={COLORS.red} />
          <Text style={styles.loader__text}>loading...</Text>
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  loader__container: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center'
  },
  loader: {
    height: 70,
    backgroundColor: COLORS.white,
    marginHorizontal: 50,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  loader__text: {
    marginRight: 10,
    fontSize: 16
  }
});

export default loader;
