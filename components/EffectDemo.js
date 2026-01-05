import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function EffectDemo() {
    const [count, setCount] = useState(0);
    const [renderCount, setRenderCount] = useState(0);
    const [logs, setLogs] = useState([]);

    // Cas 1: Sans dépendances → s'exécute à chaque rendu
    useEffect(() => {
        const newLog = `🔄 Rendu #${renderCount + 1} - Effet sans dépendances`;
        setLogs(prev => [...prev, newLog].slice(-10)); // Garder les 10 derniers logs
    });

    // Cas 2: Avec tableau vide [] → s'exécute une seule fois (mount)
    useEffect(() => {
        const newLog = '✅ Composant monté (useEffect avec [])';
        setLogs(prev => [...prev, newLog]);
        console.log('Composant monté');
    }, []);

    // Cas 3: Avec dépendances [count] → s'exécute quand count change
    useEffect(() => {
        if (renderCount > 0) { // Éviter le log initial
            const newLog = `🎯 Count a changé: ${count}`;
            setLogs(prev => [...prev, newLog].slice(-10));
        }
        setRenderCount(prev => prev + 1);
    }, [count]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Exemple useEffect</Text>
            <Text style={styles.subtitle}>Effets de Bord</Text>

            <View style={styles.infoBox}>
                <Text style={styles.infoText}>Compteur: {count}</Text>
                <Text style={styles.infoText}>Nombre de rendus: {renderCount}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setCount(count + 1)}
                >
                    <Text style={styles.buttonText}>Incrémenter</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.logsContainer}>
                <Text style={styles.logsTitle}>📋 Logs des useEffect:</Text>
                <ScrollView style={styles.logsScroll}>
                    {logs.map((log, index) => (
                        <View key={index} style={styles.logItem}>
                            <Text style={styles.logText}>{log}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>

            <View style={styles.legendContainer}>
                <Text style={styles.legendTitle}>Légende:</Text>
                <Text style={styles.legendItem}>🔄 Sans dépendances - À chaque rendu</Text>
                <Text style={styles.legendItem}>✅ Avec [] - Une seule fois (mount)</Text>
                <Text style={styles.legendItem}>🎯 Avec [count] - Quand count change</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 25,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: '#1a1a2e',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: '#6c757d',
        marginBottom: 20,
    },
    infoBox: {
        backgroundColor: '#e8f5e9',
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        borderLeftWidth: 4,
        borderLeftColor: '#4CAF50',
    },
    infoText: {
        fontSize: 16,
        color: '#2e7d32',
        fontWeight: '600',
        marginVertical: 3,
    },
    buttonContainer: {
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#673AB7',
        paddingVertical: 15,
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '700',
    },
    logsContainer: {
        backgroundColor: '#f5f5f5',
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        maxHeight: 200,
    },
    logsTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1a1a2e',
        marginBottom: 10,
    },
    logsScroll: {
        maxHeight: 150,
    },
    logItem: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 8,
        marginBottom: 5,
        borderLeftWidth: 3,
        borderLeftColor: '#673AB7',
    },
    logText: {
        fontSize: 14,
        color: '#424242',
    },
    legendContainer: {
        backgroundColor: '#fff3e0',
        borderRadius: 12,
        padding: 15,
        borderLeftWidth: 4,
        borderLeftColor: '#FF9800',
    },
    legendTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: '#e65100',
        marginBottom: 8,
    },
    legendItem: {
        fontSize: 13,
        color: '#ef6c00',
        marginVertical: 3,
    },
});
