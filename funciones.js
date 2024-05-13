
const HOJA = SpreadsheetApp.openById('1zymso9uMkp4flWkJOo2m6-4pU5EDkt2Cj-9ETksNgSs').getActiveSheet();

/** funcion que trae los datos del GET del formulario de creacion de contacto  */
function doGet(datos) {
    /** se debe convertir los datos a un objeto, se traen con parameter y el nombre del campo del formulario*/
    insertarContacto(datos.parameter.nombre, datos.parameter.telefono, datos.parameter.correo );
    /**  se debe retornar de nuevo la plantilla html */
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle("agenda de GAS"); 
}


/** funcion que trae los datos del POST del formulario de creacion de contacto  */
function doPost(datos)
{
    /** se debe convertir los datos a un objeto, se traen con parameter y el nombre del campo del formulario*/
    insertarContacto(datos.parameter.nombre, datos.parameter.telefono, datos.parameter.correo );

    /**  se debe retornar de nuevo la plantilla html */
      return HtmlService.createTemplateFromFile('web').evaluate().setTitle("agenda de GAS"); 
}


function obtenerDatosHtml(nombre) {

    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
    
}

/**
 * funcion que trae la hoja de calculo y  devuelve los datos para mostrarlos en el html
 * @returns   {datos} - objeto la informacion que contiene la hoja de calculo
 */
function obtenerContactos(){

   
    return HOJA.getDataRange().getValues();

}

/**
 * funcion que inserta un nuevo contacto*/

function insertarContacto(nombre, apellido, telefono, correo) {

    HOJA.appendRow([nombre, apellido, telefono, correo]);
    
}