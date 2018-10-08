<template>
      <div class="container">
       <div class="row">
             <a id="hyperlinkEntLogo"><img id="imgEnterpriseLogo" src="../assets/logo.gif"></a>
       </div>
        <div class="row">
            <div class="column">
        <div class=" navbar" style="border: 1px solid #C0C0C0;  background: #da0b11; font-weight: bold">
            <ul class="nav navbar-nav">
                <router-link to="/home" activeClass="active" tag="li"><a style="font-size: 16px; color: #ffffff; " >Home</a></router-link>
                <router-link to="/nsw"  activeClass="active" tag="li"><a style="font-size: 16px; color: #ffffff; " >NSW</a></router-link>
                <router-link to="/vic"  activeClass="active"  tag="li"><a style="font-size: 16px; color: #ffffff; " >VIC</a></router-link>                   
                <router-link to="/qld" activeClass="active" tag="li"><a style="font-size: 16px; color: #ffffff; " >QLD</a></router-link>
                <router-link to="/act" activeClass="active" tag="li"><a style="font-size: 16px; color: #ffffff; " >ACT</a></router-link>                                        
                <router-link to="/wa" activeClass="active" tag="li"><a style="font-size: 16px; color: #ffffff; " >WA</a></router-link>
                <router-link to="/tas" activeClass="active" tag="li"><a style="font-size: 16px; color: #ffffff; " >TAS</a></router-link>
                <router-link to="/nt" activeClass="active" tag="li"><a style="font-size: 16px; color: #ffffff; " >NT</a></router-link>
                <router-link to="/report" activeClass="active" tag="li" align="right"><a style="font-size: 16px; color: #ffffff;">Report</a></router-link>
            </ul>                 
        </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>