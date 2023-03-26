console.log('Test');

// Sélectionner les boutons filtres
const filterButtons = document.querySelectorAll('[data-filter]');

// Ajouter un écouteur d'évènement pour chaque bouton
filterButtons.forEach(button => {
	button.addEventListener('click', () => {
		const category = button.getAttribute('data-filter');
		filterItems(category);
	});
  });

// Fonction de filtrage d'éléments
function filterItems(category) {
	const items = document.querySelectorAll('.grid__item');

	// Parcourir chaque élément et affichez l'élément s'il apparatient à la catégorie
	items.forEach(item => {
		if (category === 'all' || item.getAttribute('data-category') === category) {
			item.style.display = 'block';
		} else {
			item.style.display = 'none';
		}
	});
}




// Sélectionnez la liste déroulante
const categorySelect = document.getElementById('category-select');

// Ajouter un écouteur d'événement pour la sélection d'option
categorySelect.addEventListener('change', () => {
	const category2 = categorySelect.value;
	filterItems2(category2);
});

// Fonction de filtrage d'éléments
function filterItems2(category2) {
	// Sélectionner tous les éléments de catégorie
	const items = document.querySelectorAll('.category');

	// Parcourez chaque élément et affichez-le s'il appartient à la catégorie spécifiée
	items.forEach(item => {
		if (category2 === 'all' || item.getAttribute('data-category') === category2) {
			item.style.display = 'block';
		} else {
			item.style.display = 'none';
		}
	});
}





// Sélectionne la liste déroulante
var select = document.getElementById("mySelect");

// Modifie le texte et le style de chaque option
for (var i = 0; i < select.options.length; i++) {
  var option = select.options[i];
  option.style.backgroundColor = "#ff0000";
  option.style.color = "#ffffff";
  option.style.fontSize = "16px";
  option.style.padding = "5em 1em";
  option.style.border = "none";
  option.style.cursor = "pointer";
}

// Modifie le texte et le style de l'option sélectionnée
select.addEventListener("change", function() {
  var selectedOption = this.options[this.selectedIndex];
  selectedOption.textContent = "Option sélectionnée : " + selectedOption.textContent;
  selectedOption.style.backgroundColor = "#333";
  selectedOption.style.color = "#fff";
});