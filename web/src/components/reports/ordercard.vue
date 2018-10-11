<template>
    <div class="container-fluid">
        <div class="col-md-1">
        </div>
        <div class="col-md-10">
            <div>
                <div class="row">
                    <div class="col-md-12" style="background-color:#e7e7e7">
                        <span>{{ order.matterRef }}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <strong>Order : </strong><a href="">{{ order.id }}</a>
                    </div>
                    <div class="col-md-4">
                        <strong>Order Type : </strong>{{order.type}}
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <strong>Date : </strong>{{order.createdAt}}
                    </div>
                    <div class="col-md-4">
                        <strong>Status : </strong>{{order.status}}
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-8">
                        <img style="vertical-align:middle;" src="../../assets/images/pdfs.png">
                        <a href="">NSW LRS - Copy of Cancelled Title - WAL1621</a>
                    </div>
                </div>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
export default {
      name: 'ordercard',
    props: ['order'],
  data() {
    return {
      inValidCredential: false,
      order: {
        id: "1234562323",
        matterRef: "Matter Reference",
        type: "Property Information Report",
        createdAt: "10 Nov 2018",
        status: "Completedaa"
      }
    };
  }
};
</script>


<style lang="css">