<?php
/*

Template name: Page distric

*/
get_header();

$is_page_builder_used = et_pb_is_pagebuilder_used( get_the_ID() );

?>

    <!-- styles for new elements -->
    <style>
        div.footer_button.bottomfixed {
            display: none!important;
        }
        select {
            padding: 12px 16px;
        }

        /* form-wrapper */
        .pb_form {margin: 0 auto;max-width: 1022px;}
        .calculator-wrapper .form-wrapper {
            background-color: rgba(38, 38, 38, 1);
            border-radius: 20px;
            padding: 80px;
            margin: 0 auto 30px;
            max-width: 1022px;
        }
        .calculator-wrapper .form-wrapper .form {
            display: flex;
            display: -webkit-flex;
            justify-content: center;
            flex-wrap: wrap;
        }
        .calculator-leftblock, .calculator-rightblock {
            box-sizing: border-box;
            width: 50%;
        }
        .calculator-leftblock {
            padding-right: 44px;
        }
        .calculator-rightblock {
            padding: 69px 0 0 44px;
        }
        .calculator-rightblock div[data-field-name="marital_status"] {
            padding-top: 29px;
        }
        .calculator-wrapper .input-box {
            margin-bottom: 20px;
        }
        .calculator-wrapper .input-box .input-wrapper {
            display: flex;
            position: relative;
        }
        .calculator-wrapper .input-box .input-wrapper.validation-failed {
            border: 1px solid #FF3D52;
            border-radius: 4px;
            margin-bottom: 45px;
        }
        .calculator-wrapper .input-box .input-wrapper.validation-failed.radio-input-wrapper {
            border: none;
        }
        .calculator-wrapper .input-box .input-wrapper.validation-failed.radio-input-wrapper .radio-input{
            border: 1px solid #FF3D52;
            border-radius: 4px;
        }
        .calculator-wrapper .input-box .input-wrapper.validation-failed::after {
            content: attr(data-validation-msg);
            position: absolute;
            left: 0;
            bottom: 0;
            transform: translateY(100%);
            color: #FF3D52;
            font-size: 14px;
        }
        .calculator-wrapper .input-box .input-title {
            color: #ffffff;
            font-weight: 900;
            font-size: 16px;
            margin-bottom: 12px;
        }

        .calculator-wrapper .input-box .input-description {
            color: #ffffff;
            font-weight: 400;
            font-size: 13px;
            line-height: 150%;
            margin-bottom: 12px;
        }

        .calculator-wrapper .input-box .input-wrapper.select {
            background: white;
            border-radius: 5px;
            cursor: pointer;
        }
        .calculator-wrapper .input-box .input-wrapper.select select {
            position: relative;
            background: transparent;
            cursor: pointer;
        }
        .calculator-wrapper .input-box .input-wrapper.select::before {
            content: "▾";
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 15px;
            font-size: 18px;
            color: #818181;
        }
        .calculator-wrapper button.calculate-action {
            display: block;
            background: #FDB948;
            border: 1px solid #FDB948;
            box-shadow: 0px 6px 12px rgba(43, 43, 43, 0.15);
            border-radius: 33px;
            margin: 64px auto 0;
            padding: 10px 20px;
            padding-top: 12px;
            font-weight: bold;
            font-size: 17px;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .calculator-wrapper button.calculate-action.already-pressed {
            background: transparent;
            border-color: #000;
            width: auto;
            padding-left: 15px;
            padding-right: 15px;
        }
        .calculator-wrapper button.calculate-action.already-pressed:hover {
            background: #FDB948;
            border-color: #FDB948;
        }
        .calculator-wrapper button.calculate-action::after {
            content: ">";
            margin-left: 5px;
            font-family: monospace;
            font-size: 15px;
        }
        .calculator-wrapper button.calculate-action.already-pressed::after {
            display: none;
        }
        /* /form-wrapper */

        /* text-inputs */
        .calculator-wrapper .input-box input[type="text"] {
            height: 40px;
            padding: 0;
            padding-top: 2px;
            padding-left: 20px;
            font-weight: normal;
            font-size: 17px;
        }
        .calculator-wrapper .input-box .input-wrapper.money-input input[type="text"] {
            padding-left: 56px;
        }
        .calculator-wrapper .input-wrapper.money-input::before {
            content: "$";
            position: absolute;
            top: 50%;
            left: 17px;
            width: 24px;
            line-height: 24px;
            border-right: 1px solid #A9A9A9;
            transform: translateY(-50%);
        }
        /* /text-inputs */

        /* radio inputs */
        .calculator-wrapper .input-box input[type="radio"] {
            display: none;
        }
        .calculator-wrapper .input-box .radio-input {
            display: flex;
            padding: 5px 15px;
            height: 40px;
            justify-content: center;
            align-items: center;
            background: white;
            border-radius: 4px;
            margin-right: 10px;
            cursor: pointer;
        }
        .calculator-wrapper .input-box svg.rb {
            width: 15px;
            height: 15px;
            margin-right: 10px;
        }
        .calculator-wrapper .input-box svg.rb circle:first-child {
            cx: 10;
            cy: 10;
            r: 7;
            stroke-width: 2;
            stroke: #000;
            fill: none;
        }
        .calculator-wrapper .input-box svg.rb circle:last-child {
            cx: 10;
            cy: 10;
            r: 4;
            transition: all 0.2s ease;
            fill: transparent;
        }
        .calculator-wrapper .input-box input[type="radio"]:checked ~ svg.rb circle:last-child {
            fill: #000;
        }
        /* /radio inputs */
        @media (min-width: 767px) and (max-width: 1023px) {
            .calculator-wrapper button.calculate-action {
                padding: 9px 0;
                padding-top: 10px;
                font-weight: bold;
                font-size: 14px;
                font-size: clamp(14px, 3vw, 17px);
                width: 100%;
            }
            .calculator-wrapper button.calculate-action::after {
                display: none!important;
            }
        }
        @media (max-width: 767px) {
            .calculator-wrapper {
                flex-wrap: wrap;
            }
            .calculator-wrapper button.calculate-action {
                padding: 9px 0;
                padding-top: 10px;
                font-weight: bold;
                font-size: 14px;
                font-size: clamp(14px, 3.5vw, 17px);
                width: 100%;
            }
        }
        @media (max-width: 425px) {
            .calculator-wrapper button.calculate-action::after {
                display: none!important;
            }
        }

        .answer_new *, .answer_new *::before, .answer_new *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .answer_new {
            display: none;
            justify-content: space-between;
            align-items: stretch;
        }

        .answer_new>div {
            width: 50%;
        }

        .result {
            background: #262626;
            border-radius: 10px;
            padding: 70px;
        }

        .result p {
            margin-bottom: 28px;
            color: white;
        }

        .result>p:first-child {
            font-size: 30px;
            font-weight: 700;
        }
        .result>p:first-child span {
            color: #FDB948;
        }

        .result>p:nth-child(2) b {
            color: #FDB948;
        }

        .result>p:nth-child(4) {
            font-weight: 700;
        }

        .data {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
        }

        .data>div {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }
        .data>div p{
            width: 45%;
            color: #676767;
            font-weight: 700;
            font-size: 16px;
            line-height: 1.1;
            margin-bottom: 30px;
        }

        .data>div p span {
            display: inline-block;
            margin-top: 12px;
            color: #262626;
        }

        .data .recalc {
            border: 1px solid #FDB948;
            background: none;
            color: #FDB948;
            cursor: pointer;
            font-size: 23px;
            padding: 10px 15px;
            border-radius: 50px;
            transition: all .3s;
        }
        .data .recalc:hover {
            background-color: #FDB948;
            color: white;
        }

        .result .popup_show {
            border: none;
            padding: 0 30px;
        }

        .dark_bg {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, .3);
            display: none;
        }


        .popup {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-family: 'Open Sans', sans-serif;
            background: #f9f9f9;
            border-radius: 10px;
            max-width: 432px;
            overflow: hidden;
        }
        .popup__header {
            background: url("https://conversionratestore.github.io/projects/hantergalloway/img/popup-image.png") center center no-repeat;
            background-size: cover;
            padding: 11%;
            text-align: center;
        }
        .popup p {
            margin: 0;
            font-weight: 500;
            font-size: 14px;
            color: #000000;
            line-height: 19px;
        }
        .popup .popup__header p {
            color: #FFFFFF;
        }
        .popup .popup__header p.text_bigger {
            font-weight: bold;
            font-size: 24px;
            line-height: 33px;
            margin-bottom: 13px;
        }
        .popup__body {
            padding: 6% 9%;
            background: #f9f9f9;
        }
        .popup__form {
            padding: 12% 0;
        }
        .popup__input-wrapper {
            padding: 0 3%;
        }
        .popup__form input {
            width: 100%;
            border: none;
            font-size: 14px;
            margin-bottom: 15px;
            padding: 10px;
            border-radius: 5px;
        }
        .popup__form input:focus {
            outline: none;
        }
        .popup__form button{
            cursor: pointer;
            border: none;
            width: 100%;
        }

        .black_banner_wrapper {
            align-items: center;
        }

        .black_banner_wrapper .black_banner_text {
            width:70%;
        }

        .black_banner_wrapper a {
            padding: 0 15px;
        }

        .tablink {
            cursor: pointer;
        }

        #endpoint {
            width: fit-content;
            color: #00D7FF;
            text-decoration: underline dotted;
            appearance: auto;
        }

        .pb_transport_distance {
            justify-content: space-around;
        }

        .pb_transport_item {
            padding: 40px 0;
            width: 20%;
        }

        .to_map {
            margin: 0 auto 60px;
            display: block;
            text-align: center;
            font-size: 20px;
            text-decoration: underline;
            margin-top: -30px;
        }

        .pd_card_wrapper {
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 40px;
        }

        .pd_explore, .pd_card {
            margin-bottom: 100px;
        }

        .pst_row_btn {
            justify-content: flex-end;
        }

        .pst_row {
            padding: 23px 20px;
        }

        .pb_sp_item_image {
            width: 100%;
            height: 300px;
            overflow: hidden;
        }

        .pb_sp_item_image img, .owl-carousel .owl-item img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }

        .pb_nap_slider_left .pb_nap_slider_image {
            height: 500px;
        }

        .pb_nap_slider_right .pb_nap_slider_image {
            height: 500px;
        }

        .pb_nap_slider_desc {
            padding: 50px;
        }

        .pb_nap_slider_subtitle  {
            margin: 10px 0;
        }

        .pd_explore_image_1 {
            height: 65%;
        }

        .pd_explore_image_2, .pd_explore_image_3 {
            height: 35%;
        }

    </style>

    <script>

        let business_logic = {
            src_constants: {
                fhogs: {
                    'NSW': {
                        fhog: 10000,
                        fhog_max_pp: 550000,
                    },
                    'VIC': {
                        fhog: 10000,
                        fhog_max_pp: 750000,
                    },
                    'QLD': {
                        fhog: 20000,
                        fhog_max_pp: 750000,
                    },
                    'ACT': {
                        fhog: 7000,
                        fhog_max_pp: 750000,
                    },
                    'WA': {
                        fhog: 10000,
                        fhog_max_pp: 750000,
                    },
                    'SA': {
                        fhog: 15000,
                        fhog_max_pp: 570000,
                    },
                    'TAS': {
                        fhog: 20000,
                        fhog_max_pp: 99999999,
                    },
                    'NT': {
                        fhog: 26000,
                        fhog_max_pp: 99999999,
                    },
                },
                tax_rates: [
                    {
                        from: 0,
                        to: 18200,
                        upfront: 0,
                        persent: 0.0,
                    },
                    {
                        from: 18201,
                        to: 37000,
                        upfront: 0,
                        persent: 0.19,
                    },
                    {
                        from: 37001,
                        to: 87000,
                        upfront: 3572,
                        persent: 0.325,
                    },
                    {
                        from: 87001,
                        to: 180000,
                        upfront: 19822,
                        persent: 0.37,
                    },
                    {
                        from: 180001,
                        to: 9999999999999,
                        upfront: 54232,
                        persent: 0.45,
                    },
                ],
                hem_income_ranges: {
                    3: {from: 0, to: 23603},
                    4: {from: 23603, to: 29504},
                    5: {from: 29504, to: 35405},
                    6: {from: 35405, to: 41306},
                    7: {from: 41306, to: 47207},
                    8: {from: 47207, to: 53108},
                    9: {from: 53108, to: 59009},
                    10: {from: 59009, to: 70810},
                    11: {from: 70810, to: 82612},
                    12: {from: 82612, to: 94414},
                    13: {from: 94414, to: 106215},
                    14: {from: 106215, to: 118017},
                    15: {from: 118017, to: 141620},
                    16: {from: 141620, to: 165224},
                    17: {from: 165224, to: 188827},
                    18: {from: 188827, to: 236034},
                    19: {from: 236034, to: 9999999999},
                },
                hem_values: {
                    3: {
                        3: 1692,
                        4: 1692,
                        5: 1692,
                        6: 1692,
                        7: 1765,
                        8: 1941,
                        9: 1993,
                        10: 2045,
                        11: 2175,
                        12: 2304,
                        13: 2390,
                        14: 2475,
                        15: 2503,
                        16: 2531,
                        17: 2564,
                        18: 2656,
                        19: 2856,
                    },
                    6: {
                        3: 1908,
                        4: 1908,
                        5: 1908,
                        6: 1908,
                        7: 1981,
                        8: 2157,
                        9: 2209,
                        10: 2261,
                        11: 2391,
                        12: 2520,
                        13: 2606,
                        14: 2691,
                        15: 2719,
                        16: 2747,
                        17: 2780,
                        18: 2872,
                        19: 3072,
                    },
                    21: {
                        3: 2365,
                        4: 2365,
                        5: 2365,
                        6: 2365,
                        7: 2438,
                        8: 2614,
                        9: 2666,
                        10: 2718,
                        11: 2848,
                        12: 2977,
                        13: 3063,
                        14: 3148,
                        15: 3176,
                        16: 3204,
                        17: 3237,
                        18: 3329,
                        19: 3529,
                    },
                    33: {
                        3: 2642,
                        4: 2642,
                        5: 2642,
                        6: 2642,
                        7: 2715,
                        8: 2891,
                        9: 2943,
                        10: 2995,
                        11: 3125,
                        12: 3254,
                        13: 3340,
                        14: 3425,
                        15: 3453,
                        16: 3481,
                        17: 3514,
                        18: 3606,
                        19: 3806,
                    },
                    5: {
                        3: 1127,
                        4: 1193,
                        5: 1171,
                        6: 1202,
                        7: 1307,
                        8: 1381,
                        9: 1503,
                        10: 1486,
                        11: 1656,
                        12: 1814,
                        13: 1849,
                        14: 1918,
                        15: 2141,
                        16: 2233,
                        17: 2360,
                        18: 2482,
                        19: 3229,
                    },
                    10: {
                        3: 1398,
                        4: 1464,
                        5: 1442,
                        6: 1473,
                        7: 1578,
                        8: 1652,
                        9: 1779,
                        10: 1757,
                        11: 1932,
                        12: 2089,
                        13: 2124,
                        14: 2194,
                        15: 2417,
                        16: 2508,
                        17: 2635,
                        18: 2757,
                        19: 3509,
                    },
                    35: {
                        3: 1726,
                        4: 1792,
                        5: 1770,
                        6: 1800,
                        7: 1905,
                        8: 1975,
                        9: 2102,
                        10: 2080,
                        11: 2255,
                        12: 2412,
                        13: 2447,
                        14: 2513,
                        15: 2736,
                        16: 2827,
                        17: 2954,
                        18: 3076,
                        19: 3819,
                    },
                    55: {
                        3: 1875,
                        4: 1940,
                        5: 1918,
                        6: 1945,
                        7: 2050,
                        8: 2124,
                        9: 2251,
                        10: 2229,
                        11: 2399,
                        12: 2556,
                        13: 2591,
                        14: 2661,
                        15: 2884,
                        16: 2976,
                        17: 3103,
                        18: 3225,
                        19: 3968,
                    },
                },
                stamps: {
                    'NT': {
                        fhog: 26000,
                        duty_rates: [
                            { from: 0, to: 100000, upfront: 0, threshold: 0, percent: 0.0183 },
                            { from: 100001, to: 200000, upfront: 0, threshold: 0, percent: 0.0216 },
                            { from: 200001, to: 300000, upfront: 0, threshold: 0, percent: 0.0281 },
                            { from: 300001, to: 400000, upfront: 0, threshold: 0, percent: 0.0347 },
                            { from: 400001, to: 525000, upfront: 0, threshold: 0, percent: 0.0413 },
                            { from: 525001, to: 2999999, upfront: 0, threshold: 0, percent: 0.0495 },
                            { from: 3000000, to: 4999999, upfront: 0, threshold: 0, percent: 0.0575 },
                            { from: 5000000, to: 999999999, upfront: 0, threshold: 0, percent: 0.0425 },
                        ],
                        // fho_duty_rates not used
                    },
                    'TAS': {
                        fhog: 20000,
                        duty_rates: [
                            { from: 0, to: 75000, upfront: 435, threshold: 25000, percent: 0.0225 },
                            { from: 75001, to: 200000, upfront: 1560, threshold: 75000, percent: 0.0350 },
                            { from: 200001, to: 375000, upfront: 5935, threshold: 200000, percent: 0.0400 },
                            { from: 375001, to: 725000, upfront: 12935, threshold: 375000, percent: 0.0425 },
                            { from: 725001, to: 999999999, upfront: 27810, threshold: 725000, percent: 0.0450 },
                        ],
                        // fho_duty_rates not used
                    },
                    'NSW': {
                        fhog: 10000,
                        max_pp_fhog: 550000,
                        fhog_workings_enable: true,
                        fhog_workings_by_5_persent: true,
                        duty_rates: [
                            { from: 0, to: 14000, upfront: 0, threshold: 0, percent: 0.0125 },
                            { from: 14001, to: 30000, upfront: 175, threshold: 14000, percent: 0.015 },
                            { from: 30001, to: 80000, upfront: 415, threshold: 30000, percent: 0.0175 },
                            { from: 80001, to: 300000, upfront: 1290, threshold: 80000, percent: 0.035 },
                            { from: 300001, to: 1000000, upfront: 8890, threshold: 300000, percent: 0.045 },
                            { from: 1000001, to: 3000000, upfront: 40490, threshold: 1000000, percent: 0.055 },
                            { from: 3000001, to: 999999999, upfront: 150490, threshold: 3000000, percent: 0.07 },
                        ],
                        fho_duty_rates: [
                            { from: 0, to: 650000, upfront: 0, threshold: 0, percent: 0 },
                            { from: 650000, to: 1000000, upfront: 8890, threshold: 300000, percent: 0.045 },
                            { from: 1000001, to: 3000000, upfront: 40490, threshold: 1000000, percent: 0.055 },
                            { from: 3000001, to: 999999999, upfront: 150490, threshold: 3000000, percent: 0.07 },
                        ],
                    },
                    'VIC': {
                        fhog: 10000,
                        max_pp_fhog: 750000,
                        fhog_workings_enable: true,
                        fhog_workings_by_5_persent: false,
                        use_total_for_costs_at_max: true,
                        duty_rates: [
                            { from: 0, to: 25000, upfront: 0, threshold: 0, percent: 0.014 },
                            { from: 25001, to: 130000, upfront: 350, threshold: 25000, percent: 0.024 },
                            { from: 130001, to: 960000, upfront: 2870, threshold: 130000, percent: 0.06 },
                            { from: 960001, to: 999999999, upfront: 0, threshold: 0, percent: 0.055 },
                        ],
                        fho_duty_rates: [
                            { from: 750000, to: 960000, upfront: 2870, threshold: 130000, percent: 0.06 },
                            { from: 960001, to: 999999999, upfront: 0, threshold: 0, percent: 0.055 },
                        ],
                        stamp_calc_fho_exceptions: {
                            600000: 0,
                            610000: 2111,
                            620000: 4302,
                            630000: 6574,
                            640000: 8925,
                            650000: 11356,
                            660000: 13868,
                            670000: 16500,
                            680000: 19200,
                            690000: 21800,
                            700000: 24700,
                            710000: 27700,
                            720000: 30600,
                            730000: 33700,
                            740000: 36800,
                            750000: 40100,
                        },
                    },
                    'QLD': {
                        fhog: 20000,
                        max_pp_fhog: 750000,
                        fhog_workings_enable: true,
                        fhog_workings_by_5_persent: false,
                        use_total_for_costs_at_max: true,
                        duty_rates: [
                            { from: 0, to: 350000, upfront: 0, threshold: 0, percent: 0.01 },
                            { from: 350001, to: 540000, upfront: 3500, threshold: 350000, percent: 0.035 },
                            { from: 540001, to: 1000000, upfront: 10150, threshold: 540000, percent: 0.045 },
                            { from: 1000001, to: 999999999, upfront: 30850, threshold: 1000000, percent: 0.0575 },
                        ],
                        // fho_duty_rates not used
                        fhog_concession: [
                            { from: 0, to: 504999.99, concession: 8750 },
                            { from: 505000, to: 509999.99, concession: 7875 },
                            { from: 510000, to: 514999.99, concession: 7000 },
                            { from: 515000, to: 519999.99, concession: 6125 },
                            { from: 520000, to: 524999.99, concession: 5250 },
                            { from: 525000, to: 529999.99, concession: 4375 },
                            { from: 530000, to: 534999.99, concession: 3500 },
                            { from: 535000, to: 539999.99, concession: 2625 },
                            { from: 540000, to: 544999.99, concession: 1750 },
                            { from: 545000, to: 549999.99, concession: 875 },
                        ],
                    },
                    'ACT': {
                        fhog: 7000,
                        max_pp_fhog: 750000,
                        fhog_workings_enable: true,
                        fhog_workings_by_5_persent: false,
                        duty_rates: [
                            { from: 0, to: 200000, upfront: 0, threshold: 0, percent: 0.0148 },
                            { from: 200001, to: 300000, upfront: 2960, threshold: 200000, percent: 0.025 },
                            { from: 300001, to: 500000, upfront: 5460, threshold: 300000, percent: 0.04 },
                            { from: 500001, to: 750000, upfront: 13460, threshold: 500000, percent: 0.05 },
                            { from: 750001, to: 1000000, upfront: 25960, threshold: 750000, percent: 0.065 },
                            { from: 1000001, to: 1454999, upfront: 42210, threshold: 1000000, percent: 0.07 },
                            { from: 1455000, to: 999999999, upfront: 0, threshold: 0, percent: 0.0509 },
                        ],
                        fho_duty_rates: [
                            { from: 0, to: 470000, upfront: 0, threshold: 0, percent: 0 },
                            { from: 470001, to: 607000, upfront: 0, threshold: 470000, percent: 0.135 },
                            { from: 607001, to: 750000, upfront: 13460, threshold: 500000, percent: 0.05 },
                            { from: 750001, to: 1000000, upfront: 25960, threshold: 750000, percent: 0.065 },
                            { from: 1000001, to: 1454999, upfront: 42210, threshold: 1000000, percent: 0.07 },
                            { from: 1455000, to: 999999999, upfront: 0, threshold: 0, percent: 0.0509 },
                        ],
                    },
                    'WA': {
                        fhog: 10000,
                        max_pp_fhog: 750000,
                        fhog_workings_enable: true,
                        fhog_workings_by_5_persent: false,
                        duty_rates: [
                            { from: 0, to: 80000, upfront: 0, threshold: 0, percent: 0.019 },
                            { from: 80001, to: 100000, upfront: 1520, threshold: 80000, percent: 0.0285 },
                            { from: 100001, to: 250000, upfront: 2090, threshold: 100000, percent: 0.038 },
                            { from: 250001, to: 500000, upfront: 7790, threshold: 250000, percent: 0.0475 },
                            { from: 500001, to: 999999999, upfront: 19665, threshold: 500000, percent: 0.0515 },
                        ],
                        fho_duty_rates: [
                            { from: 0, to: 430000, upfront: 0, threshold: 0, percent: 0 },
                            { from: 430001, to: 530000, upfront: 0, threshold: 430000, percent: 0.1919 },
                            { from: 530001, to: 999999999, upfront: 19665, threshold: 500000, percent: 0.0515 },
                        ],
                    },
                    'SA': {
                        fhog: 15000,
                        max_pp_fhog: 570000,
                        fhog_workings_enable: true,
                        fhog_workings_by_5_persent: false,
                        duty_rates: [
                            { from: 0, to: 50000, upfront: 480, threshold: 30000, percent: 0.03 },
                            { from: 50001, to: 100000, upfront: 1080, threshold: 50000, percent: 0.035 },
                            { from: 100001, to: 200000, upfront: 2830, threshold: 100000, percent: 0.04 },
                            { from: 200001, to: 250000, upfront: 6830, threshold: 200000, percent: 0.0425 },
                            { from: 250001, to: 300000, upfront: 8955, threshold: 250000, percent: 0.0475 },
                            { from: 300001, to: 500000, upfront: 11330, threshold: 300000, percent: 0.05 },
                            { from: 500001, to: 9999999999, upfront: 21330, threshold: 500000, percent: 0.055 },
                        ],
                        // fho_duty_rates not used
                    },
                }
            },
            inputs: {
                income: 700000, // integer
                place: 'NT', // string
                fho: false, // boolean
                deposit: 50000, // integer
                situation: 5, // couple - 3 | single - 5
                dependents: 1, // 0 - 1 | 1 - 2 | 2 - 7 | 3+ - 11
            },
            already_calculated: {
                stamps_calcs: {},
                current_stamp_id: null,
            },
            outputs: {
                max_borrowing_capacity: null,
                can_purchase: null,
            },
            get_fho_master_deposit: function(stamp_data, deposit) {
                if (!stamp_data.fhog_workings_enable) return deposit + stamp_data.fhog;

                let costs_at_max;
                if (stamp_data.fhog_workings_by_5_persent) costs_at_max = stamp_data.max_pp_fhog * 0.05;
                else {
                    let stamp_calcs = this.get_stamp_calcs(stamp_data.max_pp_fhog, stamp_data, true);
                    costs_at_max = stamp_data.use_total_for_costs_at_max ? stamp_calcs.total : stamp_calcs.stamp;
                }

                // console.log('costs_at_max: ', costs_at_max);

                let outcomes = [];
                outcomes.push(deposit);

                let outcome_by_fhog = deposit + stamp_data.fhog;
                let outcome_by_costs_at_max = costs_at_max;

                if (deposit >= 0 && deposit <= (costs_at_max - stamp_data.fhog))
                    outcomes.push(outcome_by_fhog);
                if (deposit >= (costs_at_max - stamp_data.fhog + 1) && deposit <= costs_at_max)
                    outcomes.push(outcome_by_costs_at_max);

                // console.log('outcomes: ', outcomes);

                return outcomes.sort((a, b) => b-a)[0];
            },
            get_stamps_purchase_prices: function() {
                if(this.already_calculated.stamps_purchase_prices) return this.already_calculated.stamps_purchase_prices;

                let purchase_prices = [];
                for (var i = 0; i <= 670; i++) purchase_prices.push(i * 10000);
                for (var i = 68; i <= 600; i++) purchase_prices.push(i * 100000);
                for (var i = 61; i <= 115; i++) purchase_prices.push(i * 1000000);
                for (var i = 120; i <= 405; i = i + 5) purchase_prices.push(i * 1000000);

                this.already_calculated.stamps_purchase_prices = purchase_prices;
                return purchase_prices;
            },
            get_current_stamp_calc_data: function() {
                return this.get_stamps()[this.get_current_stamp_id()];
            },
            get_current_stamp_id: function() {
                if(this.already_calculated.current_stamp_id) return this.already_calculated.current_stamp_id;
                let stamps_data = this.get_stamps();
                let current_stamp_id = null;
                let master_deposit = this.inputs.deposit;
                if (this.inputs.fho) {
                    let stamp_data = this.src_constants.stamps[this.inputs.place];
                    master_deposit = this.get_fho_master_deposit(stamp_data, this.inputs.deposit);
                }

                stamps_data.forEach(function(stamp_data, i){
                    if (!stamps_data[i + 1]) return;
                    if (master_deposit >= stamp_data.total && master_deposit < stamps_data[i + 1].total)
                        current_stamp_id = i;
                });
                this.already_calculated.current_stamp_id = current_stamp_id;
                return current_stamp_id;
            },
            get_stamp_calcs: function(purchase_price, stamp_data, isFHO = false) {
                let duty_rate_key = null;
                let duty_rates = stamp_data.duty_rates;
                if (isFHO && stamp_data.fho_duty_rates) duty_rates = stamp_data.fho_duty_rates;

                duty_rates.forEach(function(duty_rate, i){
                    if (purchase_price >= duty_rate.from && purchase_price <= duty_rate.to) duty_rate_key = i;
                });

                let duty_rate = { from: 0, to: 0, upfront: 0, threshold: 0, percent: 0 };
                if (duty_rate_key !== null) duty_rate = duty_rates[duty_rate_key];

                let stamp = (((purchase_price - duty_rate.threshold) * duty_rate.percent) + duty_rate.upfront);

                // console.log('duty_rate_key: ', duty_rate_key);
                // console.log('duty_rate: ', duty_rate);
                // console.log('purchase_price: ', purchase_price);
                // console.log('stamp: ', stamp);

                if (isFHO && stamp_data.fhog_concession && purchase_price <= stamp_data.fhog_concession[stamp_data.fhog_concession.length - 1].to) {

                    let concession_id = 1;
                    stamp_data.fhog_concession.forEach(function(concession_range, i){
                        if (i == 0) return
                        if(purchase_price >= concession_range.from && purchase_price <= concession_range.to)
                            concession_id = i;
                    });

                    // console.log('concession: ', stamp_data.fhog_concession[concession_id]);
                    // console.log('original stamp: ', stamp);
                    stamp = Math.max(stamp - stamp_data.fhog_concession[concession_id].concession, 0);
                    // console.log('stamp: ', stamp);
                }

                // hand exceptions for stamp calculation
                if (purchase_price >= 600000 && purchase_price <= 750000 && isFHO && stamp_data.stamp_calc_fho_exceptions) {
                    stamp = stamp_data.stamp_calc_fho_exceptions[purchase_price];
                }

                return {
                    stamp: stamp,
                    total: stamp + (purchase_price * 0.08),
                    purchase_price: purchase_price,
                };
            },
            get_stamps: function(place = this.inputs.place, fho = this.inputs.fho) {
                if(this.already_calculated.stamps_calcs[place]) return this.already_calculated.stamps_calcs[place];
                let stamp_data = this.src_constants.stamps[place];
                let stamps_calcs_data = [];
                this.get_stamps_purchase_prices().forEach(function(purchase_price){
                    stamps_calcs_data.push(this.get_stamp_calcs(purchase_price, stamp_data, fho));
                }, this);
                this.already_calculated.stamps_calcs[place] = stamps_calcs_data;
                return stamps_calcs_data;
            },
            get_hem: function() {
                return this.src_constants.hem_values[this.get_hem_index()][this.get_hem_income_index()];
            },
            get_hem_index: function() {
                return this.inputs.situation * this.inputs.dependents;
            },
            get_hem_income_index: function() {
                let income = this.inputs.income;
                let hem_income_index;
                for (const index in this.src_constants.hem_income_ranges) {
                    let range = this.src_constants.hem_income_ranges[index];
                    if (income >= range.from && income <= range.to) hem_income_index = index;
                }
                return hem_income_index;
            },
            get_total_tax: function() {
                let tax_rate_key;
                let income = this.inputs.income;
                this.src_constants.tax_rates.forEach(function(tax_rate_constants, i){
                    if (income >= tax_rate_constants.from && income <= tax_rate_constants.to) tax_rate_key = i;
                });

                if(tax_rate_key == 0) return 0;

                let tax_rate_constants = this.src_constants.tax_rates[tax_rate_key];
                let prev_tax_rate_constants = this.src_constants.tax_rates[tax_rate_key - 1];

                return ((income - prev_tax_rate_constants.to) * tax_rate_constants.persent) + tax_rate_constants.upfront;
            },
            get_net_income_pm_without_hem: function() {
                return ((this.get_net_income() / 12) - this.get_hem());
            },
            get_max_bc: function() {
                let income = this.get_net_income_pm_without_hem() + 0.01;
                let annual_interest_rate = 0.0575;
                let number_of_payments_per_year = 12;
                let total_number_of_payments = 360;
                let airpy = annual_interest_rate / number_of_payments_per_year;
                let x = Math.pow(1 + airpy, total_number_of_payments);
                let xx = (airpy * x) / (x - 1);
                let loan = Math.floor((income / xx) / 10000) * 10000;
                return Math.max(loan, 0);
            },
            get_max_bc_95_pp: function() {
                return this.get_max_bc() / 0.95;
            },
            get_net_income: function() {
                return this.inputs.income - this.get_total_tax();
            },
            get_fhog_output_bc: function(place = this.inputs.place) {
                if (!this.inputs.fho) return 0;

                let fhog_data = this.src_constants.fhogs[place];
                let max_bc_pp = this.inputs.income > 14000000 ? 0 : this.get_max_bc_95_pp();

                return (max_bc_pp + fhog_data.fhog <= fhog_data.fhog_max_pp) ? fhog_data.fhog : 0;
            },
            // get_fhog_output_sd: function() {
            // },
            get_result_property_worth: function() {
                let max_bc_pp = this.inputs.income > 14000000 ? 0 : this.get_max_bc_95_pp();
                let max_sd_pp = this.get_current_stamp_calc_data().purchase_price;

                let fhog_hernya = this.get_fhog_output_bc(this.inputs.place); // tmp

                let bc_vs_sd = Math.min(max_bc_pp, max_sd_pp);
                let bc_95 = (max_bc_pp == bc_vs_sd) ? bc_vs_sd * 0.95 : 0;
                let bc_95_result = (max_bc_pp == bc_vs_sd) ? (bc_95 + this.inputs.deposit + fhog_hernya) : 0;

                let bc_less_sd = (max_bc_pp < max_sd_pp) ? max_bc_pp : 0;
                let bc_more_sd = (max_bc_pp > max_sd_pp) ? max_sd_pp : 0;
                let bc_less_bc_95 = (max_bc_pp < bc_95_result)? bc_95_result : 0;

                // let bc_95_result = (max_bc_pp == bc_vs_sd) ? bc_95 + deposit + fhog_hernya : 0;

                let property_worth = Math.max(bc_less_sd, bc_more_sd, bc_less_bc_95);

                return new Intl.NumberFormat().format(Math.round(property_worth));
            },
            get_result_maximum_borrowing_capacity: function() {
                let max_bc = this.get_max_bc_95_pp();
                max_bc = Math.min(max_bc, 5000000);
                return new Intl.NumberFormat().format(Math.round(max_bc));
            },
        };

        let validation_messages = {
            required: 'Please fill in the required field.',
            required_option: 'Please choose an option.',
            only_numbers: 'Only numbers are allowed.',
            min: 'Your %field_name% is too low to get a loan at this time.',
        };

        let validation_functions = {
            required: function(el) {
                if (!el) return false;
                if (!el.value) return false;
                return true;
            },
            required_option: function(el) {
                return this.required(el);
            },
            only_numbers: function(el) {
                return /^\d*[\.\,]?\d*$/.test(el.value);
            },
            min: function(el) {
                return parseInt(el.value.replace(/[, ]/, '')) >= parseInt(el.dataset.minValue);
            },
        };

        let fields_data = {
            income: {
                query_selector: 'input',
                validation_rules: ['required', 'only_numbers', 'min'],
            },
            deposit: {
                query_selector: 'input',
                validation_rules: ['required', 'only_numbers', 'min'],
            },
            first_owner: {
                query_selector: `input[name=first_owner]:checked`,
                validation_rules: ['required_option'],
            },
            place: {
                query_selector: 'select',
                validation_rules: ['required_option'],
            },
            marital_status: {
                query_selector: `input[name=marital_status]:checked`,
                validation_rules: ['required_option'],
            },
            dependents: {
                query_selector: 'select',
                validation_rules: ['required_option'],
            },
        };

        function recalculate() {
            document.querySelector('.pb_form').style.display = 'block'
            document.querySelector('.answer_new').style.display = 'none'
        }

        function popupShow() {
            document.querySelector('.dark_bg').style.display = 'block'
        }

        function do_caculate_borrowing_capacity() {
            // console.log('do_caculate_borrowing_capacity run');

            // Validation here
            let validation_success = true;

            for (const field_name in fields_data) {
                let field = fields_data[field_name];
                field.wrapper_el = document.querySelector(`*[data-field-name="${field_name}"] .input-wrapper`);
                field.input_el = field.wrapper_el.querySelector(field.query_selector);

                for (let rule_name of field.validation_rules) {
                    let is_field_valid = validation_functions[rule_name](field.input_el);
                    // console.log(`field '${field_name}' validation with rule '${rule_name}': `, is_field_valid);

                    field.wrapper_el.classList.toggle('validation-failed', !is_field_valid);
                    let validation_message = validation_messages[rule_name].replace('%field_name%', field_name);
                    field.wrapper_el.dataset.validationMsg = !is_field_valid ? validation_message : '';

                    if (!is_field_valid) {
                        validation_success = false;
                        break;
                    }
                }
            }

            // console.log('validation_success: ', validation_success);
            if (!validation_success) {
                dataLayer.push({'event': 'mortgage_calc_form_not_submit'})
                return;
            }

            dataLayer.push({'event': 'mortgage_calc_form_submit'})
            // Change styles
// 		let action_button = document.querySelector('.calculator-wrapper .form-wrapper .form .calculate-action');
// 		action_button.classList.add('already-pressed');
// 		action_button.innerHTML = 'Recalculate';

            document.querySelector('.pb_form').style.display = 'none'
            document.querySelector('.answer_new').style.display = 'flex'

            // Here will be main formulas calculatings
            // console.log('calculate process started');

            // reset cache;
            business_logic.already_calculated = {
                stamps_calcs: {},
                current_stamp_id: null,
            };

            business_logic.inputs = {
                income: parseInt(document.querySelector(`*[data-field-name="income"] input`).value.replace(/[, ]/, '')),
                place: document.querySelector(`*[data-field-name="place"] select`).value,
                fho: document.querySelector(`*[data-field-name="first_owner"] input:checked`).value === '1',
                deposit: parseInt(document.querySelector(`*[data-field-name="deposit"] input`).value.replace(/[, ]/, '')),
                situation: parseInt(document.querySelector(`*[data-field-name="marital_status"] input:checked`).value),
                dependents: parseInt(document.querySelector(`*[data-field-name="dependents"] select`).value),
            };

            // console.log('business_logic inputs: ', business_logic.inputs);

            let results = {
                borrow: '$' + business_logic.get_result_maximum_borrowing_capacity(),
                buy: '$' + business_logic.get_result_property_worth(),
            };

            // console.log('CALCULATIONS DONE!');
            // console.log('result maximum borrowing capacity: ', results.borrow);
            // console.log('result property worth: ', results.buy);

            document.querySelector('.answer_new .result>:first-child span').innerText = `up to ${results.borrow}`
            document.querySelector('.answer_new .result>:nth-child(2) b').innerText = `up to ${results.buy}`

            document.querySelector('.answer_new .income_r').innerText = `$ ${document.querySelector(`*[data-field-name="income"] input`).value}`
            document.querySelector('.answer_new .deposit_a').innerText = `$ ${document.querySelector(`*[data-field-name="deposit"] input`).value}`
            document.querySelector('.answer_new .fho_a').innerText = (document.querySelector(`*[data-field-name="first_owner"] input:checked`).value === '1')? 'Yes' : 'No'
            document.querySelector('.answer_new .place_a').innerText = document.querySelector(`*[data-field-name="place"] select`).value
            document.querySelector('.answer_new .situation_a').innerText = (document.querySelector(`*[data-field-name="marital_status"] input:checked`).value === '5')? 'Single' : 'Couple'
            switch (document.querySelector(`*[data-field-name="dependents"] select`).value) {
                case '1':
                    document.querySelector('.answer_new .dependents_a').innerText = '0'
                    break
                case '2':
                    document.querySelector('.answer_new .dependents_a').innerText = '1'
                    break
                case '7':
                    document.querySelector('.answer_new .dependents_a').innerText = '2'
                    break
                default:
                    document.querySelector('.answer_new .dependents_a').innerText = '3+'
            }


            // Here show results
            // document.querySelector('.calculator-wrapper .result-wrapper').classList.add('result-ready');
            document.querySelectorAll('.calculator-wrapper *[data-result-field]').forEach(function(el){
                el.innerHTML = results[el.dataset.resultField];
            });

            keradan_set_cookie('morgage_calculation_already_made', '1');
            setTimeout(() => main_form_update_after_mortgage_calculation(), 1);

            //setTimeout(() => document.querySelector('#content-area').scrollIntoView({behavior: 'smooth'}), 1);
        }

        function call_popup_after_calculation() {
            document.querySelector("#wpcf7-f11832-o12 .rc_background .rc_title").style.display = 'none';
            document.querySelector("#wpcf7-f11832-o12 .rc_background p").style.marginTop = '70px';
            document.querySelector("#wpcf7-f11832-o12 .rc_background p").style.marginBottom = '40px';
            let money = document.querySelector('.calculator-wrapper span[data-result-field="borrow"]').innerHTML;
            document.querySelector("#wpcf7-f11832-o12 .rc_padding div.h4").innerHTML = `Leave your details below and we’ll send you a plan for securing a loan of up to <span style="font-weight: 700;">${money}</span> and getting the best deal for your new home.`;
            document.querySelector("#wpcf7-f11832-o12 .rc_padding div.h4").style.fontSize = '14px';
            document.querySelector("#wpcf7-f11832-o12 .rc_padding div.h4").style.fontWeight = '400';
            document.querySelector("#wpcf7-f11832-o12 .rc_padding ul").style.display = 'none';

            setTimeout(function(){
                let selector = '.header_button .btn_yellow.rc_open, .mobilehead_button .btn_yellow.rc_open';
                document.querySelectorAll(selector)[0].click();
            }, 1);
        }
    </script>
    <div class="pd_explore">
        <div class="container">
            <div class="pd_explore_wrapper">
                <div class="pd_explore_desc">
                    <div class="pd_explore_title small_title black">
                        <span class="orange_color district_name"></span>
                    </div>
                    <div class="pd_explore_text">
                        <p></p>
                    </div>
                </div>
                <div class="pd_explore_image">

                </div>
            </div>
        </div>
    </div>
    <div class="pd_card">
        <div class="container_small">
            <div class="pd_card_wrapper">
                <div class="pd_card_item">
                    <div class="pd_card_image">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/pd_yellow_block.svg" alt="" class="pd_card_image_bg">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/price.svg" alt="" class="pd_card_image_icon">
                    </div>
                    <div class="pd_card_heading"></div>
                    <div class="pd_card_text">median home price</div>
                </div>

                <div class="pd_card_item">
                    <div class="pd_card_image">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/pd_yellow_block.svg" alt="" class="pd_card_image_bg">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/roi.svg" alt="" class="pd_card_image_icon">
                    </div>
                    <div class="pd_card_heading"></div>
                    <div class="pd_card_text">Median Price Change (1 yr)</div>
                </div>

                <div class="pd_card_item">
                    <div class="pd_card_image">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/pd_yellow_block.svg" alt="" class="pd_card_image_bg">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/roi.svg" alt="" class="pd_card_image_icon">
                    </div>
                    <div class="pd_card_heading"></div>
                    <div class="pd_card_text">Median Gross Yield</div>
                </div>

                <div class="pd_card_item">
                    <div class="pd_card_image">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/pd_yellow_block.svg" alt="" class="pd_card_image_bg">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/cafes.svg" alt="" class="pd_card_image_icon">
                    </div>
                    <div class="pd_card_heading"></div>
                    <div class="pd_card_text">cafes in the area</div>
                </div>
            </div>
        </div>
    </div>

    <a href="/map-page/" class="to_map">Back to the interactive map</a>

    <div class="pd_lifestyle">
        <div class="container_small">
            <div class="small_title black">The <span class="district_name"></span> <span class="orange_color">Lifestyle</span></div>
            <div class="pd_lifestyle_text">
                <p></p>
            </div>
        </div>
    </div>
    <div class="pd_gallery">
        <div class="container">
            <div class="pd_gallery_wrapper">

            </div>
        </div>
    </div>
    <div class="black_banner pd_black_banner">
        <div class="container">
            <div class="black_banner_wrapper pd_black_banner_wrapper">
                <div class="black_banner_text">Calculate your borrowing capacity to buy property in this area</div>
                <div class="black_banner_btn">
                    <a href="#pb_calc" title="" class="btn_yellow">Calculate My Borrowing Capacity</a>
                </div>
            </div>
        </div>
    </div>
    <div class="pd_school">
        <div class="container_small">
            <div class="small_title black">Local <span class="orange_color">Schools</span> in <span class="district_name"></span></div>
            <div class="pd_school_subtitle">View the catchment for each school to find out more.</div>
            <div class="pd_school_tab">
                <div class="tab">
                    <button class="tablink active" data-type="all">All</button>
                    <button class="tablink" data-type="primary">Primary</button>
                    <button class="tablink" data-type="secondary">Secondary</button>
                    <button class="tablink" data-type="private">Private</button>
                </div>
                <div class="tabcontent">

                </div>
            </div>
        </div>
    </div>
    <div class="pb_nap">
        <div class="container">
            <div class="small_title black"><span class="orange_color">Nature and Parks</span> at <span class="district_name"></span></div>
            <div class="pb_nap_slider pb_nap_slider_left pb_nap_slider_top owl-carousel">

            </div>
            <div class="pb_nap_slider pb_nap_slider_right pb_nap_slider_middle owl-carousel">

            </div>
        </div>
    </div>
    <div class="pb_transport">
        <div class="container">
            <div class="small_title black"><span class="orange_color">Transport</span> at <span class="district_name"></span></div>
            <div class="pb_transport_wrapper">
                <div class="pb_transport_choose">Distance to
                    <label><select name="endpoint" id="endpoint">
                        </select></label>
                </div>
                <div class="pb_transport_distance">
                    <div class="pb_transport_item">
                        <div class="pb_transport_image">
                            <img src="<?php echo get_template_directory_uri(); ?>/images/bx_bx-car.svg" alt="">
                        </div>
                        <div class="pb_transport_text">2 mins</div>
                    </div>
                    <div class="pb_transport_item">
                        <div class="pb_transport_image">
                            <img src="<?php echo get_template_directory_uri(); ?>/images/uil_metro.svg" alt="">
                        </div>
                        <div class="pb_transport_text">12 mins</div>
                    </div>
                    <div class="pb_transport_item">
                        <div class="pb_transport_image">
                            <img src="<?php echo get_template_directory_uri(); ?>/images/walk 1.svg" alt="">
                        </div>
                        <div class="pb_transport_text">12 mins</div>
                    </div>
                    <div class="pb_transport_item">
                        <div class="pb_transport_image">
                            <img src="<?php echo get_template_directory_uri(); ?>/images/la_bicycle.svg" alt="">
                        </div>
                        <div class="pb_transport_text">4 mins</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="pb_calc" id="pb_calc">
        <div class="container">
            <div class="pb_form_wrapper">
                <div class="small_title black">Calculate my borrowing capacity<br>for buying a property in <span class="orange_color district_name"></span></div>
                <div class="pb_form">
                    <div class="calculator-wrapper">
                        <div class="form-wrapper">
                            <div class="form">
                                <div class="calculator-leftblock">
                                    <div class="input-box" data-field-name="income">
                                        <div class="input-title">What's your annual income?</div>
                                        <div class="input-description">If you're applying with someone else, include their income too. This means all types of income you get in a year: from bonuses, to overtime, to rental income. Use your before tax figure</div>
                                        <div class="input-wrapper money-input">
                                            <input type="text" placeholder="50,000" data-min-value="25000">
                                        </div>
                                    </div>
                                    <div class="input-box" data-field-name="deposit">
                                        <div class="input-title">How much is your deposit?</div>
                                        <div class="input-description">The amount you have saved for a deposit.</div>
                                        <div class="input-wrapper money-input">
                                            <input type="text" class="money-input" placeholder="40,000" data-min-value="30000">
                                        </div>
                                    </div>
                                    <div class="input-box" data-field-name="first_owner">
                                        <div class="input-title">Are you a first home owner?</div>
                                        <div class="input-wrapper radio-input-wrapper">
                                            <label class="radio-input">
                                                <input type="radio" name="first_owner" value="1">
                                                <svg viewBox="0 0 20 20" class="rb"><circle r="7"/><circle r="4"/></svg>
                                                <span>Yes</span>
                                            </label>
                                            <label class="radio-input">
                                                <input type="radio" name="first_owner" value="0">
                                                <svg viewBox="0 0 20 20" class="rb"><circle r="7"/><circle r="4"/></svg>
                                                <span>No</span>
                                            </label>
                                        </div>
                                    </div><!--  -->
                                </div>
                                <div class="calculator-rightblock">
                                    <div class="input-box" data-field-name="place">
                                        <div class="input-title">Where are you buying?</div>
                                        <div class="input-wrapper select">
                                            <select>
                                                <option value="QLD" selected>Queensland (QLD)</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="input-box" data-field-name="marital_status">
                                        <div class="input-title">Current situation</div>
                                        <div class="input-wrapper radio-input-wrapper">
                                            <label class="radio-input">
                                                <input type="radio" name="marital_status" value="5">
                                                <svg viewBox="0 0 20 20" class="rb"><circle r="7"/><circle r="4"/></svg>
                                                <span>Single</span>
                                            </label>
                                            <label class="radio-input">
                                                <input type="radio" name="marital_status" value="3">
                                                <svg viewBox="0 0 20 20" class="rb"><circle r="7"/><circle r="4"/></svg>
                                                <span>Couple</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="input-box" data-field-name="dependents">
                                        <div class="input-title">Do you have any dependents?</div>
                                        <div class="input-wrapper select">
                                            <select>
                                                <option value="" disabled selected>Choose an option</option>
                                                <option value="1">0</option>
                                                <option value="2">1</option>
                                                <option value="7">2</option>
                                                <option value="11">3+</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <button class="calculate-action" onclick="do_caculate_borrowing_capacity()">
                                    Calculate my borrowing capacity
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="answer_new">
                <div class="data">
                    <div>
                        <p>Your annual income<br><span class="income_r">$ 50, 000</span></p>
                        <p>Where are you buying?<br><span class="place_a district_name"></span></p>
                        <p>Your deposit<br><span class="deposit_a">$ 50, 000</span></p>
                        <p>Current situation<br><span class="situation_a">Single</span></p>
                        <p>You are a first home buyer<br><span class="fho_a">Yes</span></p>
                        <p>Do you have any dependents?<br><span class="dependents_a">0</span></p>
                    </div>
                    <button class="recalc" onclick="recalculate()">Recalculate</button>
                </div>
                <div class="result">
                    <p style="
    line-height: 1.1;
