import { displyFrameWork, display } from "../component/main.js";

let main = document.querySelector("#main");
main.innerHTML = displyFrameWork();

let mainImg = document.getElementById("mainPageImg")
mainImg.src =   "https://logan.nnnow.com/content/dam/nnnow-project/27-sep-2021/SkincareDesktop.jpg"

// let data = [{
//     image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
//     name: "CLINIQUE",
//     description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
//     price: 1956,
// },
// {
//     image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
//     name: "CLINIQUE",
//     description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
//     price: 1956,
// },
// {
//     image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
//     name: "CLINIQUE",
//     description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
//     price: 1956,
// },
// {
//     image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
//     name: "CLINIQUE",
//     description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
//     price: 1956,
// },
// {
//     image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
//     name: "CLINIQUE",
//     description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
//     price: 1956,
// },
// {
//     image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
//     name: "CLINIQUE",
//     description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
//     price: 1956,
// },
// {
//     image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
//     name: "CLINIQUE",
//     description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
//     price: 1956,
// },
// {
//     image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
//     name: "CLINIQUE",
//     description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
//     price: 1956,
// },
// {
//     image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
//     name: "CLINIQUE",
//     description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
//     price: 1956,
// },
// {
//     image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
//     name: "CLINIQUE",
//     description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
//     price: 1956,
// },
// {
//     image: "https://cdn16.nnnow.com/web-images/medium/styles/Z129L8O6GRT/1525241175054/1.jpg",
//     name: "CLINIQUE",
//     description: "Beyond Perfecting™ Super Concealer Camouflage + 24-Hour Wear- 14 Moderately Fair",
//     price: 1956,
// },
// ];

