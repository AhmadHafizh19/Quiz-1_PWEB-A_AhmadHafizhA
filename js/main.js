function validateForm()
{
    // Validasi Nama
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;
    let address = document.getElementById("address").value;
    let postalcode = document.getElementById("postalcode").value;
    let provinsi = document.getElementById("provinsi").value;
    let telp = document.getElementById("telp").value;
    let personaltelp = document.getElementById("personaltelp").value;

    var letters = /^[a-zA-Z\s]*$/;  
    var number = /^[0-9]*$/;

    if(name == "" ||  city == "" || address == "" || postalcode == "" || provinsi == "" ||
        telp == "" || personaltelp == "" )
    {
        alert("Masih ada data kosong, lengkapi!")
        
    }
    
    else if(!letters.test(name))
    {
        alert("Nama hanya bisa berisi huruf");
       
    }
    
    else if(!letters.test(city))
    {
        alert("Tempat lahir hanya bisa berisi huruf");
      
    }

    else if(!number.test(postalcode))
    {
        alert("kode pos hanya bisa berisi angka");
      
    }

    else if(!letters.test(provinsi))
    {
        alert("Provinsi hanya bisa berisi huruf");
        
    }

    else if(!number.test(telp))
    {
        alert("Nomor Telepon hanya bisa berisi angka");
    }

    else if(!number.test(personaltelp))
    {
        alert("Personal Telepon hanya bisa berisi angka");
    }

    else if(document.getElementById("postalcode").value.length != 5 )
    {
        alert("Kode pos wajib memiliki panjang 5");
    }

    else if(document.getElementById("telp").value.length >13)
    {
        alert("No Telp wajib memiliki panjang kurang dari 13");
    }

    else if(document.getElementById("telp").value.length < 10)
    {
        alert("No Telp wajib memiliki panjang tidak kurang dari 10");
    }

    else if(document.getElementById("personaltelp").value.length >13)
    {
        alert("Personal Telp wajib memiliki panjang kurang dari 13");
    }

    else if(document.getElementById("personaltelp").value.length < 10)
    {
        alert("Personal Telp wajib memiliki panjang tidak kurang dari 10");
    }

    else{
        alert("Berhasil registrasi Redirecting to Login View");
        window.location = "success.html";
    }
}