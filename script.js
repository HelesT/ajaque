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
        console.log(result);
        PegarNome();
    })
});

function PegarNome(){
    $.ajax({
        url: 'posicionar.php',
        method: 'GET',
        dataType: 'json'
    }).done(function(result){
        console.log(result);

        $('.batata').empty();

        for(var i = 0; i < result.length; i++){
            $('.batata').prepend('<div class="nomes justify"><span style="width: 130px;padding-left: 2px;">'+ result[i].nome +'</span><img src="excluir_icon.png" width="8px" onclick="excluirNome()"></div>')
            console.log(result[i].id);
        }
    })
};

PegarNome();