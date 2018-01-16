agregarEventoLoad(function(){
	agregarEvento("subscribe","click",function(){
		var datos=$("#form-suscribe").serializarFormulario();
		if(datos!=false){
			registrarDato("suscribir",datos,function(rs){
				console.log(rs);
				mostrarMensaje(rs);
			},"form-suscribe");	
		}
		
	});
});
	
