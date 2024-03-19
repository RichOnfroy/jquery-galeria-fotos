$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#button-cancel').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const endeNovaImg = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${endeNovaImg}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${endeNovaImg}" target="_blank" title=""Ver imagem em tamanhp real">
                    Ver Imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();
        $('#endereco-imagem-nova').val('')
    })
})