export const getLocations = (pat) => {
    const url = `https://api.smartthings.com/v1/locations`;
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": pat,
        }
    }).then((response) => {
        if (response.status < 200 || response.status >= 300) {
            throw Error("Unauthorized");
        }
        return response.json();
    });
};

export const getDevices = (pat) => {
    const url = `https://api.smartthings.com/v1/devices`;
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": pat,
        }
    }).then((response) => {
        if (response.status < 200 || response.status >= 300) {
            throw Error("Unauthorized");
        }
        return response.json();
    });
};

export const getRules = (pat, locationId) => {
    const url = `https://api.smartthings.com/v1/rules?locationId=${locationId}`;
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": pat,
        }
    }).then((response) => {
        if (response.status < 200 || response.status >= 300) {
            throw Error("Unauthorized");
        }
        return response.json();
    });
};

export const getScenes = (pat) => {
    const url = `https://api.smartthings.com/v1/scenes`;
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": pat,
        }
    }).then((response) => {
        if (response.status < 200 || response.status >= 300) {
            throw Error("Unauthorized");
        }
        return response.json();
    });
};

export const getProfiles = (pat) => {
    const url = `https://api.smartthings.com/v1/deviceprofiles`;
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": pat,
        }
    }).then((response) => {
        if (response.status < 200 || response.status >= 300) {
            throw Error("Unauthorized");
        }
        return response.json();
    });
};

export const getPreferences = (pat) => {
    const url = `https://api.smartthings.com/v1/devicepreferences`;
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": pat,
        }
    }).then((response) => {
        if (response.status < 200 || response.status >= 300) {
            throw Error("Unauthorized");
        }
        return response.json();
    });
};

export const getRooms = (pat, locationId) => {
    const url = `https://api.smartthings.com/v1/locations/${locationId}/rooms`;
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": pat,
        }
    }).then((response) => {
        if (response.status < 200 || response.status >= 300) {
            throw Error("Unauthorized");
        }
        return response.json();
    });
};

export const getCapabilities = (pat) => {
    const url = `https://api.smartthings.com/v1/capabilities`;
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": pat,
        }
    }).then((response) => {
        if (response.status < 200 || response.status >= 300) {
            throw Error("Unauthorized");
        }
        return response.json();
    });
};

export const getPresentations = (pat, profileId) => {
    const url = `https://api.smartthings.com/v1/presentation/types/${profileId}/deviceconfig`;
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": pat,
        }
    }).then((response) => {
        if (response.status < 200 || response.status >= 300) {
            throw Error("Unauthorized");
        }
        return response.json();
    });
};

export const getApps = (pat) => {
    const url = `https://api.smartthings.com/v1/apps`;
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": pat,
        }
    }).then((response) => {
        if (response.status < 200 || response.status >= 300) {
            throw Error("Unauthorized");
        }
        return response.json();
    });
};

export const getDriverChannels = (pat, hubDeviceId) => {
    const url = `https://api.smartthings.com/v1/hubdevices/${hubDeviceId}/channels`;
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": pat,
        }
    }).then((response) => {
        if (response.status < 200 || response.status >= 300) {
            throw Error("Unauthorized");
        }
        return response.json();
    });
};

export const getChannels = (pat) => {
    const url = `https://api.smartthings.com/v1/distchannels`;
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": pat,
        }
    }).then((response) => {
        if (response.status < 200 || response.status >= 300) {
            throw Error("Unauthorized");
        }
        return response.json();
    });
};

export const getDrivers = (pat) => {
    const url = `https://api.smartthings.com/v1/drivers`;
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": pat,
        }
    }).then((response) => {
        if (response.status < 200 || response.status >= 300) {
            throw Error("Unauthorized");
        }
        return response.json();
    });
};

export const getRoom = (pat, locationId, roomId) => {
    const url = `https://api.smartthings.com/v1/locations/${locationId}/rooms/${roomId}`;
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": pat,
        }
    }).then((response) => {
        if (response.status < 200 || response.status >= 300) {
            throw Error("Unauthorized");
        }
        return response.json();
    });
} 