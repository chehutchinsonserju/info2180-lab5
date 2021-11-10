window.addEventListener('load', ()=>
{

    let sanitizedUrl;
    let sanitizedSearch;
    
    let result = document.querySelector("#result");
    document.querySelector("#lookup").addEventListener("click", (event)=>
    {
        sanitizedSearch = document.querySelector("#country").value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/g,'');
        sanitizedUrl = `world.php?country= ${sanitizedSearch}`.replace( /"[^-0-9+@#/%?~_|!:,.;\(\)]"/g,'');
        ajaxCall(event);

    });

    document.querySelector("#lookupcity").addEventListener("click", (event)=>
    {
        sanitizedSearch = document.querySelector("#country").value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/g,'');
        sanitizedUrl = `world.php?country= ${sanitizedSearch}&context=cities`.replace( /"[^-0-9+@#/%?~_|!:,.;\(\)]"/g,'');
        ajaxCall(event);
    });

    let ajaxCall = (event) =>
    {
        event.preventDefault();
        fetch(sanitizedUrl, {method : 'GET'})
        .then(resp => resp.text())
        .then(info => 
        {
            result.innerHTML = info;
        })
    }

});