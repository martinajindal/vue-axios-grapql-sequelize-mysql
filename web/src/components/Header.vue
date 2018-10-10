<template>
    <div class="container">
        <div class="row">
            <a id="hyperlinkEntLogo"><img id="imgEnterpriseLogo" src="../assets/logo.gif"></a>
        </div>
        <div class="row">
            <!-- <div class="column"> -->
            <nav class="navbar navbar-default" role="navigation">
                <div class="container-fluid">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavBar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="myNavBar">
                        <ul class="nav navbar-nav">
                            <router-link tag="li" active-class="active" to="/home" exact><a>Home</a></router-link>
                            <router-link tag="li" active-class="active" to="/nsw" exact><a>NSW</a></router-link>
                            <router-link tag="li" active-class="active" to="/vic" exact><a>VIC</a></router-link>
                            <router-link tag="li" active-class="active" to="/qld" exact><a>QLD</a></router-link>
                            <router-link tag="li" active-class="active" to="/act" exact><a>ACT</a></router-link>
                            <router-link tag="li" active-class="active" to="/wa" exact><a>WA</a></router-link>
                            <router-link tag="li" active-class="active" to="/tas" exact><a>TAS</a></router-link>
                            <router-link tag="li" active-class="active" to="/nt" exact><a>NT</a></router-link>
                            <router-link tag="li" active-class="active" to="/report" exact><a>Report</a></router-link>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <router-link tag="li" active-class="active" to="/login" exact><a><span class="glyphicon glyphicon-log-in"></span> Login</a></router-link>
                            <router-link tag="li" active-class="active" to="/registration" exact><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></router-link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
import "../assets/style.scss";
export default {};
</script>
