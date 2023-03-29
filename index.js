const element = (
  // Write your code here.
  <div className="bg-image">
    <h1 className="congrats">Congratulations</h1>
    <div className="container">
      <img
        className="person-img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="person-name">Kiran V</h1>
      <p className="details">
        Vishnu Institute of ComputerEducation and Technology Bhimavaram
      </p>
      <img
        className="watch-img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
