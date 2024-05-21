function emojisAnalyzer(text) {
    const emojis1 = {
      positive: [":-)", ":)", ":D", ":]", ":>", ":o)", ":3", ":c)", ":>", "=]", "8)", "=)", ":}", ":^)", ":っ)"],
      negative: [":-(", ":(", ":'(", ":[", ":{", ":-[", ":-||", "=(", ":-c", ":-<", ":-[", ":-||", ":{", ":<"],
      happy: [":-)", ":)", "=]", ":D", ":o)", ":]", ":3", ":>", "8)", "=)", ":}", ":^)", ":っ)", "XD", "xD", "XD", "xD", ":-D"],
      sad: [":-(", ":(", ":c", ":[", ":{", ":-[", ":-||", ":-<", ":-[", ":-||", ":{", ":<", ":'(", ":'-(", "D:", "D-:"],
      angry: [">:(", ":-@", "x(", "x-(", "X(", "X-(", ">:["],
      surprised: [":-O", ":O", ":-o", ":o", ":-0", "8-0", "O_O", "o_o", "O.o", "o.O", "O_o", "o_O", "O.O", "o.o"],
      confused: [">.<", ":-/", ":-.", ":/", ":\\", "=/", "=\\", ":S", ":s", ":?", ":-?", ":-|"],
      love: ["<3", "♡"],
      laugh: ["XD", "xD", "XD", "xD", "=D", ":-))", ":-)))", ":-D", ":-DD", ":-DDD", ":-P", ":-p", ":oD", ":D"],
      cry: [":'-(", ":'-(", ":'-(", ":'-("],
      neutral: [":|", ":-|", ":/", ":\\", ":*", ";)", ";-)", ";-]", ";]", ";D", ";-D", ";P", ";-P", ";o)", ";^)", ":-*", ";-*", ";^*"]
    };
  
    const emojisList = [];
  
    for (let x in emojis1) {
      emojis1[x].forEach(emoji => {
        let index = text.indexOf(emoji);
        while (index !== -1) {
          emojisList.push({emoji: emoji, category: x});
          index = text.indexOf(emoji, index + 1);
        }
      });
    }
  
    console.log(emojisList);
  }
  
  
  const text = "Hey there! How are you doing? I'm feeling great today :-). Can't wait to see you tomorrow! It's been a long week, and I'm so tired :(. But hey, at least the weekend is almost here! Let's catch up soon! Btw, did you see the new movie? It's amazing XD. Anyway, gotta go now. Talk to you later! :D";
  emojisAnalyzer(text);
  