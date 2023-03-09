const words = [
  {
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished",
  },
  {
    term: "Tautology",
    definition:
      "logical argument constructed in such a way that it is logically irrefutable",
  },
  {
    term: "Oxymoron",
    definition:
      "figure of speech that juxtaposes elements that appear to be contradictory",
  },
];

const content = document.getElementById("content");
const list = document.createElement("dl");

words.forEach(function (word) {
  const term = document.createElement("strong");
  term.textContent = word.term;

  const definition = document.createElement("dd");
  definition.textContent = word.definition;

  list.appendChild(term);
  list.appendChild(definition);
});

content.appendChild(list);
