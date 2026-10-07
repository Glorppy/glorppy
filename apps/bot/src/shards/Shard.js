const {
    Client,
    GatewayIntentBits,
    Collection
} = require("discord.js");

function createShard() {
    const client = new Client({
        intents: [
            GatewayIntentBits.Guilds
        ]
    });

    client.commands = new Collection();

    require("../events/ready")(client);
    require("../events/interactionCreate");

    const pingCommand = require("../commands/ping");

    client.commands.set(
        pingCommand.data.name,
        pingCommand
    );

    return client;
}

module.exports = {createShard}