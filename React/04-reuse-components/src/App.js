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
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
}

//Header
function Header() {
  return <h1>World's Best Pizza Shop!</h1>;
}
//Menu
function Menu() {
  return (
    <>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </>
  );
}
//Footer
function Footer() {
  let currentHour = new Date().getHours();
  let openHour = 1;
  let closeHour = 22;
  let isOpen = currentHour >= openHour && currentHour < closeHour;
  let openingMessage = "";
  if (isOpen) {
    openingMessage = "We are currently Open ❤️";
  } else {
    openingMessage = "Sorry we are currently Closed 😔";
  }
  return (
    <>
      <footer>{openingMessage}</footer>
    </>
  );
}

//Menu Section Component
function Pizza() {
  return (
    <>
      <img src="pizzas/focaccia.jpg" alt="focaccia" />
      <h2>Focaccia</h2>
      <p>Bread with italian olive oil and rosemary</p>
    </>
  );
}
export default App;
