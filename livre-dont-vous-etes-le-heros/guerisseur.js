function guerisseur(idSuite)
{ 
	var data = "next=" + idSuite;

	$.ajax({
			url : 'ajax_guerisseur.php',
       		type : 'POST',
       		data : data,
       		dataType : 'html', // On désire recevoir du HTML
       		success : function(responseText, statut)
			{ 
				$('#reponse').html(responseText);
			}
	});
}