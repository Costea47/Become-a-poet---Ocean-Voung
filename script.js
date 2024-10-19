class FirstScene extends Phaser.Scene {
  constructor() {
    super("FirstScene");
  }

  preload() {
    this.load.image(
      "lysander",
      `https://play.rosebud.ai/assets/lysander-yuen-wk833OrQLJE-unsplash.jpg?VloH`
    );
    this.load.image(
      "startButton",
      `https://play.rosebud.ai/assets/A green rectangular button with white text "Click to Start".png?Tpk5`
    );
    this.load.image(
      "joanna",
      `https://play.rosebud.ai/assets/joanna-kosinska-1_CMoFsPfso-unsplash.jpg?m304`
    );
    this.load.image(
      "oceanv",
      `https://play.rosebud.ai/assets/oceanv.webp?4Ifd`
    );
    this.load.image(
      "homeButton",
      `https://play.rosebud.ai/assets/A home icon button.png?F03W`
    );
    this.load.image(
      "homeIcon",
      "https://play.rosebud.ai/assets/A simple home icon.png?VcM9"
    );
    this.load.image(
      "warren",
      "https://play.rosebud.ai/assets/warren--HtfdIHSbsE-unsplash.jpg?Q2q7"
    );
    this.load.image(
      "sj-objio",
      "https://play.rosebud.ai/assets/sj-objio-XFWiZTa2Ub0-unsplash.jpg?eD5U"
    );
    this.load.image(
      "pencil",
      "https://play.rosebud.ai/assets/generate image of a pencil.png?D5GN"
    );
    this.load.image(
      "poemsBooks",
      "https://play.rosebud.ai/assets/create a background image of poems and books.png?wB50"
    );
    this.load.image(
      "jacinta",
      "https://play.rosebud.ai/assets/jacinta-christos-BDJy8J3R4GY-unsplash.jpg?6Zf5"
    );
  }

  create() {
    const background = this.add.image(400, 300, "lysander");
    const scaleX = this.cameras.main.width / background.width;
    const scaleY = this.cameras.main.height / background.height;
    const scale = Math.max(scaleX, scaleY);
    background.setScale(scale);
    background.setPosition(
      this.cameras.main.centerX,
      this.cameras.main.centerY
    );

    const startButton = this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY + 100,
      "startButton"
    );
    startButton.setInteractive();
    const buttonScale = Math.min(
      (this.cameras.main.width * 0.3) / startButton.width,
      (this.cameras.main.height * 0.15) / startButton.height
    );
    startButton.setScale(buttonScale);

    startButton.on("pointerdown", () => {
      console.log("Button clicked!");
      this.scene.start("SecondScene");
    });

    this.time.addEvent({
      delay: 3000,
      loop: false,
      callback: () => {},
    });
  }
}

class SecondScene extends Phaser.Scene {
  constructor() {
    super("SecondScene");
  }

  create() {
    const background = this.add.image(400, 300, "joanna");
    const scaleX = this.cameras.main.width / background.width;
    const scaleY = this.cameras.main.height / background.height;
    const scale = Math.max(scaleX, scaleY);
    background.setScale(scale);
    background.setPosition(
      this.cameras.main.centerX,
      this.cameras.main.centerY
    );

    const newText = this.add.text(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "Hello Bards!\nHelp me put together a poem for my latest collection.\nAre you ready?",
      {
        font: "24px Garamond, serif",
        fill: "#000000",
        align: "center",
        lineSpacing: 10,
        wordWrap: {
          width: this.cameras.main.width - 100,
          useAdvancedWrap: true,
        },
      }
    );
    newText.setOrigin(0.5);

    const oceanv = this.add.image(
      this.cameras.main.width - 50,
      this.cameras.main.height - 50,
      "oceanv"
    );
    const oceanvScale = 0.1;
    oceanv.setScale(oceanvScale);
    oceanv.setOrigin(1, 1);

    const homeButton = this.add.image(50, 50, "homeButton");
    homeButton.setScale(0.1);
    homeButton.setInteractive();
    homeButton.on("pointerdown", () => {
      this.scene.start("FirstScene");
    });

    const homeIcon = this.add.image(100, 50, "homeIcon");
    homeIcon.setScale(0.05);
    homeIcon.setInteractive();
    homeIcon.on("pointerdown", () => {
      this.scene.start("FirstScene");
    });

    this.time.delayedCall(
      4000,
      () => {
        this.scene.start("ThirdScene");
      },
      [],
      this
    );
  }
}

