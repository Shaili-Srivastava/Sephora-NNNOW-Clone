data = JSON.parse(localStorage.getItem("SephoraMainData")) || []

let Face = () => {
    let filteredData = data.filter((el) => {
        return el.Section == "FACE";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let EYE = () => {
    let filteredData = data.filter((el) => {
        return el.Section == "EYE";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let LIP = () => {
    let filteredData = data.filter((el) => {
        return el.Section == "LIP";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let CHEEK = () => {
    let filteredData = data.filter((el) => {
        return el.Section == "CHEEK";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let NAILMAKEUP = () => {
    let filteredData = data.filter((el) => {
        return el.Section == "NAIL MAKEUP";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let MAKEUPACCESSORIES = () => {
    let filteredData = data.filter((el) => {
        return el.Section == "MAKEUP ACCESSORIES";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let VEGAN = () => {
    let filteredData = data.filter((el) => {
        return el.Section == "VEGAN";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let MOISTURIZERS = () => {
    let filteredData = data.filter((el) => {
        return el.Section == "MOISTURIZERS";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let CLEANSERS = () => {
    let filteredData = data.filter((el) => {
        return el.Section == "CLEANSERS";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let TREATMENTS = () => {
    let filteredData = data.filter((el) => {
        return el.Section == "TREATMENTS & HIGH TECH TOOLS";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let MASKS = () => {
    let filteredData = data.filter((el) => {
        return el.Section == "MASKS";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let BATHSHOWER = () => {
    let filteredData = data.filter((el) => {
        return el.Section == "BATH & SHOWER";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let BODYMOISTURIZERS = () => {
    let filteredData = data.filter((el) => {
        return el.Section == "BODY MOISTURIZERS";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let WOMEN = () => {
    let filteredData = data.filter((el) => {
        return el.Section == "WOMEN";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let MEN = () => {
    let filteredData = data.filter((el) => {
        return el.Section == "MEN";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let SHAMPOOCONDITIONER = () => {
    let filteredData = data.filter((el) => {
        return el.Section == "SHAMPOO & CONDITIONER";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let BRUSHES = () => {
    let filteredData = data.filter((el) => {
        return el.Section == "BRUSHES";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let TOOLS = () => {
    let filteredData = data.filter((el) => {
        return el.Section == "TOOLS";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let Foundation = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Foundation";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let BBCCCream = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "BB & CC Cream";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let EyePalettes = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Eye Palettes";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let Mascara = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Mascara";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let Lipstick = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Lipstick";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let LipStain = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Lip Stain";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let Blush = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Blush";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let Bronzer = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Bronzer";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let NailPolish = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Nail Polish";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let NailCare = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Nail Care";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let TweezersEyebrowTools = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Tweezers & Eyebrow Tools";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let MakeupRemovers = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Makeup Removers";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let Eye = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Eye";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let Moisturizers = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Moisturizers";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let NightCreams = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Night Creams";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let FaceWashCleansers = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Face Wash & Cleansers";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let FaceSerums = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Face Serums";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let CleansingTools = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Cleansing Tools";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let FaceMasks = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Face Masks";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let SheetMasks = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Sheet Masks";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let BodyWashandShowerGel = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Body Wash and Shower Gel";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let ScrubandExfoliants = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Scrub and Exfoliants";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let BodyLotionsBodyOils = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Body Lotions & Body Oils";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let HandCreamFootCream = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Hand Cream & Foot Cream";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let FaceCare = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Face Care";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let Perfume = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Perfume";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let MistsandDeodorants = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Mists and Deodorants";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let BodySpraysDeodorant = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Body Sprays & Deodorant";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let Shampoo = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Shampoo";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let Conditioner = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Conditioner";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let FaceBrushes = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Face Brushes";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let EyeBrushes = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Eye Brushes";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let SpongesApplicators = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Sponges & Applicators";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}

let FaceTools = () => {
    let filteredData = data.filter((el) => {
        return el.Sub_Section == "Face Tools";
    })
    localStorage.setItem("sectionData", JSON.stringify(filteredData));
    window.location.href = "sub_category.html";
}
let search = () => {
    if (event.key === "Enter") {
        let input = document.getElementById("searchBar").value;
        input = input.toLowerCase();

        let temp = JSON.parse(localStorage.getItem("SephoraMainData"));

        let filtered_list = temp.filter(function (elem) {
            return (elem.Name).toLowerCase().includes(input);
        });

        localStorage.setItem("sectionData", JSON.stringify(filtered_list));
        window.location.href = "sub_category.html";
    }
}