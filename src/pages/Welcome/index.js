import React, {useState} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from '../../components/styles/Colors';
import logo from '../../assets/logo-white.png';
import WellcomeBalanceInput from './WelcomeBalanceInput';
import ActionFooter, {
  ActionPrimaryButton,
} from '../../components/Core/ActionFooter';

const Welcome = ({navigation}) => {
  const [amount, setAmount] = useState(0);

  const onSavePress = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={logo} />
      </View>
      <View>
        <Text style={styles.title}>Olá!</Text>
        <Text style={styles.msg}>
          Para usar o Smart Money você precisa informar o seu saldo atual. Vamos
          lá?
        </Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>Vamos lá</Text>
        </TouchableOpacity>
      </View>
      <WellcomeBalanceInput amount={amount} onChangeValue={setAmount} />
      <ActionFooter>
        <ActionPrimaryButton title="Continuar" onPress={onSavePress} />
      </ActionFooter>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 30,
  },
  logo: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    marginTop: 20,
    fontSize: 28,
    textAlign: 'center',
    color: Colors.white,
  },
  msg: {
    marginTop: 10,
    marginBottom: 40,
    fontSize: 18,
    textAlign: 'center',
    color: Colors.white,
  },
});

export default Welcome;
