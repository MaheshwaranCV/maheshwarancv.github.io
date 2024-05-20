AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Customer Portal",
    cardImage: "assets/images/project-page/CusPortal.png",
    description: "A quiz app built using basic react.",
    Githublink: "https://github.com/MaheshwaranCV/Cust-Ven-Emp_Portals",
    Videolink: "https://drive.google.com/file/d/1KUOWfeLsVsi1_8Fck0LCkEpMmWkn2azE/view?usp=sharing",
    Previewlink: "https://cust-ven-emp-portals.netlify.app/",
  },
  {
    title: "Vendor Portal",
    cardImage: "assets/images/project-page/VenPortal.jpg",
    description: "A chess engine for a popular game dev engine.",
    Githublink: "https://github.com/MaheshwaranCV/Cust-Ven-Emp_Portals",
    Videolink: "https://drive.google.com/file/d/1KUOWfeLsVsi1_8Fck0LCkEpMmWkn2azE/view?usp=sharing",
    Previewlink: "https://cust-ven-emp-portals.netlify.app/",
  },
  {
    title: "Employee Portal",
    cardImage: "assets/images/project-page/EmpPortal.jpg",
    description: "Flappy bird game built using React.js",
    Githublink: "https://github.com/MaheshwaranCV/Cust-Ven-Emp_Portals",
    Videolink: "https://drive.google.com/file/d/1KUOWfeLsVsi1_8Fck0LCkEpMmWkn2azE/view?usp=sharing",
    Previewlink: "https://cust-ven-emp-portals.netlify.app/",
  },
  {
    title: "Maintenance Portal",
    cardImage: "assets/images/project-page/MaintenancePortal.jpg",
    description: "Exercise tracker built using basic redux.",
    Githublink: "https://github.com/MaheshwaranCV/Maintenance-Portal",
    Videolink: "",
    Previewlink: "https://maintenance-portal.netlify.app/",
  },
  {
    title: "Shop Floor Portal",
    cardImage: "assets/images/project-page/SFPPortal.jpg",
    description: "Recipe Ingredient Parser built using JavaScript.",
    Githublink: "https://github.com/MaheshwaranCV/Shop-Floor-Portal",
    Videolink: "https://drive.google.com/file/d/1xQ9ud3lE5QpfSJ8OfE2BOw8Nc1HiR-lS/view?usp=sharing",
    Previewlink: "",
  },
  {
    title: "EHSM Portal",
    cardImage: "assets/images/project-page/EHSMPortal.jpg",
    description: "Poker game built using typescript.",
    Githublink: "https://github.com/MaheshwaranCV/EHSM-Portal",
    Videolink: "https://drive.google.com/file/d/1kn_i6T4_JNCDFS2LGOOSVPOq4FsHd4t7/view?usp=sharing",
    Previewlink: "",
  },
  {
    title: "Quality Portal",
    cardImage: "assets/images/project-page/QualityPortal.jpg",
    description: "Tested a React Tic Tac Toe Game using Jest and React Testing Library.",
    Githublink: "https://github.com/MaheshwaranCV/Quality-Portal",
    Videolink: "https://drive.google.com/file/d/1kn_i6T4_JNCDFS2LGOOSVPOq4FsHd4t7/view?usp=sharing",
    Previewlink: "",
  },
  {
    title: "Sales Forecast Application",
    cardImage: "assets/images/project-page/SalesForecastApp.jpg",
    description: "Personal book library app built using JavaScript.",
    Githublink: "https://github.com/MaheshwaranCV/Sales-Forecast-Application",
    Videolink: "",
    Previewlink: "https://sales-forecasting.netlify.app/",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink, Videolink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
                <div class="title-div">
                  <h1 class="title"><a href="#">${title}</a></h1>
                </div>
                <ul class="menu-content"><br>`;
    
    if (Githublink) {
      output += `<li><a href="${Githublink}" class="social-icon" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>`;
    }
    
    if (Videolink) {
      output += `<li><a href="${Videolink}" class="social-icon" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-youtube"><path d="M23.498 6.186a3.003 3.003 0 0 0-2.119-2.121C19.604 3.5 12 3.5 12 3.5s-7.604 0-9.379.565a3.003 3.003 0 0 0-2.119 2.12C0.5 8.561 0.5 12 0.5 12s0 3.439.564 5.814a3.003 3.003 0 0 0 2.12 2.119C4.396 20.5 12 20.5 12 20.5s7.604 0 9.379-.565a3.003 3.003 0 0 0 2.119-2.12C23.5 15.439 23.5 12 23.5 12s0-3.439-.002-5.814zM9.751 15.028v-6.05l6.047 3.029-6.047 3.021z"/></svg></a></li>`;
    }

    if (Previewlink) {
      output += `<li><a href="${Previewlink}" class="social-icon" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>`;
    }
    
    output += `
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCards);

document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
