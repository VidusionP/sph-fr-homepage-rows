import $ from 'jquery';

export default function () {
    if (localStorage.getItem("shp-country")) {

    } else {                    
        fetch(`https://www.cloudflare.com/cdn-cgi/trace`)
        .then(r=>r.text())
        .then(data=> {
            data = data.trim().split('\n').reduce(function(obj, pair) {
                pair = pair.split('=');
                return obj[pair[0]] = pair[1], obj;
            }, {});                    
            if (data.loc) {
                localStorage.setItem("shp-country", data.loc);

                if (data.loc=="US") {
                    setTimeout(function() {
                        $(".popup-country").css({display:"flex"});
                        $(".popup-country-title").append("hi there")
                        $(".popup-country-main").append("Are you visiting Superhairpieces.fr from U.S.?<br/>Visit our official global site for more relevant pricing, promotions and events.")

                        $(".popup-country-link").append("take me there")
                        $(".popup-country-continue").append("<div>Non, je viens de France</div><div class=popup-country-continue-link>Continuer de naviguer!</div>")
                        
                        $('.popup-country-link').attr('href', "//superhairpieces.com")

                        $(".popup-country-continue-link").on("click", function() {
                            $(".popup-country").hide();
                        });
                        $(".popup-country-overlay").on("click", function() {
                            $(".popup-country").hide();
                        })
                    },3500);
                } 
                    if (data.loc=="CA") {
                    setTimeout(function() {
                        $(".popup-country").css({display:"flex"});
                        $(".popup-country-title").append("hi there")
                        $(".popup-country-main").append("It looks like you are visiting us from Canada.<br/>You can visit our Canadian website for CAD prices and local shipping options.")

                        $(".popup-country-link").append("take me there")
                        $(".popup-country-continue").append("<div>Non, je viens de France</div><div class=popup-country-continue-link>Continuer de naviguer!</div>")
                        
                        $('.popup-country-link').attr('href', "//superhairpieces.ca")

                        $(".popup-country-continue-link").on("click", function() {
                            $(".popup-country").hide();
                        });
                        $(".popup-country-overlay").on("click", function() {
                            $(".popup-country").hide();
                        })
                    },3500);
                }

            }
        })
        .catch(e=>console.log(e));
    }     
}
