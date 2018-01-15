agregarEventoPageShow(function(){
	iniciar_competencias();
});

function iniciar_competencias(){
	consultarDatos("competencias",{},function(rs){
		console.log(rs);
		dibujar_competencias(rs.datos);
	});
}

function dibujar_competencias(datos){
	

	
	//aqui construyo las competencias
	var sp=document.getElementById("single-project");
	sp.innerHTML="";	
	for(var c in datos){
		var div=document.createElement("div");
		div.setAttribute("id","slidingDiv_"+Number(c));
		div.setAttribute("style","display:none");
		//div.setAttribute("style","z-index:9999");
		//div.setAttribute("style","position:fixed");
		div.className="toggleDiv row-fluid single-project";
		var div0=document.createElement("div");
		div0.className="span6";
		if(datos[c].tipo_recurso=="video"){
			var recurso=document.createElement("iframe");
			recurso.setAttribute("style","width:560; height:315");
			recurso.width="560";
			recurso.height="315";
			recurso.setAttribute("src","https://www.youtube.com/embed/"+datos[c].url_recurso);
			recurso.setAttribute("frameborder",0);
			recurso.setAttribute("allowfullscreen",true)
		}else{
			var recurso=document.createElement("img");
			recurso.src="images/"+datos[c].url_recurso;
		}
		div0.appendChild(recurso);
		div.appendChild(div0);

		var div1=document.createElement("div");
		div1.className="span6";
		var div2=document.createElement("div");
		div2.className="project-description";
		var div3=document.createElement("div");
		div3.className="project-title clearfix";
		var h3=document.createElement("h3");
		h3.innerHTML=datos[c].nombre_competencia;
		var span=document.createElement("span");
		span.className="show_hide close";
		var i=document.createElement("i");
		i.className="icon-cancel";
		i.setAttribute("onclick","ocultar_el_div('slidingDiv_"+Number(c)+"')");
		span.appendChild(i);
		div3.appendChild(h3);
		div3.appendChild(span);
		div2.appendChild(div3);
		

		var div4=document.createElement("div");
		div4.className="project-info";
		var div5=document.createElement("div");
		var span=document.createElement("span");
		span.innerHTML="Fecha:";
		div5.appendChild(span);
		var txt=document.createTextNode(datos[c].fecha_competencia);
		div5.appendChild(txt);		
		div4.appendChild(div5);
		var div6=document.createElement("div");
		var span=document.createElement("span");
		span.innerHTML="Lugar:";
		div6.appendChild(span);		
		var txt=document.createTextNode(datos[c].lugar_competencia);
		div6.appendChild(txt);
		div4.appendChild(div6);
		var div7=document.createElement("div");
		var span=document.createElement("span");
		span.innerHTML="Posición:";
		div7.appendChild(span);
		var txt=document.createTextNode(datos[c].posicion_competencia);
		div7.appendChild(txt);
		div4.appendChild(div7);
		var div8=document.createElement("div");
		var span=document.createElement("span");
		span.innerHTML="";
		div8.appendChild(span);
		var txt=document.createTextNode("");
		div8.appendChild(txt);
		div4.appendChild(div8);
		div2.appendChild(div4);

		var p=document.createElement("p");
		p.innerHTML=datos[c].descripcion_competencia;
		div2.appendChild(p);
		div1.appendChild(div2);

		
		div.appendChild(div1);
		sp.appendChild(div);
	}


	
	var lista=document.createElement("ul");
	lista.setAttribute("id","portfolio-grid");	
	lista.className="thumbnails row";
	//aqui construyo los elemntos que activan las fotos
	for(var c in datos){
		var li=document.createElement("li");
		li.className="span4 "+datos[c].tipo_competencia;
		li.setAttribute("data-cat",datos[c].tipo_competencia);
		var div=document.createElement("div");
		div.className="thumbnail animated fadeInDown";
		var img=document.createElement("img");
		img.src="images/Portfolio01.png";
		img.setAttribute("alt","project 1");
		var a=document.createElement("a");
		a.setAttribute("href","#single-project");
		a.setAttribute("onclick","mostrar_el_div('"+"slidingDiv_"+Number(c)+"','"+Number(c)+"','"+datos.length+"')");
		a.setAttribute("rel","#slidingDiv_"+Number(c));
		a.className="show_hide more";
		var i=document.createElement("i");
		i.className="icon-plus";
		var h3=document.createElement("h3");
		h3.innerHTML=datos[c].nombre_competencia;
		var p=document.createElement("p");
		p.innerHTML=datos[c].descripcion_competencia;
		var divmask=document.createElement("div");
		divmask.className="mask";		
		div.appendChild(img);
		a.appendChild(i);
		div.appendChild(a);		
		div.appendChild(h3);
		div.appendChild(p);
		div.appendChild(divmask);
		li.appendChild(div);
		lista.appendChild(li);
	}
	sp.appendChild(lista);

}
function mostrar_el_div(id,posicion,tam){
	for (var i = 0; i <= tam; i++) {
		if(id=="slidingDiv_"+i){
			document.getElementById(id).style.display='block'
		}else{
			document.getElementById("slidingDiv_"+i).style.display='none'
		}
	}
}
function ocultar_el_div(id){
	document.getElementById(id).style.display="none";
	//jQuery("#"+id).addClass("ocultar");
	//jQuery(".mostrar").removeClass("mostrar");
}