let data =  [
    {
      "Product": "SKINCARE",
      "Section": "MOISTURIZERS",
      "Sub_Section": "Moisturizers",
      "Image_1": "https://cdn00.nnnow.com/web-images/large/styles/58VGDBVD7HQ/1646902745349/1.jpg",
      "Image_2": "https://cdn09.nnnow.com/web-images/large/styles/58VGDBVD7HQ/1646902745343/2.jpg",
      "Image_3": "https://cdn07.nnnow.com/web-images/large/styles/58VGDBVD7HQ/1646902745327/11.jpg",
      "Name": "CLINIQUE",
      "Description": "New Moisture Surge™ 100H Auto-Replenishing Hydrator",
      "Price": "950",
      "Offer_Price": "",
      "Offer": "",
      "Size": "15ML",
      "Rating": "5",
      "id": 1
    },
    {
      "Product": "SKINCARE",
      "Section": "MOISTURIZERS",
      "Sub_Section": "Moisturizers",
      "Image_1": "https://cdn17.nnnow.com/web-images/large/styles/T1CA0US0QOH/1614353172645/1.jpg",
      "Image_2": "https://cdn11.nnnow.com/web-images/large/styles/T1CA0US0QOH/1614353172642/2.jpg",
      "Image_3": "https://cdn10.nnnow.com/web-images/large/styles/T1CA0US0QOH/1614353172638/6.jpg",
      "Name": "FOREST ESSENTIALS",
      "Description": "Soundarya Radiance Cream With 24 Karat Gold And SPF 25",
      "Price": "3575",
      "Offer_Price": "",
      "Offer": "",
      "Size": "50gm",
      "Rating": "5",
      "id": 2
    },
    {
      "Product": "SKINCARE",
      "Section": "MOISTURIZERS",
      "Sub_Section": "Moisturizer",
      "Image_1": "https://cdn11.nnnow.com/web-images/large/styles/7I89U5NMD9A/1605083609928/1.jpg",
      "Image_2": "https://cdn04.nnnow.com/web-images/large/styles/7I89U5NMD9A/1605083609924/2.jpg",
      "Image_3": "https://cdn09.nnnow.com/web-images/large/styles/7I89U5NMD9A/1605083609926/3.jpg",
      "Name": "ELIZABETH ARDEN",
      "Description": "Ceramide Lift And Firm Day Cream SPF 30",
      "Price": "5800",
      "Offer_Price": "",
      "Offer": "",
      "Size": "50ml",
      "Rating": "",
      "id": 3
    },
    {
      "Product": "SKINCARE",
      "Section": "MOISTURIZERS",
      "Sub_Section": "Moisturizers",
      "Image_1": "https://cdn17.nnnow.com/web-images/large/styles/O43RBR0M6UA/1636700674079/1.jpg",
      "Image_2": "https://cdn04.nnnow.com/web-images/large/styles/O43RBR0M6UA/1636700674068/2.jpg",
      "Image_3": "",
      "Name": "MARIO BADESCU",
      "Description": "Facial Spray With Aloe, Herbs & Rosewater",
      "Price": "475",
      "Offer_Price": "",
      "Offer": "",
      "Size": "59ML",
      "Rating": "",
      "id": 4
    },
    {
      "Product": "SKINCARE",
      "Section": "MOISTURIZERS",
      "Sub_Section": "Moisturizers",
      "Image_1": "https://cdn12.nnnow.com/web-images/large/styles/8EB9C59K93C/1495781898199/1.jpg",
      "Image_2": "https://cdn02.nnnow.com/web-images/large/styles/8EB9C59K93C/1495781898200/2.jpg",
      "Image_3": "https://cdn13.nnnow.com/web-images/large/styles/8EB9C59K93C/1618914252230/50.jpg",
      "Name": "SHISEIDO",
      "Description": "Benefiance NutriPerfect Day Cream SPF 15",
      "Price": "5400",
      "Offer_Price": "",
      "Offer": "",
      "Size": "50ML",
      "Rating": "",
      "id": 5
    },
    {
      "Product": "SKINCARE",
      "Section": "MOISTURIZERS",
      "Sub_Section": "Moisturizers",
      "Image_1": "https://cdn08.nnnow.com/web-images/large/styles/5UDBXH8RQG4/1600071238628/1.jpg",
      "Image_2": "https://cdn12.nnnow.com/web-images/large/styles/5UDBXH8RQG4/1600071238627/2.jpg",
      "Image_3": "https://cdn11.nnnow.com/web-images/large/styles/5UDBXH8RQG4/1600071238627/3.jpg",
      "Name": "SEPHORA COLLECTION",
      "Description": "Moringa Oil Illuminating Hydrator - Radiance & Smoothing",
      "Price": "1450",
      "Offer_Price": "",
      "Offer": "",
      "Size": "50ML",
      "Rating": "",
      "id": 6
    },
    {
      "Product": "SKINCARE",
      "Section": "MOISTURIZERS",
      "Sub_Section": "Night Creams",
      "Image_1": "https://cdn03.nnnow.com/web-images/large/styles/1Q20DT4JW0Q/1519035480214/1.jpg",
      "Image_2": "https://cdn05.nnnow.com/web-images/large/styles/1Q20DT4JW0Q/1519035480215/2.jpg",
      "Image_3": "https://cdn11.nnnow.com/web-images/large/styles/1Q20DT4JW0Q/1618914211432/50.jpg",
      "Name": "SHISEIDO",
      "Description": "Lucent MultiBright Night Cream",
      "Price": "6800",
      "Offer_Price": "",
      "Offer": "",
      "Size": "50ML",
      "Rating": "",
      "id": 7
    },
    {
      "Product": "SKINCARE",
      "Section": "MOISTURIZERS",
      "Sub_Section": "Night Creams",
      "Image_1": "https://cdn16.nnnow.com/web-images/large/styles/JIURGLA7V2F/1614352480243/1.jpg",
      "Image_2": "https://cdn08.nnnow.com/web-images/large/styles/JIURGLA7V2F/1614352480239/2.jpg",
      "Image_3": "https://cdn19.nnnow.com/web-images/large/styles/JIURGLA7V2F/1614352480231/5.jpg",
      "Name": "FOREST ESSENTIALS",
      "Description": "Ojas Glow Replenishing Night Beauty Balm",
      "Price": "2050",
      "Offer_Price": "",
      "Offer": "",
      "Size": "30gm",
      "Rating": "",
      "id": 8
    },
    {
      "Product": "SKINCARE",
      "Section": "MOISTURIZERS",
      "Sub_Section": "Night Creams",
      "Image_1": "https://cdn06.nnnow.com/web-images/large/styles/2BJTCFJUXT0/1628653705438/1.jpg",
      "Image_2": "https://cdn08.nnnow.com/web-images/large/styles/2BJTCFJUXT0/1628653705435/2.jpg",
      "Image_3": "https://cdn01.nnnow.com/web-images/large/styles/2BJTCFJUXT0/1628653705430/4.jpg",
      "Name": "FOREST ESSENTIALS",
      "Description": "Kumkumadi Night Cream",
      "Price": "2225",
      "Offer_Price": "",
      "Offer": "",
      "Size": "30GM",
      "Rating": "",
      "id": 9
    },
    {
      "Product": "SKINCARE",
      "Section": "MOISTURIZERS",
      "Sub_Section": "Night Creams",
      "Image_1": "https://cdn15.nnnow.com/web-images/large/styles/3ZTOT97PBR5/1636699226877/1.jpg",
      "Image_2": "https://cdn08.nnnow.com/web-images/large/styles/3ZTOT97PBR5/1636699226868/2.jpg",
      "Image_3": "",
      "Name": "MARIO BADESCU",
      "Description": "Seaweed Night Cream",
      "Price": "2050",
      "Offer_Price": "",
      "Offer": "",
      "Size": "28gm",
      "Rating": "",
      "id": 10
    },
    {
      "Product": "SKINCARE",
      "Section": "MOISTURIZERS",
      "Sub_Section": "Night Creams",
      "Image_1": "https://cdn01.nnnow.com/web-images/large/styles/AL1X3TN9XHV/1644913480919/1.jpg",
      "Image_2": "https://cdn13.nnnow.com/web-images/large/styles/AL1X3TN9XHV/1644913480915/3.jpg",
      "Image_3": "https://cdn07.nnnow.com/web-images/large/styles/AL1X3TN9XHV/1644913480900/7.jpg",
      "Name": "SEPHORA COLLECTION",
      "Description": "Brightening Eye Cream",
      "Price": "1600",
      "Offer_Price": "",
      "Offer": "",
      "Size": "20ML",
      "Rating": "",
      "id": 11
    },
    {
      "Product": "SKINCARE",
      "Section": "MOISTURIZERS",
      "Sub_Section": "Night Creams",
      "Image_1": "https://cdn19.nnnow.com/web-images/large/styles/8WWR0RRD4JQ/1495781898202/1.jpg",
      "Image_2": "https://cdn01.nnnow.com/web-images/large/styles/8WWR0RRD4JQ/1495781898203/2.jpg",
      "Image_3": "https://cdn04.nnnow.com/web-images/large/styles/8WWR0RRD4JQ/1618914252271/50.jpg",
      "Name": "SHISEIDO",
      "Description": "Benefiance NutriPerfect Night Cream",
      "Price": "5700",
      "Offer_Price": "",
      "Offer": "",
      "Size": "50ML",
      "Rating": "",
      "id": 12
    },
    {
      "Product": "SKINCARE",
      "Section": "CLEANSERS ",
      "Sub_Section": "Face Wash & Cleansers",
      "Image_1": "https://cdn18.nnnow.com/web-images/large/styles/NCTCTND6XQU/1602058416171/1.jpg",
      "Image_2": "https://cdn13.nnnow.com/web-images/large/styles/NCTCTND6XQU/1602058416166/2.jpg",
      "Image_3": "https://cdn00.nnnow.com/web-images/large/styles/NCTCTND6XQU/1602058416168/3.jpg",
      "Name": "SEPHORA COLLECTION",
      "Description": "All-Over Face & Body Solid Cleanser - Cactus",
      "Price": "600",
      "Offer_Price": "360",
      "Offer": "40",
      "Size": "75gm",
      "Rating": "",
      "id": 13
    },
    {
      "Product": "SKINCARE",
      "Section": "CLEANSERS",
      "Sub_Section": "Face Wash & Cleansers",
      "Image_1": "https://cdn12.nnnow.com/web-images/large/styles/9UPVRHTJNGY/1585571862833/1.jpg",
      "Image_2": "",
      "Image_3": "",
      "Name": "PIXI",
      "Description": "Glow Mud Cleanser",
      "Price": "1880",
      "Offer_Price": "",
      "Offer": "",
      "Size": "135ML",
      "Rating": "",
      "id": 14
    },
    {
      "Product": "SKINCARE",
      "Section": "CLEANSERS",
      "Sub_Section": "Face Wash & Cleansers",
      "Image_1": "https://cdn17.nnnow.com/web-images/large/styles/Y2B6WPOZP6V/1602058416238/1.jpg",
      "Image_2": "https://cdn10.nnnow.com/web-images/large/styles/Y2B6WPOZP6V/1602058416234/2.jpg",
      "Image_3": "https://cdn03.nnnow.com/web-images/large/styles/Y2B6WPOZP6V/1602058416236/3.jpg",
      "Name": "SEPHORA COLLECTION",
      "Description": "Men Exfoliating Cleansing Gel",
      "Price": "1320",
      "Offer_Price": "792",
      "Offer": "40",
      "Size": "200ML",
      "Rating": "",
      "id": 15
    },
    {
      "Product": "SKINCARE",
      "Section": "CLEANSERS",
      "Sub_Section": "Face Wash & Cleansers",
      "Image_1": "https://cdn05.nnnow.com/web-images/large/styles/8I9U0DQTORN/1494572046851/1.jpg",
      "Image_2": "https://cdn18.nnnow.com/web-images/large/styles/8I9U0DQTORN/1494572046853/2.jpg",
      "Image_3": "https://cdn02.nnnow.com/web-images/large/styles/8I9U0DQTORN/1567665801211/7.jpg",
      "Name": "CLINIQUE",
      "Description": "Liquid Facial Soap Mild - Dry Combination Skin",
      "Price": "2000",
      "Offer_Price": "",
      "Offer": "",
      "Size": "200ML",
      "Rating": "",
      "id": 16
    },
    {
      "Product": "SKINCARE",
      "Section": "CLEANSERS",
      "Sub_Section": "Face Wash & Cleansers",
      "Image_1": "https://cdn18.nnnow.com/web-images/large/styles/N5P0C9VB4U3/1644914354378/1.jpg",
      "Image_2": "https://cdn10.nnnow.com/web-images/large/styles/N5P0C9VB4U3/1644914354372/3.jpg",
      "Image_3": "https://cdn02.nnnow.com/web-images/large/styles/N5P0C9VB4U3/1644914354367/5.jpg",
      "Name": "SEPHORA COLLECTION",
      "Description": "Clean Skin Gel",
      "Price": "1200",
      "Offer_Price": "",
      "Offer": "",
      "Size": "125ML",
      "Rating": "",
      "id": 17
    },
    {
      "Product": "SKINCARE",
      "Section": "CLEANSERS",
      "Sub_Section": "Face Wash & Cleansers",
      "Image_1": "https://cdn03.nnnow.com/web-images/large/styles/CNT8WX1LDG2/1636699241589/1.jpg",
      "Image_2": "https://cdn09.nnnow.com/web-images/large/styles/CNT8WX1LDG2/1636699241586/2.jpg",
      "Image_3": "",
      "Name": "MARIO BADESCU",
      "Description": "Enzyme Cleansing Gel",
      "Price": "1250",
      "Offer_Price": "",
      "Offer": "",
      "Size": "236ML",
      "Rating": "",
      "id": 18
    },
    {
      "Product": "SKINCARE",
      "Section": "CLEANSERS",
      "Sub_Section": "Makeup Removers",
      "Image_1": "https://cdn04.nnnow.com/web-images/large/styles/PAHPEGEPVYX/1518007568752/1.jpg",
      "Image_2": "https://cdn02.nnnow.com/web-images/large/styles/PAHPEGEPVYX/1518007568753/2.jpg",
      "Image_3": "",
      "Name": "SEPHORA COLLECTION",
      "Description": "Waterproof Eye Makeup Remover",
      "Price": "1220",
      "Offer_Price": "",
      "Offer": "",
      "Size": "200ML",
      "Rating": "3",
      "id": 19
    },
    {
      "Product": "SKINCARE",
      "Section": "CLEANSERS",
      "Sub_Section": "Makeup Removers",
      "Image_1": "https://cdn00.nnnow.com/web-images/large/styles/3ES4NFTT5P0/1617877444195/1.jpg",
      "Image_2": "https://cdn08.nnnow.com/web-images/large/styles/3ES4NFTT5P0/1617877444190/2.jpg",
      "Image_3": "https://cdn15.nnnow.com/web-images/large/styles/3ES4NFTT5P0/1617877444192/3.jpg",
      "Name": "SEPHORA COLLECTION",
      "Description": "Melting Cleansing Balm",
      "Price": "1600",
      "Offer_Price": "1280",
      "Offer": "20",
      "Size": "125ML",
      "Rating": "",
      "id": 20
    },
    {
      "Product": "SKINCARE",
      "Section": "CLEANSERS",
      "Sub_Section": "Makeup Removers",
      "Image_1": "https://cdn02.nnnow.com/web-images/large/styles/E0ANC9EFYPI/1605193380207/1.jpg",
      "Image_2": "https://cdn09.nnnow.com/web-images/large/styles/E0ANC9EFYPI/1605193380203/2.jpg",
      "Image_3": "https://cdn14.nnnow.com/web-images/large/styles/E0ANC9EFYPI/1605193380205/3.jpg",
      "Name": "SEPHORA COLLECTION",
      "Description": "Gentle Eye And Lip Makeup Remover",
      "Price": "840",
      "Offer_Price": "",
      "Offer": "20",
      "Size": "125ML",
      "Rating": "",
      "id": 21
    },
    {
      "Product": "SKINCARE",
      "Section": "CLEANSERS",
      "Sub_Section": "Makeup Removers",
      "Image_1": "https://cdn12.nnnow.com/web-images/large/styles/HVHA2VWPBMS/1643783336628/1.jpg",
      "Image_2": "https://cdn17.nnnow.com/web-images/large/styles/HVHA2VWPBMS/1567665811676/7.jpg",
      "Image_3": "https://cdn17.nnnow.com/web-images/large/styles/HVHA2VWPBMS/1616759276009/50.jpg",
      "Name": "CLINIQUE",
      "Description": "Take The Day Off Makeup Remover For Lids, Lashes & Lips",
      "Price": "1100",
      "Offer_Price": "",
      "Offer": "",
      "Size": "50ML",
      "Rating": "",
      "id": 22
    },
    {
      "Product": "SKINCARE",
      "Section": "CLEANSERS",
      "Sub_Section": "Makeup Removers",
      "Image_1": "https://cdn03.nnnow.com/web-images/large/styles/Y7BXNFZYAAH/1612251878522/1.jpg",
      "Image_2": "https://cdn06.nnnow.com/web-images/large/styles/Y7BXNFZYAAH/1612251878519/2.jpg",
      "Image_3": "https://cdn14.nnnow.com/web-images/large/styles/Y7BXNFZYAAH/1612251878521/3.jpg",
      "Name": "FOREST ESSENTIALS",
      "Description": "Floral Make Up Remover Oil",
      "Price": "975",
      "Offer_Price": "",
      "Offer": "",
      "Size": "130ML",
      "Rating": "",
      "id": 23
    },
    {
      "Product": "SKINCARE",
      "Section": "CLEANSERS",
      "Sub_Section": "Makeup Removers",
      "Image_1": "https://cdn11.nnnow.com/web-images/large/styles/N25M8STSGYY/1487241114494/1.jpg",
      "Image_2": "https://cdn12.nnnow.com/web-images/large/styles/N25M8STSGYY/1567665811713/7.jpg",
      "Image_3": "https://cdn07.nnnow.com/web-images/large/styles/NLKTZM2F3LD/1616759700615/50.jpg",
      "Name": "CLINIQUE",
      "Description": "Take The Day Off Cleansing Balm",
      "Price": "3400",
      "Offer_Price": "",
      "Offer": "",
      "Size": "125ML",
      "Rating": "5",
      "id": 24
    },
    {
      "Product": "SKINCARE",
      "Section": "TREATMENTS & HIGH TECH TOOLS ",
      "Sub_Section": "Face Serums",
      "Image_1": "https://cdn18.nnnow.com/web-images/large/styles/WYPHYOAHM39/1566556752958/1.jpg",
      "Image_2": "",
      "Image_3": "",
      "Name": "SEPHORA COLLECTION",
      "Description": "Ultra Glow Serum",
      "Price": "1850",
      "Offer_Price": "",
      "Offer": "",
      "Size": "30ML",
      "Rating": "5",
      "id": 25
    },
    {
      "Product": "SKINCARE",
      "Section": "TREATMENTS & HIGH TECH TOOLS ",
      "Sub_Section": "Face Serums",
      "Image_1": "https://cdn08.nnnow.com/web-images/large/styles/F5O4QKTQO9B/1626067152173/1.jpg",
      "Image_2": "",
      "Image_3": "",
      "Name": "SEPHORA COLLECTION",
      "Description": "Dark Spots Serum",
      "Price": "2400",
      "Offer_Price": "1440",
      "Offer": "40",
      "Size": "30ML",
      "Rating": "",
      "id": 26
    },
    {
      "Product": "SKINCARE",
      "Section": "TREATMENTS & HIGH TECH TOOLS ",
      "Sub_Section": "Face Serums",
      "Image_1": "https://cdn04.nnnow.com/web-images/large/styles/VRDUUXAG779/1626067326107/1.jpg",
      "Image_2": "",
      "Image_3": "",
      "Name": "SEPHORA COLLECTION",
      "Description": "Wrinkles Serum",
      "Price": "2400",
      "Offer_Price": "1440",
      "Offer": "40",
      "Size": "30ML",
      "Rating": "5",
      "id": 27
    },
    {
      "Product": "SKINCARE",
      "Section": "TREATMENTS & HIGH TECH TOOLS ",
      "Sub_Section": "Face Serums",
      "Image_1": "https://cdn10.nnnow.com/web-images/large/styles/GL1L2FRYW1F/1602058416259/1.jpg",
      "Image_2": "https://cdn02.nnnow.com/web-images/large/styles/GL1L2FRYW1F/1602058416254/2.jpg",
      "Image_3": "https://cdn11.nnnow.com/web-images/large/styles/GL1L2FRYW1F/1602058416256/3.jpg",
      "Name": "SEPHORA COLLECTION",
      "Description": "Clarifying Lotion",
      "Price": "1440",
      "Offer_Price": "",
      "Offer": "",
      "Size": "15ML",
      "Rating": "",
      "id": 28
    },
    {
      "Product": "SKINCARE",
      "Section": "TREATMENTS & HIGH TECH TOOLS ",
      "Sub_Section": "Face Serums",
      "Image_1": "https://cdn19.nnnow.com/web-images/large/styles/DB0BCEYYAZR/1585571862837/1.jpg",
      "Image_2": "",
      "Image_3": "",
      "Name": "PIXI",
      "Description": "Vitamin-C Serum",
      "Price": "2550",
      "Offer_Price": "",
      "Offer": "",
      "Size": "30ML",
      "Rating": "5",
      "id": 29
    },
    {
      "Product": "SKINCARE",
      "Section": "TREATMENTS & HIGH TECH TOOLS",
      "Sub_Section": " Face Serums",
      "Image_1": "https://cdn18.nnnow.com/web-images/large/styles/9T9TUD9K46B/1585571862832/1.jpg",
      "Image_2": "https://cdn10.nnnow.com/web-images/large/styles/9T9TUD9K46B/1611903862919/2.jpg",
      "Image_3": "https://cdn05.nnnow.com/web-images/large/styles/9T9TUD9K46B/1611903862922/3.jpg",
      "Name": "PIXI",
      "Description": "Rose Caviar Essence",
      "Price": "2400",
      "Offer_Price": "",
      "Offer": "",
      "Size": "45ML",
      "Rating": "",
      "id": 30
    },
    {
      "Product": "SKINCARE",
      "Section": "TREATMENTS & HIGH TECH TOOLS",
      "Sub_Section": "Cleansing Tools",
      "Image_1": "https://cdn11.nnnow.com/web-images/large/styles/0IQFHP62SRO/1606375877454/1.jpg",
      "Image_2": "https://cdn10.nnnow.com/web-images/large/styles/0IQFHP62SRO/1606375877452/2.jpg",
      "Image_3": "https://cdn08.nnnow.com/web-images/large/styles/0IQFHP62SRO/1606375877453/3.jpg",
      "Name": "SEPHORA COLLECTION",
      "Description": "Green Quartz Facial Roller",
      "Price": "2000",
      "Offer_Price": "1200",
      "Offer": "40",
      "Size": "One Size",
      "Rating": "",
      "id": 31
    },
    {
      "Product": "SKINCARE",
      "Section": "TREATMENTS & HIGH TECH TOOLS",
      "Sub_Section": "Cleansing Tools",
      "Image_1": "https://cdn04.nnnow.com/web-images/large/styles/3AHEQVGCU5U/1583391378142/1.jpg",
      "Image_2": "https://cdn11.nnnow.com/web-images/large/styles/3AHEQVGCU5U/1583391378140/2.jpg",
      "Image_3": "https://cdn13.nnnow.com/web-images/large/styles/3AHEQVGCU5U/1583391378141/3.jpg",
      "Name": "SEPHORA COLLECTION",
      "Description": "Exfoliating Face Disk",
      "Price": "500",
      "Offer_Price": "",
      "Offer": "",
      "Size": "One Size",
      "Rating": "",
      "id": 32
    },
    {
      "Product": "SKINCARE",
      "Section": "TREATMENTS & HIGH TECH TOOLS ",
      "Sub_Section": "Cleansing Tools",
      "Image_1": "https://cdn19.nnnow.com/web-images/large/styles/XKQ7A9PGLKD/1653470822270/2.jpg",
      "Image_2": "https://cdn13.nnnow.com/web-images/large/styles/XKQ7A9PGLKD/1653470822273/3.jpg",
      "Image_3": "https://cdn04.nnnow.com/web-images/large/styles/XKQ7A9PGLKD/1653470822266/4.jpg",
      "Name": "STILA",
      "Description": "Save The Day Eye & Lip Perfecter",
      "Price": "1600",
      "Offer_Price": "",
      "Offer": "",
      "Size": "1.23gm",
      "Rating": "",
      "id": 33
    },
    {
      "Product": "SKINCARE",
      "Section": "TREATMENTS & HIGH TECH TOOLS",
      "Sub_Section": "Cleansing Tools",
      "Image_1": "https://cdn15.nnnow.com/web-images/large/styles/8TD6SKRKEP5/1583391378169/1.jpg",
      "Image_2": "https://cdn01.nnnow.com/web-images/large/styles/8TD6SKRKEP5/1617171730799/2.jpg",
      "Image_3": "https://cdn04.nnnow.com/web-images/large/styles/8TD6SKRKEP5/1617171730803/3.jpg",
      "Name": "SEPHORA COLLECTION",
      "Description": "All-In-One Makeup Sponge",
      "Price": "950",
      "Offer_Price": "760",
      "Offer": "20",
      "Size": "2gm",
      "Rating": "",
      "id": 34
    },
    {
      "Product": "SKINCARE",
      "Section": "TREATMENTS & HIGH TECH TOOLS",
      "Sub_Section": "Cleansing Tools",
      "Image_1": "https://cdn10.nnnow.com/web-images/large/styles/RU1UWVX0TTA/1636383743531/1.jpg",
      "Image_2": "https://cdn19.nnnow.com/web-images/large/styles/RU1UWVX0TTA/1636383743511/4.jpg",
      "Image_3": "https://cdn08.nnnow.com/web-images/large/styles/RU1UWVX0TTA/1636383743515/5.jpg",
      "Name": "FOREO",
      "Description": "LUNA 3 For Combination Skin",
      "Price": "18900",
      "Offer_Price": "",
      "Offer": "",
      "Size": "One Size",
      "Rating": "",
      "id": 35
    },
    {
      "Product": "SKINCARE",
      "Section": "TREATMENTS & HIGH TECH TOOLS",
      "Sub_Section": "Cleansing Tools",
      "Image_1": "https://cdn05.nnnow.com/web-images/large/styles/QD9NC7HMDQE/1491888383498/1.jpg",
      "Image_2": "https://cdn07.nnnow.com/web-images/large/styles/QD9NC7HMDQE/1491888383499/2.jpg",
      "Image_3": "",
      "Name": "FOREO",
      "Description": "IRIS™ Illuminating Eye Massager",
      "Price": "12900",
      "Offer_Price": "",
      "Offer": "",
      "Size": "One Size",
      "Rating": "",
      "id": 36
    },
    {
      "Product": "SKINCARE",
      "Section": "MASKS",
      "Sub_Section": "Face Masks",
      "Image_1": "https://cdn17.nnnow.com/web-images/large/styles/87UJ86VNS8T/1604477892815/1.jpg",
      "Image_2": "https://cdn09.nnnow.com/web-images/large/styles/87UJ86VNS8T/1603198341509/3.jpg",
      "Image_3": "",
      "Name": "SEPHORA COLLECTION",
      "Description": "Charcoal Nose Strip",
      "Price": "240",
      "Offer_Price": "",
      "Offer": "",
      "Size": "One Size",
      "Rating": "",
      "id": 37
    },
    {
      "Product": "SKINCARE",
      "Section": "MASKS",
      "Sub_Section": "Face Masks",
      "Image_1": "https://cdn07.nnnow.com/web-images/large/styles/BGOHZI41RY6/1604477899661/1.jpg",
      "Image_2": "https://cdn10.nnnow.com/web-images/large/styles/BGOHZI41RY6/1604477899658/2.jpg",
      "Image_3": "",
      "Name": "SEPHORA COLLECTION",
      "Description": "Face Mask - Lychee",
      "Price": "360",
      "Offer_Price": "",
      "Offer": "",
      "Size": "One Size",
      "Rating": "",
      "id": 38
    },
    {
      "Product": "SKINCARE",
      "Section": "MASKS",
      "Sub_Section": "Face Masks",
      "Image_1": "https://cdn19.nnnow.com/web-images/large/styles/L6EKNU4FO6D/1585571862852/1.jpg",
      "Image_2": "https://cdn01.nnnow.com/web-images/large/styles/L6EKNU4FO6D/1585571862853/2.jpg",
      "Image_3": "",
      "Name": "PIXI",
      "Description": "Plump Collagen Boost Sheet Mask",
      "Price": "1070",
      "Offer_Price": "",
      "Offer": "",
      "Size": "23gm",
      "Rating": "",
      "id": 39
    },
    {
      "Product": "SKINCARE",
      "Section": "MASKS",
      "Sub_Section": "Face Masks",
      "Image_1": "https://cdn19.nnnow.com/web-images/large/styles/QX5JOPDJDBP/1617724753290/1.jpg",
      "Image_2": "",
      "Image_3": "",
      "Name": "SEPHORA COLLECTION",
      "Description": "Colorful Vitamin Face Mask - Aloe Vera + Vitamin E (Quenching)",
      "Price": "360",
      "Offer_Price": "",
      "Offer": "",
      "Size": "One Size",
      "Rating": "",
      "id": 40
    },
    {
      "Product": "SKINCARE",
      "Section": "MASKS",
      "Sub_Section": "Face Masks",
      "Image_1": "https://cdn19.nnnow.com/web-images/large/styles/L95CY1M4YKG/1626067212346/1.jpg",
      "Image_2": "",
      "Image_3": "",
      "Name": "SEPHORA COLLECTION",
      "Description": "Vitamin Mask - Watermelon",
      "Price": "1200",
      "Offer_Price": "",
      "Offer": "",
      "Size": "One Size",
      "Rating": "",
      "id": 41
    },
    {
      "Product": "SKINCARE",
      "Section": "MASKS",
      "Sub_Section": "Face Masks",
      "Image_1": "https://cdn13.nnnow.com/web-images/large/styles/GO4J3E7Z10P/1617724508512/1.jpg",
      "Image_2": "https://cdn07.nnnow.com/web-images/large/styles/GO4J3E7Z10P/1617724508511/2.jpg",
      "Image_3": "",
      "Name": "SEPHORA COLLECTION",
      "Description": "Hero Mask - The Seaweed Mask",
      "Price": "450",
      "Offer_Price": "",
      "Offer": "",
      "Size": "One Size",
      "Rating": "",
      "id": 42
    },
    {
      "Product": "SKINCARE",
      "Section": "MASKS",
      "Sub_Section": "Sheet Masks",
      "Image_1": "https://cdn07.nnnow.com/web-images/large/styles/BGOHZI41RY6/1604477899661/1.jpg",
      "Image_2": "https://cdn10.nnnow.com/web-images/large/styles/BGOHZI41RY6/1604477899658/2.jpg",
      "Image_3": "",
      "Name": "SEPHORA COLLECTION",
      "Description": "Face Mask - Lychee",
      "Price": "360",
      "Offer_Price": "",
      "Offer": "",
      "Size": "One Size",
      "Rating": "",
      "id": 43
    },
    {
      "Product": "SKINCARE",
      "Section": "MASKS",
      "Sub_Section": "Sheet Masks",
      "Image_1": "https://cdn01.nnnow.com/web-images/large/styles/ATLGKO2K9H2/1604927721325/1.jpg",
      "Image_2": "https://cdn05.nnnow.com/web-images/large/styles/ATLGKO2K9H2/1604927721319/2.jpg",
      "Image_3": "https://cdn12.nnnow.com/web-images/large/styles/ATLGKO2K9H2/1604927721314/4.jpg",
      "Name": "SEPHORA COLLECTION",
      "Description": "Hand Mask - Mango",
      "Price": "420",
      "Offer_Price": "",
      "Offer": "",
      "Size": "One Size",
      "Rating": "",
      "id": 44
    },
    {
      "Product": "SKINCARE",
      "Section": "MASKS",
      "Sub_Section": "Sheet Masks",
      "Image_1": "https://cdn19.nnnow.com/web-images/large/styles/EDUITEQ7GB6/1617723408786/1.jpg",
      "Image_2": "",
      "Image_3": "",
      "Name": "SEPHORA COLLECTION",
      "Description": "Colorful Vitamin Face Mask - Mango + Vitamin B6 (Nourishing)",
      "Price": "400",
      "Offer_Price": "",
      "Offer": "",
      "Size": "One Size",
      "Rating": "",
      "id": 45
    },
    {
      "Product": "SKINCARE",
      "Section": "MASKS",
      "Sub_Section": "Sheet Masks",
      "Image_1": "https://cdn00.nnnow.com/web-images/large/styles/E8LXN65XWAU/1571372064698/1.jpg",
      "Image_2": "https://cdn16.nnnow.com/web-images/large/styles/E8LXN65XWAU/1571372064696/3.jpg",
      "Image_3": "https://cdn09.nnnow.com/web-images/large/styles/E8LXN65XWAU/1571372064692/4.jpg",
      "Name": "STARSKIN",
      "Description": "The Gold Mask™",
      "Price": "1650",
      "Offer_Price": "",
      "Offer": "",
      "Size": "40gm",
      "Rating": "",
      "id": 46
    },
    {
      "Product": "SKINCARE",
      "Section": "MASKS",
      "Sub_Section": "Sheet Masks",
      "Image_1": "https://cdn15.nnnow.com/web-images/large/styles/OGBO4USYF8G/1571372064758/1.jpg",
      "Image_2": "",
      "Image_3": "",
      "Name": "STARSKIN",
      "Description": "Magic Hour™ Exfoliating Double-Layer Foot Mask Socks",
      "Price": "1650",
      "Offer_Price": "",
      "Offer": "",
      "Size": "50gm",
      "Rating": "",
      "id": 47
    },
    {
      "Product": "SKINCARE",
      "Section": "MASKS",
      "Sub_Section": "Sheet Masks",
      "Image_1": "https://cdn06.nnnow.com/web-images/large/styles/RKJ8168K7GY/1519378697686/1.jpg",
      "Image_2": "https://cdn08.nnnow.com/web-images/large/styles/RKJ8168K7GY/1519378697687/2.jpg",
      "Image_3": "https://cdn03.nnnow.com/web-images/large/styles/RKJ8168K7GY/1519378697694/5.jpg",
      "Name": "GLAMGLOW",
      "Description": "Bubblesheet™ Oxygenating Deep Cleanse Mask",
      "Price": "720",
      "Offer_Price": "",
      "Offer": "",
      "Size": "150ML",
      "Rating": "",
      "id": 48
    },
    {
      "Product": "SKINCARE",
      "Section": "BATH & SHOWER",
      "Sub_Section": "Body Wash and Shower Gel",
      "Image_1": "https://cdn14.nnnow.com/web-images/large/styles/LK04555DAAA/1615874940888/1.jpg",
      "Image_2": "https://cdn01.nnnow.com/web-images/large/styles/LK04555DAAA/1615874940879/2.jpg",
      "Image_3": "https://cdn07.nnnow.com/web-images/large/styles/LK04555DAAA/1615874940883/3.jpg",
      "Name": "FOREST ESSENTIALS",
      "Description": "Silkening Shower Wash - Oudh & Green Tea",
      "Price": "750",
      "Offer_Price": "",
      "Offer": "",
      "Size": "130ML",
      "Rating": "",
      "id": 49
    },
    {
      "Product": "SKINCARE",
      "Section": "BATH & SHOWER",
      "Sub_Section": "Body Wash and Shower Gel",
      "Image_1": "https://cdn14.nnnow.com/web-images/large/styles/40AJYDFI2TP/1612251833201/1.jpg",
      "Image_2": "https://cdn13.nnnow.com/web-images/large/styles/40AJYDFI2TP/1612251833199/2.jpg",
      "Image_3": "https://cdn03.nnnow.com/web-images/large/styles/40AJYDFI2TP/1612251833200/3.jpg",
      "Name": "FOREST ESSENTIALS",
      "Description": "Silkening Shower Wash Iced Pomegranate And Kerala Lime",
      "Price": "750",
      "Offer_Price": "",
      "Offer": "",
      "Size": "130ML",
      "Rating": "",
      "id": 50
    },
    {
      "Product": "SKINCARE",
      "Section": "BATH & SHOWER",
      "Sub_Section": "Body Wash and Shower Gel",
      "Image_1": "https://cdn01.nnnow.com/web-images/large/styles/FF3979OJZ8U/1636699889147/1.jpg",
      "Image_2": "https://cdn19.nnnow.com/web-images/large/styles/FF3979OJZ8U/1636699889133/2.jpg",
      "Image_3": "",
      "Name": "MARIO BADESCU",
      "Description": "A.H.A Botanical Body Soap",
      "Price": "725",
      "Offer_Price": "",
      "Offer": "",
      "Size": "236ML",
      "Rating": "",
      "id": 51
    },
    {
      "Product": "SKINCARE",
      "Section": "BATH & SHOWER",
      "Sub_Section": "Body Wash and Shower Gel",
      "Image_1": "https://cdn13.nnnow.com/web-images/large/styles/MNVR2ADSC9A/1636700674036/1.jpg",
      "Image_2": "https://cdn14.nnnow.com/web-images/large/styles/MNVR2ADSC9A/1636700674023/2.jpg",
      "Image_3": "",
      "Name": "MARIO BADESCU",
      "Description": "Rose Body Soap",
      "Price": "725",
      "Offer_Price": "",
      "Offer": "",
      "Size": "8ML",
      "Rating": "",
      "id": 52
    },
    {
      "Product": "SKINCARE",
      "Section": "BATH & SHOWER",
      "Sub_Section": "Body Wash and Shower Gel",
      "Image_1": "https://cdn03.nnnow.com/web-images/large/styles/JLD4WD5XAGX/1596518708861/1.jpg",
      "Image_2": "https://cdn17.nnnow.com/web-images/large/styles/JLD4WD5XAGX/1596518708860/2.jpg",
      "Image_3": "https://cdn02.nnnow.com/web-images/large/styles/JLD4WD5XAGX/1596518708858/4.jpg",
      "Name": "OMORFEE",
      "Description": "Velvety Smooth Body Wash",
      "Price": "1599",
      "Offer_Price": "",
      "Offer": "",
      "Size": "250ML",
      "Rating": "",
      "id": 53
    },
    {
      "Product": "SKINCARE",
      "Section": "BATH & SHOWER",
      "Sub_Section": "Body Wash and Shower Gel",
      "Image_1": "https://cdn16.nnnow.com/web-images/large/styles/5DYNJHM7F5V/1628761402455/1.jpg",
      "Image_2": "https://cdn19.nnnow.com/web-images/large/styles/5DYNJHM7F5V/1628761402444/2.jpg",
      "Image_3": "",
      "Name": "KAMA AYURVEDA",
      "Description": "Rose And Jasmine Body Cleanser",
      "Price": "1325",
      "Offer_Price": "",
      "Offer": "",
      "Size": "200ML",
      "Rating": "",
      "id": 54
    },
    {
      "Product": "SKINCARE",
      "Section": "BATH & SHOWER",
      "Sub_Section": "Scrub and Exfoliants",
      "Image_1": "https://cdn10.nnnow.com/web-images/large/styles/9Z3NDZ39PH5/1600764692084/1.jpg",
      "Image_2": "",
      "Image_3": "",
      "Name": "SEPHORA COLLECTION",
      "Description": "Brown Sugar Body Scrub",
      "Price": "2200",
      "Offer_Price": "",
      "Offer": "",
      "Size": "400ML",
      "Rating": "",
      "id": 55
    },
    {
      "Product": "SKINCARE",
      "Section": "BATH & SHOWER",
      "Sub_Section": "Scrub and Exfoliants",
      "Image_1": "https://cdn04.nnnow.com/web-images/large/styles/OKZHU1EL79M/1583393866826/1.jpg",
      "Image_2": "https://cdn11.nnnow.com/web-images/large/styles/OKZHU1EL79M/1583393866824/2.jpg",
      "Image_3": "https://cdn15.nnnow.com/web-images/large/styles/OKZHU1EL79M/1574672530408/4.jpg",
      "Name": "SEPHORA COLLECTION",
      "Description": "Bright Skin Exfoliating Scrub",
      "Price": "1150",
      "Offer_Price": "920",
      "Offer": "20",
      "Size": "50ML",
      "Rating": "",
      "id": 56
    },
    {
      "Product": "SKINCARE",
      "Section": "BATH & SHOWER",
      "Sub_Section": "Scrub and Exfoliants",
      "Image_1": "https://cdn17.nnnow.com/web-images/large/styles/7NQEEP5EYBP/1652252628193/1.jpg",
      "Image_2": "https://cdn03.nnnow.com/web-images/large/styles/7NQEEP5EYBP/1652252628170/4.jpg",
      "Image_3": "https://cdn15.nnnow.com/web-images/large/styles/7NQEEP5EYBP/1652252628176/6.jpg",
      "Name": "OUAI",
      "Description": "Scalp & Body Scrub St. Bart's",
      "Price": "4150",
      "Offer_Price": "",
      "Offer": "",
      "Size": "250gm",
      "Rating": "",
      "id": 57
    },
    {
      "Product": "SKINCARE",
      "Section": "BATH & SHOWER",
      "Sub_Section": "Scrub and Exfoliants",
      "Image_1": "https://cdn17.nnnow.com/web-images/large/styles/5OV756O958N/1594031464986/1.jpg",
      "Image_2": "https://cdn04.nnnow.com/web-images/large/styles/5OV756O958N/1594031464984/2.jpg",
      "Image_3": "https://cdn14.nnnow.com/web-images/large/styles/5OV756O958N/1618918773790/50.jpg",
      "Name": "CLARINS",
      "Description": "Gentle Peeling Smooth Away Cream With Primrose Extract",
      "Price": "2300",
      "Offer_Price": "",
      "Offer": "",
      "Size": "50ML",
      "Rating": "",
      "id": 58
    },
    {
      "Product": "SKINCARE",
      "Section": "BATH & SHOWER",
      "Sub_Section": "Scrub and Exfoliants",
      "Image_1": "https://cdn05.nnnow.com/web-images/large/styles/5JIF3B69U1Q/1644298937629/1.jpg",
      "Image_2": "https://cdn19.nnnow.com/web-images/large/styles/5JIF3B69U1Q/1644298937625/3.jpg",
      "Image_3": "https://cdn16.nnnow.com/web-images/large/styles/5JIF3B69U1Q/1644298937614/4.jpg",
      "Name": "WISHFUL",
      "Description": "Yo Glow Facial Enzyme Scrub",
      "Price": "1850",
      "Offer_Price": "",
      "Offer": "",
      "Size": "40ML",
      "Rating": "",
      "id": 59
    },
    {
      "Product": "SKINCARE",
      "Section": "BATH & SHOWER",
      "Sub_Section": "Scrub and Exfoliants",
      "Image_1": "https://cdn19.nnnow.com/web-images/large/styles/T8I68HF1A7F/1628761402376/1.jpg",
      "Image_2": "https://cdn03.nnnow.com/web-images/large/styles/T8I68HF1A7F/1628761402373/2.jpg",
      "Image_3": "https://cdn00.nnnow.com/web-images/large/styles/T8I68HF1A7F/1628761402375/3.jpg",
      "Name": "KAMA AYURVEDA",
      "Description": "Neem Tulsi Tea Tree Body Scrub",
      "Price": "1695",
      "Offer_Price": "",
      "Offer": "",
      "Size": "200gm",
      "Rating": "",
      "id": 60
    },
    {
      "Product": "SKINCARE",
      "Section": "BODY MOISTURIZERS",
      "Sub_Section": "Body Lotions & Body Oils",
      "Image_1": "https://cdn14.nnnow.com/web-images/large/styles/EEIJ27BZZTL/1636699241571/1.jpg",
      "Image_2": "https://cdn11.nnnow.com/web-images/large/styles/EEIJ27BZZTL/1636699241566/2.jpg",
      "Image_3": "",
      "Name": "MARIO BADESCU",
      "Description": "Drying Lotion",
      "Price": "1600",
      "Offer_Price": "",
      "Offer": "",
      "Size": "29ML",
      "Rating": "5",
      "id": 61
    },
    {
      "Product": "SKINCARE",
      "Section": "BODY MOISTURIZERS",
      "Sub_Section": "Body Lotions & Body Oils",
      "Image_1": "https://cdn07.nnnow.com/web-images/large/styles/45W5V05LRBI/1600071238640/1.jpg",
      "Image_2": "",
      "Image_3": "",
      "Name": "SEPHORA COLLECTION",
      "Description": "All Day Body Hydrator",
      "Price": "2400",
      "Offer_Price": "",
      "Offer": "",
      "Size": "400ML",
      "Rating": "",
      "id": 62
    },
    {
      "Product": "SKINCARE",
      "Section": "BODY MOISTURIZERS",
      "Sub_Section": "Body Lotions & Body Oils",
      "Image_1": "https://cdn11.nnnow.com/web-images/large/styles/TU5S1MDMTKQ/1615874938098/1.jpg",
      "Image_2": "https://cdn04.nnnow.com/web-images/large/styles/TU5S1MDMTKQ/1615874938094/2.jpg",
      "Image_3": "https://cdn08.nnnow.com/web-images/large/styles/TU5S1MDMTKQ/1615874938097/3.jpg",
      "Name": "FOREST ESSENTIALS",
      "Description": "Ultra-Rich Body Milk - Oudh & Green Tea",
      "Price": "1125",
      "Offer_Price": "",
      "Offer": "",
      "Size": "130ML",
      "Rating": "",
      "id": 63
    },
    {
      "Product": "SKINCARE",
      "Section": "BODY MOISTURIZERS",
      "Sub_Section": "Body Lotions & Body Oils",
      "Image_1": "https://cdn19.nnnow.com/web-images/large/styles/0ZOMLN7YTLY/1583404546194/1.jpg",
      "Image_2": "https://cdn19.nnnow.com/web-images/large/styles/0ZOMLN7YTLY/1583404546193/2.jpg",
      "Image_3": "",
      "Name": "ANASTASIA BEVERLY HILLS",
      "Description": "Hydrating Oil",
      "Price": "5150",
      "Offer_Price": "",
      "Offer": "",
      "Size": "30ML",
      "Rating": "",
      "id": 64
    },
    {
      "Product": "SKINCARE",
      "Section": "BODY MOISTURIZERS",
      "Sub_Section": "Body Lotions & Body Oils",
      "Image_1": "https://cdn15.nnnow.com/web-images/large/styles/9INB4DV33LY/1636699226813/1.jpg",
      "Image_2": "https://cdn05.nnnow.com/web-images/large/styles/9INB4DV33LY/1636699226807/2.jpg",
      "Image_3": "",
      "Name": "MARIO BADESCU",
      "Description": "Special Cucumber Lotion",
      "Price": "1475",
      "Offer_Price": "",
      "Offer": "",
      "Size": "236ML",
      "Rating": "",
      "id": 65
    },
    {
      "Product": "SKINCARE",
      "Section": "BODY MOISTURIZERS",
      "Sub_Section": "Body Lotions & Body Oils",
      "Image_1": "https://cdn13.nnnow.com/web-images/large/styles/BEVC2IB58Y5/1628654386886/1.jpg",
      "Image_2": "https://cdn13.nnnow.com/web-images/large/styles/BEVC2IB58Y5/1628654386885/2.jpg",
      "Image_3": "https://cdn09.nnnow.com/web-images/large/styles/BEVC2IB58Y5/1605074587473/3.jpg",
      "Name": "ELIZABETH ARDEN",
      "Description": "Eight Hour Cream All-Over Miracle Oil For Face Body And Hair",
      "Price": "2950",
      "Offer_Price": "",
      "Offer": "",
      "Size": "100ML",
      "Rating": "",
      "id": 66
    },
    {
      "Product": "SKINCARE",
      "Section": "BODY MOISTURIZERS",
      "Sub_Section": "Hand Cream & Foot Cream",
      "Image_1": "https://cdn15.nnnow.com/web-images/large/styles/PRTB9W7SXKM/1644914354439/1.jpg",
      "Image_2": "",
      "Image_3": "",
      "Name": "SEPHORA COLLECTION",
      "Description": "Hand Balm With Shea Butter - Coconut",
      "Price": "600",
      "Offer_Price": "",
      "Offer": "",
      "Size": "30ML",
      "Rating": "",
      "id": 67
    },
    {
      "Product": "SKINCARE",
      "Section": "BODY MOISTURIZERS",
      "Sub_Section": "Hand Cream & Foot Cream",
      "Image_1": "https://cdn00.nnnow.com/web-images/large/styles/7DMGGVEBGTG/1533206306028/1.jpg",
      "Image_2": "",
      "Image_3": "",
      "Name": "SEPHORA COLLECTION",
      "Description": "Hand Balm - Almond",
      "Price": "580",
      "Offer_Price": "",
      "Offer": "",
      "Size": "30ML",
      "Rating": "",
      "id": 68
    },
    {
      "Product": "SKINCARE",
      "Section": "BODY MOISTURIZERS",
      "Sub_Section": "Hand Cream & Foot Cream",
      "Image_1": "https://cdn09.nnnow.com/web-images/large/styles/KHDJ8MUFR6A/1640326187344/1.jpg",
      "Image_2": "https://cdn06.nnnow.com/web-images/large/styles/KHDJ8MUFR6A/1640326187333/2.jpg",
      "Image_3": "https://cdn19.nnnow.com/web-images/large/styles/KHDJ8MUFR6A/1640326187337/3.jpg",
      "Name": "BURT'S BEES",
      "Description": "Mama Bee Leg & Foot Cream",
      "Price": "1800",
      "Offer_Price": "",
      "Offer": "",
      "Size": "100ML",
      "Rating": "",
      "id": 69
    },
    {
      "Product": "SKINCARE",
      "Section": "BODY MOISTURIZERS",
      "Sub_Section": "Hand Cream & Foot Cream",
      "Image_1": "https://cdn17.nnnow.com/web-images/large/styles/23797VD7Z75/1589971857800/1.jpg",
      "Image_2": "https://cdn05.nnnow.com/web-images/large/styles/23797VD7Z75/1589971857801/2.jpg",
      "Image_3": "https://cdn16.nnnow.com/web-images/large/styles/23797VD7Z75/1618918773725/50.jpg",
      "Name": "CLARINS",
      "Description": "Super Restorative Hand Cream",
      "Price": "3200",
      "Offer_Price": "",
      "Offer": "",
      "Size": "100ML",
      "Rating": "",
      "id": 70
    },
    {
      "Product": "SKINCARE",
      "Section": "BODY MOISTURIZERS",
      "Sub_Section": "Hand Cream & Foot Cream",
      "Image_1": "https://cdn01.nnnow.com/web-images/large/styles/EX9ETDRPAIF/1637664651274/1.jpg",
      "Image_2": "",
      "Image_3": "",
      "Name": "DIOR",
      "Description": "Miss Dior Nourishing Rose Hand Cream",
      "Price": "4100",
      "Offer_Price": "",
      "Offer": "",
      "Size": "50ML",
      "Rating": "",
      "id": 71
    },
    {
      "Product": "SKINCARE",
      "Section": "BODY MOISTURIZERS",
      "Sub_Section": "Hand Cream & Foot Cream",
      "Image_1": "https://cdn02.nnnow.com/web-images/large/styles/W7CSUBAF1QM/1614230606895/1.jpg",
      "Image_2": "https://cdn12.nnnow.com/web-images/large/styles/W7CSUBAF1QM/1614230606892/2.jpg",
      "Image_3": "https://cdn01.nnnow.com/web-images/large/styles/W7CSUBAF1QM/1614230606894/3.jpg",
      "Name": "KAMA AYURVEDA",
      "Description": "Hand Cream",
      "Price": "895",
      "Offer_Price": "",
      "Offer": "",
      "Size": "60gm",
      "Rating": "",
      "id": 72
    },
    {
      "Product": "SKINCARE",
      "Section": "VEGAN",
      "Sub_Section": "Face Care",
      "Image_1": "https://cdn10.nnnow.com/web-images/large/styles/5CPKFRTG7GD/1604477892837/1.jpg",
      "Image_2": "https://cdn03.nnnow.com/web-images/large/styles/5CPKFRTG7GD/1604477892833/2.jpg",
      "Image_3": "https://cdn10.nnnow.com/web-images/large/styles/5CPKFRTG7GD/1604477892835/3.jpg",
      "Name": "SEPHORA COLLECTION",
      "Description": "Gentle PH Balancing Toner",
      "Price": "936",
      "Offer_Price": "",
      "Offer": "",
      "Size": "200ML",
      "Rating": "",
      "id": 73
    },
    {
      "Product": "SKINCARE",
      "Section": "VEGAN",
      "Sub_Section": "Face Care",
      "Image_1": "https://cdn02.nnnow.com/web-images/large/styles/E0ANC9EFYPI/1605193380207/1.jpg",
      "Image_2": "https://cdn09.nnnow.com/web-images/large/styles/E0ANC9EFYPI/1605193380203/2.jpg",
      "Image_3": "https://cdn14.nnnow.com/web-images/large/styles/E0ANC9EFYPI/1605193380205/3.jpg",
      "Name": "SEPHORA COLLECTION",
      "Description": "Gentle Eye And Lip Makeup Remover",
      "Price": "840",
      "Offer_Price": "",
      "Offer": "",
      "Size": "125ML",
      "Rating": "",
      "id": 74
    },
    {
      "Product": "SKINCARE",
      "Section": "VEGAN",
      "Sub_Section": "Face Care",
      "Image_1": "https://cdn17.nnnow.com/web-images/large/styles/FHWCOANY7JG/1604477899702/1.jpg",
      "Image_2": "https://cdn13.nnnow.com/web-images/large/styles/FHWCOANY7JG/1604477899699/2.jpg",
      "Image_3": "",
      "Name": "SEPHORA COLLECTION",
      "Description": "Organic Cotton Swabs",
      "Price": "300",
      "Offer_Price": "",
      "Offer": "",
      "Size": "200 pieces",
      "Rating": "",
      "id": 75
    }
  ];


