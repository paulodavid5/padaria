const categorySelect = document.getElementById("categorySelect");
const app = document.getElementById("app");

// Function to load and display JSON data
function loadData(selectedOption) {
  // Replace 'data1.json' and 'data2.json' with your actual JSON data sources
  fetch(selectedOption)
    .then((response) => response.json())
    .then((data) => {
      app.innerHTML = ""; // Clear the existing content

      const categories = data.categories;
      categories.forEach((category) => {
        const categoryContainer = document.createElement("div");
        categoryContainer.classList.add("category");
        categoryContainer.innerHTML = `<h2>${category.name}</h2>`;
        app.appendChild(categoryContainer);

        category.elements.forEach((element) => {
          const card = document.createElement("div");
          card.classList.add("card");
          card.innerHTML = `
            <h2 class="person">${element.name}</h2>
            
            <div id="details">
                    ${
                      element.torradas !== undefined
                        ? `<div class="pao">Torradas<h2 class="quantity">${element.torradas}</h2></div>`
                        : "<p></p>"
                    }
                    ${
                      element.brancas !== undefined
                        ? `<div class="pao">Brancas<h2 class="quantity" style="background:cadetblue">${element.brancas}</h2></div>`
                        : "<p></p>"
                    }
                    ${
                      element.broas !== undefined
                        ? `<div class="pao">Broas<h2 class="quantity" style="background:darkkhaki">${element.broas}</h2></div>`
                        : "<p></p>"
                    }
            </div>
            <div>
                    ${
                      element.subdescription !== undefined
                        ? `<small class="lugar">${element.subdescription}</small>`
                        : "<small></small>"
                    }
                </div>
            
          `;
          categoryContainer.appendChild(card);
        });
      });
    })
    .catch((error) => console.error("Error loading data:", error));
}

// Event listener to load data when the select option changes
categorySelect.addEventListener("change", function () {
  const selectedOption = categorySelect.value;
  loadData(selectedOption);
});

// Initial data load
loadData(categorySelect.value); // Load data based on the default selected option
