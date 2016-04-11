
//Escoder el spolier
$(".spoiler span").hide();

//agreg boton
$(".spoiler").append("<button> Mostrar spoiler </button>");

$(".spoiler button").click(function(){
	$(".spoiler span").show();
	$(this).remove();
})

function enviarAdvertencia() 
{
	jQuery (".spoiler").hide().show("slow");
}

$(document).ready(enviarAdvertencia);

