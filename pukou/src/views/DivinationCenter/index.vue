<template>
    <div class="divination-center-container">
        <!-- 占卜方式选择 -->
        <div class="divination-way">
            <div class="title"><span>周易占扑:</span></div>
            <div class="divination-info">
                <div class="row birthDay">
                    <span>出生时间:</span>
                    <el-date-picker
                        v-model="time"
                        type="date"
                        placeholder="选择日期"
                    >
                    </el-date-picker>
                </div>
                <div class="row sex">
                    <span>性别:</span>
                    <el-radio
                        v-model="radio"
                        label="1"
                    >男</el-radio>
                    <el-radio
                        v-model="radio"
                        label="0"
                    >女</el-radio>
                </div>
                <div class="divination-method column">
                    <div>
                        <span>占卜方式:</span>
                    </div>
                    <el-radio
                        v-model="method"
                        label="0"
                    >手动摇卦</el-radio>
                    <el-radio
                        v-model="method"
                        label="1"
                    >手工指定</el-radio>
                    <el-radio
                        v-model="method"
                        label="2"
                    >电脑自动</el-radio>
                </div>
            </div>
        </div>

        <div
            class="divination-animation"
            v-show="method === '0'"
        >
            <div class="coins">
                <img
                    :src="qltb"
                    alt=""
                    v-for="(item, index) in [1, 2, 3]"
                    class="qltb"
                    :key="index"
                >
            </div>
            <div
                class="spin"
                @click="start"
            >起卦</div>

        </div>

        <!-- 计算结果 -->

        <div class="calculation-results">

            <table style="width: 95%; margin: 0 auto;">
                <tbody>
                    <tr
                        style="background: #F5F5F5;"
                        v-for="(item, index) in tableData "
                        :key="index"
                    >
                        <td
                            style="width: 80%; "
                            align="center"
                        >{{ item.label }}</td>
                        <td align="center"> <el-select
                                v-model="item.selectValue"
                                placeholder="请选择"
                            >
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select></td>
                    </tr>
                </tbody>
            </table>

        </div>
        <div
            style="margin: 0 auto; width: 100%; height: 50px;"
            @click="submit"
        >
            <el-button
                style="margin:20px auto 0; width: 100%;height: 50px; background-color: #804627;color: white;">查看结果</el-button>
        </div>

        <!-- 简介 -->
        <div class="introduction">
            <div>占卜简介:</div>
        </div>
        <div style="width: 90%;height: 100%; margin-top: 10px;">
            <dd>《易经》是一本最古老的书，被称为“群经之首”、“文化之源”。不过，现代人听到《易经》所想到的可能是：它可以用来算命吗？没错，《易经》确实敎人如何占卦，但是占卦不等于算命；并且，除了占卦之外，《易经》还谈做人处世的道理。
                <p>《易经》占卦须知 <br>
                    　　
                    1.人生有无数的抉择，造成吉凶悔吝。如何抉择可保平安？可以趋吉避凶？《易经》提醒人要注意：德行（因为欲望会造成盲点与执著）；能力（有能力就有自信）；以及智慧（充分运用理性的力量，加上生活经验的配合）。
                    <br>
                    　　 2.在“智慧”方面，占卦可以提供协助。所谓的“无有师保，如临父母”，以及“人谋鬼谋，百姓与能”（系辞下）。 <br>
                    　　 3.在理性及经验皆无法明确论断时，可以进行占卦。首先，要遵守“三不占”原则： <br>
                    　　 ①不诚不占：此乃求教于神明，首重真诚。 <br>
                    　　 ②不义不占：不合乎正当性及合理性的问题，不必占问。 <br>
                    　　 ③不疑不占：必须是理性难以测度之事。 <br>
                    　　 4.提问方法： <br>
                    　　
                    ①每次一个问题，问题是：现在有一选择，一旦决定则后果如何？譬如小孩可选两个学校，则须分占二次，看其结果何者为宜。或者，欲购某屋，占其是否可行？当然，亦可占个人之时运、经商、婚姻、事业、健康、子嗣等。
                    <br>
                    　　 ②同一问题，可以换不同方式来占。一旦有了结果，则须过三个月（一季）再占。 <br>
                    　　
                    5.占卦最好在清晨，心思清净，意念集中。先拟好问题，准备纸笔。拿出筹策，握于手中，心中默念：“假尔泰筮有常，某（自己名字）今以某事，未知可否。爰质所疑于神之灵，吉凶、得失、悔吝、忧虞，唯尔有神，尚明告之。”
                    <br>
                    　　 6.然后依占卦步骤，仔细进行。
                </p>
            </dd>
        </div>

        <div style="width: 100%; height: 150px;"></div>

    </div>


</template>

