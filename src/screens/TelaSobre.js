import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function TelaSobre() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.card}>
                <Text style={styles.titulo}>Ficha Técnica do Sensor</Text>
                <View style={styles.linha}>
                    <Text style={styles.rotulo}>Sensor:</Text>
                    <Text style={styles.valor}>Acelerômetro (Triaxial)</Text>
                </View>
                <View style={styles.linha}>
                    <Text style={styles.rotulo}>Unidade:</Text>
                    <Text style={styles.valor}>g (Gravidade ~ 9.81 m/s²)</Text>
                </View>
                <View style={styles.linha}>
                    <Text style={styles.rotulo}>Biblioteca:</Text>
                    <Text style={styles.valor}>expo-sensors</Text>
                </View>
                <View style={styles.linha}>
                    <Text style={styles.rotulo}>Frequência:</Text>
                    <Text style={styles.valor}>100ms (10 Hz)</Text>
                </View>
                <View style={styles.linha}>
                    <Text style={styles.rotulo}>Permissão:</Text>
                    <Text style={styles.valor}>Nativa (não exige prompt)</Text>
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.titulo}>Fontes de Pesquisa</Text>
                <Text style={styles.texto}>1. Expo Sensors Documentation (Oficial)</Text>
                <Text style={styles.texto}>2. Android Developers - Motion Sensors</Text>
                <Text style={styles.texto}>3. Apple Developer - Core Motion</Text>
                <Text style={styles.texto}>4. React Native Documentation</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
    },
    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: 10,
    },
    linha: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    rotulo: {
        fontSize: 13,
        color: '#6B7280',
        fontWeight: '600',
    },
    valor: {
        fontSize: 13,
        color: '#111827',
        fontWeight: 'bold',
    },
    texto: {
        fontSize: 13,
        color: '#111827',
        lineHeight: 22,
    },
});
