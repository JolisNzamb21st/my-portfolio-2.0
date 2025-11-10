let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu(){
  if(menuList.style.maxHeight == "0px"){
    menuList.style.maxHeight = "300px";
  }
  else{
    menuList.style.maxHeight = "0px";
  }
}

function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  let title = document.getElementById("title");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here
    showPopup(true)

    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "__"+"\<b\>"+title.value+"\</b\>"+""+ "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    title.value= "",
    recommendation.value = "";
    
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible';
    // document.getElementById("confirm").appendChild();
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}

// let isShown = false;

// function showMoreSkills() {
//   const otherSkills = document.getElementsByClassName('other_skills');
//   const button = document.getElementById('showSkills');

//   for (let i = 0; i < otherSkills.length; i++) {
//     otherSkills[i].style.display = isShown ? 'none' : 'block';
//   }

//   button.innerText = isShown ? 'Show More Skills' : 'Show Less';

//   if (!isShown) {
//     setTimeout(() => {
//       button.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }, 300); // delay a bit for smoother experience
//   }

//   isShown = !isShown;
// }

// let isShown = false;

// function showMoreSkills() {
//   const otherSkills = document.getElementsByClassName('other_skills');
//   const button = document.getElementById('showSkills');

//   if (isShown) {
//     // Reload to reset page and styles
//     location.reload();
//     return;
//   }

//   for (let i = 0; i < otherSkills.length; i++) {
//     otherSkills[i].style.display = 'block';
//   }

//   button.innerText = 'Show Less';

//   setTimeout(() => {
//     button.scrollIntoView({ behavior: 'smooth', block: 'center' });
//   }, 300);

//   isShown = true;
// }


let isShown = false;

function showMoreSkills() {
  const otherSkills = document.getElementsByClassName('other_skills');
  const button = document.getElementById('showSkills');

  if (isShown) {
    // Scroll to the first visible skill before reloading
    const firstSkill = document.querySelector('.skill:not(.other_skills)');
    if (firstSkill) {
      firstSkill.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Wait a moment after scroll, then reload
    setTimeout(() => {
      location.reload();
    }, 600); // Wait just enough for scroll animation

    return;
  }

  // Show hidden skills
  for (let i = 0; i < otherSkills.length; i++) {
    otherSkills[i].style.display = 'block';
  }

  button.innerText = 'Show Less';

  // Scroll to button after showing
  setTimeout(() => {
    button.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 300);

  isShown = true;
};
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress-bar");

  function animateBars() {
    progressBars.forEach(bar => {
      const level = bar.getAttribute("data-level");
      const rect = bar.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        bar.style.width = level;
      }
    });
  }

  window.addEventListener("scroll", animateBars);
  animateBars(); // trigger once if visible
});
