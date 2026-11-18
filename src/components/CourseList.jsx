import CourseCard from "./CourseCard";

function CourseList({ courses }) {
  return (
    <div className="course-grid">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          category={course.category}
          title={course.title}
          description={course.description}
          duration={course.duration}
        />
      ))}
    </div>
  );
}

export default CourseList;