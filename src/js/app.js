import "../style/index.css"; // This line is correct assuming it's importing a CSS file

/**
 * EDIT ONLY INSIDE THIS RENDER FUNCTION
 * This function is called every time the user changes types or changes any input
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // Print on the console

  // Determine the cover HTML based on includeCover value
  let cover = variables.includeCover
    ? `<div class="cover"><img src="${variables.background}" /></div>`
    : '<div class="cover"></div>';

  // Generate the HTML for the widget content
  document.querySelector("#widget_content").innerHTML = `
    <div class="widget">
      ${cover}
      <img src="${variables.avatarURL}" class="photo" />
      <h1>${variables.name ? variables.name : "Ursula"} ${
    variables.lastName ? variables.lastName : "Jardon"
  }</h1>
      <h2>${variables.role ? variables.role : "Musical Producer"}</h2>
      <h3>${variables.city ? variables.city : "CDMX"}, ${
    variables.country ? variables.country : "Mexico"
  }</h3>
      <ul class="${variables.socialMediaPosition}">
        <li><a href="${
          variables.twitter
            ? "https://twitter.com/" + variables.twitter
            : "https://twitter.com/4geeksacademy"
        }"><i class="fab fa-twitter"></i></a></li>
        <li><a href="${
          variables.github
            ? "https://github.com/" + variables.github
            : "https://github.com/4geeksacademy"
        }"><i class="fab fa-github"></i></a></li>
        <li><a href="${
          variables.linkedin
            ? "https://linkedin.com/school/" + variables.linkedin
            : "https://linkedin.com/school/4geeksacademy"
        }"><i class="fab fa-linkedin"></i></a></li>
        <li><a href="${
          variables.instagram
            ? "https://instagram.com/" + variables.instagram
            : "https://instagram.com/4geeksacademy"
        }"><i class="fab fa-instagram"></i></a></li>
      </ul>
    </div>
  `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    includeCover: true,
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    socialMediaPosition: "position-left",
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // Render the card for the first time

  // Add change listeners to all inputs with class 'picker'
  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for"); // Get the 'for' attribute value
      let values = {};
      // Determine the value based on input type
      values[attribute] =
        this.value === "" || this.value === "null"
          ? null
          : this.value === "true"
          ? true
          : this.value === "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // Render again the card with updated values
    });
  });
};
