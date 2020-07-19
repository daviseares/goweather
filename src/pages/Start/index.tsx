import React, { useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';

import { showToast } from '../../utils/showToast';

import LogoImage from '../../assets/images/logo.png';
import SunImage from '../../assets/images/sun.png';

import Button from '../../components/Button';

import { Container, Header, Logo, Sun, Body, Title, Footer } from './styles';

const Start: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    /**
     * get Location permissions
     */
    async function loadPermissions(): Promise<void> {
      if (Platform.OS === 'ios') {
        Geolocation.requestAuthorization();
        return;
      }
      if (Platform.OS === 'android') {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
      }
    }
    loadPermissions();
  }, []);

  /**
   * navigate to ForecastScreen
   */
  function handleNavigate(): void {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        navigation.navigate('ForecastScreen', {
          coordinates: [latitude, longitude],
        });
      },
      error => {
        if (error.PERMISSION_DENIED) {
          showToast({ msg: 'Não foi possivel acessar sua localização.' });
        }
      },
      { enableHighAccuracy: true, timeout: 1000 },
    );
  }

  return (
    <Container>
      <Header>
        <Logo source={LogoImage} />
      </Header>
      <Body>
        <Sun source={SunImage} />
        <Title>Tenha a previsão do tempo na palma da sua mão.</Title>
      </Body>
      <Footer>
        <Button icon="log-in" onPress={handleNavigate}>
          EXPLORAR
        </Button>
      </Footer>
    </Container>
  );
};

export default Start;
