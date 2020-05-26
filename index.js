const Discord = require('discord.js');
const math = require('mathjs');
const c = new Discord.Client();
const r = "RANDOM";
const { token, prefix } = require('./config.json');

c.on('ready', () => console.log(`${c.user.tag} successfully logged in.`));

c.on('message', async msg => {
    const args = msg.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    if(!msg.content.startsWith(prefix) || msg.author.bot) return;
    if(msg.channel.type == 'dm') return;

    // Monsters //
    let monsters = [
        'Rabb the Rat',
        'Sssszzz the Stone',
        'Hazel the Shrew',
        'Ghak the Crimson Horns',
        'Gristle',
        'Taurine the Red',
        'Ironhide',
        'Fyona the Elementalist',
        'Grikk the Reborn',
        'The Awakened One',
        'A belligerent beach bum',
        'The Beetle Queen',
        'The Mist Stalker',
        'Shzoc, Gruesome Doppelganger',
        'Angar the Sand Lord',
        'Slor, the Roaster',
        'The Junkbeast',
        'Undead Spouses',
        'Flitterwing',
        'Gorgotrachelorex',
        'Brancu Earthrumbler',
        'Othgualo the Exiled King',
        'Elder Druid Fang-Speak',
        'The Deviants',
        'The Fleshflower',
        'Gozzlac, Fiery Golem',
        'The Spectral Hunter',
        'The Wind Hag',
        'Vakkaros the Frozen',
        'Huntfang',
        'Crate of Pets',
        'Alnatch the Unclad',
        'Hakopta, Queen of Chaos',
        'Goretusk',
        'Sandjaw',
        'The Haunted Treant',
        'Dher`quc, unholy abomination',
        'A mystic drake',
        'Maggot-Infested Corpse',
        'Head Miner Kalko',
        'Redmaw',
        'Tarx the Stormfeather',
        'Harahon, the Rotten One',
        'Notus of the Wind',
        'Cyclonus, the Wind\'s Revenge',
        'Sludgebreath',
        'Theurgist Iztala',
        'Snowskin',
        'Icefeather',
        'Snapper',
        'Tidefang the Wild',
        'Lord Commander Ragarati',
        'Noxin the Stone Juggernaut',
        'Nalia the Psychic',
        'Traekoth the Ancient',
        'Pounder VIII and Pounder XI',
        'Frozen Mistress of the Grotto'
    ]
    let mcheck = new Array();
    var rabb = { name: "rabb", level: 1 }
    mcheck.push(rabb.name);
    var sz = { name: "sz", level: 1 }
    mcheck.push(sz.name);
    var hazel = { name: "hazel", level: 3 }
    mcheck.push(hazel.name);
    var ghak = { name: "ghak", level: 4 }
    mcheck.push(ghak.name);
    var gristle = { name: "gris", level: 4 }
    mcheck.push(gristle.name);
    var taurine = { name: "taur", level: 7 }
    mcheck.push(taurine.name);
    var ironhide = { name: "iron", level: 7 }
    mcheck.push(ironhide.name);
    var fyona = { name: "fyona", level: 8 }
    mcheck.push(fyona.name);
    var grikk = { name: "grikk", level: 9 }
    mcheck.push(grikk.name);
    var tao = { name: "tao", level: 9 }
    mcheck.push(tao.name);
    var bellibum = { name: "bum", level: 10 }
    mcheck.push(bellibum.name);
    var beetle = { name: "beetle", level: 12 }
    mcheck.push(beetle.name);
    var stalker = { name: "stalker", level: 12 }
    mcheck.push(stalker.name);
    var shzoc = { name: "shzoc", level: 12 }
    mcheck.push(shzoc.name);
    var angar = { name: "angar", level: 14 }
    mcheck.push(angar.name);
    var slor = { name: "slor", level: 14 }
    mcheck.push(slor.name);
    var junkbeast = { name: "beast", level: 15 }
    mcheck.push(junkbeast.name);
    var spouses = { name: "spouses", level: 15 }
    mcheck.push(spouses.name);
    var flitterwing = { name: "flit", level: 17 }
    mcheck.push(flitterwing.name);
    var gorgo = { name: "gorg", level: 17 }
    mcheck.push(gorgo.name);
    var brancu = { name: "bran", level: 20 }
    mcheck.push(brancu.name);
    var exiking = { name: "king", level: 20 }
    mcheck.push(exiking.name);
    var druid = { name: "druid", level: 21 }
    mcheck.push(druid.name);
    var deviants = { name: "devi", level: 22 }
    mcheck.push(deviants.name);
    var fleshflower = { name: "flesh", level: 23 }
    mcheck.push(fleshflower.name);
    var gozzlac = { name: "gozz", level: 24 }
    mcheck.push(gozzlac.name);
    var hunter = { name: "hunter", level: 25 }
    mcheck.push(hunter.name);
    var hag = { name: "hag", level: 25 }
    mcheck.push(hag.name);
    var vakkaros = { name: "vakk", level: 25 }
    mcheck.push(vakkaros.name);
    var fang = { name: "fang", level: 26 }
    mcheck.push(fang.name);
    var pets = { name: "pets", level: 27 }
    mcheck.push(pets.name);
    var alnatch = { name: "alna", level: 29 }
    mcheck.push(alnatch.name);
    var hakopta = { name: "hako", level: 30 }
    mcheck.push(hakopta.name);
    var goretusk = { name: "gore", level: 30 }
    mcheck.push(goretusk.name);
    var sandjaw = { name: "sand", level: 32 }
    mcheck.push(sandjaw.name);
    var treant = { name: "trea", level: 32 }
    mcheck.push(treant.name);
    var dherquc = { name: "dher", level: 32 }
    mcheck.push(dherquc.name);
    var drake = { name: "drake", level: 34 }
    mcheck.push(drake.name);
    var maggot = { name: "magg", level: 35 }
    mcheck.push(maggot.name);
    var kalko = { name: "kalk", level: 35 }
    mcheck.push(kalko.name);
    var redmaw = { name: "red", level: 36 }
    mcheck.push(redmaw.name);
    var tarx = { name: "tar", level: 36 }
    mcheck.push(tarx.name);
    var harahon = { name: "har", level: 36 }
    mcheck.push(harahon.name);
    var notus = { name: "notus", level: 39 }
    mcheck.push(notus.name);
    var cyclonus = { name: "cyc", level: 39 }
    mcheck.push(cyclonus.name);
    var sludgebreath = { name: "slud", level: 42 }
    mcheck.push(sludgebreath.name);
    var iztala = { name: "izta", level: 42 }
    mcheck.push(iztala.name);
    var snowskin = { name: "snow", level: 43 }
    mcheck.push(snowskin.name);
    var icefeather = { name: "ice", level: 45 }
    mcheck.push(icefeather.name);
    var snapper = { name: "snap", level: 47 }
    mcheck.push(snapper.name);
    var tidefang = { name: "tide", level: 50 }
    mcheck.push(tidefang.name);
    var ragarati = { name: "raga", level: 52 }
    mcheck.push(ragarati.name);
    var noxin = { name: "noxin", level: 52 }
    mcheck.push(noxin.name);
    var nalia = { name: "nalia", level: 55 }
    mcheck.push(nalia.name);
    var traekoth = { name: "trae", level: 57 }
    mcheck.push(traekoth.name);
    var pounder = { name: "pound", level: 57 }
    mcheck.push(pounder.name);
    var grotto = { name: "grot", level: 57 }
    mcheck.push(grotto.name);

    // Monsters List //

    if(cmd === 'adepts'){
        let x = new Discord.MessageEmbed()
        .setTitle('List of all the Monsters')
        .setURL('https://wiki.shardsofdalaya.com/index.php/Main_Page')
        .setImage('https://serving.photos.photobox.com/824039851d1baa6117435e1c25559313c68b480c440a6e5c089d71779d2a8d23024c0d23.jpg')
        .addFields(
            { name: 'Adept List', value: monsters, inline: true },
            { name: 'Adept Calling', value: mcheck, inline: true }
        )
        .setFooter(`Found ${monsters.length} Monsters!`, c.user.displayAvatarURL())
        .setColor(r)
        msg.channel.send(x);
    }

    // Kill //
    if(cmd === 'setup'){
        let chc = msg.guild.channels.cache.find(c => c.name === 'adept-logs')
        if(!chc){
            msg.guild.channels.create('adept-logs', { type: 'text' })
        }
        let role0 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer');
        let role1 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer1-3' || r.name === 'slayer1-3');
        let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer4-9' || r.name === 'slayer4-9');
        let role3 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer10-20' || r.name === 'slayer10-20');
        let role4 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57');
        if(!role0){
            msg.member.guild.roles.create({
                data: {
                    name: 'Slayer',
                    permissions: []
                }
            })
        }
        if(!role1){
            msg.member.guild.roles.create({
                data: {
                    name: 'Slayer1-3',
                    permissions: []
                }
            })
        }
        if(!role2){
            msg.member.guild.roles.create({
                data: {
                    name: 'Slayer4-9',
                    permissions: []
                }
            })
        }
        if(!role3){
            msg.member.guild.roles.create({
                data: {
                    name: 'Slayer10-20',
                    permissions: []
                }
            })
        }
        if(!role4){
            msg.member.guild.roles.create({
                data: {
                    name: 'Slayer21-57',
                    permissions: []
                }
            })
        }
        msg.channel.send('The setup is completed!');
    }
    
    if(cmd === `kill`){
        if(!args[0]) return msg.channel.send('You didn\'t specify any monster to kill!');
        if(!mcheck.includes(args[0].toLowerCase())) return msg.channel.send('You didn\'t specify a valid monster!');

        const ch = msg.member.guild.channels.cache.find(c => c.name === 'adept-logs');
        if(!ch) return msg.channel.send('Make sure to run !setup before using the bot!');
        if(mcheck[0].includes(args[0].toLowerCase())) {
               let rtime = rabb.level * 1000 * 60 * 60 / 2 - 300000
               let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer1-3' || r.name === 'slayer1-3')
               let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
               // embeds //
               let x = new Discord.MessageEmbed()
               .setDescription(`You have killed ${monsters[0]}`)
               .setColor(r);
               msg.channel.send(x);

               let y = new Discord.MessageEmbed()
               .setDescription(`${monsters[0]} got killed. He will respawn in ${rtime / 1000} seconds.`)
               .setColor(r);
               ch.send(y)

               let z = new Discord.MessageEmbed()
               .setDescription(`${monsters[0]} has respawned!`)
               .setColor(r);

               // Timer //
               global.timer = setTimeout(() => {
                   ch.send(z);
                   ch.send(`${role} - ${role2}`)
               }, rtime);
        }

        if(mcheck[1].includes(args[0].toLowerCase())) {
            let rtime = sz.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer1-3' || r.name === 'slayer1-3')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[1]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[1]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[1]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`)
            }, rtime);
        }

        if(mcheck[2].includes(args[0].toLowerCase())) {
            let rtime = hazel.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer1-3' || r.name === 'slayer1-3')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[2]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[2]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[2]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[3].includes(args[0].toLowerCase())) {
            let rtime = ghak.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer4-9' || r.name === 'slayer4-9')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[3]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[3]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[3]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[4].includes(args[0].toLowerCase())) {
            let rtime = gristle.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer4-9' || r.name === 'slayer4-9')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[4]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[4]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[4]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[5].includes(args[0].toLowerCase())) {
            let rtime = taurine.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer4-9' || r.name === 'slayer4-9')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[5]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[5]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[5]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`)
            }, rtime);
        }

        if(mcheck[6].includes(args[0].toLowerCase())) {
            let rtime = ironhide.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer4-9' || r.name === 'slayer4-9')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[6]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[6]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[6]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[7].includes(args[0].toLowerCase())) {
            let rtime = fyona.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer4-9' || r.name === 'slayer4-9')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[7]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[7]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[7]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`)  
            }, rtime);
        }

        if(mcheck[8].includes(args[0].toLowerCase())) {
            let rtime = grikk.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer4-9' || r.name === 'slayer4-9')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[8]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[8]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[8]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[9].includes(args[0].toLowerCase())) {
            let rtime = tao.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer10-20' || r.name === 'slayer10-20')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[9]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[9]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[9]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[10].includes(args[0].toLowerCase())) {
            let rtime = bellibum.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer10-20' || r.name === 'slayer10-20')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[10]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[10]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[10]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[11].includes(args[0].toLowerCase())) {
            let rtime = beetle.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer10-20' || r.name === 'slayer10-20')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[11]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[11]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[11]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[12].includes(args[0].toLowerCase())) {
            let rtime = stalker.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer10-20' || r.name === 'slayer10-20')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[12]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[12]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[12]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[13].includes(args[0].toLowerCase())) {
            let rtime = shzoc.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer10-20' || r.name === 'slayer10-20')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[13]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[13]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[13]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[14].includes(args[0].toLowerCase())) {
            let rtime = angar.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer10-20' || r.name === 'slayer10-20')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[14]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[14]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[14]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[15].includes(args[0].toLowerCase())) {
            let rtime = slor.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer10-20' || r.name === 'slayer10-20')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[15]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[15]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[15]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[16].includes(args[0].toLowerCase())) {
            let rtime = junkbeast.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer10-20' || r.name === 'slayer10-20')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[16]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[16]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[16]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[17].includes(args[0].toLowerCase())) {
            let rtime = spouses.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer10-20' || r.name === 'slayer10-20')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[17]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[17]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[17]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[18].includes(args[0].toLowerCase())) {
            let rtime = flitterwing.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer10-20' || r.name === 'slayer10-20')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[18]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[18]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[18]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[19].includes(args[0].toLowerCase())) {
            let rtime = gorgo.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer10-20' || r.name === 'slayer10-20')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[19]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[19]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[19]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[20].includes(args[0].toLowerCase())) {
            let rtime = brancu.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer10-20' || r.name === 'slayer10-20')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[20]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[20]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[20]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[21].includes(args[0].toLowerCase())) {
            let rtime = exiking.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[21]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[21]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[21]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[22].includes(args[0].toLowerCase())) {
            let rtime = druid.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[22]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[22]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[22]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[23].includes(args[0].toLowerCase())) {
            let rtime = deviants.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[23]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[23]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[23]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[24].includes(args[0].toLowerCase())) {
            let rtime = fleshflower.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[24]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[24]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[24]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[25].includes(args[0].toLowerCase())) {
            let rtime = gozzlac.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[25]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[25]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[25]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[26].includes(args[0].toLowerCase())) {
            let rtime = hunter.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[26]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[26]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[26]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[27].includes(args[0].toLowerCase())) {
            let rtime = hag.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[27]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[27]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[27]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[28].includes(args[0].toLowerCase())) {
            let rtime = vakkaros.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[28]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[28]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[28]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[29].includes(args[0].toLowerCase())) {
            let rtime = fang.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[29]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[29]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[29]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[30].includes(args[0].toLowerCase())) {
            let rtime = pets.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[30]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[30]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[30]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[31].includes(args[0].toLowerCase())) {
            let rtime = alnatch.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[31]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[31]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[31]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[32].includes(args[0].toLowerCase())) {
            let rtime = hakopta.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[32]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[32]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[32]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[33].includes(args[0].toLowerCase())) {
            let rtime = goretusk.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[33]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[33]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[33]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[34].includes(args[0].toLowerCase())) {
            let rtime = sandjaw.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[34]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[34]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[34]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[35].includes(args[0].toLowerCase())) {
            let rtime = treant.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[35]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[35]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[35]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[36].includes(args[0].toLowerCase())) {
            let rtime = dherquc.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[36]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[36]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[36]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[37].includes(args[0].toLowerCase())) {
            let rtime = drake.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[37]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[37]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[37]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[38].includes(args[0].toLowerCase())) {
            let rtime = maggot.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[38]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[38]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[38]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[39].includes(args[0].toLowerCase())) {
            let rtime = kalko.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[39]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[39]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[39]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[40].includes(args[0].toLowerCase())) {
            let rtime = redmaw.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[40]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[40]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[40]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[41].includes(args[0].toLowerCase())) {
            let rtime = tarx.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[41]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[41]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[41]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[42].includes(args[0].toLowerCase())) {
            let rtime = harahon.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[42]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[42]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[42]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[43].includes(args[0].toLowerCase())) {
            let rtime = notus.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[43]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[43]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[43]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[44].includes(args[0].toLowerCase())) {
            let rtime = cyclonus.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[44]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[44]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[44]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[45].includes(args[0].toLowerCase())) {
            let rtime = sludgebreath.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[4]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[45]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[45]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[46].includes(args[0].toLowerCase())) {
            let rtime = iztala.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[46]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[46]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[46]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[47].includes(args[0].toLowerCase())) {
            let rtime = snowskin.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[47]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[47]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[47]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[48].includes(args[0].toLowerCase())) {
            let rtime = icefeather.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[48]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[48]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[48]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[49].includes(args[0].toLowerCase())) {
            let rtime = snapper.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[49]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[49]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[49]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[50].includes(args[0].toLowerCase())) {
            let rtime = tidefang.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[50]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[50]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[50]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[51].includes(args[0].toLowerCase())) {
            let rtime = ragarati.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[51]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[51]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[51]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[52].includes(args[0].toLowerCase())) {
            let rtime = noxin.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[52]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[52]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[52]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[53].includes(args[0].toLowerCase())) {
            let rtime = nalia.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[53]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[53]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[53]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[54].includes(args[0].toLowerCase())) {
            let rtime = traekoth.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[54]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[54]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[54]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[55].includes(args[0].toLowerCase())) {
            let rtime = pounder.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[55]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[55]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[55]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }

        if(mcheck[56].includes(args[0].toLowerCase())) {
            let rtime = grotto.level * 1000 * 60 * 60 / 2 - 300000
            let role = msg.member.guild.roles.cache.find(r => r.name === 'Slayer21-57' || r.name === 'slayer21-57')
            let role2 = msg.member.guild.roles.cache.find(r => r.name === 'Slayer' || r.name === 'slayer')
            // embeds //
            let x = new Discord.MessageEmbed()
            .setDescription(`You have killed ${monsters[56]}`)
            .setColor(r);
            msg.channel.send(x);

            let y = new Discord.MessageEmbed()
            .setDescription(`${monsters[56]} got killed. He will respawn in ${rtime / 1000} seconds.`)
            .setColor(r);
            ch.send(y)

            let z = new Discord.MessageEmbed()
            .setDescription(`${monsters[56]} has respawned!`)
            .setColor(r);

            // Timer //
            global.timer = setTimeout(() => {
                ch.send(z);
                ch.send(`${role} - ${role2}`);
            }, rtime);
        }
    }
})

c.login(token);