class ThirdScene extends Phaser.Scene {
  constructor() {
    super("ThirdScene");
  }

  create() {
    const background = this.add.image(400, 300, "warren");
    const scaleX = this.cameras.main.width / background.width;
    const scaleY = this.cameras.main.height / background.height;
    const scale = Math.max(scaleX, scaleY);
    background.setScale(scale);
    background.setPosition(
      this.cameras.main.centerX,
      this.cameras.main.centerY
    );

    const newText = this.add.text(
      400,
      80,
      "Hello! I am Vietnamese American novelist Ocean Vuong!",
      {
        font: "bold 32px Arial",
        fill: "#000000",
        align: "center",
        wordWrap: {
          width: 600,
        },
      }
    );
    newText.setOrigin(0.5);

    const infoText = this.add.text(
      400,
      300,
      "* I was born in Saigon, Vietnam, on October 14, 1988.\n" +
        "* I immigrated to the U.S. as a refugee with my family when I was two years old.\n" +
        "* I grew up in Hartford Connecticut, raised by a single mother.\n\n" +
        "* I come from a family of Vietnamese immigrants who fled after the Vietnam War.\n" +
        "* My experience as an immigrant and the trauma of war deeply influences my work, especially themes of displacement and cultural identity.",
      {
        font: "bold 22px Arial",
        fill: "#000000",
        align: "center",
        wordWrap: {
          width: 700,
        },
      }
    );
    infoText.setOrigin(0.5);

    const homeIcon = this.add.image(50, 50, "homeIcon");
    homeIcon.setScale(0.05);
    homeIcon.setInteractive();
    homeIcon.on("pointerdown", () => {
      this.scene.start("FirstScene");
    });

    const startGameButton = this.add.text(400, 500, "Start Game", {
      font: "bold 24px Arial",
      fill: "#ffffff",
      backgroundColor: "#000000",
      padding: {
        left: 15,
        right: 15,
        top: 10,
        bottom: 10,
      },
    });
    startGameButton.setOrigin(0.5);
    startGameButton.setInteractive();
    startGameButton.on("pointerdown", () => {
      console.log("Start Game button clicked!");
      this.scene.start("FourthScene");
    });

    const oceanv = this.add.image(
      this.cameras.main.width - 50,
      this.cameras.main.height - 50,
      "oceanv"
    );
    const oceanvScale = 0.1;
    oceanv.setScale(oceanvScale);
    oceanv.setOrigin(1, 1);
  }
}

class FourthScene extends Phaser.Scene {
  constructor() {
    super("FourthScene");
  }

  create() {
    const background = this.add.image(400, 300, "sj-objio");
    const scaleX = this.cameras.main.width / background.width;
    const scaleY = this.cameras.main.height / background.height;
    const scale = Math.max(scaleX, scaleY);
    background.setScale(scale);
    background.setPosition(
      this.cameras.main.centerX,
      this.cameras.main.centerY
    );

    const titleText = this.add.text(400, 30, "Crossing Borders", {
      font: "bold 48px Arial",
      fill: "#000000",
      align: "center",
    });
    titleText.setOrigin(0.5);

    const prompts = [
      "Enter a country.",
      "Enter an object.",
      "Enter an emotion.",
      "Enter another emotion.",
      "Enter an adjective.",
      "Enter another adjective.",
      "Enter a noun.",
      "Enter another noun.",
    ];

    let yPosition = 100;
    this.inputs = [];
    prompts.forEach((prompt, index) => {
      this.add.text(50, yPosition, prompt, {
        font: "bold 22px Arial",
        fill: "#000000",
      });

      const inputField = document.createElement("input");
      inputField.type = "text";
      inputField.id = `input${index}`;
      inputField.style = "width: 200px; padding: 5px; font-size: 18px;";

      const inputElement = this.add.dom(400, yPosition, inputField);
      this.inputs.push(inputElement);

      yPosition += 55;
    });

    const submitButton = this.add.text(400, 550, "Submit", {
      font: "bold 24px Arial",
      fill: "#ffffff",
      backgroundColor: "#000000",
      padding: {
        left: 15,
        right: 15,
        top: 10,
        bottom: 10,
      },
    });
    submitButton.setOrigin(0.5);
    submitButton.setInteractive();
    submitButton.on("pointerdown", () => {
      console.log("Submit button clicked!");
      const userInputs = this.inputs.map((input) => input.node.value);
      this.scene.start("FifthScene", {
        userInputs: userInputs,
      });
    });

    const pencil = this.add.image(
      this.cameras.main.width - 50,
      this.cameras.main.height - 50,
      "pencil"
    );
    const pencilScale = 0.3;
    pencil.setScale(pencilScale);
    pencil.setOrigin(1, 1);

    const poemsBooks = this.add.image(
      this.cameras.main.width - 50,
      50,
      "poemsBooks"
    );
    const poemsBooksScale = 0.2;
    poemsBooks.setScale(poemsBooksScale);
    poemsBooks.setOrigin(1, 0);
  }
}

