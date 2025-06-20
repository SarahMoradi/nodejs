const os = require("os")

const currentOperatingSystem = {
    name: os.type(),
    arch: os.arch(),
    platform: os.platform(),
    release: os.release(),
    version: os.version(),
    uptime: os.uptime(),
    user: os.userInfo(),
    memory : os.totalmem(),
    freeMemory: os.freemem(),
    cpu: os.cpus(),
    networks: os.networkInterfaces()
}

console.log("current operating system: ", currentOperatingSystem)
