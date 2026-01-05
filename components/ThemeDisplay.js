import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';

export default function ThemeDisplay() {
    const theme = useContext(ThemeContext);

    const isDark = theme === 'dark';

    return (
        <View style={[
            styles.container,
            isDark ? styles.darkContainer : styles.lightContainer
        ]}>
            <Text style={[
                styles.title,
                isDark ? styles.darkText : styles.lightText
            ]}>
                Exemple useContext
            </Text>

            <Text style={[
                styles.subtitle,
                isDark ? styles.darkSubtext : styles.lightSubtext
            ]}>
                Thème Global
            </Text>

            <View style={[
                styles.themeBox,
                isDark ? styles.darkThemeBox : styles.lightThemeBox
            ]}>
                <Text style={styles.emoji}>{isDark ? '🌙' : '☀️'}</Text>
                <Text style={[
                    styles.themeText,
                    isDark ? styles.darkText : styles.lightText
                ]}>
                    Thème actuel: {theme}
                </Text>
            </View>

            <View style={styles.infoContainer}>
                <Text style={[
                    styles.infoTitle,
                    isDark ? styles.darkText : styles.lightText
                ]}>
                    ℹ️ Comment ça marche?
                </Text>
                <Text style={[
                    styles.infoText,
                    isDark ? styles.darkSubtext : styles.lightSubtext
                ]}>
                    Ce composant utilise useContext pour accéder directement au thème défini dans App.js,
                    sans avoir besoin de passer les props à travers plusieurs niveaux.
                </Text>
            </View>

            <View style={styles.benefitsContainer}>
                <Text style={[
                    styles.benefitTitle,
                    isDark ? styles.darkText : styles.lightText
                ]}>
                    ✨ Avantages de useContext:
                </Text>
                <Text style={[styles.benefit, isDark ? styles.darkSubtext : styles.lightSubtext]}>
                    • Pas de prop drilling
                </Text>
                <Text style={[styles.benefit, isDark ? styles.darkSubtext : styles.lightSubtext]}>
                    • Accès direct aux données globales
                </Text>
                <Text style={[styles.benefit, isDark ? styles.darkSubtext : styles.lightSubtext]}>
                    • Code plus lisible et maintenable
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        padding: 25,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    lightContainer: {
        backgroundColor: '#ffffff',
    },
    darkContainer: {
        backgroundColor: '#1a1a2e',
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
    },
    lightText: {
        color: '#1a1a2e',
    },
    darkText: {
        color: '#ffffff',
    },
    lightSubtext: {
        color: '#6c757d',
    },
    darkSubtext: {
        color: '#b0b0b0',
    },
    themeBox: {
        borderRadius: 15,
        padding: 25,
        alignItems: 'center',
        marginBottom: 20,
        borderWidth: 2,
    },
    lightThemeBox: {
        backgroundColor: '#fff9c4',
        borderColor: '#fbc02d',
    },
    darkThemeBox: {
        backgroundColor: '#283593',
        borderColor: '#5c6bc0',
    },
    emoji: {
        fontSize: 48,
        marginBottom: 10,
    },
    themeText: {
        fontSize: 20,
        fontWeight: '700',
    },
    infoContainer: {
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        backgroundColor: 'rgba(33, 150, 243, 0.1)',
        borderLeftWidth: 4,
        borderLeftColor: '#2196F3',
    },
    infoTitle: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 8,
    },
    infoText: {
        fontSize: 14,
        lineHeight: 20,
    },
    benefitsContainer: {
        borderRadius: 12,
        padding: 15,
        backgroundColor: 'rgba(76, 175, 80, 0.1)',
        borderLeftWidth: 4,
        borderLeftColor: '#4CAF50',
    },
    benefitTitle: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 8,
    },
    benefit: {
        fontSize: 14,
        marginVertical: 3,
        lineHeight: 20,
    },
});
