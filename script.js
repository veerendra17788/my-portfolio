/* Progress bar Effect */
const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercents = [95, 93, 94, 87];

window.addEventListener("scroll", () => {
  mainFn();
});

const mainFn = () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      navbarLinks.forEach((navbarLink) => {
        navbarLink.classList.remove("change");
      });
      navbarLinks[i].classList.add("change");
    }
  });

  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    document.querySelectorAll(".progress-percent").forEach((el, i) => {
      el.style.width = `${progressBarPercents[i]}%`;
      el.previousElementSibling.firstElementChild.textContent =
        progressBarPercents[i];
    });
  }
};

mainFn();

window.addEventListener("resize", () => {
  window.location.reload();
});


particlesJS('particles-js', { //particles effect
	particles: {
	  number: { value: 50 },
	  color: { value: '#ffffff' },
	  shape: { type: 'circle' },
	  opacity: { value: 0.3 },
	  size: { value: 3 },
	  move: { enable: true, speed: 1 }
	},
	interactivity: {
	  events: { onhover: { enable: true, mode: 'repulse' } },
	  modes: { repulse: { distance: 100 } }
	},
	retina_detect: true
  });
  

/* Typing and Deleting Effect */
// List of sentences
var _CONTENT = [ 
	"SOFTWARE ENGINEER", 
	"WEB DEVELOPER",
    "OPEN SOURCE CONTRIBUTOR",
    "CODER"
];

var _PART = 0; // Current sentence being processed
var _PART_INDEX = 0; // Character number of the current sentence being processed 
var _INTERVAL_VAL; // Holds the handle returned from setInterval
var _ELEMENT = document.querySelector("#text-name"); // Element that holds the text
var _CURSOR = document.querySelector("#cursor"); // Cursor element 

// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		// Hide the cursor
		_CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}


const skillsByCategory = {
	frontend: [
	  { name: "HTML", percent: 95 },
	  { name: "CSS", percent: 93 },
	  { name: "JavaScript", percent: 94 },
	  { name: "React", percent: 87 },
	],
	backend: [
	  { name: "Node.js", percent: 90 },
	  { name: "Express", percent: 85 },
	  { name: "MongoDB", percent: 80 },
	  { name: "MySQL", percent: 85 },
	  { name: "Postgres", percent: 75 },
	],
	ml: [
	  { name: "Python", percent: 80 },
	  { name: "Scikit-learn", percent: 60 },
	  { name: "Pandas/Numpy", percent: 70 },
	  { name: "Matplotlib", percent: 60 },
	],
	soft: [
	  { name: "Communication", percent: 85 },
	  { name: "Teamwork", percent: 90 },
	  { name: "Time Management", percent: 80 },
	  { name: "Leadership", percent: 89 },
	],
	others: [
	  { name: "Git & GitHub", percent: 80 },
	  { name: "C / C++", percent: 85 },
	  { name: "Docker", percent: 85 },
	  { name: "Figma", percent: 83 },
	  { name: "Canva", percent: 89 },
	]
  };
  
  function renderSkills(category) {
	const skillsContainer = document.getElementById("skills-container");
	skillsContainer.innerHTML = "";
	const skills = skillsByCategory[category];
  
	skills.forEach(skill => {
	  const skillHTML = `
		<div class="progress-bar">
		  <p class="progress-text">${skill.name} <span>${skill.percent}</span>%</p>
		  <div class="progress-percent" style="width: 0;"></div>
		</div>
	  `;
	  skillsContainer.innerHTML += skillHTML;
	});
  
	// Animate progress bars
	setTimeout(() => {
	  const bars = document.querySelectorAll(".progress-percent");
	  bars.forEach((bar, i) => {
		bar.style.width = `${skills[i].percent}%`;
	  });
	}, 100);
  }
  
  // Handle button clicks
  document.querySelectorAll(".category-btn").forEach(btn => {
	btn.addEventListener("click", () => {
	  document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
	  btn.classList.add("active");
	  renderSkills(btn.dataset.category);
	});
  });
  
  // Load default
  renderSkills("frontend");
  
// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}
// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);