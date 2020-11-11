// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverName: "Mr.Fermz's Server",
  api: {
    host: "localhost",
    port: 7000
  },
  login: {
    username: 'admin',
    password: '1234'
  },
  response: {
    successCode: 200,
    successDescription: "success",
    failed: "failed"
  },
  helpCommand: "/advancement (grant|revoke)/attribute <target> <attribute> (base|get|modifier)/ban <targets> [<reason>]/ban-ip <target> [<reason>]/banlist [ips|players]/bossbar (add|get|list|remove|set)/clear [<targets>]/clone <begin> <end> <destination> [filtered|masked|replace]/data (get|merge|modify|remove)/datapack (disable|enable|list)/debug (report|start|stop)/defaultgamemode (adventure|creative|spectator|survival)/deop <targets>/difficulty [easy|hard|normal|peaceful]/effect (clear|give)/enchant <targets> <enchantment> [<level>]/execute (align|anchored|as|at|facing|if|in|positioned|rotated|run|store|unless)/experience (add|query|set)/fill <from> <to> <block> [destroy|hollow|keep|outline|replace]/forceload (add|query|remove)/function <name>/gamemode (adventure|creative|spectator|survival)/gamerule (announceAdvancements|commandBlockOutput|disableElytraMovementCheck|disableRaids|doDaylightCycle|doEntityDrops|doFireTick|doImmediateRespawn|doInsomnia|doLimitedCrafting|doMobLoot|doMobSpawning|doPatrolSpawning|doTileDrops|doTraderSpawning|doWeatherCycle|drowningDamage|fallDamage|fireDamage|forgiveDeadPlayers|keepInventory|logAdminCommands|maxCommandChainLength|maxEntityCramming|mobGriefing|naturalRegeneration|randomTickSpeed|reducedDebugInfo|sendCommandFeedback|showDeathMessages|spawnRadius|spectatorsGenerateChunks|universalAnger)/give <targets> <item> [<count>]/help [<command>]/kick <targets> [<reason>]/kill [<targets>]/list [uuids]/locate (bastion_remnant|buried_treasure|desert_pyramid|endcity|fortress|igloo|jungle_pyramid|mansion|mineshaft|monument|nether_fossil|ocean_ruin|pillager_outpost|ruined_portal|shipwreck|stronghold|swamp_hut|village)/locatebiome <biome>/loot (give|insert|replace|spawn)/me <action>/msg <targets> <message>/op <targets>/pardon <targets>/pardon-ip <target>/particle <name> [<pos>]/playsound <sound> (ambient|block|hostile|master|music|neutral|player|record|voice|weather)/recipe (give|take)/reload/replaceitem (block|entity)/save-all [flush]/save-off/save-on/say <message>/schedule (clear|function)/scoreboard (objectives|players)/seed/setblock <pos> <block> [destroy|keep|replace]/setidletimeout <minutes>/setworldspawn [<pos>]/spawnpoint [<targets>]/spectate [<target>]/spreadplayers <center> <spreadDistance> <maxRange> (under|<respectTeams>)/stop/stopsound <targets> [*|ambient|block|hostile|master|music|neutral|player|record|voice|weather]/summon <entity> [<pos>]/tag <targets> (add|list|remove)/team (add|empty|join|leave|list|modify|remove)/teammsg <message>/teleport (<destination>|<location>|<targets>)/tell -> msg/tellraw <targets> <message>/time (add|query|set)/title <targets> (actionbar|clear|reset|subtitle|times|title)/tm -> teammsg/tp -> teleport/trigger <objective> [add|set]/w -> msg/weather (clear|rain|thunder)/whitelist (add|list|off|on|reload|remove)/worldborder (add|center|damage|get|set|warning)/xp -> experience",
  motdCode: "§1,§2,§3,§4,§5,§6,§7,§8,§9,§0,§a,§b,§c,§d,§e,§f,§k,§l,§m,§n,§o,§r",
  allowVersion: [
    "1.16.2",
    "1.16.3",
    "1.16.4"
  ],
  version: '0.0.2'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
