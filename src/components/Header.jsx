function Header() {
  return (
    <header className="app-header">
      <div className="app-header__inner">
        <span className="app-header__logo" aria-hidden="true">+</span>
        <div>
          <h1 className="app-header__title">PTMI</h1>
          <p className="app-header__subtitle">Patient Treatment Management Interface</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
