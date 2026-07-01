function Home() {
  return (
    <div className="home-page">

      <div className="hero-section">

        <h1>
          Welcome to Country Explorer 🌍
        </h1>

        <p>
          Discover countries around the world,
          search by country name, capital,
          and country code easily.
        </p>

        <a
          href="/countries"
          className="explore-btn"
        >
          Explore Countries
        </a>

      </div>

    </div>
  );
}

export default Home;