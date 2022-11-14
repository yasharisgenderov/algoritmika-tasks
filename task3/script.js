const form = document.querySelector("#message_form");
const sendBtn = document.querySelector("#send_btn");
const showHistoryBtn = document.querySelector("#show_history_btn");
const history = document.querySelector(".history");

class Message {
  constructor(author, text) {
    this.author = author;
    this.text = text;
    this.sendTime = this.getTime();
  }

  getTime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
  }
  toHtml() {
    return `<p class="item">${this.sendTime} ${this.author}: ${this.text}</p><br/>`;
  }
}

class Messenger {
  messages = [];
  show_history() {
    history.innerHTML = "";
    console.log(this.messages);
    this.messages.map((m) => {
      const mess = document.createElement("p");
      mess.innerHTML = m.toHtml();
      history.append(mess);
    });
  }

  send(author, text) {
    const message = new Message(author, text);
    this.messages.push(message);
  }
}

const messenger = new Messenger();

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  messenger.send(String(formData.get("author")), String(formData.get("text")));
  document.querySelector("#input_area").value = "";
  document.querySelector("#area").value = "";
});

showHistoryBtn.addEventListener("click", (e) => {
  e.preventDefault();
  messenger.show_history();
});
