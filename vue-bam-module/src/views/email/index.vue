<template>
  <div>
  <el-dialog title="请你打败我" :visible.sync="dialogFormVisible">
      <el-form :model="password">
        <el-form-item label="放出你的必杀技" :label-width="formLabelWidth">
          <el-input v-model="password.password" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="open">确定</el-button>
      </div>
  </el-dialog>

  <el-dialog title="服务器信息" :visible.sync="dialogAddServer">
      <el-form :model="addEmailData">
        <el-form-item label="邮箱账号" :label-width="formLabelWidth">
          <el-input v-model="addEmailData.email" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="用途" :label-width="formLabelWidth">
          <el-input v-model="addEmailData.purpose" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="addEmailData.password" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-input v-model="addEmailData.remark" auto-complete="off"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addEmail">确定</el-button>
      </div>
  </el-dialog>


  <el-row>
  <el-button type="primary" icon="el-icon-edit" style="margin:20px"@click="dialogAddServer=true">新增</el-button>
  </el-row>
  <el-table
    :data="emailData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="备注">
            <span>{{ props.row.remark }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="邮箱账号"
      prop="email">
    </el-table-column>
    <el-table-column
      label="用途"
      prop="purpose">
    </el-table-column>
    <el-table-column label="密码">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="showEditDialog(scope.$index, scope.row)" v-show="isShow" >点击查看</el-button>
        </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>

<script>
import { emailList , getPassword , addEmail} from "@/api/email";
export default {
  data() {
    return {
      dialogAddServer: false,
      dialogFormVisible: false,
      password: {
        _id: "",
        password: ""
      },
      addEmailData: {
        email:"",  
        purpose: "",
        remark: "",
        password:""
      },
      formLabelWidth: "120px",
      emailData: [],
      isShow: true
    };
  },

  methods: {
    test() {
      let that = this;
      emailList().then(response => {
        that.emailData = response.data;
      });
    },
    showEditDialog(index, row) {
      this.dialogFormVisible = true;
      this.password._id = row._id;
    },
    open() {
      this.dialogFormVisible = false;
      if (this.password.password == "123") {
        getPassword(this.password._id).then(response => {
          this.$alert(response.data.password + "年轻人请拿走！！！！");
          this.password.password = "";
        });
      } else {
        this.$alert("少年你太弱了,再去修炼个几年吧");
      }
    },
    addEmail(){
      this.dialogAddServer= false
      let that = this
      addEmail(this.addServerData).then(response=>{
         that.$message.success("添加成功")
      })
    }
  },
  mounted: function() {
    this.test();
  }
};
</script>