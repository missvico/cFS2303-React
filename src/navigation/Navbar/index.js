function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Nombre Marca
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#landing">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#counter">
                Counter
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#todolist">
                To Do List
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#starwarscharacters">
                Star Wars
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://getbootstrap.com/docs">
                Social
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar