export const greetings = {
  getRandom : () => {
    return greetingList[Math.floor(Math.random() * greetingList.length)];
  }
};

const greetingList = [
  "Good morning",
  "Good afternoon"
];