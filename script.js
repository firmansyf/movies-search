
// ketika inputan  disearch
$('.searchMovie').on('click', function () {
    $.ajax({
        url : "http://www.omdbapi.com/?apikey=1faefa01&s="+ $('.inputKeywords').val(),
        success : (result) => {
            //console.log(result);
            const movie = result.Search;
            //console.log(movie);
            let card = "";
            movie.forEach((m) => {
                card += movieCard(m);
            })
    
            $(".wadah-card").html(card);
    
            // ketika tombol details di klik
            $('.tombol-modal-details').on('click', function () {
                //console.log($(this).data('imdbid'));
    
    $.ajax({
        url : "http://www.omdbapi.com/?apikey=1faefa01&i=" + $(this).data('imdbid'),
        success : (m) => { 
            const movieDetail =`  <div class="row">
                        <div class="col-md-3">
                            <img src='${m.Poster}' class='card-img-top'>
                        </div> 
                        <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h1>${m.Title}</h1></li>
                            <li class="list-group-item"><strong>Actor :</strong> ${m.Actors}</li>
                            <li class="list-group-item"><strong>Penulis :</strong> ${m.Writer} </li>
                            <li class="list-group-item"><strong>Awards :</strong> ${m.Awards}</li>
                            <li class="list-group-item"><strong>Rating : </strong>${m.imdbRating}</li>
                        </ul>
                        </div>
                    </div>`
    
                $('.wadah-modal').html(movieDetail);
        },
        error : (e) => {
            console.log(e.responseText);
        }
        
    
             });
        })
    
    
         },
         error : (e) => {
             console.log(e.responseText);
         }
    });
    
})






function movieCard(m) {
    return ` <div class="col-md-4 my-4">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                    <h5 class="card-title">${m.Title}</h5>
                    <p class="text-muted">Tahun Releas ${m.Year}</p>
                    <a href="#" class="btn btn-primary tombol-modal-details" data-bs-toggle="modal" data-bs-target="#modalDetails" data-imdbid="${m.imdbID}">Details</a>
                    </div>
                </div>
            </div>`
}