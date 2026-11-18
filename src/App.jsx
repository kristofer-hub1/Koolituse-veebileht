import Header from "./components/Header";
import PageHeading from "./components/PageHeading";
import CategoryList from "./components/CategoryList";
import PopularCourses from "./components/PopularCourses";
import CourseList from "./components/CourseList";
import Footer from "./components/Footer";
import { categories, courses, popularCourses } from "./data/courses";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <Header />

      <main id="koolitused" className="main-content">
        <PageHeading
          title="Koolitused"
          subtitle="Leia endale sobiv koolitus ja arenda oma teadmisi."
        />

        <CategoryList categories={categories} />

        <PopularCourses courses={popularCourses} />

        <section className="catalog-section" aria-labelledby="all-courses-heading">
          <h2 id="all-courses-heading" className="section-title">
            Kõik koolitused
          </h2>
          <CourseList courses={courses} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;