(this.webpackJsonpweather2=this.webpackJsonpweather2||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),u=a.n(l),c=(a(9),a(1)),i=Object(n.createContext)({}),s=function(e){var t=e.children,a=Object(n.useState)({}),l=Object(c.a)(a,2),u=l[0],s=l[1],m=Object(n.useState)(""),o=Object(c.a)(m,2),h=o[0],E=o[1],d=Object(n.useState)(""),p=Object(c.a)(d,2),f=p[0],w=p[1];return r.a.createElement(i.Provider,{value:{weatherData:u,setWeatherData:s,handleCitySubmit:function(e){if(h){e.preventDefault();var t="https://api.openweathermap.org/data/2.5/weather?q=".concat(h,"&APPID=").concat("8849d2349ade58f181af158b5201547d","&units=metric");fetch(t).then((function(e){if(e.ok)return w(""),e;throw Error("Nie uda\u0142o si\u0119")})).then((function(e){return e.json()})).then((function(e){var t={date:(new Date).toLocaleString(),sunrise:e.sys.sunrise,sunset:e.sys.sunset,temp:e.main.temp,pressure:e.main.pressure,wind:e.wind.speed,city:h};s(t)})).catch((function(){w(h)}))}},inputValue:h,setInputValue:E,messageErr:f}},t)},m=function(){var e=Object(n.useContext)(i),t=e.handleCitySubmit,a=e.setInputValue,l=e.inputValue;return r.a.createElement("form",{onSubmit:function(e){return t(e)}},r.a.createElement("input",{onChange:function(e){return a(e.target.value)},placeholder:"Wpisz nazw\u0119 miasta...",type:"text",value:l}),r.a.createElement("button",null,"Wyszukaj miejscowo\u015b\u0107"))},o=function(){var e=Object(n.useContext)(i),t=e.weatherData,a=e.messageErr,l=null;if(Object.keys(t).length){var u=t.city,c=t.pressure,s=t.sunset,m=t.sunrise,o=t.temp,h=t.wind,E=t.date,d=new Date(1e3*m).toLocaleTimeString(),p=new Date(1e3*s).toLocaleTimeString();l=r.a.createElement("div",{className:"result"},r.a.createElement("h3",null,"Wyniki wyszukiwania dla: ",r.a.createElement("em",null,u)),r.a.createElement("hr",null),r.a.createElement("h4",null,"Dane dla dnia i godziny: ",E),r.a.createElement("hr",null),r.a.createElement("h4",null,"Aktualna temperatura: ",o," \xb0C"),r.a.createElement("hr",null),r.a.createElement("h4",null,"Wsch\xf3d s\u0142o\u0144ca dzisiaj o: ",d),r.a.createElement("hr",null),r.a.createElement("h4",null,"Zach\xf3d s\u0142o\u0144ca dzisiaj o: ",p),r.a.createElement("hr",null),r.a.createElement("h4",null,"Aktualna si\u0142a wiatru: ",h," m/s"),r.a.createElement("hr",null),r.a.createElement("h4",null,"Aktualne ci\u015bnienie: ",c," hPa"),r.a.createElement("hr",null))}return r.a.createElement("div",{className:"result"},a?r.a.createElement("h5",null,"Nie mamy w bazie ",a):l)},h=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(s,null,r.a.createElement(m,null),r.a.createElement(o,null)))};u.a.render(r.a.createElement(h,null),document.getElementById("root"))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.a27eaad3.chunk.js.map