<script>
import qltb from '../../assets/images/qltb.gif'
import qltb2 from '../../assets/images/qltb2.gif'
import { submitDivination } from "@/api/divination";
import { mapMutations } from 'vuex';
export default {
    data() {
        return {
            radio: '1',
            time: '',
            method: '0',
            qltb: qltb,
            startValue: false,
            startIndex: 1,
            puguaArr: [],
            tableData: [{
                selectValue: '0',
                value: '6',
                label: '第六爻'
            },
            {
                selectValue: '0',
                value: '5',
                label: '第五爻'
            },
            {
                selectValue: '0',
                value: '4',
                label: '第四爻'
            },
            {
                selectValue: '0',
                value: '3',
                label: '第三爻'
            },
            {
                selectValue: '0',
                value: '2',
                label: '第二爻'
            },
            {
                selectValue: '0',
                value: '1',
                label: '第一爻'
            }],
            options: [
                {
                    value: '0',
                    label: '待算卦'
                },
                {
                    value: '1',
                    label: '少阴 ─　─'
                }, {
                    value: '2',
                    label: '少阳 ─── '
                }, {
                    value: '3',
                    label: '老阴─　─ Ｘ'
                }, {
                    value: '4',
                    label: '老阳─── ○'
                }],

        };
    },
    methods: {
        ...mapMutations([
            'upPuguaDateile', "upBuGua"
        ]),
        start() {
            this.startValue = !this.startValue
            if (this.startIndex > 6) {
                this.$message.success('您已经算卦完成，查看结果')
                return
            }
            if (this.startValue) {

                this.qltb = qltb2

            } else {
                const data = this.getRandomNumbers()
                const res = this.determineYinYang(data)
                this.puguaArr.push(res)
                this.tableData[6 - this.startIndex].selectValue = res
                this.qltb = qltb
                this.startIndex++
            }

        },
        async submit() {

            if (this.time === '') {
                this.$message.error('请选择出生时间')
                return
            }
            if (this.radio === '') {
                this.$message.error('请选择性别')
                return
            }


            if (this.method === '1') {
                this.puguaArr = []
                let index = 0
                this.tableData.map((item, startIndex) => {

                    if (item.selectValue === '0' && index == 0) {
                        this.$message.error('请先算卦')
                        index++
                        return false
                    } else {
                        this.puguaArr.push(this.tableData[5 - startIndex].selectValue)
                    }



                })
            }

            if (this.method === '2') {
                this.autoStart()
            }

            if (this.method === '0') {
                if (this.puguaArr.length < 6) {
                    this.$message.error('请先算卦')
                    return
                }
            }



            // 数组转字符串
            this.upBuGua(this.puguaArr)
            const data = this.puguaArr.join('')
            const res = await submitDivination(data)

            if (res.code === 200) {
                this.$message.success('提交成功')
                this.upPuguaDateile(res.data)
                this.$router.push('/datile')
            } else {
                this.$message.error('提交失败')
            }
        },
        //随机生成三个数字 只有 0 或 1
        getRandomNumbers() {
            return Array.from({ length: 3 }, () => Math.floor(Math.random() * 2));
        },
        autoStart() {
            // 1-4 随机生成一个数
            for (let index = 0; index < 6; index++) {
                const res = Math.floor(Math.random() * 4) + 1
                this.puguaArr.push(res)

                console.log(this.puguaArr);

            }


        },
        // 判断少阴少阳，老阴老阳
        determineYinYang(coins) {
            let numHeads = 0;
            let numTails = 0;
            for (let i = 0; i < coins.length; i++) {
                if (coins[i] === 0) {
                    numHeads++;
                } else if (coins[i] === 1) {
                    numTails++;
                }
            }
            console.log(numHeads, numTails);
            switch (true) {
                case numTails === 2:
                    console.log("少阴");
                    return '1'

                case numHeads === 2:
                    console.log("少阳");
                    return '2'

                case numTails === 3:
                    console.log("老阴");
                    return '3'

                case numHeads === 3:
                    console.log("老阳");
                    return '4'
                default:
                    console.log("未知情况");

            }
        }
    }

}
</script>

<style
    lang="scss"
    scoped
>
.divination-center-container {
    padding-left: 10px;
    background: #fefaef;
    width: 100%;
    /* height: 180vh; */

    .divination-way {
        .divination-info {
            .birthDay {
                margin-top: 20px;
                margin-left: 40px;
                width: 300px;

            }

            .sex {
                width: 300px;
                margin-top: 20px;
                margin-left: 40px;
            }

            .divination-method {
                width: 300px;
                height: 200px;
                margin-top: 20px;
                margin-left: 40px;
            }
        }
    }

    .divination-animation {

        width: 500px;
        margin: 20px auto;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        /* justify-content: center; */

        .coins {
            display: flex;
            justify-content: space-around;



        }


        .spin {
            width: 100px;
            height: 50px;
            margin: 20px auto;
            text-align: center;
            line-height: 50px;
            border: 1px solid #915926;
            border-radius: 10px;
            background: white;
        }
    }


    .calculation-results {
        width: 100%;
        /* height: 300px; */
        /* background: red; */

    }

    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .column {
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: space-around;
    }

    .title {
        font-size: 20px;
        color: #804627;
        width: 100%;
        height: 50px;
        background-color: #f8eacf;
        border-top: 2px solid #804627;
        border-bottom: 2px solid #f8eacf;

        span {
            margin-left: 20px;
            font-weight: bolder;
            line-height: 50px;
        }
    }

    .introduction {
        margin-top: 50px;
        width: 100%;
        height: 50px;
        background-color: #f8eacf;
        border-top: 2px solid #804627;
        border-bottom: 2px solid #f8eacf;

        div {
            margin-left: 20px;
            font-weight: bolder;
            line-height: 50px;
        }

    }
}
</style>
<style>
.el-table .warning-row {
    background: oldlace;
}

.el-table .success-row {
    background: #f0f9eb;
}
</style>