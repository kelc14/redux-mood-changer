const INITIAL_STATE = { mood: "ʘ‿ʘ" };

function moodChanger(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "HAPPY":
      return { mood: "ʘ‿ʘ" };
    case "SAD":
      return { mood: "⊙︿⊙" };
    case "INLOVE":
      return { mood: "♥‿♥" };
    case "HUNGRY":
      return { mood: "ꉨڡꉨ" };
    case "SURPRISED":
      return { mood: "⊙０⊙" };
  }
  return state;
}

const store = Redux.createStore(moodChanger);
