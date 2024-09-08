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
    },
   
    {
        word: "unnecessary",
        hint: "Not needed; more than is required.",
        type: "adjective(prefix)"
    },
    {
        word: "inactive",
        hint: "Not engaging in any physical activity or not working.",
        type: "adjective(prefix)"
    },
    {
        word: "disbelief",
        hint: "Inability or refusal to accept that something is true.",
        type: "noun(prefix)"
    },
    {
        word: "preview",
        hint: "To see or inspect something in advance.",
        type: "verb(prefix)"
    },
    {
        word: "misunderstand",
        hint: "To fail to interpret or understand something correctly.",
        type: "verb(prefix)"
    },
    {
        word: "overcharge",
        hint: "To charge someone too much for something.",
        type: "verb(prefix)"
    },
    {
        word: "underestimate",
        hint: "To estimate something as less than it is.",
        type: "verb(prefix)"
    },
    {
        word: "nonsensical",
        hint: "Having no meaning; making no sense.",
        type: "adjective(prefix)"
    },
    {
        word: "substandard",
        hint: "Below the usual or required standard.",
        type: "adjective(prefix)"
    },
    {
        word: "interchange",
        hint: "To swap or exchange one thing for another.",
        type: "verb(prefix)"
    },
    {
        word: "postpone",
        hint: "To delay or defer an event.",
        type: "verb(prefix)"
    },
    {
        word: "biweekly",
        hint: "Occurring every two weeks or twice a week.",
        type: "adjective(prefix)"
    },
    {
        word: "antibiotic",
        hint: "A medicine that inhibits the growth of or destroys microorganisms.",
        type: "noun(prefix)"
    },
    {
        word: "extraordinary",
        hint: "Very unusual or remarkable.",
        type: "adjective(prefix)"
    },
    {
        word: "semicircle",
        hint: "Half of a circle or its circumference.",
        type: "noun(prefix)"
    },
    {
        word: "microorganism",
        hint: "A microscopic organism, such as a bacterium, virus, or fungus.",
        type: "noun(prefix)"
    },
    {
        word: "multitask",
        hint: "To perform multiple tasks simultaneously.",
        type: "verb(prefix)"
    },
    {
        word: "hyperactive",
        hint: "Excessively active or energetic.",
        type: "adjective(prefix)"
    },
    {
        word: "underground",
        hint: "Beneath the surface of the ground.",
        type: "adverb(prefix)"
    },
    {
        word: "inappropriate",
        hint: "Not suitable or proper in the circumstances.",
        type: "adjective(prefix)"
    },

    // Suffixes
    {
        word: "kindness",
        hint: "The quality of being friendly, generous, and considerate.",
        type: "noun(suffix)"
    },
    {
        word: "likable",
        hint: "Easy to like or pleasant.",
        type: "adjective(suffix)"
    },
    {
        word: "jumping",
        hint: "The action of jumping.",
        type: "verb(suffix)"
    },
    {
        word: "thankful",
        hint: "Feeling or expressing gratitude.",
        type: "adjective(suffix)"
    },
    {
        word: "careless",
        hint: "Not giving sufficient attention or thought to avoiding harm.",
        type: "adjective(suffix)"
    },
    {
        word: "brightness",
        hint: "The quality of being bright.",
        type: "noun(suffix)"
    },
    {
        word: "slowly",
        hint: "In a manner that is slow.",
        type: "adverb(suffix)"
    },
    {
        word: "runner",
        hint: "A person who runs, especially as a sport.",
        type: "noun(suffix)"
    },
    {
        word: "smallest",
        hint: "The superlative form of small.",
        type: "adjective(suffix)"
    },
    {
        word: "enlightenment",
        hint: "The action of enlightening or the state of being enlightened.",
        type: "noun(suffix)"
    },
    {
        word: "clarification",
        hint: "The action of making a statement or situation less confused and more comprehensible.",
        type: "noun(suffix)"
    },
    {
        word: "decision",
        hint: "The conclusion or resolution reached after consideration.",
        type: "noun(suffix)"
    },
    {
        word: "compromise",
        hint: "An agreement or settlement of a dispute.",
        type: "verb(suffix)"
    },
    {
        word: "parenthood",
        hint: "The state of being a parent.",
        type: "noun(suffix)"
    },
    {
        word: "fellowship",
        hint: "Friendly association, especially with people who share one's interests.",
        type: "noun(suffix)"
    },
    {
        word: "stupidity",
        hint: "The quality of being stupid.",
        type: "noun(suffix)"
    },
    {
        word: "delicious",
        hint: "Highly pleasing to the taste.",
        type: "adjective(suffix)"
    },
    {
        word: "criminal",
        hint: "Relating to a crime or its punishment.",
        type: "adjective(suffix)"
    },
    {
        word: "active",
        hint: "Engaging or ready to engage in physically energetic pursuits.",
        type: "adjective(suffix)"
    },
    {
        word: "economic",
        hint: "Relating to economics or the economy.",
        type: "adjective(suffix)"
    },
    {
        word: "generosity",
        hint: "The quality of being kind and generous.",
        type: "noun(suffix)"
    },
    {
        word: "adventure",
        hint: "An unusual, exciting, and possibly dangerous experience.",
        type: "noun(suffix)"
    },
    {
        word: "modification",
        hint: "The act or process of changing parts of something.",
        type: "noun(suffix)"
    },
    {
        word: "precaution",
        hint: "A measure taken in advance to prevent harm.",
        type: "noun(suffix)"
    },
    {
        word: "assertive",
        hint: "Having a confident and forceful personality.",
        type: "adjective(suffix)"
    },
    {
        word: "amendment",
        hint: "A change or addition to a legal or statutory document.",
        type: "noun(suffix)"
    },
    {
        word: "enjoyable",
        hint: "Giving pleasure or satisfaction.",
        type: "adjective(suffix)"
    },
    {
        word: "predictable",
        hint: "Able to be predicted or anticipated.",
        type: "adjective(suffix)"
    },
    {
        word: "realistic",
        hint: "Having or showing a sensible and practical idea of what can be achieved.",
        type: "adjective(suffix)"
    },
    {
        word: "completely",
        hint: "Totally; in every way or as much as possible.",
        type: "adverb(suffix)"
    },
    {
        word: "joyfully",
        hint: "In a joyful or happy manner.",
        type: "adverb(suffix)"
    },

    // Adverbs
    {
        word: "calmly",
        hint: "In a peaceful or composed manner.",
        type: "adverb(suffix)"
    },
    {
        word: "honorably",
        hint: "In a manner showing high respect or esteem.",
        type: "adverb(suffix)"
    },
    {
        word: "truthfully",
        hint: "In a manner that conveys the truth.",
        type: "adverb(suffix)"
    },
    {
        word: "loudly",
        hint: "In a way that produces a large sound.",
        type: "adverb(suffix)"
    },
    {
        word: "patiently",
        hint: "In a way that shows tolerance or patience.",
        type: "adverb(suffix)"
    },
    {
        word: "secretly",
        hint: "In a hidden or concealed manner.",
        type: "adverb(suffix)"
    },
    {
        word: "playfully",
        hint: "In a fun and lively way.",
        type: "adverb(suffix)"
    },
    {
        word: "attentively",
        hint: "In a manner that pays close attention.",
        type: "adverb(suffix)"
    },
    {
        word: "reluctantly",
        hint: "In an unwilling or hesitant manner.",
        type: "adverb(suffix)"
    },
    {
        word: "boldly",
        hint: "In a confident and courageous manner.",
        type: "adverb(suffix)"
    },
    {
        word: "swiftly",
        hint: "At high speed; quickly.",
        type: "adverb(suffix)"
    },
    {
        word: "politely",
        hint: "In a respectful and considerate manner.",
        type: "adverb(suffix)"
    },
    {
        word: "desperately",
        hint: "In a way that shows great urgency or despair.",
        type: "adverb(suffix)"
    },
    {
        word: "joyously",
        hint: "In a manner that shows great joy.",
        type: "adverb(suffix)"
    },
    {
        word: "nervously",
        hint: "In a manner showing worry or anxiety.",
        type: "adverb(suffix)"
    },
    {
        word: "clumsily",
        hint: "In an awkward or uncoordinated manner.",
        type: "adverb(suffix)"
    },
    {
        word: "skillfully",
        hint: "With great skill or expertise.",
        type: "adverb(suffix)"
    },
    {
        word: "peacefully",
        hint: "In a manner free from disturbance.",
        type: "adverb(suffix)"
    },
    {
        word: "carelessly",
        hint: "Without sufficient attention to avoiding harm.",
        type: "adverb(suffix)"
    },
    {
        word: "happily",
        hint: "In a manner that shows contentment or joy.",
        type: "adverb(suffix)"
    },
];
