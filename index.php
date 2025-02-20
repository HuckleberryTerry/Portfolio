<!DOCTYPE html>
<?php
    session_start();
    use PHPMailer\PHPMailer\PHPMailer;

    require_once realpath(__DIR__ . "/vendor/autoload.php");
    use Dotenv\Dotenv;
    $dotenv = Dotenv::createImmutable(__DIR__);
    $dotenv->load();
    include('inc/connection.php');
?>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width", initial-scale="1", maximum scale="1">
        <title>Jozef Jenkins &hyphen; Portfolio</title>
        <link rel="stylesheet" href="js/slick/slick.css">
        <link rel="stylesheet" href="css/style.css">
        <script src="https://kit.fontawesome.com/2e919e85b3.js" crossorigin="anonymous"></script>
    </head>
    <body>
        
        <?php
        include('inc/side-menu.php');
        ?>

        <div class="valid">
            <?php
                if(isset($_SESSION['success_message'])){
                    echo '<p style="color: green;">' . $_SESSION['success_message'] . '</p>';

                    unset($_SESSION['success_message']);
                }

            ?>
        </div>
        <div class="invalid container">
            <!-- Add PHP to list invalid fields -->
        </div>

        <div class="header">
            <div class="container container-hero">
                <div class="container-hero-text">
                    <h2 class="hero-name" id="myName">
                        <!-- My name is Jozef Jenkins -->
                    </h2>
                    <h3 class="hero-description" id="myDescription">
                        I'm a Web Developer
                    </h3>
                    <div class="hero-bottom-text">
                        <a class="see-more" href="#portfolio">
                            See More
                            <span class="icon-arrow-right2">
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="middle projects">
            <h2 class="proj-header" id="portfolio">Projects</h2>
            <div class="container container-proj">
                <a class="container-proj--module one" href="#">
                    <img src="assets/images/600x400-Place-Holder.png">
                    <h2>Project One</h2>
                    <p>
                        view more
                        <span class="icon-arrow-right2"></span>
                    </p>
                </a>

                <a class="container-proj--module two" href="#">
                    <img src="assets/images/600x400-Place-Holder.png">
                    <h2>Project Two</h2>
                    <p>
                        view more
                        <span class="icon-arrow-right2"></span>
                    </p>
                </a>

                <a class="container-proj--module three" href="#">
                    <img src="assets/images/600x400-Place-Holder.png">
                    <h2>Project Three</h2>
                    <p>
                        view more
                        <span class="icon-arrow-right2"></span>
                    </p>
                </a>

                <a class="container-proj--module four" href="#">
                    <img src="assets/images/600x400-Place-Holder.png">
                    <h2>Project Four</h2>
                    <p>
                        view more
                        <span class="icon-arrow-right2"></span>
                    </p>
                </a>

                <a class="container-proj--module five" href="#">
                    <img src="assets/images/600x400-Place-Holder.png">
                    <h2>Project Five</h2>
                    <p>
                        view more
                        <span class="icon-arrow-right2"></span>
                    </p>
                </a>

                <a class="container-proj--module six" href="#">
                    <img src="assets/images/600x400-Place-Holder.png">
                    <h2>Project Six</h2>
                    <p>
                        view more
                        <span class="icon-arrow-right2"></span>
                    </p>
                </a>
            </div>
        </div>

        <footer>
            
            <div class="container container-footer" id="contact-me">
                <div class="container container-contact contact">
                    <h1 class="contact-header">
                        Contact Us On
                    </h1>
                    <p class="contact-paragraph">
                        Information about how to contact
                    </p>
                </div>
                <div class="container form-container">
                    <!-- Unsecure version, need to update to php when able to. -->
                    <!-- action="mailto:example@example.com" -->
                    <form autocomplete='off' class="form-container" method="POST" action="action.php">
                        <input id="fname" type="text" name="fname" placeholder="First Name">
                        <input id="lname" type="text" name="lname" placeholder="Last Name"><br>
                        <div id="country-container">
                            <select id="country">
                                <option id="UK" value="UK">UK</option>
                                <option id="US" value="US">US</option>
                                <option id="IT" value="IT">IT</option>
                            </select>
                        </div>
                        <input id="telNo" type="tel" name="telNo" placeholder='Telephone Number' required>
                        <input id="email" type="text" name="email" placeholder="Email Address" required><br>
                        <input id="subject" type="text" name="subject" placeholder="Subject"><br>
                        <textarea id="message" type="text" name="body" placeholder="Message" maxlength="300"></textarea><br>
                        <input class="btn btn-submit" type="submit" value="Submit">
                    </form>
                </div>
            </div>
        </footer>
        <script src="js/jquery-3.7.1.min.js"></script>
        <script src="js/slick/slick.min.js"></script>
        <script src="js/main.js"></script>
    </body>
</html>