(this.webpackJsonpreactweather=this.webpackJsonpreactweather||[]).push([[0],{146:function(e,t,a){},148:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(42),o=a.n(c),i=(a(61),a(8)),s=a.n(i),l=a(20),m=a(43),u=a(44),d=a(55),h=a(54),p=a(5);var f=function(e){return r.a.createElement("div",{margin:"3rem",font:"white",className:"p-4"},r.a.createElement("div",{className:"cards pt-4"},r.a.createElement("h1",{className:"py-4"},e.date),r.a.createElement("h1",null,e.city),r.a.createElement("h5",{className:"py-4"},r.a.createElement("i",{className:"wi ".concat(e.weatherIcon," display-1")})),r.a.createElement("h4",{className:"py-3"},e.description),e.temp?r.a.createElement("h1",{className:"py-2"},e.temp,"\xb0F"):r.a.createElement("div",null,r.a.createElement(p.ClipLoader,null)),function(e,t){if(t&&e)return r.a.createElement("h3",null,r.a.createElement("span",{className:"px-4"},"High: ",e,"\xb0F"),r.a.createElement("span",{className:"px-4"},"Low: ",t,"\xb0F"))}(e.temp_max,e.temp_min)))},E=(a(91),a(154)),w=function(e){return r.a.createElement("div",{className:"alert alert-danger mx-5",role:"alert"},"Please Enter City and Country...!")},v=function(e){return 200!==e.resStatus&&void 0!==e.resStatus?r.a.createElement("div",{className:"container h-100"},r.a.createElement("form",{onSubmit:e.loadweather},r.a.createElement("div",null,e.error?w():""),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 offset-md-3"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter City or Zip Code",name:"city",autoComplete:"off"})),r.a.createElement("div",{className:"col-md-3 mt-md-0 py-2 text-md-left "},r.a.createElement("button",{className:"btn btn-warning"},"Get Weather"))),r.a.createElement("div",{className:"alert"},r.a.createElement(E.a,{bsStyle:"warning"},r.a.createElement("strong",null," Invalid City "))))):r.a.createElement("div",{className:"container h-100"},r.a.createElement("form",{onSubmit:e.loadweather},r.a.createElement("div",null,e.error?w():""),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 offset-md-3"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"City",name:"city",autoComplete:"off"})),r.a.createElement("div",{className:"col-md-3 mt-md-0 py-2 text-md-left "},r.a.createElement("button",{className:"btn btn-warning"},"Get Weather")))))};var y=function(e){var t="http://openweathermap.org/img/wn/".concat(e.icon,"@2x.png");return e?r.a.createElement("div",{margin:"auto"},r.a.createElement("p",null,function(e){var t=new Date(1e3*e).getHours(),a="am";t>12?(a="pm",t-=12):0===t&&(t=12);return t+a}(e.time)),r.a.createElement("img",{src:t,alt:e.icon}),r.a.createElement("p",null,Math.round(e.temp),"\xb0F")):r.a.createElement("div",null,r.a.createElement(p.ClipLoader,null))},g=a(52),S=function(e){var t=e.text;return r.a.createElement("div",null,t)},b=S({text:"<"}),x=S({text:">"}),N=function(e){var t=e.hourly;return t?r.a.createElement(g.ScrollMenu,{LeftArrow:b,RightArrow:x},t.map((function(e){return r.a.createElement(y,{time:e.dt,temp:e.temp,icon:e.weather[0].icon})}))):r.a.createElement("div",null,r.a.createElement(p.ClipLoader,null))},C=(a(146),a(147),a(40),a(148),a(53)),_=a.n(C);function I(e){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(1e3*e).getDay()%7]}var D=function(e){var t=e.forecast;return t?r.a.createElement("div",null,t.map((function(e){var t="http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png");return r.a.createElement(_.a,{className:"Collapsible",trigger:"".concat(I(e.dt))},r.a.createElement("div",{className:"Collapsible_contentInner"},r.a.createElement("img",{src:t,width:"150",height:"150",alt:"Weather Icon"}),r.a.createElement("h5",null,e.weather[0].main.toUpperCase()),r.a.createElement("h3",null,Math.round(e.temp.day),"\xb0F"),function(e,t){if(e&&t)return r.a.createElement("div",null,r.a.createElement("h4",{width:"50%",margin:"auto"},"High: ",Math.round(e),"\xb0F"),r.a.createElement("h4",{width:"50%",margin:"auto"},"Low: ",Math.round(t),"\xb0F"))}(e.temp.max,e.temp.min)))}))):r.a.createElement("div",null,r.a.createElement(p.ClipLoader,null))};a(149).config();Object({NODE_ENV:"production",PUBLIC_URL:"/reactweather",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL;var W="7b7154eb47e573afde1536472685b7fb",k="https://api.openweathermap.org/data/2.5/",M=function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],r=e.getFullYear();return"".concat(t," ").concat(n," ").concat(a,", ").concat(r)},P=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).getPosition=function(){return new Promise((function(e,t){navigator.geolocation.getCurrentPosition(e,t)}))},e.getGeoWeather=function(){var t=Object(l.a)(s.a.mark((function t(a,n){var r,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(k,"onecall?appid=").concat(W,"&lat=").concat(a,"&lon=").concat(n,"&units=imperial&exclude=minutely"));case 2:return r=t.sent,t.next=5,r.json();case 5:c=t.sent,e.setState({date:M(new Date),city:c.name,temp:Math.round(c.current.temp),icon:e.getWeatherIcon(c.current.weather[0].icon),description:c.current.weather[0].description,forecast:c.daily,hourly:c.hourly,resStatus:200}),e.getWeatherIcon(e.weatherIcon,c.current.weather[0].id);case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.getWeather=function(){var t=Object(l.a)(s.a.mark((function t(a){var n,r,c,o,i,l,m,u;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!(n=a.target.elements.city.value)){t.next=18;break}return t.next=5,fetch("".concat(k,"weather?APPID=").concat(W,"&q=").concat(n,",us&units=imperial"));case 5:return r=t.sent,t.next=8,fetch("".concat(k,"forecast?APPID=").concat(W,"&q=").concat(n,",us&units=imperial&cnt=360"));case 8:return c=t.sent,t.next=11,r.json();case 11:return o=t.sent,t.next=14,c.json();case 14:if(i=t.sent,200===r.status){for(l=i.list,m=[],u=0;u<l.length;u++)m.push(l[u].weather[0].icon);e.setState({date:M(new Date),city:"".concat(o.name),temp:Math.round(o.main.temp),temp_max:Math.round(o.main.temp_max),temp_min:Math.round(o.main.temp_min),description:o.weather[0].description,icon:e.getWeatherIcon(o.weather[0].icon),error:!1,resStatus:r.status}),e.getWeatherIcon(e.weatherIcon,o.weather[0].id)}else e.setState({resStatus:r.status});t.next=19;break;case 18:e.setState({error:!0});case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={date:void 0,city:void 0,country:void 0,icon:void 0,main:void 0,temp:0,temp_max:0,temp_min:0,description:"",error:!1,forecast:void 0,fIcons:void 0,lat:0,long:0,daily:"",hourly:""},e.weatherIcon={Thunderstorm:"wi-thunderstorm",Drizzle:"wi-sleet",Rain:"wi-storm-showers",Snow:"wi-snow",Atmosphere:"wi-fog",Clear:"wi-day-sunny",Clouds:"wi-day-fog"},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.getPosition().then((function(t){e.getGeoWeather(t.coords.latitude,t.coords.longitude)})).catch((function(e){e.code,e.PERMISSION_DENIED,console.log(e.message)}))}},{key:"getWeatherIcon",value:function(e,t){switch(!0){case t>=200&&t<232:this.setState({icon:e.Thunderstorm});break;case t>=300&&t<=321:this.setState({icon:e.Drizzle});break;case t>=500&&t<=521:this.setState({icon:e.Rain});break;case t>=600&&t<=622:this.setState({icon:e.Snow});break;case t>=701&&t<=781:this.setState({icon:e.Atmosphere});break;case 800===t:this.setState({icon:e.Clear});break;case t>=801&&t<=804:this.setState({icon:e.Clouds});break;default:this.setState({icon:e.Clouds})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"React Weather"),r.a.createElement(v,{loadweather:this.getWeather,resStatus:this.state.resStatus}),r.a.createElement(f,{date:this.state.date,city:this.state.city,temp:this.state.temp,temp_max:this.state.temp_max,temp_min:this.state.temp_min,description:this.state.description,weatherIcon:this.state.icon}),r.a.createElement(N,{hourly:this.state.hourly}),r.a.createElement(D,{forecast:this.state.forecast,icon:this.weatherIcon}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},56:function(e,t,a){e.exports=a(152)},61:function(e,t,a){},91:function(e,t,a){}},[[56,1,2]]]);
//# sourceMappingURL=main.5e1bf803.chunk.js.map