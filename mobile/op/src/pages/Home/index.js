import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import styles from './styles';

import ServerConnection from '../../services';
const conn = new ServerConnection();

const Home = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const resp = conn.login({ cpf: "219837423", senha: "senha123" });
    console.log(resp)


    /* ServerConnection.login({ cpf: "219837423", senha: "senha123" })
    .then(res => console.log(res))
    .catch(e => console.error({...e})) */
  }, [])

  return (
    <View style={styles.container}>
        <Text style={styles.bText}>Página Inicial</Text>  
        <TouchableOpacity onPress={() => navigation.navigate('User_Term')}>
          <Text>Ir para os Termos de Uso</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Home