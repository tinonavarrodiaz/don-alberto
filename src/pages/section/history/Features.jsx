const Features =  () => (
  <section className="section features">
    <article className={'features__grid '}>
      <div className="features__text" data-aos="fade-right" data-aos-offset="100">
        <h2 className={'section__title'}>OUR FIVE PILLARS</h2>
        <p className={'section__tex'}>
          Distillery established in December of 1989 by<br/>
          Mr. Gildardo Partida and Mrs. Leticia Hermosillo /<br/>
          Production of limited lots / Maturation / Exceptional<br/>
          Crops / Tequila Innovation
        </p>
      </div>
      <div className="features__text" data-aos="fade-left" data-aos-delay="0" data-aos-offset="100">
        <h2 className={'section__title'}>MATURATION</h2>
        <p className={'secction__text'}>
          French white oak barrels used with red wine from Napa<br/>Valley, CA
        </p>
      </div>
    </article>
    <article className={'features__grid '}>
      <div className="features__text"  data-aos="fade-right" data-aos-offset="100">
        <h2 className={'section__title'}>DESTILLERY / NOM1477</h2>
        <p className={'secction__text'}>
          Located in Zona Valles<br/>
          20º 45’ 18.2’’ North<br/>
          103º 39’ 3.9’’ West
        </p>
        <div className="features__text mt-[1em] lg:mt-[5.4585575vh]"  data-aos="fade-left" data-aos-delay="0" data-aos-offset="100">
          <h2 className={'section__title'}>PRODUCTION OF LIMITED LOTS</h2>
          <p className={'secction__text'}>
            10,000 bottles per year
          </p>
        </div>
      </div>
      <div className="features__text"  data-aos="fade-left" data-aos-delay="0" data-aos-offset="100">
        <h2 className={'section__title'}>AGAVE FIELDS</h2>
        <div className="section__grid">
          <p className={'section__text'}>
              La tripa / Amatitan, Jalisco.<br/>
              20º 52’ 49.8’’ N<br/>
              103º 45’ 04.5’’ W<br/>
              1,300 m.a.s.l.
          </p>
          <p className={'section__text'}>
              Algodones / Tequila, Jalisco.<br/>
              20º 50’ 57.6’’ N<br/>
              103º 48’ 04.7’’ W<br/>
              1,200 m.a.s.l.
          </p>
        </div>
        <div className="section__grid">
          <p className={'section__text'}>
              Tescalame / Tequila, Jalisco.<br/>
              20º 55’ 12’’ N<br/>
              103º 50’ 29.7’’ W<br/>
              1,100 m.a.s.l.
          </p>
          <p className={'section__text'}>
              La Bueyera / Teuchitlán, Jalisco.<br/>
              20º 42’ 50.2’’ N<br/>
              103º 46’ 37.6’’ W<br/>
              1,800 m.a.s.l.
          </p>
        </div>
      </div>
    </article>
  </section>
)

export default Features