function About() {
  return (
    <div className="about-page">

      <div className="about-container">

        <h1>
          About Country Explorer 🌍
        </h1>

        <p>
          Country Explorer is a React web
          application that helps users
          explore countries around the world.

          You can search countries by
          country name, capital city,
          or country code and view
          detailed information about each
          country.

          The application also provides
          maps, population details,
          currencies, languages, and more.
        </p>

        <div className="about-features">

          <div className="feature-box">
            <h3>🌎 Explore Countries</h3>
            <p>
              View all countries and
              explore details easily.
            </p>
          </div>

          <div className="feature-box">
            <h3>🔍 Smart Search</h3>
            <p>
              Search using country,
              capital, or country code.
            </p>
          </div>

          <div className="feature-box">
            <h3>🗺️ Country Maps</h3>
            <p>
              View location maps inside
              details page.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default About;