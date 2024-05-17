/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Effect of Dimples on the Blades of a Vertical Axis Wind Turbine",
    Previewlink: "https://pubs.aip.org/aip/acp/article-lookup/doi/10.1063/5.0172422",
    authors:
      "Dinesh Kumar S K, Maheshwaran C V, Hari Kiran B, Adithiyan S, Lokesh Kumar, Balaji N",
    conferences:
      "3rd International Conference on Innovations in Thermal, Manufacturing, Structural and Environmental Engineering - ICITMSEE2022",
    researchYr: 2023,
    citebox: "popup1",
    image: "assets/images/research-page/DimpledBlade.png",
    citation: {
      vancouver:
        "Dinesh Kumar S K, Maheshwaran C V, Hari Kiran B, Adithiyan S, Lokesh Kumar, Balaji N. Effect of Dimples on the Blades of a Vertical Axis Wind Turbine. 3rd International Conference on Innovations in Thermal, Manufacturing, Structural and Environmental Engineering - ICITMSEE2022. 2023.",
    },
    abstract:
    "Dimpled aerofoil (NACA 0015) on a wind turbine blade reduces drag and turbulence, increasing blade velocity and power generation, validated through computational and practical tests.",  
    absbox: "absPopup1",
  },

  {
    title: "Pneumatic Powered Drone Catcher Gun",
    Previewlink: "https://www.doi.org/10.55041/IJSREM30672",
    authors:
      "Vetri Velmurugan K, Maheshwaran C V, Balabadra Abhizgn, Jagadeesh C",
    conferences:
      "International Journal of Scientific Research in Engineering and Management (IJSREM)",
    researchYr: 2024,
    citebox: "popup2",
    image: "assets/images/research-page/PneumaticDroneCatcher.png",
    citation: {
      vancouver:
        "Vetri Velmurugan K, Maheshwaran C V, Balabadra Abhizgn, Jagadeesh C. Pneumatic Powered Drone Catcher Gun. International Journal of Scientific Research in Engineering and Management (IJSREM) 2024.",
    },
    abstract:
      "A portable drone-catching system utilizing a net-propelling gun powered by high-pressure air, designed to intercept and capture unauthorized drones intact for analysis and evidence retrieval.",
    absbox: "absPopup2",
  },

  {
    title: "Design and Fabrication of Solar Power Tiller",
      Previewlink: "https://www.doi.org/10.55041/IJSREM30844",
    authors: "Vetri Velmurugan K, Maheshwaran C V, Balabadra Abhizgn, Jagadeesh C, Gokul V",
    conferences:
      "International Journal of Scientific Research in Engineering and Management (IJSREM)",
    researchYr: 2024,
    citebox: "popup3",
    image: "assets/images/research-page/SolarTiller.png",
    citation: {
      vancouver:
        "Vetri Velmurugan K, Maheshwaran C V, Balabadra Abhizgn, Jagadeesh C, Gokul V. Design and Fabrication of Solar Power Tiller. International Journal of Scientific Research in Engineering and Management (IJSREM) 2024.",
    },
    abstract:
      "Development of a solar-powered rotary tiller for soil cultivation and weed management in India, addressing affordability issues for small-scale farmers with efficient, self-guided technology.",
    absbox: "absPopup3",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    
                    <a href="${Previewlink}" target="_blank" class="paperTitle"> ${title} </a> <!-- Added target="_blank" here -->
                    <div class = "authors"> ${authors} </div>
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);