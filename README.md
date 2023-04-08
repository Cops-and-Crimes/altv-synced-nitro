# Nitro
 
Created by Rezondes

❤️ Geschrieben für Cops and Crimes <br>
- [Discord](http://discord.copsandcrimes.de/) <br>
- [Patreon](http://patreon.copsandcrimes.de/) <br>

⭐ Wenn dir dieses Repository geholfen hat!

# Beschreibung
Dieses Repository stellt eine alt:V-Ressource bereit, um Fahrzeugen einen Nitro-Boost zu geben. <br>
Gleichzeitig werden Flammen am Fahrzeug gesynced.

![altv_nitro](https://user-images.githubusercontent.com/53814896/230714537-c1408ef6-8e5f-48fd-a093-74cbdf1bafaf.gif)

## Installation
Fügen Sie einfach den Ordner `Nitro` in ihren Serverordner `resources` und den Namen dieser Ressource zu Ihrer `server.toml` hinzu.

```
Nitro
```

## Verwendung
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
