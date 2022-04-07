// function MainContent() {
//   return (
//     <h1>I'm learning React</h1>
//   )
// }

// ReactDOM.render(
//   <MainContent />,
//   document.getElementById("root")
// );

// const h1 = document.createElement("h1");
// h1.textContent = "This is an imperative way to program";
// h1.className = "header";
// document.getElementById("root").append(h1);

// const page = (
//   <div>
//     <h1 className="header">This is JSX</h1>
//     <p>This is a paragraph</p>
//   </div>
// )
// ReactDOM.render(
//   page,
//   document.getElementById("root"),
// )

const navbar = (
  <nav>
  <h1>Brand Name of website</h1>
  <ul>
    <li>Pricing</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
  </nav>
)
document.getElementById("root").append(navbar);