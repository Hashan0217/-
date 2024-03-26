<template>
    <div class="sales-board">
        <!-- 头部信息 -->
        <div class="sales-board-intro">
            <h1>{{ shop.name }}</h1>
            <p style="color:#909399;">商品详情...</p>
        </div>

        <div style="width: 500px; display: flex;justify-content: space-between;  align-items: center;">
            <div>
                <img
                    :src="shop.img || 'https://via.placeholder.com/100'"
                    alt=""
                    style="width: 300px;height: 300px;"
                >
            </div>
            <!-- 规格说明 -->
            <div
                class="sales-board-form"
                style="height: 300px; display: flex; flex-direction: column; justify-content: space-around;"
            >
                <div
                    class="sales-board-info"
                    style="font-size: 24px;"
                >
                    <div class="left">总价：</div>
                    <div class="right">
                        <p>{{ proNumber * (shop.unitPrice * 1) }}元</p>
                    </div>
                </div>

                <div class="sales-board-info">
                    <div class="left">购买数量</div>
                    <div class="right">
                        <!-- 购买数量组件 -->
                        <count @selectChange="onParamChange('proNumber', $event)"></count>
                    </div>
                </div>





                <div
                    class="sales-board-info"
                    @click="showPayDialog"
                    style="width: 150px;height: 60px; background-color: #ecbd3c; border-radius: 10px;"
                >
                    <span style="margin: 0 auto;"> 立即购买</span>

                </div>
            </div>

        </div>



        <myDialog
            :isShow="isShowPayDialog"
            @close="closePayDialog"
        >
            <h3 slot="header-info">{{ shop.name }}</h3>
            <!-- 支付详情页面 -->
            <div slot="content-info">
                <table class="payDialog-table">
                    <thead>
                        <tr>

                            <td>购买数量</td>

                            <td>总价</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td>{{ proNumber }}</td>

                            <td>{{ proNumber * shop.unitPrice }}</td>
                        </tr>
                    </tbody>
                </table>
                <h3>请选择银行</h3>
                <!-- 选择银行组件 -->
                <bankChoose></bankChoose>
                <button
                    class="payDialog-btn"
                    @click="confirmBuy"
                >确认购买</button>
            </div>
        </myDialog>

        <!-- 支付状态选择框 -->
        <checkDialog
            :show-check-dialog="isShowCheckDialog"
            @on-close="closeCheckDialog"
        ></checkDialog>

    </div>
</template>

<script>
import RadioChoose from './Components/radioChoose.vue'
import Selection from './Components/Selection.vue'
import Count from './Components/Count.vue'
import Dialog from './Components/dialog.vue'
import BankChoose from './Components/bankChoose.vue'
import CheckDialog from './Components/checkDialog.vue'
import { mapGetters } from 'vuex'
import { createOrder } from '@/api/shop'
export default {
    components: {
        radioChoose: RadioChoose,
        selection: Selection,
        count: Count,
        myDialog: Dialog,
        bankChoose: BankChoose,
        checkDialog: CheckDialog
    },
    data() {
        return {
            proType: {},
            proPlaces: {},
            proNumber: 1,
            isShowPayDialog: false,
            /* bankId开始为null */
            bankId: null,
            isShowCheckDialog: false,
            isShowOrderList: false,
            shopId: '',
            shop: ''
        }
    },
    computed: {
        ...mapGetters(['shopList'])
    },
    mounted() {
        this.shopId = this.$route.query.id
        this.getData()
    },
    methods: {

        getData() {
            // console.log(this.shopList);
            this.shopList.filter(item => {

                if (item.id == this.shopId) {
                    this.shop = item
                }
                // this.proNumber = this.shop.unitPrice

            })
            console.log('获取数据');
        },
        onParamChange(attr, val) {
            this[attr] = val
        },
        /* 点击立即购买显示购买对话框 */
        showPayDialog() {
            this.isShowPayDialog = true
            /* 产生bug 修改后添加的代码 */
            this.isShowCheckDialog = false
        },
        /* 关闭购买对话框 */
        closePayDialog() {
            this.isShowPayDialog = false
        },
        /* 确认购买 */
        async confirmBuy() {

            /* 利用localStorage存储用户购买信息 */

            const shopData = {
                productId: this.shop.id,
                storeId: this.shop.storeId,
                num: this.proNumber,
            }
            const res = await createOrder(shopData)
            if (res.code === 200) {
                this.isShowPayDialog = false
                this.isShowCheckDialog = true
            }

            let data = { 'name': this.shop.name, 'number': this.proNumber, 'price': this.proNumber * this.shop.unitPrice, orderId: res.data }
            localStorage.setItem('orderList1', JSON.stringify(data))
        },
        /* 关闭支付状态选择框 */
        closeCheckDialog() {
            this.isShowCheckDialog = false
        }
    },

}
</script>

<style
    lang="scss"
    scoped
>
.sales-board-info {
    display: flex;
    /* justify-content: center; */
    align-items: center;

    .right {
        .count {
            display: flex;
            align-items: center;
        }

    }
}

.sales-board {
    width: 100%;
    height: 100%;
    padding: 20px;
    margin: 0;
    background: white;

    h1 {
        margin: 0;
        font-size: 50px;
    }
}



.selection-list {

    ul {
        li {
            width: 100px;
        }
    }
}

.payDialog-table {
    width: 100%;
    margin-bottom: 10px;
    border-collapse: collapse;
}

.payDialog-table thead tr td {
    border: 1px solid #e3e3e3;
    padding: 3px 5px;
    background: #55c396;
    text-align: center;
}

.payDialog-table tbody tr td {
    border: 1px solid #e3e3e3;
    padding: 3px 5px;
    text-align: center;
    font-size: 14px;
}

.payDialog-btn {
    width: 80px;
    height: 40px;
    border: 1px solid #eee;
    border-radius: 7px;
    background: #55ca93;
    font-size: 15px;
    color: #fff;
    cursor: pointer;
}
</style>