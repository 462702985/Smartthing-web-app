
export const getLocations = (pat) => {
    const url = `https://api.smartthings.com/v1/locations`;
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": pat,
        }
    }).then((response) => {
        if (response.status === 401) {
            throw Error("Not authenticated"); 
        } else if (response.status === 403) {
            throw Error("Not authorized or not found");
        } else if (response.status < 200 || response.status > 400) {
            throw Error("Unexpected error");
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
        if (response.status === 401) {
            throw Error("Not authenticated"); 
        } else if (response.status === 403) {
            throw Error("Not authorized or not found");
        } else if (response.status < 200 || response.status > 400) {
            throw Error("Unexpected error");
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
        if (response.status === 401) {
            throw Error("Not authenticated"); 
        } else if (response.status === 403) {
            throw Error("Not authorized or not found");
        } else if (response.status < 200 || response.status > 400) {
            throw Error("Unexpected error");
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
        if (response.status === 401) {
            throw Error("Not authenticated"); 
        } else if (response.status === 403) {
            throw Error("Not authorized or not found");
        } else if (response.status < 200 || response.status > 400) {
            throw Error("Unexpected error");
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
        if (response.status === 401) {
            throw Error("Not authenticated"); 
        } else if (response.status === 403) {
            throw Error("Not authorized or not found");
        } else if (response.status < 200 || response.status > 400) {
            throw Error("Unexpected error");
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
        if (response.status === 401) {
            throw Error("Not authenticated"); 
        } else if (response.status === 403) {
            throw Error("Not authorized or not found");
        } else if (response.status < 200 || response.status > 400) {
            throw Error("Unexpected error");
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
        if (response.status === 401) {
            throw Error("Not authenticated"); 
        } else if (response.status === 403) {
            throw Error("Not authorized or not found");
        } else if (response.status < 200 || response.status > 400) {
            throw Error("Unexpected error");
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
        if (response.status === 401) {
            throw Error("Not authenticated"); 
        } else if (response.status === 403) {
            throw Error("Not authorized or not found");
        } else if (response.status < 200 || response.status > 400) {
            throw Error("Unexpected error");
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
        if (response.status === 401) {
            throw Error("Not authenticated"); 
        } else if (response.status === 403) {
            throw Error("Not authorized or not found");
        } else if (response.status < 200 || response.status > 400) {
            throw Error("Unexpected error");
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
        if (response.status === 401) {
            throw Error("Not authenticated"); 
        } else if (response.status === 403) {
            throw Error("Not authorized or not found");
        } else if (response.status < 200 || response.status > 400) {
            throw Error("Unexpected error");
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
        if (response.status === 401) {
            throw Error("Not authenticated"); 
        } else if (response.status === 403) {
            throw Error("Not authorized or not found");
        } else if (response.status < 200 || response.status > 400) {
            throw Error("Unexpected error");
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
        if (response.status === 401) {
            throw Error("Not authenticated"); 
        } else if (response.status === 403) {
            throw Error("Not authorized or not found");
        } else if (response.status < 200 || response.status > 400) {
            throw Error("Unexpected error");
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
        if (response.status === 401) {
            throw Error("Not authenticated"); 
        } else if (response.status === 403) {
            throw Error("Not authorized or not found");
        } else if (response.status < 200 || response.status > 400) {
            throw Error("Unexpected error");
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
        if (response.status === 401) {
            throw Error("Not authenticated"); 
        } else if (response.status === 403) {
            throw Error("Not authorized or not found");
        } else if (response.status < 200 || response.status > 400) {
            throw Error("Unexpected error");
        }
        return response.json();
    });
} 

export const postRule = (pat, locationId, actions) => {
    const url = `https://api.smartthings.com/v1/rules?locationId=${locationId}`;
    return fetch(url, {
        method: "Post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": pat,
        },
        body: JSON.stringify(JSON.parse(actions))
    }).then((response) => {
        if (response.status === 401) {
            throw Error("Not authenticated"); 
        } else if (response.status === 403) {
            throw Error("Not authorized or not found");
        } else if (response.status < 200 || response.status > 400) {
            throw Error("Unexpected error");
        }
    });
}

export const deleteRule = (pat, ruleId, locationId) => {
    const url = `https://api.smartthings.com/v1/rules/${ruleId}?locationId=${locationId}`;
    return fetch(url, {
        method: "Delete",
        headers: {
            "Content-Type": "application/json",
            "Authorization": pat,
        }
    }).then((response) => {
        if (response.status === 401) {
            throw Error("Not authenticated"); 
        } else if (response.status === 403) {
            throw Error("Not authorized or not found");
        } else if (response.status < 200 || response.status > 400) {
            throw Error("Unexpected error");
        }
    });
}

export const parseRule = (rule) => {
    let obj = {"rule": rule}
    if (rule.name !== null) {
        obj.name = rule.name;
        obj.id = rule.id;
        obj.ownerId = rule.ownerId;
        const actions = rule.actions[0];
        if (actions.if) {
            obj.action = "if";
            const keys = Object.keys(actions.if)
            const conditionName = keys[0];
            console.log(keys);
            obj.conditionName = conditionName;
            obj.condition = JSON.stringify(actions.if[conditionName]);
            if (obj.condition) {
                const devices = obj.condition.match(/"devices":\[(.*?)\]/) ?? ["", ""];
                obj.triggerDevice = devices[1];
                const capability = obj.condition.match(/"capability":"(.*?)"/) ?? ["", ""];
                const event = obj.condition.match(/"string":"(.*?)"/) ?? ["", ""];
                obj.triggerEvent = capability[1] + " " + event[1];
            }
            obj.result = JSON.stringify(actions.if.then);
            if (obj.result) {
                const devices = obj.result.match(/"devices":\[(.*?)\]/) ?? ["", ""];
                obj.actionDevice = devices[1];
                const capability = obj.result.match(/"capability":"(.*?)"/) ?? ["", ""];
                const event = obj.result.match(/"command":"(.*?)"/) ?? ["", ""];
                obj.actionEvent = capability[1] + " " + event[1];
            }
        } else if (actions.commands) {
            obj.action = "command";
            obj.result = JSON.stringify(actions.commands);
        } else if (actions.every) {
            obj.action = "every";
            obj.conditionName = "specific";
            obj.condition = JSON.stringify(actions.every.specific);
            obj.result = JSON.stringify(actions.every.actions);
            if (obj.result) {
                const devices = obj.result.match(/"devices":\[(.*?)\]/) ?? ["", ""]
                obj.actionDevice = devices[1];
                const capability = obj.result.match(/"capability":"(.*?)"/) ?? ["", ""];
                const event = obj.result.match(/"command":"(.*?)"/) ?? ["", ""];
                obj.actionEvent = capability[1] + " " + event[1];
            }
        }
    }
    return obj
}