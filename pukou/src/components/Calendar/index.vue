<template>
    <div class="calendar-container">
        <div class="top">
            <div class="top-title">
                <h1>万年历</h1>
            </div>
            <!-- <div class="top-time">
                北京时间 00:02:16
            </div> -->
        </div>
        <div class="container-box">
            <div class="box-left">
                <el-calendar
                    highlight="true"
                    lunarcalendar="true"
                    class="el-calendar-table"
                >

                    <template
                        slot="dateCell"
                        slot-scope="{date, data}"
                    >
                        <div
                            class="day"
                            @click="thatDay(data.day)"
                        >
                            <h2 class="day-num">
                                {{ data.day.split('-').slice(2)[0] }}
                            </h2>

                            <div>
                                <span :class="data.isSelected ? 'is-selected' : 'day-des'"> {{ solarDate2lunar(data.day)
                                    }} </span>

                            </div>
                        </div>

                    </template>
                </el-calendar>
            </div>
            <div class="box-right">
                <div class="box-right-top">
                    <div class="box-right-time">
                        <span class="day">今天</span>
                        <span class="week">{{ lunarInfo.ncWeek }}</span>
                        <span class="year">{{ lunarInfo.cYear }}-{{ lunarInfo.cMonth }}-{{ lunarInfo.cDay }}</span>
                    </div>
                    <div class="box-right-day">
                        <h2>{{ lunarInfo.cDay }}</h2>
                    </div>
                    <div class="box-right-lunar-info">
                        <div>农历{{ lunarInfo.IMonthCn }}{{ lunarInfo.IDayCn }}</div>
                        <div class="lunar-info-des">{{ lunarInfo.gzYear }}年（{{ lunarInfo.Animal }}年）{{ lunarInfo.gzMonth
                            }} {{
                                lunarInfo.gzDay }}</div>
                    </div>
                </div>
                <div class="box-right-bottom">
                    <div class="box-right-bottom-title">
                        <div class="title-left">今日黄历</div>
                    </div>
                    <div class="box-right-bottom-content">
                        <div class="yi">
                            <span class="tag">宜</span>
                            <div class="text">
                                <span
                                    class="text-itme"
                                    v-for="(item, index) in todayFortune.Yi"
                                    :key="index"
                                >{{ item }}</span>
                            </div>

                        </div>
                        <div class="ji">
                            <span class="tag">忌</span>
                            <div class="text">
                                <span
                                    class="text-itme"
                                    v-for="(item, index) in todayFortune.Ji"
                                    :key="index"
                                >{{ item }}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
import calendarConverter from 'js-calendar-converter';
import { getTodayFortune } from '@/api/home'
export default {
    data() {
        return {
            lunarInfo: {},
            currentYear: "", //当天年分
            currentMonth: '',//当天月份
            currentDay: "",
            year: '', //变化的变量
            month: "",
            todayFortune: {}

        }
    },
    mounted() {
        this.bindClickEvent()
        const thatDay = `${this.currentYear}-${this.currentMonth}-${this.currentDay}`
        this.thatDay(thatDay)
        this.getTodayFortune()
    },
    computed: {

    },
    methods: {
        solarDate2lunar(solarDate) {
            const solar = solarDate.split('-')
            const lunar = calendarConverter.solar2lunar(solar[0], solar[1], solar[2])
            return lunar.IDayCn
        },
        thatDay(data) {
            console.log(data);
            const solar = data.split('-')
            const lunar = calendarConverter.solar2lunar(solar[0], solar[1], solar[2])
            this.lunarInfo = lunar
            this.getTodayFortune({ year: solar[0], month: solar[1], day: solar[2] })

        },
        bindClickEvent() {
            let btn = document.querySelectorAll('.el-calendar__button-group .el-button-group>button');

            this.month = this.$moment().month() + 1

            this.year = this.$moment().year()

            this.currentYear = this.year
            this.currentMonth = this.month
            this.currentDay = this.$moment().date();
            // 上一个月
            btn[0].addEventListener('click', () => {
                this.handleClick('prevClick')
            })

            // 今天
            btn[1].addEventListener('click', () => {
                this.handleClick('thatDay')
            })

            // 下一个月

            btn[2].addEventListener('click', () => {
                this.handleClick('nextClick')
            })

        },
        handleClick(type) {
            if (type == 'prevClick') {

                if (this.month === 0) {
                    this.month = 12;
                    this.year--;
                } else {
                    this.month--;

                }

                const data = `${this.year}-0${this.month}-01`

                this.getTodayFortune({ year: this.year, month: this.month, day: 1 })
                this.thatDay(data)

            }

            if (type == 'thatDay') {

                const data = `${this.currentYear}-${this.currentMonth}-${this.currentDay}`
                this.getTodayFortune({ year: this.year, month: this.month, day: this.currentDay })
                this.thatDay(data)

            }

            if (type == 'nextClick') {

                if (this.month === 12) {
                    this.month = 1;
                    this.year++;
                } else {
                    this.month++;
                }


                const data = `${this.year}-0${this.month}-01`
                this.getTodayFortune({ year: this.year, month: this.month, day: 1 })
                this.thatDay(data)

            }

        },
        // 获取运势

        async getTodayFortune(data = null) {
            const res = await getTodayFortune(data)
            if (res.code === 200) {
                res.data.Yi = res.data.Yi.split('.')
                res.data.Ji = res.data.Ji.split('.')
                this.todayFortune = res.data
            }
        },





    }
}
</script>

