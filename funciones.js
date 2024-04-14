
function doGet() {
    
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

    let hoja = SpreadsheetApp.openById('1zymso9uMkp4flWkJOo2m6-4pU5EDkt2Cj-9ETksNgSs').getActiveSheet();
    let datos = hoja.getDataRange().getValues();

    return datos;

}