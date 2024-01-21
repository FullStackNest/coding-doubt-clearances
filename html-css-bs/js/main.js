
const head = document.getElementById('head');
head.insertAdjacentHTML('afterbegin', `
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">

`)


// const, let, var
const navHeader = document.getElementById('nav-header')
navHeader.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand text-light" href="index.html">Logo</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active text-light" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="products.html">Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="contact-us.html">Contact us</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="home-delivery.html">Home Delivery</a></li>
                            <li><a class="dropdown-item" href="online-booking.html">Online Booking</a></li>

                            <li><a class="dropdown-item" href="emi-payments.html">EMI Payments</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="terms-and-conditions.html">Terms & Conditions</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="offers.html">Offers</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-light" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>

`




const div1 = document.getElementById('div1')
// div1.innerHTML = `<p>hii</p>`

div1.insertAdjacentHTML('beforebegin', `<p>beforebegin</p>`)
div1.insertAdjacentHTML('afterbegin', `<p>afterbegin</p>`)
div1.insertAdjacentHTML('beforeend', `<p>beforeend</p>`)
div1.insertAdjacentHTML('afterend', `<p>afterend</p>`)
console.log(div1);