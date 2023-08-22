$('#form1').submit(function(e){
    e.preventDefault();

    var u_name = $('#nome').val();

    //console.log(u_name);
    $.ajax({
        url: 'inserir.php',
        method: 'POST',
        data:{nome: u_name},
        dataType: 'json'
    }).done(function(result){
        $('#nome').val('');
        PegarNome();
    })
});

function PegarNome(){
    $.ajax({
        url: 'posicionar.php',
        method: 'GET',
        dataType: 'json'
    }).done(function(result){

        $('.batata').empty();

        for(var i = 0; i < result.length; i++){
            $('.batata').prepend('<div class="nomes justify"><span style="width: 130px;padding-left: 2px;">'+ result[i].nome +'</span><img id="'+ result[i].matricula +'" src="excluir_icon.png" width="8px" style="padding-left: 5px;" onclick="excluir()"></div>')
        }
    })
};

function excluir(){
$('img').click(function(e){
    e.preventDefault();

    // Obtenha o ID da imagem clicada
    var imgId = $(this).attr('id');

    $.ajax({
        url: 'excluir.php',
        method: 'POST',
        data: { id: imgId },
        dataType: 'json'
    }).done(function(){
        PegarNome();
    }).fail(function(jqXHR, textStatus, errorThrown){
        PegarNome();;
    });
})}
    





PegarNome();