import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

interface BotaoProps {
  titulo: string;
  onPress: () => void;
  cor?: string;
  desabilitado?: boolean;
  carregando?: boolean;
}

export function Botao({
  titulo,
  onPress,
  cor = '#FF6B35',
  desabilitado = false,
  carregando = false,
}: BotaoProps) {
  return (
    <TouchableOpacity
      style={[
        styles.botao,
        { backgroundColor: cor },
        desabilitado && styles.desabilitado,
      ]}
      onPress={onPress}
      disabled={desabilitado || carregando}
    >
      {carregando ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.texto}>{titulo}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 160,
  },
  desabilitado: {
    opacity: 0.5,
  },
  texto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
