import ContactCard from "./ContactCard";
import Friend from "./Friend";

const data = [
  {
    id: "sunita-abc123",
    name: "Sunita Kumar",
    job: "Electrical Engineer",
    email: "sunita.kumar@acme.co",
  },
  {
    id: "henderson-def456",
    name: "Henderson G. Sterling II",
    job: "Receptionist",
    email: "henderson-the-second@acme.co",
  },
  {
    id: "aio-ghi789",
    name: "Aoi Kobayashi",
    job: "President",
    email: "kobayashi.aoi@acme.co",
  },
];

function App() {
  // const test = data.forEach(
  //   (contact) =>
  //     `  key=${contact.name}
  //     name=${contact.name}
  //     job=${contact.job}
  //     email=${contact.email}`
  // );
  // console.log("🚀 ~ App ~ test:", test);
  return (
    <>
      <ul>
        {data.map((contact) => (
          <ContactCard
            key={contact.name}
            name={contact.name}
            job={contact.job}
            email={contact.email}
          />
        ))}
      </ul>
      <ul className="friend-list">
        <Friend name="Andrew" isOnline={false} />
        <Friend name="Beatrice" isOnline={true} />
        <Friend name="Chen" isOnline={true} />
      </ul>
    </>
  );
}

export default App;
