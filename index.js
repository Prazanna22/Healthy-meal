const meals = {
            Monday: {
                breakfast: "Idli with Sambar and Coconut Chutney (₹18)",
                lunch: "Lemon Rice with Vegetable Stir-fry and Curd (₹24)",
                snack: "Roasted Peanuts with Jaggery (₹5)",
                cost: "Total Cost for Monday: ₹47"
            },
            Tuesday: {
                breakfast: "Ragi Dosa with Tomato Chutney (₹15)",
                lunch: "Chapathi with Dhal and Carrot-Cucumber Salad (₹22)",
                snack: "Sundal (Channa with Coconut) (₹8)",
                cost: "Total Cost for Tuesday: ₹45"
            },
            Wednesday: {
                breakfast: "Pongal with Ghee and Vegetable Sambar (₹20)",
                lunch: "Sambar Rice with Boiled Egg (₹18)",
                snack: "Banana (₹6)",
                cost: "Total Cost for Wednesday: ₹44"
            },
            Thursday: {
                breakfast: "Uthappam (Vegetable) with Mint Chutney (₹15)",
                lunch: "Chapathi with Dhal and Beetroot Poriyal (₹25)",
                snack: "Aval Upma (Beaten Rice) (₹8)",
                cost: "Total Cost for Thursday: ₹48"
            },
            Friday: {
                breakfast: "Pesarattu (Green Gram Dosa) with Ginger Chutney (₹17)",
                lunch: "Tamarind Rice with Spinach and Curd (₹23)",
                snack: "Sweet Pongal (with Jaggery) (₹10)",
                cost: "Total Cost for Friday: ₹50"
            }
        };

function filterMeals(day) {
    document.getElementById("day-title").textContent = day;
    document.getElementById("breakfast").textContent = meals[day].breakfast;
    document.getElementById("lunch").textContent = meals[day].lunch;
    document.getElementById("snack").textContent = meals[day].snack;
    document.getElementById("cost").textContent = meals[day].cost;

    // Remove active class from all buttons
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));

    // Add active class to the clicked button
    document.querySelector(`button[onclick="filterMeals('${day}')"]`).classList.add("active");
}

// Initialize with Monday's data
filterMeals('Monday');
