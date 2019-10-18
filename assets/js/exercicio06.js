function testaValorMaior(){
    var valor1 = document.getElementById('valor1').value;
    var valor2 = document.getElementById('valor2').value;




    if(valor1 > valor2){
       valorUmMaior();
        

    }

    else if(valor2 > valor1){
        valorDoisMaior();
    }

    else{
        valorIgual();
    }


    console.log('Valor 1: ' +valor1);
    console.log('Valor 2: ' +valor2);
}

    function valorUmMaior(){
        let html = '<div class="col-sm-12 col-md-9 col-lg-12 pt-29">' +
        '<div class="alert alert-success" role="alert">' +
        '<h4>Valor 1 é maior do que o valor 2.</h4>' +
        '</div>' +
        '</div>';
        let mensagemResultado = document.getElementById('mensagemResultado');
        mensagemResultado.className = 'row visible';
        mensagemResultado.innerHTML = html;
    }

    function valorDoisMaior(){
        let html = '<div class="col-sm-12 col-md-9 col-lg-12 pt-29">' +
        '<div class="alert alert-success" role="alert">' +
        '<h4>Valor 2 é maior do que o valor 1.</h4>' +
        '</div>' +
        '</div>';
        let mensagemResultado = document.getElementById('mensagemResultado');
        mensagemResultado.className = 'row visible';
        mensagemResultado.innerHTML = html;
    }

    function valorIgual(){
        let html = '<div class="col-sm-12 col-md-9 col-lg-9 pt-29">' +
        '<div class="alert alert-danger" role="alert">' +
        '<h4>Não é permitido digitar valores iguais, por favor digite um valor diferente para o valor 2.</h4>' +
        '</div>' +  
        '</div>';
        let mensagemResultado = document.getElementById('mensagemResultado');
        mensagemResultado.className = 'row visible';
        mensagemResultado.innerHTML = html;
    }
     




