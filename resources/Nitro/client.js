import * as alt from 'alt-client';
import * as native from "natives";

const toggleKey = 16; // Left Shift | https://www.toptal.com/developers/keycode
const cooldown = 15000; // in milliseconds
const maxUsage = 5000; // in milliseconds
const powerIncrease = 5.0; // 1.0 = Normal PowerLevel
const camShakeIntensity = 2.5;

var nitroOn = false;
var start = Date.now();

function StartNitro(){
    alt.emitServer("Server:Nitro:On", alt.Player.local.vehicle);
    native.shakeGameplayCam("ROAD_VIBRATION_SHAKE", camShakeIntensity);
    nitroOn = true;
}

function StopNitro(){
    alt.emitServer("Server:Nitro:Off", alt.Player.local.vehicle);
    native.stopGameplayCamShaking(true);
    nitroOn = false;
}

alt.on('leftVehicle', (vehicle, seat) => {
    StopNitro();
});

alt.on('keydown', (key) => {
    if (key !== toggleKey || !alt.Player.local.vehicle) return; 

    let nitroMeta = alt.Player.local.vehicle.getStreamSyncedMeta("Nitro");
    if (!nitroMeta) return;

    const millis = Date.now() - start;
    if (millis < cooldown) return;

    StartNitro()
    start = Date.now();
});

alt.on('keyup', (key) => {
    if (key !== toggleKey || !alt.Player.local.vehicle) return;

    StopNitro();
});

alt.everyTick(() => {
    if (!alt.Player.local.vehicle) return;
    if (!nitroOn) return;

    const millis = Date.now() - start;
    if (millis > maxUsage) 
    {
        StopNitro();
        return;
    }

    native.setVehicleCheatPowerIncrease(alt.Player.local.vehicle, powerIncrease);
})

alt.onServer("Client:Nitro:Sync", (vehicle, state) =>{
    if (state){
        native.requestNamedPtfxAsset('veh_xs_vehicle_mods');
        native.setOverrideNitrousLevel(vehicle, true, 0.0, 0.0, 0, true);
    }else{
        native.setOverrideNitrousLevel(vehicle, false, 0.0, 0.0, 0, true);
    }
})

alt.on("gameEntityCreate", (entity) => {
    if (entity instanceof alt.Vehicle) 
    {
        if (entity.hasSyncedMeta("nitroMode")){
            native.requestNamedPtfxAsset('veh_xs_vehicle_mods');
            native.setOverrideNitrousLevel(entity, true, 0.0, 0.0, 0, true);
        }else{
            native.setOverrideNitrousLevel(entity, false, 0.0, 0.0, 0, true);
        }
    }
});