">You can get a loan of<br><span>up to $378,947.</span></p>
                    <p>However, considering your available deposit you can buy a <b>$320,000</b> home.</p>
                    <p>(your deposit should cover at least 8% of your home price)</p>
                    <p>Great! What’s next? Discuss these figures with our mortgage broker and find out how to get the best deal.</p>
                    <button class="btn_yellow popup_show" onclick="popupShow()">Secure This Loan</button>
                </div>
            </div>
        </div>
    </div>
    <div class="pb_similar_places">
        <div class="container">
            <div class="small_title black">Suburbs neighboring <span class="district_name"></span></div>
            <div class="pb_sp_subtitle">Love what <span class="district_name"></span> has to offer? Explore suburbs neighboring <span class="district_name"></span> </div>
            <div class="pb_sp_wrapper">

            </div>
        </div>
    </div>

    <a href="/map-page/" class="to_map">Back to the interactive map</a>

    <div class="pb_prize">
        <div class="container">
            <div class="front_popup_prize">
                <div class="small_title black">
                    <span class="orange_color">Our award-winning Mortgage Brokers</span>
                </div>
                <div class="pb_prize_subtitle">will find you the right home loan for your situation</div>
                <div class="front_popup_prize_image flex">
                    <img src="/wp-content/uploads/2019/07/best-mortgage-broker-2019.png" alt="">
                    <img src="/wp-content/uploads/2019/12/2019_001.png" alt="">
                    <img src="/wp-content/uploads/2019/12/2019_002.png" alt="">
                    <img src="/wp-content/uploads/2018/11/finance-broker-of-the-year-2018.png" alt="">
                    <img src="/wp-content/uploads/2018/11/30-under-20.png" alt="">
                    <img src="/wp-content/uploads/2018/11/vow-award-mortgage-broker.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <div class="dark_bg">
        <div class="popup">
            <div class="popup__header">
                <p class="text_bigger">Get a loan on a property <span class="orange_color">in</span> <span class="orange_color district_name"></span></p>
                <p>We  will get back to you within 4 business hours</p>
            </div>
            <div class="popup__body">
                <p>Leave your details below and we’ll send you a plan for securing a loan of up to <strong>$378,947</strong> and getting the best deal for your new home.</p>
                <form class="popup__form" action="">
                    <div class="popup__input-wrapper">
                        <input type="text" placeholder="Name" required>
                        <input type="email" placeholder="E-mail" required>
                        <input type="tel" placeholder="Phone" required>
                    </div>
                    <button class="btn_yellow">Request a Call</button>
                </form>
            </div>
        </div>
    </div>

    <script>

        let district = window.location.search.split('?')[1]

        let districts = {
            'pullenvale': {
                title: 'Pullenvale',
                descr: `Pullenvale is happily nestled into the southern foothills of Mount Elphinstone, about 15 kilometres from the Brisbane CBD.
                    This suburb offers some of Brisbane’s biggest and most exclusive homes which are commonly situated on large acreage`,
                params: ['1,370,000', '22.14', '3.8', '2'],
                lifestyle:
                    `The Pullenvale lifestyle is about enjoying the rural serenity – whether it is farming your own small property or enjoying the bucolic pleasures of horse riding. The Moggill Pony Club is located here, and it’s one of Brisbane’s oldest, established in 1960. The old Pullenvale School (built in 1874) has been converted into an outdoor education centre, allowing Queensland students to experience the abundant flora and fauna of this area (including sugar gliders, powerful owls and deer)
                    Buses regularly run along Moggill Road to the city and are the main public transport option. In keeping with the country atmosphere, there are a few local stores in Pullenvale, but the main shopping village and supermarket is in neighbouring Bellbowrie or Kenmore`,
                schools: [
                    {
                        name: 'Pullenvale State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Pullenvale 4069',
                        filter: ['primary']
                    },
                    {
                        name: 'Brookfield State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Brookfield 4069',
                        filter: ['primary']
                    },
                    {
                        name: 'Jindalee State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Jindalee 4074',
                        filter: ['primary']
                    },
                    {
                        name: 'Moggill State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Moggill 4070',
                        filter: ['primary']
                    },
                    {
                        name: 'Middle Park State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Middle Park 4074',
                        filter: ['primary']
                    },
                    {
                        name: 'Upper Brookfield State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Upper Brookfield 4069',
                        filter: ['primary']
                    },
                    {
                        name: 'Kenmore State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Kenmore 4069',
                        filter: ['primary', 'secondary']
                    },
                    {
                        name: 'Mount Crosby State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Karana Downs 4306',
                        filter: ['primary']
                    },
                    {
                        name: 'Mount Nebo State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Mount Nebo 4520',
                        filter: ['primary']
                    },
                    {
                        name: 'Brisbane Independent School',
                        type: 'Private',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Pinjarra Hills 4069',
                        filter: ['primary', 'private']
                    },
                    {
                        name: 'Good News Lutheran School',
                        type: 'Private',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Middle Park 4074',
                        filter: ['primary', 'private']
                    },
                    {
                        name: 'Kenmore State High School',
                        type: 'Government',
                        age: ' 7-12',
                        edu: 'CoEd',
                        address: 'Kenmore 4069',
                        filter: ['secondary']
                    }
                ],
                parks: [
                    {
                        name: 'Airlie Road Park',
                        address: '150A Airlie Road',
                        descr: '',
                        imgs: ['pullenvale/pullenvale_airlie_road_park.jpg', 'pullenvale/pullenvale_airlie_road_park1.jpg']
                    },
                    {
                        name: 'Grandview Road Park',
                        address: '111 Grandview Road',
                        descr: 'Seating and shared pathway',
                        imgs: ['pullenvale/pullenvale_grandview_park.jpg', 'pullenvale/pullenvale_grandview_park1.jpg']
                    },
                    {
                        name: 'Lancing Street Park',
                        address: '62 Lancing Street',
                        descr: '',
                        imgs: ['pullenvale/pullenvale_lancing_park.jpg', 'pullenvale/pullenvale_lancing_park1`.jpg']
                    },
                    {
                        name: 'Woodward Place',
                        address: '89 Woodward Place',
                        descr: 'This park fronts on to 2 streets, Woodward Place and the main access area Summerland Place',
                        imgs: ['pullenvale/pullenvale_woodward_place.jpg', 'pullenvale/pullenvale_woodward_place1.jpg']
                    },
                    {
                        name: 'Primley Street Park',
                        address: '89 Primley Street',
                        descr: '',
                        imgs: ['pullenvale/pullenvale_woodward_place.jpg', 'pullenvale/pullenvale_primley_street_park1.jpg']
                    },
                    {
                        name: 'Pullenvale Recreation Reserve',
                        address: '43 Pullenvale Road',
                        descr: '',
                        imgs: ['pullenvale/pullenvale_recreation_reserve.jpg', 'pullenvale/pullenvale_recreation_reserve1.jpg']
                    },
                    {
                        name: 'The Pullenvale Forest Park',
                        address: '386 Pullenvale Road',
                        descr: 'Habitat restoration site (Pullenvale Forest Park Bushcare Group) and picnic area',
                        imgs: ['pullenvale/pullenvale_forest_park.jpg', 'pullenvale/pullenvale_forest_park1.jpg']
                    }
                ],
                transport: {
                    'Pinjarra Hills': ['3', '27', '27', '9'],
                    'Kholo': ['25', '', '4,21', '1,28'],
                    'Upper Brookfield': ['18', '', '3,14', '1,3'],
                    'Anstead': ['7', '', '1,15', '21'],
                    'Brookfield': ['10', '', '1,44', '34']
                },
                places: [
                    ['The Gap', '815,000', 'gap'],
                    ['Toowong', '1,025,000', 'toowong'],
                    ['Jamboree', '582,000', 'jamboree']
                ]
            },
            'enoggera': {
                title: 'Enoggera',
                descr: `Enoggera has a great community feel, with a mix of "old timers" and families discovering the area because of the proximity to the CBD, and easy access to schools, shops, transport – all fairly well within walking distance.
            Originally inhabited by the Turrbal Aboriginal people, the area known as Enoggera was named from the misspelling of the Aboriginal word, Euoggera, meaning 'place of water' or 'place of breeze'`,
                params: ['775,000', '10.71', '3.4', '3'],
                lifestyle:
                    `Bisected by Samford Road (running east-west) and Wardell Street (north-south), Enoggera is remarkably central to everything the inner-north west has to offer. Samford Road runs out to the beautiful Samford Valley and the D’Aguilar National Park (via Brookside Shopping Centre, if you’re so inclined), or quickly into the city, via Newmarket and Kelvin Grove.
                Wardell Street links the inner-western suburbs, making it easy to pop to Ashgrove, Paddington and Toowong (or much further north towards the Sunshine Coast).
                There are two major bus terminals in this neighbourhood (on Wardell Street and at the Enoggera train station), and two train stations on the Ferny Grove line (Enoggera and Gaythorne). Enoggera is also distinguished by its easy access to quality schools, with a number of well-regarded private and public schools within its catchment`,
                schools: [
                    {
                        name: 'Enoggera State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Enoggera 4051',
                        filter: ['primary']
                    },
                    {
                        name: 'Oakleigh State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Ashgrove 4060',
                        filter: ['primary']
                    },
                    {
                        name: 'Newmarket State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Newmarket  4051',
                        filter: ['primary']
                    },
                    {
                        name: 'Mitchelton State School',
                        type: 'Special',
                        age: 'Prep-12',
                        edu: 'CoEd',
                        address: 'Mitchelton 4053',
                        filter: ['primary']
                    },
                    {
                        name: 'Our Lady of the Assumption School',
                        type: 'Catholic',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: '',
                        filter: ['primary']
                    },
                    {
                        name: 'Our Lady of Dolours School ',
                        type: 'Private',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Mitchelton 4053',
                        filter: ['primary']
                    },
                    {
                        name: 'Everton Park State High School',
                        type: 'Government',
                        age: '7-12',
                        edu: 'CoEd',
                        address: 'Everton Park 4053',
                        filter: ['secondary']
                    },
                    {
                        name: 'Mitchelton Special School',
                        type: 'Special',
                        age: 'Prep-12',
                        edu: 'CoEd',
                        address: 'Mitchelton 4053',
                        filter: ['primary', 'secondary']
                    },
                    {
                        name: 'Hillbrook Anglican School',
                        type: 'Private',
                        age: '7-12',
                        edu: 'CoEd',
                        address: 'Enoggera 4051',
                        filter: ['secondary', 'private']
                    },
                    {
                        name: 'Mt Maria College',
                        type: 'Private',
                        age: '7-12',
                        edu: 'CoEd',
                        address: 'Mitchelton 4053',
                        filter: ['secondary', 'private']
                    },
                    {
                        name: 'Marist College Ashgrove',
                        type: 'Combined',
                        age: '5-12',
                        edu: 'CoEd',
                        address: 'Ashgrove 4060',
                        filter: ['primary', 'secondary', 'private']
                    },
                    {
                        name: 'Our Lady of the Assumption School',
                        type: 'Catholic',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: '',
                        filter: ['primary', 'private']
                    },
                    {
                        name: 'Our Lady of Dolours School',
                        type: 'Private',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Mitchelton 4053',
                        filter: ['primary', 'private']
                    },
                ],
                parks:[
                    {
                        name: 'Enoggera Memorial Park',
                        address: '95 Hurdcotte Street',
                        descr: 'Car park (Mott Street, Hurdcotte Street), junior cycle training, playground (Hurdcotte Street, Mott Street), playground, water (bubbler/tap) and seating',
                        imgs: ['enoggera/enoggera_memorial_park.jpg', 'enoggera/enoggera_memorial_park1.jpg']
                    },
                    {
                        name: 'Ferguson Park',
                        address: '305 Samford Road',
                        descr: 'Barbecue (electric), picnic area/shelter, playground, public toilet (Gizeh Street) and water (bubbler/tap)',
                        imgs: ['enoggera/enoggera_ferguson_park.jpg', 'enoggera/enoggera_ferguson_park1.jpg']
                    },
                    {
                        name: 'Kinnen Street Park',
                        address: '165 Pickering Street',
                        descr: 'Playground',
                        imgs: ['enoggera/enoggera_kinnen_street_park.jpg', 'enoggera/enoggera_kinnen_street_park1.jpg']
                    },
                    {
                        name: 'Korea Park',
                        address: '111 Pickering Street',
                        descr: 'Picnic area/shelter',
                        imgs: ['enoggera/enoggera_korea_park.jpg', 'enoggera/enoggera_korea_park1.jpg']
                    },
                    {
                        name: 'Pickering Street Park',
                        address: '176 Pickering Street',
                        descr: 'Pathway',
                        imgs: ['enoggera/enoggera_pickering_street_park.jpg', 'enoggera/enoggera_pickering_street_park1.jpg']
                    },
                    {
                        name: 'Shand Street Park (no. 131)',
                        address: '21 Picnic Street',
                        descr: 'Playground, water (drinking fountain, bubbler, taps)',
                        imgs: ['enoggera/enoggera_shand_street_park_no_131.jpg', 'enoggera/enoggera_shand_street_park_no_1311.jpg']
                    },
                    {
                        name: 'Wattle Street Park (no. 32 & 34)',
                        address: '361 South Pine Road',
                        descr: '',
                        imgs: ['enoggera/enoggera_wattle_street_park_nos_32__34.jpg']
                    },
                ],
                transport: {
                    'Gaythorne': ['2', '12', '12', '4'],
                    'The Gap': ['13', '57', '1,47', '35'],
                    'Ashgrove': ['4', '19', '34', '11'],
                    'Alderley': ['2', '4', '14', '4'],
                    'Keperra': ['7', '31', '1,1', '19'],
                    'Stafford': ['7', '29', '46', '13'],
                    'Stafford': ['4', '14', '25', '8'],
                    'Everton Park': ['5', '12', '34', '9'],
                },
                places: [
                    ['The Gap', '815,000', 'gap'],
                    ['Central', '1,100,000', 'central'],
                    ['Chermside', '700,000', 'chermside']
                ]
            },
            'gap':  {
                title: 'The Gap',
                descr: `The Gap — Brisbane's most lush suburb
            Its safe and very friendly — the kind of neighbourhood where children play in the street and many of the people who live there grow their own herb gardens, sharing their produce with their neighbours. Its quite an affluent suburb with many residents being business owners.
            Surrounded by lush bushland but still only a 15-minute drive to Brisbane CBD, locals at The Gap truly enjoy the best of both worlds`,
                params: ['815,000', '8.68', '3.5', '4'],
                lifestyle:
                    `Early last century, Brisbanites travelled by cart for weekend picnics in this leafy valley. Now professionals and families can enjoy the tranquil vibe of The Gap every day of the week.
                Like its neighbouring suburbs to the east, The Gap has character-filled wooden homes, leafy streets and a hilly aspect. But unlike those other suburbs, The Gap backs onto beautiful reserves of native bushland and National Parks – making it the perfect bush retreat for worn-out city professionals.
                With a number of quality schools here and nearby, and a vast array of sporting grounds, clubs, teams, bikeways and parks, even the most choosy of kids will find it hard to be bored in The Gap`,
                schools: [
                    {
                        name: 'Hilder Road State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'The Gap 4061',
                        filter: ['primary'],
                    },
                    {
                        name: 'Payne Road State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'The Gap 4061',
                        filter: ['primary'],
                    },
                    {
                        name: 'The Gap State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'The Gap 4061',
                        filter: ['primary'],
                    },
                    {
                        name: 'Ashgrove State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Ashgrove 4060',
                        filter: ['primary'],
                    },
                    {
                        name: 'Bardon State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Bardon 4065',
                        filter: ['primary'],
                    },
                    {
                        name: 'St Peter Chanel Primary School',
                        type: 'Catholic',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'The Gap 4061',
                        filter: ['primary', 'private'],
                    },
                    {
                        name: 'Marist College Ashgrov',
                        type: 'Combined',
                        age: '5-12',
                        edu: 'CoEd',
                        address: 'Ashgrove 4060',
                        filter: ['primary','secondary','private'],
                    },
                    {
                        name: 'The Gap State High School',
                        type: 'Government',
                        age: '7-12',
                        edu: 'CoEd',
                        address: 'The Gap 4061',
                        filter: ['secondary'],
                    },
                    {
                        name: 'Stuartholme School',
                        type: 'Private',
                        age: '7-12',
                        edu: 'CoEd',
                        address: 'Toowong 4066',
                        filter: ['secondary','private'],
                    },
                    {
                        name: 'Mt St Michael\'s College',
                        type: 'Private',
                        age: '7-12',
                        edu: 'CoEd',
                        address: 'Ashgrove 4060',
                        filter: ['secondary','private'],
                    },
                ],
                parks:[
                    {
                        name: 'Allamanda Street Park',
                        address: '41 Allamanda Street',
                        descr: 'Basketball keyway, shared bikeway, playground, restoration site (Watercress Farm) and seating',
                        imgs: ['gap/the_gap_allamanda_street_park.jpg', 'gap/the_gap_allamanda_street_park1.jpg']
                    },
                    {
                        name: 'Alfred & Lucina Best Park',
                        address: '89 Payne Road',
                        descr: 'Accessible toilets, basketball half court, bikeway/walkway, BMX track, netball court (Payne Road), water (bubbler/tap), wheelchair access',
                        imgs: ['gap/the_gap_alfred___lucina_best_park.jpg', 'gap/the_gap_alfred___lucina_best_park1.jpg']
                    },
                    {
                        name: 'Badrick Place Park',
                        address: '21 Inwood Place',
                        descr: 'Playground and water (bubbler/tap)',
                        imgs: ['gap/the_gap_badrick_place_park.jpg', 'gap/the_gap_badrick_place_park1.jpg']
                    },
                    {
                        name: 'Chaprowe Road Park',
                        address: '11 Trebonne Street',
                        descr: 'Shared pathway and seating',
                        imgs: ['gap/the_gap_chaprowe_road_park.jpg', 'gap/the_gap_chaprowe_road_park1.jpg']
                    },
                    {
                        name: 'Dajarra Street Park',
                        address: '24 Dajarra Street',
                        descr: '',
                        imgs: []
                    },
                    {
                        name: 'Fannings Corner',
                        address: '118 Payne Road',
                        descr: '',
                        imgs: ['gap/the_gap_fannings_corner.jpg', 'gap/the_gap1fannings_corner.jpg']
                    },
                    {
                        name: 'Glenella Street Park',
                        address: '77 Glenella Street',
                        descr: 'Shared pathway',
                        imgs: []
                    },
                    {
                        name: 'Highgrove Court Park',
                        address: '7 Highgrove Court',
                        descr: 'Seating',
                        imgs: []
                    },
                    {
                        name: 'Kilmaine Street Parkм',
                        address: '26 Kilmaine Street',
                        descr: '',
                        imgs: ['gap/the_gap_kilmaine_street_park.jpg', 'gap/the_gap_kilmaine_street_park1.jpg']
                    },
                ],
                transport: {
                    'Keperra': ['8', '56', '56', '12'],
                    'Brookfield': ['15', '1,26', '2,4','46'],
                    'Mount Coot-Tha': ['14',' 57',' 1,46','40'],
                    'Bardon': ['11',' 33', '1,15','27'],
                    'Ashgrove': ['9', '31', '1,12','23'],
                    'Enoggera Reservoir':[ '9', '8', '1,38','45'],
                    'Enoggera': ['13', '47', '1,42','34'],
                    'Upper Kedron': ['10',' 1,8', '1,34','35']
                },
                places: [
                    ['Toowong', '1,025,000', 'toowong'],
                    ['Pullenvale', '1,370,000', 'pullenvale'],
                    ['Enoggera', '775,000', 'enoggera']
                ]
            },
            'mcdowall': {
                title: 'McDowall',
                descr: `McDowall, a residential suburb, is immediately east of the Bunyaville State Forest Park and 11 km north-west of central Brisbane. It was named after an early farmer in the adjoining suburb of Everton Park.
                McDowall is notable for the Raven Street Reserve, which is a 24.3 hectare bushland area surrounded by urban housing and busy roads. It is part of a long stretch of forest and green areas going from the mountains in the west to the mangrove areas on the coast. It has many species of wildflowers and grass trees (see image below) which when in flower have a long central flowering stem that attracts bees`,
                params: ['730,000', '7.22', '3.9', '2'],
                lifestyle: `All of McDowall's residential developments are in close proximity to either one of McDowall's two community-based shopping centres. The North-West Plaza is located on the southern end of McDowall and is anchored by a Woolworths supermarket. McDowall Village shopping centre is located on the northern end of McDowall and is anchored by Drakes Supermarket. Major shopping centres that are local to McDowall include Brookside Shopping Centre, Stafford City Shopping Centre and Westfield Chermside.
                Schools that serve the McDowall area include McDowall State School, Craigslea State School, Craigslea State High School, Northside Christian College and the Queen of Apostles Chuter St campus. A number of bus services also travel through the area going to local shopping centres such as Chermside, Aspley, and Brisbane City.
                Many of the roadways in McDowall are themed to commemorate noted celebrities and pioneers in the film and television industry, both locally and abroad. Dr. Valentine McDowall Park acknowledges the pioneering work in radio and television broadcasting in Queensland during the period 1920 — 1940`,
                schools: [
                    {
                        name: 'McDowall State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'McDowall 4053',
                        filter: ['primary'],
                    },
                    {
                        name: 'Everton Park State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Everton Park 4053',
                        filter: ['primary'],
                    },
                    {
                        name: 'Stafford Heights State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Stafford Heights 4053',
                        filter: ['primary'],
                    },
                    {
                        name: `Prince of Peace Lutheran College`,
                        type: 'Combined',
                        age: 'Prep-12',
                        edu: 'CoEd',
                        address: 'Everton Park 4053',
                        filter: ['primary'],
                    },
                    {
                        name: 'Queen of Apostles Primary School',
                        type: 'Private',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Private Stafford 4053',
                        filter: ['primary'],
                    },
                    {
                        name: 'Everton Park State High School',
                        type: 'Government',
                        age: '7-12',
                        edu: 'CoEd',
                        address: 'Everton Park 4053',
                        filter: ['secondary'],
                    },
                    {
                        name: 'Craigslea State High School',
                        type: 'Government',
                        age: '7-12',
                        edu: 'CoEd',
                        address: 'Government  Chermside West 4032',
                        filter: ['secondary'],
                    },
                    {
                        name: 'Northside Christian College',
                        type: 'Combined',
                        age: 'Prep-12',
                        edu: 'CoEd',
                        address: 'Everton Park 4053',
                        filter: ['primary','secondary','private'],
                    },
                    {
                        name: 'Prince of Peace Lutheran College',
                        type: 'Combined',
                        age: 'Prep-12',
                        edu: 'CoEd',
                        address: 'Everton Park 4053',
                        filter: ['primary','secondary','private'],
                    },
                    {
                        name: 'Queen of Apostles Primary School',
                        type: 'Private',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Stafford 4053',
                        filter: ['primary', 'private'],
                    },
                ],
                parks: [
                    {
                        name: 'Beckett Road Park ',
                        address: '60 Paramount Circuit',
                        descr: 'Basketball half court (Paramount Circuit), playground (Paramount Circuit), shared pathway, water (bubbler/tap/dog bowl), seating',
                        imgs: ['mcdowall/mcdowall.jpg', 'mcdowall/mcdowall1.jpg'],
                    },
                    {
                        name: 'Chermside Hills Reserve',
                        address: '31 Walker Street',
                        descr: 'Bushland, car park, circuit track (Giwadha), picnic area/shelter (Trouts Road South), playground (Paramount Circuit), restoration site (Cabbage Tree Kids Bushcare Group), water (bubbler/tap)',
                        imgs: ['mcdowall/mcdowall_chermside_hills_reserve.jpg', 'mcdowall/mcdowall_chermside_hills_reserve1.jpg'],
                    },
                    {
                        name: 'Dr Valentine McDowall Park (previously known as Streisand Drive Park)',
                        address: '99 Streisand Drive',
                        descr: 'Barbecue (electric), outdoor fitness/exercise equipment, pathway and skate trail, picnic area/shelter, playgrounds (Carides Place & Di Vito Place), water (bubbler)',
                        imgs: [],
                    },
                    {
                        name: 'Hoffman Street Park',
                        address: '2 De Mille Street',
                        descr: 'Access (Chermside Hills), cricket pitch',
                        imgs: ['mcdowall/mcdowall_hoffman_street_park.jpg', 'mcdowall/mcdowall_hoffman_street_park1.jpg'],
                    },
                    {
                        name: 'Laurina Crescent',
                        address: '6 Laurina Crescent',
                        descr: 'Playground',
                        imgs: ['mcdowall/mcdowall_laurina_crescent.jpg', 'mcdowall/mcdowall_laurina_crescent1.jpg'],
                    },
                    {
                        name: 'Malaga Street Park',
                        address: '71 Malaga Street',
                        descr: 'Water (bubbler/taps)',
                        imgs: ['mcdowall/mcdowall_malaga_street_park.jpg'],
                    },
                    {
                        name: 'Old Northern Road Park (no. 315)',
                        address: '315 Old Northern Road',
                        descr: '',
                        imgs: ['mcdowall/mcdowall_old_northern_road_park.jpg', 'mcdowall/mcdowall_old_northern_road_park1.jpg'],
                    },
                    {
                        name: 'Solar Park',
                        address: '128 Streisand Drive',
                        descr: 'Barbecue (electric), picnic area/shelter (Elipse Street), playground (Eclipse Street)',
                        imgs: ['mcdowall/owall_solar_park.jpg', 'mcdowall/owall_solar_park1.jpg'],
                    },
                    {
                        name: 'Ustinov Crescent Park (Soroptomists Retreat)',
                        address: '57 Beckett Road',
                        descr: 'Activity space (Landis Street), basketball half court, playground (Lands Street), seating, shared pathway, water (bubbler)',
                        imgs: ['mcdowall/mcdowall_ustinov_crescent_park.jpg', 'mcdowall/mcdowall_ustinov_crescent_park1.jpg'],
                    },
                ],
                transport: {
                    'Bridgeman Downs': ['5', '7', '35', '10'],
                    'Everton Park': ['3', '7', '43', '11'],
                    'Stafford Heights': ['6', '27', '50', '19'],
                    'Everton Hills': ['4', '35', '35', '10'],
                    'Chermside West': ['5', '9', '33', '13'],
                    'Aspley': ['7', ' 24', '50', '15'],
                    'Bunya': ['9', '', '1,27', '29'],
                    'Albany Creek': ['7', '12', '1,5', '18']
                },
                places: [
                    ['Enoggera', '775,000', 'enoggera'],
                    ['Chermside', '700,000', 'chermside'],
                    ['Bracken Ridge', '570,000', 'bracken'],
                ]
            },
            'bracken': {
                title: 'Bracken Ridge',
                descr: `Bracken Ridge is mainly residential suburb, popular with families, good access to the beach at Redcliffe and the Sunshine Coast. Bracken Ridge is made up predominantly of single unit dwellings (houses) with relatively few unit/townhouse developments. The suburban lifestyle is popular with young and established families. Vacant land in Bracken Ridge is limited but further subdivisions are occurring`,
                params: ['570,000', '9.66', '4.3', '6'],
                lifestyle: `There are plenty of great dining options in and around Bracken Ridge. If you’re looking for a local café, take-away, pub or restaurant you’ll find it here.
                Gawain Road is a great local shopping area – and a little further afield you’ve got Sandgate Shopping Complex on Brighton Road and Taigum Shopping Centre on Beams Road.
                If you're looking for playgroups, childcare, kindergartens or schools in this area, you'll find them here.
                Leisure
                Check out this section for things to do in your spare time. There's sport, leisure activities, local events and more.
                Government offices, local libraries, churches, volunteer organisations, ward offices and more — if you're after contact information for government and community organisations, this is the place to start`,
                schools: [
                    {
                        name: 'Norris Road State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Bracken Ridge 4017',
                        filter: ['primary'],
                    },
                    {
                        name: 'Bracken Ridge State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Bracken Ridge 4017',
                        filter: ['primary'],
                    },
                    {
                        name: 'Bald Hills State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: ' Bald Hills 4036',
                        filter: ['primary'],
                    },
                    {
                        name: ` St Flannan's School`,
                        type: 'Private',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: '',
                        filter: ['primary'],
                    },
                    {
                        name: `St Paul's Schoole`,
                        type: 'Combined',
                        age: 'Prep-12',
                        edu: 'CoEd',
                        address: 'Bald Hills 4036',
                        filter: ['primary', 'private'],
                    },
                    {
                        name: 'Bracken Ridge State High School',
                        type: 'Government',
                        age: '7-12',
                        edu: 'CoEd',
                        address: 'Bracken Ridge 4017',
                        filter: ['secondary'],
                    },
                    {
                        name: 'St John Fisher College',
                        type: 'Private',
                        age: '7-12',
                        edu: 'CoEd',
                        address: 'Bracken Ridge 4017',
                        filter: ['secondary','private'],
                    },
                    {
                        name: 'Jabiru Community College',
                        type: 'Special',
                        age: '9-12',
                        edu: 'CoEd',
                        address: 'Bracken Ridge 4017',
                        filter: ['secondary','private'],
                    },
                    {
                        name: `St Paul's School`,
                        type: 'Combined',
                        age: 'Prep-12',
                        edu: 'CoEd',
                        address: 'Bald Hills 4036',
                        filter: ['secondary'],
                    },

                    {
                        name: `St Flannan's School`,
                        type: 'Private',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: '',
                        filter: ['private'],
                    },
                ],
                parks: [
                    {
                        name: 'Barbour Road Park',
                        address: '17 Canterbury Street',
                        descr: 'Barbecue — electric, basketball half court, playground (The Oaks), water (bubbler/tap)',
                        imgs: ['bracken/bracken_ridge_barbour_road_park.jpg', 'bracken/bracken_ridge_barbour_road_park1.jpg'],
                    },
                    {
                        name: 'C. Slaughter Park',
                        address: '21 Ranes Court',
                        descr: 'Playground, water (bubbler & tap)',
                        imgs: ['bracken/bracken_ridge_c_slaughter_park.jpg', 'bracken/bracken_ridge_c_slaughter_park1.jpg'],
                    },
                    {
                        name: 'Enbrook Parkland',
                        address: '390 Telegraph Road',
                        descr: 'Outdoor fitness/exercise equipment, playground, shared pathway and water (bubbler/tap)',
                        imgs: ['bracken/bracken_ridge_enbrook_parkland.jpg', 'bracken/bracken_ridge_enbrook_parkland1.jpg'],
                    },
                    {
                        name: 'Ferguson Park (Bracken Ridge)',
                        address: '201 Barrett Street',
                        descr: 'Playgrounds (Barett Street, Ferguson Park Community Centre), sporting facility, water (bubblers/taps/drinking fountain) and Wi-Fi',
                        imgs: ['bracken/bracken_ridge_ferguson_park.jpg', 'bracken/bracken_ridge_ferguson_park1.jpg'],
                    },
                    {
                        name: 'Barrett Street Park (water reserve)',
                        address: '110 Norris Road',
                        descr: 'Barbecue (electric), basketball/netball facility (basketball half court), bikeway, dog off-leash area including area for small dogs, picnic area/shelter, playground, toilet, outdoor fitness/exercise station and water (bubblers/taps/dog bowl)',
                        imgs: ['bracken/bracken_ridge_barrett_street_park.jpg', 'bracken/bracken_ridge_barrett_street_park.jpg'],
                    },
                    {
                        name: 'Isaac Best Park',
                        address: '14-26 David Street',
                        descr: 'Basketball/netball facility (basketball half court), bikeway, playground and water (bubbler/tap)',
                        imgs: ['bracken/bracken_ridge_isaac_best_park.jpg', 'bracken/bracken_ridge_isaac_best_park1.jpg'],
                    },
                    {
                        name: 'McPherson Park',
                        address: '146 Denham Street',
                        descr: 'Barbecue (electric), basketball/netball facility (basketball half court), car park (Denham Street), picnic area/shelter, Bracken Ridge Central Lions Club playground, shared pathway, toilet, water (bubblers)',
                        imgs: ['bracken/bracken_ridge_mcpherson_park.jpg', 'bracken/bracken_ridge_mcpherson_park1.jpg'],
                    },
                    {
                        name: 'Sandgate Third Lagoon Reserve',
                        address: '83 Barfoot Street                ',
                        descr: 'Access road (Bracken Ridge Road, Deagon Deviation), barbecue (electric, wood), car parking (Barfoot Street), picnic area (Peace Park), playground (Peace Park), shared pathway and walking track network, water (bubbler/tap), wetlands',
                        imgs: ['bracken/bracken_ridge_sandgate_third_lagoon_reserve.jpg', 'bracken/bracken_ridge_sandgate_third_lagoon_reserve1.jpg'],
                    },
                    {
                        name: 'Talltrees Street Park',
                        address: '17 Talltrees Street',
                        descr: 'Playground',
                        imgs: ['bracken/bracken_ridge_talltrees_street_park.jpg', 'bracken/bracken_ridge_talltrees_street_park1.jpg'],
                    }
                ],
                transport: {
                    'Fitzgibbon': ['3', '22', '22', '6'],
                    'Taigum': ['7', '18', '49', '13'],
                    'Bald Hills': ['9', '36', '36', '9'],
                    'Deagon': ['7', '35', '55', '15'],
                    'Sandgate': ['9', '40', '1,6', '19'],
                    'Brighton': ['8', '1,1', '1,3', '18']
                },
                places: [
                    ['McDowall', '730,000', 'mcdowall'],
                    ['Chermside', '700,000', 'chermside'],
                    ['Deagon', '554,000', 'deagon'],
                ]
            },
            'deagon': {
                title: 'Deagon',
                descr: `Deagon, a residential suburb on the Sandgate railway line, is 16 km north of central Brisbane. It is partly separated from Sandgate by a series of lagoons and former water reserves, and is bounded on the south by the Cabbage Tree Creek`,
                params: ['554,750', '13.21', '3.9', '1'],
                lifestyle: `Deagon's location allows it to have a perfect trilogy of great transport connections, great proximity to the ocean and beautiful big housing lots. Most parts of Deagon are within a short walk to Sandgate and the Bay but without the price tag of Sandgate or Shorncliffe.
            The area is safe and quintessentially suburban, with some great little hidden cafes, 2 nearby shopping centres and a great selection of restaurants and bars close by`,
                schools: [
                    {
                        name: 'Sandgate State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Sandgate 4017',
                        filter: ['primary'],
                    },
                    {
                        name: 'Nashville State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Brighton 4017',
                        filter: ['primary'],
                    },
                    {
                        name: 'Shorncliffe State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Shorncliffe 4017',
                        filter: ['primary'],
                    },
                    {
                        name: `Boondall State School`,
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Boondall 4034',
                        filter: ['primary'],
                    },
                    {
                        name: `Taigum State School`,
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Taigum 4018',
                        filter: ['primary'],
                    },
                    {
                        name: `Sandgate District State High School`,
                        type: 'Government',
                        age: '7-12',
                        edu: 'CoEd',
                        address: 'Deagon 4017',
                        filter: ['secondary'],
                    },
                ],
                parks: [
                    {
                        name: 'Clem Masters Park',
                        address: '31 Hickson Road',
                        descr: 'Playground (Henderson Road) and seating',
                        imgs: ['deagon/deagon_clem_masters_park.jpg', 'deagon/deagon_clem_masters_park1.jpg'],
                    },
                    {
                        name: 'Deagon Sportsground Park (Albury Oval)',
                        address: '83 Board Street',
                        descr: 'Barbecue (electric), car parking (Board Street), playground, public toilet and changerooms (Deagon Sportsground), skate facility (Deagon Sportsground), tennis facility (Sandgate and District) and water (bubbler/tap)',
                        imgs: ['deagon/deagon_sportsground_park.jpg', 'deagon/deagon_sportsground_park1.jpg'],
                    },
                    {
                        name: 'Desmond Avenue Park',
                        address: '30 Desmond Avenue',
                        descr: 'Car park',
                        imgs: ['deagon/deagon_desmond_avenue_park.jpg', 'deagon/deagon_desmond_avenue_park1.jpg'],
                    },
                    {
                        name: 'Herb Holz Park',
                        address: '21 Yaldwyn Street',
                        descr: 'Playground and seating',
                        imgs: ['deagon/deagon_herb_holz_park.jpg', 'deagon/deagon_herb_holz_park1.jpg'],
                    },
                    {
                        name: 'Lendon Street Park',
                        address: '20 Lendon Street',
                        descr: '',
                        imgs: ['deagon/deagon_lendon_street_park.jpg', 'deagon/deagon_lendon_street_park1.jpg'],
                    },
                    {
                        name: 'Loftus Street Park',
                        address: '40 Loftus Street',
                        descr: '',
                        imgs: [],
                    },
                    {
                        name: 'Nearra Street Park',
                        address: '134 Nearra Street',
                        descr: '',
                        imgs: ['deagon/deagon_nearra_street_park.jpg', 'deagon/deagon_nearra_street_park1.jpg'],
                    },
                    {
                        name: 'Stanley Park',
                        address: '60 Albury Street',
                        descr: 'Cricket field, playground, seating, water (drinking fountain)',
                        imgs: ['deagon/deagon_stanley_park.jpg', 'deagon/deagon_stanley_park1.jpg'],
                    },
                    {
                        name: 'Depot Road Park (no. 106)',
                        address: '106 Depot Road',
                        descr: '',
                        imgs: ['deagon/deagon_depot_road_park.jpg', 'deagon/deagon_depot_road_park1.jpg'],
                    }
                ],
                transport: {
                    'Sandgate': ['3', '9', '16', '6'],
                    'Boondall': ['5', '12', '39', '10'],
                    'Taigum': ['5', '29', '39', '11'],
                    'Fitzgibbon': ['8', '43', '59', '16'],
                    'Bracken Ridge': ['8', '1,3', '56', '17']
                },
                places: [
                    ['Bracken Ridge', '570,000', 'bracken'],
                    ['Chermside', '700,000', 'chermside'],
                    ['Northgate', '810,000', 'northgate']
                ],
            },
            'northgate': {
                title: 'Northgate',
                descr: `Northgate, a residential and industrial suburb on the Sandgate railway line, is 10 km north-east of central Brisbane. Northgate is located 9 kilometres (5.6 mi) north of the Brisbane CBD. The land area comprises industrial and residential areas. Inter war homes can be found on Northgate Hill — elevated land that rises west of the railway station; and post World War II real estate on "the flat" — the large arc of flat land that extends to Moreton Bay at Nudgee Beach with most of the housing stock being post-WWII`,
                params: ['810,000', '16.69', '3.2', '4'],
                lifestyle: `For those who work in the CBD, Northgate train station is perfect as it is such a short walk for residents and the station is so well-serviced with multiples lines passing through. Groceries and other shopping can be done in Ascot, Clayfield (3-5), Chermside (5-8), DFO (3-6), Toombul (2-4) or Nundah Village (1-3).
                Access to the motorways is super-fast and a real advantage — a day trip or weekend away up or down the coast, or north to Shorncliffe, Sandgate, Redcliffe or Bribie Island, or east to Bulimba, Manly, Wellington Point or Cleveland, becomes quick and easy.
                The light industrial works are barely noticeable and in fact are pocketed away adjacent to the train line on the non-residential side of Toombul Road.
                The local demographic appears be a mix of the old and the young, the middle, lower-middle and upper-working class, with an increasing number of upwardly mobile types and prosperous young families buying into the suburb, with its charming post-war homes, cottages and Queenslanders. Northgate is an excellent base and a suburb in which anyone could feel comfortable and 'at home'`,
                schools: [
                    {
                        name: 'Northgate State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Nundah 4012',
                        filter: ['primary'],
                    },
                    {
                        name: 'Virginia State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Virginia 4014',
                        filter: ['primary'],
                    },
                    {
                        name: 'Nundah State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Nundah 4012',
                        filter: ['primary'],
                    },
                    {
                        name: `Geebung Special School`,
                        type: 'Special',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Geebung 4034',
                        filter: ['primary'],
                    },
                    {
                        name: `Earnshaw State School`,
                        type: 'Combined',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Banyo 4014',
                        filter: ['primary'],
                    },
                    {
                        name: `St Pius' Primary School`,
                        type: 'Private',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Banyo 4014',
                        filter: ['primary', 'private'],
                    },
                    {
                        name: `Our Lady of the Angels' School`,
                        type: 'Private',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Wavell Heights 4012',
                        filter: ['primary', 'private'],
                    },
                    {
                        name: `Aviation High`,
                        type: 'Government',
                        age: '7-12',
                        edu: 'CoEd',
                        address: 'Hendra 4011',
                        filter: ['secondary'],
                    },
                    {
                        name: `Earnshaw State College`,
                        type: 'Combined',
                        age: 'Prep-12',
                        edu: 'CoEd',
                        address: 'Banyo 4014',
                        filter: ['secondary'],
                    },
                    {
                        name: `Mary MacKillop College`,
                        type: 'Private',
                        age: '7-12',
                        edu: 'CoEd',
                        address: 'Nundah 4012',
                        filter: ['secondary','private'],
                    }
                ],
                parks: [
                    {
                        name: 'Carter Street Park',
                        address: '55A Carter Street',
                        descr: '',
                        imgs: [],
                    },
                    {
                        name: 'Nicholson Place Park',
                        address: '100 Gympie Street',
                        descr: 'Pathway, playground and picnic area/shelter',
                        imgs: ['northgate/northgate_nicholson_place_park.jpg', 'northgate/northgate_nicholson_place_park1.jpg'],
                    },
                    {
                        name: 'Northgate Reserve',
                        address: '672 Nudgee Road',
                        descr: 'Cricket nets, dog off-leash area, playground, shared pathway, water (bubbler/tap)',
                        imgs: ['northgate/northgate_reserve.jpg', 'northgate/northgate_reserve.jpg'],
                    },
                    {
                        name: 'Nudgee Road Park (no. 695)',
                        address: '695 Nudgee Road',
                        descr: 'Community facility (Hendra Pony Club)',
                        imgs: ['northgate/northgate_nudgee_road_park.jpg', 'northgate/northgate_nudgee_road_park.jpg'],
                    },
                    {
                        name: 'Orchard Park (previously known as Flower Street Park)',
                        address: '68 Flower Street',
                        descr: 'Community facilities (Wonargo Revue (Scouts), Toombul Bowls Club)',
                        imgs: ['northgate/northgate_orchard_park.jpg', 'northgate/northgate_orchard_park1.jpg'],
                    },
                    {
                        name: 'Progress Park (formerly NEPA Recreation Reserve)',
                        address: '8 Paterson Parade',
                        descr: 'Community facility (Progress Hall), barbecue (electric), basketball half-court, picnic area/shelter, playground, public toilet and water (bubbler/tap)',
                        imgs: ['northgate/northgate_progress_park.jpg', 'northgate/northgate_progress_park1.jpg'],
                    },
                    {
                        name: 'Sapsford Street Park',
                        address: '21 Sapsford Street',
                        descr: 'Playground, picnic area/shelter and water (bubbler/tap)',
                        imgs: ['northgate/northgate_sapsford_street_park.jpg', 'northgate/northgate_sapsford_street_park.jpg'],
                    },
                    {
                        name: 'Stanley Richardson Place Park (road reserve)',
                        address: '2 Days Road',
                        descr: 'Seating, shelter, water (bubbler/tap) and shared pathway',
                        imgs: ['northgate/northgate_stanley_richardson_place_park.jpg', 'northgate/northgate_stanley_richardson_place_park1.jpg'],
                    },
                    {
                        name: 'Station Avenue Park ',
                        address: '27A Station Avenue',
                        descr: '',
                        imgs: [''],
                    },
                ],
                transport: {
                    'Toombul': ['6', '28', '28', '8'],
                    'Nundah': ['6', '28', '28', '8'],
                    'Wavell Heights': ['10', '52', '52', '17'],
                    'Brisbane Airport': ['10', '47', '1,34', '26'],
                    'Banyo': ['7', '22', '43', '12'],
                    'Virginia': ['6', '27', '42', '12'],
                },
                places: [
                    ['Everton Park', '710,000'],
                    ['Yeerongpilly', '880,000'],
                    ['Yeronga', '1,050,000'],
                ],
            },
            'central': {
                title: 'Central (Spring Hill)',
                descr: `Central (or Spring Hill), an inner Brisbane suburb, is immediately north and north-west of the city centre. The dividing boundary between Spring Hill and the city is Wickham Terrace which, incidentally, is the suburb's most notable thoroughfare. The rising landscape was a source of spring water, and an example is to be found in the Roma Street Parklands`,
                params: ['1,100,000', '8.86', '2.8', '10'],
                lifestyle: `The great thing about Central is that there is always something going on there is such a massive range of people. You have a little run down cottage on your left and a million dollar prestige property on your right. Cafes, Restaurants, Bars, Clubs, Pubs, Parks and Shops are all at your finger tips. The Central Baths operated by the Brisbane City Council are the oldest public baths in Queensland`,
                schools: [
                    {
                        name: 'Brisbane Central State School ',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Spring Hill 4000',
                        filter: ['primary'],
                    },
                    {
                        name: 'Brisbane Grammar School',
                        type: 'Combined',
                        age: ' 5-12',
                        edu: 'CoEd',
                        address: 'Spring Hill 4000',
                        filter: ['primary','secondary','private'],
                    },
                    {
                        name: 'Somerville House',
                        type: 'Combined',
                        age: ' 5-12',
                        edu: 'CoEd',
                        address: 'South Brisbane 4101',
                        filter: ['primary','secondary','private']
                    },
                    {
                        name: `St Joseph's College`,
                        type: 'Combined',
                        age: '5-12',
                        edu: 'CoEd',
                        address: 'Spring Hill 4000',
                        filter: ['primary','secondary','private'],
                    },
                    {
                        name: `All Hallows' School`,
                        type: 'Combined',
                        age: '5-12',
                        edu: 'CoEd',
                        address: 'Brisbane 4000',
                        filter: ['primary','secondary','private'],
                    },
                    {
                        name: `St James College `,
                        type: 'Private',
                        age: '7-12',
                        edu: 'CoEd',
                        address: 'Spring Hill 4000',
                        filter: ['secondary','private'],
                    },
                    {
                        name: `Brisbane Girls Grammar School`,
                        type: 'Private',
                        age: '7-12',
                        edu: 'CoEd',
                        address: 'Spring Hill 4000',
                        filter: ['secondary','private'],
                    },
                    {
                        name: ` Albert Park Flexible Learning Centre`,
                        type: 'Special',
                        age: '10-12',
                        edu: 'CoEd',
                        address: 'Petrie Terrace 4000',
                        filter: ['secondary','private'],
                    },
                ],
                parks:[
                    {
                        name: 'Observatory Park',
                        address: '230 Wickham Terrace',
                        descr: 'Cultural heritage site (Tower Mill precinct — Spring Hill Windmill Tower and Spring Hill Reserviors)',
                        imgs: ['central/central_observatory_park.jpg','central/central_observatory_park1.jpg']
                    },
                    {
                        name: 'Terrace Street Park',
                        address: '60 Sedgebrook Street',
                        descr: 'Playground — fully fenced, seating, water (bubbler)',
                        imgs: ['central/central_terrace_street_park.jpg','central/central_terrace_street_park1.jpg']
                    },
                    {
                        name: 'Victoria Park (Barrambbin, Gregory Grove, Yorks Hollow)',
                        address: '454 Gregory Terrace',
                        descr: 'Centenary Pool, Multicultural Community Centre, Victoria Park golf administration and function venues, access & car parking (Gregory Terrace, Gilchrist Avenue), accessible toilet, cricket & soccer facility (Gilchrist Avenue), dog off leash area etc',
                        imgs: ['central/central_victoria_park1.jpg']
                    },
                    {
                        name: 'Wickham Park',
                        address: '330 Wickham Terrace',
                        descr: 'Wickham Park Escarpment, shared pathway water (bubblers/taps), Wi-Fi',
                        imgs: ['central/central_wickham_park.jpg']
                    },
                    {
                        name: 'Bedford Playground Park',
                        address: '33 Quarry Street',
                        descr: 'Lady Gowrie Child Centre, Communify Qld Spring Hill Hall, barbecue (electric), cricket field, fitness station, half court, picnic area, playground — fully fenced, tennis courts',
                        imgs: ['central/central_bedford_playground_park.jpg','central/central_bedford_playground_park1.jpg']
                    },
                ],
                transport: {
                    'Fortitude Valley': ['5', '14', '14', '4'],
                    'Brisbane City': ['8', '15', '17', '5'],
                    'Petrie Terrace:': [' 6', '19', '24', '10'],
                    'Red Hill': ['7', '23', '35', '13'],
                    'Kelvin Grove': ['6', '37', '33', '11'],
                    'Herston': ['5', '25', '26', '9'],
                    'Bowen Hills:': ['5', '11', '24', '7'],
                },
                places: [
                    ['Hamilton', '1,560,000', 'hamilton'],
                    ['Morningside', '891,000', 'morningside'],
                    ['The Gabba', '1,300,000', 'gabba'],
                ],
            },
            'toowong': {
                title: 'Toowong',
                descr: `Part built-up commercial and residential precinct, part hilly heritage haven – Toowong is a harmonious inner-city duet.`,
                params: ['1,025,000', '5.15', '3', '7'],
                lifestyle: `Close to the city, universities, hospitals and some of Brisbane’s best schools, Toowong is ultra-convenient for professionals, students and families alike. With easy access to the Brisbane River, if you love to ride or walk to work (or anywhere really), Toowong is for you. City Cats on the River, plus frequent buses and trains – Toowong is serqlded by public transport like no other location in Brisbane. Hugely popular bikeways and walkways run both to the City along the river and towards the Western suburbs, perfect for fitness fans and family rides. The two main watering holes, the Regatta Hotel and the Royal Exchange (RE) Hotel, are not just pubs – they are Brisbane landmarks in their own right, with histories almost as long and varied as Brisbane itself. The heritage-heavy western side of Toowong has family-friendly neighbourhood feel, which can be rare for a suburb so close to the city`,
                schools: [
                    {
                        name: 'Toowong State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Toowong 4066',
                        filter: ['primary']
                    },
                    {
                        name: 'St Ignatius School ',
                        type: 'Private',
                        age: ' Prep-6',
                        edu: 'CoEd',
                        address: 'Toowong 4066',
                        filter: ['primary', 'private']
                    },
                    {
                        name: `Brisbane Boys' College `,
                        type: 'Combined',
                        age: 'Prep-12',
                        edu: 'CoEd',
                        address: 'Toowong 4066',
                        filter: ['primary','secondary','private']
                    },
                    {
                        name: `Queensland Academy for Science Mathematics and Technology`,
                        type: 'Combined',
                        age: '10-12',
                        edu: 'CoEd',
                        address: 'Toowong 4066',
                        filter: ['secondary']
                    },
                ],
                parks: [
                    {
                        name: 'Anzac Park',
                        address: '100 Dean Street',
                        descr: 'Barbecue (wood), bikeway/pathway, car park, dog off-leash area (including dog off-leash area for small dogs), outdoor fitness/exercise equipment, picnic area, playground, toilets (Dean Street), water (disabled access drinking fountain), access to Centenary Motorway pedestrian/cycle overpass',
                        imgs: []
                    },
                    {
                        name: 'Birdwood Terrace Park',
                        address: '360 Birdwood Terrace',
                        descr: 'Toilet',
                        imgs: []
                    },
                    {
                        name: 'Miskin Street Park',
                        address: '128 Miskin Street',
                        descr: 'Veterans Support & Advocacy facility and shared pathway',
                        imgs: ['toowong/toowong_miskin_street_park1.jpg']
                    },
                    {
                        name: 'Oxford Road Park',
                        address: '11A Maraket Street',
                        descr: '',
                        imgs: []
                    },
                    {
                        name: 'Perrin Park',
                        address: '56 Josling Street',
                        descr: 'Barbecue (electric), bikeway/walkway, dog off-leash area (Heroes Avenue), outdoor fitness/exercise equipment, picnic area, playground - accessible and inclusive, toilets (Heroes Avenue), water (bubbler/tap)',
                        imgs: []
                    },
                    {
                        name: 'Quinn Park',
                        address: '560 Milton Road',
                        descr: 'Silk Shed Studio Group, playground and picnic area',
                        imgs: ['toowong/toowong_quinn_park.jpg','toowong/toowong_quinn_park1.jpg']
                    },
                    {
                        name: 'Richer Street Park',
                        address: '316 Birdwood Road',
                        descr: 'Pathway',
                        imgs: ['toowong/toowong_richer_street_park.jpg']
                    },
                    {
                        name: 'Toowong Memorial Park',
                        address: '65 Sylvan Road',
                        descr: '4x4 Scouts Australia facility, barbecues (electric), basketball half court, basketball keyway court, cultural heritage site, dog off-leash area with a water bubbler, picnic areas, playgrounds, shared pathway, toilets',
                        imgs: []
                    },
                    {
                        name: 'Westbrook Park',
                        address: '38 Market Street',
                        descr: 'Playground, picnic area, barbecue (electric) and water (bubbler/tap)',
                        imgs: ['toowong/toowong_westbrook_park.jpg']
                    },
                ],
                transport: {
                    'Taringa': ['3', '15', '15', '10'],
                    'St Lucia': ['8', '27', '38', '14'],
                    'West End': ['14', '38', '59', '20'],
                    'Mount Coot-Tha': ['3', '22', '22', '9'],
                    'Auchenflower': ['4', '21', '21', '9'],
                    'Bardon': ['6', '46', '46', '18'],
                },
                places: [
                    ['Central', '1,100,000', 'central'],
                    ['The Gap', '815,000', 'gap'],
                    ['Walter Taylor', '1,500,000', 'lucia'],
                ],
            },
            'lucia': {
                title: 'St Lucia (or Walter Taylor)',
                descr: `St Lucia (or Walter Taylor), a residential suburb with the University of Queensland occupying its eastern end, is four km south-west of central Brisbane. Travel via Coronation Drive, the Brisbane River CityCat or by ferry from West End is considerably further. The western part of St Lucia includes the locality of Ironside`,
                params: ['1,500,000', '21.09', '1.9', '2'],
                lifestyle: `There is a numerous amount of things you can entertain yourself with in St Lucia. Including Hawken Drive which has the local IGA and serves a diverse range of restaurants, from Persian to Thai to Italian there is a great selection of restaurants to choose from all on one little strip! Hawken drive is with-in walking distance from anywhere in St Lucia, and if you don't want to walk the numerous amount of bus services will get to you there in no time! There is also the well-known St Lucia Golf Club, the food there is also amazing. There is also the Famous University of Queensland which contains Tennis Courts, Olympic swimming pools, Running courses, Many clubs for people of any age to join and many more. These facilities are also available to anyone but beware a small fee is involved. If you want to go shopping there is the ginormous Indooroopilly shopping centre and Toowong Village that are a short 5-minute drive or bus ride away. St Lucia is also a very safe suburb. With a council patrol car always driving around you can always have a piece of mind`,
                schools: [
                    {
                        name: 'Ironside State School ',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'St Lucia 4067',
                        filter: ['primary']
                    },
                    {
                        name: 'Holy Family Primary School ',
                        type: 'Private',
                        age: ' Prep-6',
                        edu: 'CoEd',
                        address: 'Indooroopilly 4068',
                        filter: ['primary', 'private']
                    },
                    {
                        name: `Indooroopilly State High School `,
                        type: 'Government',
                        age: '7-12',
                        edu: 'CoEd',
                        address: 'Indooroopilly 4068',
                        filter: ['secondary']
                    },
                    {
                        name: `Brigidine College`,
                        type: 'Private',
                        age: '7-12',
                        edu: 'CoEd',
                        address: 'Indooroopilly 4068',
                        filter: ['secondary','private']
                    },
                ],
                parks: [
                    {
                        name: 'Acacia Park',
                        address: '299 Carmody Road',
                        descr: 'UQ Weight Lifting Centre, barbecue, picnic area, playground, water (bubbler)',
                        imgs: ['lucia/lucia_taylor_acacia_park.jpg', 'lucia/lucia_taylor_acacia_park1.jpg']
                    },
                    {
                        name: 'Banksia Park',
                        address: '40 Sixth Avenue',
                        descr: 'Seating',
                        imgs: ['lucia/lucia_taylor_banksia_park.jpg', 'lucia/lucia_taylor_banksia_park1.jpg']
                    },
                    {
                        name: 'Bellevue Terrace Park',
                        address: '43 Sir Fred Schonell Drive',
                        descr: 'Playground and seating',
                        imgs: ['lucia/lucia_taylor_bellevue_terrace_park.jpg']
                    },
                    {
                        name: 'Carawa Street Park',
                        address: '5 Carawa Street',
                        descr: 'Picnic area',
                        imgs: ['lucia/lucia_taylor_carawa_street_park.jpg', 'lucia/lucia_taylor_carawa_street_park1.jpg']
                    },
                    {
                        name: 'Guyatt Park',
                        address: '19 Hiron Street',
                        descr: 'Accessible toilet, barbecue (electric), ferry terminal, picnic area, barbecue, outdoor fitness/exercise equipment, playground, public toilet, shared pathway network, Wi-Fi, table tennis tables',
                        imgs: ['lucia/lucia_taylor_guyatt_park.jpg','lucia/lucia_taylor_guyatt_park1.jpg']
                    },
                    {
                        name: 'Ironside Park',
                        address: '85 Carmody Road',
                        descr: 'Guides Queensland, Meals on Wheels, Scout Association of Australia, bikeway network',
                        imgs: ['lucia/lucia_taylor_ironside_park.jpg','lucia/lucia_taylor_ironside_park1.jpg']
                    },
                    {
                        name: 'Lex Ord Park',
                        address: '224 Indooroopilly Road',
                        descr: 'Picnic area, playground, water',
                        imgs: ['lucia/lucia_taylor_lex_ord_park.jpg','lucia/lucia_taylor_lex_ord_park1.jpg']
                    },
                    {
                        name: 'Rotary International Presidents Park (Rotary Park)',
                        address: '37 Keith Street',
                        descr: `Keith Street Peace Grove, St Thomas' Riverview Kindergarten, Toowong Rowing Club, access & car parking, bikeway, picnic area, playground, rowing facility`,
                        imgs: ['lucia/lucia_taylor_rotary_international_presidents_park.jpg','lucia/lucia_taylor_rotary_international_presidents_park1.jpg']
                    },
                    {
                        name: 'The Esplanade Park (road reserve)',
                        address: '1 The Esplanade',
                        descr: 'Brisbane River Walk, Habitat Brisbane Group, shared pathway, seating and water (bubbler/tap)',
                        imgs: ['lucia/lucia_taylor_the_esplanade_park.jpg','lucia/lucia_taylor_the_esplanade_park1.jpg']
                    },

                ],
                transport: {
                    'Taringa': ['7', '28', '36', '16'],
                    'Yeronga': ['19', '1,12,', '1,14', '23'],
                    'Indooroopilly': ['7', '19', '38', '14'],
                    'Fairfield': ['20', '54', '57', '20'],
                    'Dutton Park': ['17', '49', '48', '18'],
                    'Highgate Hill': ['16', '50', '37', '17'],
                    'West End': ['15', '44', '38', '16'],
                    'Toowong': ['7', '29', '39', '15'],
                },
                places: [
                    ['Toowong', '1,025,000', 'toowong'],
                    ['Tennyson', '970,000', 'tennyson'],
                    ['The Gabba', '1,300,000', 'gabba'],
                ],
            },
            'jamboree': {
                title: 'Jamboree (Jindalee)',
                descr: `Jamboree, a residential suburb developed during the 1960s-70s, is 12 km south-west of central Brisbane. The area was known as Seventeen Mile Rocks, a rural locality with a narrow bridge over the Brisbane River leading to an unnamed road leading to Fig Tree Pocket Road. It is thought that the name (1963) derived from an Aboriginal expression meaning bare hills`,
                params: ['582,000', '13.13', '4', '2'],
                lifestyle: `There's a police station, plenty of parkland, good cafes, restaurants, doctors, pharmacies, swimming pools, fuel stations, and of course the highway going north and south. Also, it is a great place to live if you love nature with two seperate bush walks and and the Jamboree boat ramp with it's own area for the dog lovers too. Very easy access to everywhere, and you have a huge shopping centre right next to you (Mt Ommaney), or if you want to eat out really good vietnamese or catch the train to the city you are 2 minutes from Darra. The suburb is very quiet with nice decent people living in it`,
                schools: [
                    {
                        name: 'Jamboree Heights State School ',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Jamboree Heights 4074',
                        filter: ['primary']
                    },
                    {
                        name: 'Middle Park State School',
                        type: 'Government',
                        age: ' Prep-6',
                        edu: 'CoEd',
                        address: 'Middle Park 4074',
                        filter: ['primary']
                    },
                    {
                        name: `Jindalee State School`,
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Jindalee 4074',
                        filter: ['primary']
                    },
                    {
                        name: `Mount Ommaney Special School`,
                        type: 'Special',
                        age: 'Prep-12',
                        edu: 'Co-Ed',
                        address: 'Mount Ommaney 4074',
                        filter: ['primary','secondary']
                    },
                    {
                        name: `Good News Lutheran School`,
                        type: 'Private',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Middle Park 4074',
                        filter: ['primary','','private']
                    },
                    {
                        name: `Centenary State High School `,
                        type: 'Government',
                        age: '7-12',
                        edu: 'Co-Ed',
                        address: 'Jindalee 4074',
                        filter: ['secondary']
                    },
                ],
                parks: [
                    {
                        name: 'Jamboree Park',
                        address: '18 Guide Street',
                        descr: 'Barbecue (electric), picnic area/shelter, playground, shelter, water (bubbler/tap)',
                        imgs: ['jamboree/jamboree_jamboree_park.jpg', 'jamboree/jamboree_jamboree_park1.jpg']
                    },
                    {
                        name: 'Phil Denman Park',
                        address: '56 Loffs Road',
                        descr: 'Barbecue (electric), basketball half court, junior cycle-training track, dog off-leash area with dog exercise equipment, picnic area/shelter, practice cricket net, rebound wall, shelter, water (bubblers/taps/dog bowl), car park and shelter',
                        imgs: ['jamboree/jamboree_phil_denman_park.jpg','jamboree/jamboree_phil_denman_park1.jpg']
                    },
                    {
                        name: 'Pioneer Belz Park (previously Kooringal Drive Park)',
                        address: '47 Kooringal Drive',
                        descr: 'Car park (Centenary Highway), shared pathway, picnic area/shelter and water (bubbler/tap)',
                        imgs: ['jamboree/jamboree_pioneer_belz_park.jpg','jamboree/jamboree_pioneer_belz_park1.jpg']
                    },
                    {
                        name: 'Jindalee Recreation Reserve',
                        address: '77 Curragundi Road',
                        descr: 'Picnic area/shelter and seating',
                        imgs: []
                    },
                    {
                        name: 'Capitol Drive Park',
                        address: '78 Capitol Drive',
                        descr: 'Bikeway and playground',
                        imgs: []
                    },
                    {
                        name: 'Elinga Street Park',
                        address: '19 Elinga Street',
                        descr: 'Playground',
                        imgs: []
                    },
                    {
                        name: 'Jindalee Boat Ramp Park',
                        address: '99 Mt Ommaney Drive',
                        descr: 'Barbecue (electric), boat ramp, car park, dog off-leash area (with drinking fountain and dog bowl), picnic area/shelter, playground, toilet, outdoor fitness/exercise equipment, shared pathway, water (disabled access bubbler)',
                        imgs: ['jamboree/jamboree_boat_ramp_park.jpg', 'jamboree/jamboree_boat_ramp_park1.jpg']
                    },
                    {
                        name: 'Jindalee Municipal Golf Links Park',
                        address: '60 Yallambee Road',
                        descr: `Bikeway`,
                        imgs: []
                    },
                    {
                        name: 'Jindalee Park (Wyaribah)',
                        address: '89 Burrendah Road',
                        descr: 'Barbecue (electric), playground, seating, shared pathway, water (bubbler/taps)',
                        imgs: []
                    },

                ],
                transport: {
                    'Mount Ommaney': ['4', '18', '18', '8'],
                    'Sinnamon Park': ['4', '33,', '33', '12'],
                    'Pinjarra Hills': ['15', '32,', '2, 7', '45'],
                    'Fig Tree Pocket': ['8', '57,', '57', '25'],
                    'Kenmore': ['12', '28,', '1,8', '32'],
                },
                places: [
                    ['st Lucia', '1,500,000', 'lucia'],
                    ['Pullenvale', '1,370,000', 'pullenvale'],
                    ['Richlands', '444,000', 'richlands'],
                ],
            },
            'richlands': {
                title: 'Richlands',
                descr: `Richlands, a predominantly industrial suburb adjoining Wacol and Inala, is 16 km south-west of central Brisbane. Richlands' small residential area is in its north-east, near Inala. Richlands proved to be well positioned for the demand for outer-urban industrial and warehouse land`,
                params: ['444,000', '0.97', '5.1', '1'],
                lifestyle: `Good access by motorways and public transport. Next door to Inala, which is a green and quiet suburb, with many parks and playgrounds, schools, childcare, medical centres, authentic restaurants and fresh affordable produce at the numerous shops at Inala Civic. A good suburb with an extensive new development. Affordable, green, with parks and recreational facilities. Good shopping options in Richlands and in Inala next door. Many affordable eating-out places. Very good access via motorways and public transport, including the new train station. Doctors, schools, childcare — all nearby either in Richlands or in Inala. Inala also has three post offices, TAFE, gym at PCYC, sports ovals, and old parks with beautiful big trees`,
                schools: [
                    {
                        name: ' Richlands East State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Inala 4077',
                        filter: ['primary']
                    },
                    {
                        name: 'Forest Lake State School ',
                        type: 'Government',
                        age: ' Prep-6',
                        edu: 'CoEd',
                        address: 'Forest Lake 4078',
                        filter: ['primary']
                    },
                    {
                        name: 'Serviceton South State School ',
                        type: 'Government',
                        age: ' Prep-6',
                        edu: 'CoEd',
                        address: 'Inala 4077',
                        filter: ['primary']
                    },
                    {
                        name: 'Inala State School ',
                        type: 'Government',
                        age: ' Prep-6',
                        edu: 'CoEd',
                        address: 'Inala 4077',
                        filter: ['primary']
                    },
                    {
                        name: 'Carole Park State School',
                        type: 'Government',
                        age: ' Prep-6',
                        edu: 'CoEd',
                        address: 'Wacol 4076',
                        filter: ['primary']
                    },
                    {
                        name: 'Western Suburbs State Special School ',
                        type: 'Special',
                        age: 'Prep-12',
                        edu: 'Co-Ed',
                        address: 'Inala 4077',
                        filter: ['primary','secondary']
                    },
                    {
                        name: `St Mark's School `,
                        type: 'Private',
                        age: ' Prep-6',
                        edu: 'CoEd',
                        address: 'Inala 4077',
                        filter: ['primary','private'],
                    },
                    {
                        name: `Glenala State High School `,
                        type: 'Government',
                        age: ' 7-12',
                        edu: 'CoEd',
                        address: 'Durack 4077',
                        filter: ['secondary'],
                    },
                    {
                        name: 'Inala Flexible Learning Centre ',
                        type: 'Special',
                        age: ' 7-12',
                        edu: 'CoEd',
                        address: '',
                        filter: ['secondary','private'],
                    },

                ],
                parks: [
                    {
                        name: 'Bill Gillespie Park (Previously known as Pine Road Park)',
                        address: '71-95 Pine Road',
                        descr: '',
                        imgs: []
                    },
                    {
                        name: 'Bukulla Street North Park',
                        address: `72 Bukulla Street`,
                        descr: '',
                        imgs: []
                    },
                    {
                        name: 'Castamore Way Park',
                        address: '112A and 120A Progress Road',
                        descr: '',
                        imgs: []
                    },
                    {
                        name: 'C. J. Greenfield Complex Park',
                        address: '149 Kimberley Street',
                        descr: 'Access and car parking, barbecue (electric), bikeway, custom multi-court, dog off-leash area with a tap and bubbler with dog bowl, outdoor fitness/exercise equipment, picnic area and shelters, playground, water (drinking fountain, bubblers, taps)',
                        imgs: ['richlands/richlands_cj_greenfield_complex_park.jpg','richlands/richlands_cj_greenfield_complex_park1.jpg']
                    },
                    {
                        name: 'Eugenia Street Park',
                        address: '35 Razark Street',
                        descr: 'Playground',
                        imgs: ['richlands/richlands_eugenia_street_park.jpg','richlands/richlands_eugenia_street_park1.jpg']
                    },
                    {
                        name: 'Kathleen Street Park',
                        address: '26 Kathleen Street',
                        descr: '',
                        imgs: ['richlands/richlands_kathleen_street_park.jpg','richlands/richlands_kathleen_street_park1.jpg']
                    },
                    {
                        name: 'Rory Street Park',
                        address: '4 Rory Street',
                        descr: 'Picnic area, playground',
                        imgs: ['richlands/richlands_rory_street_park.jpg']
                    },
                ],
                transport: {
                    'Inala': ['4', '30 ', '30 ', '9'],
                    'Forest Lake': ['12', '41', '1,6', '26'],
                    'Wacol': ['5', '50', '50', '14'],
                    'Darra': ['5', '34', '34', '10'],
                    'Oxley': ['8', '13', '1,1', '17'],
                },
                places: [
                    ['Parkinson', '720,000', 'parkinson'],
                    ['Moorooka', '762,000', 'moorooka'],
                    ['Tennyson', '970,000', 'tennyson'],
                ],
            },
            'parkinson': {
                title: 'Parkinson',
                descr: `Parkinson is a residential suburb on the southern municipal boundary of the City of Brisbane. Immediately south of the boundary is Logan City's suburbs of Browns Plains and Hillcrest. Parkinson was formally named in 1972 after Henry Parkinson, a railway engineer`,
                params: ['720,000', '6.97', '3.7', '4'],
                lifestyle: `Shopping options are great with close proximity to Browns Plains, Calamvale, & Sunnybank, with Garden City not much further afield. With numerous parks and reserves, Karrawatha forest and the new Swim centre there is plenty to keep you occupied. Its a great place to raise kids, good neighbours. Parkinson has a friendly community spirit where neighbours catch up at the letterbox or for street barbecues. Everyone is willing to lend a hand if one is needed and strangers will greet you while a smile and a "G'day". There are plenty of parks to walk the dog or take the kids to play with purpose built bike tracks and picturesque pathways through bushland and parks`,
                schools: [
                    {
                        name: 'Calamvale Special School ',
                        type: 'Special',
                        age: 'Prep-12',
                        edu: 'CoEd',
                        address: 'Calamvale 4116',
                        filter: ['primary','secondary'],
                    },
                    {
                        name: 'Calamvale Community College',
                        type: 'Combined',
                        age: ' Prep-12',
                        edu: 'CoEd',
                        address: 'Calamvale 4116',
                        filter: ['primary','secondary'],
                    },
                    {
                        name: 'Stretton State College',
                        type: 'Combined',
                        age: ' Prep-12',
                        edu: 'CoEd',
                        address: 'Stretton 4116',
                        filter: ['primary','secondary'],
                    },
                    {
                        name: 'Wisdom College',
                        type: 'Combined',
                        age: ' Prep-9',
                        edu: 'CoEd',
                        address: 'Calamvale 4116',
                        filter: ['primary','secondary','private'],
                    },
                    {
                        name: `St Stephen's School `,
                        type: 'Private',
                        age: ' Prep-6',
                        edu: 'CoEd',
                        address: 'Algester 4115',
                        filter: ['primary','private'],
                    },

                ],
                parks: [
                    {
                        name: 'Algester Road Park (no. 515)',
                        address: '515 Algester Road',
                        descr: 'Barbecue (electric), picnic area and shelter, playground, water (bubbler/tap) and shared pathway',
                        imgs: ['parkinson/parkinson_algester_road_park.jpg','parkinson/parkinson_algester_road_park1.jpg']
                    },
                    {
                        name: 'Beaudesert Road Park (no. 2911)',
                        address: '2939 Beaudesert Road',
                        descr: '',
                        imgs: ['parkinson/parkinson_beaudesert_road_park.jpg','parkinson/parkinson_beaudesert_road_park1.jpg']
                    },
                    {
                        name: 'Blairmount Street Park',
                        address: '16 Killarney Place',
                        descr: '',
                        imgs: ['parkinson/parkinson_blairmount_street_park.jpg','parkinson/parkinson_blairmount_street_park1.jpg']
                    },
                    {
                        name: 'Daintree Drive Park (no. 65)',
                        address: '65 Daintree Drive',
                        descr: '',
                        imgs: ['parkinson/parkinson_daintree_drive_park.jpg','parkinson/parkinson_daintree_drive_park_1.jpg']
                    },
                    {
                        name: 'Greenways Esplanade Park',
                        address: '30 Greenways Esplanade',
                        descr: 'Activity space (BMX track, basketball half court, rebound wall, cricket practice net), barbecues (electric), car park, dog off-leash area, outdoor fitness/exercise station, path & bikeway network,picnic areas (Pinedale Crescent), playground (Greenways Esplanade), water (bubbler/tap), table tennis tables',
                        imgs: ['parkinson/parkinson_greenways_esplanade_park.jpg','parkinson/parkinson_greenways_esplanade_park1.jpg']
                    },
                    {
                        name: 'Lakewood Avenue Park',
                        address: '26 Argyle Place',
                        descr: 'Lakewood Avenue Lagoon, barbecue (electric), outdoor fitness/exercise station, picnic area (Argyle Place), playground (Lagoon), shared pathway network and water (bubbler/tap/dog bowl)',
                        imgs: ['parkinson/parkinson_lakewood_avenue_park.jpg','parkinson/parkinson_lakewood_avenue_park_1.jpg']
                    },
                    {
                        name: 'Parkinson Environmental Corridor',
                        address: '30 Greenways Esplanade',
                        descr: 'Shared pathway',
                        imgs: []
                    },
                    {
                        name: 'Watheroo Place Park',
                        address: '20 Watheroo Place',
                        descr: 'Barbecue (electric), community/public art, picnic area, playground, water (accessible drinking fountain) and pathway',
                        imgs: []
                    },
                    {
                        name: 'Talisker Place Park',
                        address: '6 Mount Archer Road',
                        descr: 'Barbecue (electric), cultural heritage site - public art, pathway network, picnic area and shelter and playground',
                        imgs: ['parkinson/parkinson_talisker_place_park.jpg','parkinson/parkinson_talisker_place_park1.jpg']
                    },
                ],
                transport: {
                    'Algester': ['4', '10', '40', '11'],
                    'Browns Plains': ['9', '44', '1,38', '19'],
                    'Hillcrest': ['9', '47', '2,17', '23'],
                    'Forestdale': ['10', '7,10', '2,1', '32'],
                    'Larapinta': ['9', '1,25', '-', '21'],
                    'Drewvale': ['6', '58', '1,39', '15'],
                    'Pallara': ['12', '1,59', '2,9', '34'],
                    'Calamvale': ['4', '21', '40', '12'],
                },
                places: [
                    ['Moorooka', '762,000', 'moorooka'],
                    ['Calamvale', '655,000', 'calamvale'],
                    ['Richlands', '444,000', 'richlands'],
                ],
            },
            'moorooka': {
                title: 'Moorooka',
                descr: 'Once known only as the home of Brisbane’s Magic Mile of car dealerships, Moorooka is now a comfortable and welcoming residential neighbourhood. The well-worn streets of this older suburb have been rejuvenated by an influx of families from near and far',
                params: ['762,000', '15.38', '3.1', '8'],
                lifestyle: `Families and professional couples are flocking to Moorooka to enjoy the magic mix of generous backyards and proximity to the city. It’s also the new home of recently-arrived families from East Africa who are making a vibrant contribution to this growing community. It’s not just the homes that have been renovated here — Moorooka itself feels fresh and new. Dogs are walked along the tree-lined streets and the suburb is peppered with small local parks, ultimately backing onto Toohey Forest Park on its Western edge. With 100 businesses located in the Moorvale shopping area on Beaudesert Road, it’s easy to shop and eat locally. The African community has left its mark here too, with grocery stores, hairdressers and Halal butchers meeting the needs of the new locals. New cafes are popping up on street corners to make sure that this neighbourhood is well fed and caffeinated, without having to jump in the car`,
                schools: [
                    {
                        name: 'Moorooka State School',
                        type: 'government',
                        age: '0-6',
                        edu: 'CoEd',
                        address: 'Moorooka 4105',
                        filter: ['primary']
                    },
                    {
                        name: 'Rocklea State School',
                        type: 'government',
                        age: '0-6',
                        edu: 'CoEd',
                        address: 'Rocklea 4106',
                        filter: ['primary']
                    },
                    {
                        name: `St Brendan's Primary School`,
                        type: 'private',
                        age: '0-6',
                        edu: 'CoEd',
                        address: 'Moorooka 4105',
                        filter: ['primary', 'private']
                    },
                ],
                parks:[
                    {
                        name: 'Alexander Park (Moorooka Recreation Reserve)',
                        address: '334 Beaudesert Road',
                        descr: 'Australian Rules facility and playground (Currey Avenue), car parking, seating, water (bubbler/tap)',
                        imgs: ['moorooka/moorooka_alexander_park.jpg',
                            'moorooka/moorooka_alexander_park1.jpg']
                    },
                    {
                        name: 'Clifton Street Park',
                        address: '2 Fleurs Street',
                        descr: 'Bikeway',
                        imgs: ['moorooka/moorooka_clifton_street_park.jpg',
                            'moorooka/moorooka_clifton_street_park1.jpg']
                    },
                    {
                        name: 'Feldt Street Park',
                        address: '333 Tarragindi Road',
                        descr: 'Playground',
                        imgs: []
                    },
                    {
                        name: 'John Bright Street Park',
                        address: '40 Cobden Street',
                        descr: 'Basketball half court (Gladstone Street)',
                        imgs: ['moorooka/moorooka_john_bright_street_park.jpg',
                            'moorooka/moorooka_john_bright_street_park1.jpg']
                    },
                    {
                        name: 'Koala Park (Peggs Park)',
                        address: '114 Vendale Avenue',
                        descr: 'Moorooka Bowls Club, car park (Vendale Avenue), picnic area/shelter, community garden with wheelchair accessible water bubbler, habitat restoration site (Moorooka Greening Group), shared pathway',
                        imgs: ['moorooka/moorooka_koala_park_peggs_park.jpg',
                            'moorooka/moorooka_koala_park_peggs_park1.jpg']
                    },
                    {
                        name: 'Mayfield Gardens',
                        address: '311 Tarragindi Road',
                        descr: 'Habitat restoration site (Moorooka Greening Group), seat, shared pathway',
                        imgs: ['moorooka/moorooka_mayfield_gardens.jpg',
                            'moorooka/moorooka_mayfield_gardens1.jpg']
                    },
                    {
                        name: 'Moorooka Playground Park',
                        address: '25 Nettleton Crescent',
                        descr: 'Playground — shaded, picnic area/shelter, shared pathway',
                        imgs: ['moorooka/moorooka_moorooka_playground_park.jpg',
                            'moorooka/moorooka_moorooka_playground_park1.jpg']
                    },
                    {
                        name: 'Stimpson Park',
                        address: '904 Ipswich Road',
                        descr: 'Cultural heritage site — memorial and toilet (Beaudesert Road), seating, water (drinking fountain)',
                        imgs: ['moorooka/moorooka_stimpson_park.jpg',
                            'moorooka/moorooka_stimpson_park1.jpg']
                    },
                    {
                        name: 'Veterans Park',
                        address: '48 Anson Street',
                        descr: 'Picnic area/shelter, outdoor fitness/exercise equipment, playground, shared pathway, water (bubbler)',
                        imgs: ['moorooka/moorooka_veterans_park.jpg',
                            'moorooka/moorooka_veterans_park1.jpg']
                    }
                ],
                transport: {
                    'Annerley': ['5', '11', '31', '10'],
                    'Rocklea': ['9', '58', '58', '15'],
                    'Salisbury': ['5', '18', '39', '12'],
                    'Tarragindi': ['5', '35', '33', '15'],
                    'Yeerongpilly': ['6', '37', '37', '11'],
                    'Yeronga': ['7', '30', '37', '12']
                },
                places: [
                    ['Tennyson', '970,000', 'tennyson'],
                    ['Holland Park', '878,000', 'holland'],
                    ['Wishart', '823,000', 'wishart'],
                ]
            },
            'tennyson': {
                title: 'Tennyson',
                descr: `Tennyson, a river-side suburb, is seven km south-west of central Brisbane. The stretch of river adjoining Tennyson is known as Canoe Reach, a name that arose from European contact pre-dating by a few months John Oxley's settlement at Redcliffe`,
                params: ['970,000', '2.47', '3.6', '2'],
                lifestyle: `Only 8km's from the city, close to transport, parks, swimming pool and tennis court (local school), shops, Woolworths at Moorooka and Coles at Fairfield. Views to Tennyson Tennis Courts and Brisbane Golf Course. Close to Rocklea Markets and Ipswich motorway. Gym available at TAFE which is located very close by. TAFE walking distance. Close to Yeronga RSL and local restaurants. Lifestyle in this suburb are quiet and leafy, it is also within walking distance to the finest cafe and bakery in Brisbane. Also a short walk to riverside playgrounds. The Tennis centre is a world class venue and a great asset to this community and the organistaion works very closely to residents to ensure community input is upheld`,
                schools: [
                    {
                        name: 'Yeronga State School',
                        type: 'government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Yeronga 4104',
                        filter: ['primary']
                    },
                    {
                        name: 'Sherwood State School',
                        type: 'government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Sherwood 4075',
                        filter: ['primary']
                    },
                    {
                        name: `Graceville State School`,
                        type: 'private',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Graceville 4075',
                        filter: ['primary']
                    },
                    {
                        name: `St Sebastian's Primary School`,
                        type: 'private',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Yeronga 4104',
                        filter: ['primary', 'private']
                    },
                    {
                        name: `Barrett Adolescent Centre Special School`,
                        type: 'special',
                        age: '7-12',
                        edu: 'CoEd',
                        address: 'Tennyson 4105',
                        filter: ['secondary']
                    }
                ],
                parks:[
                    {
                        name: 'Myla Terrace Park (road reserve)',
                        address: '52 Myla Terrace',
                        descr: 'Cultural heritage site (RSL memorial) and seating',
                        imgs: []
                    },
                    {
                        name: 'Ken Fletcher Park',
                        address: '167 King Arthur Terrace',
                        descr: 'Amphitheatre, barbecue (electric), booking site, bus drop-off area, car park, playground, interpretive signage with braille, picnic area, plaza, public art, public pontoon, seating, shade, toilets (including accessible toilets and accessible adult changing facilities), shared pathway, bike rack, water',
                        imgs: ['tennyson/tennyson_ken_fletcher_park.jpg',
                            'tennyson/tennyson_ken_fletcher_park1.jpg']
                    }
                ],
                transport: {
                    'Yeerongpilly': ['2', '15', '15', '5'],
                    'Rocklea': ['8', '1,3', '1,2', '17'],
                    'Sherwood': ['6', '38', '38', '11'],
                    'Graceville': ['3', '31', '31', '8'],
                    'Indooroopilly': ['8', '1,5', '1,1', '18']
                },
                places: [
                    ['Moorooka', '762,000', 'moorooka'],
                    ['Holland Park', '878,000', 'holland'],
                    ['Jamboree', '582,000', 'jamboree'],
                ]
            },
            'holland': {
                title: 'Holland Park',
                descr: `Holland Park and Holland Park West lie north-east and south-west of Logan Road respectively, 6 km south-east of central Brisbane. Until 1967 both were known as Holland Park, and their boundary extended across the South East Freeway into Tarragindi nearly as far as Wellers Hill`,
                params: ['878,000', '12.72', '3.1', '5'],
                lifestyle:
                    `Holland Park is a wonderful suburb, great easy access to Brisbane City and surrounded by amazing parklands, excellent schools, charming cafe's, bars and restaurants. No matter where you are in the suburb you are never far from everything you could possibly need. There are enough restaurants for a good way of lifestyle, cafes and bars along both Holland Road and Logan Road to keep us entertained and good bus access into town or South Bank (only ~6km away). Still plenty of units with a mix of heritage listed queenslanders, post-war and modern homes. Up towards Cav Road many of these are on elevated spots that catch great breezes and city or suburban views`,
                schools: [
                    {
                        name: 'Holland Park State School',
                        type: 'government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Holland Park 4121',
                        filter: ['primary']
                    },
                    {
                        name: 'Seville Road State School',
                        type: 'government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Holland Park 4121',
                        filter: ['primary']
                    },
                    {
                        name: `Marshall Road State School`,
                        type: 'government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Holland Park West 4121',
                        filter: ['primary']
                    },
                    {
                        name: `Mount Gravatt State School`,
                        type: 'government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Mount Gravatt 4122',
                        filter: ['primary']
                    },
                    {
                        name: `St Joachim's School`,
                        type: 'private',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Holland Park West 4121',
                        filter: ['primary', 'private']
                    },
                    {
                        name: `St Agnes School`,
                        type: 'private',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Mount Gravatt 4122',
                        filter: ['primary', 'private']
                    },
                    {
                        name: `Loreto College Coorparoo`,
                        type: 'private',
                        age: '7-12',
                        edu: 'CoEd',
                        address: 'Coorparoo 4151',
                        filter: ['secondary', 'private']
                    }
                ],
                parks: [
                    {
                        name: 'C.B. Mott Park (Mott Park, Yowar-Bool)',
                        address: '49 Abbotsleigh Street',
                        descr: 'Holland Park Meals on Wheels, barbecues (electric), booking site, water (bubblers/taps), Canna beds, picnic area/shelter (Abbotsleigh Street, Logan Road), playground (Abbotsleigh Street section, Logan Road section), toilet, Goori Gulwadin - Indigenous games trail, outdoor fitness/exercise equipment and shared pathway',
                        imgs: ['holland/holland_park_cb_mott_park_mott_park_yowar-bool.jpg',
                            'holland/holland_park_cb_mott_park_mott_park_yowar-bool1.jpg']
                    },
                    {
                        name: 'Coonara Street Park',
                        address: '31 Coonara Street',
                        descr: 'Playground, picnic area/shelter and pathway',
                        imgs: ['holland/holland_park_coonara_street_park.jpg',
                            'holland/holland_park_coonara_street_park2.jpg']
                    },
                    {
                        name: 'Glenalwyn Street Park',
                        address: '103 Pine Mountain Road',
                        descr: 'Playground and seat',
                        imgs: ['holland/holland_park_glenalwyn_street_park.jpg',
                            'holland/holland_park_glenalwyn_street_park1.jpg']
                    },
                    {
                        name: 'Glindemann Drive Park',
                        address: '31 Holland Road',
                        descr: 'Bikeway',
                        imgs: ['holland/holland_park_glindemann_drive_park.jpg',
                            'holland/holland_park_glindemann_drive_park1.jpg']
                    },
                    {
                        name: 'Ray Lynch Park',
                        address: '90 Halsey Street',
                        descr: 'Barbecue (electric), lighting, outdoor fitness/exercise equipment, picnic shelter, playground, seating, shared pathways (some accessible)',
                        imgs: ['holland/holland_park_ray_lynch_park.jpg',
                            'holland/holland_park_ray_lynch_park1.jpg']
                    },
                    {
                        name: 'Seville Park',
                        address: '5 Elgar Street',
                        descr: 'Basketball/netball facility, cricket pitch and field, picnic area/shelter, playground and shared pathway',
                        imgs: ['holland/holland_park_seville_park.jpg',
                            'holland/holland_park_seville_park1.jpg']
                    },
                    {
                        name: 'W. J. Scott Park',
                        address: '125 Harold Street',
                        descr: 'Car park (Arnold Street, Rita Street), memorial (RSL Remembrance Day 90th Anniversary), picnic area/shelter, playground (Arabilia Street), water (bubbler)',
                        imgs: ['holland/holland_park_w_j_scott_park.jpg',
                            'holland/holland_park_w_j_scott_park1.jpg']
                    },
                    {
                        name: 'Wollombi Park',
                        address: '31 Hector Road',
                        descr: 'Playground and seating',
                        imgs: ['holland/holland_park_wollombi_park.jpg',
                            'holland/holland_park_wollombi_park1.jpg']
                    },
                    {
                        name: 'Wyncroft Street',
                        address: 'Wyncroft Street',
                        descr: '',
                        imgs: []
                    }
                ],
                transport: {
                    'Holland Park West': ['2', '9', '11', '4'],
                    'Mount Gravatt': ['6', '25', '37', '12'],
                    'Mount Gravatt East': ['5', '11', '38', '14'],
                    'Greenslopes': ['5', '7', '30', '9'],
                    'Carina Heights': ['6', '33', '53', '19'],
                    'Coorparoo': ['5', '44', '29', '10'],
                    'Camp Hill': ['4', '37', '34', '11']
                },
                places: [
                    ['Morningside', '891,000', 'morningside'],
                    ['Chandler', '1,600,000', 'chandler'],
                    ['Moorooka', '762,000', 'moorooka'],
                ]
            },
            'morningside': {
                title: 'Morningside',
                descr: `Morningside, a residential suburb on Wynnum Road, is five km east of central Brisbane. Travel by road or rail is considerably further. The inspiration for the name was apparently the sight of nearby hills catching the rising sun, or the locality being on the morning (eastern) side of Brisbane`,
                params: ['891,000', '2.45', '3.3', '7'],
                lifestyle:
                    `Lifestyle here is multifaceted. Access to boarding blue chip suburbs such as Hawthorne and Bulimba and the many lifestyle options that both provide, fantastic public transport into the CBD via bus or train, quick and easy access south via Wynnum Road and easy access to Westfield Carindale. All the while it seems to provide that perfect balance between modern and urban inner city suburb and quiet and green family location. And if you get bored you can watch an AFL game on the weekend. Great cafe's/restaurants are also there`,
                schools: [
                    {
                        name: 'Seven Hills State School',
                        type: 'government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Seven Hills 4170',
                        filter: ['primary']
                    },
                    {
                        name: 'Norman Park State School',
                        type: 'government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Norman Park 4170',
                        filter: ['primary']
                    },
                    {
                        name: 'Bulimba State School',
                        type: 'government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Bulimba 4171',
                        filter: ['primary']
                    },
                    {
                        name: `Sts Peter and Paul's School`,
                        type: 'private',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Balmoral 4171',
                        filter: ['primary', 'private']
                    },
                    {
                        name: 'Balmoral State High School',
                        type: 'government',
                        age: '7-12',
                        edu: 'CoEd',
                        address: 'Balmoral 4171',
                        filter: ['secondary']
                    },
                    {
                        name: 'Lourdes Hill College',
                        type: 'private',
                        age: '7-12',
                        edu: 'CoEd',
                        address: 'Hawthorne 4171',
                        filter: ['secondary', 'private']
                    }
                ],
                parks:[
                    {
                        name: 'Algoori Street Park',
                        address: '121 Algoori Street',
                        descr: 'Water (bubbler/tap), playground (Beverley Street), picnic area/shelter',
                        imgs: ['morningside/morningside_algoori_street_park.jpg',
                            'morningside/morningside_algoori_street_park1.jpg']
                    },
                    {
                        name: 'Austin Uhlmann Park',
                        address: '191 Richmond Road',
                        descr: 'Picnic area/shelter, water (bubbler/tap), playground',
                        imgs: ['morningside/morningside_austin_uhlmann_park.jpg',
                            'morningside/morningside_austin_uhlmann_park1.jpg']
                    },
                    {
                        name: 'Barwon Street Park',
                        address: '175 Beverley Street',
                        descr: 'Cannon Hill Anglican College sporting fields, car park',
                        imgs: ['morningside/morningside_barwon_street_park.jpg',
                            'morningside/morningside_barwon_street_park1.jpg']
                    },
                    {
                        name: `Bennett's Bushland Park (previously known as Fitzgerald Street Park)`,
                        address: '329 Bennetts Road',
                        descr: `Greening Australia Centre, meeting space/picnic area/shelter (D'Arcy Road), playground (Agnew Street), rehabilitation site (Bennetts Bush Defenders), water (bubbler/taps/dog bowl)`,
                        imgs: ['morningside/morningside_bennett_s_bushland_park.jpg',
                            'morningside/morningside_bennett_s_bushland_park1.jpg']
                    },
                    {
                        name: 'Foxton Street Park (no. 130)',
                        address: '130 Foxton Street',
                        descr: 'Rehabilitation site (Perrin Creek & Seven Hills)',
                        imgs: []
                    },
                    {
                        name: `Jeremiah O'Toole Park`,
                        address: '10 Baringa Street',
                        descr: 'Basketball half court, picnic area/shelter, playground',
                        imgs: ['morningside/morningside_jeremiah_o_toole_park.jpg',
                            'morningside/morningside_jeremiah_o_toole_park1.jpg']
                    },
                    {
                        name: 'Joyce White Park (previously known as Rogoona Street Park)',
                        address: '47 Thynne Road',
                        descr: 'Water (bubbler/tap), picnic area/shelter, playground (Ragoona Street)',
                        imgs: ['morningside/morningside_joyce_white_park.jpg',
                            'morningside/morningside_joyce_white_park1.jpg']
                    },
                    {
                        name: 'Keralgerie Park',
                        address: '191 Richmond Road',
                        descr: 'Water (bubblers/taps/dog bowl), car park, dog off-leash area, picnic area/shelter, playground, shared pathway',
                        imgs: ['morningside/morningside_keralgerie_park1.jpg',
                            'morningside/morningsidec_keralgerie_park.jpg']
                    },
                    {
                        name: 'York Street Park (Beelerong Farm)',
                        address: '60 York Street',
                        descr: 'Beerlerong Community Farm, picnic area/shelter, water (bubbler/tap)',
                        imgs: ['morningside/morningside_york_street_park_beelerong_farm.jpg',
                            'morningside/morningside_york_street_park_beelerong_farm1.jpg']
                    }
                ],
                transport: {
                    'Seven Hills': ['4', '19', '19', '7'],
                    'Norman Park': ['4', '19', '29', '9'],
                    'Cannon Hill': ['5', '21', '30', '8'],
                    'Hawthorne': ['4', '19', '19', '7'],
                    'Balmoral': ['4', '24', '24', '10'],
                    'Bulimba': ['5', '40', '40', '12'],
                    'Murarrie': ['6', '45', '48', '14'],
                    'Hamilton': ['11', '1,8', '58', '20'],
                    'Eagle Farm': ['8', '1,31', '58', '20']
                },
                places: [
                    ['The Gabba', '1,300,000', 'gabba'],
                    ['Hamilton', '1,560,000', 'hamilton'],
                    ['Lytton', '555,000', 'lytton'],
                ]
            },
            'chandler': {
                title: 'Chandler',
                descr: `Chandler, a sparsely settled suburb, is 14 km south-east of central Brisbane. Originally part of Belmont and the western edge of Capalaba, Chandler was gazetted as a suburb in 1975. It was named after Sir John Chandler, Lord Mayor of Brisbane (1940-52), founder of Brisbane's first radio 4BC (1930) and chair of the Chandler electrical-goods retail chain. Sir John's mayoral career is described in John Cole's Shaping a City (1984)`,
                params: ['1,600,000', '2.24', '-', '4'],
                lifestyle:
                    `Chandler has a real rural flavour yet it's so close to the CBD. It's a part of town without bad traffic making commutes easy. Despite the acreage layout it's also close to everything. The airport is less than 15mins away, the Gateway Motorway is on your doorstep with easy access to both the Gold Coast and Sunshine Coast, the Bay is minutes down the road, Westfield Carindale is also right there along with all the shops and industry to be found in Capalaba. For connectedness I don't know how you could top it. To live there you have to be keen on the acreage lifestyle — there's barely a block smaller than 10,000sqm/2.5 acres with many double that or larger. The homes are huge to match the land and the whole area feels enormously spacious and open. Wildlife is abundant. There is not a lot of community activity. Being so well located it is obviously quite an expensive area, though prices have plateaued since the acreage lifestyle went a little out of fashion. There are many very good private schools throughout the eastern part of Brisbane and the local state schools (like Gumdale) are quite good`,
                schools: [
                    {
                        name: 'Gumdale State School ',
                        type: 'government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Gumdale 4154',
                        filter: ['primary']
                    },
                    {
                        name: 'Belmont State School',
                        type: 'government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Carindale 4152',
                        filter: ['primary']
                    },
                    {
                        name: 'Mackenzie State Primary School',
                        type: 'government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Mackenzie 4156',
                        filter: ['primary']
                    },
                    {
                        name: 'Mackenzie State Special School',
                        type: 'special',
                        age: 'Prep-12',
                        edu: 'CoEd',
                        address: 'Mackenzie 4156',
                        filter: ['primary']
                    },
                    {
                        name: 'Sinai College ',
                        type: 'private',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Burbank 4156',
                        filter: ['primary', 'private']
                    },
                    {
                        name: 'Agnew School',
                        type: 'combined',
                        age: '3-12',
                        edu: 'CoEd',
                        address: 'Wakerley 4154',
                        filter: ['primary', 'secondary', 'private']
                    },
                    {
                        name: 'Citipointe Christian College',
                        type: 'combined',
                        age: 'Prep-12',
                        edu: 'CoEd',
                        address: 'Carindale 4152',
                        filter: ['primary', 'secondary', 'private']
                    },
                    {
                        name: 'Moreton Bay College',
                        type: 'combined',
                        age: 'Prep-12',
                        edu: 'CoEd',
                        address: 'Manly West 4179',
                        filter: ['primary', 'secondary', 'private']
                    },
                    {
                        name: 'Moreton Bay Boys College',
                        type: 'combined',
                        age: 'Prep-12',
                        edu: 'CoEd',
                        address: 'Manly West 4179',
                        filter: ['primary', 'secondary', 'private']
                    },

                ],
                parks:[
                    {
                        name: 'Bacton Road Park',
                        address: '1 Bacton Road',
                        descr: '',
                        imgs: ['chandler/chandler_bacton_road_park.jpg',
                            'chandler/chandler_bacton_road_park1.jpg']
                    },
                    {
                        name: 'Capalaba Recreation Reserve',
                        address: '29 Camrose Street',
                        descr: '',
                        imgs: []
                    },
                    {
                        name: 'Chandler Bushland Reserve',
                        address: '1781 Mt Gravatt-Capalaba Road',
                        descr: '',
                        imgs: ['chandler/chandler_bushland_reserve.jpg',
                            'chandler/chandler_bushland_reserve1.jpg']
                    },
                    {
                        name: 'Sunnydene Road Park',
                        address: '227 Sunnydene Road',
                        descr: '',
                        imgs: ['chandler/chandler_sunnydene_road_park.jpg',
                            'chandler/chandler_sunnydene_road_park1.jpg']
                    },
                    {
                        name: 'Tilley Road Park (no. 727)',
                        address: '727 Tilley Road',
                        descr: 'Walking track',
                        imgs: ['chandler/chandler_tilley_road_park.jpg',
                            'chandler/chandler_tilley_road_park1_.jpg']
                    },
                    {
                        name: 'Tingalpa Creek Reserve',
                        address: '99 Chelsea Road',
                        descr: 'Water (bubbler/tap), bushland, car park, canoe facility, creek access, equestrian trail, fishing facility, picnic area/shelter and barbecue (electric)',
                        imgs: ['chandler/chandler_tingalpa_creek_reserve.jpg',
                            'chandler/chandler_tingalpa_creek_reserve1.jpg']
                    },
                    {
                        name: 'Tollett Street Reserve',
                        address: '2907 Old Cleveland Road',
                        descr: '',
                        imgs: []
                    },
                    {
                        name: 'Toronto Road Park (no. 143)',
                        address: '181 Toronto Road',
                        descr: 'Walking track',
                        imgs: []
                    },
                    {
                        name: 'Toronto Road Park (no. 173)',
                        address: '2942 Old Cleveland Road',
                        descr: 'Walking track',
                        imgs: []
                    }
                ],
                transport: {
                    'Gumdale': ['4', '37', '37', '11'],
                    'Burbank': ['7', '6,33', '1,24', '22'],
                    'Capalaba': ['8', '35', '1,18', '21'],
                    'Belmont': ['5', '23', '43', '11'],
                    'Birkdale': ['13', '1,16', '2,1', '32'],
                    'Aquatic Paradise': ['12', '1,22', '1,50', '30'],
                    'Ransome': ['6', '1,30', '1,2', '17']
                },
                places: [
                    ['Wishart', '823,000', 'wishart'],
                    ['Lytton', '555,000', 'lytton'],
                    ['Holland Park', '878,000', 'holland'],
                ]
            },
            'wishart': {
                title: 'Wishart',
                descr: `"Wishart, a residential suburb between Upper Mount Gravatt and the Bulimba Creek, is 12 km south-east of central Brisbane.
                Originally known as Mount Gravatt South, in the mid 1960s the emerging suburb was defined by a few streets near the Mount Gravatt South primary school (1964, renamed Wishart) and a few more streets running between the Capalaba Road and Bulimba Creek (Coora to Greenwood Streets)"`,
                params: ['823,000', '14.42', '3.4', '3'],
                lifestyle:`"There is a good neighbourhood spirit. Everything is just a few minutes drive away. The massive (just extended) Garden City shopping centre provides lots of shopping and eating options. And there are some of the best public schools around this area (Mansfield, McGregor, Wishart). Quite close the both the Gateway and the Pacific Highway. Great schools to chose from and easy access to many places.
                Garden City and Carindale are only minutes away for fantastic shopping and working in the City there are a load of buses that take you there pronto. Great local restaurants located in Coorparoo which is only a 5 minute drive away"`,
                schools: [
                    {
                        name: 'Mansfield State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Mansfield 4122',
                        filter: ['primary']
                    },
                    {
                        name: 'Wishart State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Wishart 4122',
                        filter: ['primary']
                    },
                    {
                        name: 'Mount Gravatt East State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Mount Gravatt East 4122',
                        filter: ['primary']
                    },
                    {
                        name: 'St Catherine\'s Catholic Primary School',
                        type: 'Private',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Upper Mount Gravatt 4122',
                        filter: ['primary', 'private']
                    },
                    {
                        name: 'Mansfield State High School',
                        type: 'Government',
                        age: '7-12',
                        edu: 'CoEd',
                        address: 'Mansfield 4122',
                        filter: ['secondary']
                    },
                    {
                        name: 'Brisbane Adventist College',
                        type: 'Combined',
                        age: 'Prep-12',
                        edu: 'CoEd',
                        address: 'Mansfield 4122',
                        filter: ['primary', 'secondary', 'private']
                    },
                    {
                        name: 'Citipointe Christian College',
                        type: 'Combined',
                        age: 'Prep-12',
                        edu: 'CoEd',
                        address: 'Carindale 4152',
                        filter: ['primary', 'secondary', 'private']
                    },
                    {
                        name: 'Seton College',
                        type: '',
                        age: '7-12',
                        edu: 'CoEd',
                        address: '',
                        filter: ['secondary', 'private']
                    },
                ],
                parks:[
                    {
                        name: 'Berkshire Crescent Park',
                        address: '17 Berkshire Crescent',
                        descr: 'Basketball half court, water (bubblers/taps), barbecue, car park, dog off-leash area, pathway, picnic area/shelter, playground, seats',
                        imgs: ['wishart/wishart_berkshire_crescent_park.jpg', 'wishart/wishart_berkshire_crescent_park1.jpg']
                    },
                    {
                        name: 'Boorabbin Picnic Ground',
                        address: '677A Mt Gravatt-Capalaba Road',
                        descr: 'Barbecue (electric), basketball half court, car park, dog off-leash area (with agility equipment), picnic shelter/area, playground, rebound wall, shared pathway, toilets - accessible with adult carer, wheelchair accessible, water (bubbler/tap)',
                        imgs: ['wishart/wishart_boorabbin_picnic_ground.jpg', 'wishart/wishart_boorabbin_picnic_ground1.jpg']
                    },
                    {
                        name: 'Catania Street Park',
                        address: '39 Catania Street S',
                        descr: 'Car park, playground',
                        imgs: ['wishart/wishart_catania_street_park.jpg']
                    },
                    {
                        name: 'Coora Street Park',
                        address: '105 Coora Street',
                        descr: 'Barbecue, picnic area (Bellbird Crescent), playground (Bellbird Crescent), shared pathway, water (bubbler/drinking fountain)',
                        imgs: []
                    },
                    {
                        name: 'Delavan Street Park (includes Malinya Place Park and part of Holmead Park as a result of amalgamation)',
                        address: '89 Delavan Street',
                        descr: 'Path, playground (Ditmas Street and Delavan Street), picnic area, water (bubbler/tap)',
                        imgs: []
                    },
                    {
                        name: 'Frinton Street Park (also known as McCarron Park)',
                        address: '6 Frinton Street',
                        descr: 'Pathway, picnic area, playground',
                        imgs: []
                    },
                    {
                        name: 'Koola Street Park',
                        address: '459 Broadwater Road',
                        descr: 'Path, playground (shaded), picnic area',
                        imgs: []
                    },
                    {
                        name: 'Mindona Rotary Park',
                        address: '25 Mindona Street',
                        descr: 'Picnic area/shelter, playground, water (bubbler/tap), pathway',
                        imgs: []
                    },
                    {
                        name: 'Pindari Crescent Park',
                        address: '25 Pindari Crescent',
                        descr: 'Playground (shaded), seating',
                        imgs: []
                    },
                ],
                transport: {
                    'Mackenzie':['3', '25', '25', '8'],
                    'Eight Mile Plains':['7', '31', '51', '19'],
                    'Rochedale':['6', '54', '54', '18'],
                    'Upper Mount Gravatt':['6', '18', '39', '14'],
                    'Mansfield':['5', '11', '40', '13'],
                    'Mount Gravatt East':['8', '19', '56', '21'],
                },
                places: [
                    ['Macgregor', '745,000', 'macgregor'],
                    ['Chandler', '1,600,000', 'chandler'],
                    ['Moorooka', '762,000', 'moorooka'],
                ]
            },
            'macgregor': {
                title: 'Macgregor',
                descr: `MacGregor, one of a group of residential suburbs around Mount Gravatt named after Queensland public figures, is 13 km south-east of central Brisbane. Named in 1967, the suburb remembers Sir William MacGregor, Governor of Queensland during 1909-14. MacGregor was also Administrator of British New Guinea, 1887-98`,
                params: ['745,000', '-1.97', '3.4', '5'],
                lifestyle:`"Having lived and rented around Brisbane for several years, Macgregor finally felt like home. Tucked away just 11 klms from the CBD, and with the recently renovated, massive, and now world class Garden City shopping center on your doorstep, (though you wouldn't know it).
            There are lovely parks, friendly people, and it is very safe, with super low crime. Neighboring suburbs are Mount Gravatt East, Sunnybank, and Holland Park. All lovely places. Like most suburbs it has some main roads close by, and Kessels and Mains road certainly do get busy, but its a small price to pay for living in these leafy quiet streets. great bus service to the city gets you there in ten minutes, and I can leave our driveway and be in the CBD with good traffic in 8 minutes. Nice spacious houses, big yards, and loads of nearby cafes and restaurants keep us very happy here. We simply do not plan on moving"`,
                schools: [
                    {
                        name: 'MacGregor State School',
                        type: 'Government',
                        age: '0-6',
                        edu: 'CoEd',
                        address: 'Sunnybank 4109',
                        filter: ['primary']
                    },
                    {
                        name: 'Robertson State School',
                        type: 'Government',
                        age: '0-6',
                        edu: 'CoEd',
                        address: 'Robertson 4109',
                        filter: ['primary']
                    },
                    {
                        name: 'Our Lady of Lourdes Primary School',
                        type: 'Private',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Sunnybank 4109',
                        filter: ['primary', 'private']
                    },
                    {
                        name: 'Sunnybank State High School',
                        type: 'Government',
                        age: '7-12',
                        edu: 'CoEd',
                        address: 'Sunnybank 4109',
                        filter: ['secondary']
                    },
                    {
                        name: 'Carinity Education — Southside',
                        type: 'Government',
                        age: '7-12',
                        edu: 'CoEd',
                        address: 'Sunnybank 4109',
                        filter: ['secondary', 'private']
                    },
                ],
                parks:[
                    {
                        name: 'D.M. Henderson Park',
                        address: '434 McCullough Street',
                        descr: 'Access & car park, barbecue (electric), basketball key and BMX facility, booking site, cricket club facility, dog off-leash area, Macgregor Scout Den, outdoor fitness/exercise station, netball club facility, performance space, picnic area/shelter, playground, public toilet, restoration site, shared pathway network, Sunnybank Community & Sports Club, Sunnybank Rugby Union Club facility, Wi-Fi',
                        imgs: ['macgregor/macgregor_dm_henderson_park.jpg', 'macgregor/macgregor_dm_henderson_park1.jpg']
                    },
                    {
                        name: 'Delfin Street Park',
                        address: '65 Delfin Drive',
                        descr: 'Playground, water (bubbler)',
                        imgs: ['macgregor/macgregor_delfin_street_park.jpg', 'macgregor/macgregor_delfin_street_park1.jpg']
                    },
                    {
                        name: 'Delphin Drive Park',
                        address: '487 Mains Road',
                        descr: 'Shared pathway',
                        imgs: ['macgregor/macgregor_delphin_drive_park.jpg', 'macgregor/macgregor_delphin_drive_park1.jpg']
                    },
                    {
                        name: 'Mains Road Park',
                        address: '3 Delphin Drive',
                        descr: 'Shared pathway',
                        imgs: ['macgregor/macgregor_mains_road_park.jpg', 'macgregor/macgregor_mains_road_park1.jpg']
                    },
                    {
                        name: 'Springfield Street Park',
                        address: '103 Springfield Street',
                        descr: 'Bikeway (Springfield Street, Damon Street), seating',
                        imgs: ['macgregor/macgregor_springfield_street_park.jpg', 'macgregor/macgregor_springfield_street_park1.jpg']
                    },
                    {
                        name: 'Whipbird Park (Springfield Street Park, Whip-Bird Park)',
                        address: '434 McCullough Street',
                        descr: 'Barbecue (electric), bikeway, picnic area/shelter, playground, restoration site, water (bubbler/tap)',
                        imgs: ['macgregor/macgregor_whipbird_park.jpg', 'macgregor/macgregor_whipbird_park1.jpg']
                    }
                ],
                transport: {
                    'Upper Mount Gravatt':['4', '21', '21', '7'],
                    'Nathan':['7', '33', '44', '15'],
                    'Robertson':['4', '28', '28', '9'],
                    'Sunnybank':['5', '22', '32', '10'],
                    'Eight Mile Plains':['6', '29', '34', '10'],
                },
                places: [
                    ['Calamvale', '655,000', 'calamvale'],
                    ['Moorooka', '762,000', 'moorooka'],
                    ['Wishart', '823,000', 'wishart'],
                ]
            },
            'calamvale': {
                title: 'Calamvale (Karawatha)',
                descr: `Calamvale, a residential suburb, is 17 km south of central Brisbane. It was named after the Calam family whose homestead site is now occupied by the Calamvale Hotel. In the early 1970s James Calam was the district's oldest European resident, and his son was active in forming a local progress association and having a hall built`,
                params: ['655,000', '1.16', '3.8', '3'],
                lifestyle:`Its really central to everything you need. The Local schools are great and the Brisbane city buses come very regularly.
                Overall Calamvale is a sought after place to live. Calamvale is a great place to live and over the next few years there should be good capital growth for property owners.
                An eco-friendly feature of Calamvale is the Golden Pond Wetlands attached to Calamvale Creek.
                A natural creek (part of a longer channel known as Scrubby Creek, but locally known as Calamvale Creek) and a riparian wetland run through the lower part of Calamvale. In the late 1990s, two constructed wetlands relying on storm water runoff were built upstream of the creek on each side of Golden Avenue. They are known as the Golden Pond wetlands.
                The Calamvale wetlands and creek provide a home and a retreat for ducks, egrets, cormorants, spoonbills, herons, water dragons, turtles, eels, and a large number of other wildfowl and animals`,
                schools: [
                    {
                        name: 'Calamvale Special School ',
                        type: 'Special',
                        age: 'Prep-12',
                        edu: 'CoEd',
                        address: 'Calamvale 4116',
                        filter: ['primary', 'secondary']
                    },
                    {
                        name: 'Algester State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Algester 4115',
                        filter: ['primary']
                    },
                    {
                        name: 'Runcorn Heights State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Runcorn 4113',
                        filter: ['primary']
                    },
                    {
                        name: 'Sunnybank Hills State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Sunnybank Hills 4109',
                        filter: ['primary']
                    },
                    {
                        name: 'Calamvale Community College',
                        type: 'Combined',
                        age: 'Prep-12',
                        edu: 'CoEd',
                        address: 'Calamvale 4116',
                        filter: ['primary', 'secondary']
                    },
                    {
                        name: 'Stretton State College',
                        type: 'Combined',
                        age: 'Prep-12',
                        edu: 'CoEd',
                        address: 'Stretton 4116',
                        filter: ['primary', 'secondary']
                    },
                    {
                        name: 'St Stephen\'s School',
                        type: 'Private',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Algester 4115',
                        filter: ['primary', 'private']
                    },
                    {
                        name: 'The Spot Academy',
                        type: 'Private',
                        age: 'Prep-12',
                        edu: 'CoEd',
                        address: 'Parkinson 4115',
                        filter: ['secondary', 'private']
                    },
                    {
                        name: 'Wisdom College',
                        type: 'Combined',
                        age: 'Prep-9',
                        edu: 'CoEd',
                        address: 'Calamvale 4116',
                        filter: ['secondary', 'private']
                    }
                ],
                parks:[
                    {
                        name: 'Scrubby Creek Recreation Reserve',
                        address: '50 Hashim Place',
                        descr: '',
                        imgs: ['calamvale/calamvale_scrubby_creek_recreation_reserve.jpg', 'calamvale/calamvale_scrubby_creek_recreation_reserve1.jpg']
                    },
                    {
                        name: 'Acacia Forest Park',
                        address: '152 Acacia Road',
                        descr: '',
                        imgs: ['calamvale/calamvale_forest_park.jpg', 'calamvale/calamvale_forest_park1.jpg']
                    },
                    {
                        name: 'Karawatha Forest Park',
                        address: '149 Acacia Road',
                        descr: 'Forest information, car parking, nature play playground, toilets (disabled), shelters, picnic tables, electric barbecues and a drinking fountain',
                        imgs: ['calamvale/calamvale_acacia_forest_park.jpg', 'calamvale/calamvale_acacia_forest_park1.jpg']
                    },
                ],
                transport: {
                    'Stretton':['4', '26', '34', '12'],
                    'Drewvale':['5', '40', '1,39', '15'],
                    'Parkinson':['5', '32', '39', '12'],
                    'Algester':['6', '29', '39', '12'],
                    'Runcorn':['9', '28', '1,6', '21'],
                    'Sunnybank Hills':['5', '9', '41', '12']
                },
                places: [
                    ['Parkinson', '720,000', 'parkinson'],
                    ['Moorooka', '762,000', 'moorooka'],
                    ['Macgregor', '745,000', 'macgregor'],
                ]
            },
            'chermside': {
                title: 'Chermside',
                descr: `Chermside (or Marchant), a residential suburb on Gympie Road, is 11 km north of central Brisbane. Australia's first drive-in shopping centre, with 700 car spaces, opened in Chermside in 1957.
                    The Chermside area was originally known as Downfall Creek, the suburb's present northern boundary. Seeking a more attractive name, residents decided on Chermside when it was announced that Sir Herbert Chermside would become Governor of Queensland in 1902, with the name formally adopted the following year`,
                params: ['700,000', '14.61', '3', '2'],
                lifestyle:`"The area around the Chermside Markets, just north of the shopping centre has a good neighbourhood vibe, You will often see people out and about and everyone always says hello. It is only a short walk to the shopping centre and the bus service is regular from the bus station, though a little more unreliable as you go further north. Gympie Road does get extremely busy at peak hour, but it thins out again by 8:30am.
    There is a cricket club that plays at Marchant Park, and you can often hear the sounds of the game during the weekends. Marchant Park is also great for exercise and offers really good facilities. If you are a hockey player, there is a very good club in the area.
    Restaurants can be hit and miss around the area, but the Kedron Wavell RSL is excellent, with great values meals and drinks. There are a number of new restaurants opening up around the shopping centre and there is a brilliant Thai restaurant behind the shopping centre and across the road from the RSL"`,
                schools: [
                    {
                        name: 'Geebung Special School',
                        type: 'Special',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Geebung 4034',
                        filter: ['primary']
                    },
                    {
                        name: 'Craigslea State High School',
                        type: 'Government',
                        age: '7-12',
                        edu: 'CoEd',
                        address: 'Chermside West 4032',
                        filter: ['secondary']
                    }
                ],
                parks:[
                    {
                        name: 'Alcheringa Place Park',
                        address: '14 Alcheringa Place',
                        descr: '',
                        imgs: ['chermside/chermside_alcheringa_place_park.jpg', 'chermside/chermside_alcheringa_place_park1.jpg']
                    },
                    {
                        name: 'Didbrook Street Park',
                        address: '151 Didbrook Street',
                        descr: '',
                        imgs: ['chermside/chermside_didbrook_street_park.jpg', 'chermside/chermside_didbrook_street_park1.jpg']
                    },
                    {
                        name: 'John Henley Park',
                        address: '5 Remus Street',
                        descr: '',
                        imgs: ['chermside/chermside_john_henley_park.jpg', 'chermside/chermside_john_henley_park1.jpg']
                    },
                    {
                        name: 'Lawrence Close Park',
                        address: '19 Lawrence Close',
                        descr: '',
                        imgs: ['chermside/chermside_lawrence_close_park.jpg', 'chermside/chermside_lawrence_close_park1.jpg']
                    },
                    {
                        name: 'The Johnson Flora Reserve',
                        address: '78 Lindfield Circuit',
                        descr: '',
                        imgs: ['chermside/chermside_the_johnson_flora_reserve.jpg', 'chermside/chermside_the_johnson_flora_reserve1.jpg']
                    },
                    {
                        name: 'Western Outlook Park',
                        address: '91 Davrod Street',
                        descr: '',
                        imgs: ['chermside/chermside_western_outlook_park.jpg']
                    }
                ],
                transport: {
                    'Chermside South':['4', '7', '7', '2'],
                    'Kedron':['5', '5', '21', '6'],
                    'Wavell Heights':['4', '17', '24', '8'],
                    'Chermside West':['9', '27', '27', '10'],
                    'Aspley':['9', '17', '39', '11'],
                    'Geebung':['5', '9', '31', '8']
                },
                places: [
                    ['Northgate', '810,000', 'northgate'],
                    ['Bracken Ridge', '570,000', 'bracken'],
                    ['McDowall', '730,000', 'mcdowall'],
                ]
            },
            'gabba': {
                title: 'The Gabba',
                descr: `The Gabba (or Highgate Hill), an inner Brisbane suburb, is two km south-east of the city centre and overlooks the St Lucia Reach of the Brisbane River. As it is separated from the city by South Brisbane, several decades of the town's first settlement period passed before there was any housing at Highgate Hill. It is thought that an early resident, George Wilson (whose house was at the top of Bellevue Street) named the locality Highgate Hill`,
                params: ['1,300,000', '11.51', '2.2', '7'],
                lifestyle:`The Gabba is a glorious place in the inner suburbs of Brisbane. The views of the city at night are really pretty and it's a convenient spot to almost anywhere in Brisbane. West End is also right next door with its plethora of boutique fashion and lifestyle shops.
                A comfortable walk to West End and Southbank/City. Loads of restaurants to choose from and leafy parks on the river to kickback and relax. The people in the street are very friendly and its lovely to be able to stop and have a chat.
                At the highest point of the Gabba is a small park which boasts excellent views of the city and surrounding hills. It's particularly popular during summer due to the cool breezes.
                Lyons Playground Park, also known as Paradise Park, is a well equipped small park that also has a community garden.
                The Brydon Street park leads into a gully down to the river and is what remains of the bushland that was subject to protest in 2002`,
                schools: [
                    {
                        name: 'West End State School ',
                        type: 'Combined',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'West End 4101',
                        filter: ['primary']
                    }
                ],
                parks:[
                    {
                        name: 'Buranda Playground Park',
                        address: '34 Sword Street',
                        descr: 'Pathway, picnic shelter, playground',
                        imgs: []
                    },
                    {
                        name: 'Carl Street Park',
                        address: '43 Carl Street',
                        descr: 'Path, seats, water (bubbler/tap/dog bowl)',
                        imgs: ['gabba/the_gabba_carl_street_park.jpg']
                    },
                    {
                        name: 'Deshon Street Park',
                        address: '104 Deshon Street',
                        descr: 'Seating, car park',
                        imgs: ['gabba/the_gabba_deshon_street_park.jpg', 'gabba/the_gabba_deshon_street_park1.jpg']
                    },
                    {
                        name: 'Dibley Street Park',
                        address: '22 Dibley Street',
                        descr: 'Pathway',
                        imgs: []
                    },
                    {
                        name: 'Faversham Street Park',
                        address: '33 Faversham Street',
                        descr: 'Barbecue (electric), pathway, picnic area, playground, water (bubbler/taps)',
                        imgs: ['gabba/the_gabba_faversham_street_park.jpg']
                    },
                    {
                        name: 'Jurgens Street Park',
                        address: '45 Logan Road',
                        descr: '',
                        imgs: ['gabba/the_gabba_jurgens_street_park.jpg', 'gabba/the_gabba_jurgens_street_park1.jpg']
                    },
                    {
                        name: 'Leonard Street Park',
                        address: '30 Annie Street, corner Leonard Street',
                        descr: '',
                        imgs: ['gabba/the_gabba_leonard_street_park.jpg', 'gabba/the_gabba_leonard_street_park1.jpg']
                    },
                    {
                        name: 'Preston Street Park',
                        address: '21 Preston Street',
                        descr: 'The Pocket Community Garden, pathway',
                        imgs: ['gabba/the_gabba_preston_street_park.jpg', 'gabba/the_gabba_preston_street_park1.jpg']
                    },
                    {
                        name: 'Woolloongabba Place Park',
                        address: '868 Main Street',
                        descr: 'Seating, water, (bubbler — wheelchair accessible)',
                        imgs: ['gabba/the_gabba_woolloongabba_place_park.jpg', 'gabba/the_gabba_woolloongabba_place_park1.jpg']
                    }
                ],
                transport: {
                    'Dutton Park':['2', '8', '17', '5'],
                    'St Lucia':['15', '54', '35', '15'],
                    'Buranda':['8', '25', '38', '15'],
                    'Woolloongabba':['6', '21', '29', '8'],
                    'West End':['4', '12', '13', '3'],
                    'South Bank':['5', '16', '16', '5'],
                    'South Brisbane':['5', '16', '20', '7']
                },
                places: [
                    ['Central', '1,100,000', 'central'],
                    ['st Lucia', '1,500,000', 'lucia'],
                    ['Tennyson', '970,000', 'tennyson'],
                ]
            },
            'hamilton': {
                title: 'Hamilton',
                descr: `Hamilton, an industrial and residential suburb on the north side of the Brisbane River near its entry to Moreton Bay, is 11 km north-east of Central Brisbane. It is thought that the name was derived from an Aboriginal word referring to a place of tortoises, and it was given to the railway station when the line opened in 1897`,
                params: ['1,560,000', '29.71', '2.1', '18'],
                lifestyle:`This suburb lies in the shadow of the Brisbane airport.
                Hamilton has a historical trail which was designed on behalf of the Pinkenba Community Association and the Port of Brisbane with help from Brisbane City Council Neighbourhood planning team.
                Numerous development projects were proposed for the area, including residential developments and an immigration detention centre. The suburb contains a small number of detached houses (primarily of weatherboard construction), local store, pub and industrial precincts.
                There are no schools in Hamilton. The nearest government primary school is Hamilton State School in Hamilton to the south-west. The nearest government secondary school is Aviation High in Hendra to the west`,
                schools: [
                    {
                        name: 'Hendra State School',
                        type: 'Combined',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Hendra 4011',
                        filter: ['primary']
                    },
                    {
                        name: 'Hamilton State School',
                        type: 'Combined',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Hamilton 4007',
                        filter: ['primary']
                    },
                ],
                parks:[
                    {
                        name: 'Parkside Circuit Park',
                        address: '25 Parkside Circuit',
                        descr: 'Water (bubbler/tap)',
                        imgs: ['hamilton/hamilton_parkside_circuit_park.jpg', 'hamilton/hamilton_parkside_circuit_park1.jpg']
                    },
                    {
                        name: 'Cameron Rocks Reserve',
                        address: '79 Kingsford Smith Drive',
                        descr: 'Barbecue (electric), fishing platform and fish cleaning table, memorial precinct, picnic area/shelter and water (bubbler/tap)',
                        imgs: ['hamilton/hamilton_cameron_rocks_reserve.jpg', 'hamilton/hamilton_cameron_rocks_reserve1.jpg']
                    },
                    {
                        name: 'Hamilton Park',
                        address: '471 Kingsford Smith Drive',
                        descr: '',
                        imgs: ['hamilton/hamilton_hamilton_park.jpg', 'hamilton/hamilton_hamilton_park1.jpg']
                    },
                    {
                        name: 'Hercules Street Park',
                        address: '40 Remora Road',
                        descr: 'Bike training facility, car park, dog off-leash area, pathway network, picnic area/shelter, playground with water play feature, public toilet',
                        imgs: ['hamilton/hamilton_hercules_street_park.jpg', 'hamilton/hamilton_hercules_street_park1.jpg']
                    },
                    {
                        name: 'Jackson Street Park',
                        address: '94-98 Jackson Street',
                        descr: '',
                        imgs: ['hamilton/hamilton_hercules_street_park.jpg', 'hamilton/hamilton_hercules_street_park1.jpg']
                    },
                    {
                        name: 'Northshore Riverside Park',
                        address: '305 Macarthur Avenue',
                        descr: 'Barbecue (electric), beach, car park, ferry terminal, kiosk, outdoor fitness/exercise station, picnic area/shelter, playground, promenade, toilet',
                        imgs: ['hamilton/hamilton_northshore_riverside_park.jpg', 'hamilton/hamilton_northshore_riverside_park1.jpg']
                    },
                    {
                        name: 'Old Shoreline Park ',
                        address: '351 Macarthur Avenue',
                        descr: 'Barbecue (electric), pathway, dog off-leash area',
                        imgs: []
                    }
                ],
                transport: {
                    'Eagle Farm':['9', '36', '36', '10'],
                    'Murarrie':['10', '30', '1,20', '23'],
                    'Hemmant':['10', '59', '1,35', '28'],
                    'Brisbane Airport':['8', '1,4', '1,18', '21'],
                    'Lytton':['14', '1,26', '2,19', '38'],
                    'Port Of Brisbane':['15', '-', '3,35', '54'],
                    'Moreton Bay':['16', '1,4', '2,43', '47']
                },
                places: [
                    ['Wynnum-Manly', '600,000', 'wynnum'],
                    ['Lytton', '555,000', 'lytton'],
                    ['Morningside', '891,000', 'morningside'],
                ]
            },
            'wynnum': {
                title: 'Wynnum-Manly',
                descr: `Wynnum-Manly, a post World War II suburb, is 13 km east of central Brisbane. It was gazetted as a separate suburb in 1975. The railway line to Wynnum runs in a northerly loop through Lindum and Wynnum North, leaving Wynnum-Manly adrift from rail transport. Lindum is now included in Wynnum-Manly`,
                params: ['600,000', '14.42', '3.5', '3'],
                lifestyle:`Wynnum-Manly sits inland from the coastal line of Wynnum. A five minute drive will see you strolling along the jetty and not for one moment missing out on all that Wynnum alone has to offer by way of parks and restaurants. In fact, if you choose Wynnum-Manly, not only are you closer to many sporting venues such as Active Arena sports, the BMX track and many bike paths but you are also benefiting from a more direct access in to the City.
                Housing is also considered more affordable but non-the-less attractive as its counterparts in Wynnum and Manly. Come the turning of the seasons, you are met with a myriad of trees exploding in colour and fragrance, from the Frangipanies to the stunning Jacarandas which line the roads and streets.
                Relaxed lifestyle, country-town feel. So there's no big westfields with david jones or myer here, but there's all the big supermarkets and boutique retail outlets. Take the kids down to the big park down on the water or go for bike ride or run along the bay. Enough restaurants to keep you happy, and many fantastic take out places too. House prices are more affordable and there's a great variety to choose from. One might think the commute to the CBD is a bit long (approx 40mins), but the average person in Sydney does the same distance and further every day`,
                schools: [
                    {
                        name: 'Wynnum West State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Wynnum West 4178',
                        filter: ['primary']
                    },
                    {
                        name: 'Wynnum State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Wynnum 4178',
                        filter: ['primary']
                    },
                    {
                        name: 'Manly West State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Manly West 4179',
                        filter: ['primary']
                    },
                    {
                        name: 'Guardian Angels\' Primary School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Wynnum 4178',
                        filter: ['primary']
                    },
                    {
                        name: 'Moreton Bay College',
                        type: 'Combined',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Manly West 4179',
                        filter: ['primary', 'secondary', 'private']
                    },
                    {
                        name: 'Iona College',
                        type: 'Combined',
                        age: '5-12',
                        edu: 'CoEd',
                        address: 'Wynnum West 4178',
                        filter: ['primary', 'secondary', 'private']
                    },
                    {
                        name: 'Moreton Bay Boys College',
                        type: 'Combined',
                        age: 'Prep-12',
                        edu: 'CoEd',
                        address: 'Manly West 4179',
                        filter: ['primary', 'secondary', 'private']
                    },
                    {
                        name: 'Brisbane Bayside State College',
                        type: 'Government',
                        age: '7-12',
                        edu: 'CoEd',
                        address: 'Wynnum West 4178',
                        filter: ['secondary']
                    }
                ],
                parks:[
                    {
                        name: 'Alter Street Park',
                        address: '3 Plaza Street',
                        descr: '',
                        imgs: ['wynnum/wynnum-manly_alter_street_park.jpg', 'wynnum/wynnum-manly_alter_street_park1.jpg']
                    },
                    {
                        name: 'Banks Crescent Park',
                        address: '30 Balnave Street',
                        descr: '',
                        imgs: ['wynnum/wynnum-manly_banks_crescent_park.jpg', 'wynnum/wynnum-manly_banks_crescent_park1.jpg']
                    },
                    {
                        name: 'Clare Avenue Park',
                        address: '34 Clare Avenue, off Sandy Camp Road',
                        descr: '',
                        imgs: ['wynnum/wynnum-manly_clare_avenue_park.jpg', 'wynnum/wynnum-manly_clare_avenue_park1.jpg']
                    },
                    {
                        name: 'Crawford Road Park',
                        address: '79 Crawford Road',
                        descr: '',
                        imgs: []
                    },
                    {
                        name: 'Durrington Park',
                        address: '21 Michael Street',
                        descr: 'Playground — shaded, picnic area/shelter, barbecue, wheelchair access, shared pathway',
                        imgs: ['wynnum/wynnum-manly_durrington_park.jpg', 'wynnum/wynnum-manly_durrington_park1.jpg']
                    },
                    {
                        name: 'Edward Kelk Park',
                        address: '240 Sibley Road',
                        descr: 'Playground, wetlands, seats',
                        imgs: []
                    },
                    {
                        name: 'Evelyn Road Park',
                        address: '180 Kianawah Road',
                        descr: 'Dog off-leash area, pathway, water (bubbler/tap)',
                        imgs: ['wynnum/wynnum-manly_evelyn_road_park.jpg', 'wynnum/wynnum-manly_evelyn_road_park1.jpg']
                    },
                    {
                        name: 'Kianawah Road Park',
                        address: '1908 Wynnum Road',
                        descr: 'Bayside BMX Club, Brisbane Bayside Steam Railway, Model Car Racing facility, Wynnum Vikings AFL facility, playground. Barbecues, basketball court (full), car parking, flying fox, picnic area/shelters, playground (shaded), seats, toilets, pathway network, water (bubbler/tap)',
                        imgs: []
                    }
                ],
                transport: {
                    'Manly West':['6', '38', '38', '12'],
                    'Tingalpa':['8', '48', '48', '23'],
                    'Hemmant':['7', '53', '53', '15'],
                    'Wynnum':['7', '38', '38', '12'],
                    'Lytton':['5', '54', '1,1', '11'],
                },
                places: [
                    ['Hamilton', '1,560,000', 'hamilton'],
                    ['Lytton', '555,000', 'lytton'],
                    ['Morningside', '891,000', 'morningside'],
                ]
            },
            'lytton': {
                title: 'Lytton',
                descr: 'Lytton, an industrial suburb, is on the south-east bank of the Brisbane River at its seaward end. It is 13 km north-east of central Brisbane, but considerably further by road or railway. It was probably named after Edward Bulwer Lytton (1803-73), Secretary of State for the Colonies, 1858-59',
                params: ['600,000', '-', '-', '6'],
                lifestyle:`"Although Lytton was once a town, it is now primarily commercial and industrial. It shares the same postcode as the Port of Brisbane. Ampol owns and operates the Lytton Oil Refinery in the north east of the suburb. The plant could produce 109,000 barrels per day in 2012.
                Lytton's seaward limit was an irregular line that passes north-westerly through the present oil refinery site, shown in modern street directories as the boundary between Lytton and Port of Brisbane. Beyond that line were mangroves and White Island, followed by a boat passage, Fisherman Island(s), interspersed with mud banks and mangroves, open water and Bishop Island. Reclamation works since the 1960s have joined all the landforms adjacent to the river.
                Australia's first Australian-owned oil refinery, Ampol, was opened east of the quarantine site in 1965. That, and the land reclamation for downstream port facilities, required a railway line from Lindum to the refinery (1966) and a further extension in 1980 to the reclaimed Fisherman Island(s).
                Fort Lytton was declared a national park in 1988 and there is a visitor's centre on Fisherman Island. Fort Lytton, Lytton (signal) Hill and the former quarantine station are listed on the Queensland heritage register"`,
                schools: [
                    {
                        name: 'Wondall Heights State School',
                        type: 'Government',
                        age: 'Prep-6',
                        edu: 'CoEd',
                        address: 'Manly West 4179',
                        filter: ['primary']
                    },
                    {
                        name: 'Hemmant Flexible Learning Centre',
                        type: 'Special',
                        age: '7-12',
                        edu: 'CoEd',
                        address: 'Hemmant 4174',
                        filter: ['secondary', 'private']
                    }
                ],
                parks:[
                    {
                        name: 'Constellation Way Park',
                        address: '197 Pritchard Street',
                        descr: 'Playground, seating',
                        imgs: ['lytton/lytton_constellation_way_park.jpg', 'lytton/lytton_constellation_way_park1.jpg']
                    },
                    {
                        name: 'Lytton Road Park',
                        address: '1665 Lytton Road',
                        descr: '',
                        imgs: ['lytton/lytton_lytton_road_park.jpg', 'lytton/lytton_lytton_road_park1.jpg']
                    },
                    {
                        name: 'Pritchard Street Park',
                        address: '113 Pritchard Street',
                        descr: '',
                        imgs: ['lytton/lytton_pritchard_street_park.jpg', 'lytton/lytton_pritchard_street_park1.jpg']
                    },
                    {
                        name: 'Sandy Camp Park',
                        address: '115 Sandy Camp Road',
                        descr: '',
                        imgs: ['lytton/lytton_sandy_camp_pa1rk.jpg', 'lytton/lytton_sandy_camp_park.jpg']
                    },
                ],
                transport: {
                    'Hemmant':['5', '43', '43', '11'],
                    'Wynnum':['6', '44', '44', '12'],
                    'Tingalpa':['8', '48', '48', '23'],
                    'Wynnum West':['7', '1,19', '1,2', '19'],
                    'Pinkenba':['11', '6,26', '2,19', '39'],
                    'Port Of Brisbane':['7', '', '1,35', '22'],
                },
                places: [
                    ['Wynnum-Manly', '600,000', 'wynnum'],
                    ['Morningside', '891,000', 'morningside'],
                    ['Chandler', '1,600,000', 'chandler'],
                ]
            }
        }


        let obj = districts[district]
        if(!obj) {
            window.location.href = 'https://' + window.location.hostname + '/district/?enoggera'
        }

        document.querySelectorAll('.district_name').forEach(item => {
            item.innerText = obj.title
        })
        document.querySelector('.pd_explore_text p').innerText = obj.descr
        document.querySelectorAll('.pd_card_heading').forEach((item, i) => {
            switch (i) {
                case 0:
                    item.innerText = `$${obj.params[0]}`
                    break
                case 1:
                    item.innerText = `${obj.params[1]}%`
                    break
                case 2:
                    item.innerText = `${obj.params[2]}%`
                    break
                case 3:
                    item.innerText = `${obj.params[3]}`
                    break
                default:
                    console.log('error switch')
            }
        })
        document.querySelector('.pd_lifestyle_text p').innerHTML = obj.lifestyle
        obj.schools.forEach(item => {
            let filter = ''
            item.filter.forEach(f => {
                filter += `${f} `
            })

            document.querySelector('.pd_school_tab .tabcontent').insertAdjacentHTML('beforeend', `
                <div class="pst_row" data-filter="${filter}">
                    <div class="pst_row_desc">
                        <div class="pst_row_desc_text">${item.name}</div>
                        <div class="pst_row_desc_title">${item.address}</div>
                    </div>
                    <div class="pst_row_btn">
                        <div class="pst_row_btn_item pst_row_btn_blue">${item.age}</div>
                        <div class="pst_row_btn_item pst_row_btn_yellow">${item.edu}</div>
                        <div class="pst_row_btn_item pst_row_btn_black">${item.type}</div>
                    </div>
                </div>
            `)
        })

        obj.places.forEach(item => {
            document.querySelector('.pb_similar_places .pb_sp_wrapper').insertAdjacentHTML('beforeend', `
                <div class="pb_sp_item">
                    <div class="pb_sp_item_image">
                        <img src="https://conversionratestore.github.io/projects/hantergalloway/img/${item[2]}/${item[2]}.jpg" alt="">
                    </div>
                    <div class="pb_sp_item_title">${item[0]}</div>
                    <div class="pb_sp_item_desc">Median house price</div>
                    <div class="pb_sp_item_price">$${item[1]}</div>
                    <div class="pb_sp_item_btn">
                        <a href="/district/?${item[2]}" title="" class="btn_yellow">View More</a>
                    </div>
                </div>
            `)
        })

        document.querySelector('.dark_bg').addEventListener('click', function () {
            this.style.display = 'none'
        })

        document.querySelector('.pd_explore_image').insertAdjacentHTML('afterbegin', `
              <div class="pd_explore_image_1 item" style="background-image: url('https://conversionratestore.github.io/projects/hantergalloway/img/${district}/${district}.jpg');"></div>
              <div class="pd_explore_image_2 item" style="background-image: url('https://conversionratestore.github.io/projects/hantergalloway/img/${district}/${district}1.jpg');"></div>
              <div class="pd_explore_image_3 item" style="background-image: url('https://conversionratestore.github.io/projects/hantergalloway/img/${district}/${district}2.jpg');"></div>
        `)

        document.querySelector('.pd_gallery_wrapper').insertAdjacentHTML('afterbegin', `
            <div class="pd_gallery_item" style="background-image: url(https://conversionratestore.github.io/projects/hantergalloway/img/${district}/${district}3.jpg);"></div>
            <div class="pd_gallery_item" style="background-image: url(https://conversionratestore.github.io/projects/hantergalloway/img/${district}/${district}4.jpg);"></div>
            <div class="pd_gallery_item" style="background-image: url(https://conversionratestore.github.io/projects/hantergalloway/img/${district}/${district}5.jpg);"></div>
            <div class="pd_gallery_item" style="background-image: url(https://conversionratestore.github.io/projects/hantergalloway/img/${district}/${district}6.jpg);"></div>
            <div class="pd_gallery_item" style="background-image: url(https://conversionratestore.github.io/projects/hantergalloway/img/${district}/${district}7.jpg);"></div>
            <div class="pd_gallery_item" style="background-image: url(https://conversionratestore.github.io/projects/hantergalloway/img/${district}/${district}8.jpg);"></div>
        `)
        let half = Math.floor(obj.parks.length/2)
        obj.parks.forEach((item, i) => {
            if(item.imgs.length !== 0) {
                let block = `
                    <div class="pb_nap_slider_item">
                        <div class="pb_nap_slider_image">
                            <img src="https://conversionratestore.github.io/projects/hantergalloway/img/${item.imgs[0]}" alt="park">
                        </div>
                        <div class="pb_nap_slider_desc">
                            <div class="pb_nap_slider_title">
                                ${item.name}
                            </div>
                            <div class="pb_nap_slider_subtitle">
                                ${item.address}
                            </div>
                            <div class="pb_nap_slider_text">
                                ${item.descr}
                            </div>
                        </div>
                    </div>
                `

                if(i < half) {
                    document.querySelector('.pb_nap_slider_left').insertAdjacentHTML('beforeend', block)

                } else {
                    document.querySelector('.pb_nap_slider_right').insertAdjacentHTML('beforeend', block)
                }
            }
        })

        document.querySelectorAll('.tablink').forEach(item => {
            item.addEventListener('click', function () {
                if (!item.classList.contains('active')) {
                    let type = item.getAttribute('data-type')
                    document.querySelectorAll('.pd_school_tab .pst_row').forEach(row => {
                        if(type !== 'all' && !row.getAttribute('data-filter').includes(type)) {
                            row.style.display = 'none'
                        } else {
                            row.style.display = 'flex'
                        }
                    })
                    document.querySelector('.tablink.active').classList.remove('active')
                    item.classList.add('active')
                }
            })
        })

        for (let point in obj.transport) {
            document.querySelector('#endpoint').insertAdjacentHTML('afterbegin', `<option
                data-time1="${obj.transport[point][0]}"
                data-time2="${obj.transport[point][1]}"
                data-time3="${obj.transport[point][2]}"
                data-time4="${obj.transport[point][3]}">
                ${point}</option>`)

            if(document.querySelectorAll('#endpoint option').length === 1) {
                document.querySelectorAll('.pb_transport_text').forEach((item, i) => {
                    let time = `${obj.transport[point][i]} mins`
                    if (obj.transport[point][i] === '') {
                        time = '-'
                    } else if(obj.transport[point][i].split(',').length === 2) {
                        time = `${obj.transport[point][i].split(',')[0]} hour ${obj.transport[point][i].split(',')[1]} mins`
                    }
                    item.innerText = time
                })
            }
        }

        document.querySelector('#endpoint').addEventListener('change', function (e) {
            let t = [e.target.options[e.target.selectedIndex].dataset.time1];
            t.push(e.target.options[e.target.selectedIndex].dataset.time2);
            t.push(e.target.options[e.target.selectedIndex].dataset.time3);
            t.push(e.target.options[e.target.selectedIndex].dataset.time4);

            document.querySelectorAll('.pb_transport_text').forEach((item, i) => {
                let time = `${t[i]} mins`
                if (t[i] === '') {
                    time = '-'
                } else if(t[i].split(',').length === 2) {
                    time = `${t[i].split(',')[0]} hour ${t[i].split(',')[1]} mins`
                }
                item.innerText = time
            })
        })


    </script>

    <script src="https://unpkg.com/imask"></script>
    <script>
        var input_masks = {
            income: IMask(document.querySelector('div[data-field-name="income"] input'), {
                mask: Number,
                thousandsSeparator: ',',
            }),
            deposit: IMask(document.querySelector('div[data-field-name="deposit"] input'), {
                mask: Number,
                thousandsSeparator: ',',
            }),
        };
    </script>
<?php

get_footer();

