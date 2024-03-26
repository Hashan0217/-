<template>
    <div class="datiel-container">
        <!-- 卦卜摘要信息 -->

        <div class="container-summary">
            <!-- <div id="ly_text">

                <div style="width:100%;text-align:center; ">
                    <b style="font-size: 16px;">易师汇六爻在线排盘系统</b>
                </div>


            </div> -->

            <div style="flex-direction: row;align-items: center;display:flex;">
                <span><b>公历：</b><span>{{ time }}</span></span>
            </div>
            <div style="flex-direction: row;align-items: center;display:flex;display:none;">
                <span><b>农历：</b><span>二月十二</span></span>
            </div>



            <div
                class="subtime"
                style="flex-direction: row;align-items: center;display:none;"
            >
                <span><b>时间：</b>
                    2024-3-21 23:47</span>
            </div>


            <div class="subtime">
                <span><b>干支：</b>

                    <span>{{ lunar.gzYear }}年 </span>
                    <b style="color:red;">{{ lunar.gzMonth }}月 </b>
                    <span>{{ lunar.gzDay }}日 </span>
                    <span><span style="color:red;">{{ ganzhiTime }} </span></span>
                </span>
            </div>
            <div class="subtime">
                <span><b>月建：</b>
                    <span>{{ yueJian }} </span>
                    <b style="color:red;">日建 </b>
                    <span>{{ dayJian }} </span>
                    <span>旬空 </span>
                    <span><span style="color:red;">{{ xunKong }} </span></span>
                </span>
            </div>


        </div>


        <div style="display: flex; margin: 0 auto;width: 100%; height: 100%;align-items: center;
    justify-content: space-around;">
            <!-- 本卦 -->
            <div class="bugua-container">
                <div class="bengua-summary">

                    <div class="feifushen">
                        <div class=" columns">
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ liuShen[5] }}</div>
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ liuShen[4] }}</div>
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ liuShen[3] }}</div>
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ liuShen[2] }}</div>
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ liuShen[1] }}</div>
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ liuShen[0] }}</div>
                        </div>
                    </div>
                    <div class="biangua-contaier">

                        <div
                            class="biangua"
                            v-if="feifuShen['1']"
                        >
                            <div
                                style="width: 150px; height: 21px;  display:flex;justify-content: space-around;align-items: center;">
                                <span class="grid-item"></span>
                                <span class="grid-item"></span>

                            </div>
                            <div
                                style="width: 150px;  height: 21px; display:flex;justify-content: space-around;align-items: center;">
                                <span class="grid-item"></span>
                                <span class="grid-item"></span>

                            </div>
                            <div
                                style="width: 150px;  height: 21px; display:flex;justify-content: space-around;align-items: center;">
                                <span class="grid-item"></span>
                                <span class="grid-item"></span>

                            </div>
                            <div
                                style="width: 150px;  height: 21px; display:flex;justify-content: space-around;align-items: center;">
                                <span class="grid-item"></span>
                                <span class="grid-item"></span>

                            </div>
                            <div
                                style="width: 150px;  height: 21px; display:flex;justify-content: space-around;align-items: center;">
                                <span class="grid-item">{{ feifuShen['5'][0] }}</span>
                                <span class="grid-item">{{ feifuShen['5'][1] }}</span>

                            </div>
                            <div
                                style="width: 150px;   height: 21px; display:flex;justify-content: space-around;align-items: center;">
                                <span class="grid-item"></span>
                                <span class="grid-item"></span>

                            </div>
                            <div
                                style="width: 150px;  height: 21px;  display:flex;justify-content: space-around;align-items: center;">
                                <span class="grid-item">{{ feifuShen['4'][0] }}</span>
                                <span class="grid-item">{{ feifuShen['4'][1] }}</span>

                            </div>
                            <div
                                style="width: 150px;  height: 21px;  display:flex;justify-content: space-around;align-items: center;">
                                <span class="grid-item"></span>
                                <span class="grid-item"></span>

                            </div>
                            <div
                                style="width: 150px;  height: 21px;  display:flex;justify-content: space-around;align-items: center;">
                                <span class="grid-item">{{ feifuShen['3'][0] }}</span>
                                <span class="grid-item">{{ feifuShen['3'][1] }}</span>

                            </div>
                            <div
                                style="width: 150px;  height: 21px; display:flex;justify-content: space-around;align-items: center;">
                                <span class="grid-item"></span>
                                <span class="grid-item"></span>

                            </div>
                            <div
                                style="width: 150px;  height: 21px; display:flex;justify-content: space-around;align-items: center;">
                                <span class="grid-item">{{ feifuShen['2'][0] }}</span>
                                <span class="grid-item">{{ feifuShen['2'][1] }}</span>

                            </div>
                            <div
                                style="width: 150px;  height: 21px; display:flex;justify-content: space-around;align-items: center;">
                                <span class="grid-item"></span>
                                <span class="grid-item"></span>

                            </div>
                            <div
                                style="width: 150px;  height: 21px; display:flex;justify-content: space-around;align-items: center;">
                                <span class="grid-item">{{ feifuShen['1'][0] }}</span>
                                <span class="grid-item">{{ feifuShen['1'][1] }}</span>

                            </div>

                        </div>



                    </div>
                    <div class="liuqin">
                        <div class=" columns">
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ linYueJianYuePo[5] }}</div>
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ linYueJianYuePo[4] }}</div>
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ linYueJianYuePo[3] }}</div>
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ linYueJianYuePo[2] }}</div>
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ linYueJianYuePo[1] }}</div>
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ linYueJianYuePo[0] }}</div>
                        </div>
                    </div>
                    <div class="liuqin">
                        <div class=" columns">
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ linRiJianAnDongRiPo[5] }}</div>
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ linRiJianAnDongRiPo[4] }}</div>
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ linRiJianAnDongRiPo[3] }}</div>
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ linRiJianAnDongRiPo[2] }}</div>
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ linRiJianAnDongRiPo[1] }}</div>
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ linRiJianAnDongRiPo[0] }}</div>
                        </div>
                    </div>


                    <div class="liuqin">
                        <div class=" columns">
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ benGuaYueJian['5'] }}</div>
                            <div class="grid-item">{{ benGuaLiuQin[5] }}</div>
                            <div class="grid-item">{{ benGuaYueJian['4'] }}</div>
                            <div class="grid-item">{{ benGuaLiuQin[4] }}</div>
                            <div class="grid-item">{{ benGuaYueJian['3'] }}</div>
                            <div class="grid-item">{{ benGuaLiuQin[3] }}</div>
                            <div class="grid-item">{{ benGuaYueJian['2'] }}</div>
                            <div class="grid-item">{{ benGuaLiuQin[2] }}</div>
                            <div class="grid-item">{{ benGuaYueJian['1'] }}</div>
                            <div class="grid-item">{{ benGuaLiuQin[1] }}</div>
                            <div class="grid-item">{{ benGuaYueJian['0'] }}</div>
                            <div class="grid-item">{{ benGuaLiuQin[0] }}</div>
                        </div>
                    </div>
                    <div class="huntianjiazi">
                        <div class=" columns">
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ benGuaDayJian['5'] }}</div>
                            <div class="grid-item">{{ benGuaHunTianJiaZi[5] }}</div>
                            <div class="grid-item">{{ benGuaDayJian['4'] }}</div>
                            <div class="grid-item">{{ benGuaHunTianJiaZi[4] }}</div>
                            <div class="grid-item">{{ benGuaDayJian['3'] }}</div>
                            <div class="grid-item">{{ benGuaHunTianJiaZi[3] }}</div>
                            <div class="grid-item">{{ benGuaDayJian['2'] }}</div>
                            <div class="grid-item">{{ benGuaHunTianJiaZi[2] }}</div>
                            <div class="grid-item">{{ benGuaDayJian['1'] }}</div>
                            <div class="grid-item">{{ benGuaHunTianJiaZi[1] }}</div>
                            <div class="grid-item">{{ benGuaDayJian['0'] }}</div>
                            <div class="grid-item">{{ benGuaHunTianJiaZi[0] }}</div>
                        </div>
                    </div>
                </div>
                <div class="bengua-contaier">
                    <div class="bengua">
                        <div class="rows">
                            <span style="width: 200px;text-align: center;">{{ benGuaName
                                }}（乾{{ benGuaPalace }}：{{ benGuaWuxing }}）</span>
                        </div>
                        <div class="rows">
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                        </div>
                        <div
                            :class="{ 'rows-line': bugua[5] == '2' || bugua[5] == '4', 'rows-dotted-line': bugua[5] == '1' || bugua[5] == '3' }">
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                        </div>
                        <div class="rows">
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                        </div>
                        <div
                            :class="{ 'rows-line': bugua[4] == '2' || bugua[4] == '4', 'rows-dotted-line': bugua[4] == '1' || bugua[4] == '3' }">
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                        </div>
                        <div class="rows">
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                        </div>
                        <div
                            :class="{ 'rows-line': bugua[3] == '2' || bugua[3] == '4', 'rows-dotted-line': bugua[3] == '1' || bugua[3] == '3' }">
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                        </div>
                        <div class="rows">
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                        </div>
                        <div
                            :class="{ 'rows-line': bugua[2] == '2' || bugua[2] == '4', 'rows-dotted-line': bugua[2] == '1' || bugua[2] == '3' }">
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                        </div>
                        <div class="rows">
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                        </div>
                        <div
                            :class="{ 'rows-line': bugua[1] == '2' || bugua[1] == '4', 'rows-dotted-line': bugua[1] == '1' || bugua[1] == '3' }">
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                        </div>
                        <div class="rows">
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                        </div>
                        <div
                            :class="{ 'rows-line': bugua[0] == '2' || bugua[0] == '4', 'rows-dotted-line': bugua[0] == '1' || bugua[0] == '3' }">
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                        </div>


                    </div>


                </div>
                <div
                    class="bengua-summary-right"
                    style="margin-left: 20px;"
                >

                    <div class="feifushen_2">
                        <div
                            class=" columns"
                            ref="bengua-summary-right"
                        >
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ benGuaShiYaoYingYao[0] == 5 ? '世' : '' }} {{
                    benGuaShiYaoYingYao[1]
                        == 5
                        ? '应' : '' }}</div>
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ benGuaShiYaoYingYao[0] == 4 ? '世' : '' }} {{
                    benGuaShiYaoYingYao[1]
                        == 4
                        ? '应' : '' }}</div>
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ benGuaShiYaoYingYao[0] == 3 ? '世' : '' }} {{
                    benGuaShiYaoYingYao[1]
                        == 3
                        ? '应' : '' }}</div>
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ benGuaShiYaoYingYao[0] == 2 ? '世' : '' }} {{
                    benGuaShiYaoYingYao[1]
                        == 2
                        ? '应' : '' }} {{ crossOrcircle }}</div>
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ benGuaShiYaoYingYao[0] == 1 ? '世' : '' }} {{
                    benGuaShiYaoYingYao[1]
                        == 1
                        ? '应' : '' }}</div>
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ benGuaShiYaoYingYao[0] == 0 ? '世' : '' }} {{
                    benGuaShiYaoYingYao[1]
                        == 0
                        ? '应' : '' }}</div>
                        </div>
                    </div>


                </div>
            </div>

            <!-- 变卦 -->
            <div class="biangua-container">
                <div class="biangua-summary">

                    <div class="liuqin">
                        <div class=" columns">
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ bianGuaYueJian['5'] }}</div>
                            <div class="grid-item">{{ bianGuaLiuQin[5] }}</div>
                            <div class="grid-item">{{ bianGuaYueJian['4'] }}</div>
                            <div class="grid-item">{{ bianGuaLiuQin[4] }}</div>
                            <div class="grid-item">{{ bianGuaYueJian['3'] }}</div>
                            <div class="grid-item">{{ bianGuaLiuQin[3] }}</div>
                            <div class="grid-item">{{ bianGuaYueJian['2'] }}</div>
                            <div class="grid-item">{{ bianGuaLiuQin[2] }}</div>
                            <div class="grid-item">{{ bianGuaYueJian['1'] }}</div>
                            <div class="grid-item">{{ bianGuaLiuQin[1] }}</div>
                            <div class="grid-item">{{ bianGuaYueJian['0'] }}</div>
                            <div class="grid-item">{{ bianGuaLiuQin[0] }}</div>
                        </div>
                    </div>
                    <div class="huntianjiazi">
                        <div class=" columns">
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ bianGuaDayJian['5'] }}</div>
                            <div class="grid-item">{{ bianGuaHunTianJiaZi[5] }}</div>
                            <div class="grid-item">{{ bianGuaDayJian['4'] }}</div>
                            <div class="grid-item">{{ bianGuaHunTianJiaZi[4] }}</div>
                            <div class="grid-item">{{ bianGuaDayJian['3'] }}</div>
                            <div class="grid-item">{{ bianGuaHunTianJiaZi[3] }}</div>
                            <div class="grid-item">{{ bianGuaDayJian['2'] }}</div>
                            <div class="grid-item">{{ bianGuaHunTianJiaZi[2] }}</div>
                            <div class="grid-item">{{ bianGuaDayJian['1'] }}</div>
                            <div class="grid-item">{{ bianGuaHunTianJiaZi[1] }}</div>
                            <div class="grid-item">{{ bianGuaDayJian['0'] }}</div>
                            <div class="grid-item">{{ bianGuaHunTianJiaZi[0] }}</div>
                        </div>
                    </div>
                </div>
                <div class="biangua-contaier">
                    <div class="biangua">

                        <div class="rows">
                            <span style="width: 200px;text-align: center;">{{ bianGuaName
                                }}（乾{{ bianGuaPalace }}：{{ bianGuaWuxing }}）</span>
                        </div>
                        <div class="rows">
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                        </div>
                        <div
                            :class="{ 'rows-line': biangua[5] == '2' || biangua[5] == '4', 'rows-dotted-line': biangua[5] == '1' || biangua[5] == '3' }">
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                        </div>
                        <div class="rows">
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                        </div>
                        <div
                            :class="{ 'rows-line': biangua[4] == '2' || biangua[4] == '4', 'rows-dotted-line': biangua[4] == '1' || biangua[4] == '3' }">
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                        </div>
                        <div class="rows">
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                        </div>
                        <div
                            :class="{ 'rows-line': biangua[3] == '2' || biangua[3] == '4', 'rows-dotted-line': biangua[3] == '1' || biangua[3] == '3' }">
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                        </div>
                        <div class="rows">
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                        </div>
                        <div
                            :class="{ 'rows-line': biangua[2] == '2' || biangua[2] == '4', 'rows-dotted-line': biangua[2] == '1' || biangua[2] == '3' }">
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                        </div>
                        <div class="rows">
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                        </div>
                        <div
                            :class="{ 'rows-line': biangua[1] == '2' || biangua[1] == '4', 'rows-dotted-line': biangua[1] == '1' || biangua[1] == '3' }">
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                        </div>
                        <div class="rows">
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                        </div>
                        <div
                            :class="{ 'rows-line': biangua[0] == '2' || biangua[0] == '4', 'rows-dotted-line': biangua[0] == '1' || biangua[0] == '3' }">
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                            <span class="grid-item"></span>
                        </div>

                    </div>



                </div>
                <div
                    class="bengua-summary-right"
                    style="margin-left: 20px;"
                >

                    <div class="feifushen_2">
                        <div
                            class=" columns"
                            ref="bengua-summary-right"
                        >
                            <div class="grid-item"></div>
                            <div class="grid-item"></div>
                            <div class="grid-item">
                                {{ bianGuaShiYaoYingYao[0] === 5 ? '世' : '' }}
                                {{ bianGuaShiYaoYingYao[1] === 5 ? '应' : '' }}
                            </div>
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ bianGuaShiYaoYingYao[0] === 4 ? '世' : '' }}
                                {{ bianGuaShiYaoYingYao[1] === 4 ? '应' : '' }}
                            </div>
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ bianGuaShiYaoYingYao[0] === 3 ? '世' : '' }} {{
                    bianGuaShiYaoYingYao[1]
                        === 3
                        ? '应' : '' }}</div>
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ bianGuaShiYaoYingYao[0] === 2 ? '世' : '' }} {{
                    bianGuaShiYaoYingYao[1]
                        === 2
                        ? '应' : '' }}</div>
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ bianGuaShiYaoYingYao[0] === 1 ? '世' : '' }} {{
                    bianGuaShiYaoYingYao[1]
                        === 1
                        ? '应' : '' }}</div>
                            <div class="grid-item"></div>
                            <div class="grid-item">{{ bianGuaShiYaoYingYao[0] === 0 ? '世' : '' }} {{
                                bianGuaShiYaoYingYao[1]
                                === 0
                                ? '应' : '' }}</div>
                        </div>
                    </div>


                </div>

            </div>
        </div>

        <div
            v-html="splitmeansText"
            style="margin-top: 50px; padding: 20px; border: 1px solid #ccc; border-radius: 10px; background-color: #f5f5f5;"
        ></div>

        <div style="width: 100%;height: 100px;"></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import calendarConverter from 'js-calendar-converter';
