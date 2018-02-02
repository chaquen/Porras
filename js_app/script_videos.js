agregarEventoLoad(function(){
	load_videos();
});
function load_videos(){
	consultarDatos("videos",{},function(rs){
		console.log(rs);
		dibujar_videos(rs.datos);
	});
	consultarDatos("comentarios",{},function(rs){
		console.log(rs);
		dibujar_comentarios(rs.datos);
	});
}
function dibujar_videos(datos){
	var ul=document.getElementById("liListaVideos");
	ul.innerHTML="";
	for(var i in datos){
		var li=document.createElement("li");
		var iframe=document.createElement("iframe");
		iframe.src="https://www.youtube.com/embed/"+datos[i].url;
		li.appendChild(iframe);
		ul.appendChild(li);
	}
}
function dibujar_comentarios(datos){
	var div=document.getElementById("divTestimonios");
	div.innerHTML="";
	for(var i in datos){
		
		var div1=document.createElement("div");
		div1.className="span4";
		var div2=document.createElement("div");
		div2.className="testimonial";
		var p=document.createElement("p");
		p.innerHTML=datos[i].comentario;
		var div3=document.createElement("div");
		div3.className="whopic";
		var div4=document.createElement("div");
		div4.className="arrow";
		var img=document.createElement("img");
		//img.src="images/Client2.png";
		//img.setAttribute("alt",datos[i].autor);
		img.className="centered";
		var strong=document.createElement("strong");
		strong.innerHTML=datos[i].autor.split(",")[0];
		var small=document.createElement("small");
		small.innerHTML=datos[i].autor.split(",")[1];
		strong.appendChild(small);
		div3.appendChild(div4);
		div3.appendChild(img);
		div3.appendChild(strong);
		div2.appendChild(p);
		div2.appendChild(div3);
		div1.appendChild(div2);
		div.appendChild(div1);

	}
}