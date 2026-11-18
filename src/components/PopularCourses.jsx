import CourseList from "./CourseList";

function PopularCourses({ courses }) {
  return (
    <section className="catalog-section" aria-labelledby="popular-heading">
      <h2 id="popular-heading" className="section-title">
        Populaarsed koolitused
      </h2>
      <CourseList courses={courses} />
    </section>
  );
}

export default PopularCourses;