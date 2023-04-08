import * as alt from 'alt-client';
import * as native from "natives";

const toggleKey = 16; // Left Shift | https://www.toptal.com/developers/keycode
const cooldown = 15000; // in milliseconds
const maxUsage = 5000; // in milliseconds
const powerIncrease = 5.0; // 1.0 = Normal PowerLevel
const camShakeIntensity = 2.5;

var start = Date.now();

const player = alt.Player.local;

function StartNitro(){
    alt.emitServer("Server:Nitro:On", player.vehicle);
    native.shakeGameplayCam("ROAD_VIBRATION_SHAKE", camShakeIntensity);
}

function StopNitro(){
    alt.emitServer("Server:Nitro:Off", player.vehicle);
    native.stopGameplayCamShaking(true);
}

alt.on('leftVehicle', (vehicle, seat) => {
    StopNitro();
});

alt.on('keydown', (key) => {
    if (key !== toggleKey || !player.vehicle) return; 

    let nitroMeta = player.vehicle.getStreamSyncedMeta("Nitro");
    if (!nitroMeta) return;

    const millis = Date.now() - start;
    if (millis < cooldown) return;

    StartNitro()
    start = Date.now();
});

alt.on('keyup', (key) => {
    if (key !== toggleKey || !player.vehicle) return;

    StopNitro();
});

alt.everyTick(() => {
    if (!player.vehicle) return;
    if (!player.vehicle.hasStreamSyncedMeta("nitroMode")) return;

    const millis = Date.now() - start;
    if (millis > maxUsage) 
    {
        StopNitro();
        return;
    }

    native.setVehicleCheatPowerIncrease(player.vehicle, powerIncrease);
})

function Sync(entity){
    console.log("instanceof " + entity instanceof alt.Vehicle);
    if (!(entity instanceof alt.Vehicle)) return;

    console.log("nitroMode " + entity.hasStreamSyncedMeta("nitroMode"))
    if (entity.hasStreamSyncedMeta("nitroMode")){
        native.requestNamedPtfxAsset('veh_xs_vehicle_mods');
        native.setOverrideNitrousLevel(entity, true, 0.0, 0.0, 0, true);
        return;
    }

    native.setOverrideNitrousLevel(entity, false, 0.0, 0.0, 0, true);
}

alt.on("gameEntityCreate", (entity) => {
    Sync(entity);
});
alt.on("streamSyncedMetaChange", (entity, key, newValue, oldValue) => {
    Sync(entity);
});