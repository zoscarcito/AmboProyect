!function(e){var t={};function i(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=14)}({14:function(e,t,i){"use strict";i.r(t);var a=i(2),r=i.n(a);r()(document).ready((function(e){e(".c-blog-slider__categories a").on("click",(function(t){t.preventDefault();var i=e(this).parent().attr("data-id");e(".c-blog-slider__categories a").removeClass("active"),e(this).addClass("active");var a={action:"belizefilter",category:i,nonce:travelbelize_scripts_params.security,perPage:travelbelizePostSlides};return e.ajax({url:travelbelize_scripts_params.ajaxurl,data:a,type:"POST",beforeSend:function(){},success:function(t){var i=e.parseJSON(t);e(".c-blog-slider__posts").html(i[0]);var a=i[1];a>=4&&(a=2),e(".c-blog-slider__posts ul").slick(function(e,t){if(e>4)var i=e-1,a=e-2;else if(e<=2)i=2,a=2;return{slidesToShow:e,centerMode:t=1==t,centerPadding:"15%",arrows:!0,responsive:[{breakpoint:1160,settings:{slidesToShow:i}},{breakpoint:991,settings:{slidesToShow:a}},{breakpoint:768,centerPadding:"50px",settings:{slidesToShow:1}}]}}(a,!0)),e(".c-blog-slider__posts .slick-slide[data-slick-index='-1'] li").addClass("faded"),e(".faded *").each((function(){e(this).addClass("faded")})),setTimeout((function(){e(".c-blog-slider__posts .slick-slide[data-slick-index='0'] li").addClass("faded"),e(".faded *").each((function(){e(this).addClass("faded")}))}),250),setTimeout((function(){e(".c-blog-slider__posts .slick-slide li").addClass("faded"),e(".faded *").each((function(){e(this).addClass("faded")}))}),500),jQuery(".c-blog-slider__posts ul").on("setPosition",(function(){jQuery(this).find(".slick-slide").height("auto");var e=jQuery(this).find(".slick-track"),t=jQuery(e).height();jQuery(this).find(".slick-slide").css("height",t+"px")}))}}),!1}))})),r()(document).ready((function(){r()(".c-alert-bar").on("click",(function(){var e=r()(this).find(".c-alert-bar__wrap");e.hasClass("open")?(e.removeClass("open"),r()(this).find(".read-more").html("LEARN MORE"),r()(this).prev().removeAttr("style"),r()(".wp-block-belize-blocks-hero-wrapper").css("margin-bottom","0rem")):(e.addClass("open"),r()(this).find(".read-more").html("SHOW LESS"))}))})),r()((function(){if("undefined"!=typeof belizeFlights){var e=[];for(var t in belizeFlights)belizeFlights.hasOwnProperty(t)&&(window["line"+t]=new LeaderLine(document.getElementById(t),document.getElementById("belize"),{dash:{animation:!0},path:"fluid",hide:!0,startLabel:t.toUpperCase(),middleLabel:LeaderLine.captionLabel(belizeFlights[t].duration,{color:"black"})}),e.push("line"+t));function i(){e.forEach((function(e){return window[e].hide()}))}r()(".location-pin").on("click",(function(){i(),r()(".c-flight-map").addClass("location-search"),r()(".c-flight-map").removeClass("airline-search"),r()("#airlines").val("AIRLINES"),r()(".c-flight-map__arrows").hide(),r()(".c-flight-map__flight-box").removeClass("active");var e=r()(this).attr("id");window["line"+e].show("draw"),r()(".c-flight-map__flight-box[data-airport='"+e+"']").each((function(e){0===e?(r()(".c-flight-map__flight-box").removeClass("active"),r()(this).addClass("active"),r()(".c-flight-map__arrows").hide()):r()(".c-flight-map__arrows").show()}));r()(".c-flight-map__flight-box[data-airport='"+e+"']").attr("data-airline")})),r()(window).resize((function(){i()})),r()("#airlines").on("change",(function(e){i(),r()(".c-flight-map").removeClass("location-search"),r()(".c-flight-map").addClass("airline-search");var t=this.value;r()(".c-flight-map__flight-box").hide(),r()(".c-flight-map__flight-box[data-airline='"+t+"']").each((function(e){if(0===e){r()(".c-flight-map__flight-box").removeClass("active"),r()(this).addClass("active");var t=r()(this).attr("data-airport");window["line"+t].show("draw"),r()(this).show(),r()(".c-flight-map__arrows").hide()}else r()(".c-flight-map__arrows").show()}))})),r()(".c-flight-map__arrows button").on("click",(function(){var e,t=r()(".c-flight-map__flight-box.active"),a=t.attr("data-airport"),l=t.attr("data-airline");r()(".c-flight-map").hasClass("location-search")?((e=t.nextAll("[data-airport='"+a+"']:first")).length||(e=r()("[data-airport='"+a+"']").first()),e.length&&(e.addClass("active"),t.removeClass("active"),i(),a=e.attr("data-airport"),window["line"+a].show("draw"))):((e=t.nextAll("[data-airline='"+l+"']:first")).length||(e=r()("[data-airline='"+l+"']").first()),e.length&&(e.addClass("active"),t.removeClass("active"),i(),a=e.attr("data-airport"),window["line"+a].show("draw")))}))}}));var l,o=document.querySelectorAll(".c-page-slider__slide video");for(l=0;l<o.length;++l)o[l].play();r()((function(){function e(){var e=r()(".slick-current img").attr("data-gif-src");e&&r()(".slick-current .c-page-slider__slide-inner .image").html("<video autoplay muted loop><source src=".concat(e,' type="video/mp4"></video>'));var t,i=document.querySelectorAll(".c-page-slider__slides .slick-slide video");for(t=0;t<i.length;++t)i[t].pause();var a,l=document.querySelectorAll(".c-page-slider__slides .slick-current video");for(a=0;a<l.length;++a)l[a].play()}r()(window).one("scroll",(function(){e()})),r()(".slick-arrow").on("click",(function(){e()}))}))},2:function(e,t){e.exports=jQuery}});
//# sourceMappingURL=script.js.map