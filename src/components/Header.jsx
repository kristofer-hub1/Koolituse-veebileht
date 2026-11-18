import Navigation from "./Navigation";

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <span className="brand-name">Õpikeskus</span>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;