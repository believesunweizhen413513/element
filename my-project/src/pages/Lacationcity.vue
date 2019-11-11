<template>
  <div>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>
<script>
import Vue from "vue";

import { AddressEdit,Toast,Area} from "vant";
Vue.use(AddressEdit);
Vue.use(Toast);
Vue.use(Area);

export default {
  data() {
    return {
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "天津市",
          130000: "河北省",
          310000: "上海市",
          320000: "江苏省",
          330000: "浙江省",
          340000: "安徽省",
          350000: "福建省",
          360000: "江西省",
          370000: "山东省",
          410000: "河南省",
          420000: "湖北省",
          430000: "湖南省",
          440000: "广东省",
          450000: "广西壮族自治区",
          460000: "海南省",
          500000: "重庆市",
          510000: "四川省",
          520000: "贵州省",
          530000: "云南省"
        },
        city_list: {
          110100: "北京市",
          120100: "天津市",
          130100: "石家庄市",
          130200: "唐山市",
          130300: "秦皇岛市",
          130400: "邯郸市",
          130500: "邢台市",
          130600: "保定市",
          130700: "张家口市",
          130800: "承德市",
          130900: "沧州市",
          131000: "廊坊市",
          131100: "衡水市",
          140100: "太原市",
          140200: "大同市",
          140300: "阳泉市",
          140400: "长治市",
          140500: "晋城市",
          140600: "朔州市",
          140700: "晋中市",
          450100: "南宁市",
          450200: "柳州市",
          450300: "桂林市",
          450400: "梧州市",
          450500: "北海市",
          450600: "防城港市",
          450700: "钦州市",
          450800: "贵港市",
          450900: "玉林市",
          451000: "百色市",
          451100: "贺州市",
          451200: "河池市",
          451300: "来宾市",
          451400: "崇左市"
        },
        county_list: {
          110101: "东城区",
          110102: "西城区",
          110105: "朝阳区",
          110106: "丰台区",
          120101: "和平区",
          120102: "河东区",
          120103: "河西区",
          120104: "南开区",
          120105: "河北区",
          451202: "金城江区",
          451203: "宜州区",
          451221: "南丹县",
          451222: "天峨县",
          451223: "凤山县",
          451224: "东兰县",
          451225: "罗城仫佬族自治县",
          451226: "环江毛南族自治县",
          451227: "巴马瑶族自治县",
          451228: "都安瑶族自治县",
          451229: "大化瑶族自治县",
          451302: "兴宾区",
          451321: "忻城县",
          451322: "象州县",
          451323: "武宣县"
        }
      },
      searchResult: []
    };
  },

  methods: {
    onSave() {
      Toast("save");
      this.$axios.get("http://localhost:3000/dizhi", {
          params: {
            num: this
          }
        }).then(({ data }) => {
          this.restaurants = data;
          window.console.log(data);
        });
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail() {
      // if (value) {
      //   this.searchResult = [{
      //     name: '黄龙万科中心',
      //     address: '杭州市西湖区'
      //   }];
      // } else {
      //   this.searchResult = [];
      // }
    }
  }
};
</script>