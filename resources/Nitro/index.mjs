import * as alt from 'alt';

alt.onClient('Server:Nitro:On', (player, vehicle) => {
    if (!vehicle) return;
    
    vehicle.setSyncedMeta("nitroMode", true);
    alt.emitAllClients("Client:Nitro:Sync", vehicle, true);
});

alt.onClient('Server:Nitro:Off', (player, vehicle) => {
    if (!vehicle) return;

    vehicle.deleteSyncedMeta("nitroMode");
    alt.emitAllClients("Client:Nitro:Sync", vehicle, false);
});