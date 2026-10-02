// Nothing arrives on its own, so go and look: db.refresh() reloads the list.

const EVERY = 4000; // milliseconds. 4000 is four seconds.

setInterval(() => {
  if (document.hidden) return;
  if (!db.user()) return;
  db.refresh();
}, EVERY);

db.insert({ text: "joined the chat" });
