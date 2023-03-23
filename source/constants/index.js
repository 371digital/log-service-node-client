export const serviceUrl = "https://log-service.371digital.com";

export const endPoints = {
    "createLog": `${serviceUrl}/createLog`,
    "getLogs": (key) => `${serviceUrl}/getLogs?key=${key}`
};