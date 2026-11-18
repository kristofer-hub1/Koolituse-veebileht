function PageHeading({ title, subtitle }) {
    return (
      <section className="page-heading">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </section>
    );
  }
  
  export default PageHeading;