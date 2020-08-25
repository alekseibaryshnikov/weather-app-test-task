(this["webpackJsonpweather-app-test-task"]=this["webpackJsonpweather-app-test-task"]||[]).push([[0],{77:function(e,t,a){e.exports=a(90)},82:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(15),o=a.n(c),i=(a(82),a(13)),u=a(110),l=a(108),s=function(){var e=Object(l.a)({root:{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center","& > div":{alignSelf:"center"}}})();return n.a.createElement("div",{className:e.root},n.a.createElement("div",null,n.a.createElement(u.a,null)))},m=a(112),d=a(113),p=a(111),f=a(7),g=a(18),h="celcius",b="fahrenheit",v=Object(g.b)({name:"settings",initialState:{degree:h,currentPage:1,pageSize:3,activeDateForCharts:null},reducers:{changeDegree:function(e,t){e.degree=t.payload},nextPage:function(e,t){var a=t.payload,r=Math.ceil(a/e.pageSize),n=e.currentPage+1;e.currentPage=n>r?e.currentPage:n},prevoiusPage:function(e){var t=e.currentPage-1;e.currentPage=t>0?t:e.currentPage},setActiveDateForCharts:function(e,t){if(null==t.payload)e.activeDateForCharts=null;else{var a=new Date(t.payload).getTime(),r=new Date(e.activeDateForCharts).getTime();e.activeDateForCharts=a===r?null:a}}}}),E=v.actions,w=E.changeDegree,j=E.nextPage,O=E.prevoiusPage,x=E.setActiveDateForCharts,y=function(e){return e.settings.degree},D=function(e){return e.settings.currentPage},C=function(e){return e.settings.pageSize},_=function(e){return e.settings.activeDateForCharts},S=v.reducer;function k(e){var t=e.data,a=new Date(t.date),r=Object(l.a)({root:{height:"100%",boxSizing:"border-box",padding:10,cursor:"pointer",fontSize:"12px"}})(),c=Object(f.b)();return n.a.createElement(p.a,{className:r.root,onClick:function(){return c(x(a.getTime()))},"data-testid":"WeatherCardComponent"},n.a.createElement("p",null,n.a.createElement("strong",null,"Temperature:")," ",t.temperature,"\xb0"),n.a.createElement("p",null,n.a.createElement("strong",null,"Pressure:")," ",t.pressure),n.a.createElement("p",null,n.a.createElement("strong",null,"Weather:")," ",t.weatherType),n.a.createElement("p",null,n.a.createElement("strong",null,"Date:")," ",a.toLocaleDateString()))}var P=a(21),F=a.n(P),M=a(35),T=a(22);function z(){return N.apply(this,arguments)}function N(){return(N=Object(M.a)(F.a.mark((function e(){var t,a,r,n,c,o;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={latitude:"",longitude:""},e.prev=1,e.next=4,W();case 4:a=e.sent,r=a.coords,n=r.latitude,c=r.longitude,t={latitude:n,longitude:c},e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.warn("Error with geolocation API.. Set default Munich weather..",e.t0),t={longitude:"48.1351",latitude:"11.5820"};case 15:return e.next=17,fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=".concat(t.latitude,"&lon=").concat(t.longitude));case 17:if(!(o=e.sent).ok){e.next=22;break}return e.abrupt("return",o.json());case 22:throw Error("Response status is ".concat(o.status));case 23:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function W(){return new Promise((function(e,t){navigator.geolocation.getCurrentPosition(e,t)}))}var B=Object(g.b)({name:"weather",initialState:{},reducers:{setWeather:function(e,t){e.data=Object(T.a)(Object(T.a)({},e),t.payload)},setCards:function(e,t){e.cards=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=[],r=new Date,n=t,c=new Date(r.setDate(r.getDate()+t));n<5;n++)n>0&&c.setDate(c.getDate()+1),a.push(V(c,e));return a}(e.data,t.payload)},changeTemperatureType:function(e,t){e.cards=e.cards.map((function(e){return e.temperature=function(e,t){if(e.degrees===t||!t)return e.temperature;return U(e.temperature,t)}(e,t.payload),e.degrees=t.payload,e}))}}}),A=B.actions,H=A.setWeather,I=A.setCards,L=A.changeTemperatureType,R=function(e){return e.weather.data},J=function(e){return e.weather.cards},Y=B.reducer;function U(e,t){return t===b?Math.round(9*e/5+32):Math.round(5*(e-32)/9)}function V(e,t){var a,r=t.properties.timeseries.filter((function(t){var a=new Date(t.time),r=a.getFullYear()===e.getFullYear()&&a.getMonth()===e.getMonth()&&a.getDate()===e.getDate();if((new Date).getDate()===a.getDate())return r;var n=a.getHours()>10&&a.getHours()<23;return r&&n})).reduce((function(t,a,r,n){var c=a.data.instant.details,o=c.air_temperature,i=c.air_pressure_at_sea_level;if(0===r){var u=n[Math.floor(n.length/2)].data;t.weatherType=function(e){return new Proxy(e,{get:function(e,t){return"next_6_hours"===t&&e[t]?e[t].summary.symbol_code:"next_6_hours"!==t||e[t]?void 0:e.next_12_hours?e.next_12_hours.summary.symbol_code:e.next_1_hours?e.next_1_hours.summary.symbol_code:"Hmm.."}})}(u).next_6_hours,t.date=a.time}return t.temperature=o+t.temperature,t.pressure=i+t.pressure,t.counter=t.counter+1,t.date=t.date?t.date:e,t}),{temperature:0,pressure:0,counter:0,date:null,weatherType:null});return{temperature:Math.round(r.temperature/r.counter),pressure:(a=Math.round(r.pressure/r.counter),Math.round(.75*a)),weatherType:r.weatherType,date:r.date,degrees:h}}function $(e){var t=e.cards,a=e.degrees,c=e.currentPage,o=e.pageSize,u=Object(f.b)(),s=Object(r.useState)([]),p=Object(i.a)(s,2),g=p[0],h=p[1];Object(r.useEffect)((function(){u(I())}),[u]),Object(r.useEffect)((function(){u(L(a))}),[a,u]),Object(r.useEffect)((function(){if(t){var e=c-1>=0?c-1:0;h(t.slice(e,o+e))}}),[c,o,t]);var b=Object(l.a)({root:{marginBottom:"30px"}})();return n.a.createElement(m.a,{className:b.root,maxWidth:"md","data-testid":"ListOfWeatherCardsComponent"},n.a.createElement(d.a,{container:!0,justify:"center",alignItems:"stretch",spacing:2},g&&g.map((function(e,t){return n.a.createElement(d.a,{item:!0,key:"".concat(t,"-").concat(e.date),sm:4,xs:12},n.a.createElement(k,{data:e}))}))))}var q=a(58),G=a.n(q),K=a(59),Q=a.n(K),X=a(114);function Z(e){var t=e.currentPage,a=e.pageSize,c=e.cardsAmount,o=Object(l.a)({root:{marginBottom:"30px"},rightButton:{textAlign:"right"}})(),u=Object(f.b)(),s=Object(r.useState)(!0),p=Object(i.a)(s,2),g=p[0],h=p[1],b=Object(r.useState)(!0),v=Object(i.a)(b,2),E=v[0],w=v[1];return Object(r.useEffect)((function(){h(t<=1),w(t>=Math.ceil(c/a))}),[c,t,a]),n.a.createElement(m.a,{className:o.root,maxWidth:"md"},n.a.createElement(d.a,{container:!0,direction:"row",justify:"space-between","data-testid":"ArrowsComponent"},n.a.createElement(d.a,{item:!0,xs:2},n.a.createElement(X.a,{disabled:g,variant:"contained",color:"primary",onClick:function(){return u(O())}},n.a.createElement(G.a,null))),n.a.createElement(d.a,{className:o.rightButton,item:!0,xs:2},n.a.createElement(X.a,{disabled:E,variant:"contained",color:"primary",onClick:function(){return u(j(c))}},n.a.createElement(Q.a,null)))))}var ee=a(117),te=a(118),ae=a(119),re=a(116);function ne(e){var t=e.degrees,a=Object(f.b)(),r=Object(l.a)({root:{width:"100%",padding:"30px 0"},group:{justifyContent:"center"}})();return n.a.createElement(m.a,{maxWidth:"md","data-testid":"DegreesComponent"},n.a.createElement(d.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},n.a.createElement(d.a,{item:!0,xs:12},n.a.createElement(ee.a,{className:r.root,component:"fieldset"},n.a.createElement(te.a,{className:r.group,row:!0,"aria-label":"position",name:"position",defaultValue:"top"},n.a.createElement(ae.a,{value:h,control:n.a.createElement(re.a,{color:"primary",checked:t===h}),label:"Celcius",labelPlacement:"end",onClick:function(){return a(w(h))}}),n.a.createElement(ae.a,{value:b,control:n.a.createElement(re.a,{color:"primary",checked:t===b}),label:"Fahrenheit",labelPlacement:"end",onClick:function(){return a(w(b))}}))))))}var ce=a(115),oe=a(61),ie=a.n(oe),ue=a(16);function le(e){var t=e.activeDateForCharts,a=e.weatherData,c=e.currentDegrees,o=Object(l.a)({root:{padding:30,position:"relative",".bar":{fill:"blue"},marginBottom:30},fab:{right:-15,top:-15,position:"absolute"},chart:{width:"100%"}})(),u=Object(f.b)(),s=Object(r.useState)([]),d=Object(i.a)(s,2),g=d[0],h=d[1],b=Object(r.useRef)();return Object(r.useEffect)((function(){a&&t&&h(a.properties.timeseries.filter((function(e){var a=new Date(t),r=new Date(e.time);return a.getDate()===r.getDate()&&a.getMonth()===r.getMonth()})).map((function(e){var t=e.data.instant.details;return{temperature:t.air_temperature,pressure:t.air_pressure_at_sea_level,windSpeed:t.wind_speed,windDirection:t.wind_from_direction,humanity:t.relative_humidity,clouds:t.cloud_area_fraction,hour:new Date(e.time).getHours()}})))}),[a,t]),Object(r.useEffect)((function(){if(b.current){b.current.innerHTML="";var e={top:30,right:0,bottom:30,left:40},a=b.current.getBoundingClientRect().width,r=ue.g(b.current).append("svg").attr("viewBox",[0,0,a,300]).append("g"),n=ue.e().domain(ue.d(g.length)).range([e.left,a-e.right]).padding(.1),o=ue.f().domain([0,ue.c(g,(function(e){return e.temperature}))]).nice().range([300-e.bottom,e.top]);r.append("g").attr("fill","steelblue").selectAll("rect").data(g).join("rect").attr("x",(function(e,t){return n(t)})).attr("y",(function(e){return o(e.temperature)})).attr("height",(function(e){return o(0)-o(e.temperature)})).attr("width",n.bandwidth());r.append("g").call((function(t){return t.attr("transform","translate(0,".concat(300-e.bottom,")")).call(ue.a(n).tickFormat((function(e){return g[e].hour})).tickSizeOuter(0))})),r.append("g").call((function(a){return a.attr("transform","translate(".concat(e.left,",0)")).call(ue.b(o)).call((function(e){return e.select(".domain").remove()})).call((function(t){return t.append("text").attr("x",-e.left).attr("y",10).attr("fill","currentColor").attr("text-anchor","start").text("Temperature: ".concat(c.charAt(0).toUpperCase()+c.slice(1)))})).call((function(e){return e.append("text").attr("x","43%").attr("y",10).attr("fill","currentColor").attr("text-anchor","start").text("Date: ".concat(new Date(t).toLocaleDateString()))}))}))}}),[g,b,t,c]),Object(r.useEffect)((function(){c&&h((function(e){return e.map((function(e){return Object(T.a)(Object(T.a)({},e),{},{temperature:U(e.temperature,c)})}))}))}),[c]),n.a.createElement(n.a.Fragment,null,t&&n.a.createElement(m.a,{maxWidth:"md","data-testid":"ChartComponent"},n.a.createElement(p.a,{className:o.root},n.a.createElement(ce.a,{className:o.fab,color:"primary","aria-label":"add",size:"small",onClick:function(){return u(x(null))}},n.a.createElement(ie.a,null)),n.a.createElement("div",{ref:b,className:o.chart}))))}function se(e){var t=e.code,a=e.message;return n.a.createElement(d.a,{container:!0,"data-testid":"NotFoundErrorComponent"},n.a.createElement(d.a,{item:!0,xs:12},n.a.createElement("h1",null,"Something goes wrong.. :("),n.a.createElement("h3",null,"Error code: ",t),n.a.createElement("p",null,a)))}var me=function(){var e=Object(f.c)(J),t=Object(f.c)(y),a=Object(f.c)(C),r=Object(f.c)(D),c=Object(f.c)(_),o=Object(f.c)(R),i=e?e.length:0;return o?n.a.createElement(n.a.Fragment,null,n.a.createElement(ne,{degrees:t}),n.a.createElement(Z,{pageSize:a,currentPage:r,cardsAmount:i}),n.a.createElement($,{cards:e,degrees:t,currentPage:r,pageSize:a}),n.a.createElement(le,{activeDateForCharts:c,weatherData:o,currentDegrees:t})):n.a.createElement(se,{code:404,message:"Can't fetch data from server.."})};var de=function(){var e=Object(f.b)(),t=Object(f.c)(R),a=Object(r.useState)(!1),c=Object(i.a)(a,2),o=c[0],u=c[1];return Object(r.useEffect)((function(){e(function(){var e=Object(M.a)(F.a.mark((function e(t){var a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z();case 3:a=e.sent,t(H(a)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(r.useEffect)((function(){u(Boolean(t))}),[t]),n.a.createElement(n.a.Fragment,null,o?n.a.createElement(me,null):n.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pe=Object(g.a)({reducer:{weather:Y,settings:S}});o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f.a,{store:pe},n.a.createElement(de,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[77,1,2]]]);
//# sourceMappingURL=main.12d3daae.chunk.js.map