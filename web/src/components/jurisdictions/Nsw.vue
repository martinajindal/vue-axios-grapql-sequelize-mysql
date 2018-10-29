<template>
    <div class="container-fluid">
        <form>
              <div class="container-fluid">
                <div class="col-md-10  col-md-offset-1">
                    <h4>Order NSW Title Search</h4>
                    <hr><br>
                    <div class="row">
                        <div class="col-md-4 form-group">
                            <label for="email">Matter Reference</label>
                            <input
                                type="text"
                                name="matterRef" v-model="order.matterRef"
                                class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 form-group">
                            <label for="titleRefFormat">Title Reference</label>
                            <select class="form-control" id="titleRefFormat" v-model="order.selectedtitleRefFormat">
                                <option selected>Please select</option>
                                <option value="LDP">Lot in Deposited Plan</option>
                                <option value="LSP">Lot in Strata Plan</option>
                                <option value="CSP">Common Property in Strata Plan</option>
                                <option value="LSDP">Lot/Section in Deposited Plan</option>
                                <option value="AC">Auto-Consol</option>
                                <option value="VF">Volume/Folio</option>
                                <option value="LF">Lease Folio</option>
                                <option value="WAL">Water Access License</option>
                            </select>
                        </div>
                        <div class="col-md-4 form-group">
                            <label for="titleRefValue"></label>
                            <input
                                type="titleRefValue"
                                name="titleRefValue" v-model="order.titleRefValue" value=""
                                class="form-control">
                        </div>
                        <div class="col-md-4 form-group">
                            <label for="password"></label>
                            <br>
                            <a class="linkanc vmid" href="">Verify Title Reference</a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-10 form-group">
                            <hr>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 form-group">
                            <label for="propertyAddress">Property Address</label>
                            <input
                                type="text"
                                name="propertyAddress" v-model="order.propertyAddress"
                            class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 form-group">
                            <button class="material-button-raised">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
  </form>
            <div class="container-fluid">  
                <div class="col-md-8 col-md-offset-1">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4>Your Information</h4>
                        </div>
                        <div class="panel-body">
                            <p>Matter Reference: {{ order.matterRef }} </p>
                            <p>Title Reference: {{ order.selectedtitleRefFormat }}</p>

                            <p>Title Reference: {{ order.titleRefValue }}</p>
                            <p style="white-space: pre">Property Address: {{ order.propertyAddress }}</p>
                        </div>
                    </div>
                </div>
                <div class="column col-md-1 col-sm-2">
                </div>
            </div>        
    </div>
</template>
<script>
export default {
  data() {
    return {
      order: {
        matterRef: "",
        titleRefValue: "",
        propertyAddress: "",
        selectedtitleRefFormat: ""
      }
    };
  }
};
</script>

