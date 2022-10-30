function agramor(idSuite)
{ 
	var data = "next=" + idSuite;

	$.ajax({
			url : 'ajax_agramor.php',
       		type : 'POST',
       		data : data,
       		dataType : 'html', // On désire recevoir du HTML
       		success : function(responseText, statut)
			{ 
				$('#reponse').html(responseText);
			}
	});
}