<style
    lang="scss"
    scoped
>
.calendar-container {
    width: 100%;
    height: 100%;

    .top {
        width: 100%;
        height: 80px;
        padding: 0;
        // background: #ecca5ca2;
        background: #fddf56;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .top-title {
            width: 100%;
            padding: 0;
            margin: 0;

            h1 {
                padding: 0;
                margin: 0;
                font-size: 40px;
                margin-left: 30px;
                /* color: #ecbd3c; */
                color: white;
            }

        }

        .top-time {
            width: 100%;
            /* text-align: right; */
            margin-left: 500px;

        }
    }

    .container-box {

        // width: 1500px;
        width: 80%;
        // height: 950px;
        margin: 0 auto;
        display: flex;


        .box-left {

            height: 100%;
            width: 55%;


            .day {
                display: flex;
                flex-flow: column;
                align-items: center;
                justify-content: center;
                height: 85%;
                padding: 8px;


                h2 {
                    margin: 0;
                    padding: 0;
                }

                .day-num {
                    text-align: center;
                    margin-bottom: 10px;
                }

                .day-des {

                    color: #c0c4cc;
                }



            }


        }



        .box-right {
            height: 614px;
            background: white;
            // flex: 3;
            width: 45%;

            .box-right-top {
                width: 100%;
                height: 350px;
                margin: 0 auto;
                border-bottom: #c0c4cc solid 1px;

                .box-right-time {
                    width: 70%;
                    height: 50px;
                    margin: 10px auto 0;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    padding: 0 20px;
                    line-height: 50px;

                    .day {
                        font-size: 20px;
                        /* width: 100%;
                        height: 100%; */
                        font-weight: bolder;
                        color: #fad119;
                        /* margin: 8px; */
                    }

                    .week {
                        font-size: 20px;
                        /* color: #c0c4cc; */
                    }

                    .year {
                        font-size: 20px;
                        /* color: #c0c4cc; */
                    }
                }

                .box-right-day {
                    width: 100%;
                    height: 100px;
                    margin: 30px auto 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    h2 {
                        font-size: 100px;
                        color: #fad119;
                    }
                }

                .box-right-lunar-info {
                    width: 100%;
                    height: 100px;
                    margin: 30px auto 0;
                    display: flex;
                    flex-flow: column;
                    justify-content: center;
                    align-items: center;
                    font-size: 20px;

                    .lunar-info-des {
                        font-size: 20px;
                        color: #c0c4cc;
                        margin-top: 10px;
                    }
                }



            }

            .box-right-bottom {

                .box-right-bottom-title {
                    width: 100%;
                    height: 50px;
                    font-size: 20px;
                    font-weight: bolder;
                    padding: 10px 20px;
                    color: #fad119;


                }

                .box-right-bottom-content {

                    .yi {
                        /* width: 100%;
                            height: 100px; */
                        height: 60px;
                        /* background: red; */
                        display: flex;
                        align-items: center;
                        /* margin-bottom: 15px; */

                        .tag {
                            width: 35px;
                            height: 25px;
                            border-radius: 5px;
                            background: #fad119;
                            text-align: center;
                            line-height: 25px;
                            margin-left: 10px;
                        }

                        .text {
                            /* width: 100%; */
                            /* height: 100px; */
                            display: flex;
                            justify-content: space-around;
                            align-items: center;
                            gap: 10px;
                            padding: 0 20px;

                            .text-itme {
                                font-size: 18px;
                                color: #c0c4cc;
                            }
                        }
                    }

                    .ji {
                        /* width: 100%; */
                        height: 60px;
                        display: flex;
                        align-items: center;

                        .tag {
                            width: 35px;
                            height: 25px;
                            border-radius: 5px;
                            background: #f10101;
                            text-align: center;
                            line-height: 25px;
                            margin-left: 10px;
                        }

                        .text {
                            /* width: 100%; */
                            /* height: 100px; */
                            display: flex;
                            justify-content: space-around;
                            align-items: center;
                            gap: 10px;
                            padding: 0 20px;

                            .text-itme {
                                font-size: 18px;
                                color: #c0c4cc;
                            }
                        }
                    }



                }


            }


        }
    }



}
</style>

<style lang="scss">
/**el-calendar样式*/

.el-calendar-table .el-calendar-day:hover {
    background: #fad11957;
}

.el-calendar-table .is-today .el-calendar-day {
    color: #f50000;
}

.el-calendar-table td.is-selected {
    background: #fad11957;
}

.el-calendar-table .el-calendar__body {
    padding: 0px 0px 0px;
}


.el-button.is-selected {
    background: #fad11957;
}

.el-button:hover {
    background: #fad11957;
}

.el-calendar-table .el-calendar-day {
    padding: 0;
}
</style>