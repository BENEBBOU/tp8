# TP Gestion d'État - React Native

## 📋 Description

Ce projet est un TP pratique sur la gestion d'état en React Native, démontrant l'utilisation des trois hooks principaux : **useState**, **useEffect** et **useContext**.

## 🎯 Objectifs Pédagogiques

### 1. useState - Gérer l'État Local
- Créer et gérer des variables d'état dans un composant fonctionnel
- Comprendre comment les changements d'état déclenchent un re-render
- Exemple: Composant Counter avec incrémentation/décrémentation

### 2. useEffect - Effets de Bord
- Exécuter du code après le rendu du composant
- Comprendre les trois cas principaux:
  - **Sans dépendances**: s'exécute à chaque rendu
  - **Avec `[]`**: s'exécute une seule fois (mount)
  - **Avec `[var]`**: s'exécute quand var change

### 3. useContext - État Global
- Éviter le prop drilling
- Partager des données entre composants sans passer par les props
- Exemple: Thème global (light/dark)

## 📁 Structure du Projet

```
tp8/
├── App.js                      # Point d'entrée principal
├── contexts/
│   └── ThemeContext.js        # Contexte pour le thème
├── components/
│   ├── Counter.js             # Exemple useState
│   ├── EffectDemo.js          # Exemple useEffect
│   └── ThemeDisplay.js        # Exemple useContext
├── package.json
├── app.json
└── README.md
```

## 🚀 Installation et Lancement

### Prérequis
- Node.js (v14 ou plus)
- npm ou yarn
- Expo CLI

### Installation

```bash
# Installer les dépendances
npm install
```

### Lancer l'application

```bash
# Démarrer le serveur de développement
npm start

# ou pour Android
npm run android

# ou pour iOS
npm run ios

# ou pour le web
npm run web
```

## 💡 Fonctionnalités

### 1. Composant Counter (useState)
- Boutons d'incrémentation (+)
- Boutons de décrémentation (-)
- Bouton de reset
- Affichage du compteur en temps réel

### 2. Composant EffectDemo (useEffect)
- Démonstration des 3 types d'useEffect
- Logs en temps réel des exécutions
- Compteur de rendus
- Légende explicative

### 3. Composant ThemeDisplay (useContext)
- Affichage du thème actuel
- Changement dynamique du style selon le thème
- Explication des avantages de useContext
- Toggle de thème dans le header

## 🎨 Design

L'application utilise un design moderne avec:
- Couleurs harmonieuses et gradients
- Ombres et élévations pour la profondeur
- Animations subtiles sur les interactions
- Mode clair et sombre
- Interface responsive

## 📚 Concepts Clés

### useState
```javascript
const [valeur, setValeur] = useState(valeurInitiale);
```
- `valeur`: la valeur actuelle de l'état
- `setValeur`: fonction pour modifier l'état
- `valeurInitiale`: valeur de départ

### useEffect
```javascript
// Sans dépendances
useEffect(() => { /* code */ });

// Avec []
useEffect(() => { /* code */ }, []);

// Avec dépendances
useEffect(() => { /* code */ }, [var]);
```

### useContext
```javascript
// 1. Créer le contexte
export const MonContext = createContext();

// 2. Fournir le contexte
<MonContext.Provider value={valeur}>
  {children}
</MonContext.Provider>

// 3. Utiliser le contexte
const valeur = useContext(MonContext);
```

## 🔍 Points d'Apprentissage

1. **useState** permet de rendre les composants interactifs
2. **useEffect** permet de synchroniser le composant avec des systèmes externes
3. **useContext** simplifie le partage de données entre composants
4. Les hooks ne peuvent être utilisés qu'au niveau racine du composant
5. Les hooks doivent toujours être appelés dans le même ordre

## 👨‍🏫 Exercices Suggérés

1. Ajouter un second compteur dans Counter
2. Faire persister le count dans AsyncStorage avec useEffect
3. Créer un nouveau contexte pour la langue (FR/EN)
4. Combiner plusieurs hooks pour créer un minuteur

## 📝 Notes

- Ce projet utilise Expo pour simplifier le développement
- Les composants sont stylés avec StyleSheet de React Native
- Le code est commenté pour faciliter la compréhension

## 👤 Auteur

Pr. Zineb NAJI - TP Gestion d'État React Native

## 📄 Licence

Ce projet est à usage pédagogique.
