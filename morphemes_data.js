const MORPHEMES = {
  "re": {
    "type": "prefix",
    "meaning": "again/back"
  },
  "in": {
    "type": "prefix",
    "meaning": "not/in"
  },
  "un": {
    "type": "prefix",
    "meaning": "not"
  },
  "pre": {
    "type": "prefix",
    "meaning": "before"
  },
  "post": {
    "type": "prefix",
    "meaning": "after"
  },
  "sub": {
    "type": "prefix",
    "meaning": "under"
  },
  "trans": {
    "type": "prefix",
    "meaning": "across"
  },
  "super": {
    "type": "prefix",
    "meaning": "above"
  },
  "anti": {
    "type": "prefix",
    "meaning": "against"
  },
  "auto": {
    "type": "prefix",
    "meaning": "self"
  },
  "inter": {
    "type": "prefix",
    "meaning": "between"
  },
  "hyper": {
    "type": "prefix",
    "meaning": "over"
  },
  "hypo": {
    "type": "prefix",
    "meaning": "under"
  },
  "de": {
    "type": "prefix",
    "meaning": "down/away"
  },
  "dis": {
    "type": "prefix",
    "meaning": "not/opposite of"
  },
  "micro": {
    "type": "prefix",
    "meaning": "small"
  },
  "tele": {
    "type": "prefix",
    "meaning": "far"
  },
  "con": {
    "type": "prefix",
    "meaning": "with/together"
  },
  "peri": {
    "type": "prefix",
    "meaning": "around"
  },
  "pro": {
    "type": "prefix",
    "meaning": "forward"
  },
  "im": {
    "type": "prefix",
    "meaning": "not"
  },
  "ex": {
    "type": "prefix",
    "meaning": "out/from"
  },
  "sup": {
    "type": "prefix",
    "meaning": "above"
  },
  "non": {
    "type": "prefix",
    "meaning": "not"
  },
  "over": {
    "type": "prefix",
    "meaning": "too much/above"
  },
  "under": {
    "type": "prefix",
    "meaning": "too little/below"
  },
  "neo": {
    "type": "prefix",
    "meaning": "new"
  },
  "uni": {
    "type": "prefix",
    "meaning": "one"
  },
  "bi": {
    "type": "prefix",
    "meaning": "two"
  },
  "tri": {
    "type": "prefix",
    "meaning": "three"
  },
  "multi": {
    "type": "prefix",
    "meaning": "many"
  },
  "co": {
    "type": "prefix",
    "meaning": "together/with"
  },
  "counter": {
    "type": "prefix",
    "meaning": "against"
  },
  "contra": {
    "type": "prefix",
    "meaning": "against"
  },
  "ecto": {
    "type": "prefix",
    "meaning": "outside"
  },
  "endo": {
    "type": "prefix",
    "meaning": "within"
  },
  "semi": {
    "type": "prefix",
    "meaning": "half"
  },
  "circum": {
    "type": "prefix",
    "meaning": "around"
  },
  "infra": {
    "type": "prefix",
    "meaning": "below"
  },
  "macro": {
    "type": "prefix",
    "meaning": "large"
  },
  "meta": {
    "type": "prefix",
    "meaning": "beyond"
  },
  "poly": {
    "type": "prefix",
    "meaning": "many"
  },
  "iso": {
    "type": "prefix",
    "meaning": "equal"
  },
  "ante": {
    "type": "prefix",
    "meaning": "before"
  },
  "mis": {
    "type": "prefix",
    "meaning": "wrongly"
  },
  "port": {
    "type": "base",
    "meaning": "carry"
  },
  "form": {
    "type": "base",
    "meaning": "shape"
  },
  "struct": {
    "type": "base",
    "meaning": "build"
  },
  "spect": {
    "type": "base",
    "meaning": "look"
  },
  "scrib": {
    "type": "base",
    "meaning": "write"
  },
  "script": {
    "type": "base",
    "meaning": "write"
  },
  "cred": {
    "type": "base",
    "meaning": "believe"
  },
  "dict": {
    "type": "base",
    "meaning": "say/speak"
  },
  "vis": {
    "type": "base",
    "meaning": "see"
  },
  "bio": {
    "type": "base",
    "meaning": "life"
  },
  "photo": {
    "type": "base",
    "meaning": "light"
  },
  "graph": {
    "type": "base",
    "meaning": "write"
  },
  "therm": {
    "type": "base",
    "meaning": "heat"
  },
  "psych": {
    "type": "base",
    "meaning": "mind"
  },
  "geo": {
    "type": "base",
    "meaning": "earth"
  },
  "demo": {
    "type": "base",
    "meaning": "people"
  },
  "chrono": {
    "type": "base",
    "meaning": "time"
  },
  "scope": {
    "type": "base",
    "meaning": "look"
  },
  "cycle": {
    "type": "base",
    "meaning": "wheel"
  },
  "hydro": {
    "type": "base",
    "meaning": "water"
  },
  "astro": {
    "type": "base",
    "meaning": "star"
  },
  "meter": {
    "type": "base",
    "meaning": "measure"
  },
  "path": {
    "type": "base",
    "meaning": "feel"
  },
  "morph": {
    "type": "base",
    "meaning": "form"
  },
  "fract": {
    "type": "base",
    "meaning": "break"
  },
  "magn": {
    "type": "base",
    "meaning": "great"
  },
  "mega": {
    "type": "base",
    "meaning": "large"
  },
  "mini": {
    "type": "base",
    "meaning": "small"
  },
  "phone": {
    "type": "base",
    "meaning": "sound"
  },
  "tract": {
    "type": "base",
    "meaning": "pull/draw"
  },
  "duce": {
    "type": "base",
    "meaning": "lead/bring"
  },
  "duct": {
    "type": "base",
    "meaning": "lead"
  },
  "mit": {
    "type": "base",
    "meaning": "send"
  },
  "miss": {
    "type": "base",
    "meaning": "send"
  },
  "ject": {
    "type": "base",
    "meaning": "throw"
  },
  "act": {
    "type": "base",
    "meaning": "do"
  },
  "press": {
    "type": "base",
    "meaning": "press"
  },
  "mot": {
    "type": "base",
    "meaning": "move"
  },
  "vent": {
    "type": "base",
    "meaning": "come"
  },
  "log": {
    "type": "base",
    "meaning": "word/study"
  },
  "gram": {
    "type": "base",
    "meaning": "letter/written"
  },
  "phon": {
    "type": "base",
    "meaning": "sound"
  },
  "vid": {
    "type": "base",
    "meaning": "see"
  },
  "calc": {
    "type": "base",
    "meaning": "stone/calc"
  },
  "num": {
    "type": "base",
    "meaning": "number"
  },
  "econ": {
    "type": "base",
    "meaning": "house/management"
  },
  "jur": {
    "type": "base",
    "meaning": "law"
  },
  "polit": {
    "type": "base",
    "meaning": "city/citizen"
  },
  "hist": {
    "type": "base",
    "meaning": "past"
  },
  "metr": {
    "type": "base",
    "meaning": "measure"
  },
  "phys": {
    "type": "base",
    "meaning": "nature"
  },
  "chem": {
    "type": "base",
    "meaning": "alchemy/chemistry"
  },
  "astr": {
    "type": "base",
    "meaning": "star"
  },
  "mono": {
    "type": "base",
    "meaning": "one"
  },
  "cycl": {
    "type": "base",
    "meaning": "circle/wheel"
  },
  "able": {
    "type": "suffix",
    "meaning": "able to"
  },
  "ible": {
    "type": "suffix",
    "meaning": "capable of being"
  },
  "al": {
    "type": "suffix",
    "meaning": "related to"
  },
  "er": {
    "type": "suffix",
    "meaning": "one who/that which"
  },
  "or": {
    "type": "suffix",
    "meaning": "one who/that which"
  },
  "ation": {
    "type": "suffix",
    "meaning": "act/process"
  },
  "tion": {
    "type": "suffix",
    "meaning": "act/process"
  },
  "sion": {
    "type": "suffix",
    "meaning": "act/process"
  },
  "ist": {
    "type": "suffix",
    "meaning": "one who practices"
  },
  "ism": {
    "type": "suffix",
    "meaning": "belief/system"
  },
  "logy": {
    "type": "suffix",
    "meaning": "study of"
  },
  "ology": {
    "type": "suffix",
    "meaning": "study of"
  },
  "ness": {
    "type": "suffix",
    "meaning": "state/quality"
  },
  "ment": {
    "type": "suffix",
    "meaning": "result/state"
  },
  "ence": {
    "type": "suffix",
    "meaning": "state/quality"
  },
  "ance": {
    "type": "suffix",
    "meaning": "state/quality"
  },
  "ize": {
    "type": "suffix",
    "meaning": "make/render"
  },
  "ify": {
    "type": "suffix",
    "meaning": "make"
  },
  "ous": {
    "type": "suffix",
    "meaning": "full of"
  },
  "less": {
    "type": "suffix",
    "meaning": "without"
  },
  "ful": {
    "type": "suffix",
    "meaning": "full of"
  },
  "ship": {
    "type": "suffix",
    "meaning": "state/office"
  },
  "ary": {
    "type": "suffix",
    "meaning": "related to"
  },
  "ery": {
    "type": "suffix",
    "meaning": "place for"
  },
  "tive": {
    "type": "suffix",
    "meaning": "tending to"
  },
  "ative": {
    "type": "suffix",
    "meaning": "tending to"
  },
  "tory": {
    "type": "suffix",
    "meaning": "place for"
  },
  "hood": {
    "type": "suffix",
    "meaning": "state/condition"
  },
  "dom": {
    "type": "suffix",
    "meaning": "state/domain"
  },
  "ed": {
    "type": "suffix",
    "meaning": "past"
  },
  "ing": {
    "type": "suffix",
    "meaning": "present participle"
  },
  "s": {
    "type": "suffix",
    "meaning": "plural"
  },
  "es": {
    "type": "suffix",
    "meaning": "plural"
  },
  "ant": {
    "type": "suffix",
    "meaning": "one who/thing that"
  },
  "ent": {
    "type": "suffix",
    "meaning": "one who/thing that"
  },
  "ian": {
    "type": "suffix",
    "meaning": "related to"
  },
  "ial": {
    "type": "suffix",
    "meaning": "pertaining to"
  },
  "ic": {
    "type": "suffix",
    "meaning": "of/pertaining to"
  },
  "ity": {
    "type": "suffix",
    "meaning": "state/quality"
  },
  "ise": {
    "type": "suffix",
    "meaning": "make/render"
  },
  "ite": {
    "type": "suffix",
    "meaning": "related to"
  },
  "ette": {
    "type": "suffix",
    "meaning": "small"
  },
  "age": {
    "type": "suffix",
    "meaning": "collection"
  },
  "ious": {
    "type": "suffix",
    "meaning": "full of"
  },
  "ologic": {
    "type": "suffix",
    "meaning": "study of"
  },
  "ly": {
    "type": "suffix",
    "meaning": "manner"
  },
  "ward": {
    "type": "suffix",
    "meaning": "direction"
  },
  "wards": {
    "type": "suffix",
    "meaning": "direction"
  },
  "wise": {
    "type": "suffix",
    "meaning": "manner"
  },
  "y": {
    "type": "suffix",
    "meaning": "characterized by"
  }
};

if (typeof module !== "undefined") { module.exports = { MORPHEMES }; }
