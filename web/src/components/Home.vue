  <template>

  <div class="container-fluid">
    <carousel :per-page="1" :navigate-to="someLocalProperty" mouse-drag="false">
    <slide>
            <a id="hyperlinkEntLogo"><img id="imgEnterpriseLogo" src="../assets/images/Banner.jpg"></a>
    </slide>
        <slide>
            <a id="hyperlinkEntLogo"><img id="imgEnterpriseLogo" src="../assets/images/Banner.jpg"></a>
    </slide>
  </carousel>
  <div class="container">
  
    <div class="col-md-8 col-md-offset-1">
      <div class="row">
        <p style="font-size: 20px; font-weight: bold; color: #696969; ">
          Welcome to Search Manager
        </p>
        <p><br></p>
        <p><br></p>
        <p style="font-size: 18px; font-weight: bold; color: #cc0000; ">
          <b>NATIONAL AND STATE SPECIFIC AUTHORITY UPDATES: Keeping you informed of important industry changes </b>
        </p>
        <p><br></p>
        <p style="font-size: 16px;">
          Every month SAI Global publishes authority updates from sources such as industry publications, customers information bulletins from State Land Registries, Revenue Offices
          and many more. These can be found in the one place, rather than subscribing separately or searching for content
          from several websites.
        </p>
        <p><br></p>
        <p style="font-size: 16px;">
          Bookmark the page&nbsp;<a href="https://www.martinajindal.com/en-au/">here</a>&nbsp;and
          visit it regularly to keep up to date with key industry changes. 
        </p>
        <p><br></p>
        <p><br></p>
        <p style="font-size: 18px; font-weight: bold; color: #cc0000; ">
            Outage of the NT Department of Lands and Planning interface
        </p>
        <p><br></p>
        <p style="font-size: 16px;">
          SAI Global Property&rsquo;s Search Manager is currently experiencing problems communicating with NT Department of Lands and Planning. This may prevent or delay order placement and fulfillment for products provided by this authority. The issue is being investigated and we will advise you when connectivity has been restored.
          <br><br>We apologise for any inconvenience this may cause.
        </p>
    </div>
  </div>
  </div>
  </div>
</template>
  <script>
import { Carousel, Slide } from "vue-carousel";
</script>
<style>
.section-block.section-gray {
  background: #ebebeb;
}
</style>

