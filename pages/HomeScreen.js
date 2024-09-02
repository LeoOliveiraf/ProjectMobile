import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen({ route }) {
  const { username, password } = route.params || {};

  useEffect(() => {
    console.log('Tela Home carregada');
    console.log(`Username Logado: ${username}`);
  }, [username, password]);

  return (
    <View style={styles.container}>
      <Text>Bem-vindo à Home!</Text>
      {username && <Text>Usuário Logado: {username}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// Estilizar a pagina deve conter na estrutura
// Texto + Nome do Usuario Logado
// Imagem
// Icone + Texto + Botão
// Icone + Texto + Botão