let Moisturedata = data.filter(function(el){
    return el.Section == "MOISTURIZERS"
})
console.log(Moisturedata)
let cont1 = document.getElementById("list_container_1");
let cont2 = document.getElementById("list_container_2");
let cont3 = document.getElementById("list_container_3");
let cont4 = document.getElementById("list_container_4");


display(data, cont1);
display(data, cont2);
display(data, cont3);
display(data, cont4);


document.querySelectorAll(".rightarrow").forEach((button) => {
    button.addEventListener("click", function () {
        let sliderbox1 = document.querySelector("#list_container_1");
        let sliderbox2 = document.querySelector("#list_container_2");
        let sliderbox3 = document.querySelector("#list_container_3");
        let sliderbox4 = document.querySelector("#list_container_4");
        myslider(sliderbox1, "right", 40, 300, 40);
        myslider(sliderbox2, "right", 40, 300, 40);
        myslider(sliderbox3, "right", 40, 300, 40);
        myslider(sliderbox4, "right", 40, 300, 40);
    })
});
document.querySelectorAll(".leftarrow").forEach((button) => {
    button.addEventListener("click", function () {
        let sliderbox1 = document.querySelector("#list_container_1");
        let sliderbox2 = document.querySelector("#list_container_2");
        let sliderbox3 = document.querySelector("#list_container_3");
        let sliderbox4 = document.querySelector("#list_container_4");
        myslider(sliderbox1, "left", 40, 300, 40);
        myslider(sliderbox2, "left", 40, 300, 40);
        myslider(sliderbox3, "left", 40, 300, 40);
        myslider(sliderbox4, "left", 40, 300, 40);
    })
});
let myslider = (sliderbox, direction, speed, distance, step) => {
    console.log("hi")
    let scrollAmount = 0;
    let slidetime = setInterval(() => {
        if (direction == "left") {
            sliderbox.scrollLeft -= step;
        }
        else {
            sliderbox.scrollLeft += step;
            console.log("w")
        }
        scrollAmount += step;
        if (scrollAmount >= distance) {
            window.clearInterval(slidetime);
        }
    }, speed)
}


