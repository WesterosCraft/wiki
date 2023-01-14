import fs from "fs";

const locations = [
  {
    region: {
      name: "Vale",
    },
    slug: "brightstone",
    title: "Brightstone",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "hasty",
    title: "Hasty",
  },
  {
    region: {
      name: "North",
    },
    slug: "seadragon",
    title: "Sea Dragon Point",
  },
  {
    region: {
      name: "North",
    },
    slug: "blackpool",
    title: "Blackpool",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "acorn-hall",
    title: "Acorn Hall",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "algood",
    title: "Algood",
  },
  {
    region: {
      name: "North",
    },
    slug: "amber",
    title: "Amber",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "amberly",
    title: "Amberly",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "ambrose",
    title: "Ambrose",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "antlers",
    title: "Antlers",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "appleton",
    title: "Appleton",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "ashemark",
    title: "Ashemark",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "ashford",
    title: "Ashford",
  },
  {
    region: {
      name: "North",
    },
    slug: "ashwood",
    title: "Ashwood",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "atranta",
    title: "Atranta",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "baelish-keep",
    title: "Baelish Keep",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "ball",
    title: "Ball",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "bandallon",
    title: "Bandallon",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "banefort",
    title: "Banefort",
  },
  {
    region: {
      name: "North",
    },
    slug: "barrowton",
    title: "Barrowton",
  },
  {
    region: {
      name: "North",
    },
    slug: "bear-island",
    title: "Bear Island",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "belgrave",
    title: "Belgrave",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "bettley",
    title: "Bettley",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "bigglestone",
    title: "Bigglestone",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "bitterbridge",
    title: "Bitterbridge",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "blackberry",
    title: "Blackberry",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "blackcrown",
    title: "Blackcrown",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "blackhaven",
    title: "Blackhaven",
  },
  {
    region: {
      name: "Dorne",
    },
    slug: "blackmont",
    title: "Blackmont",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "blanetree",
    title: "Blanetree",
  },
  {
    region: {
      name: "Dorne",
    },
    slug: "bloodstone",
    title: "Bloodstone",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "blount",
    title: "Blount",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "boggs",
    title: "Boggs",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "bolling",
    title: "Bolling",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "bourney",
    title: "Bourney",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "breakstone",
    title: "Breakstone",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "briarwhite",
    title: "Briarwhite",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "bridges",
    title: "Bridges",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "brightwater-keep",
    title: "Brightwater Keep",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "brindlewood",
    title: "Brindlewood",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "broad-arch",
    title: "Broad Arch",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "bronzegate",
    title: "Bronzegate",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "broom",
    title: "Broom",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "brownhill",
    title: "Brownhill",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "brownhollow",
    title: "Brownhollow",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "bullock",
    title: "Bullock",
  },
  {
    region: {
      name: "North",
    },
    slug: "burley",
    title: "Burley",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "bush",
    title: "Bush",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "bushy",
    title: "Bushy",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "butterwell",
    title: "Butterwell",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "byrch",
    title: "Byrch",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "bywater",
    title: "Bywater",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "castamere",
    title: "Castamere",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "casterly-rock",
    title: "Casterly Rock",
  },
  {
    region: {
      name: "The Wall",
    },
    slug: "castle-black",
    title: "Castle Black",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "castle-darry",
    title: "Castle Darry",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "cave",
    title: "Cave",
  },
  {
    region: {
      name: "North",
    },
    slug: "cerwyn",
    title: "Cerwyn",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "chambers",
    title: "Chambers",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "chelsted",
    title: "Chelsted",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "chyttering",
    title: "Chyttering",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "cider-hall",
    title: "Cider Hall",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "claw-isle",
    title: "Claw Isle",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "clegane-hall",
    title: "Clegane Hall",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "cobb",
    title: "Cobb",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "cockshaw",
    title: "Cockshaw",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "codd",
    title: "Codd",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "coldmoat",
    title: "Coldmoat",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "coldwater-burn",
    title: "Coldwater Burn",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "cole",
    title: "Cole",
  },
  {
    region: {
      name: "North",
    },
    slug: "condon",
    title: "Condon",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "conklyn",
    title: "Conklyn",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "corne",
    title: "Corne",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "cornfield",
    title: "Cornfield",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "corpse-lake",
    title: "Corpse Lake",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "crakehall",
    title: "Crakehall",
  },
  {
    region: {
      name: "Beyond the Wall",
    },
    slug: "crasters-keep",
    title: "Craster's Keep",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "crayne",
    title: "Crayne",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "cressey",
    title: "Cressey",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "crossroads-inn",
    title: "Crossroads Inn",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "crow-spike-keep",
    title: "Crow Spike Keep",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "crows-nest",
    title: "Crow's Nest",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "darkdell",
    title: "Darkdell",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "deddings",
    title: "Deddings",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "deep-den",
    title: "Deep Den",
  },
  {
    region: {
      name: "The Wall",
    },
    slug: "deep-lake",
    title: "Deep Lake",
  },
  {
    region: {
      name: "North",
    },
    slug: "deepwood-motte",
    title: "Deepwood Motte",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "doggett",
    title: "Doggett",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "donniger",
    title: "Donniger",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "downdelving",
    title: "Downdelving",
  },
  {
    region: {
      name: "Dorne",
    },
    slug: "godsgrace",
    title: "Godsgrace",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "horpe",
    title: "Horpe",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "wickenden",
    title: "Wickenden",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "dragonstone",
    title: "Dragonstone",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "driftmark",
    title: "Driftmark",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "drox",
    title: "Drox",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "drumm",
    title: "Drumm",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "dunstonbury",
    title: "Dunstonbury",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "durwell",
    title: "Durwell",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "duskendale",
    title: "Duskendale",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "dutton",
    title: "Dutton",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "dyre-den",
    title: "Dyre Den",
  },
  {
    region: {
      name: "The Wall",
    },
    slug: "eastwatch-by-the-sea",
    title: "Eastwatch-by-the-Sea",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "edgerton",
    title: "Edgerton",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "egen-hall",
    title: "Egen Hall",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "erenford",
    title: "Erenford",
  },
  {
    region: {
      name: "Dorne",
    },
    slug: "extinct-houses-of-dorne",
    title: "Extinct Houses of Dorne",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "faircastle",
    title: "Faircastle",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "fairmarket",
    title: "Fairmarket",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "falwell",
    title: "Falwell",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "farring",
    title: "Farring",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "fawnton",
    title: "Fawnton",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "feastfires",
    title: "Feastfires",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "felwood",
    title: "Felwood",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "ferren",
    title: "Ferren",
  },
  {
    region: {
      name: "Beyond the Wall",
    },
    slug: "fist-of-the-first-men",
    title: "Fist of the First Men",
  },
  {
    region: {
      name: "North",
    },
    slug: "flint",
    title: "Flint",
  },
  {
    region: {
      name: "North",
    },
    slug: "flints-finger",
    title: "Flint's Finger",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "follard",
    title: "Follard",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "foote",
    title: "Foote",
  },
  {
    region: {
      name: "North",
    },
    slug: "frost",
    title: "Frost",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "gallowsgrey",
    title: "Gallowsgrey",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "garner",
    title: "Garner",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "gates-of-the-moon",
    title: "Gates of the Moon",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "gaunt",
    title: "Gaunt",
  },
  {
    region: {
      name: "Dorne",
    },
    slug: "ghaston-grey",
    title: "Ghaston Grey",
  },
  {
    region: {
      name: "Dorne",
    },
    slug: "ghost-hill",
    title: "Ghost Hill",
  },
  {
    region: {
      name: "North",
    },
    slug: "glenmore",
    title: "Glenmore",
  },
  {
    region: {
      name: "Dorne",
    },
    slug: "godsgrace",
    title: "Godsgrace",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "golden-tooth",
    title: "Golden Tooth",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "goldengrove",
    title: "Goldengrove",
  },
  {
    region: {
      name: "North",
    },
    slug: "goldgrass",
    title: "Goldgrass",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "goodbrook",
    title: "Goodbrook",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "goodbrothers-of-orkmont",
    title: "Goodbrothers of Orkmont",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "goode",
    title: "Goode",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "gower",
    title: "Gower",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "grandview",
    title: "Grandview",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "grassy-vale",
    title: "Grassy Vale",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "graves",
    title: "Graves",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "greenfield",
    title: "Greenfield",
  },
  {
    region: {
      name: "The Wall",
    },
    slug: "greenguard",
    title: "Greenguard",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "greenhill",
    title: "Greenhill",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "greenpools",
    title: "Greenpools",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "greenshield",
    title: "Greenshield",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "greenstone",
    title: "Greenstone",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "grell",
    title: "Grell",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "grey",
    title: "Grey",
  },
  {
    region: {
      name: "Dorne",
    },
    slug: "grey-gallows",
    title: "Grey Gallows",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "grey-garden",
    title: "Grey Garden",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "grey-glen",
    title: "Grey Glen",
  },
  {
    region: {
      name: "The Wall",
    },
    slug: "greyguard",
    title: "Greyguard",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "greyshield",
    title: "Greyshield",
  },
  {
    region: {
      name: "North",
    },
    slug: "greywater-watch",
    title: "Greywater Watch",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "griffins-roost",
    title: "Griffin's Roost",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "gulltown",
    title: "Gulltown",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "hags-mire",
    title: "Hag's Mire",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "haigh",
    title: "Haigh",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "hamell",
    title: "Hamell",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "hammerhal",
    title: "Hammerhal",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "hammerhorn",
    title: "Hammerhorn",
  },
  {
    region: {
      name: "North",
    },
    slug: "harclay",
    title: "Harclay",
  },
  {
    region: {
      name: "Beyond the Wall",
    },
    slug: "hardhome",
    title: "Hardhome",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "hardy",
    title: "Hardy",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "hardyng",
    title: "Hardyng",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "harlaw-hall",
    title: "Harlaw Hall",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "harrenhal",
    title: "Harrenhal",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "harridan-hill",
    title: "Harridan Hill",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "harte",
    title: "Harte",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "harvest-hall",
    title: "Harvest Hall",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "hastwyck",
    title: "Hastwyck",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "hawthorne",
    title: "Hawthorne",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "hayford",
    title: "Hayford",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "haystack-hall",
    title: "Haystack Hall",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "hearts-home",
    title: "Heart's Home",
  },
  {
    region: {
      name: "Dorne",
    },
    slug: "hellgate-hall",
    title: "Hellgate Hall",
  },
  {
    region: {
      name: "Dorne",
    },
    slug: "hellholt",
    title: "Hellholt",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "herston",
    title: "Herston",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "hetherspoon",
    title: "Hetherspoon",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "high-heart",
    title: "High Heart",
  },
  {
    region: {
      name: "Dorne",
    },
    slug: "high-hermitage",
    title: "High Hermitage",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "highgarden",
    title: "Highgarden",
  },
  {
    region: {
      name: "North",
    },
    slug: "highpoint",
    title: "Highpoint",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "hoare-castle",
    title: "Hoare Castle",
  },
  {
    region: {
      name: "The Wall",
    },
    slug: "hoarfrost-hill",
    title: "Hoarfrost Hill",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "hogg-hall",
    title: "Hogg Hall",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "hollard-castle",
    title: "Hollard Castle",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "hollow-hill",
    title: "Hollow Hill",
  },
  {
    region: {
      name: "North",
    },
    slug: "holt",
    title: "Holt",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "holyhall",
    title: "Holyhall",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "honeyholt",
    title: "Honeyholt",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "hook",
    title: "Hook",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "horn-hill",
    title: "Horn Hill",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "hornvale",
    title: "Hornvale",
  },
  {
    region: {
      name: "North",
    },
    slug: "hornwood",
    title: "Hornwood",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "horpe",
    title: "Horpe",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "humble",
    title: "Humble",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "hunt",
    title: "Hunt",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "hutcheson",
    title: "Hutcheson",
  },
  {
    region: {
      name: "The Wall",
    },
    slug: "icemark",
    title: "Icemark",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "inchfield",
    title: "Inchfield",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "inn-of-the-kneeling-man",
    title: "Inn of the Kneeling Man",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "ironholt",
    title: "Ironholt",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "ironmaker",
    title: "Ironmaker",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "ironoaks",
    title: "Ironoaks",
  },
  {
    region: {
      name: "North",
    },
    slug: "ironrath",
    title: "Ironrath",
  },
  {
    region: {
      name: "North",
    },
    slug: "ironsmith",
    title: "Ironsmith",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "isle-of-faces",
    title: "Isle of Faces",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "ivy-hall",
    title: "Ivy Hall",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "ivy-inn",
    title: "Ivy Inn",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "jast",
    title: "Jast",
  },
  {
    region: {
      name: "North",
    },
    slug: "karhold",
    title: "Karhold",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "kayce",
    title: "Kayce",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "keath",
    title: "Keath",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "kellington",
    title: "Kellington",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "kenning",
    title: "Kenning",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "kings-landing",
    title: "King's Landing",
  },
  {
    region: {
      name: "Dorne",
    },
    slug: "kingsgrave",
    title: "Kingsgrave",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "kingswood",
    title: "Kingswood",
  },
  {
    region: {
      name: "North",
    },
    slug: "knott",
    title: "Knott",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "kyndall",
    title: "Kyndall",
  },
  {
    region: {
      name: "Dorne",
    },
    slug: "ladybright",
    title: "Ladybright",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "lambswold",
    title: "Lambswold",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "langward",
    title: "Langward",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "lannisport",
    title: "Lannisport",
  },
  {
    region: {
      name: "Beyond the Wall",
    },
    slug: "last-greenseer",
    title: "Last Greenseer",
  },
  {
    region: {
      name: "North",
    },
    slug: "last-hearth",
    title: "Last Hearth",
  },
  {
    region: {
      name: "Dorne",
    },
    slug: "lemonwood",
    title: "Lemonwood",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "leygood",
    title: "Leygood",
  },
  {
    region: {
      name: "North",
    },
    slug: "liddle",
    title: "Liddle",
  },
  {
    region: {
      name: "North",
    },
    slug: "lightfoot",
    title: "Lightfoot",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "lipps",
    title: "Lipps",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "littlesister",
    title: "Littlesister",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "lolliston",
    title: "Lolliston",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "lonely-light",
    title: "Lonely Light",
  },
  {
    region: {
      name: "North",
    },
    slug: "long",
    title: "Long",
  },
  {
    region: {
      name: "The Wall",
    },
    slug: "long-barrow",
    title: "Long Barrow",
  },
  {
    region: {
      name: "North",
    },
    slug: "long-lake",
    title: "Long Lake",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "longbow-hall",
    title: "Longbow Hall",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "longsister",
    title: "Longsister",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "longtable",
    title: "Longtable",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "lonmouth",
    title: "Lonmouth",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "lorch",
    title: "Lorch",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "lord-harroways-town",
    title: "Lord Harroway's Town",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "lordsport",
    title: "Lordsport",
  },
  {
    region: {
      name: "Beyond the Wall",
    },
    slug: "lorn-point",
    title: "Lorn Point",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "lowther",
    title: "Lowther",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "lyberr",
    title: "Lyberr",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "lychester",
    title: "Lychester",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "maidenpool",
    title: "Maidenpool",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "mallery",
    title: "Mallery",
  },
  {
    region: {
      name: "Beyond the Wall",
    },
    slug: "mances-camp",
    title: "Mance's Camp",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "mandrake",
    title: "Mandrake",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "manning",
    title: "Manning",
  },
  {
    region: {
      name: "North",
    },
    slug: "marsh",
    title: "Marsh",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "merrydown-dell",
    title: "Merrydown Dell",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "middlebury",
    title: "Middlebury",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "mistwood",
    title: "Mistwood",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "misty-isle",
    title: "Misty Isle",
  },
  {
    region: {
      name: "North",
    },
    slug: "moat-cailin",
    title: "Moat Cailin",
  },
  {
    region: {
      name: "The Wall",
    },
    slug: "moles-town",
    title: "Mole's Town",
  },
  {
    region: {
      name: "North",
    },
    slug: "mollen",
    title: "Mollen",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "moontown",
    title: "Moontown",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "moore",
    title: "Moore",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "moreland",
    title: "Moreland",
  },
  {
    region: {
      name: "North",
    },
    slug: "moss",
    title: "Moss",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "mummers-ford",
    title: "Mummer's Ford",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "musgood",
    title: "Musgood",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "myatt",
    title: "Myatt",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "myre",
    title: "Myre",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "naggas-hill",
    title: "Nagga's Hill",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "netley",
    title: "Netley",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "new-barrel",
    title: "New Barrel",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "newkeep",
    title: "Newkeep",
  },
  {
    region: {
      name: "The Wall",
    },
    slug: "nightfort",
    title: "Nightfort",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "nightsong",
    title: "Nightsong",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "ninestars",
    title: "Ninestars",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "norcross",
    title: "Norcross",
  },
  {
    region: {
      name: "North",
    },
    slug: "norrey",
    title: "Norrey",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "oakenshield-reach",
    title: "Oakenshield (Reach)",
  },
  {
    region: {
      name: "The Wall",
    },
    slug: "oakenshield-wall",
    title: "Oakenshield (Wall)",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "old-anchor",
    title: "Old Anchor",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "old-oak",
    title: "Old Oak",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "old-willow",
    title: "Old Willow",
  },
  {
    region: {
      name: "North",
    },
    slug: "oldcastle",
    title: "Oldcastle",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "oldflowers",
    title: "Oldflowers",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "oldstones",
    title: "Oldstones",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "oldtown",
    title: "Oldtown",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "orkwood",
    title: "Orkwood",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "orme",
    title: "Orme",
  },
  {
    region: {
      name: "North",
    },
    slug: "overton",
    title: "Overton",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "paege",
    title: "Paege",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "parchments",
    title: "Parchments",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "parren",
    title: "Parren",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "payne-hall",
    title: "Payne Hall",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "peasedale",
    title: "Peasedale",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "pebble",
    title: "Pebble",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "pebbleton",
    title: "Pebbleton",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "peckledon",
    title: "Peckledon",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "pemford",
    title: "Pemford",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "penny",
    title: "Penny",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "perryn",
    title: "Perryn",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "pinkmaiden",
    title: "Pinkmaiden",
  },
  {
    region: {
      name: "Dorne",
    },
    slug: "planky-town",
    title: "Planky Town",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "plumm",
    title: "Plumm",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "poddingfield",
    title: "Poddingfield",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "pommingham",
    title: "Pommingham",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "potter",
    title: "Potter",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "pyke",
    title: "Pyke",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "pyle",
    title: "Pyle",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "pyne",
    title: "Pyne",
  },
  {
    region: {
      name: "The Wall",
    },
    slug: "queenscrown",
    title: "Queenscrown",
  },
  {
    region: {
      name: "The Wall",
    },
    slug: "queensgate",
    title: "Queensgate",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "quiet-isle",
    title: "Quiet Isle",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "rain-house",
    title: "Rain House",
  },
  {
    region: {
      name: "North",
    },
    slug: "ramsgate",
    title: "Ramsgate",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "rankenfell",
    title: "Rankenfell",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "raventree-hall",
    title: "Raventree Hall",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "red-keep",
    title: "Red Keep",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "red-lake",
    title: "Red Lake",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "redding",
    title: "Redding",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "redfort",
    title: "Redfort",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "redpool",
    title: "Redpool",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "rhysling",
    title: "Rhysling",
  },
  {
    region: {
      name: "The Wall",
    },
    slug: "rimegate",
    title: "Rimegate",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "risley-glade",
    title: "Risley Glade",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "riverrun",
    title: "Riverrun",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "rollingford",
    title: "Rollingford",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "rooks-rest",
    title: "Rook's Rest",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "rosby",
    title: "Rosby",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "rousemont",
    title: "Rousemont",
  },
  {
    region: {
      name: "Beyond the Wall",
    },
    slug: "ruddy-hall",
    title: "Ruddy Hall",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "runestone",
    title: "Runestone",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "ruthermont",
    title: "Ruthermont",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "ruttiger",
    title: "Ruttiger",
  },
  {
    region: {
      name: "The Wall",
    },
    slug: "sable-hall",
    title: "Sable Hall",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "sallydance",
    title: "Sallydance",
  },
  {
    region: {
      name: "Dorne",
    },
    slug: "salt-shore",
    title: "Salt Shore",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "saltcliffe",
    title: "Saltcliffe",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "saltpans",
    title: "Saltpans",
  },
  {
    region: {
      name: "Dorne",
    },
    slug: "sandstone",
    title: "Sandstone",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "sarsfield",
    title: "Sarsfield",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "sawyer",
    title: "Sawyer",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "seagard",
    title: "Seagard",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "sealskin-point",
    title: "Sealskin Point",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "seaworth",
    title: "Seaworth",
  },
  {
    region: {
      name: "The Wall",
    },
    slug: "sentinel-stand",
    title: "Sentinel Stand",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "sevenstreams",
    title: "Sevenstreams",
  },
  {
    region: {
      name: "The Wall",
    },
    slug: "shadow-tower",
    title: "Shadow Tower",
  },
  {
    region: {
      name: "Dorne",
    },
    slug: "shandystone",
    title: "Shandystone",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "sharp-point",
    title: "Sharp Point",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "shatterstone",
    title: "Shatterstone",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "shawney",
    title: "Shawney",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "shepherd",
    title: "Shepherd",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "silverhill",
    title: "Silverhill",
  },
  {
    region: {
      name: "North",
    },
    slug: "skagos",
    title: "Skagos",
  },
  {
    region: {
      name: "North",
    },
    slug: "skane",
    title: "Skane",
  },
  {
    region: {
      name: "Dorne",
    },
    slug: "skyreach",
    title: "Skyreach",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "sloane",
    title: "Sloane",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "smithyton",
    title: "Smithyton",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "snakewood",
    title: "Snakewood",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "southshield",
    title: "Southshield",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "sows-horn",
    title: "Sow's Horn",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "sparr",
    title: "Sparr",
  },
  {
    region: {
      name: "Dorne",
    },
    slug: "spottswood",
    title: "Spottswood",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "stackhouse",
    title: "Stackhouse",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "stackspear",
    title: "Stackspear",
  },
  {
    region: {
      name: "Dorne",
    },
    slug: "starfall",
    title: "Starfall",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "starpike",
    title: "Starpike",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "stokeworth",
    title: "Stokeworth",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "stone-hedge",
    title: "Stone Hedge",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "stonedance",
    title: "Stonedance",
  },
  {
    region: {
      name: "The Wall",
    },
    slug: "stonedoor",
    title: "Stonedoor",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "stonehelm",
    title: "Stonehelm",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "stonehouse",
    title: "Stonehouse",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "stoney-sept",
    title: "Stoney Sept",
  },
  {
    region: {
      name: "North",
    },
    slug: "stoney-shore",
    title: "Stoney Shore",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "storms-end",
    title: "Storm's End",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "strongsong",
    title: "Strongsong",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "summerhall",
    title: "Summerhall",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "sunderly",
    title: "Sunderly",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "sunhouse",
    title: "Sunhouse",
  },
  {
    region: {
      name: "Dorne",
    },
    slug: "sunspear",
    title: "Sunspear",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "sweet",
    title: "Sweet",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "sweetport-sound",
    title: "Sweetport Sound",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "sweetsister",
    title: "Sweetsister",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "swygert",
    title: "Swygert",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "tarbeck-hall",
    title: "Tarbeck Hall",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "tarth",
    title: "Tarth",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "tawney",
    title: "Tawney",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "ten-towers",
    title: "Ten Towers",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "terrick",
    title: "Terrick",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "the-arbor",
    title: "The Arbor",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "the-bloody-gate",
    title: "The Bloody Gate",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "the-crag",
    title: "The Crag",
  },
  {
    region: {
      name: "North",
    },
    slug: "the-dreadfort",
    title: "The Dreadfort",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "the-eyrie",
    title: "The Eyrie",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "the-paps",
    title: "The Paps",
  },
  {
    region: {
      name: "North",
    },
    slug: "the-rills",
    title: "The Rills",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "the-ring",
    title: "The Ring",
  },
  {
    region: {
      name: "Dorne",
    },
    slug: "the-tor",
    title: "The Tor",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "the-twins",
    title: "The Twins",
  },
  {
    region: {
      name: "Beyond the Wall",
    },
    slug: "thenn",
    title: "Thenn",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "thorne",
    title: "Thorne",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "three-towers",
    title: "Three Towers",
  },
  {
    region: {
      name: "The Wall",
    },
    slug: "torches",
    title: "Torches",
  },
  {
    region: {
      name: "North",
    },
    slug: "torrhens-square",
    title: "Torrhen's Square",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "tower-of-glimmering",
    title: "Tower of Glimmering",
  },
  {
    region: {
      name: "Dorne",
    },
    slug: "tower-of-joy",
    title: "Tower of Joy",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "toyne",
    title: "Toyne",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "tudbury",
    title: "Tudbury",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "tumbleton",
    title: "Tumbleton",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "turnberry",
    title: "Turnberry",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "uffering",
    title: "Uffering",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "uplands",
    title: "Uplands",
  },
  {
    region: {
      name: "Dorne",
    },
    slug: "vaith",
    title: "Vaith",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "vale-mountain-clans",
    title: "Vale Mountain Clans",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "varner",
    title: "Varner",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "vikary",
    title: "Vikary",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "volmark",
    title: "Volmark",
  },
  {
    region: {
      name: "Dorne",
    },
    slug: "vultures-roost",
    title: "Vulture's Roost",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "vypren",
    title: "Vypren",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "wagstaff",
    title: "Wagstaff",
  },
  {
    region: {
      name: "Dorne",
    },
    slug: "water-gardens",
    title: "Water Gardens",
  },
  {
    region: {
      name: "North",
    },
    slug: "waterman",
    title: "Waterman",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "wayfarers-rest",
    title: "Wayfarer's Rest",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "wayn",
    title: "Wayn",
  },
  {
    region: {
      name: "Iron Islands",
    },
    slug: "weaver",
    title: "Weaver",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "weeping-town",
    title: "Weeping Town",
  },
  {
    region: {
      name: "Dorne",
    },
    slug: "wells-dorne",
    title: "Wells (Dorne)",
  },
  {
    region: {
      name: "North",
    },
    slug: "wells-north",
    title: "Wells (North)",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "wendwater",
    title: "Wendwater",
  },
  {
    region: {
      name: "Stormlands",
    },
    slug: "wensington",
    title: "Wensington",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "westbrook",
    title: "Westbrook",
  },
  {
    region: {
      name: "The Wall",
    },
    slug: "westwatch-by-the-bridge",
    title: "Westwatch-by-the-Bridge",
  },
  {
    region: {
      name: "Crownlands",
    },
    slug: "whispers",
    title: "Whispers",
  },
  {
    region: {
      name: "North",
    },
    slug: "white-harbor",
    title: "White Harbor",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "whitegrove",
    title: "Whitegrove",
  },
  {
    region: {
      name: "Beyond the Wall",
    },
    slug: "whitetree",
    title: "Whitetree",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "wickenden",
    title: "Wickenden",
  },
  {
    region: {
      name: "North",
    },
    slug: "widows-watch",
    title: "Widow's Watch",
  },
  {
    region: {
      name: "Riverlands",
    },
    slug: "willowwood",
    title: "Willow Wood",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "willum",
    title: "Willum",
  },
  {
    region: {
      name: "North",
    },
    slug: "winterfell",
    title: "Winterfell",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "witch-isle",
    title: "Witch Isle",
  },
  {
    region: {
      name: "The Wall",
    },
    slug: "woodswatch-by-the-pool",
    title: "Woodswatch-by-the-Pool",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "woodwright",
    title: "Woodwright",
  },
  {
    region: {
      name: "North",
    },
    slug: "wull",
    title: "Wull",
  },
  {
    region: {
      name: "Vale",
    },
    slug: "wydman",
    title: "Wydman",
  },
  {
    region: {
      name: "Dorne",
    },
    slug: "wyl",
    title: "Wyl",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "wyndhall",
    title: "Wyndhall",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "wythers",
    title: "Wythers",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "yarwyck",
    title: "Yarwyck",
  },
  {
    region: {
      name: "Reach",
    },
    slug: "yelshire",
    title: "Yelshire",
  },
  {
    region: {
      name: "Westerlands",
    },
    slug: "yew",
    title: "Yew",
  },
  {
    region: {
      name: "Dorne",
    },
    slug: "yronwood",
    title: "Yronwood",
  },
];

function createMdxFileFromLocationByRegion() {
  locations.forEach((location) => {
    if (location.region.name === "Iron Islands") {
      fs.writeFileSync(
        `./pages/builds/iron-islands/${location.slug}.mdx`,
        `## ` + location.title
      );
    }
  });
}

function createMetaFileFromLocation() {
  const mapped = locations
    .filter((x) => x.region.name === "Dorne")
    .map((location) => ({
      [location.slug]: location.title,
    }));

  const flat = Object.assign({}, ...mapped);

  fs.writeFileSync(
    "./pages/builds/dorne/_meta.json",
    JSON.stringify(flat, null, 2)
  );
}

createMetaFileFromLocation();
