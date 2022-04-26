import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import COLORS from '../const/colors';
import developerInfo from '../const/developer';

export default function Footer() {
  return (
    <View style={styles.footer__container}>
      <Text style={styles.footer__header}>{developerInfo.companyName}</Text>

      <View style={styles.footer__row}>
        <View style={styles.footer__row__item}>
          <Image
            style={styles.footer__image}
            source={require('../assets/location_logo.png')}
          />
          <Text style={styles.footer__text}>{developerInfo.address}</Text>
        </View>

        <View style={styles.footer__row__item}>
          <Image
            style={styles.footer__image}
            source={require('../assets/scale_logo.png')}
          />
          <Text style={styles.footer__text}>{developerInfo.kvkNumber}</Text>
        </View>
      </View>

      <View style={styles.footer__row}>
        <View style={styles.footer__row__item}>
          <Image
            style={styles.footer__image}
            source={require('../assets/postcode_logo.png')}
          />
          <Text style={styles.footer__text}>{developerInfo.postalCode}</Text>
        </View>

        <View style={styles.footer__row__item}>
          <Image
            style={styles.footer__image}
            source={require('../assets/toolbox_logo.png')}
          />
          <Text style={styles.footer__text}>{developerInfo.bankOne}</Text>
        </View>
      </View>

      <View style={styles.footer__row}>
        <View style={styles.footer__row__item}>
          <Image
            style={styles.footer__image}
            source={require('../assets/phone_logo.png')}
          />
          <Text style={styles.footer__text}>{developerInfo.phoneNumber}</Text>
        </View>

        <View style={styles.footer__row__item}>
          <Image
            style={styles.footer__image}
            source={require('../assets/euro_logo.png')}
          />
          <Text style={styles.footer__text}>{developerInfo.bankTwo}</Text>
        </View>
      </View>

      <View style={styles.footer__row}>
        <View style={styles.footer__row__item}>
          <Image
            style={styles.footer__image}
            source={require('../assets/mail_logo.png')}
          />
          <Text style={styles.footer__text}>{developerInfo.email}</Text>
        </View>
      </View>

      <Image
        style={styles.footer__circle}
        source={require('../assets/technight_logo.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  footer__container: {
    height: '10%',
    marginLeft: 35
  },
  footer__header: {
    fontSize: 28,
    fontWeight: '300',
    color: COLORS.red,
    marginBottom: 10
  },
  footer__row: {
    flexDirection: 'row',
    marginBottom: 15,
    width: 500
  },
  footer__row__item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '50%'
  },
  footer__image: {
    marginRight: 10
  },
  footer__text: {
    fontSize: 16,
    fontWeight: '300'
  },
  footer__circle: {
    position: 'absolute',
    bottom: '-150%',
    right: '-5%',
    borderRadius: 500
  }
});