document.querySelector("#sidebar").innerHTML = `<ul>
            <li class="sidebar_cat">MOISTURIZERS
                <ul class="sidebar_cat_content">
                    <option><a href="#">Moisturizers</a></option>
                    <option><a href="#">Night Cream</a></option>
                    <option><a href="#">Face Oils</a></option>
                    <option><a href="#">sunscreens</a></option>
                    <option><a href="#">BB and CC Creams</a></option>
                </ul>
            </li>
            <li class="sidebar_cat">CLEANSERS
                <ul class="sidebar_cat_content">
                    <option><a href="#">Face Wash & Cleansers</a></option>
                    <option><a href="#">Exfoliators</a></option>
                    <option><a href="#">Makeup Removers</a></option>
                    <option><a href="#">Face Wipes</a></option>
                    <option><a href="#">Toners</a></option>

                </ul>
            </li>
            <li class="sidebar_cat">TREATMENTS & HIGHTECH TOOLS
                <ul class="sidebar_cat_content">
                    <option><a href="#">Face Serums</a></option>
                    <option><a href="#">Cleansing Tools</a></option>
                    <option><a href="#">Anti-Aging Tools</a></option>
                    <option><a href="#">Face Masks</a></option>
                    <option><a href="#">Eye Cream & Treatments</a></option>
                    
                </ul>
            <li class="sidebar_cat">MASKS
                <ul class="sidebar_cat_content">
                    <option><a href="#">Face Masks</a></option>
                    <option><a href="#">Sheet Masks</a></option>
                    <option><a href="#">Eye Masks</a></option>
                    <option><a href="#">Nose Masks & Strips</a></option>
                    <option><a href="#">Lip Masks</a></option>
                    <option><a href="#">Hair Masks</a></option>
                </ul>
            </li>

            <li class="sidebar_cat">BATH & SHOWER
                <ul class="sidebar_cat_content">
                    <option><a href="#">Body Wash & Shower Gel</a></option>
                    <option><a href="#">Scrub & Exfoliants</a></option>
                    <option><a href="#">Exfoliators</a></option>
                </ul>
            </li>
            <li class="sidebar_cat">BODY MOISTURIZERS
                <ul class="sidebar_cat_content">
                    <option><a href="#">Body Lotions & Body Oils</a></option>
                    <option><a href="#">Hand Cream & Foot Cream</a></option>
                    <option><a href="#">Sunscreen Lotions</a></option>

                </ul>
            </li>
            <li class="sidebar_cat">VEGAN</a>
                <ul class="sidebar_cat_content">
                    <option><a href="#">Face Care</a></option>
                </ul>
            </li>
        </ul>`;



document.querySelectorAll(".sidebar_cat").forEach((button) => {
    button.addEventListener("click", function () {
        console.log("button", button.firstElementChild)
        // button.firstElementChild.style.backgroundColor="red";

        if (button.firstElementChild.style.display == "none" && button.style.color == "black") {

            button.firstElementChild.style.display = "block";
            button.style.color = "red";
        } else {
            button.firstElementChild.style.display = "none";
            button.style.color = "black";
        }
    });
});