class FifthScene extends Phaser.Scene {
  constructor() {
    super("FifthScene");
  }

  create(data) {
    const background = this.add.image(400, 300, "sj-objio");
    const scaleX = this.cameras.main.width / background.width;
    const scaleY = this.cameras.main.height / background.height;
    const scale = Math.max(scaleX, scaleY);
    background.setScale(scale);
    background.setPosition(
      this.cameras.main.centerX,
      this.cameras.main.centerY
    );

    const titleText = this.add.text(400, 50, "Crossing Borders", {
      font: "bold 48px Arial",
      fill: "#000000",
      align: "center",
    });
    titleText.setOrigin(0.5);
    titleText.setShadow(2, 2, "#ffffff", 2, false, true);

    const userInputs = data.userInputs || Array(8).fill("____");
    const poemText = `I came from ${userInputs[0]} with nothing but my ${userInputs[1]}
In my heart, I carried ${userInputs[2]} and ${userInputs[3]}
The land I left behind was ${userInputs[4]}, but here it is ${userInputs[5]}
Each step forward feels like a dance of ${userInputs[6]},
While shadows of ${userInputs[7]} pull me back.`;

    const poem = this.add.text(400, 300, poemText, {
      font: "24px Arial",
      fill: "#000000",
      align: "center",
      lineSpacing: 10,
      wordWrap: {
        width: 600,
      },
    });
    poem.setOrigin(0.5);

    const nextSlideButton = this.add.text(700, 550, "Next Slide", {
      font: "bold 24px Arial",
      fill: "#ffffff",
      backgroundColor: "#000000",
      padding: {
        left: 15,
        right: 15,
        top: 10,
        bottom: 10,
      },
    });
    nextSlideButton.setOrigin(1, 0.5);
    nextSlideButton.setInteractive();
    nextSlideButton.on("pointerdown", () => {
      this.scene.start("SixthScene");
    });
  }
}
class SixthScene extends Phaser.Scene {
  constructor() {
    super("SixthScene");
  }
  create() {
    const background = this.add.image(400, 300, "joanna");
    const scaleX = this.cameras.main.width / background.width;
    const scaleY = this.cameras.main.height / background.height;
    const scale = Math.max(scaleX, scaleY);
    background.setScale(scale);
    background.setPosition(
      this.cameras.main.centerX,
      this.cameras.main.centerY
    );
    const titleText = this.add.text(400, 50, "Chat with Ocean Vuong", {
      font: "bold 32px Arial",
      fill: "#000000",
      align: "center",
    });
    titleText.setOrigin(0.5);
    titleText.setShadow(2, 2, "#ffffff", 2, false, true);
    const oceanImage = this.add.image(150, 300, "oceanv");
    oceanImage.setScale(0.3);
    const chatQuestions = [
      "What inspired you to become a writer?",
      "How does your Vietnamese heritage influence your work?",
      "What advice do you have for aspiring poets?",
      "Can you talk about your creative process?",
    ];
    const chatResponses = [
      "I was inspired by the power of language to bridge gaps between cultures and generations. Writing became a way for me to explore my identity and connect with others.",
      "My Vietnamese heritage is integral to my writing. It provides a unique lens through which I view the world, and it's a source of both pain and beauty in my work.",
      "Read widely, write honestly, and don't be afraid to be vulnerable in your work. Poetry is about connecting with others through shared human experiences.",
      "My creative process involves a lot of observation and reflection. I often start with a small detail or memory and let it expand into a larger narrative or emotional landscape.",
    ];
    let yPos = 150;
    chatQuestions.forEach((question, index) => {
      const questionText = this.add.text(300, yPos, question, {
        font: "16px Arial",
        fill: "#000000",
        backgroundColor: "#e0e0e0",
        padding: {
          left: 10,
          right: 10,
          top: 5,
          bottom: 5,
        },
      });
      questionText.setInteractive();
      questionText.on("pointerdown", () =>
        this.showResponse(chatResponses[index])
      );
      yPos += 50;
    });
    this.responseText = this.add.text(
      300,
      400,
      "Click a question to see Ocean's response",
      {
        font: "18px Arial",
        fill: "#000000",
        wordWrap: {
          width: 400,
        },
      }
    );
    const nextSlideButton = this.add.text(700, 550, "Next Slide", {
      font: "bold 24px Arial",
      fill: "#ffffff",
      backgroundColor: "#000000",
      padding: {
        left: 15,
        right: 15,
        top: 10,
        bottom: 10,
      },
    });
    nextSlideButton.setOrigin(1, 0.5);
    nextSlideButton.setInteractive();
    nextSlideButton.on("pointerdown", () => {
      this.scene.start("SeventhScene");
    });
  }
  showResponse(response) {
    this.responseText.setText(response);
  }
}
class SeventhScene extends Phaser.Scene {
  constructor() {
    super("SeventhScene");
  }
  create() {
    const background = this.add.image(400, 300, "joanna");
    const scaleX = this.cameras.main.width / background.width;
    const scaleY = this.cameras.main.height / background.height;
    const scale = Math.max(scaleX, scaleY);
    background.setScale(scale);
    background.setPosition(
      this.cameras.main.centerX,
      this.cameras.main.centerY
    );
    const titleText = this.add.text(400, 50, "Chat with Ocean Vuong", {
      font: "bold 32px Arial",
      fill: "#000000",
      align: "center",
    });
    titleText.setOrigin(0.5);
    titleText.setShadow(2, 2, "#ffffff", 2, false, true);
    const aiImage = this.add.image(150, 300, "pencil");
    aiImage.setScale(0.2);
    // Create a scrollable text area for chat log
    const chatLogContainer = document.createElement("div");
    chatLogContainer.style =
      "width: 400px; height: 300px; overflow-y: auto; background-color: white; padding: 10px; font-family: Arial; font-size: 18px;";
    this.chatLogElement = this.add.dom(500, 250, chatLogContainer);
    // Initial message
    this.appendToChatLog(
      "Ocean Vuong: Hello! I'm Ocean Vuong, a Vietnamese-American poet and novelist. How can we explore the landscapes of language and identity together?"
    );
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.placeholder = "Type your message here...";
    inputField.style = "width: 300px; padding: 10px; font-size: 16px;";
    this.inputElement = this.add.dom(400, 500, inputField);
    this.inputElement.addListener("keyup");
    const sendButton = this.add.text(600, 500, "Send", {
      font: "bold 24px Arial",
      fill: "#ffffff",
      backgroundColor: "#000000",
      padding: {
        left: 15,
        right: 15,
        top: 10,
        bottom: 10,
      },
    });
    sendButton.setOrigin(0.5);
    sendButton.setInteractive();
    sendButton.on("pointerdown", () => this.sendMessage());
    this.inputElement.on("keyup", (event) => {
      if (event.key === "Enter") {
        this.sendMessage();
      }
    });
    // Add Start Again button
    const startAgainButton = this.add.text(50, 550, "Start Again", {
      font: "bold 24px Arial",
      fill: "#ffffff",
      backgroundColor: "#000000",
      padding: {
        left: 15,
        right: 15,
        top: 10,
        bottom: 10,
      },
    });
    startAgainButton.setOrigin(0, 1);
    startAgainButton.setInteractive();
    startAgainButton.on("pointerdown", () => {
      this.scene.start("FirstScene");
    });
  }
  sendMessage() {
    const message = this.inputElement.node.value;
    if (message.trim() === "") return;
    this.appendToChatLog(`You: ${message}`);
    this.appendToChatLog(`Ocean Vuong: ${this.generateResponse(message)}`);
    // Clear input field
    this.inputElement.node.value = "";
    // Scroll chat log to bottom
    this.chatLogElement.node.scrollTop = this.chatLogElement.node.scrollHeight;
  }
  appendToChatLog(message) {
    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    messageElement.style = "margin: 5px 0;";
    this.chatLogElement.node.appendChild(messageElement);
  }
  generateResponse(message) {
    const lowercaseMessage = message.toLowerCase();

    if (
      lowercaseMessage.includes("hello") ||
      lowercaseMessage.includes("hi") ||
      lowercaseMessage.includes("hey")
    ) {
      return "Hello! I'm glad you're here. As a poet, I believe in the power of words to connect us. What would you like to discuss about poetry, identity, or the immigrant experience?";
    }

    if (
      lowercaseMessage.includes("immigrant") ||
      lowercaseMessage.includes("refugee")
    ) {
      return "The immigrant experience is central to my work. In 'On Earth We're Briefly Gorgeous', I explore the complexities of being a refugee and finding one's place in a new world. Have you read any literature that resonates with the immigrant experience?";
    }

    if (
      lowercaseMessage.includes("war") ||
      lowercaseMessage.includes("vietnam")
    ) {
      return "The Vietnam War has profoundly impacted my family's history and my writing. In 'Night Sky with Exit Wounds', I grapple with the legacy of war and its echoes through generations. How do you think historical events shape our personal stories?";
    }

    if (
      lowercaseMessage.includes("identity") ||
      lowercaseMessage.includes("queer")
    ) {
      return "As a queer Vietnamese-American, I often explore the intersection of these identities in my work. In 'On Earth We're Briefly Gorgeous', the protagonist's journey of self-discovery touches on both cultural and sexual identity. How do you navigate your own multiple identities?";
    }

    if (
      lowercaseMessage.includes("write") ||
      lowercaseMessage.includes("writing") ||
      lowercaseMessage.includes("poet")
    ) {
      return "Writing, for me, is an act of survival and self-discovery. I often say, 'I write as a way of reaching you, even if reaching you will break my heart.' What inspires you to write or engage with literature?";
    }

    if (
      lowercaseMessage.includes("family") ||
      lowercaseMessage.includes("mother")
    ) {
      return "My relationship with my mother is a central theme in my work. In 'On Earth We're Briefly Gorgeous', I explore the complexities of family, love, and the weight of generational trauma. How do you see family influencing literature or art?";
    }

    if (
      lowercaseMessage.includes("language") ||
      lowercaseMessage.includes("english")
    ) {
      return "As someone who learned English as a second language, I see it as both a tool and a barrier. In my poetry, I often play with language, pushing its boundaries. How do you think language shapes our understanding of the world and ourselves?";
    }

    if (
      lowercaseMessage.includes("book") ||
      lowercaseMessage.includes("novel") ||
      lowercaseMessage.includes("poem")
    ) {
      return "My works like 'On Earth We're Briefly Gorgeous' and 'Night Sky with Exit Wounds' explore themes of identity, family, and the immigrant experience. Is there a particular book or poem of mine you'd like to discuss?";
    }

    if (
      lowercaseMessage.includes("inspiration") ||
      lowercaseMessage.includes("influence")
    ) {
      return "I draw inspiration from a wide range of sources - from my personal experiences to the works of other poets like Emily Dickinson and Paul Celan. What or who inspires your creativity?";
    }

    return "That's an interesting perspective. In my writing, I often grapple with the complexities of human experience, trying to find beauty in even the most challenging moments. Could you elaborate more on your thoughts? I'd love to explore this idea further.";
  }
}

const container = document.getElementById("renderDiv");
const config = {
  type: Phaser.AUTO,
  parent: "renderDiv",
  dom: {
    createContainer: true,
  },
  pixelArt: true,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 200,
      },
    },
  },
  scene: [
    FirstScene,
    SecondScene,
    ThirdScene,
    FourthScene,
    FifthScene,
    SixthScene,
    SeventhScene,
  ],
};
window.phaserGame = new Phaser.Game(config);
