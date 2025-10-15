/**
 * @type {import("prettier").Config}
 */
const config = {
  // Larghezza massima della riga prima di andare a capo
  printWidth: 80,

  // Larghezza di un singolo tab (in spazi)
  tabWidth: 2,

  // Usa tab invece di spazi per l'indentazione
  useTabs: false,

  // Aggiungi il punto e virgola alla fine di ogni istruzione
  semi: true,

  // Usa apici singoli ('') invece di doppi apici ("")
  singleQuote: true,

  // Gestione degli apici nelle proprietà degli oggetti
  // 'as-needed' -> aggiunge apici solo quando necessario
  // 'consistent' -> se almeno una proprietà ha bisogno di apici, li mette a tutte
  // 'preserve' -> rispetta l'input originale
  quoteProps: 'as-needed',

  // Usa apici singoli per JSX
  jsxSingleQuote: false,

  // Aggiungi una virgola finale dove possibile (oggetti, array, ecc.)
  // 'es5' -> aggiunge virgole finali valide in ES5
  // 'none' -> nessuna virgola finale
  // 'all' -> aggiunge virgole finali ovunque possibile (anche negli argomenti di funzione)
  trailingComma: 'es5',

  // Aggiungi uno spazio tra le parentesi graffe negli oggetti
  // Esempio: { foo: bar } invece di {foo: bar}
  bracketSpacing: true,

  // Metti il carattere '>' delle tag JSX su una nuova riga
  // Esempio: <div
  //   className="foo"
  // >
  jsxBracketSameLine: false, // DEPRECATO, usa bracketSameLine
  bracketSameLine: false,

  // Includi le parentesi attorno a un singolo argomento di una funzione freccia
  // 'always' -> (x) => x
  // 'avoid' -> x => x
  arrowParens: 'always',

  // Formatta solo una porzione del file (utile per l'integrazione con editor)
  rangeStart: 0,
  rangeEnd: Infinity,

  // Specifica quale parser usare. Di solito è auto-rilevato.
  // parser: "typescript",

  // Aggiungi un pragma speciale all'inizio dei file formattati per indicare che sono gestiti da Prettier
  requirePragma: false,
  insertPragma: false,

  // Gestione del "wrapping" del testo nel markdown
  // 'always' -> va a capo se supera printWidth
  // 'never' -> non va mai a capo
  // 'preserve' -> mantiene il wrapping originale
  proseWrap: 'preserve',

  // Gestione degli spazi bianchi in HTML
  // 'css' -> rispetta le regole di display di CSS
  // 'strict' -> considera tutti gli spazi significativi
  // 'ignore' -> considera tutti gli spazi non significativi
  htmlWhitespaceSensitivity: 'css',

  // Gestione della fine riga
  // 'lf' -> Line Feed (\n), comune su Linux e macOS
  // 'crlf' -> Carriage Return + Line Feed (\r\n), comune su Windows
  // 'cr' -> Carriage Return (\r)
  // 'auto' -> mantiene la fine riga esistente
  endOfLine: 'lf',
};

export default config;
