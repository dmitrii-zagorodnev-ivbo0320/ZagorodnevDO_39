const { Client, Intents, Interaction, MessageActionRow, MessageButton, SelectMenuInteraction, MessageComponentInteraction, MessageEmbed, MessageSelectMenu, Message, InteractionCollector, UserFlags } = require("discord.js")
const client = require('./client')
const ping_roles = ['919186273531461743', '919186273531461743', '919186273531461743']

client.on('messageCreate', async (message) =>{
    if(message.content === 'rules' && message.member.permissions.has('ADMINISTRATOR')){
        message.delete(message)
i        conwdwdwddst message_embed_1 = new MessageEmbed()
        .setColor('#5865F2')
        .setTitle('> Title')
        .setImage('https://cdn.discordapp.com/attachments/815146623931383819/815531518780637194/Space.png')
        .addField('> Title 2', 'Text 2')
        .addField('> Title 3', 'Text 3')
        .addField('> Title 4', 'Text 4')
        const message_embed_2 = new MessageEmbed()
        .setColor('#5865F2')
        .setTitle('> Title')
        .setImage('https://cdn.discordapp.com/attachments/815146623931383819/815531518780637194/Space.png')
        .addField('> Title 2', 'Text 2')
        .addField('> Title 3', 'Text 3')
        .addField('> Title 4', 'Text 4')

        const info_self_roles = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
            .setMinValues('0')
            .setCustomId('self-roles')
            .setPlaceholder('Select ping roles of your choice.')
            .addOptions([
                {
                    label: 'Giveaways',
                    emoji: '<:TempVoice_Giveaway:921862467041263666>',
                    value: '919186273531461741'
                },
                {
                    label: 'Updates',
                    emoji: '<:TempVoice_List:918930777536864267>',
                    value: '919186273531461742'
                },
                {
                    label: 'Status',
                    emoji: '<:TempVoice_Bug:906637060742451230>',
                    value: '919186273531461743'
                },
            ])
        )

        message.channel.send({embeds: [message_embed_1, message_embed_2], components: [info_self_roles]})
    }
})
client.on('interactionCreate', async interaction =>{
    
    if (interaction.isSelectMenu() && interaction.customId === 'self-roles') {
        const argument = interaction.values

        await interaction.member.roles.remove(ping_roles)
        await interaction.member.roles.add(argument)
        await interaction.reply({content: 'Your ping roles got updated.', ephemeral: true})
    }
})


client.login('OTIyODU5MjQ4MTIyMjE2NDg5.YcHlpg.aHE2_-oURqdCIM4qcrNBtGbOkMI')
