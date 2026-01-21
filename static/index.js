/**
 * Initialisierung des Theme-Einstiegsmoduls
 */

layui.extend({
  setter: 'config' // config.js als layui-Modul erweitern
}).define(['setter'], function(exports){
  var setter = layui.setter;

  // Kernbibliothek als layui-Module erweitern
  layui.each({
    admin: 'admin',
    view: 'view',
    adminIndex: 'index'
  }, function(modName, fileName){
    var libs = {};
    libs[modName] = '{/}'+ setter.paths.core +'/modules/'+ fileName;
    layui.extend(libs);
  });

  // Basisverzeichnis der Business-Module festlegen
  layui.config({
    base: setter.paths.modules
  });

  // Spezielle Module aus den Business-Modulen als layui-Module erweitern
  layui.each(setter.extend, function(key, value){
    var mods = {};
    mods[key] = '{/}' + layui.cache.base + value;
    layui.extend(mods);
  });

  // Einstiegsmodul der Theme-Kernbibliothek laden
  layui.use('adminIndex', function(){
    layui.use('common'); // Öffentliches Business-Modul laden; kann entfernt werden, wenn nicht benötigt

    // Modul exportieren / Marker: Module wurden geladen
    exports('index', layui.admin);
  });
});
