!function(e,t){"object"==typeof exports&&"undefined"!=typeof module&&"function"==typeof require?t(require("../moment")):"function"==typeof define&&define.amd?define(["../moment"],t):t(e.moment)}(this,(function(e){"use strict";var t="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),i="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),n=[/^sty/i,/^lut/i,/^mar/i,/^kwi/i,/^maj/i,/^cze/i,/^lip/i,/^sie/i,/^wrz/i,/^paź/i,/^lis/i,/^gru/i];function r(e){return e%10<5&&e%10>1&&~~(e/10)%10!=1}function s(e,t,i){var n=e+" ";switch(i){case"ss":return n+(r(e)?"sekundy":"sekund");case"m":return t?"minuta":"minutę";case"mm":return n+(r(e)?"minuty":"minut");case"h":return t?"godzina":"godzinę";case"hh":return n+(r(e)?"godziny":"godzin");case"ww":return n+(r(e)?"tygodnie":"tygodni");case"MM":return n+(r(e)?"miesiące":"miesięcy");case"yy":return n+(r(e)?"lata":"lat")}}return e.defineLocale("pl",{months:function(e,n){return e?/D MMMM/.test(n)?i[e.month()]:t[e.month()]:t},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),monthsParse:n,longMonthsParse:n,shortMonthsParse:n,weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:function(){switch(this.day()){case 0:return"[W niedzielę o] LT";case 2:return"[We wtorek o] LT";case 3:return"[W środę o] LT";case 6:return"[W sobotę o] LT";default:return"[W] dddd [o] LT"}},lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";case 3:return"[W zeszłą środę o] LT";case 6:return"[W zeszłą sobotę o] LT";default:return"[W zeszły] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",ss:s,m:s,mm:s,h:s,hh:s,d:"1 dzień",dd:"%d dni",w:"tydzień",ww:s,M:"miesiąc",MM:s,y:"rok",yy:s},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}));