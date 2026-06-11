import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const [resultado, setResultado] = useState('Clique para jogar');
  const [caras, setCaras] = useState(0);
  const [coroas, setCoroas] = useState(0);

  function jogarMoeda() {
    if (Math.random() < 0.5) {
      setResultado('🪙 Cara');
      setCaras(caras + 1);
    } else {
      setResultado('🪙 Coroa');
      setCoroas(coroas + 1);
    }
  }

  function zerar() {
    setResultado('Clique para jogar');
    setCaras(0);
    setCoroas(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cara ou Coroa</Text>

      <TouchableOpacity style={styles.botao} onPress={jogarMoeda}>
        <Text style={styles.textoBotao}>Jogar Moeda</Text>
      </TouchableOpacity>

      <Text style={styles.resultado}>{resultado}</Text>

      <View style={styles.contador}>
        <Text style={styles.textoContador}>Cara: {caras}</Text>
        <Text style={styles.textoContador}>Coroa: {coroas}</Text>
      </View>

      <TouchableOpacity style={styles.botaoZerar} onPress={zerar}>
        <Text style={styles.textoBotao}>Zerar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  botao: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
  },

  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  resultado: {
    marginTop: 30,
    fontSize: 28,
  },

  contador: {
    marginTop: 30,
    alignItems: 'center',
  },

  textoContador: {
    fontSize: 20,
    marginBottom: 5,
  },

  botaoZerar: {
    backgroundColor: '#f44336',
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
  },
});