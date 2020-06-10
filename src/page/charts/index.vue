<template>
  <div style="width:85%; height:400px; margin:0 auto;">
    <!-- 使用layout布局，每行是24格，gutter属性指定每一栏之间的间隔 -->
    <el-row :gutter="24">
      <el-col :span="12">
        <el-panel>
          <el-divider content-position="left">市场份额全国分布情况</el-divider>
          <!-- 图表公有属性例如 width, events 等，这个地图是来源于https://v-charts.js.org/#/map -->
          <!-- 下面根据地图属性，定义了数据源名字是provinceData，并在data中赋值了 -->
          <!-- 绑定事件通过传递一个事件名称和对应回调函数的对象实现，,本次事件命名为provinceChartEvents，示例https://v-charts.js.org/#/event -->
          <ve-map :data="provinceData" :events="provinceChartEvents" />
        </el-panel>
      </el-col>
      <el-col :span="12">
        <el-panel>
          <!-- 上半部分右侧瀑布流图 -->
          <el-divider content-position="left">市场份额全国分布情况</el-divider>
          <ve-waterfall :data="provinceData" />
        </el-panel>
      </el-col>
    </el-row>

    <!-- 第二行 -->
    <el-row :gutter="24">
      <el-col :span="12">
        <el-panel>
          <el-divider content-position="left"
            >市场份额全国分布情况-{{ province }}</el-divider
          >
          <!-- :settings="citySettings"，设置了显示的城市，动态绑定到data里 -->
          <ve-map
            :data="cityData"
            :settings="citySettings"
            :events="provinceChartEvents"
          />
        </el-panel>
      </el-col>
      <el-col :span="12">
        <el-panel>
          <el-divider content-position="left"
            >市场份额全国分布情况-{{ province }}</el-divider
          >
          <ve-pie :data="cityData" />
        </el-panel>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "stat-panel",
  data() {
    var _self = this;
    return {
      cityMapping: {
        北京: "beijing",
        上海: "shanghai",
        天津: "tianjin",
        重庆: "chongqqing",
        黑龙江: "heilongjianng",
        吉林: "jilin",
        辽宁: "liaoning",
        河北: "hebei",
        河南: "henan",
        山东: "shandong",
        山西: "shanxi",
        湖北: "hubei",
        湖南: "hunan",
        江西: "jiangxi",
        广东: "guangdong",
        福建: "fujian",
        江苏: "jiangsu",
        安徽: "anhui",
        浙江: "zhejiang",
        四川: "sichuan",
        青海: "qinghai",
        陕西: "shanxi",
        海南: "hainan",
        云南: "yunnan",
        贵州: "guizhou",
        新疆: "xinjiang",
        西藏: "xizang",
        宁夏: "ningxia",
        广西: "guangxi",
        内蒙古: "neimenggu",
        台湾: "taiwan"
      },
      province: "安徽",

      // 1.左上角地图的数据源，赋值如下，展示2列，每列赋值如row
      provinceData: {
        columns: ["省份", "数量"],
        rows: [
          { 省份: "内蒙古", 数量: 22 },
          { 省份: "新疆", 数量: 32 },
          { 省份: "安徽", 数量: 42 },
          { 省份: "福建", 数量: 22 },
          { 省份: "西藏", 数量: 44 }
        ]
      },
      // 2.网页左侧地图点击事件如下
      provinceChartEvents: {
        // 也可以这样写click: function (e){
        click: (e) => {
          console.log(e);
          var province = e.name;
          _self.province = province;
          // 初始化城市数据
          _self.initCityData(province);
        }
      },

      // 3.网页下半部分左侧，地图图表，设置了城市为安徽，会默认显示安徽的地图
      citySettings: {
        position: "province/anhui"
      },
      // 4.网页下半部右侧，圆饼图数据如下
      cityData: {
        columns: ["市", "数量"],
        rows: [
          { 市: "合肥市", 数量: 72 },
          { 市: "淮南市", 数量: 32 },
          { 市: "黄山市", 数量: 62 },
          { 市: "芜湖市", 数量: 22 }
        ]
      }
    };
  },
  mounted() {
    // 初始化数据
    this.initData();
  },
  methods: {
    initData() {
      this.initDealerList();
    },

    // 初始化城市数据
    initCityData(provinceName = "all") {
      var isLoadProvince = provinceName === "all";
      if (isLoadProvince) {
        this.provinceData.rows = [];
      } else {
        this.cityData.rows = [];
        this.citySettings.position =
          "province/" + this.cityMapping[provinceName];
      }
    }
  }
};
</script>
<style scoped></style>