export default {
    data() {
        return {
            ganzhiTime: '',
            lunar: '',
            time: ''
        }
    },
    computed: {
        ...mapGetters(["liuShen", "feiFushen", "feiFuShenDayJian",
            "feiFuShenYueJian", "benGuaLiuQin", "benGuaHunTianJiaZi",
            "benGuaYueJian", "benGuaDayJian", "bugua", "benGuaShiYaoYingYao", "bianGuaLiuQin",
            "bianGuaYueJian", "bianGuaDayJian", "bianGuaHunTianJiaZi", "biangua", "bianGuaShiYaoYingYao",
            "benGuaName", "benGuaPalace", "benGuaWuxing", "bianGuaName", "bianGuaPalace", "bianGuaWuxing",
            "meansText", "feifuShen", "linYueJianYuePo", "linRiJianAnDongRiPo", "xunKong", "yueJian", "dayJian"

        ]),
        crossOrcircle() {
            console.log(this.bugua[0], this.bugua[1], this.bugua[2]);
            if ((this.bugua[0] === '1' || this.bugua[0] === '3') && (this.bugua[1] === '1' || this.bugua[1] === '3') && (this.bugua[2] === '1' || this.bugua[2] === '3')) {
                return 'X'
            } else if ((this.bugua[0] === '2 ' || this.bugua[0] === '4') && (this.bugua[1] === '2 ' || this.bugua[1] === '4') && (this.bugua[2] === '2 ' || this.bugua[2] === '4')) {
                return 'O'
            } else {
                return ''
            }
        },
        splitmeansText() {
            //  \n 为结尾的字符串包含p元素中
            return this.meansText.split('\n').map(item => {
                return `<p>${item}</p>`
            }).join('')
        }
    },
    mounted() {
        this.getLonerTime()
    },
    methods: {
        getLonerTime() {
            // 获取当前年月日
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();

            this.time = `${year}-${month}-${day}`
            // 获取农历
            let lunar = calendarConverter.solar2lunar(year, month, day);






            // 十二时辰按照地支，十二属相排列
            let tzArr = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']
            // 十二时辰对应
            let sdArr = ['夜半', '鸡鸣', '平旦', '日出', '食时', '隅中', '日平', '日昳', '晡时', '日入', '黄昏', '人定']
            // 一个时辰为八刻
            let skArr = ['一', '二', '三', '四', '五', '六', '七', '八']

            // 默认获取当前时辰，时刻
            const getShiChen = (h = new Date().getHours(), m = new Date().getMinutes(), s = new Date().getSeconds()) => {
                let shichenStr = tzArr[parseInt(h / 2)] + '时（' + sdArr[parseInt(h / 2)] + '）'
                // 判断时刻
                if (h % 2 === 0) {
                    shichenStr += skArr[parseInt(m / 15)]
                } else if (h % 2 === 1) {
                    shichenStr += skArr[parseInt(m / 15) + 4]
                }
                return shichenStr + '刻'
            }

            const time = getShiChen()

            this.ganzhiTime = time
            this.lunar = lunar

        }
    }
}
</script>



