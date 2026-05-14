import "../App.css"

function Infinity() {
    return (
      <section className="carousel-section">
        <h3 className="section-title">Royal <span className="highlight">Drinks</span> Picks</h3>
        <div className="carousel">
          <div className="carousel-track">
            <div className="pill">Zobo</div>
            <div className="pill">Chapman</div>
            <div className="pill">Kunu</div>
            <div className="pill">Palm Wine</div>
            <div className="pill">Fura da Nono</div>
            <div className="pill">Tigernut Milk</div>
            {/* <!-- duplicated for infinite scroll --> */}
            <div className="pill">Zobo</div>
            <div className="pill">Chapman</div>
            <div className="pill">Kunu</div>
            <div className="pill">Palm Wine</div>
            <div className="pill">Fura da Nono</div>
            <div className="pill">Tigernut Milk</div>
            {/* <!-- duplicated for infinite scroll --> */}
            <div className="pill">Zobo</div>
            <div className="pill">Chapman</div>
            <div className="pill">Kunu</div>
            <div className="pill">Palm Wine</div>
            <div className="pill">Fura da Nono</div>
            <div className="pill">Tigernut Milk</div>
          </div>
        </div>
      </section>
    );
}

export default Infinity;