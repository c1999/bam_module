<template>
<div>
<el-row>
  <el-col :span="8" >
    <el-card :body-style="{ padding: '0px' }">
      <img src="http://bam.ykplay.com/img/1.jpg" class="image" > 
      <div style="padding: 14px;">
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
        </div>
      </div>
    </el-card>  
  </el-col>

    <el-col :span="8" >
    <el-card :body-style="{ padding: '0px' }">
      <img src="http://bam.ykplay.com/img/2.jpg" class="image" > 
      <div style="padding: 14px;">
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
        </div>
      </div>
    </el-card>  
  </el-col>
      <el-col :span="8" >
    <el-card :body-style="{ padding: '0px' }">
      <img src="http://bam.ykplay.com/img/3.jpg" class="image" > 
      <div style="padding: 14px;">
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
        </div>
      </div>
    </el-card>  
  </el-col>
      <el-col :span="8" >
    <el-card :body-style="{ padding: '0px' }">
      <img src="http://bam.ykplay.com/img/4.jpg" class="image" > 
      <div style="padding: 14px;">
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
        </div>
      </div>
    </el-card>  
  </el-col>
      <el-col :span="8" >
    <el-card :body-style="{ padding: '0px' }">
      <img src="http://bam.ykplay.com/img/5.jpg" class="image" > 
      <div style="padding: 14px;">
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
        </div>
      </div>
    </el-card>  
  </el-col>
      <el-col :span="8" >
    <el-card :body-style="{ padding: '0px' }">
      <img src="http://bam.ykplay.com/img/6.jpg" class="image" > 
      <div style="padding: 14px;">
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
        </div>
      </div>
    </el-card>  
  </el-col>
</el-row>
  <div class="dashboard-container">
    <div class="dashboard-text">name:{{ name }}</div>
    <div class="dashboard-text">roles:<span v-for="role in roles" :key="role">{{ role }}</span></div>
  </div>
</div>


  
</template>
<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      currentDate: new Date()
    };
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>