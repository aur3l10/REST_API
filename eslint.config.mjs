// @ts-check

import eslint from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

/**
 * Questa è una configurazione ESLint "flat" per un progetto Node.js/Express con TypeScript.
 *
 * Per utilizzarla, assicurati di avere installato le seguenti dipendenze di sviluppo:
 * npm install -D eslint typescript typescript-eslint eslint-config-prettier
 */
export default tseslint.config(
  // Configurazione di base raccomandata da ESLint
  eslint.configs.recommended,

  // Configurazione raccomandata da typescript-eslint per l'analisi del codice TypeScript
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  // Configurazione per ignorare i file
  {
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      '*.config.js', // Ignora altri file di configurazione se necessario
      '*.config.ts',
    ],
  },

  // Regole specifiche per il progetto
  {
    rules: {
      // ===== Stile del Codice =====
      'no-console': 'warn', // Avvisa sull'uso di console.log, ma non lo vieta
      'no-unused-vars': 'off', // Disabilitato per usare la versione di typescript-eslint
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_', // Ignora gli argomenti che iniziano con _
          varsIgnorePattern: '^_', // Ignora le variabili che iniziano con _
          caughtErrorsIgnorePattern: '^_', // Ignora gli errori catturati che iniziano con _
        },
      ],

      // ===== Buone Pratiche =====
      '@typescript-eslint/no-explicit-any': 'warn', // Avvisa sull'uso del tipo 'any'
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Non richiede tipi di ritorno espliciti per le funzioni
      'prefer-const': 'error', // Richiede 'const' invece di 'let' se la variabile non viene riassegnata

      // ===== Specifiche per Node.js/Express =====
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          // Permette di passare funzioni async come handler di Express senza `await`
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],
    },
  },

  // Integrazione con Prettier
  // Questa deve essere l'ULTIMA configurazione nell'array per disabilitare
  // le regole di stile di ESLint che sono in conflitto con Prettier.
  prettierConfig
);