<style>
body {}
</style>

<style
    lang="scss"
    scoped
>
.datiel-container {
    background: #fefaef;


    .container-summary {
        margin: 0 20px 50px;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 10px;
        background: #fefaef;
        /* background-color: #f5f5f5; */

        .subtime {
            margin-top: 10px;
        }

        .shenshaBox {
            display: none;
        }

        .shenshaShow {
            cursor: pointer;
        }
    }

    .bugua-container {
        /* padding: 20px; */
        display: flex;

        .bengua-summary {
            display: flex;

            .feifushen,
            .feifushen_2,
            .lianyuejian,
            .liuqin,
            .huntianjiazi {
                width: 70px;
                height: 30px;
                /* background: red; */
                /* margin-left: 10px; */
            }
        }

        .bengua-contaier {
            display: flex;
            width: 200px;

            .bengua {
                width: 70px;
                height: 30px;
                display: flex;
                flex-direction: column;
                /* margin-left: 10px; */
            }


        }

        .bengua-summary-right {
            display: flex;
        }





    }

    .biangua-container {
        display: flex;

        .biangua-summary {
            display: flex;

            .feifushen,
            .feifushen_2,
            .lianyuejian,
            .liuqin,
            .huntianjiazi {
                width: 70px;
                height: 30px;

            }
        }

        .biangua-contaier {
            display: flex;
            width: 200px;

            .biangua {
                width: 70px;
                height: 30px;
                display: flex;
                flex-direction: column;

            }
        }
    }


    .columns {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(13, 1fr);
        /* grid-gap: 5px; */

        .grid-item {
            /* background-color: #f0f0f0;
                    border: 1px solid #050404; */
            height: 21px;
            /* padding: 10px; */
            text-align: center;
        }
    }

    .rows {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(1, 1fr);
        /* grid-gap: 5px; */

        .grid-item {
            /* border: 1px solid #090909; */
            height: 21px;
            width: 100px;
            /* padding: 10px; */
            text-align: center;
            /* background: #050404; */
        }
    }

    .rows-line {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(1, 1fr);
        /* grid-gap: 5px; */

        .grid-item {
            /* border: 1px solid #090909; */
            height: 21px;
            width: 70px;
            /* padding: 10px; */
            text-align: center;
            background: #050404;
        }
    }

    .rows-dotted-line {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(1, 1fr);
        /* grid-gap: 5px; */

        .grid-item {
            /* border: 1px solid #090909; */
            height: 21px;
            width: 70px;
            /* padding: 10px; */
            text-align: center;
            background: #050404;
            /* border-top: 1px dotted #000; */

            &:not(:first-child):not(:last-child) {
                background-color: white;
            }

        }


    }



}
</style>