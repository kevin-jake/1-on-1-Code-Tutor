import { formatDate } from "./date-helper";

const message = {
  content: "Just ate at “Les Corbeaux En Colère”. Wonderful little venue!",
  published: "2024-03-14T15:09:26.000Z",
  author: {
    avatarSrc: "https://sandpack-bundler.vercel.app/img/avatars/009.png",
    avatarDescription: "Cartoon bear",
    name: "Ben Thorn",
    handle: "benjaminthorn",
  },
};

function App() {
  const profileUrl = `/users/${message.author.handle}`;

  return (
    <article style={{ filter: "var(--shadow-elevation-high)" }}>
      <header>
        <img
          alt={message.author.avatarDescription}
          src={message.author.avatarSrc}
        />
        <a href={profileUrl}>{message.author.name}</a>
      </header>
      <p>{message.content}</p>
      <footer>
        Posted
        <time dateTime={message.published}>
          {formatDate(message.published)}
        </time>
      </footer>
    </article>
  );
}

export default App;