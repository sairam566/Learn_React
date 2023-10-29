import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

//Header Section Component
function App() {
  return (
    <div className="conatainer">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

//Header
function Header() {
  return (
    <header className="header">
      <h1>World's Best Pizza Shop!</h1>
    </header>
  );
}
//Menu
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>
      {/* <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="pizzas/focaccia.jpg"
        price={6}
      />
      <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, and pepperoni"
        price={15}
        photoName="pizzas/salamino.jpg"
      /> */}
    </main>
  );
}

//Menu Section Component
function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

//Footer
function Footer() {
  let currentHour = new Date().getHours();
  let openHour = 1;
  let closeHour = 22;
  let isOpen = currentHour >= openHour && currentHour <= closeHour;

  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? (
          <Order closeHour={closeHour} />
        ) : (
          <p>
            We are open from {openHour}:00 to {closeHour}:00. Please visit us
            then.
          </p>
        )}
      </div>
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <>
      <p>We're open until {closeHour}:00. Come visit us or Order Online</p>
      <button className="btn">Order Now</button>
    </>
  );
}

export default App;
