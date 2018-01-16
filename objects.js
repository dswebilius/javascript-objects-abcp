var playlist = {Slayer: 'Raining Blood'};

function updatePlaylist (obj, key, value) {
    obj[key] = value;
    return obj;
}

function removeFromPlaylist (obj, key) {
    delete obj.key;
    return obj;
}

