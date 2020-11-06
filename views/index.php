<!DOCTYPE html>
 <html>
 <head>
 	<meta charset="utf-8">
    <title>Romántica</title>
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="digitalproserver.com">
    <link rel="shortcut icon" href="../includes/img/favicon.png" type="image/x-icon">

    <!-- Font awesome icons (for rss) -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">

    <!-- Carousel default css -->
    <link rel="stylesheet" href="../includes/css/vendor/owl-carousel/owl.carousel.min.css">   
    <link rel="stylesheet" href="../includes/css/vendor/owl-carousel/owl.theme.default.min.css">

    <!-- Bootstrap css -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

    <!-- Site proper css -->
 	<link rel="stylesheet" href="../includes/css/index.css">
 </head>
 <body>
    <!-- Parallax-container -->
    <div class="site-parallax">

        <!-- File stored in views/includes -->
    	<?php include 'includes/header.php'; ?>
        <!-- End Header -->

        <!-- first slider -->
        <div class="container">
            <div class="row">
                <div class="col-12 mobile-wrap">
                    <div id="mainCarousel" class="carousel slide slider-news-section">
                        <ol class="carousel-indicators">
                            <li data-target="#mainCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#mainCarousel" data-slide-to="1"></li>
                            <li data-target="#mainCarousel" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="../includes/img/slider-1.png" class="slider-img-wrap col-12 col-lg-9" alt="Img1">
                                <div class="carousel-caption col-12 col-lg-3">
                                    <div class="carousel-caption-wrap">
                                        <h5 class="caption-title">Belleza Real</h5>
                                        <p class="caption-desc">Ellie Goldstein es la primera modelo con Síndrome de Down en ser rostro de Gucci</p>
                                        <div class="date-time">
                                            <span class="icon-clock"></span>
                                             <p>03/07/2020</p>   
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="../includes/img/slider-1.png" class="slider-img-wrap col-12 col-lg-9" alt="Img1">
                                <div class="carousel-caption col-12 col-lg-3">
                                    <div class="carousel-caption-wrap">
                                        <h5 class="caption-title">Belleza Real</h5>
                                        <p class="caption-desc">Ellie Goldstein es la primera modelo con Síndrome de Down en ser rostro de Gucci</p>
                                        <div class="date-time">
                                            <span class="icon-clock"></span>
                                             <p>03/07/2020</p>   
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true">
                                <span class="icon-arrow-left"></span>
                            </span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true">
                                <span class="icon-arrow-right"></span>
                            </span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- second section main wrapper -->
        <div class="container">
            <!-- Mobile/Tablet live player -->
            <div class="row d-block d-md-none">
                <div class="col-12">
                    <?php include 'includes/live-player.php'; ?>
                </div>
            </div>
            <div class="row">
                <!-- Left section of the content -->
                <div class="col-lg-9">
                    <!-- news section -->
                    <div class="row">
                        <div class="col-12 section-title-container">
                            <div class="section-title">
                                <h2>Noticias</h2>
                                <span>noticias</span>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <a href="#" target="_blank" class="card main-card">
                                <img src="../includes/img/news-thumb-1.png" class="card-img-top" alt="show1">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">
                                        Registro Civil inscribió a dos niños como hijos de una familia homoparental
                                    </p>
                                    <div class="date-time">
                                        <span class="icon-clock"></span>
                                        <span class="date"> 
                                            03/07/2020
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <a href="#" target="_blank" class="card main-card">
                                <img src="../includes/img/news-thumb-2.png" class="card-img-top" alt="show1">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">
                                        Registro Civil inscribió a dos niños como hijos de una familia homoparental
                                    </p>
                                    <div class="date-time">
                                        <span class="icon-clock"></span>
                                        <span class="date"> 
                                            03/07/2020
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <a href="#" target="_blank" class="card main-card">
                                <img src="../includes/img/news-thumb-3.png" class="card-img-top" alt="show1">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">
                                        Registro Civil inscribió a dos niños como hijos de una familia homoparental
                                    </p>
                                    <div class="date-time">
                                        <span class="icon-clock"></span>
                                        <span class="date"> 
                                            03/07/2020
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <!-- music slider -->
                    <div class="row">
                        <div class="col-12 mobile-padding">
                            <div class="music-slider-container">
                                <div class="section-title-container">
                                    <div class="section-title">
                                        <h2 class="d-none d-lg-block">Los culpables de siempre</h2>
                                        <span>Los culpables de siempre</span>
                                    </div>
                                    <a href="#" target="_blank" class="view-more d-none d-lg-block">
                                        Ver más
                                    </a>
                                </div>
                                <div class="owl-carousel owl-theme">
                                    <div class="item">
                                        <img src="../includes/img/music-slider-2.png" alt="Disco1" class="album-img">
                                        <div class="album-caption">
                                            <p>"Amanecer sin ti"</p>
                                            <p>de Stereo 3</p>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <img src="../includes/img/music-slider-2.png" alt="Disco2" class="album-img">
                                        <div class="album-caption">
                                            <p>"Amanecer sin ti"</p>
                                            <p>de Stereo 3</p>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <img src="../includes/img/music-slider-2.png" alt="Disco3" class="album-img">
                                        <div class="album-caption">
                                            <p>"Amanecer sin ti"</p>
                                            <p>de Stereo 3</p>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <img src="../includes/img/music-slider-2.png" alt="Disco3" class="album-img">
                                        <div class="album-caption">
                                            <p>"Amanecer sin ti"</p>
                                            <p>de Stereo 3</p>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <img src="../includes/img/music-slider-2.png" alt="Disco1" class="album-img">
                                        <div class="album-caption">
                                            <p>"Amanecer sin ti"</p>
                                            <p>de Stereo 3</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="section-title-container d-flex d-md-none">
                                    <a href="#" target="_blank" class="view-more">
                                        Ver más
                                    </a>
                                  </div>  
                            </div>
                        </div>
                    </div>
                    <!-- banner lg -->
                    <div class="row banner-container">
                        <div class="col banner-lg">
                            <a href="#" target="_blank">
                                <img src="../includes/img/banner-1.png" alt="banner-1" class="img-fluid">
                            </a>
                        </div>
                    </div>
                    <!-- Last songs on mobile -->
                    <div class="row d-block d-md-none">
                        <div class="col-12">
                            <?php include 'includes/last-songs.php'; ?>
                        </div>
                    </div>
                    <!-- more news -->
                    <div class="row more-news">
                        <div class="col-sm-6 col-lg-4">
                            <a href="#" target="_blank" class="card main-card">
                                <img src="../includes/img/news-thumb-1.png" class="card-img-top" alt="show1">
                                <div class="card-body">
                                    <p class="card-text">
                                        Registro Civil inscribió a dos niños como hijos de una familia homoparental
                                    </p>
                                    <div class="date-time">
                                        <span class="icon-clock"></span>
                                        <span class="date"> 
                                            03/07/2020
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <a href="#" target="_blank" class="card main-card">
                                <img src="../includes/img/news-thumb-1.png" class="card-img-top" alt="show1">
                                <div class="card-body">
                                    <p class="card-text">
                                        Registro Civil inscribió a dos niños como hijos de una familia homoparental
                                    </p>
                                    <div class="date-time">
                                        <span class="icon-clock"></span>
                                        <span class="date"> 
                                            03/07/2020
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <a href="#" target="_blank" class="card main-card">
                                <img src="../includes/img/news-thumb-1.png" class="card-img-top" alt="show1">
                                <div class="card-body">
                                    <p class="card-text">
                                        Registro Civil inscribió a dos niños como hijos de una familia homoparental
                                    </p>
                                    <div class="date-time">
                                        <span class="icon-clock"></span>
                                        <span class="date"> 
                                            03/07/2020
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <a href="#" target="_blank" class="card main-card">
                                <img src="../includes/img/news-thumb-1.png" class="card-img-top" alt="show1">
                                <div class="card-body">
                                    <p class="card-text">
                                        Registro Civil inscribió a dos niños como hijos de una familia homoparental
                                    </p>
                                    <div class="date-time">
                                        <span class="icon-clock"></span>
                                        <span class="date"> 
                                            03/07/2020
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                            <a href="#" target="_blank" class="card main-card">
                                <img src="../includes/img/news-thumb-1.png" class="card-img-top" alt="show1">
                                <div class="card-body">
                                    <p class="card-text">
                                        Registro Civil inscribió a dos niños como hijos de una familia homoparental
                                    </p>
                                    <div class="date-time">
                                        <span class="icon-clock"></span>
                                        <span class="date"> 
                                            03/07/2020
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-6 col-lg-4 banner-container">
                            <a href="#" target="_blank">
                                <img src="../includes/img/banner-md.png" alt="Ads" class="img-fluid">
                            </a>
                        </div>
                    </div>
                </div>
                <!-- aside right section of the content -->
                <div class="col-lg-3 aside-section">
                    <div class="row">
                        <div class="banner-container">
                            <a href="#" target="_blank" class="banner-md-2">
                                <img src="../includes/img/banner-md-2.png" alt="Ads" class="img-fluid">
                            </a>
                        </div>
                        <div class="col-md-6 col-lg-12 d-none d-md-block"><?php include 'includes/live-player.php'; ?>
                        </div>
                        <div class="col-md-6 col-lg-12 d-none d-md-block">
                            <?php include 'includes/last-songs.php'; ?>
                        </div>
                        <div class="col-12 d-none d-md-block">
                            <?php include 'includes/aside-cards.php'; ?>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Banner -->
            <div class="row banner-container">
                <div class="col banner-lg">
                    <a href="#" target="_blank">
                        <img src="../includes/img/banner-1.png" alt="banner-1" class="img-fluid">
                    </a>
                </div>
            </div>
            <!-- more news section -->
            <div class="row">
                <div class="col-lg-9 third-slider-container">
                    <!-- Third slider title -->
                    <div class="row">
                        <div class="col-sm-12">
                            <h4>Más noticias</h4>
                        </div>
                    </div>
                    <!-- Third slider -->
                    <div class="row">
                        <div class="col-sm-12 owl-carousel owl-theme">
                            <a href="#" target="_blank" class="card main-card item">
                                <img src="../includes/img/news-thumb-1.png" class="card-img-top" alt="show1">
                                <div class="card-body">
                                    <p class="card-text">
                                        Dua Lipa y Ed Sheeran y 
                                        más artistas piden al 
                                        gobierno británico un 
                                        rescate para la música en 
                                        vivo
                                    </p>
                                    <div class="date-time">
                                        <span class="icon-clock"></span>
                                        <span class="date"> 
                                            03/07/2020
                                        </span>
                                    </div>
                                </div>
                            </a>
                            <a href="#" target="_blank" class="card main-card item">
                                <img src="../includes/img/news-thumb-1.png" class="card-img-top" alt="show1">
                                <div class="card-body">
                                    <p class="card-text">
                                        Dua Lipa y Ed Sheeran y 
                                        más artistas piden al 
                                        gobierno británico un 
                                        rescate para la música en 
                                        vivo
                                    </p>
                                    <div class="date-time">
                                        <span class="icon-clock"></span>
                                        <span class="date"> 
                                            03/07/2020
                                        </span>
                                    </div>
                                </div>
                            </a>
                            <a href="#" target="_blank" class="card main-card item">
                                <img src="../includes/img/news-thumb-1.png" class="card-img-top" alt="show1">
                                <div class="card-body">
                                    <p class="card-text">
                                        Dua Lipa y Ed Sheeran y 
                                        más artistas piden al 
                                        gobierno británico un 
                                        rescate para la música en 
                                        vivo
                                    </p>
                                    <div class="date-time">
                                        <span class="icon-clock"></span>
                                        <span class="date"> 
                                            03/07/2020
                                        </span>
                                    </div>
                                </div>
                            </a>
                            <a href="#" target="_blank" class="card main-card item">
                                <img src="../includes/img/news-thumb-1.png" class="card-img-top" alt="show1">
                                <div class="card-body">
                                    <p class="card-text">
                                        Dua Lipa y Ed Sheeran y 
                                        más artistas piden al 
                                        gobierno británico un 
                                        rescate para la música en 
                                        vivo
                                    </p>
                                    <div class="date-time">
                                        <span class="icon-clock"></span>
                                        <span class="date"> 
                                            03/07/2020
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- aside-cards on mobile -->
            <div class="row d-block d-md-none">
                <div class="col-12">
                    <?php include 'includes/aside-cards.php'; ?>
                </div>
            </div>
            <!-- banner -->
            <div class="row banner-container">
                <a href="#" target="_blank" class="col-12 banner-xl">
                    <img src="../includes/img/banner-xl.png" alt="Ads">
                </a>
            </div>
        </div>
        
    </div>
	<!-- File stored in views/includes -->
	<?php include 'includes/footer.php'; ?>
    <!-- End Footer -->

    <!-- jquery -->
 	<script  src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    
    <!-- owl carousel script -->
    <script src="../includes/js/vendor/owl.carousel.js"></script>
	
    <!-- Bootstrap js -->
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
 	
    <!-- site proper styles -->
    <script  src="../includes/js/dist/script.min.js"></script>
 </body>
 </html>