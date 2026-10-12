var user_seleccionado;
  
function imprime_alerta() {
    alert('PRUEBA..:'+user_seleccionado.datos_personales.nombres);
}

function guardar_cambios() {
    // const dbref_user = ref(db,'usuarios');
     
     alert(user_seleccionado.datos_personales.nombres);
     
     /*set(ref(db, 'usuarios/' + usuarios), {
         username: nombre,
         email: email,
         activo: true
       })
       .then(() => {
         console.log("Datos guardados correctamente.");
       })
       .catch((error) => {
         console.error("Error al guardar datos: ", error);
     });*/
}

function display_blok_sub_ser() {
  var element = document.getElementById("modal_sub_usuarios");
  element.classList.toggle("display_none");
}

