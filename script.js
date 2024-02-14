const students = [
  {
    name: "Achiles",
    role: "representative",
    absence: 1,
    img: "/students/Achiles.jpeg",
    link: "#",
    bio: "",
  },
  {
    name: "Annabelle",
    role: "student",
    absence: 2,
    img: "/students/Annabelle.jpeg",
    link: "https://www.instagram.com/abellejocel/",
    bio: "",
  },
  {
    name: "Annastasia",
    role: "student",
    absence: 3,
    img: "/students/Annastasia.jpeg",
    link: "https://www.instagram.com/anstsia.gita/",
    bio: "",
  },
  {
    name: "Chesya",
    role: "student",
    absence: 4,
    img: "/students/Chesya.jpeg",
    link: "https://www.instagram.com/csy.ind/",
    bio: "",
  },
  {
    name: "Daniel Yoze",
    role: "student",
    absence: 5,
    img: "/students/Daniel.jpeg",
    link: "https://www.instagram.com/yozzdaniel/",
    bio: "",
  },
  {
    name: "Dionisius Reddy",
    role: "student",
    absence: 6,
    img: "/students/Dionisius.jpeg",
    link: "https://www.instagram.com/dionisiusreddy/",
    bio: "",
  },
  {
    name: "Farrel",
    role: "student",
    absence: 7,
    img: "/students/Farrel.jpeg",
    link: "https://www.instagram.com/rell__z/",
    bio: "",
  },
  {
    name: "Febriana",
    role: "student",
    absence: 8,
    img: "/students/Febriana.jpeg",
    link: "https://www.instagram.com/fbrx.zx/",
    bio: "",
  },
  {
    name: "Fellice Valery",
    role: "student",
    absence: 9,
    img: "/students/Fellice.jpeg",
    link: "https://www.instagram.com/cavt.val_43/",
    bio: "",
  },
  {
    name: "George",
    role: "student",
    absence: 10,
    img: "/students/George.jpeg",
    link: "https://www.instagram.com/georgeubaralea/",
    bio: "",
  },
  {
    name: "Ida Bagus Putra",
    role: "student",
    absence: 11,
    img: "/students/Ida.jpeg",
    link: "https://www.instagram.com/idabagus.ptra/",
    bio: "",
  },
  {
    name: "Jason",
    role: "student",
    absence: 12,
    img: "/students/Jason.jpeg",
    link: "https://www.instagram.com/json.wijaya/",
    bio: "",
  },
  {
    name: "Jeffray",
    role: "student",
    absence: 13,
    img: "/students/Jeffray.jpeg",
    link: "https://www.instagram.com/jeffry_n.l/",
    bio: "",
  },
  {
    name: "Kevin",
    role: "student",
    absence: 14,
    img: "/students/Kevin.jpeg",
    link: "https://www.instagram.com/ithosixo/",
    bio: "",
  },
  {
    name: "Lionel",
    role: "student",
    absence: 15,
    img: "/students/Lionel.jpeg",
    link: "https://www.instagram.com/l__nell/",
    bio: "",
  },
  {
    name: "Marchel",
    role: "leader of class",
    absence: 16,
    img: "/students/Marchel.jpeg",
    link: "https://www.instagram.com/mrcheltmthyy/",
    bio: "",
  },
  {
    name: "Marvel",
    role: "student",
    absence: 17,
    img: "/students/Marvel.jpeg",
    link: "#",
    bio: "",
  },
  {
    name: "Matthew",
    role: "student",
    absence: 18,
    img: "/students/Matthew.jpeg",
    link: "https://www.instagram.com/mlrs_srlm/",
    bio: "",
  },
  {
    name: "Melvin",
    role: "student",
    absence: 19,
    img: "/students/Melvin.jpeg",
    link: "https://www.instagram.com/mxlvyn.2/",
    bio: "",
  },
  {
    name: "Novem",
    role: "student",
    absence: 20,
    img: "/students/Novem.jpeg",
    link: "https://www.instagram.com/nehemia_n_grasiatama/",
    bio: "",
  },
  {
    name: "Olivia",
    role: "student",
    absence: 21,
    img: "/students/Olivia.jpeg",
    link: "https://www.instagram.com/tecrorrize/",
    bio: "",
  },
  {
    name: "Oliver",
    role: "student",
    absence: 22,
    img: "/students/Oliver.jpeg",
    link: "https://www.instagram.com/foxliver.08/",
    bio: "",
  },
  {
    name: "Reinhard",
    role: "student",
    absence: 23,
    img: "/students/Reinhard.jpeg",
    link: "https://www.instagram.com/itsme.xell/",
    bio: "",
  },
  {
    name: "Shasi",
    role: "student",
    absence: 24,
    img: "/students/Shasik.jpeg",
    link: "https://www.instagram.com/shasikk_/",
    bio: "",
  },
  {
    name: "Tobias",
    role: "student",
    absence: 25,
    img: "/students/Tobias.jpeg",
    link: "https://www.instagram.com/tobiasnzn/",
    bio: "",
  },
];

