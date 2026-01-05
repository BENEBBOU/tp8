import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { ThemeContext } from './contexts/ThemeContext';
import Counter from './components/Counter';
import EffectDemo from './components/EffectDemo';
import ThemeDisplay from './components/ThemeDisplay';

export default function App() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={theme}>
            <View style={styles.container}>
                <StatusBar style="auto" />

                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>TP: Gestion d'État</Text>
                        <Text style={styles.headerSubtitle}>React Native Hooks</Text>

                        <TouchableOpacity
                            style={styles.themeToggle}
                            onPress={toggleTheme}
                        >
                            <Text style={styles.themeToggleText}>
                                {theme === 'light' ? '🌙 Mode Sombre' : '☀️ Mode Clair'}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Introduction */}
                    <View style={styles.introCard}>
                        <Text style={styles.introTitle}>📚 Objectifs du TP</Text>
                        <Text style={styles.introText}>
                            Ce TP démontre les trois hooks principaux de React pour la gestion d'état:
                        </Text>
                        <Text style={styles.introItem}>• <Text style={styles.bold}>useState</Text>: État local</Text>
                        <Text style={styles.introItem}>• <Text style={styles.bold}>useEffect</Text>: Effets de bord</Text>
                        <Text style={styles.introItem}>• <Text style={styles.bold}>useContext</Text>: État global</Text>
                    </View>

                    {/* Composants de démonstration */}
                    <Counter />
                    <EffectDemo />
                    <ThemeDisplay />

                    {/* Footer avec informations */}
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>
                            💡 Astuce: Interagissez avec les composants pour observer le comportement des hooks!
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </ThemeContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8',
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        padding: 20,
        paddingTop: 60,
    },
    header: {
        backgroundColor: '#4a90e2',
        borderRadius: 20,
        padding: 30,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 8,
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: '800',
        color: '#ffffff',
        marginBottom: 5,
        textAlign: 'center',
    },
    headerSubtitle: {
        fontSize: 18,
        color: '#e3f2fd',
        textAlign: 'center',
        marginBottom: 20,
    },
    themeToggle: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    themeToggleText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
    introCard: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 25,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        borderLeftWidth: 5,
        borderLeftColor: '#4a90e2',
    },
    introTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1a1a2e',
        marginBottom: 15,
    },
    introText: {
        fontSize: 15,
        color: '#424242',
        marginBottom: 12,
        lineHeight: 22,
    },
    introItem: {
        fontSize: 15,
        color: '#424242',
        marginVertical: 5,
        lineHeight: 22,
    },
    bold: {
        fontWeight: '700',
        color: '#4a90e2',
    },
    footer: {
        backgroundColor: '#fff3e0',
        borderRadius: 15,
        padding: 20,
        marginTop: 10,
        marginBottom: 20,
        borderLeftWidth: 4,
        borderLeftColor: '#FF9800',
    },
    footerText: {
        fontSize: 14,
        color: '#e65100',
        lineHeight: 20,
        textAlign: 'center',
    },
});
