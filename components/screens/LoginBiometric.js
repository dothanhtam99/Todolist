import { useEffect, useState } from 'react';
import { StyleSheet, Text, Button, Alert, SafeAreaView,Image, View, TouchableOpacity } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator();


export default function LoginBiometric({ navigation }) {

  const [isBometricSup, setIsBometricSup] = useState(false);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBometricSup(compatible);
    })();
  })
  const fallBackToDefaultAuth = () => {
    console.log('fall back to password auth');
  }

  const alertComponent = (title, mess, btnTxt, btnFunc) => {
    return Alert.alert(title, mess, [
      {
        text: btnTxt,
        onPress: btnFunc
      }
    ]);
  }

  const handleBiomectric = async () => {

    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();
    
    if (!isBiometricAvailable )
      return alertComponent(
        'Vui lòng nhập',
        'Thiết bị không hỗ trợ',
        'Ôk',
        () => fallBackToDefaultAuth()
      );

        let supportedBiometrics;
        if (isBiometricAvailable){
          supportedBiometrics = await LocalAuthentication.supportedAuthenticationTypesAsync();
          const saveBiometrics = await LocalAuthentication.isEnrolledAsync();

          if (!saveBiometrics)
            return alertComponent(
              'Không đúng',
              'Vui lòng đăng nhập lại',
              'Ok',
              () => fallBackToDefaultAuth()
            );

            const biometricAuth = await LocalAuthentication.authenticateAsync({
              promptMessage: 'Đăng nhập với Vân tay, Face Id',
              // cancelLabel: 'Hủy',
              disableDeviceFallback: false
            });
            if (biometricAuth){
            //   twoButtonAlert();
            }
            navigation.navigate('HomeTodo');
        }

  }
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.backgroundImage} source={require("../../assets/background.png")} />
        <View style={styles.overlay}>
          <Text style={{fontSize: 24, color: '#FFF', fontWeight: '700'}}>Login Todo app</Text>
          {isBometricSup && (<TouchableOpacity onPress={handleBiomectric} style={styles.button}>
                              <Text style={styles.buttonText}>Login</Text>
                            </TouchableOpacity>)}
        </View>
          
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    padding: 16, 
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 30,
    marginTop: 10,
    width: 300,
    borderWidth: 1,
    borderColor: 'white', 
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