const studentsContainer = document.getElementById("studentsContainer");

students.forEach((student) => {
  const studentCard = document.createElement("div");
  studentCard.classList.add(
    "group",
    "relative",
    "block",
    "bg-black",
  );

  const studentLink = document.createElement("a");
  // studentLink.href = student.link;
  studentLink.classList.add("cursor-pointer");

  const studentImage = document.createElement("img");
  studentImage.src = student.img || student.img;
  studentImage.alt =
    student.role.charAt(0).toUpperCase() + student.role.slice(1);
  studentImage.classList.add(
    "absolute",
    "inset-0",
    "h-full",
    "font-bold",
    "w-full",
    "object-cover",
    "opacity-75",
    "transition-opacity",
    "group-hover:opacity-50"
  );

  const studentInfoContainer = document.createElement("div");
  studentInfoContainer.classList.add(
    "relative",
    "p-4",
    "sm:p-6",
    "lg:p-8",
    "duration-700",
    "-translate-x-8",
    "opacity-0",
    "transition-all",
    "transform",
    "font-bold",
    "group-hover:translate-x-0",
    "group-hover:opacity-100"
  );

  const studentRole = document.createElement("p");
  studentRole.classList.add(
    "text-sm",
    "font-medium",
    "uppercase",
    "tracking-widest",
    "text-red-700",
    "-translate-x-8",
    "opacity-0",
    "transition-all",
    "transform",
    "group-hover:translate-x-0",
    "group-hover:opacity-100"
  );
  studentRole.textContent =
    student.role.charAt(0).toUpperCase() + student.role.slice(1);

  const studentName = document.createElement("p");
  studentName.classList.add(
    "text-xl",
    "font-bold",
    "text-white",
    "sm:text-2xl",
    "duration-700",
    "-translate-x-8",
    "opacity-0",
    "transition-all",
    "transform",
    "group-hover:translate-x-0",
    "group-hover:opacity-100"
  );
  studentName.textContent = student.name;

  const studentDescription = document.createElement("div");
  studentDescription.classList.add(
    "mt-32",
    "sm:mt-48",
    "lg:mt-64",
    "translate-y-8",
    "duration-700",
    "transform",
    "opacity-0",
    "transition-all",
    "group-hover:translate-y-0",
    "group-hover:opacity-100"
  );

  const studentDescriptionText = document.createElement("p");
  studentDescriptionText.classList.add("text-sm", "text-white", "font-bold");
  studentDescriptionText.textContent = `Absence: ${student.absence}`;

  studentsContainer.appendChild(studentCard);
  studentCard.appendChild(studentLink);
  studentLink.appendChild(studentImage);
  studentLink.appendChild(studentInfoContainer);
  studentInfoContainer.appendChild(studentRole);
  studentInfoContainer.appendChild(studentName);
  studentInfoContainer.appendChild(studentDescription);
  studentDescription.appendChild(studentDescriptionText);
});

function searchStudents(query) {
  query = query.toLowerCase();
  const searchTerm = searchInput.value.toLowerCase();
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().startsWith(searchTerm)
  );
  // return students.filter((student) => student.name.toLowerCase().includes(query));
  return filteredStudents;
}
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", function () {
  const searchQuery = this.value;
  const searchResults = searchQuery !== "" ? searchStudents(searchQuery) : [];
  displayResults(searchResults);
});
function displayResults(results) {
  const searchResultsContainer = document.getElementById("search-results");
  searchResultsContainer.innerHTML = "";
  results.forEach((student) => {
    const studentCard = document.createElement("div");
    studentCard.classList.add(
      "student-result",
      "bg-neutral-950/50",
      "font-bold",
      "my-[10px]",
      "pl-6",
      "w-[316px]",
      "h-[36px]",
      "rounded-lg",
      "text-red-700",
      "hover:bg-gray",
      "flex",
      "align-center"
    );

    const studentProfileImg = document.createElement("img");
    studentProfileImg.src = student.img || student.img;
    studentProfileImg.classList.add(
      "h-[25px]",
      "w-[25px]",
      "inset-[2px]",
      "align-center",
      "mt-[5px]",
      "mr-[20px]",
      "rounded-full",
      "flex"
    );

    const studentLinkSearch = document.createElement("a");
    studentLinkSearch.href = student.link;

    const studentName = document.createElement("h3");
    studentName.textContent = student.name;
    studentName.classList.add("text-2xl", "cursor-pointer");

    studentCard.appendChild(studentProfileImg);
    studentCard.appendChild(studentLinkSearch);
    studentLinkSearch.appendChild(studentName);
    searchResultsContainer.appendChild(studentCard);
  });
}
