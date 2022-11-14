class Message {
  constructor(author, text) {
    this.author = author;
    this.text = text;
    this.time = this.getTime();
  }

  toString() {
    return `${this.time} ${this.author}: ${this.text}`;
  }

  getTime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
  }
}

class Messenger {
  messages = [];

  show_history() {
    this.messages.map((m) => console.log(m.toString()));
    document.querySelector(".container").innerHTML = `<div> ${this.messages.map((m) => m.toString()).join(" ")} </div>`;
  }

  send(author, text) {
    let message = new Message(author, text);
    this.messages.push(message);
  }
}

let messenger = new Messenger();
messenger.send("Ali", "Salam1");
messenger.send("Sabir", "Salam2");
messenger.send("Yashar", "Salam3");
messenger.show_history();
