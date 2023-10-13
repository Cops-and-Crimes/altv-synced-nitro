![altv_nitro](https://user-images.githubusercontent.com/53814896/230714537-c1408ef6-8e5f-48fd-a093-74cbdf1bafaf.gif)

# SyncedNitro
 
Created by Rezondes

❤️ Geschrieben für Cops and Crimes <br>
- [Website](https://copsandcrimes.de) <br>
- [Discord](http://discord.copsandcrimes.de/) <br>
- [Patreon](https://www.patreon.com/copsandcrimes) <br>

⭐ Wenn dir dieses Repository geholfen hat!

# Beschreibung
Dieses Repository stellt eine alt:V-Ressource bereit, um Fahrzeugen einen Nitro-Boost zu geben. <br>
Gleichzeitig werden Flammen am Fahrzeug gesynced.

## Installation
Fügen Sie einfach den Ordner `altv-rezondes-nitro` in ihren Serverordner `resources` und den Namen dieser Ressource zu Ihrer `server.toml` hinzu.

```
altv-rezondes-nitro
```

## Verwendung
### _Benutzen_
Halte die `SHIFT`-Taste im Fahrzeug gedrückt. <br>
Die maximale Boostzeit beträgt 5sek. Nach einem gestartet Boost gibt es einen Cooldown von 15sek. <br>
Der Boost kann schon vor den maximalen 5sek abgebrochen werden. <br>

### _Aktivieren_
Sie können einem Fahrzeug die Möglichkeit Nitro zu benutzen geben indem Sie diesem die StreamSyncedMetaData `Nitro` geben. <br> 
<br>
**Javascript**
```js
vehicle.setStreamSyncedMeta("Nitro", true);
```
**C#**
```C#
vehicle.SetStreamSyncedMetaData("Nitro", true);
```

### _Deaktivieren_
Um dem Fahrzeug die Möglichkeit Nitro zu benutzen wieder zu entfernen löschen Sie einfach die StreamSyncedMetaData wieder. <br>
<br>
**Javascript**
```js
vehicle.deleteStreamSyncedMeta("Nitro");
```
**C#**
```C#
vehicle.DeleteStreamSyncedMetaData("Nitro");
```
