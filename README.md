# Nitro
 
Created by Rezondes

❤️ Geschrieben für Cops and Crimes <br>
- [Discord](http://discord.copsandcrimes.de/) <br>
- [Patreon](http://patreon.copsandcrimes.de/) <br>

⭐ Wenn dir dieses Repository geholfen hat!

# Beschreibung
Dieses Repository stellt eine alt:V-Ressource bereit, um Fahrzeugen einen Nitro-Boost zu geben. <br>
Gleichzeitig werden Flammen am Fahrzeug gesynced.

![altv_nitro.gif](https://drive.google.com/uc?id=1qHsxNRrt39fxpjg8B4ulVFDGBMMUFfoE&export=download)

## Installation
Fügen Sie einfach den Ordner `Nitro` in ihren Serverordner `resources` und den Namen dieser Ressource zu Ihrer `server.toml` hinzu.

```
Nitro
```

## Verwendung
Sie können einem Fahrzeug die Möglichkeit Nitro zu benutzen geben indem Sie diesem die StreamSyncedMetaData `Nitro` geben.
```js
vehicle.setStreamSyncedMeta("Nitro", true);
```
```C#
vehicle.SetStreamSyncedMetaData("Nitro", true);
```

Um dem Fahrzeug die Möglichkeit Nitro zu benutzen wieder zu entfernen löschen Sie einfach die StreamSyncedMetaData wieder.

```js
vehicle.deleteStreamSyncedMeta("Nitro");
```
```C#
vehicle.DeleteStreamSyncedMetaData("Nitro");
```