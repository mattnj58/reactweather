(this.webpackJsonpreactweather=this.webpackJsonpreactweather||[]).push([[0],{47:function(e,t,a){e.exports=a(92)},52:function(e,t,a){},54:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(35),o=a.n(c),s=(a(52),a(9)),i=a.n(s),l=a(18),m=a(36),u=a(37),d=a(45),h=a(44),p=a(38);var f=function(e){return r.a.createElement("div",Object(p.a)({className:"container",margin:"3rem",font:"white"},"className","p-4"),r.a.createElement("div",{className:"cards pt-4"},r.a.createElement("h1",{className:"py-4"},e.date),r.a.createElement("h1",null,e.city),r.a.createElement("h5",{className:"py-4"},r.a.createElement("i",{className:"wi ".concat(e.weatherIcon," display-1")})),e.temp?r.a.createElement("h1",{className:"py-2"},e.temp,"\xb0F"):null,r.a.createElement("h4",{className:"py-3"},e.description),function(e,t){if(t&&e)return r.a.createElement("h3",null,r.a.createElement("span",{className:"px-4"},"High: ",e,"\xb0F"),r.a.createElement("span",{className:"px-4"},"Low: ",t,"\xb0F"))}(e.temp_max,e.temp_min)))},w=(a(54),a(94)),y=function(e){return r.a.createElement("div",{className:"alert alert-danger mx-5",role:"alert"},"Please Enter City and Country...!")},E=function(e){return 200!==e.resStatus&&void 0!==e.resStatus?r.a.createElement("div",{className:"container h-100"},r.a.createElement("form",{onSubmit:e.loadweather},r.a.createElement("div",null,e.error?y():""),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 offset-md-3"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter City or Zip Code",name:"city",autoComplete:"off"})),r.a.createElement("div",{className:"col-md-3 mt-md-0 py-2 text-md-left "},r.a.createElement("button",{className:"btn btn-warning"},"Get Weather"))),r.a.createElement("div",{className:"alert"},r.a.createElement(w.a,{bsStyle:"warning"},r.a.createElement("strong",null," Invalid City "))))):r.a.createElement("div",{className:"container h-100"},r.a.createElement("form",{onSubmit:e.loadweather},r.a.createElement("div",null,e.error?y():""),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 offset-md-3"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"City",name:"city",autoComplete:"off"})),r.a.createElement("div",{className:"col-md-3 mt-md-0 py-2 text-md-left "},r.a.createElement("button",{className:"btn btn-warning"},"Get Weather")))))},v=(a(87),a(32),a(33),a(88),a(93));var g=function(e){var t=e.forecast;return t?r.a.createElement("div",{className:"container",margin:"3rem"},t.map((function(e,t){var a,n="http://openweathermap.org/img/wn/".concat(e.weather[0].icon,".png");return r.a.createElement(v.a,{key:t},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{align:"center",width:"5%"},(a=e.dt,["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(1e3*a).getDay()%7])),r.a.createElement("td",{align:"center",width:"5%"},function(e){var t=new Date(1e3*e).getHours(),a="am";t>12?(a="pm",t-=12):0===t&&(t=12);return t+a}(e.dt)),r.a.createElement("td",{align:"center",width:"5%"},r.a.createElement("img",{src:n,alt:"hello"}),r.a.createElement("p",null,e.weather[0].description)),r.a.createElement("td",{align:"center",width:"10%"},Math.round(e.temp),"\xb0F"))))}))," "):null};a(89).config();Object({NODE_ENV:"production",PUBLIC_URL:"/reactweather",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL;var b="7b7154eb47e573afde1536472685b7fb",S="https://api.openweathermap.org/data/2.5/",N=function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],r=e.getFullYear();return"".concat(t," ").concat(n," ").concat(a,", ").concat(r)},x=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).getPosition=function(){return new Promise((function(e,t){navigator.geolocation.getCurrentPosition(e,t)}))},e.getGeoWeather=function(){var t=Object(l.a)(i.a.mark((function t(a,n){var r,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(S,"onecall?appid=").concat(b,"&lat=").concat(a,"&lon=").concat(n,"&units=imperial&exclude=minutely"));case 2:return r=t.sent,t.next=5,r.json();case 5:c=t.sent,e.setState({date:N(new Date),city:c.name,temp:Math.round(c.current.temp),icon:e.getWeatherIcon(c.current.weather[0].icon),description:c.current.weather[0].description,forecast:c.hourly}),e.getWeatherIcon(e.weatherIcon,c.current.weather[0].id);case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.getWeather=function(){var t=Object(l.a)(i.a.mark((function t(a){var n,r,c,o,s,l,m,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!(n=a.target.elements.city.value)){t.next=18;break}return t.next=5,fetch("".concat(S,"weather?APPID=").concat(b,"&q=").concat(n,",us&units=imperial"));case 5:return r=t.sent,t.next=8,fetch("".concat(S,"forecast?APPID=").concat(b,"&q=").concat(n,",us&units=imperial&cnt=360"));case 8:return c=t.sent,t.next=11,r.json();case 11:return o=t.sent,t.next=14,c.json();case 14:if(s=t.sent,200===r.status){for(l=s.list,m=[],u=0;u<l.length;u++)m.push(l[u].weather[0].icon);e.setState({date:N(new Date),city:"".concat(o.name),temp:Math.round(o.main.temp),temp_max:Math.round(o.main.temp_max),temp_min:Math.round(o.main.temp_min),description:o.weather[0].description,icon:e.getWeatherIcon(o.weather[0].icon),forecast:null,fIcons:null,error:!1,resStatus:r.status}),e.getWeatherIcon(e.weatherIcon,o.weather[0].id)}else e.setState({resStatus:r.status});t.next=19;break;case 18:e.setState({error:!0});case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={date:void 0,city:void 0,country:void 0,icon:void 0,main:void 0,temp:0,temp_max:0,temp_min:0,description:"",error:!1,forecast:void 0,fIcons:void 0,lat:0,long:0,resStatus:200},e.weatherIcon={Thunderstorm:"wi-thunderstorm",Drizzle:"wi-sleet",Rain:"wi-storm-showers",Snow:"wi-snow",Atmosphere:"wi-fog",Clear:"wi-day-sunny",Clouds:"wi-day-fog"},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.getPosition().then((function(t){e.getGeoWeather(t.coords.latitude,t.coords.longitude)})).catch((function(e){e.code,e.PERMISSION_DENIED,console.log(e.message)}))}},{key:"getWeatherIcon",value:function(e,t){switch(!0){case t>=200&&t<232:this.setState({icon:e.Thunderstorm});break;case t>=300&&t<=321:this.setState({icon:e.Drizzle});break;case t>=500&&t<=521:this.setState({icon:e.Rain});break;case t>=600&&t<=622:this.setState({icon:e.Snow});break;case t>=701&&t<=781:this.setState({icon:e.Atmosphere});break;case 800===t:this.setState({icon:e.Clear});break;case t>=801&&t<=804:this.setState({icon:e.Clouds});break;default:this.setState({icon:e.Clouds})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,{loadweather:this.getWeather,resStatus:this.state.resStatus}),r.a.createElement(f,{date:this.state.date,city:this.state.city,temp:this.state.temp,temp_max:this.state.temp_max,temp_min:this.state.temp_min,description:this.state.description,weatherIcon:this.state.icon}),r.a.createElement(g,{forecast:this.state.forecast,icon:this.weatherIcon}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.b08a304c.chunk.js.map