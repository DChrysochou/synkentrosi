export const greetings = {
  getRandom : () => {
    return greetingList[Math.floor(Math.random() * greetingList.length)];
  }
};

const greetingList = [
  "Good morning",
  "Good afternoon",
  "Release the things out of your control",
  "You are whole, you are creative, you are capable of change",
  "This too shall pass",
  "You are enough",
  "With change comes opportunity",
  "You are stronger than your excuses",
  "Don't postpone joy",
  "Progress is more important than perfection"
];