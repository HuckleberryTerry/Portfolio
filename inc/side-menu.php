<?php
echo "<header class='hidden-l hidden-xl'>
        <!-- Within the header I should include the 'Logo' and also 
        the navbar (static, along the left-side of the screen, vertically styled).
        
        I could also include the Hero Image in this section and make it all one large header
        -->
        <div class='container container-nav'>
            <ul class='nested-hamburger isActive'>
                <li>
                    <a tabindex='0' class='dropdown-menu'>
                        <span class='icon-menu'></span>
                    </a>
                    <ul class='nested-contents'>
                        <li>
                            <a href='about.php#about-me' class='container-nav-about'>
                                <span class='icon-question'> <!--I could include an image here--> </span>
                            </a>
                        </li>
                        <li>
                            <a href='index.php#portfolio' class='container-nav-portfolio'>
                                <span class='icon-folder-open'> <!--I could include an image here--> </span>
                            </a>
                        </li>
                        <li>
                            <a href='coding-examples.php#coding-examples' class='container-nav-examples'>
                                <span class='icon-embed2'> <!--I could include an image here--> </span>
                            </a>
                        </li>
                        <li>
                            <a href='scs.php#about-scs' class='container-nav-scs'>
                                <span class='icon-school'> <!--I could include an image here--> </span>
                            </a>
                        </li>
                        <li>
                            <a href='index.php#contact-me' class='container-nav-contact'>
                                <span class='icon-envelope'> <!--I could include an image here--> </span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </header>
    <header class='visible-l visible-xl'>
        <ul class='contents'>
            <li>
                <a class='logo logo-container' href='#'>
                    <h1 class='logo-text'>
                        JJ
                    </h1>
                    <!-- <img class='logo-img' src='assets/images/75x75 Logo.png'> -->
                </a>
            </li>
            <li>
                <a href='about.php#about-me' class='container-nav-about'>
                    <span class='icon-question'> <!--I could include an image here--> </span>
                </a>
            </li>
            <li>
                <a href='index.php#portfolio' class='container-nav-portfolio'>
                    <span class='icon-folder-open'> <!--I could include an image here--> </span>
                </a>
            </li>
            <li>
                <a href='coding-examples.php#coding-examples' class='container-nav-examples'>
                    <span class='icon-embed2'> <!--I could include an image here--> </span>
                </a>
            </li>
            <li>
                <a href='scs.php#about-scs' class='container-nav-scs'>
                    <span class='icon-school'> <!--I could include an image here--> </span>
                </a>
            </li>
            <li>
                <a href='index.php#contact-me' class='container-nav-contact'>
                    <span class='icon-envelope'> <!--I could include an image here--> </span>
                </a>
            </li>
        </ul>
    </header>";
?>
