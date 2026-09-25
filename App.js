import { useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Componentes estruturais
import Header from './src/components/Header';
import TabBar from './src/components/TabBar';

// Telas da aplicação
import TelaInicio from './src/screens/TelaInicio';
import TelaMedidor from './src/screens/TelaMedidor';
import TelaHistorico from './src/screens/TelaHistorico';
import TelaSobre from './src/screens/TelaSobre';

export default function App() {
  // Aba ativa: 'inicio' | 'nivel' | 'historico' | 'sobre'
  const [abaAtual, setAbaAtual] = useState('nivel');

  // Histórico de medições compartilhadas entre Medidor e Histórico
  const [historico, setHistorico] = useState([]);

  const adicionarMedicao = (novaMedicao) => {
    setHistorico((prev) => [novaMedicao, ...prev]);
  };

  const limparHistorico = () => {
    setHistorico([]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      {/* 1. Cabeçalho */}
      <Header />

      {/* 2. Área Central (Renderiza a tela ativa) */}
      <View style={styles.conteudo}>
        {abaAtual === 'inicio' && (
          <TelaInicio onNavegarMedidor={() => setAbaAtual('nivel')} />
        )}
        {abaAtual === 'nivel' && (
          <TelaMedidor onSalvar={adicionarMedicao} />
        )}
        {abaAtual === 'historico' && (
          <TelaHistorico historico={historico} onLimpar={limparHistorico} />
        )}
        {abaAtual === 'sobre' && (
          <TelaSobre />
        )}
      </View>

      {/* 3. Barra de Abas */}
      <TabBar abaAtual={abaAtual} onAbaPressionada={setAbaAtual} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  conteudo: {
    flex: 1,
  },
});
