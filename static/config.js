/**
 * Setter / Konfiguration
 */

// Konfiguration initialisieren
layui.define(['all'], function(exports){
  exports('setter', {
    paths: { // Schreibweise ab v1.9.0
      core: layui.cache.base + 'adminui/dist/', // Verzeichnis der Kernbibliothek
      views: layui.cache.base + 'views/', // Verzeichnis der dynamischen Templates
      modules: layui.cache.base + 'modules/', // Verzeichnis der Business-Module
      base: layui.cache.base // Basisverzeichnis für statische Ressourcen merken
    },
    /* Schreibweise vor v1.9.0
    // views: layui.cache.base + 'views/', // Verzeichnis der Business-Views
    // base: layui.cache.base, // Basisverzeichnis für statische Ressourcen merken
    */

    container: 'LAY_app', // Container-ID
    entry: 'index', // Standard-View-Dateiname
    engine: '.html', // Dateiendung der View-Dateien
    pageTabs: true, // Seiten-Tabs aktivieren? (iframe-Version empfohlen)
    refreshCurrPage: true, // Wenn Ziel-URL = aktuelle URL: automatisch neu laden --- 2.0+

    name: 'layuiAdmin', // Systemname
    tableName: 'layuiAdmin', // Tabellenname für lokalen Speicher
    MOD_NAME: 'admin', // Name für Modul-Events

    // Verlauf/Record
    record: {
      url: false // URL-Merkerfunktion bei iframe-Navigation aktivieren?
    },

    debug: true, // Debug-Modus aktivieren? (Bei Fehlern werden z. B. Exception-URL-Infos ausgegeben)

    // Benutzerdefinierte Request-Felder
    request: {
      tokenName: false // Feldname für automatisch mitgesendetes Token (z. B. access_token); false = kein Token mitsenden
    },

    // Benutzerdefinierte Response-Felder
    response: {
      statusName: 'code', // Feldname des Statuscodes
      statusCode: {
        ok: 0, // Statuscode für „alles ok“
        logout: 1001 // Statuscode für „Login ungültig/abgelaufen“
      },
      msgName: 'msg', // Feldname der Statusmeldung
      dataName: 'data' // Feldname der Nutzdaten
    },

    // Spezielle Module im Business-Modul-Verzeichnis konfigurieren
    extend: {
      layim: 'layim/layim' // layim
    },

    // Theme-Konfiguration
    theme: {
      // Integrierte Farbschemata
      color: [{
        main: '#20222A', // Hauptfarbe
        selected: '#16baaa', // Auswahlfarbe
        alias: 'default' // Standard-Alias
      },{
        main: '#03152A',
        selected: '#3B91FF',
        alias: 'dark-blue' // Dunkelblau
      },{
        main: '#2E241B',
        selected: '#A48566',
        alias: 'coffee' // Kaffee
      },{
        main: '#50314F',
        selected: '#7A4D7B',
        alias: 'purple-red' // Purpurrot
      },{
        main: '#344058',
        logo: '#1E9FFF',
        selected: '#1E9FFF',
        alias: 'ocean' // Ozean
      },{
        main: '#3A3D49',
        logo: '#2F9688',
        selected: '#16b777',
        alias: 'green' // Dunkelgrün
      },{
        main: '#20222A',
        logo: '#F78400',
        selected: '#F78400',
        alias: 'red' // Orange
      },{
        main: '#28333E',
        logo: '#AA3130',
        selected: '#AA3130',
        alias: 'fashion-red' // Mode-Rot
      },{
        main: '#24262F',
        logo: '#3A3D49',
        selected: '#16baaa',
        alias: 'classic-black' // Klassisch Schwarz
      },{
        logo: '#226A62',
        header: '#2F9688',
        alias: 'green-header' // Dunkelgrüner Header
      },{
        main: '#344058',
        logo: '#0085E8',
        selected: '#1E9FFF',
        header: '#1E9FFF',
        alias: 'ocean-header' // Ozean-Header
      },{
        header: '#393D49',
        alias: 'classic-black-header' // Klassisch Schwarzer Header
      },{
        main: '#50314F',
        logo: '#50314F',
        selected: '#7A4D7B',
        header: '#50314F',
        alias: 'purple-red-header' // Purpurrot-Header
      },{
        main: '#28333E',
        logo: '#28333E',
        selected: '#AA3130',
        header: '#AA3130',
        alias: 'fashion-red-header' // Mode-Rot-Header
      },{
        main: '#28333E',
        logo: '#16baaa',
        selected: '#16baaa',
        header: '#16baaa',
        alias: 'green-header' // Dunkelgrüner Header
      },{
        main: '#393D49',
        logo: '#393D49',
        selected: '#16baaa',
        header: '#23262E',
        alias: 'Classic-style1' // Klassischer Stil 1
      },{
        main: '#001529',
        logo: '#001529',
        selected: '#1890FF',
        header: '#1890FF',
        alias: 'Classic-style2' // Klassischer Stil 2
      },{
        main: '#25282A',
        logo: '#25282A',
        selected: '#35BDB2',
        header: '#35BDB2',
        alias: 'Classic-style3' // Klassischer Stil 3
      }],

      // Initialer Farbindex (entspricht dem Index im obigen Farbschema-Array)
      // Wenn lokal bereits ein Theme gespeichert ist, hat dieses Priorität (außer beim Laden lokaler Daten)
      initColorIndex: 0
    }
  });
});
