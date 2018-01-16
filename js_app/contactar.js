agregarEventoLoad(function(){
	agregarEvento("send-mail","click",function(){
		var datos=$("#contact-form").serializarFormulario();
		if(datos!=false){
			registrarDato("contactar",datos,function(rs){
				console.log(rs);
				mostrarMensaje(rs);
			},"contact-form");	
		}
		
	});
});
	
