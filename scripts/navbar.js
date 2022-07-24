let navbar = () => {
    return `<div id="navtop1">
    <div id="navtop">
    <div>
        <div><a href="https://www.nnnow.com/"><img src="https://cdn02.nnnow.com/web-images/master/navtree_metaData/59b2425ae4b0d70964ee66e0/1505806763887/12NNNOWLOGODESKTOP.png" alt="Logo Error"></a></div>
        <div class="gap">|</div>
        <div><a href="storelocator.html"><img src="https://i.ibb.co/vLXdVdX/location.png" alt="Locator Error">
            <p>Store Locator</p></a>
            
        </div>  
    </div>
    <div class="starlogo">
    <img src="https://i.ibb.co/XXkNpPL/star-Purple.png" alt="">
    <img src="https://i.ibb.co/z6qBmVS/star.png" alt="">
    <img src="https://i.ibb.co/jz9MgZN/star-Pink.png" alt="">
    </div>
    <div>
        <p>Get 10% OFF on your first purchase. Use Code:</p>
        <p>BEAUTY10</p>
    </div>
    <div class="starlogo">
    <img src="https://i.ibb.co/jz9MgZN/star-Pink.png" alt="">
    <img src="https://i.ibb.co/z6qBmVS/star.png" alt="">
    <img src="https://i.ibb.co/XXkNpPL/star-Purple.png" alt="">
    </div>
    <div >
    <div class="firstnav">
        <div><a href="getapp.html"><img src="https://i.ibb.co/6NQrHXc/download.png" alt="App Error">
            <p>Get APP</p></a>
            
        </div>
        <div class="gap">|</div>
        <div><a href="trackorder.html"> <img src="https://i.ibb.co/JC1hgZ7/order-tracking.png" alt="Error">
            <p>Track Order</p></a>
           
        </div>
        <div class="gap">|</div>
        <div><a href="loyalty.html"><img src="https://th.bing.com/th/id/OIP.uUhwLqKAacvUjBMxfwunlwAAAA?pid=ImgDet&rs=1" alt="Error">
            <p>Loyalty</p></a>
            
        </div>
    </div>
    </div>
    </div>
</div>
<div id="midnav">
    <div>
        <img src="https://2.bp.blogspot.com/-QLIEG23imMI/XkV80ER9UAI/AAAAAAAACPI/Qx6esAa5KI02zsrjUvBERVbsNIKrNR2NQCLcBGAsYHQ/s1600/Search%2Bicon.png" alt="search">
        <input type="text" onkeydown="search()" id="searchBar" placeholder="Search SEPHORA"></div>
    <div id="homelogo"><a href="index.html"><img src="https://cdn07.nnnow.com/web-images/master/navtree_metaData/59b2657be4b0e6b6e16a9180/1548053082431/se.png" alt="Sephora"></a></div>
    <div>
        <div><a href="wishlist.html"><img src="https://i.ibb.co/Hqh4zqT/heart.png" alt="wishlist"></a></div>
        <div class="gap">|</div>
        <div id="mycart">
            <img  src="https://i.ibb.co/J3Mr8YY/bag.png" alt="cart">
            <p id="bagcount">1</p>
            </div>
        <div class="gap">|</div>
        <div id="login">
            <img src="https://i.ibb.co/Z2L3KCx/user.png" alt="login"><p>Login</p></div>
    </div>
</div>
<div class="cartpopup1">
        <h1>MY BAG</h1>
        <div class="close_button1">&times;</div>
        <hr>
        <div>
        <p>You don't have any items in your cart</p>
        </div>
        <div id="button">
        <a href="index.html"><button>CONTINUE SHOPPING</button></a>
        </div>
    </div>
    <div class="cartpopup2">
    <h1>MY BAG</h1>
    <div class="close_button2">&times;</div>
    <hr>
    <div id="bagitem"></div>    
        <div id="button">
            <a href="checkout.html"><button>CHECKOUT</button></a>
            <a href="cart.html"><button>VIEW SHOPPING BAG</button></a>
        </div>
    </div>
<div id="bottomnav">
    <div><a href="sale.html">SALE</a></div>
    <div class="dropmenu">
    <div class="menubar"><a href="makeupCat.html">MAKEUP</a></div>
    <div class="firstdrop">
        <div class="seconddrop">
            <p onclick="Face()">FACE</p>
            <p onclick="Foundation()">Foundation</p>
            <p onclick="BBCCCream()">BB & CC Cream</p>
            <a href="concealer.html">Concealer</a>
            <a href="faceprimer.html">Face Primer</a>
            <a href="highlighter.html">Highlighter</a>
            <a href="facebrush.html">Face Brushes</a>
            <a href="makeuppalette.html">Makeup Palette</a>
        </div>
        <div class="seconddrop">
            <p onclick="EYE()">EYE</p>
            <p onclick="EyePalettes()">Eye Palettes</p>
            <p onclick="Mascara()">Mascara</p>
            <a href="eyeliner.html">Eyeliner</a>
            <a href="eyebrow.html">Eyebrow</a>
            <a href="eyeshadow.html">Eyeshadow</a>
            <a href="eyeprimer.html">Eye Primer</a>
            <a href="eyebrush.html">Eye Brushes</a>
            <a href="contactlens.html">Contact Lenses</a>
        </div>
        <div class="seconddrop">
            <p onclick="LIP()">LIP</p>
            <p onclick="Lipstick()">Lipstick</p>
            <p onclick="LipStain()">Lip stain</p>
            <a href="lipgloss.html">Lip Gloss</a>
            <a href="lipliner.html">Lip Liner</a>
            <a href="lipbalm.html">Lip Balm & Treatment</a>
            <a href="lipbrush.html">Lip Brushes</a>
        </div>
        <div class="seconddrop">
            <p onclick="CHEEK()">CHEEK</p>
            <p onclick="Blush()">Blush</p>
            <p onclick="Bronzer()">Bronzer</p>
            <a href="highlighter.html">Highlighter</a>
            <a href="faceoils.html">Face Oils</a>
       </div>
       <div class="seconddrop">
        <p onclick="NAILMAKEUP()">NAIL MAKEUP</p>
        <p onclick="NailPolish()">Nail Polish</p>
        <p onclick="NailCare()">Nail Care</p>
        <a href="manicure.html">Manicure & Pedicure Tools</a>
   </div>
   <div class="seconddrop">
    <p onclick"MAKEUPACCESSORIES()">MAKEUP ACCESSORIES</p>
    <p onclick="TweezersEyebrowTools()">Tweezers & Eyebrow Tools</p>
    <p onclick="MakeupRemovers()">Makeup Remover</p>
    <a href="sponges.html">Sponges & Applicators</a>
    <a href="makeupbag.html">Makeup Bags & Travel Cases</a>
</div>
<div class="seconddrop">
<p onclick="VEGAN()">VEGAN</p>
<p onclick="Eye()">Eye</p>
<a href="veganface.html">Face</a>
</div>

    </div></div>
    <div class="dropmenu">
        <div class="menubar"><a href="skincareCat.html">SKINCARE</a></div>
        <div class="firstdrop">
            <div class="seconddrop">
                <p onclick="MOISTURIZERS()">MOISTURIZERS</p>
                <p onclick="Moisturizers()">Moisturizers</p>
                <p onclick="NightCreams()">Night Creams</p>
                <a href="mist.html">Mists & Essences</a>
                <a href="cccream.html">BB & CC Creams</a>
            </div>
            <div class="seconddrop">
                <p onclick="CLEANSERS()">CLEANSERS</p>
                <p onclick="FaceWashCleansers()">Face Wash & Cleansers</p>
                <a href="makeupremover.html">Makeup Removers</p>
                <a href="facewipes.html">Face Wipes</a>
                <a href="toners.html">Toners</a>
                <a href="sanitizers.html">Hand Sanitizers</a>
               
            </div>
            <div class="seconddrop">
                <p onclick="TREATMENTS()">TREATMENTS & HIGH TECH TOOLS</p>
                <p onclick="FaceSerums()">Face Serums</p>
                <p onclick="CleansingTools()">Cleansing Tools</p>
                <a href="eyecream.html">Eye Creams & Treatments</a>
            </div>
            <div class="seconddrop">
                <p onclick="MASKS()">MASKS</p>
                <p onclick="FaceMasks()">Face Masks</p>
                <p onclick="SheetMasks()">Sheet Masks</p>
                <a href="eyemask.html">Eye Masks</a>
                <a href="nosemask.html">Nose Masks & Strips</a>
                <a href="lipmask.html">Lip Masks</a>
                <a href="hairmask.html">Hair Masks</a>
                <a href="handmask.html">Hand Masks</a>
                <a href="footmask.html">Foot Masks</a>
           </div>
           <div class="seconddrop">
            <p onclick="BATHSHOWER()">BATH & SHOWER</p>
            <p onclick="BodyWashandShowerGel()">Body Wash and Shower Gel</p>
            <p onclick="ScrubandExfoliants()">Scrub and Exfoliants</p>
            <a href="exfoliators.html">Exfoliators</a>
       </div>
       <div class="seconddrop">
        <p onclick="BODYMOISTURIZERS()">BODY MOISTURIZERS</p>
        <p onclick="BodyLotionsBodyOils()">Body Lotions & Body Oils</p>
        <p onclick="HandCreamFootCream()">Hand Cream & Foot Cream</p>
        
   </div>
   <div class="seconddrop">
    <p onclick="VEGAN()">VEGAN</p>
    <p onclick="FaceCare()">Face Care</p>
</div>

        </div></div>

    <div class="dropmenu">
        <div class="menubar"><a href="fragranceCat.html">FRAGRANCE</a></div>
        <div class="firstdrop">
            <div class="seconddrop">
                <p onclick="WOMEN()">WOMEN</p>
                <p onclick="Perfume()">Perfume</p>
                <p onclick="MistsandDeodorants()">Mists and Deodorants</p>
            </div>
            <div class="seconddrop">
                <p onclick="MEN()">MEN</p>
                <p onclick="Perfume()">Perfume</p>
                <p onclick="BodySpraysDeodorant()">Body Sprays & Deodorant</p>
                
            </div>
        </div></div>
        
    <div class="dropmenu">
      <div class="menubar"><a href="haircareCat.html">HAIRCARE</a></div>
      <div class="firstdrop">
      <div class="seconddrop">
           <p onclick="SHAMPOOCONDITIONER()">SHAMPOO & CONDITIONER</p>
           <p onclick="Shampoo()">Shampoo</p>
           <p onclick="Conditioner()">Conditioner</p>
             </div>
         <div class="seconddrop">
            <p onclick="TREATMENTS()">HAIR STYLING & TREATMENTS</p>
            <a href="hairspray.html">Hair Spray & Styling Products</a>
            <a href="hairoil.html">Hair Oil</a>
            <a href="hairmask.html">Hair Masks</a>
            <a href="hairclips.html">Hair Clips</a>
                    
                </div>
            </div></div>
    <div class="dropmenu">
                <div class="menubar"><a href="tool_n_brushes.html">TOOLS & BRUSHES</a></div>
                <div class="firstdrop">
            <div class="seconddrop">
                     <p onclick="BRUSHES()">BRUSHES</p>
                     <p onclick="FaceBrushes()">Face Brushes</p>
                     <p onclick="EyeBrushes()">Eye Brushes</p>
                     <a href="lipbrush.html">Lip Brushes</a>
              </div>
         <div class="seconddrop">
                      <p onclick="TOOLS()">TOOLS</p>
                      <p onclick="SpongesApplicators()">Sponges & Applicators</p>
                      <p onclick="FaceTools()">Face Tools</p>
                      <p href="hairclips.html">Hair Clips</p>
                      <a href="sharpeners.html">Sharpeners</a>
                      <a href="tweezers.html">Tweezers & Eyebrow Tools</a>
                      <a href="eyelash.html">Eyelash Curlers</a>
                      <a href="accessories.html">Accessories</a>
                      <a href="brushcleaners.html">Brush Cleaners</a>
                              
        </div>
        <div class="seconddrop">
            <a href="toolsvegan.html">VEGAN</a>
            <a href="facebrush.html">Face Brushes</a>
            <a href="eyebrush.html">Eye Brushes</a>
     </div>
    </div></div>
    <div class="dropmenu">
        <div class="menubar"><a href="brands.html">BRANDS</a></div>
        <div class="firstdrop">
            <div class="seconddrop">
                <a href="makeupbrands.html">TOP MAKEUP BRANDS</a>
                <a href="sephora.html">Sephora Collection</a>
                <a href="lancome.html">Lancôme</a>
                <a href="huda.html">Huda Beauty</a>
                <a href="benefit.html">Benefit Cosmetics</a>
                <a href="Beverly.html">Anastasia Beverly Hills</a>
                <a href="bobbi.html">Bobbi Brown</a>
                <a href="Smashbox.html">Smashbox</a>
                <a href="lauder.html">Estee Lauder</a>
                <a href="Nudestix.html">Nudestix</a>
                <a href="MAC.html">MAC</a>
                <a href="makeupforever.html">Make Up For Ever</a>
                <a href="Guerlain.html">Guerlain</a>
            </div>
            <div class="seconddrop">
                <a href="skincarebrands.html">TOP SKINCARE BRANDS</a>
                <a href="lancome.html">Lancôme</a>
                <a href="Caudalie.html">Caudalie</a>
                <a href="kora.html">Kora Organics</a>
                <a href="maio.html">Mario Badescu</a>
                <a href="foreo.html">Foreo</a>
                <a href="Foreox.html">Foreox</a>
                <a href="Shiseido.html">Shiseido</a>
                <a href="">Estee Lauder</a>
                <a href="Clarins.html">Clarins</a>
                <a href="arden.html">Elizabeth Arden</a>
                <a href="Clinique.html">Clinique</a>
                <a href="Gallinee.html">Gallinee</a>
                <a href="Wishful.html">Wishful</a>
                <a href="">Sunday Riley</a>
               
            </div>
            <div class="seconddrop">
                <a href="frangrancebrands..html">TOP FRAGRANCE BRANDS</a>
                <a href="ford.html">Tom Ford</a>
                <a href="boss.html">CHugo Boss</a>
                <a href="issey.html">Issey Miyake</a>
                <a href="zegna.html">Ermenegildo Zegna</a>
                <a href="dolce.html">Dolce & Gabbana</a>
                <a href="paco.html">Paco Rabanne</a>
                <a href="Bvlgari.html">Bvlgari</a>
                <a href="Kayali.html">Kayali</a>
                <a href="cavalli.html">Roberto Cavalli</a>
                <a href="Versace.html">Versace</a>
                <a href="Davidoff.html">Davidoff</a>
                <a href="klein.html">Calvin Klein</a>
                <a href="chopard.html">Chopard</a>
                <a href="laurent.html">Yves Saint Laurent</a>
                <a href="Burberry.html">Burberry</a>
            </div>
            <div class="seconddrop">
                <a href="newin.html">NEW IN</a>
                <a href="ikoo.html">Ikoo</a>
                <a href="ouai.html">Ouai</a>
                <a href="juice.html">Juice Beauty</a>
                <a href="abhati.html">Abhati Suisse</a>
                <a href="kora.html">Kora Organics</a>
                <a href="mario.html">Mario Badescu</a>
                <a href="moro.html">Moroccanoil</a>
                <a href="tiffany.html">Tiffany & Co</a>
                <a href="denona">Natasha Denona</a>
                <a href="lancome.html">Lancôme</a>
                <a href="dahlia.html">Dear Dahlia</a>
           </div>
   <div class="seconddrop">
    <a href="atoz.html">BRANDS A - Z</a>
</div>

        </div></div>
    
</div>`;
}
let footer = () => {
    return ` <a id="backtop" href="#"><div id="topbutton"><h1>^</h1><h4>BACK TO TOP</h4></div></a>
        
    <div id="footer1">
        <h2>GET THE LATEST NEWS & OFFERS IN BEAUTY & FASHION</h2>
        <div>
            <input type="email" placeholder="Enter your email address">
            <button>Subscribe</button>
        </div> 
    </div>
    <div id="footer2">
        <h4>Sephora online India is a trailblazer in the Indian beauty scene</h4>
        <p>A leader in luxury beauty and skincare, our purpose at Sephora online India is to create an inviting online beauty shopping experience and inspire fearlessness in our community. Since the Sephora India launch in 2013, we have been an industry-leading champion of diversity, and empowerment, guided by our longstanding company values.
        </p>
        <h3>Discover who we are and what we entail only on NNNOW.com</h3>
        <p>\nOwned by LVMH Moet Hennessy Louis Vuitton, the world's leading luxury goods group, Sephora was founded in France by Dominique Mandonnaud in 1970 and is defined by its unique, open-sell environment with an ever-increasing assortment of best-selling lipsticks, eyeliners, foundations, eye palettes and more from carefully curated brands such as Make Up For Ever, Estee Lauder, Benefit Cosmetics, Huda Beauty and many more.</p>
        <h3>Shop Our unrivalled range of Sephora products for a more beautiful you</h3>
        <p>\nOur array on Sephora NNNOW features trusted classics from Pixi, Elizabeth Arden, Anastasia Beverly Hills, Clinique, Tom Ford, and Sephora’s own, SEPHORA COLLECTION. Today, Sephora India online is a powerful beauty presence in the digital space, thanks to its unparalleled assortment of prestige products in every category, unbiased service from beauty experts, interactive shopping environment, and innovation.</p>
        <p>Through some of our bestsellers such as Sephora lipsticks, Sephora foundations, and other Sephora products, we explore the universe of beauty and wellness with an unbiased approach to experiential retail. We also host expert tutorial videos from our top brands to help you nail the perfect smokey eye or winged eyeliner. Our team of experts in-store also works hard to assure you have a seamless shopping experience with us and helps you define your skin undertones while purchasing the right sephora foundation for you. Sephora continues to give back to communities and advance inclusion in the beauty industry by providing an unrivaled range of shades for Sephora foundations at unbeatable prices.
        </p>
        <p>Sephora in India also encompasses a formidable range of skincare, bath and body products, haircare, fragrances and perfumes from international brands. Many of our brands such as Botanist and Forest Essentials boast of incorporating only natural ingredients in their products, whereas award-winning such as Natasha Denona, Nudestix, Kora Organics, Aveda, Olaplex, and more promise only SLS/Paraben-free formulas in their range of products. Be sure to also check out our range of cruelty-free brands that include best-selling brands such as Caudalie, Smashbox, Dear Dahlia, Juice Beauty and much more. Sephora online hosts the entire range of makeup and skin products available in Sephora stores in India. Buy Sephora online on NNNOW and be the first to be alerted when we have a major Sephora India sale event coming up!</p>
        <p>Start your Sephora India online shopping on NNNOW.com</p>
        <p>Women can now shop their favorite luxury beauty brands on the Sephora site or via the NNNOW mobile app. Be spoilt for choice with a wide variety of makeup, skincare, haircare, bath and body and fragrances that you can shop from the comfort of your home. Discover online shopping that offers advantages such as Gift With Purchase, freebie sachets, and discount offers on beauty! Buy Sephora online at amazing deals and prices at the click of a button.</p>
    </div>
    <div id="footer3">
        <div id="sub1footer3">
            <a href="aboutus.html"><h3>WHO WE ARE</h3></a>
            <a href="faq.html"><h3>FREQUENTLY ASKED QUESTIONS</h3></a>
            <a href="contactus.html"><h3>CONTACT US</h3></a>
        </div>
        <div id="sub2footer3">
            <div><a href="https://www.facebook.com/heynnnow">
                <img src="https://turfprolandscaping.com/images/icon-facebook-black.png" alt="facebook">
            </a></div>
            <div><a href="https://www.instagram.com/heynnnow"><img src="https://cdn.iconscout.com/icon/free/png-512/insta-2024941-1705143.png" alt="Instagram"></a></div>
            <div><a href="https://twitter.com/heynnnow"><img src="https://findicons.com/files/icons/2779/simple_icons/4096/twitter_4096_black.png" alt="twitter"></a></div>
            <div><a href="https://www.youtube.com/channel/UCQ2fMb06LyWA0S5upVp2UJg"><img src="https://th.bing.com/th/id/OIP.oMEUZZ94uVBNIihpbuYzgwHaHa?pid=ImgDet&rs=1" alt="youtube"></a></div>
        </div>
    
    <div id="sub3footer3">
        <a href="">© 2022 NNNOW |</a>
        <a href="privacy.html">Privacy Policy |</a>
        <a href="terms.html">Terms & Conditions</a>
    </div>
</div>
<div id="footer4">
    <div id="sub1footer4">
        <h3>BRANDS</h3>
        <div>
            <a href="sephora.html">Sephora Collection</a>
            <div class="gap">|</div>
            <a href="lancome.html">Lancôme</a>
            <div class="gap">|</div>
            <a href="huda.html">Huda Beauty</a>
            <div class="gap">|</div>
            <a href="benefit.html">Benefit Cosmetics</a>
            <div class="gap">|</div>
            <a href="Beverly.html">Anastasia Beverly Hills</a>
            <div class="gap">|</div>
            <a href="bobbi.html">Bobbi Brown</a>
            <div class="gap">|</div>
            <a href="lancome.html">Lancôme</a>
            <div class="gap">|</div>
            <a href="Caudalie.html">Caudalie</a>
            <div class="gap">|</div>
            <a href="kora.html">Kora Organics</a>
            <div class="gap">|</div>
            <a href="maio.html">Mario Badescu</a>
            <div class="gap">|</div>
            <a href="foreo.html">Foreo</a>
            <div class="gap">|</div>
            <a href="Foreox.html">Foreox</a>
            <div class="gap">|</div>
            <a href="Bvlgari.html">Bvlgari</a>
            <div class="gap">|</div>
                    <a href="Kayali.html">Kayali</a>
                    <div class="gap">|</div>
                    <a href="cavalli.html">Roberto Cavalli</a>
                    <div class="gap">|</div>
                    <a href="Versace.html">Versace</a>
                    <div class="gap">|</div>
                    <a href="Davidoff.html">Davidoff</a>
                    <div class="gap">|</div>
                    <a href="klein.html">Calvin Klein</a>
                    <div class="gap">|</div>
                    <a href="chopard.html">Chopard</a>
                    <div class="gap">|</div>
                    <a href="laurent.html">Yves Saint Laurent</a>
                    <div class="gap">|</div>
                    <a href="Burberry.html">Burberry</a>
                    <div class="gap">|</div>
                    <a href="newin.html">NEW IN</a>
                    <div class="gap">|</div>
                    <a href="ikoo.html">Ikoo</a>
                    <div class="gap">|</div>
                    <a href="ouai.html">Ouai</a>
                    <div class="gap">|</div>
                    <a href="juice.html">Juice Beauty</a>
                    <div class="gap">|</div>
                    <a href="abhati.html">Abhati Suisse</a>
                    <div class="gap">|</div>
                    <a href="kora.html">Kora Organics</a>

        </div>
    </div>
    <div class="sub2footer4">
        <h3>MAKEUP</h3>
        <div>
            <a href="face.html">FACE</a>
            <div class="gap">|</div>
<a href="eye.html">EYE</a>
<div class="gap">|</div>
<a href="lip.html">LIP</a>
<div class="gap">|</div>
<a href="cheek.html">CHEEK</a>
<div class="gap">|</div>
<a href="nailmakeup.html">NAIL MAKEUP</a>
            
        </div>
    </div>
    <div class="sub2footer4">
        <h3>SKIN CARE</h3>
        <div>
            <a href="MOISTURIZERS.html">MOISTURIZERS</a>
            <div class="gap">|</div>
<a href="CLEANSERS.html">CLEANSERS</a>
<div class="gap">|</div>
<a href="MASKS.html">MASKS</a>
<div class="gap">|</div>
<a href="bath.html">BATH & SHOWER</a>
            
        </div>
    </div>
    <div class="sub2footer4">
        <h3>OTHER CATEGORIES</h3>
        <div>
            <a href="fragrance.html">FRAGRANCE</a>
            <div class="gap">|</div>
            <a href="toolbrush.html">TOOLS & BRUSHES</a>
            
        </div>
    </div>
        <div class="sub2footer4">
            <h3>MY SEPHORA</h3>
            <div>
                <a href="order.html">My order</a>
                <div class="gap">|</div>
                <a href="storelocator.html">Store locator</a>
                <div class="gap">|</div>
                <a href="https://www.facebook.com/heynnnow">Sephora Facebook</a>                    <div class="gap">|</div>
                <a href="https://www.instagram.com/heynnnow">Sephora Instagram</a>
            </div>
</div>

</div>`;
}


let cartpopUp = () => {
    let mycart = document.querySelector("#mycart");
    mycart.addEventListener("click", function () {
        if (bagcount.innerText == "0") {
            document.querySelector(".cartpopup1").classList.add("active");
        }
        else {
            document.querySelector(".cartpopup2").classList.add("active");
        }
    })
    document.querySelector(".close_button1").addEventListener("click", function () {
        document.querySelector(".cartpopup1").classList.remove("active");
    });
    document.querySelector(".close_button2").addEventListener("click", function () {
        document.querySelector(".cartpopup2").classList.remove("active");
    });
}


export { navbar, footer, cartpopUp }

