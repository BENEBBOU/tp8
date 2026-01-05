import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Exemple useState</Text>
            <Text style={styles.subtitle}>Compteur Simple</Text>

            <View style={styles.counterDisplay}>
                <Text style={styles.countText}>{count}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, styles.decrementButton]}
                    onPress={() => setCount(count - 1)}
                >
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.resetButton]}
                    onPress={() => setCount(0)}
                >
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.incrementButton]}
                    onPress={() => setCount(count + 1)}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
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
    counterDisplay: {
        backgroundColor: '#f0f4ff',
        borderRadius: 15,
        padding: 30,
        alignItems: 'center',
        marginBottom: 25,
        borderWidth: 2,
        borderColor: '#4a90e2',
    },
    countText: {
        fontSize: 56,
        fontWeight: '800',
        color: '#4a90e2',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    button: {
        flex: 1,
        paddingVertical: 15,
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    incrementButton: {
        backgroundColor: '#4CAF50',
    },
    decrementButton: {
        backgroundColor: '#f44336',
    },
    resetButton: {
        backgroundColor: '#FF9800',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '700',
    },
});
