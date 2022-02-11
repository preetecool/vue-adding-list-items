Vue.createApp({
	data() {
		return {
			goals: [],
			inputValue: "",
		};
	},
	methods: {
		addGoal() {
			this.goals.push(this.inputValue);
			this.inputValue = "";
		},
	},
}).mount("#app");

// Imperative(step by step) Approach
// const buttonElement = document.querySelector("button");
// const inputElement = document.querySelector("input");
// const listElement = document.querySelector("ul");

// const addGoal = () => {
// 	const inputValue = inputElement.value;
// 	const listItemElement = document.createElement("li");
// 	listItemElement.textContent = inputValue;
// 	listElement.appendChild(listItemElement);
// 	inputElement.value = "";
// };

// buttonElement.addEventListener("click", addGoal);
