const MORPHEMES = {
  "anti": {
    "type": "prefix",
    "meaning": "against"
  },
  "auto": {
    "type": "base",
    "meaning": "self"
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
  "re": {
    "type": "prefix",
    "meaning": "again"
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
    "meaning": "down; away"
  },
  "dis": {
    "type": "prefix",
    "meaning": "not; opposite of"
  },
  "micro": {
    "type": "base",
    "meaning": "small"
  },
  "tele": {
    "type": "base",
    "meaning": "far"
  },
  "con": {
    "type": "prefix",
    "meaning": "with; together"
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
    "meaning": "not; into"
  },
  "in": {
    "type": "prefix",
    "meaning": "not; into"
  },
  "ex": {
    "type": "prefix",
    "meaning": "out of"
  },
  "sup": {
    "type": "prefix",
    "meaning": "above"
  },
  "non": {
    "type": "prefix",
    "meaning": "not"
  },
  "un": {
    "type": "prefix",
    "meaning": "not"
  },
  "mis": {
    "type": "prefix",
    "meaning": "wrong; bad"
  },
  "over": {
    "type": "prefix",
    "meaning": "over"
  },
  "under": {
    "type": "prefix",
    "meaning": "below"
  },
  "neo": {
    "type": "prefix",
    "meaning": "new"
  },
  "uni": {
    "type": "prefix",
    "meaning": "one"
  },
  "co": {
    "type": "prefix",
    "meaning": "together"
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
    "meaning": "one who"
  },
  "or": {
    "type": "suffix",
    "meaning": "one who"
  },
  "ation": {
    "type": "suffix",
    "meaning": "act of"
  },
  "tion": {
    "type": "suffix",
    "meaning": "act of"
  },
  "sion": {
    "type": "suffix",
    "meaning": "state of"
  },
  "ist": {
    "type": "suffix",
    "meaning": "one who"
  },
  "ism": {
    "type": "suffix",
    "meaning": "practice of"
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
    "meaning": "state of"
  },
  "ment": {
    "type": "suffix",
    "meaning": "result of"
  },
  "ence": {
    "type": "suffix",
    "meaning": "state of"
  },
  "ance": {
    "type": "suffix",
    "meaning": "state of"
  },
  "ize": {
    "type": "suffix",
    "meaning": "to make"
  },
  "ify": {
    "type": "suffix",
    "meaning": "to make"
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
    "meaning": "state of"
  },
  "ary": {
    "type": "suffix",
    "meaning": "related to"
  },
  "ery": {
    "type": "suffix",
    "meaning": "place of"
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
    "meaning": "state of"
  },
  "dom": {
    "type": "suffix",
    "meaning": "state of"
  },
  "ed": {
    "type": "suffix",
    "meaning": "past tense"
  },
  "ing": {
    "type": "suffix",
    "meaning": "present participle/gerund"
  },
  "s": {
    "type": "suffix",
    "meaning": "plural/third person"
  },
  "es": {
    "type": "suffix",
    "meaning": "plural"
  },
  "ant": {
    "type": "suffix",
    "meaning": "agent"
  },
  "ent": {
    "type": "suffix",
    "meaning": "agent"
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
    "meaning": "pertaining to"
  },
  "ity": {
    "type": "suffix",
    "meaning": "state of"
  },
  "ise": {
    "type": "suffix",
    "meaning": "to make"
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
    "meaning": "say; speak"
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
  }
};
