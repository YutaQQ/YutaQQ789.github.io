const wordList = [
    // Prefixes
    {
        word: "unhappy",
        hint: "Not happy; sad or displeased.",
        type: "adjective(prefix)"
    },
    {
        word: "imperfect",
        hint: "Not perfect; having flaws or defects.",
        type: "adjective(prefix)"
    },
    {
        word: "disagree",
        hint: "To have a different opinion or not concur.",
        type: "verb(prefix)"
    },
    {
        word: "rewrite",
        hint: "To write again or differently.",
        type: "verb(prefix)"
    },
    {
        word: "preheat",
        hint: "To heat something beforehand.",
        type: "verb(prefix)"
    },
    {
        word: "overestimate",
        hint: "To estimate something as greater than it is.",
        type: "verb(prefix)"
    },
    {
        word: "underneath",
        hint: "Directly below or beneath.",
        type: "adverb(prefix)"
    },
    {
        word: "misplace",
        hint: "To put something in the wrong location.",
        type: "verb(prefix)"
    },
    {
        word: "nonprofit",
        hint: "Not intended to make a profit; an organization that doesn’t distribute profits to shareholders.",
        type: "noun(prefix)"
    },
    {
        word: "submarine",
        hint: "A vessel that operates underwater.",
        type: "noun(prefix)"
    },
    {
        word: "interact",
        hint: "To communicate or work together.",
        type: "verb(prefix)"
    },
    {
        word: "proactive",
        hint: "Taking action in advance to prevent problems.",
        type: "adjective(prefix)"
    },
    {
        word: "antisocial",
        hint: "Avoiding social interaction; opposed to social norms.",
        type: "adjective(prefix)"
    },
    {
        word: "autonomous",
        hint: "Independent; self-governing.",
        type: "adjective(prefix)"
    },
    {
        word: "hyperactive",
        hint: "Excessively active or energetic.",
        type: "adjective(prefix)"
    },
    {
        word: "semiannual",
        hint: "Occurring twice a year.",
        type: "adjective(prefix)"
    },
    {
        word: "transatlantic",
        hint: "Across or spanning the Atlantic Ocean.",
        type: "adjective(prefix)"
    },
    {
        word: "multicultural",
        hint: "Involving or representing multiple cultures.",
        type: "adjective(prefix)"
    },
    {
        word: "reconstruct",
        hint: "To build or form something again.",
        type: "verb(prefix)"
    },

    // Suffixes
    {
        word: "readable",
        hint: "Capable of being read.",
        type: "adjective(suffix)"
    },
    {
        word: "interesting",
        hint: "Engaging or arousing curiosity.",
        type: "adjective(suffix)"
    },
    {
        word: "jumped",
        hint: "The past tense of jump.",
        type: "verb(suffix)"
    },
    {
        word: "beautiful",
        hint: "Full of beauty.",
        type: "adjective(suffix)"
    },
    {
        word: "fearless",
        hint: "Without fear.",
        type: "adjective(suffix)"
    },
    {
        word: "happiness",
        hint: "The state of being happy.",
        type: "noun(suffix)"
    },
    {
        word: "quickly",
        hint: "In a fast manner.",
        type: "adverb(suffix)"
    },
    {
        word: "writer",
        hint: "One who writes.",
        type: "noun(suffix)"
    },
    {
        word: "tallest",
        hint: "The superlative degree of tall.",
        type: "adjective(suffix)"
    },
    {
        word: "achievement",
        hint: "The action of achieving something.",
        type: "noun(suffix)"
    },
    {
        word: "information",
        hint: "The state of being informed.",
        type: "noun(suffix)"
    },
    {
        word: "decision",
        hint: "The state of making a decision.",
        type: "noun(suffix)"
    },
    {
        word: "organize",
        hint: "To arrange or put in order.",
        type: "verb(suffix)"
    },
    {
        word: "childhood",
        hint: "The state of being a child.",
        type: "noun(suffix)"
    },
    {
        word: "friendship",
        hint: "The state or condition of being friends.",
        type: "noun(suffix)"
    },
    {
        word: "activity",
        hint: "The quality or state of being active.",
        type: "noun(suffix)"
    },
    {
        word: "dangerous",
        hint: "Full of danger.",
        type: "adjective(suffix)"
    },
    {
        word: "personal",
        hint: "Pertaining to oneself.",
        type: "adjective(suffix)"
    },
    {
        word: "sensitive",
        hint: "Having the nature of sensitivity.",
        type: "adjective(suffix)"
    },
    {
        word: "historic",
        hint: "Relating to history.",
        type: "adjective(suffix)"
    },
    {
        word: "curiosity",
        hint: "A strong desire to know or learn something.",
        type: "noun(suffix)"
    },
    {
        word: "knowledge",
        hint: "Information, understanding, or skills gained through experience or education.",
        type: "noun(suffix)"
    },
    {
        word: "adventure",
        hint: "An unusual, exciting, or daring experience.",
        type: "noun(suffix)"
    },
    {
        word: "freedom",
        hint: "The power or right to act, speak, or think without hindrance or restraint.",
        type: "noun(suffix)"
    },
    {
        word: "structure",
        hint: "The arrangement of and relations between the parts or elements of something complex.",
        type: "noun(suffix)"
    },
    {
        word: "solution",
        hint: "A means of solving a problem or dealing with a difficult situation.",
        type: "noun(suffix)"
    },
    {
        word: "creativity",
        hint: "The use of imagination or original ideas to create something.",
        type: "noun(suffix)"
    },
    {
        word: "exploration",
        hint: "The action of traveling in or through an unfamiliar area in order to learn about it.",
        type: "noun(suffix)"
    },
    {
        word: "innovative",
        hint: "Featuring new methods; advanced and original.",
        type: "adjective(suffix)"
    },
    {
        word: "resilient",
        hint: "Able to withstand or recover quickly from difficult conditions.",
        type: "adjective(suffix)"
    },
    {
        word: "generous",
        hint: "Showing kindness towards others.",
        type: "adjective(suffix)"
    },
    {
        word: "creative",
        hint: "Relating to or involving the use of the imagination or original ideas to create something.",
        type: "adjective(suffix)"
    },
    {
        word: "courageous",
        hint: "Not deterred by danger or pain; brave.",
        type: "adjective(suffix)"
    },
    {
        word: "thoughtful",
        hint: "Showing consideration for the needs of other people.",
        type: "adjective(suffix)"
    },
    {
        word: "organized",
        hint: "Arranged or structured in a systematic way.",
        type: "adjective(suffix)"
    },

    // Adverbs
    {
        word: "efficiently",
        hint: "In a way that achieves maximum productivity with minimum wasted effort or expense.",
        type: "adverb(suffix)"
    },
    {
        word: "creatively",
        hint: "In a way that involves the use of imagination or original ideas.",
        type: "adverb(suffix)"
    },
    {
        word: "courageously",
        hint: "In a way that shows bravery or fearlessness.",
        type: "adverb(suffix)"
    },
    {
        word: "quickly",
        hint: "At a fast speed.",
        type: "adverb(suffix)"
    },
    {
        word: "carefully",
        hint: "In a way that is done with great attention to detail.",
        type: "adverb(suffix)"
    },
    {
        word: "frequently",
        hint: "Occurring or done many times at short intervals.",
        type: "adverb(suffix)"
    },
    {
        word: "honestly",
        hint: "In a truthful or sincere manner.",
        type: "adverb(suffix)"
    },
    {
        word: "enthusiastically",
        hint: "In a way that shows intense and eager enjoyment or interest.",
        type: "adverb(suffix)"
    },
    {
        word: "deliberately",
        hint: "In a careful and unhurried manner.",
        type: "adverb(suffix)"
    },
    {
        word: "gracefully",
        hint: "In a smooth and elegant manner.",
        type: "adverb(suffix)"
    }
];
