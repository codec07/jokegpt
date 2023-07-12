let callCount = 0;

function newJoke()
{
    let limit = 1;
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/jokes?limit=' + limit,
        headers: { 'X-Api-Key': 'tNS1daYCjrlIQfjc4OgOIg==Ojj0dgCDUwOKghvi'},
        contentType: 'application/json',
        success: function(result) {
            callCount += 1;
            document.getElementById("joke").innerHTML = result[0].joke;
            document.getElementById("callCountText").innerHTML = "API CALLS: " + callCount;
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}