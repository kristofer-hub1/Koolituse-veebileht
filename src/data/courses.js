export const categories = [
    "Kõik",
    "Programmeerimine",
    "Andmeanalüüs",
    "Disain",
  ];
  
  export const courses = [
    {
      id: 1,
      category: "Programmeerimine",
      title: "Veebiarenduse alused",
      description: "Õpi looma veebilehti HTML-i, CSS-i ja JavaScriptiga.",
      duration: "24 tundi",
      isPopular: true,
    },
    {
      id: 2,
      category: "Andmeanalüüs",
      title: "Andmete analüüs Pythoniga",
      description: "Andmete töötlemine ja lihtsam visualiseerimine.",
      duration: "30 tundi",
      isPopular: true,
    },
    {
      id: 3,
      category: "Disain",
      title: "Kasutajaliidese kujundamine",
      description: "Hea kasutajaliidese põhimõtted ja lihtsad prototüübid.",
      duration: "18 tundi",
      isPopular: false,
    },
    {
      id: 4,
      category: "Programmeerimine",
      title: "Reacti sissejuhatus",
      description: "Komponendid ja nende kasutamine veebirakenduses.",
      duration: "20 tundi",
      isPopular: true,
    },
    {
      id: 5,
      category: "Andmeanalüüs",
      title: "Andmete visualiseerimine",
      description: "Graafikute ja diagrammide loomine andmetest.",
      duration: "16 tundi",
      isPopular: false,
    },
    {
      id: 6,
      category: "Disain",
      title: "Veebilehe kujunduse alused",
      description: "Värvid, tüpograafia ja lehe paigutus.",
      duration: "12 tundi",
      isPopular: false,
    },
  ];
  
  export const popularCourses = courses.filter((course) => course.isPopular);