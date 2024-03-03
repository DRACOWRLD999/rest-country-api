import Card from "./components/card";
import Filter from "./components/filter-box";
import Search from "./components/search-field";
import Country from "./country/page";
export default async function Home() {
  async function fetchCards() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    return data;
  }
  const cards = await fetchCards();

  return (
    <main className="flex min-h-screen flex-row justify-evenly bg-zinc-50">
      {/* <div className="mx-20 p-2">
        <div className="bg-zinc-50 flex flex-row">
          <Search />
          <div className="absolute right-1 bg-zinc-50 h-16">
            <Filter />
          </div>
        </div>


      <div className="grid grid-cols-4 gap-x-16">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.flags.png}
            country={card.name.common}
            population={card.population}
            region={card.region}
            capital={card.capital}
          />
        ))}
      </div>
      </div> */}
      <Country />
    </main>
  );
}
