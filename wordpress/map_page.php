<?php
/*

Template name: Map Page

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
            padding: 12px 16px !important;
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
            box-shadow: 0 6px 12px rgba(43, 43, 43, 0.15);
            border-radius: 33px;
            margin: 64px auto 0;
            padding: 12px 20px 10px;
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

        /* /form-wrapper */

        /* text-inputs */
        .calculator-wrapper .input-box input[type="text"] {
            height: 40px;
            padding: 2px 0 0 20px;
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
                padding: 10px 0 9px;
                font-weight: bold;
                font-size: 14px;
                /*font-size: clamp(14px, 3vw, 17px);*/
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
                padding: 10px 0 9px;
                font-weight: bold;
                font-size: 14px;
                /*font-size: clamp(14px, 3.5vw, 17px);*/
                width: 100%;
            }
        }
        @media (max-width: 425px) {
            .calculator-wrapper button.calculate-action::after {
                display: none!important;
            }
        }

        /*custom style*/
        .map-main .container {
            margin: 0 auto;
            max-width: 1200px;
            width: 89%;
        }

        .map-wrapper {
            background-color: #fff;
            padding-bottom: 80px;
        }

        .map-wrapper__inner {
            display: flex;
            position: relative;
            align-items: center;
        }

        .map {
            width: 65%;
        }

        .map svg {
            width: 100%;
        }

        .map-text {
            width: 35%;
        }

        .map-text h1 {
            position: relative;
            font-style: normal;
            font-weight: 800;
            font-size: 72px;
            line-height: 100%;
            color: #262626;
        }

        .map-text h1::after {
            content: url("<?php echo get_template_directory_uri(); ?>/images/arrow.svg");
            position: absolute;
            bottom: -10px;
            right: -60px;
        }

        #et-main-area {
            margin-top: 0;
        }

        .map-text span {
            color: #FDB948;
        }

        .map-text .text--choose {
            font-weight: bold;
            font-size: 20px;
            line-height: 110%;
            color: #262626;
            margin: 20px 0 40px 0;
        }

        .map-text .text--know {
            font-weight: normal;
            font-size: 13px;
            line-height: 150%;
            color: #676767;
            margin: 40px 0 20px;
        }

        .btn {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            font-size: 17px;
            font-weight: bold;
            line-height: 135%;
            color: #262626;
            background: #FDB948;
            box-shadow: 0 6px 12px rgba(43, 43, 43, 0.15);
            border: none;
            border-radius: 33px;
            padding: 14px 0;
            max-width: 400px;
            min-width: 335px;
            cursor: pointer;
        }

        .btn:hover {
            box-shadow: 0 6px 12px rgba(43, 43, 43, 0.10);
        }

        .btn.btn--yellow:hover {
            background-color: #ffc65b;
        }

        .map-text .btn {
            background: #FFFFFF;
            border: 2px solid #FDB948;
            color: #FDB948;
            padding: 14px 48px;
            min-width: 190px;
        }

        .modal {
            display: none;
            position: absolute;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: #fff;
        }

        .modal__inner {
            display: flex;
            position: relative;
            overflow: hidden;
        }

        .modal__close {
            position: absolute;
            top: 15px;
            right: 25px;
            cursor: pointer;
        }

        .area-image {
            width: 60%;
            background-color: #fff;
        }

        .area-image svg {
            position: absolute;
            left: -25%;
            top: -25%;
            transform: scale(2.5);
        }

        .area-text {
            position: relative;
            width: 40%;
            background: #262626;
            border-radius: 10px;
            padding: 30px;
        }

        .area-text h3 {
            font-weight: bold;
            font-size: 30px;
            color: #FFFFFF;
            text-align: center;
        }

        .area-text .description {
            margin: 41px 0 28px;
        }

        .distance {
            display: flex;
            justify-content: space-around;
            gap: 15px;
        }

        .distance .icon-wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 90px;
            height: 94px;
            background: #F9F9F9;
            border-radius: 5px;
            gap: 10px;
        }

        .distance .icon-wrapper p {
            color: #676767;
            margin: 0;
        }

        .icon-wrapper img {
            height: 25px;
            width: 25px;
        }

        .benefits {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        .benefits .benefit {
            display: flex;
            gap: 15px;
            margin-top: 30px;
            width: 48%;
        }

        .benefits .benefit p {
            margin: 0;
            font-weight: normal;
            font-size: 16px;
            color: #EEEEEE;
            line-height: 120%;
        }

        .benefit p.orange_color {
            font-weight: bold;
            padding-bottom: 2px;
        }

        .orange_color {
            color: #FDB948 !important;
        }

        .benefits .benefit img {
            width: 35px;
            max-width: 35px !important;
            height: 35px;
        }

        .area-text .btn {
            color: #FDB948;
            background: #262626;
            border: 2px solid #FDB948;
            margin: 20px auto 0;
            min-width: 213px;
        }

        /*.area-text h3 {*/
        /*    text-transform: capitalize;*/
        /*}*/

        .free-assessment {
            background: #262626;
        }

        .free-assessment__inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 57px 0;
        }

        .free-assessment__inner p {
            margin: 0;
        }

        .free-assessment__inner .btn {
            font-size: 17px;
        }

        .map-main {
            background-color: #F9F9F9;
        }

        .map-main .free-assessment p {
            color: #fff;
            font-style: normal;
            font-weight: bold;
            font-size: 30px;
        }

        .suburb-loan__wrapper {
            overflow-x:auto;
            margin-bottom: 155px;
        }

        .suburb-loan {
            padding: 120px 0;
        }

        .suburb-loan h2 {
            font-weight: bold;
            font-size: 40px;
            color: #262626;
            margin-bottom: 60px;
            text-align: center;
        }

        .suburb-loan__table {
            width: 100%;
            border-collapse: collapse;
        }

        .suburb-loan__table .table-headers {
            background-color: #262626;
            text-align: center;
        }

        /*.suburb-loan__table .table-headers th,*/
        /*.suburb-loan__table .table-headers td{*/
        /*    position: relative;*/
        /*    min-width: 125px;*/
        /*    white-space: nowrap;*/
        /*}*/

        .suburb-loan__table .table-headers th.th--active {
            text-align: left;
            font-weight: bold;
            padding: 20px 18px;
        }

        .suburb-loan__table .table-headers th.th--active::before{
            content: url("<?php echo get_template_directory_uri(); ?>/images/arrow-down.svg");
            position: absolute;
            display: block;
            right: 10px;
            top: 50%;
            margin-top: -7px;
        }

        .suburb-loan__table th:not(.suburb-loan__table th:last-child) {
            cursor: pointer;
        }

        .suburb-loan__table tr {
            border: .5px solid #EEEEEE;
        }

        .suburb-loan__table tr:not(.table-headers) {
            counter-increment: row-num;
        }

        .suburb-loan__table tr td:first-child::before {
            content: counter(row-num) ". ";
        }

        .suburb-loan__table th,
        .suburb-loan__table td {
            position: relative;
            padding: 20px;
        }

        .suburb-loan__table tr th:first-child,
        .suburb-loan__table tr td:first-child {
            width: 200px;
            min-width: 200px;
            max-width: 200px;
            word-break: break-all;
        }

        .suburb-loan__table tr th:last-child,
        .suburb-loan__table tr td:last-child {
            width: 200px;
            min-width: 150px;
            max-width: 200px;
            word-break: break-word;
        }

        .suburb-loan__table th {
            min-width: 135px;
            color: #fff;
            font-weight: normal;
            font-size: 13px;
            border: none;
        }

        .suburb-loan__table td {
            color: #262626;
            font-weight: normal;
            font-size: 13px;
            letter-spacing: 0.04em;
            text-transform: uppercase;
        }

        .suburb-loan__table td:not(td:first-child) {
            text-align: center;
        }

        .suburb-loan__table td a {
            font-weight: normal;
            font-size: 12px;
            color: #00D7FF;
            text-transform: none;
            text-decoration: underline;
        }

        .suburb-loan__table tr:not(.table-headers):nth-child(even) {
            background-color: #F9F9F9;
        }

        .suburb-loan__table tr:not(.table-headers):nth-child(odd) {
            background-color: #fff;
        }

        .suburb-loan table th.active {
            font-weight: bold;
        }

        .suburb-loan__table th:not(th:last-child)::after,
        .suburb-loan__table td:not(td:last-child)::after {
            content: '';
            display: block;
            position: absolute;
            width: .5px;
            height: 40px;
            background-color: #676767;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
        }

        .suburb-loan__table td:not(td:last-child)::after {
            background-color: #EEEEEE;
        }

        .map-main p {
            color: #F9F9F9;
            font-size: 13px;
            font-weight: normal;
            line-height: 150%;
            margin-bottom: 10px;
        }

        .map-main p.text--big {
            color: #FFFFFF;
            font-size: 16px;
            font-weight: bold;
            line-height: 110%;
            margin-bottom: 10px;
        }

        .map svg path[stroke="#676767"] {
            transition: all .3s ease;
            cursor: pointer;
        }

        /*.map svg path[stroke="#676767"]:hover {*/
        /*    fill: #FDB948;*/
        /*}*/

        .awwards {
            background-color: #fff;
        }

        .awwards__inner {
            max-width: 1022px;
            margin: 0 auto;
            padding: 120px 0 155px;
            text-align: center;
        }

        .awwards__inner p {
            color: #262626;
            font-weight: bold;
            font-size: 30px;
            margin-bottom: 64px;
        }


        .awwards img:not(.awwards img:last-child) {
            margin-right: 30px;
        }

        .map-main .map_page_get_a_loan, .map-main .suburb-loan__wrapper {
            margin-bottom: 0;
        }

        .map-main .map_page_get_a_loan {
            padding-bottom: 100px;
        }

        .map-main .calculator-wrapper button.calculate-action::after {
            display: none;
        }

        .map-main .map_page_pb_prize {
            background-color: #fff;
            padding: 50px 0;
        }

        .map-main .calculator-wrapper button.calculate-action {
            padding: 10px 45px;
        }

        @media (max-width: 1200px) {
            .container {
                width: 89%;
            }

            .area-text .description {
                margin: 20px 0;
            }

            .distance .icon-wrapper {
                height: 70px;
            }

            .benefits {
                flex-direction: column;
            }
            .benefits .benefit {
                margin-top: 15px;
                width: 100%;
            }
        }

        .small_title {
            margin-bottom: 50px;
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
            document.querySelector('.map_page_form').style.display = 'block'
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
//             let action_button = document.querySelector('.calculator-wrapper .form-wrapper .form .calculate-action');
//             action_button.classList.add('already-pressed');
//             action_button.innerHTML = 'Recalculate';

            document.querySelector('.map_page_form').style.display = 'none'
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
            //

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
            //document.querySelector('.calculator-wrapper .result-wrapper').classList.add('result-ready');
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

    <main class="map-main">
        <section class="map-wrapper">
            <div class="map-wrapper__inner container">
                <div class="map-text">
                    <h1>Interactive<br> map <span>of<br> Brisbane</span></h1>
                    <p class="text--choose">Choose a suburb on the map to interact</p>
                    <p class="text--know">Are we missing a suburb that you’re interested in? Let us know!</p>
                    <a href="/contact" class="btn">Contact Us</a>
                </div>
                <div class="map">
                    <svg width="817" height="666" viewBox="0 0 817 666" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="pullenvale-svg" d="M1 163.133L2.54708 153.851L4.09415 155.707V145.496L5.95065 147.662V136.523L8.11655 138.999C7.56906 134.962 6.86824 132.413 8.11655 128.169V124.147C8.11655 124.147 18.9461 114.555 20.4932 113.627C22.0402 112.699 26.0626 113.627 26.0626 113.627C26.0626 113.627 32.9727 107.612 38.7487 103.726C44.5247 99.8389 42.3021 99.1178 45.2464 96.9186C50.3 93.1438 60.4077 91.3491 60.4077 91.3491L62.8831 79.5914L70.309 77.1161L79.9009 81.1385L93.2058 79.5914L104.654 70.6185L110.533 74.3314L107.748 95.0621L116.721 95.9903L118.887 87.6362L131.883 100.013H137.452L143.64 113.936V125.694L129.098 134.976V144.568L125.694 148.9V151.375L129.098 155.707L127.241 159.42V163.133L139.927 176.128H144.878V184.482H146.116V187.577L150.138 191.908L148.591 195.931V212.948L151.995 215.424L157.874 216.661L165.918 217.899L176.438 219.137L177.676 220.993H185.721L187.887 224.087L186.959 226.872L185.721 230.585L188.815 232.132L191.6 236.773L192.838 241.105L194.694 243.89L199.954 238.63L207.999 246.674L213.259 247.603L216.972 250.078L222.232 253.172L223.779 257.813L225.945 263.383L228.73 264.93L229.349 270.19L228.73 277.306L227.492 282.566L228.73 288.755V293.705L220.685 302.369V308.557L222.232 311.651H238.012L242.963 312.579L248.842 314.436V316.602H254.102V313.508L251.936 311.651L249.461 309.485L248.842 306.391L246.366 304.225L254.102 297.727L258.743 304.225L274.214 293.705L278.855 297.727L286.281 291.23L295.873 296.799L302.061 297.727L310.415 307.938L317.841 303.606L327.433 314.436L335.478 311.651L344.142 318.768L354.043 311.651H361.159L367.967 312.579L371.989 315.364V323.099L377.868 324.028V327.122H385.294L389.935 324.028L392.41 326.193L396.123 325.575L397.67 322.171H400.765L402.621 324.028H406.025V331.453L404.787 335.785V338.879L411.594 345.377L419.33 349.09H423.971V355.588L425.827 357.444V359.61V364.87L414.379 366.417V374.462H410.047V381.578L402.621 385.601V393.955L407.572 400.762H413.141H419.33V404.784H422.114L421.495 409.426L418.401 410.354V413.757L426.446 414.995L427.374 418.089L419.33 419.636H415.307L416.235 430.466H408.809L398.599 429.537L396.123 431.703H389.007L385.603 433.25L382.819 436.344L380.034 440.367L380.653 456.147H367.657L366.42 458.003L348.783 459.55L345.998 462.335L343.213 467.286V470.999L348.783 476.878L349.711 482.138L344.142 483.685L337.953 485.232L332.693 490.182L331.146 492.967L333.621 495.752L336.716 500.083L338.263 500.702H343.213L342.285 503.178L337.953 505.962L329.599 515.245V522.052L331.146 525.455V530.406L332.693 532.881L336.716 539.379L338.263 542.782L344.142 548.661L347.236 550.518L348.783 554.54V560.728H342.285V562.585H335.787C333.936 558.714 333.4 556.547 332.693 552.684C330.701 550.887 329.813 549.548 328.671 546.495L319.698 537.522C315.676 534.081 313.531 531.763 309.797 527.312L305.465 522.98C302.205 523.601 300.377 523.8 297.11 523.599L292.469 531.334L289.685 538.451C288.324 542.916 287.756 543.575 286.59 546.186C285.879 549.837 285.015 551.591 283.187 554.54H276.689L274.214 551.755V539.688L273.285 530.406L272.048 519.886C270.339 517.959 269.636 515.562 268.335 511.532C266.756 508.454 266.289 506.572 265.55 503.178C263.777 500.866 263.471 499.068 263.075 495.752V485.232C264.235 480.978 267.097 477.806 267.716 476.259C268.335 474.712 268.954 465.429 268.954 465.429C269.206 464.188 269.622 461.097 268.335 458.003C267.047 454.909 265.719 453.674 265.241 450.268C263.9 447.8 262.732 446.379 260.909 443.152C258.33 441.073 256.699 440.344 253.483 439.748C249.884 439.503 247.801 439.475 243.891 439.748C240.58 440.75 238.803 441.463 235.846 443.152L233.68 445.936V449.649L235.846 451.196L240.487 451.815L244.51 453.053L247.295 454.29L250.079 457.694L250.698 461.097C250.698 461.097 251.214 463.573 250.389 464.192C249.564 464.81 246.676 464.81 246.676 464.81H241.416L241.106 466.667L237.084 467.286L233.062 469.142L227.801 472.546L223.47 473.783L222.541 476.878L220.994 479.662L219.447 482.138L215.425 483.066L210.474 483.375H206.452C204.934 484.915 203.766 485.157 201.501 485.232H195.622C193.988 484.724 193.256 484.163 192.219 482.756L188.506 482.138L185.721 480.59L181.08 481.828L178.295 482.138L173.654 481.519L170.869 480.59L168.703 479.043C168.394 478.309 169.013 476.259 168.084 474.402C166.731 473.165 166.847 473.783 165.3 473.165C163.134 473.474 164.255 473.474 162.824 474.093C161.896 475.33 161.896 475.33 161.587 476.878C161.896 478.425 162.309 478.6 162.515 479.662C163.427 480.476 163.863 480.994 164.371 482.138L163.752 485.541H160.968L160.349 488.016L158.492 489.254L154.47 490.182L144.878 489.873L141.475 484.613L138.999 484.303L135.596 483.994L133.12 488.016L129.407 491.111L126.313 494.205L122.91 496.68L120.434 500.083L116.103 503.178L112.39 504.106L109.295 502.249L108.367 500.083H105.892C104.654 501.631 103.545 502.204 100.632 502.559L96.2999 499.465L94.134 494.823V489.254L95.6811 488.945V482.138L97.847 470.38C100.903 453.861 101.914 444.306 106.511 433.25C107.668 430.466 109.129 428.891 112.39 427.371C113.656 426.547 114.72 426.305 117.031 426.134C119.541 426.229 120.86 426.442 122.91 427.371L126.932 429.228L128.479 427.371C128.779 424.022 129.098 420.255 128.789 419.017C128.479 417.78 127.144 417.199 125.694 416.233C119.388 416.222 113.627 416.542 108.367 415.304C103.107 414.067 101.802 411.473 98.4658 407.26C95.9679 404.496 93.4661 401.783 94.134 397.358L91.6587 392.717C86.66 387.252 80.2103 380.65 80.8292 378.484C81.448 376.318 87.2011 375.764 91.6587 376.009V367.345C91.6587 367.345 93.2058 367.036 93.5152 366.727C93.8246 366.417 93.2121 355.574 94.4434 352.803C95.6748 350.032 97.847 350.328 97.847 350.328L98.4658 345.686C98.4658 345.686 95.0623 345.996 94.7528 345.686C94.4434 345.377 95.3717 338.261 94.7528 337.951C94.134 337.642 92.8964 339.189 91.6587 337.951C90.421 336.714 91.6587 327.431 91.6587 327.431L90.1116 325.265C90.1116 325.265 89.8022 318.458 90.1116 317.839C90.421 317.221 92.8964 315.364 93.5152 315.364C94.134 315.364 94.7528 315.983 94.7528 315.983H101.56V305.772L103.416 304.844V296.18L104.964 295.252V285.66L103.416 283.185V276.069C103.416 276.069 99.4091 276.372 98.4658 275.759C97.5226 275.147 101.553 263.323 101.56 262.145C101.567 260.967 98.0876 262.292 96.6093 260.289V258.432C99.4923 255.903 101.313 254.996 104.964 254.41C105.969 249.488 106.211 246.561 106.201 241.105C106.201 241.105 103.555 239.698 103.416 238.63C103.278 237.562 104.684 230.558 104.654 224.397L96.6093 224.087L94.7528 219.137C94.7528 219.137 94.3759 211.711 94.7528 210.782C95.1298 209.854 99.8413 206.081 99.3941 204.594C98.9469 203.107 96.2999 197.478 95.9905 197.168C95.6811 196.859 85.4704 206.141 84.5421 204.904C83.6139 203.666 83.9233 197.478 83.9233 197.478H85.4704V186.648L86.708 184.173L87.6363 177.056L88.874 174.272V166.536L82.9951 165.584V153.826L67.5243 152.613V143.64H69.0714V131.882C69.0714 131.882 46.451 127.664 45.5558 129.407C44.6606 131.15 44.3181 136.523 44.3181 136.523C39.0377 136.978 36.485 136.906 32.2509 136.523C32.8118 139.478 32.9624 141.189 32.2509 144.568C27.494 145.008 25.2016 144.37 21.7308 141.783L20.8026 148.9H19.2555L20.8026 154.779H18.3273V160.348H12.4484V165.608H1V163.133Z" fill="#F9F9F9" stroke="#676767"/>
                        <path class="gap-svg" d="M185.721 220.993L187.887 224.087L186.958 226.872L185.721 230.585L188.815 232.132L191.6 236.773L192.837 241.105L194.694 243.889L199.954 238.629L207.999 246.674L213.259 247.602L216.972 250.078L222.232 253.172L223.779 257.813L225.945 263.383L228.73 264.93L229.348 270.19L228.73 277.306L227.492 282.566L228.73 288.755V293.705L220.685 302.369V308.557L222.232 311.651H238.012L242.963 312.58L248.842 314.436V316.602H254.102V313.508L251.936 311.651L249.46 309.485L248.842 306.391L246.366 304.225L254.102 297.728L258.743 304.225L274.214 293.705L278.855 297.728L286.281 291.23L295.873 296.799L302.061 297.728L310.415 307.938L317.841 303.607L327.433 314.436L335.478 311.651L344.141 318.768L354.043 311.651H361.159L367.966 312.58L371.989 315.364V323.1L377.868 324.028V327.122H385.294L389.935 324.028L392.41 326.194L396.123 325.575L397.67 322.171H400.764L402.621 324.028H406.025L410.975 320.934L412.213 316.293C416.235 316.293 416.854 316.293 419.948 315.364L423.971 317.84H431.087L431.706 313.198C434.587 313.707 436.148 313.722 438.823 313.198V316.293L440.37 321.553L443.773 325.266L446.867 324.956L447.796 322.481C450.371 323.383 451.616 323.439 453.365 322.481L454.603 318.458L456.15 315.364H459.244L463.266 319.696L466.979 318.768C472.425 317.305 474.593 315.486 476.571 310.104L478.737 308.867L479.047 306.391C482.807 307.345 484.98 307.297 488.948 306.391L489.257 307.32L490.804 307.938V310.723L499.468 310.104V306.701L501.324 305.463V302.678H499.159C499.159 302.678 497.611 301.176 497.611 299.584C497.611 297.992 496.993 292.158 496.993 292.158H499.468L500.706 290.611L504.109 290.302V288.445H507.513V276.997L505.966 276.378L504.109 274.212C501.92 272.682 500.114 272.721 496.374 273.593L495.136 274.212C494.758 274.212 494.043 274.088 494.208 273.593L493.28 276.378L491.733 276.997V274.831L488.329 274.212C488.329 271.675 488.329 270.252 488.329 267.714C485.807 267.487 484.911 267.115 479.975 268.024L479.356 265.239C475.514 264.264 473.501 264.349 470.074 265.239V268.952L468.217 269.261V276.378H457.697L456.15 281.019L453.674 282.257L451.509 284.113L448.724 283.495L448.105 282.876L431.087 282.257L430.468 281.329C427.483 281.15 425.847 281.064 423.971 281.329L423.042 279.782L422.424 275.45L420.567 274.831C420.864 273.875 420.892 273.11 420.567 271.118H419.329V268.024L417.782 266.786C418.163 265.164 417.782 262.145 417.782 262.145L414.998 263.383C415.8 261.57 415.664 260.554 414.998 258.741L413.451 257.194L411.594 260.288L410.047 262.145C408.88 262.304 408.187 262.424 406.025 263.383L404.787 260.288C403.119 259.509 402.225 259.404 400.764 260.288V258.741L391.791 257.194L388.388 258.741H385.294L383.128 254.409L378.796 255.647C378.482 260.416 378.491 262.842 378.796 266.786H376.939L377.868 272.665H374.774V271.118L363.016 270.19V268.643H358.375L357.756 271.737H354.043L352.805 269.261V268.024H349.092V250.078L345.379 248.84V243.889H341.666V238.629H337.334V241.105H333.003L325.577 239.867L322.482 238.629L315.675 236.773C315.675 236.773 311.343 237.801 310.725 237.701C309.23 237.46 307.012 236.773 307.012 236.773L297.729 235.535C294.577 237.58 292.667 239.103 289.066 242.342H283.805V250.078H280.092V248.84C272.766 248.479 269.923 248.179 267.097 247.602L266.169 248.84C264.477 248.84 263.529 248.84 261.837 248.84C261.233 247.269 260.894 246.388 260.29 244.818L256.577 243.889L255.339 242.342C254.01 242.342 253.265 242.342 251.936 242.342C249.761 243.309 248.541 243.851 246.366 244.818C244.979 244.726 244.103 244.692 241.416 244.818L240.178 242.342H236.155C232.168 238.838 229.932 236.873 225.945 233.369L219.756 230.585C217.219 228.409 214.187 225.943 213.259 225.015C212.331 224.087 210.182 218.554 207.07 214.495C204.819 214.419 202.12 215.114 201.192 215.114C200.263 215.114 199.954 213.257 199.954 213.257C197.663 213.737 196.451 213.557 194.384 212.638C192.684 210.97 191.602 210.258 188.815 210.473C187.171 210.823 186.454 211.366 185.721 213.257C185.007 216.277 184.99 217.973 185.721 220.993Z" fill="#F9F9F9" stroke="#676767"/>
                        <path class="enoggera-svg" d="M337.644 238.465H341.976V243.725H345.689V248.676L349.402 249.914V267.86H353.115V269.097L354.352 271.573H358.065L358.684 268.479H363.326V270.026L375.083 270.954V272.501H378.177L377.249 266.622H379.106C378.801 262.678 378.791 260.252 379.106 255.483L383.438 254.245L385.603 258.577H388.698L392.101 257.03L401.074 258.577V260.124C402.534 259.24 403.428 259.345 405.097 260.124L406.334 263.219C408.496 262.26 409.19 262.14 410.357 261.981L411.904 260.124L413.76 257.03L415.307 258.577C415.974 260.39 416.109 261.406 415.307 263.219L418.092 261.981C418.092 261.981 418.473 265 418.092 266.622L419.639 267.86V270.954H420.877C421.202 272.946 421.173 273.711 420.877 274.667L422.733 275.286L423.352 279.618L424.28 281.165C426.157 280.9 427.793 280.986 430.778 281.165L431.397 282.093L448.415 282.712L449.034 283.331L451.818 283.949L453.984 282.093L456.46 280.855L458.007 276.214H468.527V269.097L470.383 268.788V265.075C473.811 264.185 475.824 264.1 479.666 265.075L480.285 267.86C485.22 266.951 486.116 267.323 488.639 267.55V274.048L492.042 274.667V276.833L493.589 276.214L494.518 273.429C494.353 273.924 495.068 274.048 495.446 274.048L496.684 273.429C500.424 272.557 502.23 272.518 504.419 274.048L506.275 276.214L507.822 276.833L511.845 276.214L514.011 274.048L515.248 272.501L514.011 268.788H511.845V261.981H514.011V255.793H515.248V249.604H508.751V248.676C505.403 248.351 503.029 248.38 498.231 248.676V246.82H496.684V241.869L498.231 239.394C496.446 236.015 494.759 234.417 490.805 231.968H487.092C484.371 233.718 482.76 238.465 481.832 238.156C480.903 237.846 477.5 230.421 477.5 230.421C474.766 228.805 472.938 228.808 469.455 229.492C467.227 225.731 465.342 223.632 461.41 219.9V216.187C460.825 214.054 459.629 213.452 456.46 213.093C455.591 210.352 454.238 209.557 451.818 208.143L447.796 208.452L443.155 205.977C438.494 207.325 436.347 208.639 433.253 211.856C433.253 211.856 433.3 215.259 432.325 215.878C431.351 216.497 420.15 223.573 418.711 226.089C416.236 227.017 385.603 202.264 383.438 201.026C381.272 199.788 381.314 200.252 379.106 201.026C373.098 200.981 368.758 200.545 367.657 202.573C367.657 205.594 367.657 207.288 367.657 210.309H365.801V219.9C360.934 219.9 358.391 219.9 354.352 219.9C349.108 219.748 346.37 219.381 341.976 218.044C340.173 218.483 339.832 220.119 339.501 223.613C338.157 229.693 337.94 232.859 337.644 238.465Z" fill="#F9F9F9" stroke="#676767"/>
                        <path class="mcdowall-svg" d="M490.805 231.968C494.759 234.417 496.446 236.015 498.231 239.394L502.098 238.156C504.795 236.727 506.04 235.336 507.513 231.204C513.063 204.67 515.597 188.682 519.89 159.73L522.984 158.801L521.437 135.286L515.249 141.784L509.37 143.331L507.204 138.999L502.872 137.761C502.356 135.595 501.449 130.645 501.944 128.169C502.439 125.694 503.181 127.757 503.491 129.098V120.125L505.347 119.197V112.389L507.204 110.533V100.322C497.597 98.4863 491.371 98.8003 479.666 100.322C475.26 103.365 472.442 104.955 471.002 108.986C466.354 111.358 465.526 114.331 463.576 119.197L464.814 124.457L468.527 129.098L475.334 133.12L477.5 140.855L467.599 139.927L466.67 144.878C465.592 146.449 465.679 147.329 466.67 148.9L469.455 150.447V156.326C466.902 155.248 465.914 155.865 464.814 158.801C464.056 166.143 464.318 170.273 466.67 177.676L471.002 182.936V188.196C465.233 190.263 462.303 191.929 457.697 195.931V198.406L460.482 203.666V214.186L461.41 216.188V219.901C465.342 223.633 467.227 225.731 469.455 229.493C472.938 228.809 474.766 228.806 477.5 230.421C477.5 230.421 480.903 237.847 481.832 238.156C482.76 238.466 484.371 233.719 487.092 231.968H490.805Z" fill="#F9F9F9" stroke="#676767"/>
                        <path class="bracken-svg" d="M507.204 110.532V100.322C499.438 98.8373 493.882 98.7581 485.854 99.5862C487.727 94.8404 487.71 87.945 487.71 87.945L491.114 81.4473L496.993 75.2591L498.54 66.9049L496.993 60.7167L489.567 55.7661C489.773 52.2594 490.371 45.246 491.114 45.246C491.857 45.246 492.249 43.3896 492.352 42.4613L499.778 41.5331L502.872 38.439L508.132 43.0801H517.105V41.5331L510.607 38.439L509.06 34.4166L515.248 32.8695L518.033 26.6813L518.652 19.5648L520.509 17.3989L531.029 26.0624C535.778 29.3807 537.831 31.4074 540.311 35.3448C543.866 36.8716 545.929 37.1712 549.903 35.3448L552.069 32.8695C551.382 28.9749 551.352 26.7192 552.997 22.3495L550.522 19.5648V12.7577L554.854 6.56943L565.374 1.92824L571.562 1L573.728 3.4753L570.324 4.40354V9.35415H568.777C570.468 14.6104 570.391 17.8142 568.777 23.8965H570.324V28.5377C567.551 35.4167 565.458 39.0501 561.042 45.246C569.397 56.8174 571.599 65.1535 575.275 80.2097V95.9897L572.8 94.4427H569.087L558.567 103.725L559.804 111.46L550.522 120.124V127.24L546.809 130.025L551.141 134.357V138.998L567.849 158.491L529.172 152.303V150.137H522.674L521.437 135.285L515.248 141.783L509.37 143.33L507.204 138.998L502.872 137.76C502.356 135.595 501.449 130.644 501.944 128.169C502.439 125.693 503.181 127.756 503.491 129.097V120.124L505.347 119.196V112.389L507.204 110.532Z" fill="#F9F9F9" stroke="#676767"/>
                        <path class="deagon-svg" d="M551.14 138.998L567.849 158.491C567.849 158.491 591.674 181.388 592.911 179.841C594.149 178.294 593.53 174.581 593.53 174.581L597.243 173.034C598.656 168.606 599.242 166.159 597.862 162.204L602.194 161.585C605.017 158.903 607.066 157.667 606.835 153.231L612.405 156.635C618.08 152.213 620.212 149.627 622.615 144.877C621.608 142.617 620.018 141.477 615.808 139.617L618.593 137.142C622.4 140.389 624.621 141.838 629.422 140.855C632.103 137.138 631.489 135.23 629.732 131.882C628.316 130.442 627.17 129.969 623.853 130.335L628.494 123.527C632.019 128.732 633.908 129.534 637.158 128.169L639.633 125.384C640.593 123.078 640.218 121.945 638.396 120.124C638.759 117.505 638.61 116.136 635.301 114.554L632.517 116.411H626.947L627.875 106.2L622.615 96.918L633.754 91.6579C633.754 91.6579 638.396 88.5638 632.517 81.1379C626.638 73.712 611.167 71.8555 604.36 49.2684C604.36 49.2684 606.624 41.4478 604.36 34.726C605.598 28.5377 604.605 23.3257 602.813 15.5424L598.172 6.87882H595.077L594.149 4.40352L573.728 3.47528L570.324 4.40352V9.35412H568.777C570.467 14.6104 570.391 17.8142 568.777 23.8965H570.324V28.5377C567.551 35.4166 565.458 39.0501 561.042 45.246C569.396 56.8173 571.599 65.1535 575.275 80.2097V95.9897L572.799 94.4427H569.086L558.566 103.725L559.804 111.46L550.522 120.124V127.24L546.809 130.025L551.14 134.357V138.998Z" fill="#F9F9F9" stroke="#676767"/>
                        <path class="northgate-svg" d="M622.615 96.9187L633.754 91.6587L636.539 92.2775C642.108 93.5152 658.903 107.553 668.099 117.959C661.968 126.089 659.605 130.827 657.27 139.618V149.828L659.436 163.442C661.633 168.514 662.415 171.432 659.436 177.366L649.534 184.792C644.213 202.279 638.974 210.315 626.947 222.54C622.14 224.078 618.982 224.623 610.239 223.469C607.791 226.298 605.342 228.181 598.79 232.132C592.956 231.612 590.18 231.194 586.104 230.276C579.78 228.208 577.266 226.047 574.346 220.684C570.183 225.934 567.285 227.433 560.732 226.563C558.246 230.758 556.274 233.309 550.521 238.63C548.063 237.414 547.359 235.945 547.118 232.132L545.261 221.921L543.714 220.684V189.124H556.4V191.908H565.992C565.057 185.837 565.411 182.385 567.849 176.128L574.346 177.366C581.154 179.045 583.835 180.545 586.723 184.173C587.821 181.122 589.143 180.139 592.911 179.841C594.149 178.294 593.53 174.581 593.53 174.581L597.243 173.034C598.656 168.607 599.241 166.159 597.862 162.205L602.194 161.586C605.017 158.904 607.066 157.668 606.835 153.232L612.405 156.635C618.08 152.214 620.211 149.628 622.615 144.878C621.608 142.618 620.018 141.478 615.808 139.618L618.593 137.142C622.4 140.389 624.621 141.839 629.422 140.855C632.103 137.139 631.489 135.231 629.732 131.882C628.316 130.443 627.17 129.97 623.853 130.335L628.494 123.528C632.019 128.733 633.908 129.535 637.158 128.169L639.633 125.385C640.593 123.079 640.217 121.946 638.395 120.125C638.759 117.505 638.61 116.137 635.301 114.555L632.517 116.412H626.947L627.875 106.201L622.615 96.9187Z" fill="#F9F9F9" stroke="#676767"/>
                        <path class="chermside-svg" d="M515.249 255.793V249.605H508.751V248.676C505.403 248.351 503.029 248.38 498.231 248.676V246.82H496.684V241.869L498.231 239.394L502.098 238.156C504.795 236.726 506.04 235.336 507.513 231.204C513.063 204.67 515.597 188.682 519.89 159.729L522.984 158.801L522.674 150.137H529.172V152.303L567.849 158.491C567.849 158.491 589.06 178.875 592.494 179.878C592.63 179.864 592.769 179.852 592.912 179.841C592.842 179.928 592.7 179.938 592.494 179.878C589.043 180.216 587.78 181.237 586.723 184.173C583.836 180.544 581.154 179.044 574.347 177.366L567.849 176.128C565.412 182.385 565.058 185.837 565.993 191.908H556.401V189.123H543.715V220.684L545.262 221.921L547.118 232.132C547.359 235.945 548.063 237.414 550.522 238.63V245.746L546.19 258.123L522.984 257.504L522.056 256.266L515.249 255.793Z" fill="#F9F9F9" stroke="#676767"/>
                        <path class="hamilton-svg" d="M657.27 139.618C659.605 130.827 661.968 126.089 668.099 117.959L673.359 120.434L679.238 121.672C684.951 123.633 687.382 125.315 689.449 130.026H703.682L707.395 128.788L719.462 128.17C727.735 131.862 732.023 134.465 737.099 143.021C738.852 145.564 739.093 147.055 738.337 149.829L737.099 151.376C738.91 154.568 739.421 156.458 739.265 160.039V163.443L738.337 168.393C742.591 170.747 743.241 171.587 744.216 173.034C739.287 183.06 726.317 190.212 712.965 201.5V211.092H718.225C719.344 206.425 725.651 199.025 725.651 199.025C725.651 199.025 728.893 201.151 728.126 204.285L722.866 211.092V215.733C722.866 215.733 720.22 217.29 720.391 218.828C720.542 220.186 722.866 220.065 722.866 221.303C722.866 222.541 721.037 231.598 715.44 237.083L708.633 246.984C697.238 254.58 690.683 258.352 678.31 263.074C674.967 269.008 672.68 272.507 666.862 279.472C658.526 284.852 653.082 287.454 641.18 290.921C634.413 292.66 630.62 292.498 623.853 290.921C612.373 288.83 606.39 286.698 596.315 281.638C590.095 282.282 586.112 281.927 577.75 279.472L567.23 287.208V294.015L571.078 302.06L567.23 305.773L557.948 295.562L546.19 294.015L540.93 293.396C540.93 281.638 542.574 271.779 546.19 258.123L550.522 245.746V238.63C556.274 233.309 558.246 230.758 560.732 226.563C567.285 227.433 570.183 225.934 574.347 220.684C577.266 226.047 579.78 228.208 586.104 230.276C590.18 231.194 592.956 231.612 598.79 232.132C605.342 228.181 607.791 226.299 610.239 223.469C618.982 224.623 622.14 224.078 626.947 222.541C638.975 210.315 644.213 202.28 649.534 184.792L659.436 177.366C662.415 171.432 661.633 168.514 659.436 163.443L657.27 149.829V139.618Z" fill="#F9F9F9" stroke="#676767"/>
                        <path class="central-svg" d="M507.513 288.445L507.822 276.832L511.845 276.214L514.01 274.048L515.248 272.501L514.01 268.788H511.845V261.98H514.01V255.792H515.248L522.055 256.266L522.983 257.503L546.19 258.122C542.574 271.778 540.93 281.638 540.93 293.395L546.19 294.014L557.947 295.561L567.23 305.772L571.252 302.368L575.894 311.96L575.275 320.624L579.606 329.597V334.857C576.259 338.989 573.784 340.933 568.468 343.83L563.517 343.211C561.743 342.249 560.893 340.849 559.494 337.642C555.94 332.727 555.99 329.713 556.091 324.337C551.71 320.361 549.275 320.588 544.952 323.409C544.783 339.397 546.63 351.334 542.477 350.328C536.421 348.97 531.213 340.361 522.983 329.597L520.199 328.05C519.509 326.076 518.126 320.644 515.248 309.176C514.329 305.718 513.964 303.597 514.01 298.965C510.159 295.731 508.814 293.375 507.513 288.445Z" fill="#F9F9F9" stroke="#676767"/>
                        <path class="toowong-svg" d="M504.109 288.444H507.513C508.814 293.375 510.159 295.731 514.011 298.965C513.964 303.596 514.329 305.718 515.248 309.175C518.126 320.644 519.51 326.075 520.199 328.05C500.615 340.046 492.874 348.595 485.854 367.655L478.737 370.44C472.226 369.333 466.98 364.87 459.244 365.798C451.509 366.727 450.89 360.538 446.868 362.704C442.845 364.87 439.442 365.798 436.966 367.655C434.491 369.511 434.491 373.534 434.491 373.534C434.491 373.534 429.385 375.274 427.065 373.534C424.331 371.483 426.867 368.142 425.827 364.87C425.61 361.439 425.63 359.941 425.827 357.753L423.971 355.897V349.09H419.948L410.975 345.067L404.787 339.498V335.166L406.025 331.144V324.027L410.975 320.933L412.213 316.292C416.235 316.292 416.854 316.292 419.948 315.364L423.971 317.839H431.087L431.706 313.198C434.587 313.706 436.148 313.722 438.823 313.198V316.292L440.37 321.552L443.773 325.265L446.868 324.955L447.796 322.48C450.372 323.382 451.616 323.438 453.365 322.48L454.603 318.458L456.15 315.364H459.244L463.267 319.695L466.98 318.767C472.425 317.305 474.593 315.486 476.571 310.104L478.737 308.866L479.047 306.391C482.808 307.344 484.981 307.296 488.948 306.391L489.257 307.319L490.805 307.938V310.722L499.468 310.104V306.7L501.325 305.462V302.678H499.159C499.159 302.678 497.612 301.175 497.612 299.583C497.612 297.992 496.993 292.157 496.993 292.157H499.468L500.706 290.61L504.109 290.301V288.444Z" fill="#F9F9F9" stroke="#676767"/>
                        <path class="lucia-svg" d="M414.379 366.417L425.827 364.87C426.867 368.142 424.331 371.483 427.065 373.533C429.385 375.273 434.491 373.533 434.491 373.533C434.491 373.533 434.491 369.511 436.966 367.654C439.442 365.798 442.845 364.87 446.867 362.704C450.89 360.538 451.509 366.726 459.244 365.798C466.979 364.87 472.226 369.332 478.737 370.439L485.854 367.654L494.517 372.914C502.127 373.282 506.861 373.078 516.486 371.677L522.984 376.627C531.305 386.839 529.248 388.61 522.984 390.242C508.268 390.277 504.361 391.298 501.015 393.955C495.602 398.198 493.901 400.569 493.589 404.784C492.253 406.692 492.133 408.939 492.352 413.757L496.374 416.233C501.348 416.495 504.264 417.316 508.751 414.995C512.273 416.333 511.544 417.542 510.607 419.636C508.977 420.364 510.298 423.658 506.275 424.277C502.253 424.896 493.698 424.42 489.876 422.73C483.004 419.695 480.176 416.808 476.262 410.354C474.035 405.053 471.642 402.834 465.432 400.143C459.864 397.976 456.903 397.526 451.818 397.668C449.222 398.485 447.588 399.229 443.773 401.999C443.071 410.53 441.607 410.354 441.607 414.995C441.607 419.636 445.659 426.148 449.962 429.847C449.962 429.847 447.617 445.07 449.343 447.174C449.055 450.262 455.841 458.622 455.841 458.622C455.841 458.622 448.287 462.037 443.773 460.479C438.517 446.445 429.85 437.582 416.235 430.466L415.307 419.636H419.33L427.374 418.089L426.446 414.995L418.401 413.757V410.354L421.495 409.425L422.114 404.784H419.33V400.762H407.572L402.621 393.955V385.6L410.047 381.578V374.461H414.379V366.417Z" fill="#F9F9F9" stroke="#676767"/>
                        <path class="wynnum-svg" d="M735.861 216.661C723.794 238.629 719.683 250.494 697.185 263.073V270.189H699.66C706.011 280.818 709.9 285.305 717.915 288.445C715.45 300.918 716.129 306.71 715.44 318.148L719.153 319.695L719.772 325.883C733.816 326.369 745.091 328.91 761.852 333.309C757.057 338.521 750.733 342.729 753.189 345.377L757.83 347.233C762.944 348.619 764.768 345.704 768.35 341.664L773.92 343.211C779.601 343.627 781.674 342.643 783.821 339.188C790.558 343.501 791.589 344.471 791.866 345.377C792.996 343.838 793.876 342.833 798.673 339.188V335.166C800.041 331.432 802.733 330.153 816 331.453V327.74C810.821 321.594 808.275 317.504 800.529 315.982L804.861 313.198C804.221 310.688 803.185 309.269 799.292 306.7L798.673 299.583L794.96 302.368C792.059 304.537 793.02 308.618 793.413 314.435L788.153 316.911C788.928 312.762 788.267 310.518 784.749 306.7C787.298 304.513 788.803 303.17 791.866 300.202C793.947 296.284 796.14 294.603 801.767 292.467C802.728 289.12 802.436 287.987 800.529 287.207L793.413 289.992C788.138 291.813 785.673 291.521 781.655 289.992C779.79 288.912 778.546 288.028 772.682 281.328C770.042 278.293 771.515 277.013 772.682 274.521C772.909 272.098 774.65 270.613 780.727 267.714C780.884 264.488 780.498 262.642 776.085 259.05L774.229 252.243V232.441H776.085L777.633 252.862L781.655 256.575C787.887 256.803 789.715 254.245 793.413 250.387L795.888 256.575H799.292V250.387C796.24 246.02 793.951 243.367 787.224 237.701C788.134 235.427 787.989 233.005 787.224 227.8C785.787 222.329 782.722 219.1 776.085 213.257C771.351 213.081 768.932 213.167 766.494 214.804L764.018 211.401C757.146 211.213 753.839 212.394 748.857 216.661C743.782 215.328 740.937 215.057 735.861 216.661Z" fill="#F9F9F9" stroke="#676767"/>
                        <path class="wynnum-svg" d="M740.193 204.284L738.956 210.163L747.619 204.284L751.332 211.091L755.664 201.19C763.21 206.933 767.825 208.919 776.704 210.163C790.524 222.56 793.404 228.611 794.341 238.629C796.421 241.384 797.72 241.827 800.22 241.104C802.454 238.676 803.329 237.067 803.623 233.369L801.148 229.966V224.396L799.292 222.23C801.054 216.431 801.267 213.178 799.292 207.378L795.888 202.737L795.269 197.477L791.866 195.002C796.84 193.026 798.574 191.479 801.148 188.504C801.885 185.845 801.54 185.043 799.292 185.101L791.866 188.504C793.999 185.808 794.822 184.202 795.269 181.078L795.888 176.437C794.811 171.56 794.493 168.875 786.606 162.823C789.742 160.806 790.822 159.198 791.866 155.706C786.8 150.188 783.202 147.711 774.848 144.877C771.614 143.692 769.782 144.927 766.494 149.518V156.325C760.426 162.348 757.583 165.897 754.117 172.724V176.437C748.494 180.78 745.827 183.632 742.978 190.361V201.19L740.193 204.284Z" fill="#F9F9F9" stroke="#676767"/>
                        <path class="lytton-svg" d="M791.866 345.377C792.996 343.838 793.876 342.833 798.673 339.188C800.831 340.828 801.867 341.734 801.767 343.211C803.225 346.715 802.876 348.68 801.767 352.184C803.308 354.914 800.977 355.299 797.435 356.206L791.866 371.677C794.18 373.06 794.347 373.779 794.641 375.039L794.651 375.08C795.404 378.034 792.58 378.887 784.749 379.721L783.821 389.623C780.758 390.747 778.066 390.285 771.754 387.766L769.897 392.717C765.758 393.577 762.877 386.483 757.83 375.08C739.722 374.473 730.268 375.043 705.539 365.798C703.792 370.854 697.494 376.627 695.638 376.318C693.781 376.008 691.925 372.605 691.925 372.605L687.902 375.08C681.569 378.544 673.851 377.399 653.867 370.748C654.426 376.876 654.14 380.328 652.01 386.528C651.248 382.743 649.188 380.861 643.037 377.865C639.04 379.747 636.308 379.697 630.66 377.865L626.638 374.152L630.66 365.798C628.605 361.556 628.943 359.011 630.66 354.35L625.71 353.112C624.832 347.972 625.048 345.137 626.638 340.117H632.207C631.269 327.333 633.162 299.891 634.373 299.893L649.535 295.871C671.453 285.875 686.481 263.594 697.185 263.073V270.189H699.66C706.011 280.818 709.9 285.305 717.916 288.445C715.451 300.918 716.129 306.71 715.44 318.148L719.153 319.695L719.772 325.884C733.816 326.37 745.091 328.91 761.853 333.309C757.057 338.521 750.733 342.729 753.189 345.377L757.83 347.233C762.944 348.619 764.768 345.704 768.35 341.664L773.92 343.211C779.601 343.627 781.675 342.643 783.821 339.188C790.558 343.501 791.589 344.471 791.866 345.377Z" fill="#F9F9F9" stroke="#676767"/>
                        <path class="morningside-svg" d="M630.66 365.798L626.638 374.153L613.642 372.915L604.051 370.44C599.633 370.02 597.829 370.384 595.696 371.987C596.525 369.191 596.228 366.093 595.703 360.607L595.696 360.538C592.237 362.653 589.831 361.97 585.486 360.538V353.112C584.112 348.493 581.649 346.435 576.822 342.902C579.789 339.046 581.668 337.754 585.486 337.332C585.697 331.487 585.554 328.53 582.391 326.812L579.297 310.413C577.082 301.236 575.073 290.61 576.822 286.588C578.571 282.566 607.454 296.489 634.373 299.893C634.373 299.893 631.269 327.333 632.207 340.117H626.638C625.048 345.137 624.832 347.973 625.71 353.112L630.66 354.35C628.943 359.011 628.604 361.556 630.66 365.798Z" fill="#F9F9F9" stroke="#676767"/>
                        <path class="gabba-svg" d="M585.486 353.112C584.112 348.493 581.649 346.435 576.822 342.901C572.878 343.689 570.705 344.829 566.921 348.471C562.17 344.804 559.807 343.445 556.401 342.901C556.401 342.901 555.641 323.872 551.141 324.027C546.64 324.182 549.499 353.139 544.024 354.04C541.386 353.194 539.863 353.234 537.217 354.04C528.834 340.526 525.915 336.979 521.746 333C506.691 341.584 499.785 348.149 490.495 363.323C490.527 367.377 491.297 368.139 493.28 368.273H520.508C523.571 373.333 525.649 376.107 531.647 380.65C531.225 383.43 531.244 384.987 531.647 387.767H537.217L539.073 384.363L544.024 388.695L555.472 389.933L557.948 381.888L575.894 384.363L595.696 371.986C596.525 369.19 596.228 366.093 595.703 360.606L595.696 360.538C592.237 362.653 589.831 361.97 585.486 360.538V353.112Z" fill="#F9F9F9" stroke="#676767"/>
                        <path class="chandler-svg" d="M771.754 387.766C778.066 390.285 783.821 389.623 783.821 389.623C795.888 400.452 808.531 404.963 807.646 409.734C805.158 412.841 803.113 413.914 798.054 414.376L794.65 412.519C796.644 414.573 796.401 415.725 794.65 417.779H786.296C783.929 421.28 782.661 422.439 780.417 424.277L783.821 434.487L780.417 437.582L774.229 438.51C771.299 443.088 768.483 445.136 761.233 447.792C764.681 452.76 765.905 455.697 765.875 461.406C768.61 459.868 769.849 460.037 771.754 461.406L777.323 456.456C778.651 462.427 778.937 465.383 777.323 468.832L778.87 473.783L786.296 475.33C788.517 476.128 789.782 477.82 792.175 489.563C792.302 493.314 788.486 492.379 782.583 491.419L776.085 494.823C776.474 497.832 776.228 499.523 774.229 502.558L775.467 510.294C775.467 510.294 775.776 511.841 777.323 514.316C778.87 516.791 776.955 517.787 769.897 522.051L772.682 526.074L769.897 530.405L768.969 535.975L762.471 541.854L761.852 547.423L764.637 548.351V553.611L761.852 557.943L762.471 561.037C767.888 560.236 769.827 561.978 771.754 568.154C771.979 570.106 771.761 570.879 768.969 570.01C767.145 572.087 771.444 577.746 763.709 570.01C755.973 562.275 746.072 557.015 738.027 545.876H732.148L731.53 543.401C725.125 544.129 721.535 544.409 715.131 543.401L709.561 540.307C704.097 540.644 701.131 540.948 693.781 539.069V537.212C689.312 539.203 687.709 538.965 685.736 537.212C687.451 543.122 687.186 546.159 684.808 551.136C677.954 552.37 674.152 551.977 667.481 548.351C664.422 539.998 661.775 534.966 654.795 525.145C658.37 519.458 660.341 516.249 663.458 510.294L661.292 498.226L661.372 498.059C666.292 487.768 669.075 481.947 677.691 471.926V455.218L681.714 453.362V449.03L642.109 444.079L626.328 423.658L624.162 414.685L613.642 408.806L617.046 403.546L611.167 391.17L613.642 372.605L626.638 374.152L630.66 377.865C636.308 379.696 639.04 379.747 643.037 377.865C649.188 380.861 651.248 382.743 652.01 386.528C654.14 380.327 654.425 376.876 653.866 370.748C673.85 377.399 681.569 378.544 687.902 375.08L691.924 372.605C691.924 372.605 693.781 376.008 695.637 376.318C697.494 376.627 703.792 370.854 705.539 365.798C730.268 375.043 739.722 374.472 757.83 375.08C762.877 386.483 765.758 393.577 769.897 392.717L771.754 387.766Z" fill="#F9F9F9" stroke="#676767"/>
                        <path class="wishart-svg" d="M661.292 498.227L663.458 510.294C662.275 512.554 661.258 514.419 660.255 516.173H647.987C618.948 502.345 606.803 488.262 589.508 456.456C589.478 455.278 589.576 454.614 591.983 453.362C594.985 455.169 596.852 455.426 600.647 453.981L601.266 456.456C604.287 457.301 605.98 457.263 609.001 456.456C613.049 455.298 614.441 453.396 615.808 448.411C610.337 444.175 609.07 441.806 607.454 437.582C613.724 430.744 617.969 427.839 626.328 423.658L642.109 444.079L681.714 449.03V453.362L677.691 455.218V471.927C669.075 481.947 666.292 487.768 661.372 498.059L661.292 498.227Z" fill="#F9F9F9" stroke="#676767"/>
                        <path class="holland-svg" d="M604.051 370.439C599.633 370.019 597.829 370.384 595.696 371.986L575.894 384.363L557.948 381.887L555.472 389.932C555.029 399.527 555.63 403.348 557.948 407.878C569.969 414.375 575.608 417.914 579.607 423.658C586.204 436.882 587.049 442.001 585.176 448.412L589.508 456.456C589.479 455.279 589.576 454.615 591.983 453.362C594.985 455.17 596.852 455.426 600.647 453.981L601.266 456.456C604.287 457.301 605.98 457.263 609.001 456.456C613.049 455.299 614.441 453.396 615.808 448.412C610.337 444.176 609.07 441.806 607.454 437.582C613.724 430.745 617.969 427.84 626.328 423.658L624.163 414.685L613.642 408.806L617.046 403.546L611.167 391.17L613.603 372.904L604.051 370.439Z" fill="#F9F9F9" stroke="#676767"/>
                        <path class="macgregor-svg" d="M660.254 516.173H647.987C625.442 505.437 613.08 494.547 600.585 475.33L598.79 492.348C590.436 491.11 585.58 487.814 574.656 487.706C570.65 502.321 570.405 507.398 570.943 514.935C569.558 515.392 568.732 515.942 566.92 518.957L568.467 520.504C569.808 522.515 568.467 526.693 568.467 526.693C597.263 540.197 615.196 564.362 640.252 570.63L642.727 577.746C643.73 581.936 643.79 584.488 642.727 589.504C643.837 591.732 644.683 591.574 646.131 591.67H653.557C655.676 572.634 656.538 557.834 659.436 548.661C662.488 548.452 664.325 548.458 667.79 548.661C664.316 539.348 661.284 534.215 654.794 525.146L660.254 516.173Z" fill="#F9F9F9" stroke="#676767"/>
                        <path class="calamvale-svg" d="M640.252 570.629C615.196 564.361 597.263 540.197 568.468 526.693L557.947 517.41L555.472 530.405V534.428L566.921 536.284V544.948C561.437 546.099 559.742 547.964 557.947 552.374L557.019 557.943C561.155 566.497 562.747 568.296 565.373 570.629C567.322 574.614 569.469 576.33 575.275 578.364L574.656 591.36C573.209 595.806 571.747 598.858 566.921 606.212C569.488 610.706 570.109 613.397 567.849 618.898C564.719 633.864 562.768 637.694 559.185 642.104L559.129 642.393C558.11 647.683 557.521 650.738 559.185 653.861L587.961 657.574C594.84 653.586 598.238 652.115 599.719 647.364C600.76 650.481 601.709 651.08 603.741 651.077L609.929 647.364L613.642 649.839L622.925 647.364C633.919 641.526 638.279 639.818 642.727 639.319L645.821 631.893C645.974 628.537 645.708 626.991 642.727 626.633V619.516L646.75 615.185L644.584 610.543L646.75 604.974V598.167C645.685 596.49 644.777 595.782 641.18 596.001L642.727 589.503C643.79 584.487 643.73 581.936 642.727 577.746L640.252 570.629Z" fill="#F9F9F9" stroke="#676767"/>
                        <path class="parkinson-svg" d="M559.13 642.394C558.11 647.684 557.521 650.739 559.185 653.862L556.71 657.266L554.854 665.001L548.975 662.526L521.127 658.194H510.298C495.944 656.365 488.024 653.502 474.096 645.508L462.648 640.248C455.539 634.454 453.976 630.732 452.437 623.849C447.237 620.952 441.722 619.788 425.208 618.898C425.557 602.292 426.436 592.894 432.325 575.58C439.678 577.428 443.813 576.091 451.199 571.558V577.436C454.841 575.524 457.087 575.199 462.029 578.055C464.734 573.175 467.628 571.374 476.881 570.939C478.962 567.577 480.229 565.792 477.809 557.943L474.096 554.54C481.28 551.667 484.607 549.141 489.876 547.114C495.971 549.943 499.637 550.688 506.585 550.208C509.927 555.797 513.082 557.943 518.033 556.396C521.424 556.006 521.402 553.278 523.603 551.755C529.075 557.101 532.214 557.163 537.836 556.396C546.01 558.627 550.078 558.651 557.019 557.943C561.155 566.497 562.747 568.296 565.374 570.629C567.322 574.615 569.469 576.33 575.275 578.365L574.656 591.36C573.209 595.806 571.747 598.859 566.921 606.212C569.489 610.706 570.11 613.397 567.849 618.898C564.719 633.865 562.768 637.695 559.185 642.104L559.13 642.394Z" fill="#F9F9F9" stroke="#676767"/>
                        <path class="richlands-svg" d="M432.325 575.58C426.436 592.893 425.557 602.291 425.209 618.897L415.617 615.803C409.591 611.952 404.478 608.068 404.478 603.427C404.478 598.786 401.677 592.005 392.411 581.458C386.084 583.098 381.614 578.325 373.766 569.946L373.536 569.701H359.613C359.613 569.701 357.447 572.795 352.187 567.225C352.187 567.225 349.86 569.997 346.308 569.701L342.904 565.988L350.949 562.584L352.187 553.611C346.659 541.154 338.882 537.831 333.312 523.598C332.408 518.161 335.673 513.247 346.617 501.939C354.308 500.51 358.728 500.094 366.729 499.773C370.275 502.234 372.253 503.446 375.702 504.415L378.177 501.939C375.243 501.683 374.256 500.838 373.536 498.226C375.349 493.345 376.365 493.877 378.177 493.585C382.085 493.253 383.409 493.786 385.294 495.132C394.17 493.09 396.196 491.846 397.98 489.563C423.809 487.722 435.23 485.802 446.249 479.662C450.193 477.697 451.818 477.496 454.912 478.115C456.46 475.639 457.243 475.103 464.504 470.379C470.121 473.874 473.723 473.008 479.975 472.545L484.926 474.092V476.258L474.096 478.115C475.153 480.893 475.104 482.453 474.096 485.231L470.693 487.706L470.701 487.725C472.796 492.463 473.974 495.125 480.594 497.608V502.558L476.881 504.105L476.262 506.271C484.577 510.815 489.152 513.295 492.971 514.316V518.029L489.876 519.267V525.764H496.065C498.118 531.111 500.332 531.13 504.11 531.643C507.796 531.2 509.407 531.254 511.845 531.643V535.047H516.796C519.143 538.028 519.198 539.481 518.033 541.854L510.917 542.782V550.208H506.585C499.637 550.688 495.971 549.943 489.876 547.114C484.607 549.14 481.28 551.667 474.096 554.54L477.809 557.943C480.229 565.792 478.962 567.576 476.881 570.938C467.628 571.374 464.734 573.174 462.029 578.055C457.087 575.198 454.841 575.524 451.199 577.436V571.557C443.813 576.091 439.678 577.428 432.325 575.58Z" fill="#F9F9F9" stroke="#676767"/>
                        <path class="moorooka-svg" d="M585.176 448.411L589.508 456.456L600.585 475.33L598.79 492.348C590.436 491.11 585.58 487.814 574.656 487.706C570.65 502.321 570.405 507.398 570.943 514.935C569.557 515.392 568.732 515.941 566.92 518.957L568.467 520.504C569.808 522.515 568.467 526.692 568.467 526.692L557.947 517.41L555.472 530.405V534.428L566.92 536.284V544.948C561.437 546.099 559.742 547.964 557.947 552.374L557.019 557.943C550.078 558.65 546.01 558.627 537.835 556.396C532.214 557.163 529.074 557.101 523.602 551.755C521.402 553.278 521.424 556.006 518.033 556.396C513.082 557.943 509.926 555.797 506.584 550.208H510.916V542.782L518.033 541.854C519.197 539.481 519.143 538.028 516.795 535.047H511.845V531.643C509.407 531.254 507.796 531.2 504.109 531.643C500.331 531.131 498.118 531.111 496.064 525.764H489.876V519.267L492.97 518.029V514.316C489.152 513.295 484.577 510.815 476.262 506.271L476.881 504.105L480.594 502.558V497.608C491.323 493.172 497.835 489.911 510.297 482.756L511.845 468.832C512.247 463.242 512.954 460.612 516.795 458.622C512.615 453.665 511.746 450.61 514.32 444.389L521.436 437.582C521.002 435.668 520.703 433.328 522.365 431.703C524.651 429.465 527.006 434.797 530.409 433.25C533.813 431.703 529.406 429.371 533.813 427.062C538.22 424.752 540.442 424.83 544.024 427.062C544.024 427.062 545.257 430.46 547.118 430.775C549.315 431.146 550.958 429.235 551.45 427.062C551.999 424.635 548.13 423.97 548.355 421.492C548.662 418.121 553.484 419.282 555.472 416.542C557.538 413.693 557.947 407.878 557.947 407.878C569.969 414.375 575.608 417.914 579.606 423.658C586.204 436.881 587.049 442 585.176 448.411Z" fill="#F9F9F9" stroke="#676767"/>
                        <path class="jamboree-svg" d="M366.729 499.774C358.727 500.094 354.307 500.511 346.617 501.94C345.939 499.333 344.455 497.636 337.025 493.586L342.594 489.563L349.711 487.088L354.662 480.9C354.063 475.702 352.181 473.062 347.854 468.523C348.383 465.581 349.322 464.373 353.424 463.882C366.659 461.701 372.702 461.526 382.818 461.716C385.946 454.297 386.934 449.109 387.46 438.2C400.024 436.565 406.652 436.216 417.473 436.963C422.112 441.697 424.055 444.363 432.325 449.03C434.521 457.171 435.931 458.95 438.513 461.097L444.392 466.048L454.912 463.882L459.244 461.097V454.599L455.84 450.268C459.476 448.5 461.303 448.994 464.504 450.268C466.526 458.571 466.239 462.911 464.504 470.38C457.242 475.103 456.459 475.64 454.912 478.115C451.818 477.496 450.193 477.697 446.248 479.662C435.23 485.802 423.808 487.722 397.98 489.563C396.195 491.846 394.17 493.091 385.294 495.133C383.409 493.787 382.085 493.253 378.177 493.586C376.365 493.877 375.348 493.346 373.536 498.227C374.256 500.839 375.243 501.683 378.177 501.94L375.702 504.415C372.252 503.447 370.275 502.235 366.729 499.774Z" fill="#F9F9F9" stroke="#676767"/>
                        <path class="tennyson-svg" d="M537.217 387.766H531.647L526.078 395.502H511.845L504.11 396.43C498.452 401.967 496.668 405.028 497.612 410.353C502.534 412.669 504.956 412.865 509.06 412.519L516.796 419.636C514.013 424.04 511.9 425.994 507.204 428.609C501.317 430.393 497.829 430.551 491.114 428.609C483.528 426.713 480.881 423.989 476.572 418.708C473.441 412.593 470.243 409.352 462.338 403.856C453.568 402.411 449.88 402.798 447.177 407.259C445.695 416.295 449.962 422.421 454.294 428.609C458.625 434.797 453.365 446.246 453.365 446.246L455.841 450.268C459.477 448.5 461.303 448.995 464.504 450.268C466.526 458.572 466.239 462.911 464.504 470.38C470.121 473.874 473.723 473.009 479.975 472.546L484.926 474.093V476.259L474.096 478.115C475.153 480.894 475.104 482.454 474.096 485.232L470.693 487.707L470.701 487.725C472.796 492.464 473.974 495.126 480.594 497.609C491.323 493.173 497.835 489.911 510.298 482.757L511.845 468.833C512.247 463.242 512.955 460.613 516.796 458.622C512.615 453.665 511.747 450.611 514.32 444.389L521.437 437.582C521.003 435.668 520.704 433.329 522.365 431.703C524.652 429.466 527.006 434.797 530.41 433.25C533.813 431.703 529.407 429.371 533.813 427.062C538.22 424.753 540.443 424.83 544.024 427.062C544.024 427.062 545.257 430.46 547.118 430.775C549.315 431.146 550.958 429.235 551.45 427.062C551.999 424.635 548.131 423.97 548.356 421.492C548.663 418.121 553.485 419.282 555.472 416.542C557.538 413.693 557.948 407.878 557.948 407.878C555.63 403.348 555.029 399.527 555.472 389.932L544.024 388.694L539.073 384.363L537.217 387.766Z" fill="#F9F9F9" stroke="#676767"/>




                        <path class="pullenvale-svg text" d="M196.433 377.522C196.433 378.492 196.116 379.234 195.481 379.75C194.846 380.267 193.943 380.525 192.771 380.525H191.806V383.997H190.289V374.717H192.961C194.12 374.717 194.988 374.954 195.563 375.428C196.143 375.902 196.433 376.6 196.433 377.522ZM191.806 379.249H192.612C193.39 379.249 193.962 379.114 194.326 378.843C194.69 378.572 194.872 378.149 194.872 377.573C194.872 377.04 194.709 376.642 194.383 376.38C194.057 376.118 193.549 375.986 192.859 375.986H191.806V379.249ZM203.079 383.997L202.87 383.077H202.793C202.586 383.403 202.29 383.659 201.905 383.845C201.524 384.031 201.088 384.124 200.597 384.124C199.747 384.124 199.112 383.912 198.693 383.489C198.274 383.066 198.064 382.425 198.064 381.566V376.977H199.569V381.306C199.569 381.843 199.679 382.247 199.899 382.518C200.119 382.785 200.464 382.918 200.934 382.918C201.56 382.918 202.019 382.732 202.311 382.359C202.607 381.983 202.755 381.354 202.755 380.474V376.977H204.253V383.997H203.079ZM207.872 383.997H206.38V374.12H207.872V383.997ZM211.502 383.997H210.011V374.12H211.502V383.997ZM216.708 384.124C215.616 384.124 214.761 383.807 214.143 383.172C213.529 382.533 213.223 381.655 213.223 380.538C213.223 379.391 213.508 378.489 214.08 377.833C214.651 377.178 215.436 376.85 216.435 376.85C217.361 376.85 218.093 377.131 218.631 377.694C219.168 378.257 219.437 379.031 219.437 380.017V380.823H214.759C214.78 381.505 214.964 382.029 215.311 382.397C215.658 382.761 216.147 382.943 216.777 382.943C217.192 382.943 217.577 382.905 217.933 382.829C218.292 382.749 218.677 382.618 219.088 382.436V383.648C218.724 383.821 218.356 383.944 217.983 384.016C217.611 384.088 217.186 384.124 216.708 384.124ZM216.435 377.979C215.961 377.979 215.58 378.13 215.292 378.43C215.008 378.731 214.839 379.169 214.784 379.744H217.971C217.962 379.164 217.823 378.726 217.552 378.43C217.281 378.13 216.909 377.979 216.435 377.979ZM227.308 383.997H225.81V379.681C225.81 379.139 225.7 378.735 225.48 378.468C225.264 378.202 224.919 378.068 224.445 378.068C223.815 378.068 223.354 378.255 223.062 378.627C222.77 378.999 222.624 379.624 222.624 380.5V383.997H221.132V376.977H222.3L222.509 377.897H222.585C222.797 377.563 223.097 377.305 223.487 377.123C223.876 376.941 224.308 376.85 224.782 376.85C226.466 376.85 227.308 377.707 227.308 379.42V383.997ZM230.983 383.997L228.317 376.977H229.892L231.32 381.058C231.565 381.744 231.713 382.298 231.764 382.721H231.815C231.853 382.417 232.001 381.862 232.259 381.058L233.688 376.977H235.274L232.596 383.997H230.983ZM240.733 383.997L240.435 383.02H240.384C240.046 383.447 239.705 383.739 239.362 383.896C239.02 384.048 238.579 384.124 238.042 384.124C237.352 384.124 236.813 383.938 236.423 383.565C236.038 383.193 235.846 382.666 235.846 381.985C235.846 381.261 236.114 380.715 236.652 380.347C237.189 379.979 238.008 379.778 239.108 379.744L240.321 379.706V379.332C240.321 378.883 240.215 378.549 240.003 378.329C239.796 378.104 239.472 377.992 239.032 377.992C238.673 377.992 238.328 378.045 237.998 378.151C237.667 378.257 237.35 378.382 237.045 378.525L236.563 377.459C236.944 377.26 237.361 377.11 237.813 377.008C238.266 376.903 238.694 376.85 239.096 376.85C239.989 376.85 240.661 377.044 241.114 377.434C241.571 377.823 241.8 378.434 241.8 379.268V383.997H240.733ZM238.512 382.981C239.053 382.981 239.487 382.831 239.813 382.531C240.143 382.226 240.308 381.801 240.308 381.255V380.646L239.407 380.684C238.704 380.709 238.192 380.827 237.871 381.039C237.553 381.246 237.395 381.566 237.395 381.998C237.395 382.311 237.488 382.554 237.674 382.728C237.86 382.897 238.139 382.981 238.512 382.981ZM245.374 383.997H243.882V374.12H245.374V383.997ZM250.579 384.124C249.487 384.124 248.632 383.807 248.014 383.172C247.401 382.533 247.094 381.655 247.094 380.538C247.094 379.391 247.379 378.489 247.951 377.833C248.522 377.178 249.307 376.85 250.306 376.85C251.232 376.85 251.965 377.131 252.502 377.694C253.039 378.257 253.308 379.031 253.308 380.017V380.823H248.63C248.651 381.505 248.835 382.029 249.182 382.397C249.529 382.761 250.018 382.943 250.648 382.943C251.063 382.943 251.448 382.905 251.804 382.829C252.163 382.749 252.549 382.618 252.959 382.436V383.648C252.595 383.821 252.227 383.944 251.854 384.016C251.482 384.088 251.057 384.124 250.579 384.124ZM250.306 377.979C249.832 377.979 249.451 378.13 249.163 378.43C248.88 378.731 248.71 379.169 248.655 379.744H251.842C251.833 379.164 251.694 378.726 251.423 378.43C251.152 378.13 250.78 377.979 250.306 377.979Z" fill="#262626"/>
                        <path class="gap-svg text" d="M348.646 299.998H347.129V292.019H344.4V290.717H351.376V292.019H348.646V299.998ZM358.822 299.998H357.324V295.681C357.324 295.14 357.214 294.735 356.994 294.469C356.778 294.202 356.433 294.069 355.959 294.069C355.333 294.069 354.871 294.257 354.575 294.634C354.283 295.006 354.137 295.633 354.137 296.513V299.998H352.646V290.121H354.137V292.628C354.137 293.03 354.112 293.46 354.061 293.917H354.156C354.359 293.578 354.641 293.316 355 293.13C355.364 292.943 355.788 292.85 356.27 292.85C357.971 292.85 358.822 293.707 358.822 295.421V299.998ZM363.963 300.125C362.872 300.125 362.017 299.807 361.399 299.172C360.785 298.533 360.479 297.655 360.479 296.538C360.479 295.391 360.764 294.49 361.335 293.834C361.907 293.178 362.692 292.85 363.69 292.85C364.617 292.85 365.349 293.132 365.887 293.694C366.424 294.257 366.693 295.032 366.693 296.018V296.824H362.015C362.036 297.505 362.22 298.03 362.567 298.398C362.914 298.762 363.403 298.944 364.033 298.944C364.448 298.944 364.833 298.906 365.188 298.83C365.548 298.749 365.933 298.618 366.344 298.436V299.649C365.98 299.822 365.612 299.945 365.239 300.017C364.867 300.089 364.442 300.125 363.963 300.125ZM363.69 293.98C363.216 293.98 362.836 294.13 362.548 294.431C362.264 294.731 362.095 295.169 362.04 295.745H365.227C365.218 295.165 365.078 294.727 364.808 294.431C364.537 294.13 364.164 293.98 363.69 293.98ZM375.719 294.964H379.134V299.623C378.576 299.805 378.038 299.934 377.522 300.01C377.01 300.087 376.456 300.125 375.859 300.125C374.454 300.125 373.371 299.71 372.609 298.88C371.847 298.047 371.466 296.873 371.466 295.358C371.466 293.864 371.896 292.696 372.755 291.854C373.614 291.007 374.797 290.584 376.303 290.584C377.272 290.584 378.191 290.77 379.058 291.143L378.525 292.406C377.772 292.059 377.018 291.885 376.265 291.885C375.275 291.885 374.492 292.196 373.917 292.818C373.341 293.441 373.053 294.291 373.053 295.37C373.053 296.504 373.311 297.368 373.828 297.96C374.348 298.548 375.095 298.842 376.068 298.842C376.559 298.842 377.084 298.781 377.643 298.658V296.265H375.719V294.964ZM385.603 299.998L385.304 299.02H385.253C384.915 299.448 384.574 299.74 384.231 299.896C383.889 300.048 383.449 300.125 382.911 300.125C382.221 300.125 381.682 299.938 381.292 299.566C380.907 299.194 380.715 298.667 380.715 297.985C380.715 297.262 380.984 296.716 381.521 296.348C382.058 295.98 382.877 295.779 383.978 295.745L385.19 295.707V295.332C385.19 294.884 385.084 294.549 384.873 294.329C384.665 294.105 384.341 293.993 383.901 293.993C383.542 293.993 383.197 294.046 382.867 294.151C382.537 294.257 382.219 294.382 381.915 294.526L381.432 293.46C381.813 293.261 382.23 293.11 382.683 293.009C383.135 292.903 383.563 292.85 383.965 292.85C384.858 292.85 385.531 293.045 385.983 293.434C386.44 293.824 386.669 294.435 386.669 295.269V299.998H385.603ZM383.381 298.982C383.923 298.982 384.356 298.832 384.682 298.531C385.012 298.227 385.177 297.801 385.177 297.255V296.646L384.276 296.684C383.573 296.71 383.061 296.828 382.74 297.04C382.422 297.247 382.264 297.567 382.264 297.998C382.264 298.311 382.357 298.555 382.543 298.728C382.729 298.897 383.008 298.982 383.381 298.982ZM392.312 300.125C391.423 300.125 390.734 299.805 390.243 299.166H390.154C390.213 299.759 390.243 300.118 390.243 300.245V303.121H388.751V292.977H389.957C389.991 293.108 390.061 293.422 390.167 293.917H390.243C390.708 293.206 391.406 292.85 392.337 292.85C393.213 292.85 393.895 293.168 394.381 293.802C394.872 294.437 395.118 295.328 395.118 296.475C395.118 297.622 394.868 298.517 394.369 299.16C393.874 299.803 393.188 300.125 392.312 300.125ZM391.95 294.069C391.358 294.069 390.924 294.242 390.649 294.589C390.378 294.936 390.243 295.491 390.243 296.253V296.475C390.243 297.33 390.378 297.95 390.649 298.335C390.92 298.715 391.362 298.906 391.976 298.906C392.492 298.906 392.89 298.694 393.169 298.271C393.448 297.848 393.588 297.245 393.588 296.462C393.588 295.675 393.448 295.08 393.169 294.678C392.894 294.272 392.488 294.069 391.95 294.069Z" fill="#262626"/>
                        <path class="enoggera-svg text" d="M399.001 245.998H393.656V236.718H399.001V238.33H395.624V240.368H398.766V241.98H395.624V244.373H399.001V245.998ZM407.342 245.998H405.406V241.853C405.406 241.341 405.315 240.958 405.133 240.704C404.951 240.446 404.661 240.317 404.263 240.317C403.722 240.317 403.33 240.499 403.089 240.863C402.848 241.222 402.727 241.821 402.727 242.659V245.998H400.791V238.901H402.27L402.53 239.809H402.638C402.854 239.466 403.15 239.208 403.527 239.035C403.908 238.857 404.339 238.768 404.822 238.768C405.647 238.768 406.273 238.992 406.701 239.441C407.128 239.885 407.342 240.528 407.342 241.371V245.998ZM410.877 242.437C410.877 243.139 410.992 243.671 411.22 244.03C411.453 244.39 411.83 244.57 412.35 244.57C412.866 244.57 413.237 244.392 413.461 244.037C413.689 243.677 413.804 243.144 413.804 242.437C413.804 241.735 413.689 241.208 413.461 240.856C413.232 240.505 412.858 240.33 412.337 240.33C411.821 240.33 411.449 240.505 411.22 240.856C410.992 241.203 410.877 241.73 410.877 242.437ZM415.784 242.437C415.784 243.592 415.479 244.496 414.87 245.147C414.261 245.799 413.412 246.125 412.325 246.125C411.643 246.125 411.042 245.977 410.522 245.681C410.001 245.38 409.602 244.951 409.322 244.392C409.043 243.833 408.903 243.182 408.903 242.437C408.903 241.278 409.206 240.376 409.811 239.733C410.416 239.09 411.267 238.768 412.363 238.768C413.044 238.768 413.645 238.916 414.166 239.212C414.686 239.509 415.086 239.934 415.365 240.488C415.645 241.043 415.784 241.692 415.784 242.437ZM423.56 238.901V239.885L422.449 240.171C422.652 240.488 422.754 240.844 422.754 241.237C422.754 241.999 422.487 242.594 421.954 243.021C421.425 243.444 420.689 243.656 419.745 243.656L419.396 243.637L419.11 243.605C418.911 243.757 418.812 243.927 418.812 244.113C418.812 244.392 419.167 244.532 419.878 244.532H421.084C421.863 244.532 422.456 244.699 422.862 245.033C423.272 245.368 423.478 245.858 423.478 246.506C423.478 247.335 423.131 247.979 422.437 248.436C421.747 248.893 420.754 249.121 419.459 249.121C418.469 249.121 417.712 248.948 417.187 248.601C416.667 248.258 416.406 247.775 416.406 247.153C416.406 246.726 416.54 246.368 416.806 246.081C417.073 245.793 417.464 245.588 417.98 245.465C417.782 245.38 417.608 245.243 417.46 245.052C417.312 244.858 417.238 244.652 417.238 244.437C417.238 244.166 417.316 243.941 417.473 243.764C417.629 243.582 417.856 243.404 418.152 243.23C417.779 243.07 417.483 242.812 417.263 242.456C417.047 242.101 416.939 241.682 416.939 241.199C416.939 240.425 417.191 239.826 417.695 239.403C418.198 238.98 418.918 238.768 419.853 238.768C420.052 238.768 420.287 238.787 420.558 238.825C420.833 238.859 421.008 238.884 421.084 238.901H423.56ZM418.082 247.001C418.082 247.268 418.209 247.477 418.463 247.629C418.721 247.782 419.081 247.858 419.542 247.858C420.236 247.858 420.78 247.763 421.173 247.572C421.567 247.382 421.764 247.122 421.764 246.792C421.764 246.525 421.647 246.341 421.415 246.239C421.182 246.138 420.822 246.087 420.335 246.087H419.333C418.977 246.087 418.679 246.169 418.438 246.334C418.201 246.504 418.082 246.726 418.082 247.001ZM418.787 241.225C418.787 241.61 418.873 241.914 419.047 242.139C419.225 242.363 419.493 242.475 419.853 242.475C420.217 242.475 420.484 242.363 420.653 242.139C420.822 241.914 420.907 241.61 420.907 241.225C420.907 240.37 420.556 239.942 419.853 239.942C419.142 239.942 418.787 240.37 418.787 241.225ZM430.911 238.901V239.885L429.8 240.171C430.003 240.488 430.104 240.844 430.104 241.237C430.104 241.999 429.838 242.594 429.305 243.021C428.776 243.444 428.039 243.656 427.096 243.656L426.747 243.637L426.461 243.605C426.262 243.757 426.163 243.927 426.163 244.113C426.163 244.392 426.518 244.532 427.229 244.532H428.435C429.214 244.532 429.806 244.699 430.212 245.033C430.623 245.368 430.828 245.858 430.828 246.506C430.828 247.335 430.481 247.979 429.787 248.436C429.097 248.893 428.105 249.121 426.81 249.121C425.82 249.121 425.062 248.948 424.538 248.601C424.017 248.258 423.757 247.775 423.757 247.153C423.757 246.726 423.89 246.368 424.157 246.081C424.423 245.793 424.815 245.588 425.331 245.465C425.132 245.38 424.959 245.243 424.811 245.052C424.662 244.858 424.588 244.652 424.588 244.437C424.588 244.166 424.667 243.941 424.823 243.764C424.98 243.582 425.206 243.404 425.502 243.23C425.13 243.07 424.834 242.812 424.614 242.456C424.398 242.101 424.29 241.682 424.29 241.199C424.29 240.425 424.542 239.826 425.045 239.403C425.549 238.98 426.268 238.768 427.204 238.768C427.403 238.768 427.637 238.787 427.908 238.825C428.183 238.859 428.359 238.884 428.435 238.901H430.911ZM425.433 247.001C425.433 247.268 425.56 247.477 425.813 247.629C426.072 247.782 426.431 247.858 426.893 247.858C427.587 247.858 428.13 247.763 428.524 247.572C428.917 247.382 429.114 247.122 429.114 246.792C429.114 246.525 428.998 246.341 428.765 246.239C428.532 246.138 428.173 246.087 427.686 246.087H426.683C426.328 246.087 426.029 246.169 425.788 246.334C425.551 246.504 425.433 246.726 425.433 247.001ZM426.137 241.225C426.137 241.61 426.224 241.914 426.397 242.139C426.575 242.363 426.844 242.475 427.204 242.475C427.568 242.475 427.834 242.363 428.003 242.139C428.173 241.914 428.257 241.61 428.257 241.225C428.257 240.37 427.906 239.942 427.204 239.942C426.493 239.942 426.137 240.37 426.137 241.225ZM435.024 240.146C434.613 240.146 434.292 240.277 434.059 240.539C433.826 240.797 433.693 241.165 433.659 241.644H436.376C436.368 241.165 436.243 240.797 436.001 240.539C435.76 240.277 435.434 240.146 435.024 240.146ZM435.297 246.125C434.154 246.125 433.261 245.81 432.618 245.179C431.975 244.549 431.653 243.656 431.653 242.5C431.653 241.311 431.95 240.393 432.542 239.746C433.139 239.094 433.962 238.768 435.011 238.768C436.014 238.768 436.795 239.054 437.354 239.625C437.912 240.196 438.191 240.986 438.191 241.993V242.932H433.615C433.636 243.482 433.799 243.912 434.104 244.221C434.408 244.53 434.836 244.684 435.386 244.684C435.813 244.684 436.217 244.64 436.598 244.551C436.979 244.462 437.377 244.32 437.792 244.125V245.624C437.453 245.793 437.091 245.918 436.706 245.998C436.321 246.083 435.851 246.125 435.297 246.125ZM443.727 238.768C443.989 238.768 444.207 238.787 444.38 238.825L444.234 240.641C444.078 240.598 443.887 240.577 443.663 240.577C443.045 240.577 442.563 240.736 442.216 241.053C441.873 241.371 441.702 241.815 441.702 242.386V245.998H439.766V238.901H441.232L441.518 240.095H441.613C441.833 239.697 442.129 239.377 442.501 239.136C442.878 238.891 443.286 238.768 443.727 238.768ZM450.176 245.998L449.801 245.033H449.75C449.425 245.444 449.088 245.729 448.741 245.89C448.398 246.047 447.95 246.125 447.396 246.125C446.714 246.125 446.177 245.93 445.783 245.541C445.394 245.152 445.199 244.597 445.199 243.878C445.199 243.125 445.462 242.57 445.986 242.215C446.515 241.855 447.311 241.656 448.373 241.618L449.604 241.58V241.269C449.604 240.55 449.236 240.19 448.5 240.19C447.933 240.19 447.266 240.361 446.5 240.704L445.859 239.396C446.676 238.969 447.582 238.755 448.576 238.755C449.528 238.755 450.258 238.963 450.766 239.377C451.274 239.792 451.528 240.423 451.528 241.269V245.998H450.176ZM449.604 242.71L448.855 242.735C448.293 242.752 447.874 242.854 447.599 243.04C447.324 243.226 447.186 243.51 447.186 243.891C447.186 244.437 447.499 244.709 448.125 244.709C448.574 244.709 448.932 244.58 449.198 244.322C449.469 244.064 449.604 243.721 449.604 243.294V242.71Z" fill="#262626"/>
                        <path class="mcdowall-svg text" d="M471.559 206.998L468.867 199.248H468.816C468.888 200.399 468.924 201.478 468.924 202.485V206.998H467.547V197.718H469.686L472.263 205.1H472.301L474.955 197.718H477.1V206.998H475.64V202.409C475.64 201.948 475.651 201.347 475.672 200.606C475.697 199.866 475.718 199.417 475.735 199.261H475.685L472.898 206.998H471.559ZM482.216 207.125C481.154 207.125 480.346 206.816 479.792 206.199C479.241 205.577 478.966 204.686 478.966 203.526C478.966 202.346 479.254 201.438 479.83 200.803C480.409 200.168 481.245 199.851 482.337 199.851C483.077 199.851 483.744 199.988 484.336 200.264L483.886 201.463C483.255 201.218 482.735 201.095 482.324 201.095C481.11 201.095 480.502 201.901 480.502 203.514C480.502 204.301 480.653 204.893 480.953 205.291C481.258 205.684 481.702 205.881 482.286 205.881C482.951 205.881 483.579 205.716 484.171 205.386V206.687C483.905 206.844 483.619 206.956 483.314 207.024C483.014 207.092 482.648 207.125 482.216 207.125ZM493.528 202.269C493.528 203.801 493.103 204.974 492.252 205.786C491.401 206.594 490.176 206.998 488.577 206.998H485.98V197.718H488.85C490.326 197.718 491.475 198.116 492.296 198.911C493.117 199.707 493.528 200.826 493.528 202.269ZM491.928 202.32C491.928 200.099 490.889 198.988 488.812 198.988H487.498V205.723H488.577C490.811 205.723 491.928 204.588 491.928 202.32ZM501.596 203.475C501.596 204.622 501.302 205.517 500.713 206.161C500.125 206.804 499.306 207.125 498.257 207.125C497.601 207.125 497.021 206.977 496.518 206.681C496.014 206.385 495.627 205.96 495.356 205.405C495.085 204.851 494.95 204.208 494.95 203.475C494.95 202.337 495.242 201.448 495.826 200.809C496.41 200.17 497.233 199.851 498.295 199.851C499.311 199.851 500.115 200.179 500.707 200.835C501.299 201.487 501.596 202.367 501.596 203.475ZM496.486 203.475C496.486 205.096 497.085 205.907 498.282 205.907C499.467 205.907 500.06 205.096 500.06 203.475C500.06 201.872 499.463 201.07 498.27 201.07C497.643 201.07 497.188 201.277 496.905 201.692C496.625 202.106 496.486 202.701 496.486 203.475ZM509.073 206.998L508.166 203.723C508.056 203.376 507.857 202.57 507.569 201.305H507.512C507.266 202.447 507.072 203.258 506.928 203.736L505.995 206.998H504.344L502.376 199.978H503.9L504.795 203.437C504.998 204.292 505.142 205.024 505.227 205.634H505.265C505.307 205.325 505.37 204.971 505.455 204.574C505.544 204.172 505.62 203.871 505.684 203.672L506.75 199.978H508.388L509.422 203.672C509.486 203.88 509.564 204.197 509.657 204.624C509.755 205.052 509.812 205.384 509.829 205.621H509.879C509.943 205.1 510.091 204.373 510.324 203.437L511.231 199.978H512.729L510.749 206.998H509.073ZM518.334 206.998L518.036 206.021H517.985C517.647 206.448 517.306 206.74 516.963 206.897C516.621 207.049 516.181 207.125 515.643 207.125C514.953 207.125 514.414 206.939 514.024 206.567C513.639 206.194 513.447 205.668 513.447 204.986C513.447 204.263 513.715 203.717 514.253 203.349C514.79 202.98 515.609 202.779 516.709 202.745L517.922 202.707V202.333C517.922 201.884 517.816 201.55 517.604 201.33C517.397 201.106 517.073 200.994 516.633 200.994C516.274 200.994 515.929 201.046 515.599 201.152C515.269 201.258 514.951 201.383 514.646 201.527L514.164 200.46C514.545 200.261 514.962 200.111 515.415 200.01C515.867 199.904 516.295 199.851 516.697 199.851C517.59 199.851 518.263 200.046 518.715 200.435C519.172 200.824 519.401 201.436 519.401 202.269V206.998H518.334ZM516.113 205.983C516.654 205.983 517.088 205.833 517.414 205.532C517.744 205.227 517.909 204.802 517.909 204.256V203.647L517.008 203.685C516.305 203.71 515.793 203.829 515.472 204.04C515.154 204.248 514.996 204.567 514.996 204.999C514.996 205.312 515.089 205.555 515.275 205.729C515.461 205.898 515.74 205.983 516.113 205.983ZM522.975 206.998H521.483V197.121H522.975V206.998ZM526.605 206.998H525.114V197.121H526.605V206.998Z" fill="#262626"/>
                        <path class="bracken-svg text" d="M506.549 68.7197H509.304C510.582 68.7197 511.504 68.9059 512.071 69.2783C512.643 69.6507 512.928 70.2389 512.928 71.043C512.928 71.5846 512.789 72.0353 512.509 72.395C512.23 72.7547 511.828 72.9811 511.303 73.0742V73.1377C511.955 73.2604 512.433 73.5037 512.738 73.8677C513.047 74.2274 513.201 74.7161 513.201 75.334C513.201 76.1676 512.909 76.8215 512.325 77.2954C511.745 77.7651 510.937 78 509.9 78H506.549V68.7197ZM508.066 72.5537H509.526C510.161 72.5537 510.624 72.4543 510.916 72.2554C511.208 72.0522 511.354 71.7095 511.354 71.2271C511.354 70.7912 511.195 70.4759 510.878 70.2812C510.565 70.0866 510.065 69.9893 509.38 69.9893H508.066V72.5537ZM508.066 73.7852V76.7241H509.678C510.313 76.7241 510.791 76.6035 511.113 76.3623C511.439 76.1169 511.602 75.7318 511.602 75.207C511.602 74.7246 511.437 74.367 511.106 74.1343C510.776 73.9015 510.275 73.7852 509.602 73.7852H508.066ZM518.533 70.8525C518.834 70.8525 519.081 70.8737 519.276 70.916L519.13 72.3062C518.918 72.2554 518.698 72.23 518.47 72.23C517.873 72.23 517.389 72.4246 517.016 72.814C516.648 73.2033 516.464 73.709 516.464 74.3311V78H514.972V70.9795H516.14L516.337 72.2173H516.413C516.646 71.7983 516.948 71.4661 517.321 71.2207C517.697 70.9753 518.102 70.8525 518.533 70.8525ZM524.976 78L524.678 77.0225H524.627C524.288 77.4499 523.948 77.7419 523.605 77.8984C523.262 78.0508 522.822 78.127 522.285 78.127C521.595 78.127 521.055 77.9408 520.666 77.5684C520.281 77.196 520.088 76.6691 520.088 75.9878C520.088 75.2642 520.357 74.7183 520.895 74.3501C521.432 73.9819 522.251 73.7809 523.351 73.7471L524.563 73.709V73.3345C524.563 72.8859 524.458 72.5516 524.246 72.3315C524.039 72.1073 523.715 71.9951 523.275 71.9951C522.915 71.9951 522.57 72.048 522.24 72.1538C521.91 72.2596 521.593 72.3844 521.288 72.5283L520.806 71.4619C521.187 71.263 521.603 71.1128 522.056 71.0112C522.509 70.9054 522.936 70.8525 523.338 70.8525C524.231 70.8525 524.904 71.0472 525.357 71.4365C525.814 71.8258 526.042 72.4373 526.042 73.271V78H524.976ZM522.754 76.9844C523.296 76.9844 523.73 76.8341 524.056 76.5337C524.386 76.229 524.551 75.8037 524.551 75.2578V74.6484L523.649 74.6865C522.947 74.7119 522.435 74.8304 522.113 75.042C521.796 75.2493 521.637 75.5688 521.637 76.0005C521.637 76.3136 521.73 76.557 521.917 76.7305C522.103 76.8997 522.382 76.9844 522.754 76.9844ZM530.956 78.127C529.893 78.127 529.085 77.818 528.531 77.2002C527.981 76.5781 527.706 75.6873 527.706 74.5278C527.706 73.3472 527.993 72.4395 528.569 71.8047C529.149 71.1699 529.984 70.8525 531.076 70.8525C531.817 70.8525 532.483 70.9901 533.076 71.2651L532.625 72.4648C531.994 72.2194 531.474 72.0967 531.063 72.0967C529.849 72.0967 529.242 72.9028 529.242 74.5151C529.242 75.3022 529.392 75.8947 529.692 76.2925C529.997 76.686 530.441 76.8828 531.025 76.8828C531.69 76.8828 532.318 76.7178 532.911 76.3877V77.689C532.644 77.8455 532.358 77.9577 532.054 78.0254C531.753 78.0931 531.387 78.127 530.956 78.127ZM536.002 74.293L536.846 73.2393L538.966 70.9795H540.687L537.862 73.9946L540.864 78H539.112L536.859 74.9214L536.04 75.5942V78H534.561V68.123H536.04V72.9409L535.964 74.293H536.002ZM545.066 78.127C543.975 78.127 543.12 77.8096 542.502 77.1748C541.888 76.5358 541.582 75.6577 541.582 74.5405C541.582 73.3937 541.867 72.4924 542.438 71.8364C543.01 71.1805 543.795 70.8525 544.793 70.8525C545.72 70.8525 546.452 71.134 546.99 71.6968C547.527 72.2596 547.796 73.034 547.796 74.02V74.8262H543.118C543.139 75.5075 543.323 76.0322 543.67 76.4004C544.017 76.7643 544.506 76.9463 545.136 76.9463C545.551 76.9463 545.936 76.9082 546.292 76.832C546.651 76.7516 547.036 76.6204 547.447 76.4385V77.6509C547.083 77.8244 546.715 77.9471 546.342 78.019C545.97 78.091 545.545 78.127 545.066 78.127ZM544.793 71.9824C544.319 71.9824 543.939 72.1326 543.651 72.4331C543.367 72.7336 543.198 73.1715 543.143 73.7471H546.33C546.321 73.1673 546.181 72.7293 545.911 72.4331C545.64 72.1326 545.267 71.9824 544.793 71.9824ZM555.667 78H554.169V73.6836C554.169 73.1419 554.059 72.7378 553.839 72.4712C553.623 72.2046 553.278 72.0713 552.804 72.0713C552.174 72.0713 551.712 72.2575 551.42 72.6299C551.128 73.0023 550.982 73.6265 550.982 74.5024V78H549.491V70.9795H550.659L550.868 71.8999H550.944C551.156 71.5656 551.456 71.3075 551.846 71.1255C552.235 70.9435 552.667 70.8525 553.141 70.8525C554.825 70.8525 555.667 71.7095 555.667 73.4233V78ZM516.356 86.0361H517.41C518.116 86.0361 518.628 85.9049 518.946 85.6426C519.263 85.3802 519.422 84.9909 519.422 84.4746C519.422 83.9499 519.25 83.5732 518.908 83.3447C518.565 83.1162 518.049 83.002 517.359 83.002H516.356V86.0361ZM516.356 87.293V91H514.839V81.7197H517.46C518.658 81.7197 519.545 81.944 520.12 82.3926C520.696 82.8411 520.983 83.5182 520.983 84.4238C520.983 85.5791 520.382 86.4022 519.181 86.8931L521.802 91H520.076L517.854 87.293H516.356ZM524.487 91H522.996V83.9795H524.487V91ZM522.907 82.1196C522.907 81.853 522.979 81.6478 523.123 81.5039C523.271 81.36 523.48 81.2881 523.751 81.2881C524.013 81.2881 524.216 81.36 524.36 81.5039C524.508 81.6478 524.583 81.853 524.583 82.1196C524.583 82.3735 524.508 82.5745 524.36 82.7227C524.216 82.8665 524.013 82.9385 523.751 82.9385C523.48 82.9385 523.271 82.8665 523.123 82.7227C522.979 82.5745 522.907 82.3735 522.907 82.1196ZM528.994 91.127C528.118 91.127 527.435 90.8096 526.944 90.1748C526.453 89.54 526.208 88.6493 526.208 87.5024C526.208 86.3514 526.455 85.4564 526.95 84.8174C527.45 84.1742 528.139 83.8525 529.02 83.8525C529.942 83.8525 530.645 84.1932 531.127 84.8745H531.203C531.131 84.3709 531.095 83.9731 531.095 83.6812V81.123H532.593V91H531.425L531.165 90.0796H531.095C530.617 90.7778 529.917 91.127 528.994 91.127ZM529.394 89.9209C530.008 89.9209 530.454 89.7495 530.733 89.4067C531.013 89.0597 531.157 88.499 531.165 87.7246V87.5151C531.165 86.6307 531.021 86.0023 530.733 85.6299C530.446 85.2575 529.995 85.0713 529.381 85.0713C528.857 85.0713 528.452 85.285 528.169 85.7124C527.885 86.1356 527.744 86.7407 527.744 87.5278C527.744 88.3065 527.881 88.901 528.156 89.3115C528.431 89.7178 528.844 89.9209 529.394 89.9209ZM540.655 83.9795V84.7983L539.455 85.0205C539.565 85.1686 539.656 85.3506 539.728 85.5664C539.8 85.7822 539.836 86.0107 539.836 86.252C539.836 86.9756 539.586 87.5448 539.087 87.9595C538.588 88.3742 537.9 88.5815 537.024 88.5815C536.8 88.5815 536.597 88.5646 536.415 88.5308C536.093 88.7297 535.932 88.9624 535.932 89.229C535.932 89.3898 536.006 89.5104 536.154 89.5908C536.307 89.6712 536.584 89.7114 536.986 89.7114H538.211C538.985 89.7114 539.574 89.8765 539.976 90.2065C540.378 90.5366 540.579 91.0127 540.579 91.6348C540.579 92.4303 540.251 93.0439 539.595 93.4756C538.939 93.9072 537.991 94.123 536.751 94.123C535.795 94.123 535.065 93.9538 534.561 93.6152C534.057 93.2767 533.806 92.7943 533.806 92.168C533.806 91.7363 533.941 91.3724 534.212 91.0762C534.487 90.7842 534.87 90.5811 535.361 90.4668C535.162 90.3822 534.997 90.2467 534.866 90.0605C534.739 89.8701 534.675 89.6712 534.675 89.4639C534.675 89.2015 534.749 88.9793 534.897 88.7974C535.046 88.6154 535.266 88.4355 535.558 88.2578C535.194 88.1012 534.897 87.8473 534.669 87.4961C534.445 87.1406 534.333 86.7259 534.333 86.252C534.333 85.4902 534.572 84.8999 535.05 84.481C535.532 84.062 536.218 83.8525 537.106 83.8525C537.305 83.8525 537.513 83.8674 537.729 83.897C537.949 83.9224 538.114 83.9499 538.224 83.9795H540.655ZM535.139 92.0918C535.139 92.4134 535.283 92.661 535.57 92.8345C535.862 93.008 536.271 93.0947 536.795 93.0947C537.608 93.0947 538.213 92.9784 538.611 92.7456C539.009 92.5129 539.208 92.2039 539.208 91.8188C539.208 91.5142 539.097 91.2962 538.877 91.165C538.662 91.0381 538.257 90.9746 537.665 90.9746H536.535C536.108 90.9746 535.767 91.0741 535.513 91.2729C535.264 91.4761 535.139 91.749 535.139 92.0918ZM535.78 86.252C535.78 86.6921 535.892 87.0306 536.116 87.2676C536.345 87.5046 536.671 87.623 537.094 87.623C537.957 87.623 538.389 87.1618 538.389 86.2393C538.389 85.7822 538.281 85.431 538.065 85.1855C537.853 84.9359 537.53 84.811 537.094 84.811C536.662 84.811 536.334 84.9338 536.11 85.1792C535.89 85.4246 535.78 85.7822 535.78 86.252ZM545.028 91.127C543.937 91.127 543.082 90.8096 542.464 90.1748C541.85 89.5358 541.543 88.6577 541.543 87.5405C541.543 86.3937 541.829 85.4924 542.4 84.8364C542.972 84.1805 543.757 83.8525 544.755 83.8525C545.682 83.8525 546.414 84.134 546.952 84.6968C547.489 85.2596 547.758 86.034 547.758 87.02V87.8262H543.08C543.101 88.5075 543.285 89.0322 543.632 89.4004C543.979 89.7643 544.468 89.9463 545.098 89.9463C545.513 89.9463 545.898 89.9082 546.253 89.832C546.613 89.7516 546.998 89.6204 547.409 89.4385V90.6509C547.045 90.8244 546.677 90.9471 546.304 91.019C545.932 91.091 545.507 91.127 545.028 91.127ZM544.755 84.9824C544.281 84.9824 543.901 85.1326 543.613 85.4331C543.329 85.7336 543.16 86.1715 543.105 86.7471H546.292C546.283 86.1673 546.143 85.7293 545.873 85.4331C545.602 85.1326 545.229 84.9824 544.755 84.9824Z" fill="#262626"/>
                        <path class="deagon-svg text" d="M578.266 125.271C578.266 126.803 577.84 127.975 576.99 128.788C576.139 129.596 574.914 130 573.314 130H570.718V120.72H573.587C575.064 120.72 576.213 121.118 577.034 121.913C577.855 122.709 578.266 123.828 578.266 125.271ZM576.666 125.322C576.666 123.1 575.627 121.989 573.549 121.989H572.235V128.724H573.314C575.549 128.724 576.666 127.59 576.666 125.322ZM583.172 130.127C582.081 130.127 581.226 129.81 580.608 129.175C579.994 128.536 579.688 127.658 579.688 126.541C579.688 125.394 579.973 124.492 580.544 123.836C581.116 123.181 581.901 122.853 582.899 122.853C583.826 122.853 584.558 123.134 585.096 123.697C585.633 124.26 585.902 125.034 585.902 126.02V126.826H581.224C581.245 127.507 581.429 128.032 581.776 128.4C582.123 128.764 582.612 128.946 583.242 128.946C583.657 128.946 584.042 128.908 584.397 128.832C584.757 128.752 585.142 128.62 585.553 128.438V129.651C585.189 129.824 584.821 129.947 584.448 130.019C584.076 130.091 583.651 130.127 583.172 130.127ZM582.899 123.982C582.425 123.982 582.045 124.133 581.757 124.433C581.473 124.734 581.304 125.172 581.249 125.747H584.436C584.427 125.167 584.287 124.729 584.017 124.433C583.746 124.133 583.373 123.982 582.899 123.982ZM591.989 130L591.691 129.022H591.64C591.302 129.45 590.961 129.742 590.618 129.898C590.275 130.051 589.835 130.127 589.298 130.127C588.608 130.127 588.069 129.941 587.679 129.568C587.294 129.196 587.102 128.669 587.102 127.988C587.102 127.264 587.37 126.718 587.908 126.35C588.445 125.982 589.264 125.781 590.364 125.747L591.577 125.709V125.334C591.577 124.886 591.471 124.552 591.259 124.332C591.052 124.107 590.728 123.995 590.288 123.995C589.928 123.995 589.583 124.048 589.253 124.154C588.923 124.26 588.606 124.384 588.301 124.528L587.819 123.462C588.2 123.263 588.617 123.113 589.069 123.011C589.522 122.905 589.95 122.853 590.352 122.853C591.244 122.853 591.917 123.047 592.37 123.437C592.827 123.826 593.056 124.437 593.056 125.271V130H591.989ZM589.768 128.984C590.309 128.984 590.743 128.834 591.069 128.534C591.399 128.229 591.564 127.804 591.564 127.258V126.648L590.663 126.687C589.96 126.712 589.448 126.83 589.126 127.042C588.809 127.249 588.65 127.569 588.65 128C588.65 128.314 588.743 128.557 588.93 128.73C589.116 128.9 589.395 128.984 589.768 128.984ZM601.066 122.979V123.798L599.867 124.021C599.977 124.169 600.068 124.351 600.14 124.566C600.212 124.782 600.248 125.011 600.248 125.252C600.248 125.976 599.998 126.545 599.499 126.959C598.999 127.374 598.312 127.582 597.436 127.582C597.211 127.582 597.008 127.565 596.826 127.531C596.505 127.73 596.344 127.962 596.344 128.229C596.344 128.39 596.418 128.51 596.566 128.591C596.718 128.671 596.995 128.711 597.397 128.711H598.623C599.397 128.711 599.985 128.876 600.387 129.207C600.789 129.537 600.99 130.013 600.99 130.635C600.99 131.43 600.662 132.044 600.006 132.476C599.35 132.907 598.403 133.123 597.163 133.123C596.206 133.123 595.476 132.954 594.973 132.615C594.469 132.277 594.217 131.794 594.217 131.168C594.217 130.736 594.353 130.372 594.624 130.076C594.899 129.784 595.282 129.581 595.772 129.467C595.574 129.382 595.409 129.247 595.277 129.061C595.15 128.87 595.087 128.671 595.087 128.464C595.087 128.201 595.161 127.979 595.309 127.797C595.457 127.615 595.677 127.436 595.969 127.258C595.605 127.101 595.309 126.847 595.081 126.496C594.856 126.141 594.744 125.726 594.744 125.252C594.744 124.49 594.983 123.9 595.461 123.481C595.944 123.062 596.629 122.853 597.518 122.853C597.717 122.853 597.924 122.867 598.14 122.897C598.36 122.922 598.525 122.95 598.635 122.979H601.066ZM595.55 131.092C595.55 131.413 595.694 131.661 595.982 131.834C596.274 132.008 596.682 132.095 597.207 132.095C598.02 132.095 598.625 131.978 599.022 131.746C599.42 131.513 599.619 131.204 599.619 130.819C599.619 130.514 599.509 130.296 599.289 130.165C599.073 130.038 598.669 129.975 598.077 129.975H596.947C596.519 129.975 596.179 130.074 595.925 130.273C595.675 130.476 595.55 130.749 595.55 131.092ZM596.191 125.252C596.191 125.692 596.304 126.031 596.528 126.268C596.756 126.505 597.082 126.623 597.505 126.623C598.369 126.623 598.8 126.162 598.8 125.239C598.8 124.782 598.692 124.431 598.477 124.186C598.265 123.936 597.941 123.811 597.505 123.811C597.074 123.811 596.746 123.934 596.521 124.179C596.301 124.425 596.191 124.782 596.191 125.252ZM608.601 126.477C608.601 127.624 608.307 128.519 607.719 129.162C607.131 129.805 606.312 130.127 605.262 130.127C604.606 130.127 604.027 129.979 603.523 129.683C603.019 129.386 602.632 128.961 602.361 128.407C602.09 127.852 601.955 127.209 601.955 126.477C601.955 125.339 602.247 124.45 602.831 123.811C603.415 123.172 604.238 122.853 605.3 122.853C606.316 122.853 607.12 123.181 607.712 123.836C608.305 124.488 608.601 125.368 608.601 126.477ZM603.491 126.477C603.491 128.098 604.09 128.908 605.288 128.908C606.472 128.908 607.065 128.098 607.065 126.477C607.065 124.873 606.468 124.071 605.275 124.071C604.649 124.071 604.194 124.279 603.91 124.693C603.631 125.108 603.491 125.703 603.491 126.477ZM616.498 130H615V125.684C615 125.142 614.889 124.738 614.669 124.471C614.454 124.205 614.109 124.071 613.635 124.071C613.004 124.071 612.543 124.257 612.251 124.63C611.959 125.002 611.813 125.626 611.813 126.502V130H610.321V122.979H611.489L611.699 123.9H611.775C611.986 123.566 612.287 123.307 612.676 123.125C613.066 122.944 613.497 122.853 613.971 122.853C615.655 122.853 616.498 123.709 616.498 125.423V130Z" fill="#262626"/>
                        <path class="northgate-svg text" d="M577.21 206.998H575.351L570.787 199.603H570.736L570.768 200.016C570.827 200.803 570.856 201.523 570.856 202.174V206.998H569.479V197.718H571.32L575.871 205.075H575.909C575.901 204.978 575.884 204.624 575.858 204.015C575.833 203.401 575.82 202.923 575.82 202.58V197.718H577.21V206.998ZM585.729 203.475C585.729 204.622 585.435 205.517 584.847 206.161C584.258 206.804 583.44 207.125 582.39 207.125C581.734 207.125 581.154 206.977 580.651 206.681C580.147 206.385 579.76 205.96 579.489 205.405C579.218 204.851 579.083 204.208 579.083 203.475C579.083 202.337 579.375 201.448 579.959 200.809C580.543 200.17 581.366 199.851 582.428 199.851C583.444 199.851 584.248 200.179 584.84 200.835C585.433 201.487 585.729 202.367 585.729 203.475ZM580.619 203.475C580.619 205.096 581.218 205.907 582.416 205.907C583.6 205.907 584.193 205.096 584.193 203.475C584.193 201.872 583.596 201.07 582.403 201.07C581.777 201.07 581.322 201.277 581.038 201.692C580.759 202.106 580.619 202.701 580.619 203.475ZM591.01 199.851C591.311 199.851 591.558 199.872 591.753 199.914L591.607 201.305C591.395 201.254 591.175 201.228 590.947 201.228C590.35 201.228 589.866 201.423 589.493 201.812C589.125 202.202 588.941 202.707 588.941 203.329V206.998H587.449V199.978H588.617L588.814 201.216H588.89C589.123 200.797 589.425 200.465 589.798 200.219C590.174 199.974 590.579 199.851 591.01 199.851ZM595.676 205.919C596.04 205.919 596.404 205.862 596.768 205.748V206.871C596.603 206.943 596.389 207.003 596.126 207.049C595.868 207.1 595.6 207.125 595.32 207.125C593.907 207.125 593.2 206.381 593.2 204.891V201.108H592.242V200.448L593.27 199.902L593.778 198.416H594.698V199.978H596.698V201.108H594.698V204.866C594.698 205.225 594.787 205.492 594.965 205.665C595.147 205.835 595.384 205.919 595.676 205.919ZM604.353 206.998H602.855V202.682C602.855 202.14 602.745 201.736 602.525 201.47C602.309 201.203 601.964 201.07 601.49 201.07C600.864 201.07 600.403 201.258 600.106 201.635C599.814 202.007 599.668 202.633 599.668 203.514V206.998H598.177V197.121H599.668V199.629C599.668 200.031 599.643 200.46 599.592 200.917H599.688C599.891 200.579 600.172 200.316 600.532 200.13C600.896 199.944 601.319 199.851 601.801 199.851C603.502 199.851 604.353 200.708 604.353 202.422V206.998ZM612.357 199.978V200.797L611.158 201.019C611.268 201.167 611.359 201.349 611.431 201.565C611.503 201.781 611.539 202.009 611.539 202.25C611.539 202.974 611.289 203.543 610.79 203.958C610.29 204.373 609.603 204.58 608.727 204.58C608.502 204.58 608.299 204.563 608.117 204.529C607.796 204.728 607.635 204.961 607.635 205.227C607.635 205.388 607.709 205.509 607.857 205.589C608.009 205.67 608.286 205.71 608.688 205.71H609.914C610.688 205.71 611.276 205.875 611.678 206.205C612.08 206.535 612.281 207.011 612.281 207.633C612.281 208.429 611.953 209.042 611.297 209.474C610.641 209.906 609.694 210.121 608.454 210.121C607.497 210.121 606.767 209.952 606.264 209.614C605.76 209.275 605.508 208.793 605.508 208.166C605.508 207.735 605.644 207.371 605.915 207.075C606.19 206.783 606.573 206.579 607.063 206.465C606.865 206.381 606.7 206.245 606.568 206.059C606.441 205.869 606.378 205.67 606.378 205.462C606.378 205.2 606.452 204.978 606.6 204.796C606.748 204.614 606.968 204.434 607.26 204.256C606.896 204.1 606.6 203.846 606.372 203.495C606.147 203.139 606.035 202.724 606.035 202.25C606.035 201.489 606.274 200.898 606.752 200.479C607.235 200.06 607.92 199.851 608.809 199.851C609.008 199.851 609.215 199.866 609.431 199.895C609.651 199.921 609.816 199.948 609.926 199.978H612.357ZM606.841 208.09C606.841 208.412 606.985 208.659 607.273 208.833C607.565 209.006 607.973 209.093 608.498 209.093C609.311 209.093 609.916 208.977 610.313 208.744C610.711 208.511 610.91 208.202 610.91 207.817C610.91 207.513 610.8 207.295 610.58 207.163C610.364 207.036 609.96 206.973 609.368 206.973H608.238C607.81 206.973 607.47 207.072 607.216 207.271C606.966 207.474 606.841 207.747 606.841 208.09ZM607.482 202.25C607.482 202.69 607.595 203.029 607.819 203.266C608.047 203.503 608.373 203.621 608.796 203.621C609.66 203.621 610.091 203.16 610.091 202.238C610.091 201.781 609.983 201.429 609.768 201.184C609.556 200.934 609.232 200.809 608.796 200.809C608.365 200.809 608.037 200.932 607.812 201.178C607.592 201.423 607.482 201.781 607.482 202.25ZM618.058 206.998L617.759 206.021H617.708C617.37 206.448 617.029 206.74 616.687 206.897C616.344 207.049 615.904 207.125 615.366 207.125C614.676 207.125 614.137 206.939 613.748 206.567C613.362 206.194 613.17 205.668 613.17 204.986C613.17 204.263 613.439 203.717 613.976 203.349C614.514 202.98 615.332 202.779 616.433 202.745L617.645 202.707V202.333C617.645 201.884 617.539 201.55 617.328 201.33C617.12 201.106 616.797 200.994 616.356 200.994C615.997 200.994 615.652 201.046 615.322 201.152C614.992 201.258 614.674 201.383 614.37 201.527L613.887 200.46C614.268 200.261 614.685 200.111 615.138 200.01C615.59 199.904 616.018 199.851 616.42 199.851C617.313 199.851 617.986 200.046 618.438 200.435C618.896 200.824 619.124 201.436 619.124 202.269V206.998H618.058ZM615.836 205.983C616.378 205.983 616.811 205.833 617.137 205.532C617.467 205.227 617.632 204.802 617.632 204.256V203.647L616.731 203.685C616.028 203.71 615.516 203.829 615.195 204.04C614.877 204.248 614.719 204.567 614.719 204.999C614.719 205.312 614.812 205.555 614.998 205.729C615.184 205.898 615.464 205.983 615.836 205.983ZM623.821 205.919C624.185 205.919 624.549 205.862 624.913 205.748V206.871C624.748 206.943 624.534 207.003 624.272 207.049C624.014 207.1 623.745 207.125 623.466 207.125C622.052 207.125 621.346 206.381 621.346 204.891V201.108H620.387V200.448L621.416 199.902L621.923 198.416H622.844V199.978H624.843V201.108H622.844V204.866C622.844 205.225 622.933 205.492 623.11 205.665C623.292 205.835 623.529 205.919 623.821 205.919ZM629.388 207.125C628.296 207.125 627.442 206.808 626.824 206.173C626.21 205.534 625.903 204.656 625.903 203.539C625.903 202.392 626.189 201.491 626.76 200.835C627.332 200.179 628.117 199.851 629.115 199.851C630.042 199.851 630.774 200.132 631.312 200.695C631.849 201.258 632.118 202.032 632.118 203.018V203.825H627.439C627.461 204.506 627.645 205.031 627.992 205.399C628.339 205.763 628.827 205.945 629.458 205.945C629.873 205.945 630.258 205.907 630.613 205.83C630.973 205.75 631.358 205.619 631.769 205.437V206.649C631.405 206.823 631.036 206.946 630.664 207.017C630.292 207.089 629.866 207.125 629.388 207.125ZM629.115 200.981C628.641 200.981 628.26 201.131 627.973 201.432C627.689 201.732 627.52 202.17 627.465 202.745H630.651C630.643 202.166 630.503 201.728 630.232 201.432C629.962 201.131 629.589 200.981 629.115 200.981Z" fill="#262626"/>
                        <path class="hamilton-svg text" d="M623.889 245.998H622.366V241.815H618.087V245.998H616.57V236.718H618.087V240.514H622.366V236.718H623.889V245.998ZM630.567 245.998L630.269 245.021H630.218C629.879 245.448 629.539 245.74 629.196 245.896C628.853 246.049 628.413 246.125 627.875 246.125C627.186 246.125 626.646 245.939 626.257 245.566C625.872 245.194 625.679 244.667 625.679 243.986C625.679 243.262 625.948 242.716 626.485 242.348C627.023 241.98 627.842 241.779 628.942 241.745L630.154 241.707V241.333C630.154 240.884 630.049 240.55 629.837 240.33C629.63 240.105 629.306 239.993 628.866 239.993C628.506 239.993 628.161 240.046 627.831 240.152C627.501 240.258 627.184 240.382 626.879 240.526L626.396 239.46C626.777 239.261 627.194 239.111 627.647 239.009C628.1 238.903 628.527 238.851 628.929 238.851C629.822 238.851 630.495 239.045 630.948 239.435C631.405 239.824 631.633 240.435 631.633 241.269V245.998H630.567ZM628.345 244.982C628.887 244.982 629.321 244.832 629.646 244.532C629.977 244.227 630.142 243.802 630.142 243.256V242.646L629.24 242.685C628.538 242.71 628.026 242.828 627.704 243.04C627.387 243.247 627.228 243.567 627.228 243.999C627.228 244.312 627.321 244.555 627.507 244.729C627.694 244.898 627.973 244.982 628.345 244.982ZM639.631 245.998H638.133V241.669C638.133 241.132 638.032 240.732 637.829 240.469C637.625 240.203 637.308 240.069 636.876 240.069C636.301 240.069 635.878 240.258 635.607 240.634C635.34 241.007 635.207 241.629 635.207 242.5V245.998H633.715V238.978H634.883L635.093 239.898H635.169C635.364 239.564 635.645 239.306 636.013 239.124C636.386 238.942 636.794 238.851 637.238 238.851C638.317 238.851 639.033 239.219 639.384 239.955H639.485C639.693 239.608 639.985 239.337 640.361 239.143C640.738 238.948 641.17 238.851 641.656 238.851C642.494 238.851 643.104 239.062 643.484 239.485C643.869 239.909 644.062 240.554 644.062 241.421V245.998H642.57V241.669C642.57 241.132 642.467 240.732 642.259 240.469C642.056 240.203 641.739 240.069 641.307 240.069C640.727 240.069 640.302 240.251 640.031 240.615C639.765 240.975 639.631 241.529 639.631 242.278V245.998ZM647.636 245.998H646.144V238.978H647.636V245.998ZM646.055 237.118C646.055 236.851 646.127 236.646 646.271 236.502C646.419 236.358 646.629 236.286 646.899 236.286C647.162 236.286 647.365 236.358 647.509 236.502C647.657 236.646 647.731 236.851 647.731 237.118C647.731 237.372 647.657 237.573 647.509 237.721C647.365 237.865 647.162 237.937 646.899 237.937C646.629 237.937 646.419 237.865 646.271 237.721C646.127 237.573 646.055 237.372 646.055 237.118ZM651.267 245.998H649.775V236.121H651.267V245.998ZM656.021 244.919C656.385 244.919 656.749 244.862 657.113 244.748V245.871C656.948 245.943 656.734 246.002 656.472 246.049C656.214 246.1 655.945 246.125 655.666 246.125C654.252 246.125 653.545 245.38 653.545 243.891V240.107H652.587V239.447L653.615 238.901L654.123 237.416H655.043V238.978H657.043V240.107H655.043V243.865C655.043 244.225 655.132 244.492 655.31 244.665C655.492 244.834 655.729 244.919 656.021 244.919ZM664.749 242.475C664.749 243.622 664.455 244.517 663.867 245.16C663.278 245.803 662.46 246.125 661.41 246.125C660.754 246.125 660.174 245.977 659.671 245.681C659.167 245.384 658.78 244.959 658.509 244.405C658.238 243.85 658.103 243.207 658.103 242.475C658.103 241.337 658.395 240.448 658.979 239.809C659.563 239.17 660.386 238.851 661.448 238.851C662.464 238.851 663.268 239.179 663.86 239.834C664.453 240.486 664.749 241.366 664.749 242.475ZM659.639 242.475C659.639 244.096 660.238 244.906 661.436 244.906C662.62 244.906 663.213 244.096 663.213 242.475C663.213 240.871 662.616 240.069 661.423 240.069C660.797 240.069 660.342 240.277 660.058 240.691C659.779 241.106 659.639 241.701 659.639 242.475ZM672.646 245.998H671.147V241.682C671.147 241.14 671.037 240.736 670.817 240.469C670.602 240.203 670.257 240.069 669.783 240.069C669.152 240.069 668.691 240.256 668.399 240.628C668.107 241 667.961 241.625 667.961 242.5V245.998H666.469V238.978H667.637L667.847 239.898H667.923C668.134 239.564 668.435 239.306 668.824 239.124C669.214 238.942 669.645 238.851 670.119 238.851C671.803 238.851 672.646 239.708 672.646 241.421V245.998Z" fill="#262626"/>
                        <path class="central-svg text" d="M524.233 307.885C523.361 307.885 522.676 308.194 522.176 308.812C521.677 309.43 521.427 310.283 521.427 311.37C521.427 312.508 521.666 313.37 522.145 313.954C522.627 314.538 523.323 314.83 524.233 314.83C524.626 314.83 525.007 314.792 525.375 314.715C525.744 314.635 526.127 314.533 526.524 314.411V315.712C525.797 315.987 524.971 316.125 524.049 316.125C522.69 316.125 521.647 315.714 520.919 314.893C520.192 314.068 519.828 312.889 519.828 311.357C519.828 310.393 520.003 309.548 520.354 308.825C520.71 308.101 521.222 307.547 521.891 307.162C522.559 306.777 523.344 306.584 524.246 306.584C525.194 306.584 526.069 306.783 526.874 307.181L526.328 308.444C526.014 308.296 525.682 308.167 525.331 308.057C524.984 307.942 524.618 307.885 524.233 307.885ZM531.431 316.125C530.339 316.125 529.485 315.807 528.867 315.172C528.253 314.533 527.946 313.655 527.946 312.538C527.946 311.391 528.232 310.49 528.803 309.834C529.375 309.178 530.16 308.85 531.158 308.85C532.085 308.85 532.817 309.132 533.354 309.694C533.892 310.257 534.161 311.032 534.161 312.018V312.824H529.482C529.504 313.505 529.688 314.03 530.035 314.398C530.382 314.762 530.87 314.944 531.501 314.944C531.916 314.944 532.301 314.906 532.656 314.83C533.016 314.749 533.401 314.618 533.812 314.436V315.648C533.448 315.822 533.079 315.945 532.707 316.017C532.335 316.089 531.909 316.125 531.431 316.125ZM531.158 309.98C530.684 309.98 530.303 310.13 530.016 310.431C529.732 310.731 529.563 311.169 529.508 311.745H532.694C532.686 311.165 532.546 310.727 532.275 310.431C532.005 310.13 531.632 309.98 531.158 309.98ZM542.032 315.998H540.534V311.681C540.534 311.139 540.424 310.735 540.204 310.469C539.988 310.202 539.643 310.069 539.169 310.069C538.538 310.069 538.077 310.255 537.785 310.627C537.493 311 537.347 311.624 537.347 312.5V315.998H535.855V308.977H537.023L537.233 309.897H537.309C537.521 309.563 537.821 309.305 538.21 309.123C538.6 308.941 539.031 308.85 539.505 308.85C541.19 308.85 542.032 309.707 542.032 311.421V315.998ZM546.723 314.918C547.087 314.918 547.451 314.861 547.814 314.747V315.871C547.649 315.943 547.436 316.002 547.173 316.048C546.915 316.099 546.646 316.125 546.367 316.125C544.954 316.125 544.247 315.38 544.247 313.89V310.107H543.289V309.447L544.317 308.901L544.825 307.416H545.745V308.977H547.745V310.107H545.745V313.865C545.745 314.224 545.834 314.491 546.012 314.665C546.194 314.834 546.431 314.918 546.723 314.918ZM552.785 308.85C553.085 308.85 553.333 308.871 553.527 308.914L553.381 310.304C553.17 310.253 552.95 310.228 552.721 310.228C552.125 310.228 551.64 310.422 551.268 310.812C550.899 311.201 550.715 311.707 550.715 312.329V315.998H549.224V308.977H550.392L550.588 310.215H550.665C550.897 309.796 551.2 309.464 551.572 309.218C551.949 308.973 552.353 308.85 552.785 308.85ZM559.228 315.998L558.929 315.02H558.878C558.54 315.447 558.199 315.739 557.856 315.896C557.514 316.048 557.074 316.125 556.536 316.125C555.846 316.125 555.307 315.938 554.917 315.566C554.532 315.194 554.34 314.667 554.34 313.985C554.34 313.262 554.609 312.716 555.146 312.348C555.683 311.979 556.502 311.778 557.603 311.745L558.815 311.707V311.332C558.815 310.883 558.709 310.549 558.498 310.329C558.29 310.105 557.966 309.993 557.526 309.993C557.167 309.993 556.822 310.046 556.492 310.151C556.162 310.257 555.844 310.382 555.54 310.526L555.057 309.459C555.438 309.261 555.855 309.11 556.308 309.009C556.76 308.903 557.188 308.85 557.59 308.85C558.483 308.85 559.156 309.045 559.608 309.434C560.065 309.823 560.294 310.435 560.294 311.269V315.998H559.228ZM557.006 314.982C557.548 314.982 557.981 314.832 558.307 314.531C558.637 314.227 558.802 313.801 558.802 313.255V312.646L557.901 312.684C557.198 312.709 556.686 312.828 556.365 313.04C556.047 313.247 555.889 313.566 555.889 313.998C555.889 314.311 555.982 314.555 556.168 314.728C556.354 314.897 556.633 314.982 557.006 314.982ZM563.868 315.998H562.376V306.121H563.868V315.998Z" fill="#262626"/>
                        <path class="morningside-svg text" d="M589.506 322.064L586.815 314.313H586.764C586.836 315.465 586.872 316.544 586.872 317.551V322.064H585.494V312.784H587.634L590.211 320.166H590.249L592.902 312.784H595.048V322.064H593.588V317.475C593.588 317.013 593.598 316.412 593.619 315.672C593.645 314.931 593.666 314.483 593.683 314.326H593.632L590.845 322.064H589.506ZM603.56 318.541C603.56 319.688 603.266 320.583 602.677 321.226C602.089 321.869 601.27 322.191 600.221 322.191C599.565 322.191 598.985 322.043 598.482 321.747C597.978 321.45 597.591 321.025 597.32 320.471C597.049 319.916 596.914 319.273 596.914 318.541C596.914 317.403 597.206 316.514 597.79 315.875C598.374 315.236 599.197 314.917 600.259 314.917C601.275 314.917 602.079 315.244 602.671 315.9C603.264 316.552 603.56 317.432 603.56 318.541ZM598.45 318.541C598.45 320.162 599.049 320.972 600.246 320.972C601.431 320.972 602.024 320.162 602.024 318.541C602.024 316.937 601.427 316.135 600.234 316.135C599.607 316.135 599.152 316.343 598.869 316.757C598.59 317.172 598.45 317.767 598.45 318.541ZM608.841 314.917C609.142 314.917 609.389 314.938 609.584 314.98L609.438 316.37C609.226 316.319 609.006 316.294 608.778 316.294C608.181 316.294 607.696 316.489 607.324 316.878C606.956 317.267 606.772 317.773 606.772 318.395V322.064H605.28V315.043H606.448L606.645 316.281H606.721C606.954 315.862 607.256 315.53 607.629 315.285C608.005 315.039 608.409 314.917 608.841 314.917ZM617.068 322.064H615.57V317.748C615.57 317.206 615.46 316.802 615.24 316.535C615.024 316.269 614.679 316.135 614.205 316.135C613.574 316.135 613.113 316.321 612.821 316.694C612.529 317.066 612.383 317.69 612.383 318.566V322.064H610.891V315.043H612.059L612.269 315.964H612.345C612.557 315.63 612.857 315.371 613.246 315.189C613.636 315.007 614.067 314.917 614.541 314.917C616.226 314.917 617.068 315.773 617.068 317.487V322.064ZM620.635 322.064H619.143V315.043H620.635V322.064ZM619.054 313.184C619.054 312.917 619.126 312.712 619.27 312.568C619.418 312.424 619.628 312.352 619.899 312.352C620.161 312.352 620.364 312.424 620.508 312.568C620.656 312.712 620.73 312.917 620.73 313.184C620.73 313.438 620.656 313.639 620.508 313.787C620.364 313.931 620.161 314.002 619.899 314.002C619.628 314.002 619.418 313.931 619.27 313.787C619.126 313.639 619.054 313.438 619.054 313.184ZM628.95 322.064H627.452V317.748C627.452 317.206 627.342 316.802 627.122 316.535C626.906 316.269 626.562 316.135 626.088 316.135C625.457 316.135 624.996 316.321 624.704 316.694C624.412 317.066 624.266 317.69 624.266 318.566V322.064H622.774V315.043H623.942L624.152 315.964H624.228C624.439 315.63 624.74 315.371 625.129 315.189C625.518 315.007 625.95 314.917 626.424 314.917C628.108 314.917 628.95 315.773 628.95 317.487V322.064ZM636.955 315.043V315.862L635.755 316.084C635.865 316.233 635.956 316.415 636.028 316.63C636.1 316.846 636.136 317.075 636.136 317.316C636.136 318.04 635.886 318.609 635.387 319.023C634.888 319.438 634.2 319.646 633.324 319.646C633.1 319.646 632.897 319.629 632.715 319.595C632.393 319.794 632.232 320.026 632.232 320.293C632.232 320.454 632.306 320.574 632.454 320.655C632.607 320.735 632.884 320.775 633.286 320.775H634.511C635.285 320.775 635.874 320.94 636.276 321.271C636.678 321.601 636.879 322.077 636.879 322.699C636.879 323.494 636.551 324.108 635.895 324.54C635.239 324.971 634.291 325.187 633.051 325.187C632.095 325.187 631.365 325.018 630.861 324.679C630.358 324.341 630.106 323.858 630.106 323.232C630.106 322.8 630.241 322.436 630.512 322.14C630.787 321.848 631.17 321.645 631.661 321.531C631.462 321.446 631.297 321.311 631.166 321.125C631.039 320.934 630.975 320.735 630.975 320.528C630.975 320.265 631.049 320.043 631.198 319.861C631.346 319.679 631.566 319.5 631.858 319.322C631.494 319.165 631.198 318.911 630.969 318.56C630.745 318.205 630.633 317.79 630.633 317.316C630.633 316.554 630.872 315.964 631.35 315.545C631.832 315.126 632.518 314.917 633.406 314.917C633.605 314.917 633.813 314.931 634.029 314.961C634.249 314.986 634.414 315.014 634.524 315.043H636.955ZM631.439 323.156C631.439 323.477 631.583 323.725 631.87 323.898C632.162 324.072 632.571 324.159 633.095 324.159C633.908 324.159 634.513 324.042 634.911 323.81C635.309 323.577 635.508 323.268 635.508 322.883C635.508 322.578 635.398 322.36 635.177 322.229C634.962 322.102 634.558 322.039 633.965 322.039H632.835C632.408 322.039 632.067 322.138 631.813 322.337C631.564 322.54 631.439 322.813 631.439 323.156ZM632.08 317.316C632.08 317.756 632.192 318.095 632.416 318.332C632.645 318.569 632.971 318.687 633.394 318.687C634.257 318.687 634.689 318.226 634.689 317.303C634.689 316.846 634.581 316.495 634.365 316.25C634.153 316 633.83 315.875 633.394 315.875C632.962 315.875 632.634 315.998 632.41 316.243C632.19 316.489 632.08 316.846 632.08 317.316ZM642.979 320.064C642.979 320.75 642.729 321.277 642.23 321.645C641.73 322.009 641.015 322.191 640.084 322.191C639.149 322.191 638.398 322.049 637.831 321.766V320.477C638.656 320.858 639.424 321.048 640.135 321.048C641.053 321.048 641.512 320.771 641.512 320.217C641.512 320.039 641.462 319.891 641.36 319.772C641.259 319.654 641.091 319.531 640.859 319.404C640.626 319.277 640.302 319.133 639.887 318.973C639.079 318.66 638.531 318.346 638.243 318.033C637.96 317.72 637.818 317.314 637.818 316.814C637.818 316.214 638.059 315.748 638.542 315.418C639.028 315.084 639.689 314.917 640.522 314.917C641.347 314.917 642.128 315.084 642.865 315.418L642.382 316.542C641.625 316.228 640.988 316.072 640.471 316.072C639.684 316.072 639.291 316.296 639.291 316.745C639.291 316.965 639.392 317.151 639.595 317.303C639.803 317.456 640.251 317.665 640.941 317.932C641.521 318.156 641.942 318.361 642.204 318.547C642.467 318.734 642.661 318.949 642.788 319.195C642.915 319.436 642.979 319.726 642.979 320.064ZM646.089 322.064H644.597V315.043H646.089V322.064ZM644.509 313.184C644.509 312.917 644.58 312.712 644.724 312.568C644.872 312.424 645.082 312.352 645.353 312.352C645.615 312.352 645.818 312.424 645.962 312.568C646.11 312.712 646.184 312.917 646.184 313.184C646.184 313.438 646.11 313.639 645.962 313.787C645.818 313.931 645.615 314.002 645.353 314.002C645.082 314.002 644.872 313.931 644.724 313.787C644.58 313.639 644.509 313.438 644.509 313.184ZM650.596 322.191C649.72 322.191 649.037 321.874 648.546 321.239C648.055 320.604 647.809 319.713 647.809 318.566C647.809 317.415 648.057 316.52 648.552 315.881C649.051 315.238 649.741 314.917 650.621 314.917C651.544 314.917 652.246 315.257 652.729 315.938H652.805C652.733 315.435 652.697 315.037 652.697 314.745V312.187H654.195V322.064H653.027L652.767 321.144H652.697C652.219 321.842 651.518 322.191 650.596 322.191ZM650.996 320.985C651.609 320.985 652.056 320.813 652.335 320.471C652.615 320.124 652.758 319.563 652.767 318.789V318.579C652.767 317.695 652.623 317.066 652.335 316.694C652.047 316.321 651.597 316.135 650.983 316.135C650.458 316.135 650.054 316.349 649.771 316.776C649.487 317.2 649.345 317.805 649.345 318.592C649.345 319.37 649.483 319.965 649.758 320.375C650.033 320.782 650.446 320.985 650.996 320.985ZM659.394 322.191C658.302 322.191 657.447 321.874 656.829 321.239C656.216 320.6 655.909 319.722 655.909 318.604C655.909 317.458 656.195 316.556 656.766 315.9C657.337 315.244 658.122 314.917 659.121 314.917C660.048 314.917 660.78 315.198 661.317 315.761C661.855 316.324 662.123 317.098 662.123 318.084V318.89H657.445C657.466 319.571 657.65 320.096 657.997 320.464C658.344 320.828 658.833 321.01 659.464 321.01C659.878 321.01 660.263 320.972 660.619 320.896C660.979 320.816 661.364 320.684 661.774 320.502V321.715C661.41 321.888 661.042 322.011 660.67 322.083C660.297 322.155 659.872 322.191 659.394 322.191ZM659.121 316.046C658.647 316.046 658.266 316.197 657.978 316.497C657.695 316.798 657.525 317.236 657.47 317.811H660.657C660.649 317.231 660.509 316.793 660.238 316.497C659.967 316.197 659.595 316.046 659.121 316.046Z" fill="#262626"/>
                        <path class="toowong-svg text" d="M431.781 349.046H430.264V341.067H427.535V339.765H434.511V341.067H431.781V349.046ZM442.008 345.523C442.008 346.67 441.713 347.565 441.125 348.208C440.537 348.851 439.718 349.173 438.669 349.173C438.013 349.173 437.433 349.024 436.929 348.728C436.426 348.432 436.039 348.007 435.768 347.452C435.497 346.898 435.362 346.255 435.362 345.523C435.362 344.384 435.654 343.496 436.238 342.857C436.822 342.218 437.645 341.898 438.707 341.898C439.722 341.898 440.526 342.226 441.119 342.882C441.711 343.534 442.008 344.414 442.008 345.523ZM436.898 345.523C436.898 347.143 437.497 347.954 438.694 347.954C439.879 347.954 440.471 347.143 440.471 345.523C440.471 343.919 439.875 343.117 438.681 343.117C438.055 343.117 437.6 343.324 437.317 343.739C437.037 344.154 436.898 344.748 436.898 345.523ZM449.955 345.523C449.955 346.67 449.661 347.565 449.073 348.208C448.484 348.851 447.665 349.173 446.616 349.173C445.96 349.173 445.38 349.024 444.877 348.728C444.373 348.432 443.986 348.007 443.715 347.452C443.444 346.898 443.309 346.255 443.309 345.523C443.309 344.384 443.601 343.496 444.185 342.857C444.769 342.218 445.592 341.898 446.654 341.898C447.67 341.898 448.474 342.226 449.066 342.882C449.659 343.534 449.955 344.414 449.955 345.523ZM444.845 345.523C444.845 347.143 445.444 347.954 446.641 347.954C447.826 347.954 448.419 347.143 448.419 345.523C448.419 343.919 447.822 343.117 446.629 343.117C446.002 343.117 445.547 343.324 445.264 343.739C444.985 344.154 444.845 344.748 444.845 345.523ZM457.432 349.046L456.525 345.77C456.415 345.423 456.216 344.617 455.928 343.352H455.871C455.625 344.494 455.431 345.305 455.287 345.783L454.354 349.046H452.703L450.736 342.025H452.259L453.154 345.485C453.357 346.339 453.501 347.072 453.586 347.681H453.624C453.666 347.372 453.73 347.019 453.814 346.621C453.903 346.219 453.979 345.918 454.043 345.719L455.109 342.025H456.747L457.781 345.719C457.845 345.927 457.923 346.244 458.016 346.672C458.114 347.099 458.171 347.431 458.188 347.668H458.239C458.302 347.148 458.45 346.42 458.683 345.485L459.591 342.025H461.089L459.108 349.046H457.432ZM468.528 345.523C468.528 346.67 468.234 347.565 467.646 348.208C467.058 348.851 466.239 349.173 465.189 349.173C464.533 349.173 463.954 349.024 463.45 348.728C462.946 348.432 462.559 348.007 462.288 347.452C462.017 346.898 461.882 346.255 461.882 345.523C461.882 344.384 462.174 343.496 462.758 342.857C463.342 342.218 464.165 341.898 465.227 341.898C466.243 341.898 467.047 342.226 467.639 342.882C468.232 343.534 468.528 344.414 468.528 345.523ZM463.418 345.523C463.418 347.143 464.017 347.954 465.215 347.954C466.399 347.954 466.992 347.143 466.992 345.523C466.992 343.919 466.395 343.117 465.202 343.117C464.576 343.117 464.121 343.324 463.837 343.739C463.558 344.154 463.418 344.748 463.418 345.523ZM476.425 349.046H474.927V344.729C474.927 344.188 474.816 343.783 474.596 343.517C474.381 343.25 474.036 343.117 473.562 343.117C472.931 343.117 472.47 343.303 472.178 343.676C471.886 344.048 471.74 344.672 471.74 345.548V349.046H470.248V342.025H471.416L471.626 342.946H471.702C471.913 342.611 472.214 342.353 472.603 342.171C472.993 341.989 473.424 341.898 473.898 341.898C475.582 341.898 476.425 342.755 476.425 344.469V349.046ZM484.429 342.025V342.844L483.229 343.066C483.339 343.214 483.43 343.396 483.502 343.612C483.574 343.828 483.61 344.056 483.61 344.298C483.61 345.021 483.36 345.59 482.861 346.005C482.362 346.42 481.674 346.627 480.798 346.627C480.574 346.627 480.371 346.61 480.189 346.576C479.867 346.775 479.706 347.008 479.706 347.275C479.706 347.435 479.78 347.556 479.928 347.636C480.081 347.717 480.358 347.757 480.76 347.757H481.985C482.76 347.757 483.348 347.922 483.75 348.252C484.152 348.582 484.353 349.058 484.353 349.68C484.353 350.476 484.025 351.09 483.369 351.521C482.713 351.953 481.765 352.169 480.525 352.169C479.569 352.169 478.839 351.999 478.335 351.661C477.832 351.322 477.58 350.84 477.58 350.214C477.58 349.782 477.715 349.418 477.986 349.122C478.261 348.83 478.644 348.627 479.135 348.512C478.936 348.428 478.771 348.292 478.64 348.106C478.513 347.916 478.449 347.717 478.449 347.51C478.449 347.247 478.524 347.025 478.672 346.843C478.82 346.661 479.04 346.481 479.332 346.303C478.968 346.147 478.672 345.893 478.443 345.542C478.219 345.186 478.107 344.772 478.107 344.298C478.107 343.536 478.346 342.946 478.824 342.527C479.306 342.108 479.992 341.898 480.881 341.898C481.08 341.898 481.287 341.913 481.503 341.943C481.723 341.968 481.888 341.996 481.998 342.025H484.429ZM478.913 350.137C478.913 350.459 479.057 350.707 479.344 350.88C479.636 351.054 480.045 351.14 480.57 351.14C481.382 351.14 481.987 351.024 482.385 350.791C482.783 350.559 482.982 350.25 482.982 349.865C482.982 349.56 482.872 349.342 482.652 349.211C482.436 349.084 482.032 349.02 481.439 349.02H480.309C479.882 349.02 479.541 349.12 479.287 349.319C479.038 349.522 478.913 349.795 478.913 350.137ZM479.554 344.298C479.554 344.738 479.666 345.076 479.89 345.313C480.119 345.55 480.445 345.669 480.868 345.669C481.731 345.669 482.163 345.207 482.163 344.285C482.163 343.828 482.055 343.477 481.839 343.231C481.628 342.982 481.304 342.857 480.868 342.857C480.436 342.857 480.108 342.979 479.884 343.225C479.664 343.47 479.554 343.828 479.554 344.298Z" fill="#262626"/>
                        <path class="gabba-svg text" d="M516.826 365.997H515.309V358.018H512.58V356.717H519.556V358.018H516.826V365.997ZM527.001 365.997H525.503V361.681C525.503 361.139 525.393 360.735 525.173 360.468C524.958 360.202 524.613 360.068 524.139 360.068C523.512 360.068 523.051 360.257 522.755 360.633C522.463 361.006 522.317 361.632 522.317 362.512V365.997H520.825V356.12H522.317V358.627C522.317 359.029 522.292 359.459 522.241 359.916H522.336C522.539 359.577 522.82 359.315 523.18 359.129C523.544 358.943 523.967 358.85 524.45 358.85C526.151 358.85 527.001 359.707 527.001 361.42V365.997ZM532.143 366.124C531.051 366.124 530.196 365.807 529.579 365.172C528.965 364.533 528.658 363.655 528.658 362.538C528.658 361.391 528.944 360.489 529.515 359.833C530.086 359.178 530.871 358.85 531.87 358.85C532.797 358.85 533.529 359.131 534.066 359.694C534.604 360.257 534.873 361.031 534.873 362.017V362.823H530.194C530.215 363.505 530.4 364.029 530.747 364.397C531.094 364.761 531.582 364.943 532.213 364.943C532.628 364.943 533.013 364.905 533.368 364.829C533.728 364.749 534.113 364.618 534.523 364.436V365.648C534.16 365.821 533.791 365.944 533.419 366.016C533.047 366.088 532.621 366.124 532.143 366.124ZM531.87 359.979C531.396 359.979 531.015 360.13 530.728 360.43C530.444 360.731 530.275 361.169 530.22 361.744H533.406C533.398 361.164 533.258 360.726 532.987 360.43C532.716 360.13 532.344 359.979 531.87 359.979ZM543.899 360.963H547.314V365.623C546.755 365.805 546.218 365.934 545.702 366.01C545.19 366.086 544.635 366.124 544.039 366.124C542.634 366.124 541.55 365.709 540.789 364.88C540.027 364.046 539.646 362.872 539.646 361.357C539.646 359.863 540.076 358.695 540.935 357.853C541.794 357.007 542.976 356.583 544.483 356.583C545.452 356.583 546.37 356.77 547.238 357.142L546.705 358.405C545.951 358.058 545.198 357.885 544.445 357.885C543.455 357.885 542.672 358.196 542.096 358.818C541.521 359.44 541.233 360.291 541.233 361.37C541.233 362.504 541.491 363.367 542.007 363.959C542.528 364.548 543.275 364.842 544.248 364.842C544.739 364.842 545.264 364.78 545.822 364.658V362.265H543.899V360.963ZM553.782 365.997L553.484 365.02H553.433C553.095 365.447 552.754 365.739 552.411 365.896C552.068 366.048 551.628 366.124 551.091 366.124C550.401 366.124 549.861 365.938 549.472 365.565C549.087 365.193 548.895 364.666 548.895 363.985C548.895 363.261 549.163 362.715 549.701 362.347C550.238 361.979 551.057 361.778 552.157 361.744L553.37 361.706V361.332C553.37 360.883 553.264 360.549 553.052 360.329C552.845 360.104 552.521 359.992 552.081 359.992C551.721 359.992 551.376 360.045 551.046 360.151C550.716 360.257 550.399 360.382 550.094 360.525L549.612 359.459C549.993 359.26 550.41 359.11 550.862 359.008C551.315 358.903 551.743 358.85 552.145 358.85C553.037 358.85 553.71 359.044 554.163 359.434C554.62 359.823 554.849 360.434 554.849 361.268V365.997H553.782ZM551.561 364.981C552.102 364.981 552.536 364.831 552.862 364.531C553.192 364.226 553.357 363.801 553.357 363.255V362.646L552.456 362.684C551.753 362.709 551.241 362.827 550.919 363.039C550.602 363.246 550.443 363.566 550.443 363.998C550.443 364.311 550.536 364.554 550.723 364.728C550.909 364.897 551.188 364.981 551.561 364.981ZM560.517 358.85C561.393 358.85 562.074 359.167 562.561 359.802C563.052 360.437 563.297 361.327 563.297 362.474C563.297 363.625 563.05 364.522 562.555 365.166C562.06 365.805 561.372 366.124 560.492 366.124C559.603 366.124 558.913 365.805 558.422 365.166H558.321L558.048 365.997H556.931V356.12H558.422V358.469C558.422 358.642 558.414 358.9 558.397 359.243C558.38 359.586 558.367 359.804 558.359 359.897H558.422C558.896 359.199 559.595 358.85 560.517 358.85ZM560.13 360.068C559.529 360.068 559.095 360.246 558.829 360.602C558.566 360.953 558.431 361.543 558.422 362.373V362.474C558.422 363.329 558.558 363.949 558.829 364.334C559.099 364.715 559.542 364.905 560.155 364.905C560.684 364.905 561.084 364.696 561.355 364.277C561.63 363.858 561.768 363.253 561.768 362.461C561.768 360.866 561.222 360.068 560.13 360.068ZM568.617 358.85C569.493 358.85 570.174 359.167 570.661 359.802C571.152 360.437 571.397 361.327 571.397 362.474C571.397 363.625 571.149 364.522 570.654 365.166C570.159 365.805 569.472 366.124 568.591 366.124C567.703 366.124 567.013 365.805 566.522 365.166H566.42L566.147 365.997H565.03V356.12H566.522V358.469C566.522 358.642 566.514 358.9 566.497 359.243C566.48 359.586 566.467 359.804 566.458 359.897H566.522C566.996 359.199 567.694 358.85 568.617 358.85ZM568.229 360.068C567.629 360.068 567.195 360.246 566.928 360.602C566.666 360.953 566.53 361.543 566.522 362.373V362.474C566.522 363.329 566.657 363.949 566.928 364.334C567.199 364.715 567.641 364.905 568.255 364.905C568.784 364.905 569.184 364.696 569.455 364.277C569.73 363.858 569.867 363.253 569.867 362.461C569.867 360.866 569.321 360.068 568.229 360.068ZM577.522 365.997L577.224 365.02H577.173C576.835 365.447 576.494 365.739 576.151 365.896C575.809 366.048 575.368 366.124 574.831 366.124C574.141 366.124 573.602 365.938 573.212 365.565C572.827 365.193 572.635 364.666 572.635 363.985C572.635 363.261 572.903 362.715 573.441 362.347C573.978 361.979 574.797 361.778 575.897 361.744L577.11 361.706V361.332C577.11 360.883 577.004 360.549 576.792 360.329C576.585 360.104 576.261 359.992 575.821 359.992C575.462 359.992 575.117 360.045 574.787 360.151C574.457 360.257 574.139 360.382 573.834 360.525L573.352 359.459C573.733 359.26 574.15 359.11 574.603 359.008C575.055 358.903 575.483 358.85 575.885 358.85C576.778 358.85 577.451 359.044 577.903 359.434C578.36 359.823 578.589 360.434 578.589 361.268V365.997H577.522ZM575.301 364.981C575.842 364.981 576.276 364.831 576.602 364.531C576.932 364.226 577.097 363.801 577.097 363.255V362.646L576.196 362.684C575.493 362.709 574.981 362.827 574.66 363.039C574.342 363.246 574.184 363.566 574.184 363.998C574.184 364.311 574.277 364.554 574.463 364.728C574.649 364.897 574.928 364.981 575.301 364.981Z" fill="#262626"/>
                        <path class="holland-svg text" d="M569.612 399.997H568.088V395.814H563.81V399.997H562.293V390.717H563.81V394.512H568.088V390.717H569.612V399.997ZM578.124 396.474C578.124 397.621 577.83 398.516 577.242 399.159C576.653 399.802 575.835 400.124 574.785 400.124C574.129 400.124 573.549 399.976 573.046 399.679C572.542 399.383 572.155 398.958 571.884 398.404C571.613 397.849 571.478 397.206 571.478 396.474C571.478 395.336 571.77 394.447 572.354 393.808C572.938 393.169 573.761 392.849 574.823 392.849C575.839 392.849 576.643 393.177 577.235 393.833C577.828 394.485 578.124 395.365 578.124 396.474ZM573.014 396.474C573.014 398.095 573.613 398.905 574.811 398.905C575.995 398.905 576.588 398.095 576.588 396.474C576.588 394.87 575.991 394.068 574.798 394.068C574.172 394.068 573.717 394.275 573.433 394.69C573.154 395.105 573.014 395.699 573.014 396.474ZM581.336 399.997H579.844V390.12H581.336V399.997ZM584.967 399.997H583.475V390.12H584.967V399.997ZM591.499 399.997L591.2 399.019H591.149C590.811 399.447 590.47 399.739 590.127 399.895C589.785 400.048 589.345 400.124 588.807 400.124C588.117 400.124 587.578 399.938 587.188 399.565C586.803 399.193 586.611 398.666 586.611 397.985C586.611 397.261 586.88 396.715 587.417 396.347C587.954 395.979 588.773 395.778 589.874 395.744L591.086 395.706V395.331C591.086 394.883 590.98 394.548 590.769 394.328C590.561 394.104 590.237 393.992 589.797 393.992C589.438 393.992 589.093 394.045 588.763 394.151C588.433 394.256 588.115 394.381 587.811 394.525L587.328 393.459C587.709 393.26 588.126 393.11 588.579 393.008C589.031 392.902 589.459 392.849 589.861 392.849C590.754 392.849 591.427 393.044 591.879 393.433C592.336 393.823 592.565 394.434 592.565 395.268V399.997H591.499ZM589.277 398.981C589.819 398.981 590.252 398.831 590.578 398.531C590.908 398.226 591.073 397.801 591.073 397.255V396.645L590.172 396.683C589.469 396.709 588.957 396.827 588.636 397.039C588.318 397.246 588.16 397.566 588.16 397.997C588.16 398.31 588.253 398.554 588.439 398.727C588.625 398.897 588.904 398.981 589.277 398.981ZM600.823 399.997H599.325V395.68C599.325 395.139 599.215 394.735 598.995 394.468C598.779 394.201 598.434 394.068 597.96 394.068C597.33 394.068 596.869 394.254 596.577 394.627C596.285 394.999 596.139 395.623 596.139 396.499V399.997H594.647V392.976H595.815L596.024 393.897H596.101C596.312 393.562 596.613 393.304 597.002 393.122C597.391 392.94 597.823 392.849 598.297 392.849C599.981 392.849 600.823 393.706 600.823 395.42V399.997ZM605.267 400.124C604.391 400.124 603.707 399.806 603.216 399.172C602.725 398.537 602.48 397.646 602.48 396.499C602.48 395.348 602.728 394.453 603.223 393.814C603.722 393.171 604.412 392.849 605.292 392.849C606.215 392.849 606.917 393.19 607.399 393.871H607.476C607.404 393.368 607.368 392.97 607.368 392.678V390.12H608.866V399.997H607.698L607.438 399.076H607.368C606.889 399.775 606.189 400.124 605.267 400.124ZM605.667 398.918C606.28 398.918 606.727 398.746 607.006 398.404C607.285 398.057 607.429 397.496 607.438 396.721V396.512C607.438 395.628 607.294 394.999 607.006 394.627C606.718 394.254 606.267 394.068 605.654 394.068C605.129 394.068 604.725 394.282 604.441 394.709C604.158 395.132 604.016 395.738 604.016 396.525C604.016 397.303 604.154 397.898 604.429 398.308C604.704 398.715 605.116 398.918 605.667 398.918ZM578.575 406.522C578.575 407.491 578.257 408.234 577.623 408.75C576.988 409.267 576.084 409.525 574.912 409.525H573.947V412.997H572.43V403.717H575.103C576.262 403.717 577.13 403.954 577.705 404.427C578.285 404.901 578.575 405.6 578.575 406.522ZM573.947 408.249H574.753C575.532 408.249 576.103 408.113 576.467 407.843C576.831 407.572 577.013 407.149 577.013 406.573C577.013 406.04 576.85 405.642 576.524 405.38C576.199 405.117 575.691 404.986 575.001 404.986H573.947V408.249ZM584.662 412.997L584.364 412.019H584.313C583.974 412.447 583.634 412.739 583.291 412.895C582.948 413.048 582.508 413.124 581.971 413.124C581.281 413.124 580.741 412.938 580.352 412.565C579.967 412.193 579.774 411.666 579.774 410.985C579.774 410.261 580.043 409.715 580.581 409.347C581.118 408.979 581.937 408.778 583.037 408.744L584.25 408.706V408.331C584.25 407.883 584.144 407.548 583.932 407.328C583.725 407.104 583.401 406.992 582.961 406.992C582.601 406.992 582.256 407.045 581.926 407.151C581.596 407.256 581.279 407.381 580.974 407.525L580.492 406.459C580.873 406.26 581.289 406.11 581.742 406.008C582.195 405.902 582.622 405.849 583.024 405.849C583.917 405.849 584.59 406.044 585.043 406.433C585.5 406.823 585.729 407.434 585.729 408.268V412.997H584.662ZM582.44 411.981C582.982 411.981 583.416 411.831 583.742 411.531C584.072 411.226 584.237 410.801 584.237 410.255V409.645L583.335 409.683C582.633 409.709 582.121 409.827 581.799 410.039C581.482 410.246 581.323 410.566 581.323 410.997C581.323 411.31 581.416 411.554 581.603 411.727C581.789 411.897 582.068 411.981 582.44 411.981ZM591.372 405.849C591.672 405.849 591.92 405.871 592.114 405.913L591.968 407.303C591.757 407.252 591.537 407.227 591.308 407.227C590.711 407.227 590.227 407.421 589.854 407.811C589.486 408.2 589.302 408.706 589.302 409.328V412.997H587.811V405.976H588.979L589.175 407.214H589.251C589.484 406.795 589.787 406.463 590.159 406.218C590.536 405.972 590.94 405.849 591.372 405.849ZM594.863 409.29L595.707 408.236L597.827 405.976H599.547L596.723 408.991L599.725 412.997H597.973L595.72 409.918L594.901 410.591V412.997H593.422V403.12H594.901V407.938L594.825 409.29H594.863Z" fill="#262626"/>
                        <path class="wishart-svg text" d="M620.894 476.996H619.244L617.669 471.461C617.602 471.22 617.517 470.873 617.416 470.42C617.314 469.963 617.253 469.646 617.231 469.468C617.189 469.739 617.119 470.09 617.022 470.522C616.929 470.953 616.851 471.275 616.787 471.486L615.251 476.996H613.601L612.401 472.35L611.182 467.716H612.731L614.058 473.124C614.265 473.992 614.413 474.758 614.502 475.422C614.549 475.062 614.618 474.66 614.711 474.216C614.805 473.772 614.889 473.412 614.965 473.137L616.476 467.716H617.98L619.529 473.162C619.677 473.666 619.834 474.419 619.999 475.422C620.062 474.817 620.215 474.047 620.456 473.111L621.776 467.716H623.312L620.894 476.996ZM625.966 476.996H624.474V469.976H625.966V476.996ZM624.385 468.116C624.385 467.849 624.457 467.644 624.601 467.5C624.749 467.356 624.959 467.284 625.229 467.284C625.492 467.284 625.695 467.356 625.839 467.5C625.987 467.644 626.061 467.849 626.061 468.116C626.061 468.37 625.987 468.571 625.839 468.719C625.695 468.863 625.492 468.935 625.229 468.935C624.959 468.935 624.749 468.863 624.601 468.719C624.457 468.571 624.385 468.37 624.385 468.116ZM632.821 474.997C632.821 475.682 632.572 476.209 632.072 476.577C631.573 476.941 630.858 477.123 629.927 477.123C628.992 477.123 628.24 476.981 627.673 476.698V475.409C628.499 475.79 629.267 475.981 629.978 475.981C630.896 475.981 631.355 475.703 631.355 475.149C631.355 474.971 631.304 474.823 631.203 474.705C631.101 474.586 630.934 474.464 630.701 474.337C630.468 474.21 630.145 474.066 629.73 473.905C628.922 473.592 628.374 473.279 628.086 472.965C627.802 472.652 627.661 472.246 627.661 471.747C627.661 471.146 627.902 470.68 628.384 470.35C628.871 470.016 629.531 469.849 630.365 469.849C631.19 469.849 631.971 470.016 632.707 470.35L632.225 471.474C631.467 471.161 630.83 471.004 630.314 471.004C629.527 471.004 629.133 471.228 629.133 471.677C629.133 471.897 629.235 472.083 629.438 472.235C629.645 472.388 630.094 472.597 630.784 472.864C631.363 473.088 631.785 473.293 632.047 473.48C632.309 473.666 632.504 473.882 632.631 474.127C632.758 474.368 632.821 474.658 632.821 474.997ZM640.616 476.996H639.118V472.68C639.118 472.138 639.008 471.734 638.788 471.467C638.572 471.201 638.227 471.068 637.753 471.068C637.127 471.068 636.666 471.256 636.37 471.632C636.078 472.005 635.932 472.631 635.932 473.511V476.996H634.44V467.119H635.932V469.627C635.932 470.029 635.906 470.458 635.855 470.915H635.951C636.154 470.577 636.435 470.314 636.795 470.128C637.159 469.942 637.582 469.849 638.064 469.849C639.766 469.849 640.616 470.706 640.616 472.42V476.996ZM647.084 476.996L646.786 476.019H646.735C646.397 476.446 646.056 476.738 645.713 476.895C645.371 477.047 644.931 477.123 644.393 477.123C643.703 477.123 643.164 476.937 642.774 476.565C642.389 476.192 642.197 475.665 642.197 474.984C642.197 474.26 642.465 473.714 643.003 473.346C643.54 472.978 644.359 472.777 645.459 472.743L646.672 472.705V472.331C646.672 471.882 646.566 471.548 646.354 471.328C646.147 471.103 645.823 470.991 645.383 470.991C645.024 470.991 644.679 471.044 644.349 471.15C644.019 471.256 643.701 471.381 643.396 471.525L642.914 470.458C643.295 470.259 643.712 470.109 644.165 470.007C644.617 469.902 645.045 469.849 645.447 469.849C646.34 469.849 647.013 470.043 647.465 470.433C647.922 470.822 648.151 471.434 648.151 472.267V476.996H647.084ZM644.863 475.981C645.404 475.981 645.838 475.83 646.164 475.53C646.494 475.225 646.659 474.8 646.659 474.254V473.645L645.758 473.683C645.055 473.708 644.543 473.827 644.222 474.038C643.904 474.246 643.746 474.565 643.746 474.997C643.746 475.31 643.839 475.553 644.025 475.727C644.211 475.896 644.49 475.981 644.863 475.981ZM653.794 469.849C654.094 469.849 654.342 469.87 654.537 469.912L654.391 471.302C654.179 471.252 653.959 471.226 653.73 471.226C653.134 471.226 652.649 471.421 652.277 471.81C651.909 472.2 651.725 472.705 651.725 473.327V476.996H650.233V469.976H651.401L651.598 471.214H651.674C651.907 470.795 652.209 470.462 652.582 470.217C652.958 469.971 653.362 469.849 653.794 469.849ZM658.459 475.917C658.823 475.917 659.187 475.86 659.551 475.746V476.869C659.386 476.941 659.173 477 658.91 477.047C658.652 477.098 658.383 477.123 658.104 477.123C656.691 477.123 655.984 476.378 655.984 474.889V471.106H655.025V470.445L656.054 469.9L656.562 468.414H657.482V469.976H659.481V471.106H657.482V474.863C657.482 475.223 657.571 475.49 657.749 475.663C657.931 475.832 658.167 475.917 658.459 475.917Z" fill="#262626"/>
                        <path class="macgregor-svg text" d="M588.683 529.996L585.992 522.245H585.941C586.013 523.396 586.049 524.476 586.049 525.483V529.996H584.671V520.716H586.811L589.388 528.098H589.426L592.079 520.716H594.225V529.996H592.765V525.406C592.765 524.945 592.775 524.344 592.796 523.604C592.822 522.863 592.843 522.415 592.86 522.258H592.809L590.022 529.996H588.683ZM600.902 529.996L600.604 529.018H600.553C600.215 529.446 599.874 529.738 599.531 529.894C599.188 530.047 598.748 530.123 598.211 530.123C597.521 530.123 596.982 529.937 596.592 529.564C596.207 529.192 596.015 528.665 596.015 527.984C596.015 527.26 596.283 526.714 596.821 526.346C597.358 525.978 598.177 525.777 599.277 525.743L600.49 525.705V525.33C600.49 524.882 600.384 524.547 600.172 524.327C599.965 524.103 599.641 523.991 599.201 523.991C598.841 523.991 598.497 524.044 598.167 524.15C597.836 524.255 597.519 524.38 597.214 524.524L596.732 523.458C597.113 523.259 597.53 523.109 597.982 523.007C598.435 522.901 598.863 522.848 599.265 522.848C600.158 522.848 600.83 523.043 601.283 523.432C601.74 523.822 601.969 524.433 601.969 525.267V529.996H600.902ZM598.681 528.98C599.222 528.98 599.656 528.83 599.982 528.53C600.312 528.225 600.477 527.8 600.477 527.254V526.644L599.576 526.682C598.873 526.708 598.361 526.826 598.04 527.038C597.722 527.245 597.563 527.565 597.563 527.996C597.563 528.309 597.657 528.553 597.843 528.726C598.029 528.896 598.308 528.98 598.681 528.98ZM606.882 530.123C605.82 530.123 605.011 529.814 604.457 529.196C603.907 528.574 603.632 527.683 603.632 526.524C603.632 525.343 603.92 524.435 604.495 523.801C605.075 523.166 605.911 522.848 607.002 522.848C607.743 522.848 608.41 522.986 609.002 523.261L608.551 524.461C607.921 524.215 607.4 524.093 606.99 524.093C605.775 524.093 605.168 524.899 605.168 526.511C605.168 527.298 605.318 527.891 605.619 528.288C605.923 528.682 606.368 528.879 606.952 528.879C607.616 528.879 608.244 528.714 608.837 528.384V529.685C608.57 529.841 608.285 529.954 607.98 530.021C607.68 530.089 607.313 530.123 606.882 530.123ZM616.416 522.975V523.794L615.216 524.016C615.326 524.164 615.417 524.346 615.489 524.562C615.561 524.778 615.597 525.007 615.597 525.248C615.597 525.971 615.347 526.541 614.848 526.955C614.349 527.37 613.661 527.577 612.785 527.577C612.561 527.577 612.358 527.56 612.176 527.527C611.854 527.726 611.693 527.958 611.693 528.225C611.693 528.386 611.767 528.506 611.916 528.587C612.068 528.667 612.345 528.707 612.747 528.707H613.972C614.747 528.707 615.335 528.872 615.737 529.202C616.139 529.532 616.34 530.009 616.34 530.631C616.34 531.426 616.012 532.04 615.356 532.471C614.7 532.903 613.752 533.119 612.512 533.119C611.556 533.119 610.826 532.95 610.322 532.611C609.819 532.273 609.567 531.79 609.567 531.164C609.567 530.732 609.702 530.368 609.973 530.072C610.248 529.78 610.631 529.577 611.122 529.463C610.923 529.378 610.758 529.243 610.627 529.056C610.5 528.866 610.437 528.667 610.437 528.46C610.437 528.197 610.511 527.975 610.659 527.793C610.807 527.611 611.027 527.431 611.319 527.254C610.955 527.097 610.659 526.843 610.43 526.492C610.206 526.136 610.094 525.722 610.094 525.248C610.094 524.486 610.333 523.896 610.811 523.477C611.293 523.058 611.979 522.848 612.868 522.848C613.067 522.848 613.274 522.863 613.49 522.893C613.71 522.918 613.875 522.946 613.985 522.975H616.416ZM610.9 531.088C610.9 531.409 611.044 531.657 611.332 531.83C611.624 532.004 612.032 532.091 612.557 532.091C613.369 532.091 613.974 531.974 614.372 531.741C614.77 531.509 614.969 531.2 614.969 530.815C614.969 530.51 614.859 530.292 614.639 530.161C614.423 530.034 614.019 529.97 613.426 529.97H612.296C611.869 529.97 611.528 530.07 611.274 530.269C611.025 530.472 610.9 530.745 610.9 531.088ZM611.541 525.248C611.541 525.688 611.653 526.026 611.877 526.263C612.106 526.5 612.432 526.619 612.855 526.619C613.718 526.619 614.15 526.158 614.15 525.235C614.15 524.778 614.042 524.427 613.826 524.181C613.615 523.932 613.291 523.807 612.855 523.807C612.423 523.807 612.095 523.93 611.871 524.175C611.651 524.42 611.541 524.778 611.541 525.248ZM621.285 522.848C621.585 522.848 621.833 522.87 622.027 522.912L621.881 524.302C621.67 524.251 621.45 524.226 621.221 524.226C620.625 524.226 620.14 524.42 619.768 524.81C619.399 525.199 619.215 525.705 619.215 526.327V529.996H617.724V522.975H618.892L619.088 524.213H619.165C619.397 523.794 619.7 523.462 620.072 523.217C620.449 522.971 620.853 522.848 621.285 522.848ZM626.401 530.123C625.309 530.123 624.454 529.805 623.836 529.171C623.223 528.532 622.916 527.654 622.916 526.536C622.916 525.39 623.202 524.488 623.773 523.832C624.344 523.176 625.129 522.848 626.128 522.848C627.055 522.848 627.787 523.13 628.324 523.693C628.862 524.255 629.13 525.03 629.13 526.016V526.822H624.452C624.473 527.503 624.657 528.028 625.004 528.396C625.351 528.76 625.84 528.942 626.471 528.942C626.885 528.942 627.271 528.904 627.626 528.828C627.986 528.747 628.371 528.616 628.781 528.434V529.647C628.417 529.82 628.049 529.943 627.677 530.015C627.304 530.087 626.879 530.123 626.401 530.123ZM626.128 523.978C625.654 523.978 625.273 524.128 624.985 524.429C624.702 524.729 624.533 525.167 624.478 525.743H627.664C627.656 525.163 627.516 524.725 627.245 524.429C626.974 524.128 626.602 523.978 626.128 523.978ZM636.754 522.975V523.794L635.554 524.016C635.664 524.164 635.755 524.346 635.827 524.562C635.899 524.778 635.935 525.007 635.935 525.248C635.935 525.971 635.685 526.541 635.186 526.955C634.687 527.37 633.999 527.577 633.123 527.577C632.899 527.577 632.696 527.56 632.514 527.527C632.192 527.726 632.031 527.958 632.031 528.225C632.031 528.386 632.105 528.506 632.253 528.587C632.406 528.667 632.683 528.707 633.085 528.707H634.31C635.084 528.707 635.673 528.872 636.075 529.202C636.477 529.532 636.678 530.009 636.678 530.631C636.678 531.426 636.35 532.04 635.694 532.471C635.038 532.903 634.09 533.119 632.85 533.119C631.894 533.119 631.164 532.95 630.66 532.611C630.157 532.273 629.905 531.79 629.905 531.164C629.905 530.732 630.04 530.368 630.311 530.072C630.586 529.78 630.969 529.577 631.46 529.463C631.261 529.378 631.096 529.243 630.965 529.056C630.838 528.866 630.774 528.667 630.774 528.46C630.774 528.197 630.848 527.975 630.997 527.793C631.145 527.611 631.365 527.431 631.657 527.254C631.293 527.097 630.997 526.843 630.768 526.492C630.544 526.136 630.432 525.722 630.432 525.248C630.432 524.486 630.671 523.896 631.149 523.477C631.631 523.058 632.317 522.848 633.206 522.848C633.404 522.848 633.612 522.863 633.828 522.893C634.048 522.918 634.213 522.946 634.323 522.975H636.754ZM631.238 531.088C631.238 531.409 631.382 531.657 631.669 531.83C631.961 532.004 632.37 532.091 632.895 532.091C633.707 532.091 634.312 531.974 634.71 531.741C635.108 531.509 635.307 531.2 635.307 530.815C635.307 530.51 635.197 530.292 634.977 530.161C634.761 530.034 634.357 529.97 633.764 529.97H632.634C632.207 529.97 631.866 530.07 631.612 530.269C631.363 530.472 631.238 530.745 631.238 531.088ZM631.879 525.248C631.879 525.688 631.991 526.026 632.215 526.263C632.444 526.5 632.77 526.619 633.193 526.619C634.056 526.619 634.488 526.158 634.488 525.235C634.488 524.778 634.38 524.427 634.164 524.181C633.952 523.932 633.629 523.807 633.193 523.807C632.761 523.807 632.433 523.93 632.209 524.175C631.989 524.42 631.879 524.778 631.879 525.248ZM644.289 526.473C644.289 527.62 643.994 528.515 643.406 529.158C642.818 529.801 641.999 530.123 640.95 530.123C640.294 530.123 639.714 529.975 639.21 529.678C638.707 529.382 638.32 528.957 638.049 528.403C637.778 527.848 637.643 527.205 637.643 526.473C637.643 525.335 637.935 524.446 638.519 523.807C639.103 523.168 639.926 522.848 640.988 522.848C642.003 522.848 642.807 523.176 643.4 523.832C643.992 524.484 644.289 525.364 644.289 526.473ZM639.179 526.473C639.179 528.094 639.778 528.904 640.975 528.904C642.16 528.904 642.752 528.094 642.752 526.473C642.752 524.869 642.156 524.067 640.962 524.067C640.336 524.067 639.881 524.274 639.598 524.689C639.318 525.104 639.179 525.698 639.179 526.473ZM649.57 522.848C649.87 522.848 650.118 522.87 650.312 522.912L650.167 524.302C649.955 524.251 649.735 524.226 649.506 524.226C648.91 524.226 648.425 524.42 648.053 524.81C647.685 525.199 647.5 525.705 647.5 526.327V529.996H646.009V522.975H647.177L647.374 524.213H647.45C647.682 523.794 647.985 523.462 648.357 523.217C648.734 522.971 649.138 522.848 649.57 522.848Z" fill="#262626"/>
                        <path class="moorooka-svg text" d="M508.548 501.996L505.856 494.246H505.806C505.878 495.397 505.914 496.476 505.914 497.483V501.996H504.536V492.716H506.675L509.252 500.098H509.291L511.944 492.716H514.089V501.996H512.629V497.407C512.629 496.945 512.64 496.345 512.661 495.604C512.687 494.863 512.708 494.415 512.725 494.258H512.674L509.887 501.996H508.548ZM522.602 498.473C522.602 499.62 522.307 500.515 521.719 501.158C521.131 501.801 520.312 502.123 519.263 502.123C518.607 502.123 518.027 501.975 517.523 501.679C517.02 501.382 516.633 500.957 516.362 500.403C516.091 499.848 515.956 499.205 515.956 498.473C515.956 497.335 516.248 496.446 516.832 495.807C517.416 495.168 518.239 494.849 519.301 494.849C520.316 494.849 521.12 495.177 521.713 495.833C522.305 496.484 522.602 497.364 522.602 498.473ZM517.492 498.473C517.492 500.094 518.09 500.904 519.288 500.904C520.473 500.904 521.065 500.094 521.065 498.473C521.065 496.869 520.469 496.067 519.275 496.067C518.649 496.067 518.194 496.275 517.911 496.689C517.631 497.104 517.492 497.699 517.492 498.473ZM530.549 498.473C530.549 499.62 530.255 500.515 529.667 501.158C529.078 501.801 528.259 502.123 527.21 502.123C526.554 502.123 525.974 501.975 525.471 501.679C524.967 501.382 524.58 500.957 524.309 500.403C524.038 499.848 523.903 499.205 523.903 498.473C523.903 497.335 524.195 496.446 524.779 495.807C525.363 495.168 526.186 494.849 527.248 494.849C528.264 494.849 529.068 495.177 529.66 495.833C530.253 496.484 530.549 497.364 530.549 498.473ZM525.439 498.473C525.439 500.094 526.038 500.904 527.235 500.904C528.42 500.904 529.013 500.094 529.013 498.473C529.013 496.869 528.416 496.067 527.223 496.067C526.596 496.067 526.141 496.275 525.858 496.689C525.579 497.104 525.439 497.699 525.439 498.473ZM535.83 494.849C536.131 494.849 536.378 494.87 536.573 494.912L536.427 496.302C536.215 496.251 535.995 496.226 535.767 496.226C535.17 496.226 534.685 496.421 534.313 496.81C533.945 497.199 533.761 497.705 533.761 498.327V501.996H532.269V494.976H533.437L533.634 496.213H533.71C533.943 495.794 534.245 495.462 534.618 495.217C534.994 494.971 535.398 494.849 535.83 494.849ZM544.107 498.473C544.107 499.62 543.813 500.515 543.225 501.158C542.637 501.801 541.818 502.123 540.769 502.123C540.113 502.123 539.533 501.975 539.029 501.679C538.526 501.382 538.139 500.957 537.868 500.403C537.597 499.848 537.461 499.205 537.461 498.473C537.461 497.335 537.753 496.446 538.337 495.807C538.921 495.168 539.744 494.849 540.807 494.849C541.822 494.849 542.626 495.177 543.219 495.833C543.811 496.484 544.107 497.364 544.107 498.473ZM538.998 498.473C538.998 500.094 539.596 500.904 540.794 500.904C541.979 500.904 542.571 500.094 542.571 498.473C542.571 496.869 541.975 496.067 540.781 496.067C540.155 496.067 539.7 496.275 539.417 496.689C539.137 497.104 538.998 497.699 538.998 498.473ZM552.055 498.473C552.055 499.62 551.761 500.515 551.172 501.158C550.584 501.801 549.765 502.123 548.716 502.123C548.06 502.123 547.48 501.975 546.977 501.679C546.473 501.382 546.086 500.957 545.815 500.403C545.544 499.848 545.409 499.205 545.409 498.473C545.409 497.335 545.701 496.446 546.285 495.807C546.869 495.168 547.692 494.849 548.754 494.849C549.77 494.849 550.574 495.177 551.166 495.833C551.758 496.484 552.055 497.364 552.055 498.473ZM546.945 498.473C546.945 500.094 547.544 500.904 548.741 500.904C549.926 500.904 550.519 500.094 550.519 498.473C550.519 496.869 549.922 496.067 548.729 496.067C548.102 496.067 547.647 496.275 547.364 496.689C547.084 497.104 546.945 497.699 546.945 498.473ZM555.216 498.289L556.06 497.235L558.18 494.976H559.9L557.076 497.991L560.078 501.996H558.326L556.073 498.917L555.254 499.59V501.996H553.775V492.119H555.254V496.937L555.178 498.289H555.216ZM565.607 501.996L565.309 501.019H565.258C564.919 501.446 564.579 501.738 564.236 501.895C563.893 502.047 563.453 502.123 562.916 502.123C562.226 502.123 561.686 501.937 561.297 501.564C560.912 501.192 560.719 500.665 560.719 499.984C560.719 499.26 560.988 498.714 561.525 498.346C562.063 497.978 562.882 497.777 563.982 497.743L565.194 497.705V497.331C565.194 496.882 565.089 496.548 564.877 496.328C564.67 496.103 564.346 495.991 563.906 495.991C563.546 495.991 563.201 496.044 562.871 496.15C562.541 496.256 562.224 496.381 561.919 496.524L561.437 495.458C561.817 495.259 562.234 495.109 562.687 495.007C563.14 494.902 563.567 494.849 563.969 494.849C564.862 494.849 565.535 495.043 565.988 495.433C566.445 495.822 566.673 496.433 566.673 497.267V501.996H565.607ZM563.385 500.98C563.927 500.98 564.361 500.83 564.687 500.53C565.017 500.225 565.182 499.8 565.182 499.254V498.645L564.28 498.683C563.578 498.708 563.066 498.826 562.744 499.038C562.427 499.245 562.268 499.565 562.268 499.997C562.268 500.31 562.361 500.553 562.547 500.727C562.734 500.896 563.013 500.98 563.385 500.98Z" fill="#262626"/>
                        <path class="parkinson-svg text" d="M480.866 599.521C480.866 600.49 480.549 601.232 479.914 601.749C479.279 602.265 478.376 602.523 477.204 602.523H476.239V605.995H474.722V596.715H477.394C478.554 596.715 479.421 596.952 479.997 597.426C480.576 597.9 480.866 598.598 480.866 599.521ZM476.239 601.247H477.045C477.824 601.247 478.395 601.112 478.759 600.841C479.123 600.57 479.305 600.147 479.305 599.571C479.305 599.038 479.142 598.64 478.816 598.378C478.49 598.116 477.982 597.984 477.292 597.984H476.239V601.247ZM486.954 605.995L486.655 605.018H486.604C486.266 605.445 485.925 605.737 485.583 605.894C485.24 606.046 484.8 606.122 484.262 606.122C483.572 606.122 483.033 605.936 482.644 605.563C482.258 605.191 482.066 604.664 482.066 603.983C482.066 603.259 482.335 602.713 482.872 602.345C483.41 601.977 484.228 601.776 485.329 601.742L486.541 601.704V601.33C486.541 600.881 486.435 600.547 486.224 600.327C486.016 600.102 485.693 599.99 485.252 599.99C484.893 599.99 484.548 600.043 484.218 600.149C483.888 600.255 483.57 600.38 483.266 600.523L482.783 599.457C483.164 599.258 483.581 599.108 484.034 599.006C484.486 598.901 484.914 598.848 485.316 598.848C486.209 598.848 486.882 599.042 487.334 599.432C487.792 599.821 488.02 600.432 488.02 601.266V605.995H486.954ZM484.732 604.979C485.274 604.979 485.707 604.829 486.033 604.529C486.363 604.224 486.528 603.799 486.528 603.253V602.644L485.627 602.682C484.924 602.707 484.412 602.826 484.091 603.037C483.773 603.244 483.615 603.564 483.615 603.996C483.615 604.309 483.708 604.552 483.894 604.726C484.08 604.895 484.36 604.979 484.732 604.979ZM493.663 598.848C493.964 598.848 494.211 598.869 494.406 598.911L494.26 600.301C494.048 600.25 493.828 600.225 493.6 600.225C493.003 600.225 492.518 600.42 492.146 600.809C491.778 601.198 491.594 601.704 491.594 602.326V605.995H490.102V598.975H491.27L491.467 600.212H491.543C491.776 599.793 492.078 599.461 492.451 599.216C492.827 598.97 493.231 598.848 493.663 598.848ZM497.154 602.288L497.999 601.234L500.119 598.975H501.839L499.014 601.99L502.017 605.995H500.265L498.011 602.917L497.192 603.589V605.995H495.713V596.118H497.192V600.936L497.116 602.288H497.154ZM504.645 605.995H503.153V598.975H504.645V605.995ZM503.064 597.115C503.064 596.848 503.136 596.643 503.28 596.499C503.428 596.355 503.637 596.283 503.908 596.283C504.171 596.283 504.374 596.355 504.518 596.499C504.666 596.643 504.74 596.848 504.74 597.115C504.74 597.369 504.666 597.57 504.518 597.718C504.374 597.862 504.171 597.934 503.908 597.934C503.637 597.934 503.428 597.862 503.28 597.718C503.136 597.57 503.064 597.369 503.064 597.115ZM512.96 605.995H511.462V601.679C511.462 601.137 511.352 600.733 511.132 600.466C510.916 600.2 510.571 600.066 510.097 600.066C509.467 600.066 509.005 600.253 508.713 600.625C508.421 600.997 508.275 601.622 508.275 602.498V605.995H506.784V598.975H507.952L508.161 599.895H508.237C508.449 599.561 508.749 599.303 509.139 599.121C509.528 598.939 509.96 598.848 510.434 598.848C512.118 598.848 512.96 599.705 512.96 601.418V605.995ZM519.752 603.996C519.752 604.681 519.502 605.208 519.003 605.576C518.504 605.94 517.788 606.122 516.857 606.122C515.922 606.122 515.171 605.98 514.604 605.697V604.408C515.429 604.789 516.197 604.979 516.908 604.979C517.826 604.979 518.286 604.702 518.286 604.148C518.286 603.97 518.235 603.822 518.133 603.704C518.032 603.585 517.865 603.462 517.632 603.335C517.399 603.208 517.075 603.065 516.661 602.904C515.852 602.591 515.304 602.278 515.017 601.964C514.733 601.651 514.591 601.245 514.591 600.746C514.591 600.145 514.833 599.679 515.315 599.349C515.802 599.015 516.462 598.848 517.295 598.848C518.121 598.848 518.901 599.015 519.638 599.349L519.155 600.473C518.398 600.16 517.761 600.003 517.245 600.003C516.458 600.003 516.064 600.227 516.064 600.676C516.064 600.896 516.166 601.082 516.369 601.234C516.576 601.387 517.025 601.596 517.714 601.863C518.294 602.087 518.715 602.292 518.978 602.479C519.24 602.665 519.435 602.881 519.562 603.126C519.688 603.367 519.752 603.657 519.752 603.996ZM527.598 602.472C527.598 603.619 527.304 604.514 526.715 605.157C526.127 605.8 525.308 606.122 524.259 606.122C523.603 606.122 523.023 605.974 522.52 605.678C522.016 605.382 521.629 604.956 521.358 604.402C521.087 603.847 520.952 603.204 520.952 602.472C520.952 601.334 521.244 600.445 521.828 599.806C522.412 599.167 523.235 598.848 524.297 598.848C525.312 598.848 526.117 599.176 526.709 599.832C527.301 600.483 527.598 601.363 527.598 602.472ZM522.488 602.472C522.488 604.093 523.087 604.903 524.284 604.903C525.469 604.903 526.062 604.093 526.062 602.472C526.062 600.868 525.465 600.066 524.271 600.066C523.645 600.066 523.19 600.274 522.907 600.688C522.627 601.103 522.488 601.698 522.488 602.472ZM535.494 605.995H533.996V601.679C533.996 601.137 533.886 600.733 533.666 600.466C533.45 600.2 533.105 600.066 532.631 600.066C532.001 600.066 531.54 600.253 531.248 600.625C530.956 600.997 530.81 601.622 530.81 602.498V605.995H529.318V598.975H530.486L530.695 599.895H530.771C530.983 599.561 531.284 599.303 531.673 599.121C532.062 598.939 532.494 598.848 532.968 598.848C534.652 598.848 535.494 599.705 535.494 601.418V605.995Z" fill="#262626"/>
                        <path class="richlands-svg text" d="M385.996 531.032H387.049C387.756 531.032 388.268 530.901 388.585 530.638C388.903 530.376 389.062 529.987 389.062 529.47C389.062 528.946 388.89 528.569 388.547 528.34C388.205 528.112 387.688 527.998 386.999 527.998H385.996V531.032ZM385.996 532.289V535.996H384.479V526.715H387.1C388.298 526.715 389.184 526.94 389.76 527.388C390.335 527.837 390.623 528.514 390.623 529.42C390.623 530.575 390.022 531.398 388.82 531.889L391.442 535.996H389.715L387.494 532.289H385.996ZM394.127 535.996H392.635V528.975H394.127V535.996ZM392.546 527.115C392.546 526.849 392.618 526.644 392.762 526.5C392.91 526.356 393.12 526.284 393.391 526.284C393.653 526.284 393.856 526.356 394 526.5C394.148 526.644 394.222 526.849 394.222 527.115C394.222 527.369 394.148 527.57 394 527.718C393.856 527.862 393.653 527.934 393.391 527.934C393.12 527.934 392.91 527.862 392.762 527.718C392.618 527.57 392.546 527.369 392.546 527.115ZM399.097 536.123C398.035 536.123 397.227 535.814 396.672 535.196C396.122 534.574 395.847 533.683 395.847 532.524C395.847 531.343 396.135 530.435 396.71 529.8C397.29 529.166 398.126 528.848 399.218 528.848C399.958 528.848 400.625 528.986 401.217 529.261L400.767 530.461C400.136 530.215 399.616 530.092 399.205 530.092C397.991 530.092 397.383 530.899 397.383 532.511C397.383 533.298 397.534 533.89 397.834 534.288C398.139 534.682 398.583 534.879 399.167 534.879C399.831 534.879 400.46 534.714 401.052 534.383V535.685C400.786 535.841 400.5 535.953 400.195 536.021C399.895 536.089 399.529 536.123 399.097 536.123ZM408.879 535.996H407.381V531.679C407.381 531.138 407.271 530.734 407.051 530.467C406.835 530.2 406.49 530.067 406.016 530.067C405.39 530.067 404.929 530.255 404.632 530.632C404.34 531.004 404.194 531.631 404.194 532.511V535.996H402.703V526.119H404.194V528.626C404.194 529.028 404.169 529.458 404.118 529.915H404.213C404.417 529.576 404.698 529.314 405.058 529.128C405.422 528.941 405.845 528.848 406.327 528.848C408.028 528.848 408.879 529.705 408.879 531.419V535.996ZM412.446 535.996H410.955V526.119H412.446V535.996ZM418.978 535.996L418.68 535.018H418.629C418.29 535.446 417.95 535.738 417.607 535.894C417.264 536.047 416.824 536.123 416.287 536.123C415.597 536.123 415.057 535.936 414.668 535.564C414.283 535.192 414.09 534.665 414.09 533.984C414.09 533.26 414.359 532.714 414.896 532.346C415.434 531.978 416.253 531.777 417.353 531.743L418.565 531.705V531.33C418.565 530.882 418.46 530.547 418.248 530.327C418.041 530.103 417.717 529.991 417.277 529.991C416.917 529.991 416.572 530.044 416.242 530.15C415.912 530.255 415.595 530.38 415.29 530.524L414.808 529.458C415.188 529.259 415.605 529.109 416.058 529.007C416.511 528.901 416.938 528.848 417.34 528.848C418.233 528.848 418.906 529.043 419.359 529.432C419.816 529.822 420.044 530.433 420.044 531.267V535.996H418.978ZM416.756 534.98C417.298 534.98 417.732 534.83 418.058 534.529C418.388 534.225 418.553 533.799 418.553 533.254V532.644L417.651 532.682C416.949 532.708 416.437 532.826 416.115 533.038C415.798 533.245 415.639 533.565 415.639 533.996C415.639 534.309 415.732 534.553 415.918 534.726C416.105 534.895 416.384 534.98 416.756 534.98ZM428.303 535.996H426.805V531.679C426.805 531.138 426.695 530.734 426.475 530.467C426.259 530.2 425.914 530.067 425.44 530.067C424.809 530.067 424.348 530.253 424.056 530.626C423.764 530.998 423.618 531.622 423.618 532.498V535.996H422.126V528.975H423.294L423.504 529.896H423.58C423.792 529.561 424.092 529.303 424.481 529.121C424.871 528.939 425.302 528.848 425.776 528.848C427.461 528.848 428.303 529.705 428.303 531.419V535.996ZM432.746 536.123C431.87 536.123 431.187 535.805 430.696 535.171C430.205 534.536 429.959 533.645 429.959 532.498C429.959 531.347 430.207 530.452 430.702 529.813C431.201 529.17 431.891 528.848 432.771 528.848C433.694 528.848 434.396 529.189 434.879 529.87H434.955C434.883 529.367 434.847 528.969 434.847 528.677V526.119H436.345V535.996H435.177L434.917 535.075H434.847C434.369 535.774 433.669 536.123 432.746 536.123ZM433.146 534.917C433.76 534.917 434.206 534.745 434.485 534.402C434.765 534.055 434.909 533.495 434.917 532.72V532.511C434.917 531.626 434.773 530.998 434.485 530.626C434.198 530.253 433.747 530.067 433.133 530.067C432.609 530.067 432.204 530.281 431.921 530.708C431.637 531.131 431.496 531.736 431.496 532.524C431.496 533.302 431.633 533.897 431.908 534.307C432.183 534.714 432.596 534.917 433.146 534.917ZM443.194 533.996C443.194 534.682 442.945 535.209 442.445 535.577C441.946 535.941 441.231 536.123 440.3 536.123C439.365 536.123 438.613 535.981 438.046 535.697V534.409C438.872 534.79 439.64 534.98 440.351 534.98C441.269 534.98 441.728 534.703 441.728 534.149C441.728 533.971 441.677 533.823 441.576 533.704C441.474 533.586 441.307 533.463 441.074 533.336C440.841 533.209 440.518 533.065 440.103 532.904C439.295 532.591 438.747 532.278 438.459 531.965C438.175 531.652 438.034 531.246 438.034 530.746C438.034 530.145 438.275 529.68 438.757 529.35C439.244 529.015 439.904 528.848 440.738 528.848C441.563 528.848 442.344 529.015 443.08 529.35L442.598 530.473C441.84 530.16 441.203 530.004 440.687 530.004C439.9 530.004 439.506 530.228 439.506 530.676C439.506 530.896 439.608 531.083 439.811 531.235C440.018 531.387 440.467 531.597 441.157 531.863C441.736 532.088 442.158 532.293 442.42 532.479C442.682 532.665 442.877 532.881 443.004 533.127C443.131 533.368 443.194 533.658 443.194 533.996Z" fill="#262626"/>
                        <path class="jamboree-svg text" d="M372.304 478.586C371.889 478.586 371.542 478.533 371.263 478.427V477.151C371.619 477.24 371.928 477.285 372.19 477.285C373.019 477.285 373.434 476.76 373.434 475.711V466.716H374.958V475.66C374.958 476.608 374.731 477.331 374.278 477.831C373.83 478.334 373.172 478.586 372.304 478.586ZM381.597 475.996L381.299 475.019H381.248C380.91 475.446 380.569 475.738 380.226 475.895C379.883 476.047 379.443 476.123 378.906 476.123C378.216 476.123 377.676 475.937 377.287 475.565C376.902 475.192 376.709 474.665 376.709 473.984C376.709 473.26 376.978 472.714 377.516 472.346C378.053 471.978 378.872 471.777 379.972 471.743L381.185 471.705V471.331C381.185 470.882 381.079 470.548 380.867 470.328C380.66 470.103 380.336 469.991 379.896 469.991C379.536 469.991 379.191 470.044 378.861 470.15C378.531 470.256 378.214 470.381 377.909 470.525L377.427 469.458C377.808 469.259 378.224 469.109 378.677 469.007C379.13 468.902 379.557 468.849 379.959 468.849C380.852 468.849 381.525 469.043 381.978 469.433C382.435 469.822 382.664 470.434 382.664 471.267V475.996H381.597ZM379.375 474.981C379.917 474.981 380.351 474.83 380.677 474.53C381.007 474.225 381.172 473.8 381.172 473.254V472.645L380.271 472.683C379.568 472.708 379.056 472.827 378.734 473.038C378.417 473.246 378.258 473.565 378.258 473.997C378.258 474.31 378.351 474.553 378.538 474.727C378.724 474.896 379.003 474.981 379.375 474.981ZM390.662 475.996H389.164V471.667C389.164 471.13 389.062 470.73 388.859 470.467C388.656 470.201 388.338 470.068 387.907 470.068C387.331 470.068 386.908 470.256 386.637 470.632C386.371 471.005 386.237 471.627 386.237 472.499V475.996H384.746V468.976H385.914L386.123 469.896H386.199C386.394 469.562 386.675 469.304 387.043 469.122C387.416 468.94 387.824 468.849 388.269 468.849C389.348 468.849 390.063 469.217 390.414 469.953H390.516C390.723 469.606 391.015 469.335 391.392 469.141C391.768 468.946 392.2 468.849 392.687 468.849C393.524 468.849 394.134 469.06 394.515 469.484C394.9 469.907 395.092 470.552 395.092 471.42V475.996H393.601V471.667C393.601 471.13 393.497 470.73 393.29 470.467C393.086 470.201 392.769 470.068 392.337 470.068C391.758 470.068 391.332 470.249 391.062 470.613C390.795 470.973 390.662 471.527 390.662 472.276V475.996ZM400.761 468.849C401.637 468.849 402.318 469.166 402.805 469.801C403.296 470.436 403.541 471.326 403.541 472.473C403.541 473.624 403.293 474.521 402.798 475.165C402.303 475.804 401.616 476.123 400.735 476.123C399.847 476.123 399.157 475.804 398.666 475.165H398.564L398.292 475.996H397.174V466.119H398.666V468.468C398.666 468.641 398.658 468.9 398.641 469.242C398.624 469.585 398.611 469.803 398.603 469.896H398.666C399.14 469.198 399.838 468.849 400.761 468.849ZM400.374 470.068C399.773 470.068 399.339 470.245 399.072 470.601C398.81 470.952 398.674 471.542 398.666 472.372V472.473C398.666 473.328 398.801 473.948 399.072 474.333C399.343 474.714 399.785 474.904 400.399 474.904C400.928 474.904 401.328 474.695 401.599 474.276C401.874 473.857 402.011 473.252 402.011 472.461C402.011 470.865 401.465 470.068 400.374 470.068ZM411.501 472.473C411.501 473.62 411.207 474.515 410.619 475.158C410.03 475.802 409.212 476.123 408.162 476.123C407.506 476.123 406.926 475.975 406.423 475.679C405.919 475.383 405.532 474.957 405.261 474.403C404.99 473.849 404.855 473.205 404.855 472.473C404.855 471.335 405.147 470.446 405.731 469.807C406.315 469.168 407.138 468.849 408.2 468.849C409.216 468.849 410.02 469.177 410.612 469.833C411.205 470.484 411.501 471.365 411.501 472.473ZM406.391 472.473C406.391 474.094 406.99 474.904 408.188 474.904C409.372 474.904 409.965 474.094 409.965 472.473C409.965 470.869 409.368 470.068 408.175 470.068C407.549 470.068 407.094 470.275 406.81 470.69C406.531 471.104 406.391 471.699 406.391 472.473ZM416.782 468.849C417.083 468.849 417.33 468.87 417.525 468.912L417.379 470.302C417.167 470.252 416.947 470.226 416.719 470.226C416.122 470.226 415.638 470.421 415.265 470.81C414.897 471.2 414.713 471.705 414.713 472.327V475.996H413.221V468.976H414.389L414.586 470.214H414.662C414.895 469.795 415.197 469.462 415.57 469.217C415.946 468.971 416.351 468.849 416.782 468.849ZM421.898 476.123C420.807 476.123 419.952 475.806 419.334 475.171C418.72 474.532 418.414 473.654 418.414 472.537C418.414 471.39 418.699 470.489 419.271 469.833C419.842 469.177 420.627 468.849 421.625 468.849C422.552 468.849 423.284 469.13 423.822 469.693C424.359 470.256 424.628 471.03 424.628 472.016V472.822H419.95C419.971 473.504 420.155 474.028 420.502 474.397C420.849 474.761 421.338 474.943 421.968 474.943C422.383 474.943 422.768 474.904 423.124 474.828C423.483 474.748 423.868 474.617 424.279 474.435V475.647C423.915 475.821 423.547 475.943 423.174 476.015C422.802 476.087 422.377 476.123 421.898 476.123ZM421.625 469.979C421.152 469.979 420.771 470.129 420.483 470.429C420.199 470.73 420.03 471.168 419.975 471.743H423.162C423.153 471.164 423.014 470.726 422.743 470.429C422.472 470.129 422.099 469.979 421.625 469.979ZM429.389 476.123C428.297 476.123 427.442 475.806 426.824 475.171C426.211 474.532 425.904 473.654 425.904 472.537C425.904 471.39 426.189 470.489 426.761 469.833C427.332 469.177 428.117 468.849 429.116 468.849C430.042 468.849 430.775 469.13 431.312 469.693C431.849 470.256 432.118 471.03 432.118 472.016V472.822H427.44C427.461 473.504 427.645 474.028 427.992 474.397C428.339 474.761 428.828 474.943 429.458 474.943C429.873 474.943 430.258 474.904 430.614 474.828C430.973 474.748 431.359 474.617 431.769 474.435V475.647C431.405 475.821 431.037 475.943 430.665 476.015C430.292 476.087 429.867 476.123 429.389 476.123ZM429.116 469.979C428.642 469.979 428.261 470.129 427.973 470.429C427.69 470.73 427.52 471.168 427.465 471.743H430.652C430.643 471.164 430.504 470.726 430.233 470.429C429.962 470.129 429.59 469.979 429.116 469.979Z" fill="#262626"/>
                        <path class="tennyson-svg text" d="M467.5 444.996H465.983V437.017H463.253V435.716H470.229V437.017H467.5V444.996ZM474.565 445.123C473.473 445.123 472.618 444.806 472 444.171C471.387 443.532 471.08 442.654 471.08 441.537C471.08 440.39 471.366 439.489 471.937 438.833C472.508 438.177 473.293 437.849 474.292 437.849C475.219 437.849 475.951 438.13 476.488 438.693C477.026 439.256 477.294 440.03 477.294 441.016V441.823H472.616C472.637 442.504 472.821 443.029 473.168 443.397C473.515 443.761 474.004 443.943 474.635 443.943C475.049 443.943 475.435 443.905 475.79 443.828C476.15 443.748 476.535 443.617 476.945 443.435V444.647C476.581 444.821 476.213 444.944 475.841 445.016C475.468 445.087 475.043 445.123 474.565 445.123ZM474.292 438.979C473.818 438.979 473.437 439.129 473.149 439.43C472.866 439.73 472.697 440.168 472.642 440.744H475.828C475.82 440.164 475.68 439.726 475.409 439.43C475.138 439.129 474.766 438.979 474.292 438.979ZM485.166 444.996H483.667V440.68C483.667 440.138 483.557 439.734 483.337 439.468C483.122 439.201 482.777 439.068 482.303 439.068C481.672 439.068 481.211 439.254 480.919 439.626C480.627 439.999 480.481 440.623 480.481 441.499V444.996H478.989V437.976H480.157L480.367 438.896H480.443C480.654 438.562 480.955 438.304 481.344 438.122C481.734 437.94 482.165 437.849 482.639 437.849C484.323 437.849 485.166 438.706 485.166 440.42V444.996ZM493.417 444.996H491.919V440.68C491.919 440.138 491.809 439.734 491.589 439.468C491.374 439.201 491.029 439.068 490.555 439.068C489.924 439.068 489.463 439.254 489.171 439.626C488.879 439.999 488.733 440.623 488.733 441.499V444.996H487.241V437.976H488.409L488.619 438.896H488.695C488.906 438.562 489.207 438.304 489.596 438.122C489.986 437.94 490.417 437.849 490.891 437.849C492.575 437.849 493.417 438.706 493.417 440.42V444.996ZM494.427 437.976H496.052L497.48 441.956C497.696 442.523 497.84 443.056 497.912 443.556H497.962C498 443.323 498.07 443.041 498.172 442.711C498.273 442.377 498.811 440.799 499.784 437.976H501.396L498.394 445.93C497.848 447.39 496.938 448.12 495.665 448.12C495.334 448.12 495.013 448.084 494.7 448.012V446.831C494.924 446.882 495.18 446.907 495.468 446.907C496.187 446.907 496.693 446.49 496.985 445.657L497.245 444.996L494.427 437.976ZM507.179 442.997C507.179 443.682 506.93 444.209 506.43 444.578C505.931 444.941 505.216 445.123 504.285 445.123C503.349 445.123 502.598 444.982 502.031 444.698V443.41C502.856 443.79 503.625 443.981 504.335 443.981C505.254 443.981 505.713 443.704 505.713 443.149C505.713 442.972 505.662 442.823 505.561 442.705C505.459 442.586 505.292 442.464 505.059 442.337C504.826 442.21 504.503 442.066 504.088 441.905C503.28 441.592 502.732 441.279 502.444 440.966C502.16 440.653 502.019 440.246 502.019 439.747C502.019 439.146 502.26 438.681 502.742 438.35C503.229 438.016 503.889 437.849 504.723 437.849C505.548 437.849 506.329 438.016 507.065 438.35L506.583 439.474C505.825 439.161 505.188 439.004 504.672 439.004C503.885 439.004 503.491 439.229 503.491 439.677C503.491 439.897 503.593 440.083 503.796 440.236C504.003 440.388 504.452 440.598 505.142 440.864C505.721 441.088 506.142 441.294 506.405 441.48C506.667 441.666 506.862 441.882 506.989 442.127C507.116 442.369 507.179 442.658 507.179 442.997ZM515.025 441.474C515.025 442.62 514.731 443.515 514.143 444.159C513.554 444.802 512.736 445.123 511.686 445.123C511.03 445.123 510.45 444.975 509.947 444.679C509.443 444.383 509.056 443.958 508.785 443.403C508.514 442.849 508.379 442.206 508.379 441.474C508.379 440.335 508.671 439.446 509.255 438.807C509.839 438.168 510.662 437.849 511.724 437.849C512.74 437.849 513.544 438.177 514.136 438.833C514.729 439.485 515.025 440.365 515.025 441.474ZM509.915 441.474C509.915 443.094 510.514 443.905 511.711 443.905C512.896 443.905 513.489 443.094 513.489 441.474C513.489 439.87 512.892 439.068 511.699 439.068C511.072 439.068 510.618 439.275 510.334 439.69C510.055 440.105 509.915 440.699 509.915 441.474ZM522.921 444.996H521.423V440.68C521.423 440.138 521.313 439.734 521.093 439.468C520.877 439.201 520.533 439.068 520.059 439.068C519.428 439.068 518.967 439.254 518.675 439.626C518.383 439.999 518.237 440.623 518.237 441.499V444.996H516.745V437.976H517.913L518.123 438.896H518.199C518.41 438.562 518.711 438.304 519.1 438.122C519.489 437.94 519.921 437.849 520.395 437.849C522.079 437.849 522.921 438.706 522.921 440.42V444.996Z" fill="#262626"/>
                        <path class="wynnum-svg text" d="M719.965 271.998H718.315L716.741 266.463C716.673 266.222 716.588 265.875 716.487 265.422C716.385 264.965 716.324 264.647 716.303 264.47C716.26 264.74 716.191 265.092 716.093 265.523C716 265.955 715.922 266.277 715.858 266.488L714.322 271.998H712.672L711.472 267.351L710.253 262.718H711.802L713.129 268.126C713.336 268.993 713.484 269.759 713.573 270.424C713.62 270.064 713.69 269.662 713.783 269.218C713.876 268.773 713.96 268.414 714.037 268.139L715.547 262.718H717.052L718.601 268.164C718.749 268.668 718.905 269.421 719.07 270.424C719.134 269.819 719.286 269.048 719.527 268.113L720.848 262.718H722.384L719.965 271.998ZM722.479 264.977H724.104L725.532 268.957C725.748 269.524 725.892 270.058 725.964 270.557H726.015C726.053 270.324 726.123 270.043 726.224 269.713C726.326 269.378 726.863 267.8 727.836 264.977H729.449L726.446 272.931C725.9 274.391 724.991 275.121 723.717 275.121C723.387 275.121 723.065 275.085 722.752 275.013V273.832C722.976 273.883 723.232 273.909 723.52 273.909C724.239 273.909 724.745 273.492 725.037 272.658L725.297 271.998L722.479 264.977ZM736.691 271.998H735.193V267.682C735.193 267.14 735.083 266.736 734.863 266.469C734.647 266.203 734.303 266.069 733.829 266.069C733.198 266.069 732.737 266.255 732.445 266.628C732.153 267 732.007 267.624 732.007 268.5V271.998H730.515V264.977H731.683L731.893 265.898H731.969C732.18 265.564 732.481 265.305 732.87 265.123C733.259 264.941 733.691 264.85 734.165 264.85C735.849 264.85 736.691 265.707 736.691 267.421V271.998ZM744.943 271.998H743.445V267.682C743.445 267.14 743.335 266.736 743.115 266.469C742.899 266.203 742.555 266.069 742.081 266.069C741.45 266.069 740.989 266.255 740.697 266.628C740.405 267 740.259 267.624 740.259 268.5V271.998H738.767V264.977H739.935L740.145 265.898H740.221C740.432 265.564 740.733 265.305 741.122 265.123C741.511 264.941 741.943 264.85 742.417 264.85C744.101 264.85 744.943 265.707 744.943 267.421V271.998ZM751.97 271.998L751.761 271.078H751.685C751.477 271.403 751.181 271.659 750.796 271.846C750.415 272.032 749.979 272.125 749.488 272.125C748.638 272.125 748.003 271.913 747.584 271.49C747.165 271.067 746.956 270.426 746.956 269.567V264.977H748.46V269.307C748.46 269.844 748.57 270.248 748.79 270.519C749.01 270.786 749.355 270.919 749.825 270.919C750.451 270.919 750.91 270.733 751.202 270.36C751.498 269.984 751.646 269.355 751.646 268.475V264.977H753.145V271.998H751.97ZM761.187 271.998H759.689V267.669C759.689 267.131 759.587 266.731 759.384 266.469C759.181 266.203 758.864 266.069 758.432 266.069C757.857 266.069 757.433 266.258 757.163 266.634C756.896 267.007 756.763 267.629 756.763 268.5V271.998H755.271V264.977H756.439L756.648 265.898H756.725C756.919 265.564 757.201 265.305 757.569 265.123C757.941 264.941 758.35 264.85 758.794 264.85C759.873 264.85 760.588 265.219 760.939 265.955H761.041C761.248 265.608 761.54 265.337 761.917 265.142C762.294 264.948 762.725 264.85 763.212 264.85C764.05 264.85 764.659 265.062 765.04 265.485C765.425 265.908 765.618 266.554 765.618 267.421V271.998H764.126V267.669C764.126 267.131 764.022 266.731 763.815 266.469C763.612 266.203 763.294 266.069 762.863 266.069C762.283 266.069 761.858 266.251 761.587 266.615C761.32 266.975 761.187 267.529 761.187 268.278V271.998ZM767.09 269.148V267.878H770.353V269.148H767.09ZM726.542 284.998L723.85 277.247H723.799C723.871 278.398 723.907 279.478 723.907 280.485V284.998H722.53V275.718H724.669L727.246 283.1H727.284L729.938 275.718H732.083V284.998H730.623V280.409C730.623 279.947 730.634 279.346 730.655 278.606C730.68 277.865 730.701 277.417 730.718 277.26H730.667L727.881 284.998H726.542ZM738.761 284.998L738.462 284.02H738.412C738.073 284.448 737.732 284.74 737.39 284.896C737.047 285.049 736.607 285.125 736.069 285.125C735.38 285.125 734.84 284.939 734.451 284.566C734.066 284.194 733.873 283.667 733.873 282.986C733.873 282.262 734.142 281.716 734.679 281.348C735.217 280.98 736.035 280.779 737.136 280.745L738.348 280.707V280.332C738.348 279.884 738.242 279.55 738.031 279.329C737.823 279.105 737.5 278.993 737.06 278.993C736.7 278.993 736.355 279.046 736.025 279.152C735.695 279.258 735.377 279.382 735.073 279.526L734.59 278.46C734.971 278.261 735.388 278.111 735.841 278.009C736.294 277.903 736.721 277.85 737.123 277.85C738.016 277.85 738.689 278.045 739.142 278.434C739.599 278.824 739.827 279.435 739.827 280.269V284.998H738.761ZM736.539 283.982C737.081 283.982 737.514 283.832 737.84 283.532C738.17 283.227 738.335 282.802 738.335 282.256V281.646L737.434 281.684C736.732 281.71 736.22 281.828 735.898 282.04C735.581 282.247 735.422 282.567 735.422 282.998C735.422 283.312 735.515 283.555 735.701 283.728C735.887 283.898 736.167 283.982 736.539 283.982ZM748.085 284.998H746.587V280.682C746.587 280.14 746.477 279.736 746.257 279.469C746.042 279.203 745.697 279.069 745.223 279.069C744.592 279.069 744.131 279.255 743.839 279.628C743.547 280 743.401 280.624 743.401 281.5V284.998H741.909V277.977H743.077L743.287 278.898H743.363C743.574 278.564 743.875 278.305 744.264 278.123C744.653 277.941 745.085 277.85 745.559 277.85C747.243 277.85 748.085 278.707 748.085 280.421V284.998ZM751.653 284.998H750.161V275.121H751.653V284.998ZM752.726 277.977H754.351L755.779 281.957C755.995 282.524 756.139 283.058 756.21 283.557H756.261C756.299 283.324 756.369 283.043 756.471 282.713C756.572 282.378 757.11 280.8 758.083 277.977H759.695L756.693 285.931C756.147 287.391 755.237 288.121 753.963 288.121C753.633 288.121 753.312 288.085 752.999 288.013V286.832C753.223 286.883 753.479 286.909 753.767 286.909C754.486 286.909 754.992 286.492 755.284 285.658L755.544 284.998L752.726 277.977Z" fill="#262626"/>
                        <path class="chandler-svg text" d="M696.615 435.884C695.743 435.884 695.058 436.193 694.559 436.811C694.059 437.429 693.81 438.282 693.81 439.369C693.81 440.507 694.049 441.369 694.527 441.953C695.009 442.537 695.705 442.829 696.615 442.829C697.009 442.829 697.39 442.791 697.758 442.714C698.126 442.634 698.509 442.532 698.907 442.41V443.711C698.179 443.986 697.354 444.124 696.431 444.124C695.073 444.124 694.03 443.713 693.302 442.892C692.574 442.067 692.21 440.888 692.21 439.356C692.21 438.392 692.386 437.547 692.737 436.824C693.092 436.1 693.604 435.546 694.273 435.161C694.942 434.776 695.727 434.583 696.628 434.583C697.576 434.583 698.452 434.782 699.256 435.18L698.71 436.443C698.397 436.295 698.065 436.166 697.713 436.056C697.366 435.941 697 435.884 696.615 435.884ZM706.924 443.997H705.426V439.68C705.426 439.139 705.316 438.734 705.096 438.468C704.88 438.201 704.535 438.068 704.061 438.068C703.435 438.068 702.973 438.256 702.677 438.633C702.385 439.005 702.239 439.632 702.239 440.512V443.997H700.748V434.12H702.239V436.627C702.239 437.029 702.214 437.458 702.163 437.916H702.258C702.461 437.577 702.743 437.315 703.103 437.128C703.466 436.942 703.89 436.849 704.372 436.849C706.073 436.849 706.924 437.706 706.924 439.42V443.997ZM713.392 443.997L713.094 443.019H713.043C712.704 443.446 712.364 443.738 712.021 443.895C711.678 444.047 711.238 444.124 710.701 444.124C710.011 444.124 709.471 443.937 709.082 443.565C708.697 443.193 708.504 442.666 708.504 441.984C708.504 441.261 708.773 440.715 709.311 440.347C709.848 439.979 710.667 439.778 711.767 439.744L712.979 439.706V439.331C712.979 438.882 712.874 438.548 712.662 438.328C712.455 438.104 712.131 437.992 711.691 437.992C711.331 437.992 710.986 438.045 710.656 438.15C710.326 438.256 710.009 438.381 709.704 438.525L709.222 437.458C709.603 437.26 710.019 437.109 710.472 437.008C710.925 436.902 711.352 436.849 711.754 436.849C712.647 436.849 713.32 437.044 713.773 437.433C714.23 437.822 714.458 438.434 714.458 439.268V443.997H713.392ZM711.17 442.981C711.712 442.981 712.146 442.831 712.472 442.53C712.802 442.226 712.967 441.8 712.967 441.254V440.645L712.065 440.683C711.363 440.708 710.851 440.827 710.529 441.039C710.212 441.246 710.053 441.565 710.053 441.997C710.053 442.31 710.146 442.554 710.333 442.727C710.519 442.896 710.798 442.981 711.17 442.981ZM722.717 443.997H721.219V439.68C721.219 439.139 721.109 438.734 720.889 438.468C720.673 438.201 720.328 438.068 719.854 438.068C719.223 438.068 718.762 438.254 718.47 438.626C718.178 438.999 718.032 439.623 718.032 440.499V443.997H716.541V436.976H717.708L717.918 437.896H717.994C718.206 437.562 718.506 437.304 718.896 437.122C719.285 436.94 719.716 436.849 720.19 436.849C721.875 436.849 722.717 437.706 722.717 439.42V443.997ZM727.16 444.124C726.284 444.124 725.601 443.806 725.11 443.171C724.619 442.537 724.374 441.646 724.374 440.499C724.374 439.348 724.621 438.453 725.116 437.814C725.616 437.171 726.305 436.849 727.186 436.849C728.108 436.849 728.811 437.19 729.293 437.871H729.369C729.297 437.368 729.261 436.97 729.261 436.678V434.12H730.759V443.997H729.591L729.331 443.076H729.261C728.783 443.774 728.083 444.124 727.16 444.124ZM727.56 442.917C728.174 442.917 728.62 442.746 728.899 442.403C729.179 442.056 729.323 441.496 729.331 440.721V440.512C729.331 439.627 729.187 438.999 728.899 438.626C728.612 438.254 728.161 438.068 727.547 438.068C727.023 438.068 726.618 438.282 726.335 438.709C726.051 439.132 725.91 439.737 725.91 440.524C725.91 441.303 726.047 441.898 726.322 442.308C726.597 442.714 727.01 442.917 727.56 442.917ZM734.384 443.997H732.892V434.12H734.384V443.997ZM739.589 444.124C738.497 444.124 737.642 443.806 737.024 443.171C736.411 442.532 736.104 441.654 736.104 440.537C736.104 439.39 736.39 438.489 736.961 437.833C737.532 437.177 738.317 436.849 739.316 436.849C740.243 436.849 740.975 437.131 741.512 437.693C742.05 438.256 742.318 439.031 742.318 440.017V440.823H737.64C737.661 441.504 737.845 442.029 738.192 442.397C738.539 442.761 739.028 442.943 739.659 442.943C740.073 442.943 740.458 442.905 740.814 442.829C741.174 442.748 741.559 442.617 741.969 442.435V443.647C741.605 443.821 741.237 443.944 740.865 444.016C740.492 444.088 740.067 444.124 739.589 444.124ZM739.316 437.979C738.842 437.979 738.461 438.129 738.173 438.43C737.89 438.73 737.721 439.168 737.666 439.744H740.852C740.844 439.164 740.704 438.726 740.433 438.43C740.162 438.129 739.79 437.979 739.316 437.979ZM747.574 436.849C747.875 436.849 748.122 436.87 748.317 436.913L748.171 438.303C747.959 438.252 747.739 438.227 747.511 438.227C746.914 438.227 746.43 438.421 746.057 438.811C745.689 439.2 745.505 439.706 745.505 440.328V443.997H744.013V436.976H745.181L745.378 438.214H745.454C745.687 437.795 745.989 437.463 746.362 437.217C746.738 436.972 747.143 436.849 747.574 436.849Z" fill="#262626"/>
                        <path class="chermside-svg text" d="M521.669 168.888C520.797 168.888 520.111 169.197 519.612 169.814C519.113 170.432 518.863 171.285 518.863 172.373C518.863 173.511 519.102 174.372 519.58 174.956C520.063 175.54 520.759 175.832 521.669 175.832C522.062 175.832 522.443 175.794 522.811 175.718C523.179 175.637 523.562 175.536 523.96 175.413V176.714C523.232 176.989 522.407 177.127 521.485 177.127C520.126 177.127 519.083 176.716 518.355 175.896C517.627 175.07 517.263 173.892 517.263 172.36C517.263 171.395 517.439 170.551 517.79 169.827C518.146 169.104 518.658 168.549 519.326 168.164C519.995 167.779 520.78 167.586 521.681 167.586C522.629 167.586 523.505 167.785 524.309 168.183L523.763 169.446C523.45 169.298 523.118 169.169 522.767 169.059C522.42 168.945 522.054 168.888 521.669 168.888ZM531.977 177H530.479V172.684C530.479 172.142 530.369 171.738 530.149 171.471C529.933 171.205 529.588 171.071 529.114 171.071C528.488 171.071 528.027 171.26 527.731 171.636C527.439 172.009 527.293 172.635 527.293 173.515V177H525.801V167.123H527.293V169.63C527.293 170.032 527.267 170.462 527.216 170.919H527.312C527.515 170.58 527.796 170.318 528.156 170.132C528.52 169.946 528.943 169.853 529.425 169.853C531.127 169.853 531.977 170.709 531.977 172.423V177ZM537.119 177.127C536.027 177.127 535.172 176.81 534.554 176.175C533.941 175.536 533.634 174.658 533.634 173.541C533.634 172.394 533.92 171.492 534.491 170.836C535.062 170.181 535.847 169.853 536.846 169.853C537.773 169.853 538.505 170.134 539.042 170.697C539.58 171.26 539.848 172.034 539.848 173.02V173.826H535.17C535.191 174.507 535.375 175.032 535.722 175.4C536.069 175.764 536.558 175.946 537.189 175.946C537.603 175.946 537.988 175.908 538.344 175.832C538.704 175.752 539.089 175.62 539.499 175.438V176.651C539.135 176.824 538.767 176.947 538.395 177.019C538.022 177.091 537.597 177.127 537.119 177.127ZM536.846 170.982C536.372 170.982 535.991 171.133 535.703 171.433C535.42 171.734 535.25 172.172 535.195 172.747H538.382C538.374 172.167 538.234 171.729 537.963 171.433C537.692 171.133 537.32 170.982 536.846 170.982ZM545.104 169.853C545.405 169.853 545.652 169.874 545.847 169.916L545.701 171.306C545.489 171.255 545.269 171.23 545.041 171.23C544.444 171.23 543.959 171.425 543.587 171.814C543.219 172.203 543.035 172.709 543.035 173.331V177H541.543V169.979H542.711L542.908 171.217H542.984C543.217 170.798 543.519 170.466 543.892 170.221C544.268 169.975 544.672 169.853 545.104 169.853ZM553.07 177H551.572V172.671C551.572 172.133 551.471 171.734 551.268 171.471C551.065 171.205 550.747 171.071 550.316 171.071C549.74 171.071 549.317 171.26 549.046 171.636C548.779 172.009 548.646 172.631 548.646 173.502V177H547.154V169.979H548.322L548.532 170.9H548.608C548.803 170.566 549.084 170.307 549.452 170.125C549.825 169.944 550.233 169.853 550.677 169.853C551.756 169.853 552.472 170.221 552.823 170.957H552.924C553.132 170.61 553.424 170.339 553.8 170.145C554.177 169.95 554.609 169.853 555.095 169.853C555.933 169.853 556.543 170.064 556.923 170.487C557.309 170.91 557.501 171.556 557.501 172.423V177H556.009V172.671C556.009 172.133 555.906 171.734 555.698 171.471C555.495 171.205 555.178 171.071 554.746 171.071C554.166 171.071 553.741 171.253 553.47 171.617C553.204 171.977 553.07 172.531 553.07 173.28V177ZM564.299 175C564.299 175.686 564.05 176.213 563.55 176.581C563.051 176.945 562.336 177.127 561.405 177.127C560.47 177.127 559.719 176.985 559.152 176.702V175.413C559.977 175.794 560.745 175.984 561.456 175.984C562.374 175.984 562.833 175.707 562.833 175.153C562.833 174.975 562.782 174.827 562.681 174.708C562.579 174.59 562.412 174.467 562.179 174.34C561.947 174.213 561.623 174.069 561.208 173.909C560.4 173.596 559.852 173.282 559.564 172.969C559.281 172.656 559.139 172.25 559.139 171.75C559.139 171.15 559.38 170.684 559.862 170.354C560.349 170.02 561.009 169.853 561.843 169.853C562.668 169.853 563.449 170.02 564.185 170.354L563.703 171.478C562.945 171.164 562.308 171.008 561.792 171.008C561.005 171.008 560.611 171.232 560.611 171.681C560.611 171.901 560.713 172.087 560.916 172.239C561.124 172.392 561.572 172.601 562.262 172.868C562.842 173.092 563.263 173.297 563.525 173.483C563.787 173.67 563.982 173.885 564.109 174.131C564.236 174.372 564.299 174.662 564.299 175ZM567.41 177H565.918V169.979H567.41V177ZM565.829 168.12C565.829 167.853 565.901 167.648 566.045 167.504C566.193 167.36 566.403 167.288 566.673 167.288C566.936 167.288 567.139 167.36 567.283 167.504C567.431 167.648 567.505 167.853 567.505 168.12C567.505 168.374 567.431 168.575 567.283 168.723C567.139 168.867 566.936 168.938 566.673 168.938C566.403 168.938 566.193 168.867 566.045 168.723C565.901 168.575 565.829 168.374 565.829 168.12ZM571.917 177.127C571.041 177.127 570.357 176.81 569.866 176.175C569.375 175.54 569.13 174.649 569.13 173.502C569.13 172.351 569.378 171.456 569.873 170.817C570.372 170.174 571.062 169.853 571.942 169.853C572.865 169.853 573.567 170.193 574.049 170.875H574.126C574.054 170.371 574.018 169.973 574.018 169.681V167.123H575.516V177H574.348L574.088 176.08H574.018C573.54 176.778 572.839 177.127 571.917 177.127ZM572.317 175.921C572.93 175.921 573.377 175.75 573.656 175.407C573.935 175.06 574.079 174.499 574.088 173.725V173.515C574.088 172.631 573.944 172.002 573.656 171.63C573.368 171.257 572.917 171.071 572.304 171.071C571.779 171.071 571.375 171.285 571.091 171.712C570.808 172.136 570.666 172.741 570.666 173.528C570.666 174.306 570.804 174.901 571.079 175.312C571.354 175.718 571.766 175.921 572.317 175.921ZM580.714 177.127C579.623 177.127 578.768 176.81 578.15 176.175C577.536 175.536 577.23 174.658 577.23 173.541C577.23 172.394 577.515 171.492 578.087 170.836C578.658 170.181 579.443 169.853 580.442 169.853C581.368 169.853 582.1 170.134 582.638 170.697C583.175 171.26 583.444 172.034 583.444 173.02V173.826H578.766C578.787 174.507 578.971 175.032 579.318 175.4C579.665 175.764 580.154 175.946 580.784 175.946C581.199 175.946 581.584 175.908 581.94 175.832C582.299 175.752 582.684 175.62 583.095 175.438V176.651C582.731 176.824 582.363 176.947 581.99 177.019C581.618 177.091 581.193 177.127 580.714 177.127ZM580.442 170.982C579.968 170.982 579.587 171.133 579.299 171.433C579.015 171.734 578.846 172.172 578.791 172.747H581.978C581.969 172.167 581.83 171.729 581.559 171.433C581.288 171.133 580.916 170.982 580.442 170.982Z" fill="#262626"/>
                        <path class="lytton-svg text" d="M679.285 346V336.72H680.802V344.699H684.732V346H679.285ZM685.106 338.979H686.731L688.159 342.959C688.375 343.527 688.519 344.06 688.591 344.559H688.642C688.68 344.326 688.75 344.045 688.851 343.715C688.953 343.381 689.49 341.802 690.464 338.979H692.076L689.073 346.933C688.527 348.393 687.618 349.123 686.344 349.123C686.014 349.123 685.692 349.087 685.379 349.015V347.834C685.603 347.885 685.859 347.911 686.147 347.911C686.867 347.911 687.372 347.494 687.664 346.66L687.924 346L685.106 338.979ZM695.757 344.921C696.121 344.921 696.485 344.864 696.849 344.75V345.873C696.684 345.945 696.471 346.004 696.208 346.051C695.95 346.102 695.681 346.127 695.402 346.127C693.989 346.127 693.282 345.382 693.282 343.893V340.109H692.323V339.449L693.352 338.903L693.86 337.418H694.78V338.979H696.779V340.109H694.78V343.867C694.78 344.227 694.869 344.493 695.047 344.667C695.228 344.836 695.465 344.921 695.757 344.921ZM700.874 344.921C701.238 344.921 701.602 344.864 701.965 344.75V345.873C701.8 345.945 701.587 346.004 701.324 346.051C701.066 346.102 700.797 346.127 700.518 346.127C699.105 346.127 698.398 345.382 698.398 343.893V340.109H697.44V339.449L698.468 338.903L698.976 337.418H699.896V338.979H701.896V340.109H699.896V343.867C699.896 344.227 699.985 344.493 700.163 344.667C700.345 344.836 700.582 344.921 700.874 344.921ZM709.602 342.477C709.602 343.624 709.308 344.519 708.719 345.162C708.131 345.805 707.312 346.127 706.263 346.127C705.607 346.127 705.027 345.979 704.524 345.683C704.02 345.386 703.633 344.961 703.362 344.407C703.091 343.852 702.956 343.209 702.956 342.477C702.956 341.339 703.248 340.45 703.832 339.811C704.416 339.172 705.239 338.853 706.301 338.853C707.317 338.853 708.121 339.181 708.713 339.836C709.305 340.488 709.602 341.368 709.602 342.477ZM704.492 342.477C704.492 344.098 705.091 344.908 706.288 344.908C707.473 344.908 708.066 344.098 708.066 342.477C708.066 340.873 707.469 340.071 706.276 340.071C705.649 340.071 705.194 340.279 704.911 340.693C704.631 341.108 704.492 341.703 704.492 342.477ZM717.498 346H716V341.684C716 341.142 715.89 340.738 715.67 340.471C715.454 340.205 715.109 340.071 714.635 340.071C714.005 340.071 713.544 340.257 713.252 340.63C712.96 341.002 712.814 341.626 712.814 342.502V346H711.322V338.979H712.49L712.699 339.9H712.776C712.987 339.566 713.288 339.307 713.677 339.125C714.066 338.944 714.498 338.853 714.972 338.853C716.656 338.853 717.498 339.709 717.498 341.423V346Z" fill="#262626"/>
                        <path class="calamvale-svg text" d="M579.957 600.888C579.085 600.888 578.4 601.197 577.901 601.814C577.401 602.432 577.152 603.285 577.152 604.373C577.152 605.511 577.391 606.372 577.869 606.956C578.351 607.54 579.047 607.832 579.957 607.832C580.351 607.832 580.732 607.794 581.1 607.718C581.468 607.637 581.851 607.536 582.249 607.413V608.714C581.521 608.989 580.696 609.127 579.773 609.127C578.415 609.127 577.372 608.716 576.644 607.896C575.916 607.07 575.552 605.892 575.552 604.36C575.552 603.395 575.728 602.551 576.079 601.827C576.434 601.104 576.946 600.549 577.615 600.164C578.283 599.779 579.068 599.586 579.97 599.586C580.918 599.586 581.794 599.785 582.598 600.183L582.052 601.446C581.739 601.298 581.407 601.169 581.055 601.059C580.708 600.945 580.342 600.888 579.957 600.888ZM588.482 609L588.184 608.022H588.133C587.794 608.45 587.454 608.742 587.111 608.898C586.768 609.051 586.328 609.127 585.791 609.127C585.101 609.127 584.561 608.941 584.172 608.568C583.787 608.196 583.594 607.669 583.594 606.988C583.594 606.264 583.863 605.718 584.401 605.35C584.938 604.982 585.757 604.781 586.857 604.747L588.069 604.709V604.334C588.069 603.886 587.964 603.552 587.752 603.332C587.545 603.107 587.221 602.995 586.781 602.995C586.421 602.995 586.076 603.048 585.746 603.154C585.416 603.26 585.099 603.384 584.794 603.528L584.312 602.462C584.693 602.263 585.109 602.113 585.562 602.011C586.015 601.905 586.442 601.853 586.844 601.853C587.737 601.853 588.41 602.047 588.863 602.437C589.32 602.826 589.548 603.437 589.548 604.271V609H588.482ZM586.26 607.984C586.802 607.984 587.236 607.834 587.562 607.534C587.892 607.229 588.057 606.804 588.057 606.258V605.648L587.155 605.687C586.453 605.712 585.941 605.83 585.619 606.042C585.302 606.249 585.143 606.569 585.143 607C585.143 607.314 585.236 607.557 585.422 607.73C585.609 607.9 585.888 607.984 586.26 607.984ZM593.122 609H591.631V599.123H593.122V609ZM599.654 609L599.356 608.022H599.305C598.966 608.45 598.626 608.742 598.283 608.898C597.94 609.051 597.5 609.127 596.963 609.127C596.273 609.127 595.733 608.941 595.344 608.568C594.959 608.196 594.766 607.669 594.766 606.988C594.766 606.264 595.035 605.718 595.572 605.35C596.11 604.982 596.929 604.781 598.029 604.747L599.241 604.709V604.334C599.241 603.886 599.136 603.552 598.924 603.332C598.717 603.107 598.393 602.995 597.953 602.995C597.593 602.995 597.248 603.048 596.918 603.154C596.588 603.26 596.271 603.384 595.966 603.528L595.484 602.462C595.864 602.263 596.281 602.113 596.734 602.011C597.187 601.905 597.614 601.853 598.016 601.853C598.909 601.853 599.582 602.047 600.035 602.437C600.492 602.826 600.72 603.437 600.72 604.271V609H599.654ZM597.432 607.984C597.974 607.984 598.408 607.834 598.734 607.534C599.064 607.229 599.229 606.804 599.229 606.258V605.648L598.327 605.687C597.625 605.712 597.113 605.83 596.791 606.042C596.474 606.249 596.315 606.569 596.315 607C596.315 607.314 596.408 607.557 596.594 607.73C596.781 607.9 597.06 607.984 597.432 607.984ZM608.718 609H607.22V604.671C607.22 604.133 607.119 603.734 606.916 603.471C606.713 603.205 606.395 603.071 605.964 603.071C605.388 603.071 604.965 603.26 604.694 603.636C604.427 604.009 604.294 604.631 604.294 605.502V609H602.802V601.979H603.97L604.18 602.9H604.256C604.451 602.566 604.732 602.307 605.1 602.125C605.473 601.944 605.881 601.853 606.325 601.853C607.404 601.853 608.12 602.221 608.471 602.957H608.572C608.78 602.61 609.072 602.339 609.448 602.145C609.825 601.95 610.257 601.853 610.743 601.853C611.581 601.853 612.191 602.064 612.571 602.487C612.957 602.91 613.149 603.556 613.149 604.423V609H611.657V604.671C611.657 604.133 611.554 603.734 611.346 603.471C611.143 603.205 610.826 603.071 610.394 603.071C609.814 603.071 609.389 603.253 609.118 603.617C608.852 603.977 608.718 604.531 608.718 605.28V609ZM616.831 609L614.165 601.979H615.739L617.167 606.061C617.413 606.747 617.561 607.301 617.611 607.724H617.662C617.7 607.419 617.848 606.865 618.107 606.061L619.535 601.979H621.122L618.443 609H616.831ZM626.581 609L626.282 608.022H626.232C625.893 608.45 625.552 608.742 625.21 608.898C624.867 609.051 624.427 609.127 623.889 609.127C623.2 609.127 622.66 608.941 622.271 608.568C621.886 608.196 621.693 607.669 621.693 606.988C621.693 606.264 621.962 605.718 622.499 605.35C623.037 604.982 623.855 604.781 624.956 604.747L626.168 604.709V604.334C626.168 603.886 626.062 603.552 625.851 603.332C625.643 603.107 625.32 602.995 624.88 602.995C624.52 602.995 624.175 603.048 623.845 603.154C623.515 603.26 623.197 603.384 622.893 603.528L622.41 602.462C622.791 602.263 623.208 602.113 623.661 602.011C624.114 601.905 624.541 601.853 624.943 601.853C625.836 601.853 626.509 602.047 626.962 602.437C627.419 602.826 627.647 603.437 627.647 604.271V609H626.581ZM624.359 607.984C624.901 607.984 625.334 607.834 625.66 607.534C625.99 607.229 626.155 606.804 626.155 606.258V605.648L625.254 605.687C624.552 605.712 624.04 605.83 623.718 606.042C623.401 606.249 623.242 606.569 623.242 607C623.242 607.314 623.335 607.557 623.521 607.73C623.707 607.9 623.987 607.984 624.359 607.984ZM631.221 609H629.729V599.123H631.221V609ZM636.426 609.127C635.334 609.127 634.479 608.81 633.861 608.175C633.248 607.536 632.941 606.658 632.941 605.541C632.941 604.394 633.227 603.492 633.798 602.836C634.369 602.181 635.154 601.853 636.153 601.853C637.08 601.853 637.812 602.134 638.349 602.697C638.887 603.26 639.155 604.034 639.155 605.02V605.826H634.477C634.498 606.507 634.682 607.032 635.029 607.4C635.376 607.764 635.865 607.946 636.496 607.946C636.91 607.946 637.296 607.908 637.651 607.832C638.011 607.752 638.396 607.62 638.806 607.438V608.651C638.442 608.824 638.074 608.947 637.702 609.019C637.329 609.091 636.904 609.127 636.426 609.127ZM636.153 602.982C635.679 602.982 635.298 603.133 635.01 603.433C634.727 603.734 634.558 604.172 634.503 604.747H637.689C637.681 604.167 637.541 603.729 637.27 603.433C636.999 603.133 636.627 602.982 636.153 602.982Z" fill="#262626"/>
                        <path class="lucia-svg text" d="M437.199 388C437.199 388.686 436.95 389.213 436.45 389.581C435.951 389.945 435.236 390.127 434.305 390.127C433.37 390.127 432.618 389.985 432.051 389.702V388.413C432.877 388.794 433.645 388.984 434.356 388.984C435.274 388.984 435.733 388.707 435.733 388.153C435.733 387.975 435.682 387.827 435.581 387.708C435.479 387.59 435.312 387.467 435.079 387.34C434.846 387.213 434.523 387.069 434.108 386.909C433.3 386.596 432.752 386.282 432.464 385.969C432.18 385.656 432.039 385.25 432.039 384.75C432.039 384.15 432.28 383.684 432.762 383.354C433.249 383.02 433.909 382.853 434.743 382.853C435.568 382.853 436.349 383.02 437.085 383.354L436.603 384.478C435.845 384.164 435.208 384.008 434.692 384.008C433.905 384.008 433.511 384.232 433.511 384.681C433.511 384.901 433.613 385.087 433.816 385.239C434.023 385.392 434.472 385.601 435.162 385.868C435.742 386.092 436.163 386.297 436.425 386.483C436.687 386.67 436.882 386.885 437.009 387.131C437.136 387.372 437.199 387.662 437.199 388ZM441.433 388.921C441.797 388.921 442.161 388.864 442.525 388.75V389.873C442.36 389.945 442.146 390.004 441.884 390.051C441.626 390.102 441.357 390.127 441.078 390.127C439.664 390.127 438.958 389.382 438.958 387.893V384.109H437.999V383.449L439.027 382.903L439.535 381.418H440.456V382.979H442.455V384.109H440.456V387.867C440.456 388.227 440.545 388.493 440.722 388.667C440.904 388.836 441.141 388.921 441.433 388.921ZM447.47 390V380.72H448.987V388.699H452.916V390H447.47ZM459.308 390L459.099 389.08H459.023C458.815 389.405 458.519 389.661 458.134 389.848C457.753 390.034 457.317 390.127 456.826 390.127C455.976 390.127 455.341 389.915 454.922 389.492C454.503 389.069 454.294 388.428 454.294 387.569V382.979H455.798V387.309C455.798 387.846 455.908 388.25 456.128 388.521C456.348 388.788 456.693 388.921 457.163 388.921C457.789 388.921 458.248 388.735 458.54 388.362C458.836 387.986 458.985 387.357 458.985 386.477V382.979H460.483V390H459.308ZM465.44 390.127C464.378 390.127 463.57 389.818 463.015 389.2C462.465 388.578 462.19 387.687 462.19 386.528C462.19 385.347 462.478 384.439 463.053 383.805C463.633 383.17 464.469 382.853 465.561 382.853C466.301 382.853 466.968 382.99 467.56 383.265L467.11 384.465C466.479 384.219 465.958 384.097 465.548 384.097C464.333 384.097 463.726 384.903 463.726 386.515C463.726 387.302 463.876 387.895 464.177 388.292C464.482 388.686 464.926 388.883 465.51 388.883C466.174 388.883 466.803 388.718 467.395 388.388V389.689C467.129 389.846 466.843 389.958 466.538 390.025C466.238 390.093 465.872 390.127 465.44 390.127ZM470.537 390H469.046V382.979H470.537V390ZM468.957 381.12C468.957 380.853 469.029 380.648 469.172 380.504C469.321 380.36 469.53 380.288 469.801 380.288C470.063 380.288 470.266 380.36 470.41 380.504C470.558 380.648 470.632 380.853 470.632 381.12C470.632 381.374 470.558 381.575 470.41 381.723C470.266 381.867 470.063 381.938 469.801 381.938C469.53 381.938 469.321 381.867 469.172 381.723C469.029 381.575 468.957 381.374 468.957 381.12ZM477.069 390L476.771 389.022H476.72C476.381 389.45 476.041 389.742 475.698 389.898C475.355 390.051 474.915 390.127 474.378 390.127C473.688 390.127 473.148 389.941 472.759 389.568C472.374 389.196 472.181 388.669 472.181 387.988C472.181 387.264 472.45 386.718 472.987 386.35C473.525 385.982 474.344 385.781 475.444 385.747L476.656 385.709V385.334C476.656 384.886 476.551 384.552 476.339 384.332C476.132 384.107 475.808 383.995 475.368 383.995C475.008 383.995 474.663 384.048 474.333 384.154C474.003 384.26 473.686 384.384 473.381 384.528L472.899 383.462C473.279 383.263 473.696 383.113 474.149 383.011C474.602 382.905 475.029 382.853 475.431 382.853C476.324 382.853 476.997 383.047 477.45 383.437C477.907 383.826 478.135 384.437 478.135 385.271V390H477.069ZM474.847 388.984C475.389 388.984 475.823 388.834 476.149 388.534C476.479 388.229 476.644 387.804 476.644 387.258V386.648L475.742 386.687C475.04 386.712 474.528 386.83 474.206 387.042C473.889 387.249 473.73 387.569 473.73 388C473.73 388.314 473.823 388.557 474.009 388.73C474.196 388.9 474.475 388.984 474.847 388.984Z" fill="#262626"/>
                    </svg>
                </div>
                <div class="modal">
                    <div class="modal__inner">
                        <div class="area-image">
                            <svg width="817" height="666" viewBox="0 0 817 666" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="pullenvale-svg" d="M1 163.133L2.54708 153.851L4.09415 155.707V145.496L5.95065 147.662V136.523L8.11655 138.999C7.56906 134.962 6.86824 132.413 8.11655 128.169V124.147C8.11655 124.147 18.9461 114.555 20.4932 113.627C22.0402 112.699 26.0626 113.627 26.0626 113.627C26.0626 113.627 32.9727 107.612 38.7487 103.726C44.5247 99.8389 42.3021 99.1178 45.2464 96.9186C50.3 93.1438 60.4077 91.3491 60.4077 91.3491L62.8831 79.5914L70.309 77.1161L79.9009 81.1385L93.2058 79.5914L104.654 70.6185L110.533 74.3314L107.748 95.0621L116.721 95.9903L118.887 87.6362L131.883 100.013H137.452L143.64 113.936V125.694L129.098 134.976V144.568L125.694 148.9V151.375L129.098 155.707L127.241 159.42V163.133L139.927 176.128H144.878V184.482H146.116V187.577L150.138 191.908L148.591 195.931V212.948L151.995 215.424L157.874 216.661L165.918 217.899L176.438 219.137L177.676 220.993H185.721L187.887 224.087L186.959 226.872L185.721 230.585L188.815 232.132L191.6 236.773L192.838 241.105L194.694 243.89L199.954 238.63L207.999 246.674L213.259 247.603L216.972 250.078L222.232 253.172L223.779 257.813L225.945 263.383L228.73 264.93L229.349 270.19L228.73 277.306L227.492 282.566L228.73 288.755V293.705L220.685 302.369V308.557L222.232 311.651H238.012L242.963 312.579L248.842 314.436V316.602H254.102V313.508L251.936 311.651L249.461 309.485L248.842 306.391L246.366 304.225L254.102 297.727L258.743 304.225L274.214 293.705L278.855 297.727L286.281 291.23L295.873 296.799L302.061 297.727L310.415 307.938L317.841 303.606L327.433 314.436L335.478 311.651L344.142 318.768L354.043 311.651H361.159L367.967 312.579L371.989 315.364V323.099L377.868 324.028V327.122H385.294L389.935 324.028L392.41 326.193L396.123 325.575L397.67 322.171H400.765L402.621 324.028H406.025V331.453L404.787 335.785V338.879L411.594 345.377L419.33 349.09H423.971V355.588L425.827 357.444V359.61V364.87L414.379 366.417V374.462H410.047V381.578L402.621 385.601V393.955L407.572 400.762H413.141H419.33V404.784H422.114L421.495 409.426L418.401 410.354V413.757L426.446 414.995L427.374 418.089L419.33 419.636H415.307L416.235 430.466H408.809L398.599 429.537L396.123 431.703H389.007L385.603 433.25L382.819 436.344L380.034 440.367L380.653 456.147H367.657L366.42 458.003L348.783 459.55L345.998 462.335L343.213 467.286V470.999L348.783 476.878L349.711 482.138L344.142 483.685L337.953 485.232L332.693 490.182L331.146 492.967L333.621 495.752L336.716 500.083L338.263 500.702H343.213L342.285 503.178L337.953 505.962L329.599 515.245V522.052L331.146 525.455V530.406L332.693 532.881L336.716 539.379L338.263 542.782L344.142 548.661L347.236 550.518L348.783 554.54V560.728H342.285V562.585H335.787C333.936 558.714 333.4 556.547 332.693 552.684C330.701 550.887 329.813 549.548 328.671 546.495L319.698 537.522C315.676 534.081 313.531 531.763 309.797 527.312L305.465 522.98C302.205 523.601 300.377 523.8 297.11 523.599L292.469 531.334L289.685 538.451C288.324 542.916 287.756 543.575 286.59 546.186C285.879 549.837 285.015 551.591 283.187 554.54H276.689L274.214 551.755V539.688L273.285 530.406L272.048 519.886C270.339 517.959 269.636 515.562 268.335 511.532C266.756 508.454 266.289 506.572 265.55 503.178C263.777 500.866 263.471 499.068 263.075 495.752V485.232C264.235 480.978 267.097 477.806 267.716 476.259C268.335 474.712 268.954 465.429 268.954 465.429C269.206 464.188 269.622 461.097 268.335 458.003C267.047 454.909 265.719 453.674 265.241 450.268C263.9 447.8 262.732 446.379 260.909 443.152C258.33 441.073 256.699 440.344 253.483 439.748C249.884 439.503 247.801 439.475 243.891 439.748C240.58 440.75 238.803 441.463 235.846 443.152L233.68 445.936V449.649L235.846 451.196L240.487 451.815L244.51 453.053L247.295 454.29L250.079 457.694L250.698 461.097C250.698 461.097 251.214 463.573 250.389 464.192C249.564 464.81 246.676 464.81 246.676 464.81H241.416L241.106 466.667L237.084 467.286L233.062 469.142L227.801 472.546L223.47 473.783L222.541 476.878L220.994 479.662L219.447 482.138L215.425 483.066L210.474 483.375H206.452C204.934 484.915 203.766 485.157 201.501 485.232H195.622C193.988 484.724 193.256 484.163 192.219 482.756L188.506 482.138L185.721 480.59L181.08 481.828L178.295 482.138L173.654 481.519L170.869 480.59L168.703 479.043C168.394 478.309 169.013 476.259 168.084 474.402C166.731 473.165 166.847 473.783 165.3 473.165C163.134 473.474 164.255 473.474 162.824 474.093C161.896 475.33 161.896 475.33 161.587 476.878C161.896 478.425 162.309 478.6 162.515 479.662C163.427 480.476 163.863 480.994 164.371 482.138L163.752 485.541H160.968L160.349 488.016L158.492 489.254L154.47 490.182L144.878 489.873L141.475 484.613L138.999 484.303L135.596 483.994L133.12 488.016L129.407 491.111L126.313 494.205L122.91 496.68L120.434 500.083L116.103 503.178L112.39 504.106L109.295 502.249L108.367 500.083H105.892C104.654 501.631 103.545 502.204 100.632 502.559L96.2999 499.465L94.134 494.823V489.254L95.6811 488.945V482.138L97.847 470.38C100.903 453.861 101.914 444.306 106.511 433.25C107.668 430.466 109.129 428.891 112.39 427.371C113.656 426.547 114.72 426.305 117.031 426.134C119.541 426.229 120.86 426.442 122.91 427.371L126.932 429.228L128.479 427.371C128.779 424.022 129.098 420.255 128.789 419.017C128.479 417.78 127.144 417.199 125.694 416.233C119.388 416.222 113.627 416.542 108.367 415.304C103.107 414.067 101.802 411.473 98.4658 407.26C95.9679 404.496 93.4661 401.783 94.134 397.358L91.6587 392.717C86.66 387.252 80.2103 380.65 80.8292 378.484C81.448 376.318 87.2011 375.764 91.6587 376.009V367.345C91.6587 367.345 93.2058 367.036 93.5152 366.727C93.8246 366.417 93.2121 355.574 94.4434 352.803C95.6748 350.032 97.847 350.328 97.847 350.328L98.4658 345.686C98.4658 345.686 95.0623 345.996 94.7528 345.686C94.4434 345.377 95.3717 338.261 94.7528 337.951C94.134 337.642 92.8964 339.189 91.6587 337.951C90.421 336.714 91.6587 327.431 91.6587 327.431L90.1116 325.265C90.1116 325.265 89.8022 318.458 90.1116 317.839C90.421 317.221 92.8964 315.364 93.5152 315.364C94.134 315.364 94.7528 315.983 94.7528 315.983H101.56V305.772L103.416 304.844V296.18L104.964 295.252V285.66L103.416 283.185V276.069C103.416 276.069 99.4091 276.372 98.4658 275.759C97.5226 275.147 101.553 263.323 101.56 262.145C101.567 260.967 98.0876 262.292 96.6093 260.289V258.432C99.4923 255.903 101.313 254.996 104.964 254.41C105.969 249.488 106.211 246.561 106.201 241.105C106.201 241.105 103.555 239.698 103.416 238.63C103.278 237.562 104.684 230.558 104.654 224.397L96.6093 224.087L94.7528 219.137C94.7528 219.137 94.3759 211.711 94.7528 210.782C95.1298 209.854 99.8413 206.081 99.3941 204.594C98.9469 203.107 96.2999 197.478 95.9905 197.168C95.6811 196.859 85.4704 206.141 84.5421 204.904C83.6139 203.666 83.9233 197.478 83.9233 197.478H85.4704V186.648L86.708 184.173L87.6363 177.056L88.874 174.272V166.536L82.9951 165.584V153.826L67.5243 152.613V143.64H69.0714V131.882C69.0714 131.882 46.451 127.664 45.5558 129.407C44.6606 131.15 44.3181 136.523 44.3181 136.523C39.0377 136.978 36.485 136.906 32.2509 136.523C32.8118 139.478 32.9624 141.189 32.2509 144.568C27.494 145.008 25.2016 144.37 21.7308 141.783L20.8026 148.9H19.2555L20.8026 154.779H18.3273V160.348H12.4484V165.608H1V163.133Z" fill="#F9F9F9" stroke="#676767"/>
                                <path class="gap-svg" d="M185.721 220.993L187.887 224.087L186.958 226.872L185.721 230.585L188.815 232.132L191.6 236.773L192.837 241.105L194.694 243.889L199.954 238.629L207.999 246.674L213.259 247.602L216.972 250.078L222.232 253.172L223.779 257.813L225.945 263.383L228.73 264.93L229.348 270.19L228.73 277.306L227.492 282.566L228.73 288.755V293.705L220.685 302.369V308.557L222.232 311.651H238.012L242.963 312.58L248.842 314.436V316.602H254.102V313.508L251.936 311.651L249.46 309.485L248.842 306.391L246.366 304.225L254.102 297.728L258.743 304.225L274.214 293.705L278.855 297.728L286.281 291.23L295.873 296.799L302.061 297.728L310.415 307.938L317.841 303.607L327.433 314.436L335.478 311.651L344.141 318.768L354.043 311.651H361.159L367.966 312.58L371.989 315.364V323.1L377.868 324.028V327.122H385.294L389.935 324.028L392.41 326.194L396.123 325.575L397.67 322.171H400.764L402.621 324.028H406.025L410.975 320.934L412.213 316.293C416.235 316.293 416.854 316.293 419.948 315.364L423.971 317.84H431.087L431.706 313.198C434.587 313.707 436.148 313.722 438.823 313.198V316.293L440.37 321.553L443.773 325.266L446.867 324.956L447.796 322.481C450.371 323.383 451.616 323.439 453.365 322.481L454.603 318.458L456.15 315.364H459.244L463.266 319.696L466.979 318.768C472.425 317.305 474.593 315.486 476.571 310.104L478.737 308.867L479.047 306.391C482.807 307.345 484.98 307.297 488.948 306.391L489.257 307.32L490.804 307.938V310.723L499.468 310.104V306.701L501.324 305.463V302.678H499.159C499.159 302.678 497.611 301.176 497.611 299.584C497.611 297.992 496.993 292.158 496.993 292.158H499.468L500.706 290.611L504.109 290.302V288.445H507.513V276.997L505.966 276.378L504.109 274.212C501.92 272.682 500.114 272.721 496.374 273.593L495.136 274.212C494.758 274.212 494.043 274.088 494.208 273.593L493.28 276.378L491.733 276.997V274.831L488.329 274.212C488.329 271.675 488.329 270.252 488.329 267.714C485.807 267.487 484.911 267.115 479.975 268.024L479.356 265.239C475.514 264.264 473.501 264.349 470.074 265.239V268.952L468.217 269.261V276.378H457.697L456.15 281.019L453.674 282.257L451.509 284.113L448.724 283.495L448.105 282.876L431.087 282.257L430.468 281.329C427.483 281.15 425.847 281.064 423.971 281.329L423.042 279.782L422.424 275.45L420.567 274.831C420.864 273.875 420.892 273.11 420.567 271.118H419.329V268.024L417.782 266.786C418.163 265.164 417.782 262.145 417.782 262.145L414.998 263.383C415.8 261.57 415.664 260.554 414.998 258.741L413.451 257.194L411.594 260.288L410.047 262.145C408.88 262.304 408.187 262.424 406.025 263.383L404.787 260.288C403.119 259.509 402.225 259.404 400.764 260.288V258.741L391.791 257.194L388.388 258.741H385.294L383.128 254.409L378.796 255.647C378.482 260.416 378.491 262.842 378.796 266.786H376.939L377.868 272.665H374.774V271.118L363.016 270.19V268.643H358.375L357.756 271.737H354.043L352.805 269.261V268.024H349.092V250.078L345.379 248.84V243.889H341.666V238.629H337.334V241.105H333.003L325.577 239.867L322.482 238.629L315.675 236.773C315.675 236.773 311.343 237.801 310.725 237.701C309.23 237.46 307.012 236.773 307.012 236.773L297.729 235.535C294.577 237.58 292.667 239.103 289.066 242.342H283.805V250.078H280.092V248.84C272.766 248.479 269.923 248.179 267.097 247.602L266.169 248.84C264.477 248.84 263.529 248.84 261.837 248.84C261.233 247.269 260.894 246.388 260.29 244.818L256.577 243.889L255.339 242.342C254.01 242.342 253.265 242.342 251.936 242.342C249.761 243.309 248.541 243.851 246.366 244.818C244.979 244.726 244.103 244.692 241.416 244.818L240.178 242.342H236.155C232.168 238.838 229.932 236.873 225.945 233.369L219.756 230.585C217.219 228.409 214.187 225.943 213.259 225.015C212.331 224.087 210.182 218.554 207.07 214.495C204.819 214.419 202.12 215.114 201.192 215.114C200.263 215.114 199.954 213.257 199.954 213.257C197.663 213.737 196.451 213.557 194.384 212.638C192.684 210.97 191.602 210.258 188.815 210.473C187.171 210.823 186.454 211.366 185.721 213.257C185.007 216.277 184.99 217.973 185.721 220.993Z" fill="#F9F9F9" stroke="#676767"/>
                                <path class="enoggera-svg" d="M337.644 238.465H341.976V243.725H345.689V248.676L349.402 249.914V267.86H353.115V269.097L354.352 271.573H358.065L358.684 268.479H363.326V270.026L375.083 270.954V272.501H378.177L377.249 266.622H379.106C378.801 262.678 378.791 260.252 379.106 255.483L383.438 254.245L385.603 258.577H388.698L392.101 257.03L401.074 258.577V260.124C402.534 259.24 403.428 259.345 405.097 260.124L406.334 263.219C408.496 262.26 409.19 262.14 410.357 261.981L411.904 260.124L413.76 257.03L415.307 258.577C415.974 260.39 416.109 261.406 415.307 263.219L418.092 261.981C418.092 261.981 418.473 265 418.092 266.622L419.639 267.86V270.954H420.877C421.202 272.946 421.173 273.711 420.877 274.667L422.733 275.286L423.352 279.618L424.28 281.165C426.157 280.9 427.793 280.986 430.778 281.165L431.397 282.093L448.415 282.712L449.034 283.331L451.818 283.949L453.984 282.093L456.46 280.855L458.007 276.214H468.527V269.097L470.383 268.788V265.075C473.811 264.185 475.824 264.1 479.666 265.075L480.285 267.86C485.22 266.951 486.116 267.323 488.639 267.55V274.048L492.042 274.667V276.833L493.589 276.214L494.518 273.429C494.353 273.924 495.068 274.048 495.446 274.048L496.684 273.429C500.424 272.557 502.23 272.518 504.419 274.048L506.275 276.214L507.822 276.833L511.845 276.214L514.011 274.048L515.248 272.501L514.011 268.788H511.845V261.981H514.011V255.793H515.248V249.604H508.751V248.676C505.403 248.351 503.029 248.38 498.231 248.676V246.82H496.684V241.869L498.231 239.394C496.446 236.015 494.759 234.417 490.805 231.968H487.092C484.371 233.718 482.76 238.465 481.832 238.156C480.903 237.846 477.5 230.421 477.5 230.421C474.766 228.805 472.938 228.808 469.455 229.492C467.227 225.731 465.342 223.632 461.41 219.9V216.187C460.825 214.054 459.629 213.452 456.46 213.093C455.591 210.352 454.238 209.557 451.818 208.143L447.796 208.452L443.155 205.977C438.494 207.325 436.347 208.639 433.253 211.856C433.253 211.856 433.3 215.259 432.325 215.878C431.351 216.497 420.15 223.573 418.711 226.089C416.236 227.017 385.603 202.264 383.438 201.026C381.272 199.788 381.314 200.252 379.106 201.026C373.098 200.981 368.758 200.545 367.657 202.573C367.657 205.594 367.657 207.288 367.657 210.309H365.801V219.9C360.934 219.9 358.391 219.9 354.352 219.9C349.108 219.748 346.37 219.381 341.976 218.044C340.173 218.483 339.832 220.119 339.501 223.613C338.157 229.693 337.94 232.859 337.644 238.465Z" fill="#F9F9F9" stroke="#676767"/>
                                <path class="mcdowall-svg" d="M490.805 231.968C494.759 234.417 496.446 236.015 498.231 239.394L502.098 238.156C504.795 236.727 506.04 235.336 507.513 231.204C513.063 204.67 515.597 188.682 519.89 159.73L522.984 158.801L521.437 135.286L515.249 141.784L509.37 143.331L507.204 138.999L502.872 137.761C502.356 135.595 501.449 130.645 501.944 128.169C502.439 125.694 503.181 127.757 503.491 129.098V120.125L505.347 119.197V112.389L507.204 110.533V100.322C497.597 98.4863 491.371 98.8003 479.666 100.322C475.26 103.365 472.442 104.955 471.002 108.986C466.354 111.358 465.526 114.331 463.576 119.197L464.814 124.457L468.527 129.098L475.334 133.12L477.5 140.855L467.599 139.927L466.67 144.878C465.592 146.449 465.679 147.329 466.67 148.9L469.455 150.447V156.326C466.902 155.248 465.914 155.865 464.814 158.801C464.056 166.143 464.318 170.273 466.67 177.676L471.002 182.936V188.196C465.233 190.263 462.303 191.929 457.697 195.931V198.406L460.482 203.666V214.186L461.41 216.188V219.901C465.342 223.633 467.227 225.731 469.455 229.493C472.938 228.809 474.766 228.806 477.5 230.421C477.5 230.421 480.903 237.847 481.832 238.156C482.76 238.466 484.371 233.719 487.092 231.968H490.805Z" fill="#F9F9F9" stroke="#676767"/>
                                <path class="bracken-svg" d="M507.204 110.532V100.322C499.438 98.8373 493.882 98.7581 485.854 99.5862C487.727 94.8404 487.71 87.945 487.71 87.945L491.114 81.4473L496.993 75.2591L498.54 66.9049L496.993 60.7167L489.567 55.7661C489.773 52.2594 490.371 45.246 491.114 45.246C491.857 45.246 492.249 43.3896 492.352 42.4613L499.778 41.5331L502.872 38.439L508.132 43.0801H517.105V41.5331L510.607 38.439L509.06 34.4166L515.248 32.8695L518.033 26.6813L518.652 19.5648L520.509 17.3989L531.029 26.0624C535.778 29.3807 537.831 31.4074 540.311 35.3448C543.866 36.8716 545.929 37.1712 549.903 35.3448L552.069 32.8695C551.382 28.9749 551.352 26.7192 552.997 22.3495L550.522 19.5648V12.7577L554.854 6.56943L565.374 1.92824L571.562 1L573.728 3.4753L570.324 4.40354V9.35415H568.777C570.468 14.6104 570.391 17.8142 568.777 23.8965H570.324V28.5377C567.551 35.4167 565.458 39.0501 561.042 45.246C569.397 56.8174 571.599 65.1535 575.275 80.2097V95.9897L572.8 94.4427H569.087L558.567 103.725L559.804 111.46L550.522 120.124V127.24L546.809 130.025L551.141 134.357V138.998L567.849 158.491L529.172 152.303V150.137H522.674L521.437 135.285L515.248 141.783L509.37 143.33L507.204 138.998L502.872 137.76C502.356 135.595 501.449 130.644 501.944 128.169C502.439 125.693 503.181 127.756 503.491 129.097V120.124L505.347 119.196V112.389L507.204 110.532Z" fill="#F9F9F9" stroke="#676767"/>
                                <path class="deagon-svg" d="M551.14 138.998L567.849 158.491C567.849 158.491 591.674 181.388 592.911 179.841C594.149 178.294 593.53 174.581 593.53 174.581L597.243 173.034C598.656 168.606 599.242 166.159 597.862 162.204L602.194 161.585C605.017 158.903 607.066 157.667 606.835 153.231L612.405 156.635C618.08 152.213 620.212 149.627 622.615 144.877C621.608 142.617 620.018 141.477 615.808 139.617L618.593 137.142C622.4 140.389 624.621 141.838 629.422 140.855C632.103 137.138 631.489 135.23 629.732 131.882C628.316 130.442 627.17 129.969 623.853 130.335L628.494 123.527C632.019 128.732 633.908 129.534 637.158 128.169L639.633 125.384C640.593 123.078 640.218 121.945 638.396 120.124C638.759 117.505 638.61 116.136 635.301 114.554L632.517 116.411H626.947L627.875 106.2L622.615 96.918L633.754 91.6579C633.754 91.6579 638.396 88.5638 632.517 81.1379C626.638 73.712 611.167 71.8555 604.36 49.2684C604.36 49.2684 606.624 41.4478 604.36 34.726C605.598 28.5377 604.605 23.3257 602.813 15.5424L598.172 6.87882H595.077L594.149 4.40352L573.728 3.47528L570.324 4.40352V9.35412H568.777C570.467 14.6104 570.391 17.8142 568.777 23.8965H570.324V28.5377C567.551 35.4166 565.458 39.0501 561.042 45.246C569.396 56.8173 571.599 65.1535 575.275 80.2097V95.9897L572.799 94.4427H569.086L558.566 103.725L559.804 111.46L550.522 120.124V127.24L546.809 130.025L551.14 134.357V138.998Z" fill="#F9F9F9" stroke="#676767"/>
                                <path class="northgate-svg" d="M622.615 96.9187L633.754 91.6587L636.539 92.2775C642.108 93.5152 658.903 107.553 668.099 117.959C661.968 126.089 659.605 130.827 657.27 139.618V149.828L659.436 163.442C661.633 168.514 662.415 171.432 659.436 177.366L649.534 184.792C644.213 202.279 638.974 210.315 626.947 222.54C622.14 224.078 618.982 224.623 610.239 223.469C607.791 226.298 605.342 228.181 598.79 232.132C592.956 231.612 590.18 231.194 586.104 230.276C579.78 228.208 577.266 226.047 574.346 220.684C570.183 225.934 567.285 227.433 560.732 226.563C558.246 230.758 556.274 233.309 550.521 238.63C548.063 237.414 547.359 235.945 547.118 232.132L545.261 221.921L543.714 220.684V189.124H556.4V191.908H565.992C565.057 185.837 565.411 182.385 567.849 176.128L574.346 177.366C581.154 179.045 583.835 180.545 586.723 184.173C587.821 181.122 589.143 180.139 592.911 179.841C594.149 178.294 593.53 174.581 593.53 174.581L597.243 173.034C598.656 168.607 599.241 166.159 597.862 162.205L602.194 161.586C605.017 158.904 607.066 157.668 606.835 153.232L612.405 156.635C618.08 152.214 620.211 149.628 622.615 144.878C621.608 142.618 620.018 141.478 615.808 139.618L618.593 137.142C622.4 140.389 624.621 141.839 629.422 140.855C632.103 137.139 631.489 135.231 629.732 131.882C628.316 130.443 627.17 129.97 623.853 130.335L628.494 123.528C632.019 128.733 633.908 129.535 637.158 128.169L639.633 125.385C640.593 123.079 640.217 121.946 638.395 120.125C638.759 117.505 638.61 116.137 635.301 114.555L632.517 116.412H626.947L627.875 106.201L622.615 96.9187Z" fill="#F9F9F9" stroke="#676767"/>
                                <path class="chermside-svg" d="M515.249 255.793V249.605H508.751V248.676C505.403 248.351 503.029 248.38 498.231 248.676V246.82H496.684V241.869L498.231 239.394L502.098 238.156C504.795 236.726 506.04 235.336 507.513 231.204C513.063 204.67 515.597 188.682 519.89 159.729L522.984 158.801L522.674 150.137H529.172V152.303L567.849 158.491C567.849 158.491 589.06 178.875 592.494 179.878C592.63 179.864 592.769 179.852 592.912 179.841C592.842 179.928 592.7 179.938 592.494 179.878C589.043 180.216 587.78 181.237 586.723 184.173C583.836 180.544 581.154 179.044 574.347 177.366L567.849 176.128C565.412 182.385 565.058 185.837 565.993 191.908H556.401V189.123H543.715V220.684L545.262 221.921L547.118 232.132C547.359 235.945 548.063 237.414 550.522 238.63V245.746L546.19 258.123L522.984 257.504L522.056 256.266L515.249 255.793Z" fill="#F9F9F9" stroke="#676767"/>
                                <path class="hamilton-svg" d="M657.27 139.618C659.605 130.827 661.968 126.089 668.099 117.959L673.359 120.434L679.238 121.672C684.951 123.633 687.382 125.315 689.449 130.026H703.682L707.395 128.788L719.462 128.17C727.735 131.862 732.023 134.465 737.099 143.021C738.852 145.564 739.093 147.055 738.337 149.829L737.099 151.376C738.91 154.568 739.421 156.458 739.265 160.039V163.443L738.337 168.393C742.591 170.747 743.241 171.587 744.216 173.034C739.287 183.06 726.317 190.212 712.965 201.5V211.092H718.225C719.344 206.425 725.651 199.025 725.651 199.025C725.651 199.025 728.893 201.151 728.126 204.285L722.866 211.092V215.733C722.866 215.733 720.22 217.29 720.391 218.828C720.542 220.186 722.866 220.065 722.866 221.303C722.866 222.541 721.037 231.598 715.44 237.083L708.633 246.984C697.238 254.58 690.683 258.352 678.31 263.074C674.967 269.008 672.68 272.507 666.862 279.472C658.526 284.852 653.082 287.454 641.18 290.921C634.413 292.66 630.62 292.498 623.853 290.921C612.373 288.83 606.39 286.698 596.315 281.638C590.095 282.282 586.112 281.927 577.75 279.472L567.23 287.208V294.015L571.078 302.06L567.23 305.773L557.948 295.562L546.19 294.015L540.93 293.396C540.93 281.638 542.574 271.779 546.19 258.123L550.522 245.746V238.63C556.274 233.309 558.246 230.758 560.732 226.563C567.285 227.433 570.183 225.934 574.347 220.684C577.266 226.047 579.78 228.208 586.104 230.276C590.18 231.194 592.956 231.612 598.79 232.132C605.342 228.181 607.791 226.299 610.239 223.469C618.982 224.623 622.14 224.078 626.947 222.541C638.975 210.315 644.213 202.28 649.534 184.792L659.436 177.366C662.415 171.432 661.633 168.514 659.436 163.443L657.27 149.829V139.618Z" fill="#F9F9F9" stroke="#676767"/>
                                <path class="central-svg" d="M507.513 288.445L507.822 276.832L511.845 276.214L514.01 274.048L515.248 272.501L514.01 268.788H511.845V261.98H514.01V255.792H515.248L522.055 256.266L522.983 257.503L546.19 258.122C542.574 271.778 540.93 281.638 540.93 293.395L546.19 294.014L557.947 295.561L567.23 305.772L571.252 302.368L575.894 311.96L575.275 320.624L579.606 329.597V334.857C576.259 338.989 573.784 340.933 568.468 343.83L563.517 343.211C561.743 342.249 560.893 340.849 559.494 337.642C555.94 332.727 555.99 329.713 556.091 324.337C551.71 320.361 549.275 320.588 544.952 323.409C544.783 339.397 546.63 351.334 542.477 350.328C536.421 348.97 531.213 340.361 522.983 329.597L520.199 328.05C519.509 326.076 518.126 320.644 515.248 309.176C514.329 305.718 513.964 303.597 514.01 298.965C510.159 295.731 508.814 293.375 507.513 288.445Z" fill="#F9F9F9" stroke="#676767"/>
                                <path class="toowong-svg" d="M504.109 288.444H507.513C508.814 293.375 510.159 295.731 514.011 298.965C513.964 303.596 514.329 305.718 515.248 309.175C518.126 320.644 519.51 326.075 520.199 328.05C500.615 340.046 492.874 348.595 485.854 367.655L478.737 370.44C472.226 369.333 466.98 364.87 459.244 365.798C451.509 366.727 450.89 360.538 446.868 362.704C442.845 364.87 439.442 365.798 436.966 367.655C434.491 369.511 434.491 373.534 434.491 373.534C434.491 373.534 429.385 375.274 427.065 373.534C424.331 371.483 426.867 368.142 425.827 364.87C425.61 361.439 425.63 359.941 425.827 357.753L423.971 355.897V349.09H419.948L410.975 345.067L404.787 339.498V335.166L406.025 331.144V324.027L410.975 320.933L412.213 316.292C416.235 316.292 416.854 316.292 419.948 315.364L423.971 317.839H431.087L431.706 313.198C434.587 313.706 436.148 313.722 438.823 313.198V316.292L440.37 321.552L443.773 325.265L446.868 324.955L447.796 322.48C450.372 323.382 451.616 323.438 453.365 322.48L454.603 318.458L456.15 315.364H459.244L463.267 319.695L466.98 318.767C472.425 317.305 474.593 315.486 476.571 310.104L478.737 308.866L479.047 306.391C482.808 307.344 484.981 307.296 488.948 306.391L489.257 307.319L490.805 307.938V310.722L499.468 310.104V306.7L501.325 305.462V302.678H499.159C499.159 302.678 497.612 301.175 497.612 299.583C497.612 297.992 496.993 292.157 496.993 292.157H499.468L500.706 290.61L504.109 290.301V288.444Z" fill="#F9F9F9" stroke="#676767"/>
                                <path class="lucia-svg" d="M414.379 366.417L425.827 364.87C426.867 368.142 424.331 371.483 427.065 373.533C429.385 375.273 434.491 373.533 434.491 373.533C434.491 373.533 434.491 369.511 436.966 367.654C439.442 365.798 442.845 364.87 446.867 362.704C450.89 360.538 451.509 366.726 459.244 365.798C466.979 364.87 472.226 369.332 478.737 370.439L485.854 367.654L494.517 372.914C502.127 373.282 506.861 373.078 516.486 371.677L522.984 376.627C531.305 386.839 529.248 388.61 522.984 390.242C508.268 390.277 504.361 391.298 501.015 393.955C495.602 398.198 493.901 400.569 493.589 404.784C492.253 406.692 492.133 408.939 492.352 413.757L496.374 416.233C501.348 416.495 504.264 417.316 508.751 414.995C512.273 416.333 511.544 417.542 510.607 419.636C508.977 420.364 510.298 423.658 506.275 424.277C502.253 424.896 493.698 424.42 489.876 422.73C483.004 419.695 480.176 416.808 476.262 410.354C474.035 405.053 471.642 402.834 465.432 400.143C459.864 397.976 456.903 397.526 451.818 397.668C449.222 398.485 447.588 399.229 443.773 401.999C443.071 410.53 441.607 410.354 441.607 414.995C441.607 419.636 445.659 426.148 449.962 429.847C449.962 429.847 447.617 445.07 449.343 447.174C449.055 450.262 455.841 458.622 455.841 458.622C455.841 458.622 448.287 462.037 443.773 460.479C438.517 446.445 429.85 437.582 416.235 430.466L415.307 419.636H419.33L427.374 418.089L426.446 414.995L418.401 413.757V410.354L421.495 409.425L422.114 404.784H419.33V400.762H407.572L402.621 393.955V385.6L410.047 381.578V374.461H414.379V366.417Z" fill="#F9F9F9" stroke="#676767"/>
                                <path class="wynnum-svg" d="M735.861 216.661C723.794 238.629 719.683 250.494 697.185 263.073V270.189H699.66C706.011 280.818 709.9 285.305 717.915 288.445C715.45 300.918 716.129 306.71 715.44 318.148L719.153 319.695L719.772 325.883C733.816 326.369 745.091 328.91 761.852 333.309C757.057 338.521 750.733 342.729 753.189 345.377L757.83 347.233C762.944 348.619 764.768 345.704 768.35 341.664L773.92 343.211C779.601 343.627 781.674 342.643 783.821 339.188C790.558 343.501 791.589 344.471 791.866 345.377C792.996 343.838 793.876 342.833 798.673 339.188V335.166C800.041 331.432 802.733 330.153 816 331.453V327.74C810.821 321.594 808.275 317.504 800.529 315.982L804.861 313.198C804.221 310.688 803.185 309.269 799.292 306.7L798.673 299.583L794.96 302.368C792.059 304.537 793.02 308.618 793.413 314.435L788.153 316.911C788.928 312.762 788.267 310.518 784.749 306.7C787.298 304.513 788.803 303.17 791.866 300.202C793.947 296.284 796.14 294.603 801.767 292.467C802.728 289.12 802.436 287.987 800.529 287.207L793.413 289.992C788.138 291.813 785.673 291.521 781.655 289.992C779.79 288.912 778.546 288.028 772.682 281.328C770.042 278.293 771.515 277.013 772.682 274.521C772.909 272.098 774.65 270.613 780.727 267.714C780.884 264.488 780.498 262.642 776.085 259.05L774.229 252.243V232.441H776.085L777.633 252.862L781.655 256.575C787.887 256.803 789.715 254.245 793.413 250.387L795.888 256.575H799.292V250.387C796.24 246.02 793.951 243.367 787.224 237.701C788.134 235.427 787.989 233.005 787.224 227.8C785.787 222.329 782.722 219.1 776.085 213.257C771.351 213.081 768.932 213.167 766.494 214.804L764.018 211.401C757.146 211.213 753.839 212.394 748.857 216.661C743.782 215.328 740.937 215.057 735.861 216.661Z" fill="#F9F9F9" stroke="#676767"/>
                                <path class="wynnum-svg" d="M740.193 204.284L738.956 210.163L747.619 204.284L751.332 211.091L755.664 201.19C763.21 206.933 767.825 208.919 776.704 210.163C790.524 222.56 793.404 228.611 794.341 238.629C796.421 241.384 797.72 241.827 800.22 241.104C802.454 238.676 803.329 237.067 803.623 233.369L801.148 229.966V224.396L799.292 222.23C801.054 216.431 801.267 213.178 799.292 207.378L795.888 202.737L795.269 197.477L791.866 195.002C796.84 193.026 798.574 191.479 801.148 188.504C801.885 185.845 801.54 185.043 799.292 185.101L791.866 188.504C793.999 185.808 794.822 184.202 795.269 181.078L795.888 176.437C794.811 171.56 794.493 168.875 786.606 162.823C789.742 160.806 790.822 159.198 791.866 155.706C786.8 150.188 783.202 147.711 774.848 144.877C771.614 143.692 769.782 144.927 766.494 149.518V156.325C760.426 162.348 757.583 165.897 754.117 172.724V176.437C748.494 180.78 745.827 183.632 742.978 190.361V201.19L740.193 204.284Z" fill="#F9F9F9" stroke="#676767"/>
                                <path class="lytton-svg" d="M791.866 345.377C792.996 343.838 793.876 342.833 798.673 339.188C800.831 340.828 801.867 341.734 801.767 343.211C803.225 346.715 802.876 348.68 801.767 352.184C803.308 354.914 800.977 355.299 797.435 356.206L791.866 371.677C794.18 373.06 794.347 373.779 794.641 375.039L794.651 375.08C795.404 378.034 792.58 378.887 784.749 379.721L783.821 389.623C780.758 390.747 778.066 390.285 771.754 387.766L769.897 392.717C765.758 393.577 762.877 386.483 757.83 375.08C739.722 374.473 730.268 375.043 705.539 365.798C703.792 370.854 697.494 376.627 695.638 376.318C693.781 376.008 691.925 372.605 691.925 372.605L687.902 375.08C681.569 378.544 673.851 377.399 653.867 370.748C654.426 376.876 654.14 380.328 652.01 386.528C651.248 382.743 649.188 380.861 643.037 377.865C639.04 379.747 636.308 379.697 630.66 377.865L626.638 374.152L630.66 365.798C628.605 361.556 628.943 359.011 630.66 354.35L625.71 353.112C624.832 347.972 625.048 345.137 626.638 340.117H632.207C631.269 327.333 633.162 299.891 634.373 299.893L649.535 295.871C671.453 285.875 686.481 263.594 697.185 263.073V270.189H699.66C706.011 280.818 709.9 285.305 717.916 288.445C715.451 300.918 716.129 306.71 715.44 318.148L719.153 319.695L719.772 325.884C733.816 326.37 745.091 328.91 761.853 333.309C757.057 338.521 750.733 342.729 753.189 345.377L757.83 347.233C762.944 348.619 764.768 345.704 768.35 341.664L773.92 343.211C779.601 343.627 781.675 342.643 783.821 339.188C790.558 343.501 791.589 344.471 791.866 345.377Z" fill="#F9F9F9" stroke="#676767"/>
                                <path class="morningside-svg" d="M630.66 365.798L626.638 374.153L613.642 372.915L604.051 370.44C599.633 370.02 597.829 370.384 595.696 371.987C596.525 369.191 596.228 366.093 595.703 360.607L595.696 360.538C592.237 362.653 589.831 361.97 585.486 360.538V353.112C584.112 348.493 581.649 346.435 576.822 342.902C579.789 339.046 581.668 337.754 585.486 337.332C585.697 331.487 585.554 328.53 582.391 326.812L579.297 310.413C577.082 301.236 575.073 290.61 576.822 286.588C578.571 282.566 607.454 296.489 634.373 299.893C634.373 299.893 631.269 327.333 632.207 340.117H626.638C625.048 345.137 624.832 347.973 625.71 353.112L630.66 354.35C628.943 359.011 628.604 361.556 630.66 365.798Z" fill="#F9F9F9" stroke="#676767"/>
                                <path class="gabba-svg" d="M585.486 353.112C584.112 348.493 581.649 346.435 576.822 342.901C572.878 343.689 570.705 344.829 566.921 348.471C562.17 344.804 559.807 343.445 556.401 342.901C556.401 342.901 555.641 323.872 551.141 324.027C546.64 324.182 549.499 353.139 544.024 354.04C541.386 353.194 539.863 353.234 537.217 354.04C528.834 340.526 525.915 336.979 521.746 333C506.691 341.584 499.785 348.149 490.495 363.323C490.527 367.377 491.297 368.139 493.28 368.273H520.508C523.571 373.333 525.649 376.107 531.647 380.65C531.225 383.43 531.244 384.987 531.647 387.767H537.217L539.073 384.363L544.024 388.695L555.472 389.933L557.948 381.888L575.894 384.363L595.696 371.986C596.525 369.19 596.228 366.093 595.703 360.606L595.696 360.538C592.237 362.653 589.831 361.97 585.486 360.538V353.112Z" fill="#F9F9F9" stroke="#676767"/>
                                <path class="chandler-svg" d="M771.754 387.766C778.066 390.285 783.821 389.623 783.821 389.623C795.888 400.452 808.531 404.963 807.646 409.734C805.158 412.841 803.113 413.914 798.054 414.376L794.65 412.519C796.644 414.573 796.401 415.725 794.65 417.779H786.296C783.929 421.28 782.661 422.439 780.417 424.277L783.821 434.487L780.417 437.582L774.229 438.51C771.299 443.088 768.483 445.136 761.233 447.792C764.681 452.76 765.905 455.697 765.875 461.406C768.61 459.868 769.849 460.037 771.754 461.406L777.323 456.456C778.651 462.427 778.937 465.383 777.323 468.832L778.87 473.783L786.296 475.33C788.517 476.128 789.782 477.82 792.175 489.563C792.302 493.314 788.486 492.379 782.583 491.419L776.085 494.823C776.474 497.832 776.228 499.523 774.229 502.558L775.467 510.294C775.467 510.294 775.776 511.841 777.323 514.316C778.87 516.791 776.955 517.787 769.897 522.051L772.682 526.074L769.897 530.405L768.969 535.975L762.471 541.854L761.852 547.423L764.637 548.351V553.611L761.852 557.943L762.471 561.037C767.888 560.236 769.827 561.978 771.754 568.154C771.979 570.106 771.761 570.879 768.969 570.01C767.145 572.087 771.444 577.746 763.709 570.01C755.973 562.275 746.072 557.015 738.027 545.876H732.148L731.53 543.401C725.125 544.129 721.535 544.409 715.131 543.401L709.561 540.307C704.097 540.644 701.131 540.948 693.781 539.069V537.212C689.312 539.203 687.709 538.965 685.736 537.212C687.451 543.122 687.186 546.159 684.808 551.136C677.954 552.37 674.152 551.977 667.481 548.351C664.422 539.998 661.775 534.966 654.795 525.145C658.37 519.458 660.341 516.249 663.458 510.294L661.292 498.226L661.372 498.059C666.292 487.768 669.075 481.947 677.691 471.926V455.218L681.714 453.362V449.03L642.109 444.079L626.328 423.658L624.162 414.685L613.642 408.806L617.046 403.546L611.167 391.17L613.642 372.605L626.638 374.152L630.66 377.865C636.308 379.696 639.04 379.747 643.037 377.865C649.188 380.861 651.248 382.743 652.01 386.528C654.14 380.327 654.425 376.876 653.866 370.748C673.85 377.399 681.569 378.544 687.902 375.08L691.924 372.605C691.924 372.605 693.781 376.008 695.637 376.318C697.494 376.627 703.792 370.854 705.539 365.798C730.268 375.043 739.722 374.472 757.83 375.08C762.877 386.483 765.758 393.577 769.897 392.717L771.754 387.766Z" fill="#F9F9F9" stroke="#676767"/>
                                <path class="wishart-svg" d="M661.292 498.227L663.458 510.294C662.275 512.554 661.258 514.419 660.255 516.173H647.987C618.948 502.345 606.803 488.262 589.508 456.456C589.478 455.278 589.576 454.614 591.983 453.362C594.985 455.169 596.852 455.426 600.647 453.981L601.266 456.456C604.287 457.301 605.98 457.263 609.001 456.456C613.049 455.298 614.441 453.396 615.808 448.411C610.337 444.175 609.07 441.806 607.454 437.582C613.724 430.744 617.969 427.839 626.328 423.658L642.109 444.079L681.714 449.03V453.362L677.691 455.218V471.927C669.075 481.947 666.292 487.768 661.372 498.059L661.292 498.227Z" fill="#F9F9F9" stroke="#676767"/>
                                <path class="holland-svg" d="M604.051 370.439C599.633 370.019 597.829 370.384 595.696 371.986L575.894 384.363L557.948 381.887L555.472 389.932C555.029 399.527 555.63 403.348 557.948 407.878C569.969 414.375 575.608 417.914 579.607 423.658C586.204 436.882 587.049 442.001 585.176 448.412L589.508 456.456C589.479 455.279 589.576 454.615 591.983 453.362C594.985 455.17 596.852 455.426 600.647 453.981L601.266 456.456C604.287 457.301 605.98 457.263 609.001 456.456C613.049 455.299 614.441 453.396 615.808 448.412C610.337 444.176 609.07 441.806 607.454 437.582C613.724 430.745 617.969 427.84 626.328 423.658L624.163 414.685L613.642 408.806L617.046 403.546L611.167 391.17L613.603 372.904L604.051 370.439Z" fill="#F9F9F9" stroke="#676767"/>
                                <path class="macgregor-svg" d="M660.254 516.173H647.987C625.442 505.437 613.08 494.547 600.585 475.33L598.79 492.348C590.436 491.11 585.58 487.814 574.656 487.706C570.65 502.321 570.405 507.398 570.943 514.935C569.558 515.392 568.732 515.942 566.92 518.957L568.467 520.504C569.808 522.515 568.467 526.693 568.467 526.693C597.263 540.197 615.196 564.362 640.252 570.63L642.727 577.746C643.73 581.936 643.79 584.488 642.727 589.504C643.837 591.732 644.683 591.574 646.131 591.67H653.557C655.676 572.634 656.538 557.834 659.436 548.661C662.488 548.452 664.325 548.458 667.79 548.661C664.316 539.348 661.284 534.215 654.794 525.146L660.254 516.173Z" fill="#F9F9F9" stroke="#676767"/>
                                <path class="calamvale-svg" d="M640.252 570.629C615.196 564.361 597.263 540.197 568.468 526.693L557.947 517.41L555.472 530.405V534.428L566.921 536.284V544.948C561.437 546.099 559.742 547.964 557.947 552.374L557.019 557.943C561.155 566.497 562.747 568.296 565.373 570.629C567.322 574.614 569.469 576.33 575.275 578.364L574.656 591.36C573.209 595.806 571.747 598.858 566.921 606.212C569.488 610.706 570.109 613.397 567.849 618.898C564.719 633.864 562.768 637.694 559.185 642.104L559.129 642.393C558.11 647.683 557.521 650.738 559.185 653.861L587.961 657.574C594.84 653.586 598.238 652.115 599.719 647.364C600.76 650.481 601.709 651.08 603.741 651.077L609.929 647.364L613.642 649.839L622.925 647.364C633.919 641.526 638.279 639.818 642.727 639.319L645.821 631.893C645.974 628.537 645.708 626.991 642.727 626.633V619.516L646.75 615.185L644.584 610.543L646.75 604.974V598.167C645.685 596.49 644.777 595.782 641.18 596.001L642.727 589.503C643.79 584.487 643.73 581.936 642.727 577.746L640.252 570.629Z" fill="#F9F9F9" stroke="#676767"/>
                                <path class="parkinson-svg" d="M559.13 642.394C558.11 647.684 557.521 650.739 559.185 653.862L556.71 657.266L554.854 665.001L548.975 662.526L521.127 658.194H510.298C495.944 656.365 488.024 653.502 474.096 645.508L462.648 640.248C455.539 634.454 453.976 630.732 452.437 623.849C447.237 620.952 441.722 619.788 425.208 618.898C425.557 602.292 426.436 592.894 432.325 575.58C439.678 577.428 443.813 576.091 451.199 571.558V577.436C454.841 575.524 457.087 575.199 462.029 578.055C464.734 573.175 467.628 571.374 476.881 570.939C478.962 567.577 480.229 565.792 477.809 557.943L474.096 554.54C481.28 551.667 484.607 549.141 489.876 547.114C495.971 549.943 499.637 550.688 506.585 550.208C509.927 555.797 513.082 557.943 518.033 556.396C521.424 556.006 521.402 553.278 523.603 551.755C529.075 557.101 532.214 557.163 537.836 556.396C546.01 558.627 550.078 558.651 557.019 557.943C561.155 566.497 562.747 568.296 565.374 570.629C567.322 574.615 569.469 576.33 575.275 578.365L574.656 591.36C573.209 595.806 571.747 598.859 566.921 606.212C569.489 610.706 570.11 613.397 567.849 618.898C564.719 633.865 562.768 637.695 559.185 642.104L559.13 642.394Z" fill="#F9F9F9" stroke="#676767"/>
                                <path class="richlands-svg" d="M432.325 575.58C426.436 592.893 425.557 602.291 425.209 618.897L415.617 615.803C409.591 611.952 404.478 608.068 404.478 603.427C404.478 598.786 401.677 592.005 392.411 581.458C386.084 583.098 381.614 578.325 373.766 569.946L373.536 569.701H359.613C359.613 569.701 357.447 572.795 352.187 567.225C352.187 567.225 349.86 569.997 346.308 569.701L342.904 565.988L350.949 562.584L352.187 553.611C346.659 541.154 338.882 537.831 333.312 523.598C332.408 518.161 335.673 513.247 346.617 501.939C354.308 500.51 358.728 500.094 366.729 499.773C370.275 502.234 372.253 503.446 375.702 504.415L378.177 501.939C375.243 501.683 374.256 500.838 373.536 498.226C375.349 493.345 376.365 493.877 378.177 493.585C382.085 493.253 383.409 493.786 385.294 495.132C394.17 493.09 396.196 491.846 397.98 489.563C423.809 487.722 435.23 485.802 446.249 479.662C450.193 477.697 451.818 477.496 454.912 478.115C456.46 475.639 457.243 475.103 464.504 470.379C470.121 473.874 473.723 473.008 479.975 472.545L484.926 474.092V476.258L474.096 478.115C475.153 480.893 475.104 482.453 474.096 485.231L470.693 487.706L470.701 487.725C472.796 492.463 473.974 495.125 480.594 497.608V502.558L476.881 504.105L476.262 506.271C484.577 510.815 489.152 513.295 492.971 514.316V518.029L489.876 519.267V525.764H496.065C498.118 531.111 500.332 531.13 504.11 531.643C507.796 531.2 509.407 531.254 511.845 531.643V535.047H516.796C519.143 538.028 519.198 539.481 518.033 541.854L510.917 542.782V550.208H506.585C499.637 550.688 495.971 549.943 489.876 547.114C484.607 549.14 481.28 551.667 474.096 554.54L477.809 557.943C480.229 565.792 478.962 567.576 476.881 570.938C467.628 571.374 464.734 573.174 462.029 578.055C457.087 575.198 454.841 575.524 451.199 577.436V571.557C443.813 576.091 439.678 577.428 432.325 575.58Z" fill="#F9F9F9" stroke="#676767"/>
                                <path class="moorooka-svg" d="M585.176 448.411L589.508 456.456L600.585 475.33L598.79 492.348C590.436 491.11 585.58 487.814 574.656 487.706C570.65 502.321 570.405 507.398 570.943 514.935C569.557 515.392 568.732 515.941 566.92 518.957L568.467 520.504C569.808 522.515 568.467 526.692 568.467 526.692L557.947 517.41L555.472 530.405V534.428L566.92 536.284V544.948C561.437 546.099 559.742 547.964 557.947 552.374L557.019 557.943C550.078 558.65 546.01 558.627 537.835 556.396C532.214 557.163 529.074 557.101 523.602 551.755C521.402 553.278 521.424 556.006 518.033 556.396C513.082 557.943 509.926 555.797 506.584 550.208H510.916V542.782L518.033 541.854C519.197 539.481 519.143 538.028 516.795 535.047H511.845V531.643C509.407 531.254 507.796 531.2 504.109 531.643C500.331 531.131 498.118 531.111 496.064 525.764H489.876V519.267L492.97 518.029V514.316C489.152 513.295 484.577 510.815 476.262 506.271L476.881 504.105L480.594 502.558V497.608C491.323 493.172 497.835 489.911 510.297 482.756L511.845 468.832C512.247 463.242 512.954 460.612 516.795 458.622C512.615 453.665 511.746 450.61 514.32 444.389L521.436 437.582C521.002 435.668 520.703 433.328 522.365 431.703C524.651 429.465 527.006 434.797 530.409 433.25C533.813 431.703 529.406 429.371 533.813 427.062C538.22 424.752 540.442 424.83 544.024 427.062C544.024 427.062 545.257 430.46 547.118 430.775C549.315 431.146 550.958 429.235 551.45 427.062C551.999 424.635 548.13 423.97 548.355 421.492C548.662 418.121 553.484 419.282 555.472 416.542C557.538 413.693 557.947 407.878 557.947 407.878C569.969 414.375 575.608 417.914 579.606 423.658C586.204 436.881 587.049 442 585.176 448.411Z" fill="#F9F9F9" stroke="#676767"/>
                                <path class="jamboree-svg" d="M366.729 499.774C358.727 500.094 354.307 500.511 346.617 501.94C345.939 499.333 344.455 497.636 337.025 493.586L342.594 489.563L349.711 487.088L354.662 480.9C354.063 475.702 352.181 473.062 347.854 468.523C348.383 465.581 349.322 464.373 353.424 463.882C366.659 461.701 372.702 461.526 382.818 461.716C385.946 454.297 386.934 449.109 387.46 438.2C400.024 436.565 406.652 436.216 417.473 436.963C422.112 441.697 424.055 444.363 432.325 449.03C434.521 457.171 435.931 458.95 438.513 461.097L444.392 466.048L454.912 463.882L459.244 461.097V454.599L455.84 450.268C459.476 448.5 461.303 448.994 464.504 450.268C466.526 458.571 466.239 462.911 464.504 470.38C457.242 475.103 456.459 475.64 454.912 478.115C451.818 477.496 450.193 477.697 446.248 479.662C435.23 485.802 423.808 487.722 397.98 489.563C396.195 491.846 394.17 493.091 385.294 495.133C383.409 493.787 382.085 493.253 378.177 493.586C376.365 493.877 375.348 493.346 373.536 498.227C374.256 500.839 375.243 501.683 378.177 501.94L375.702 504.415C372.252 503.447 370.275 502.235 366.729 499.774Z" fill="#F9F9F9" stroke="#676767"/>
                                <path class="tennyson-svg" d="M537.217 387.766H531.647L526.078 395.502H511.845L504.11 396.43C498.452 401.967 496.668 405.028 497.612 410.353C502.534 412.669 504.956 412.865 509.06 412.519L516.796 419.636C514.013 424.04 511.9 425.994 507.204 428.609C501.317 430.393 497.829 430.551 491.114 428.609C483.528 426.713 480.881 423.989 476.572 418.708C473.441 412.593 470.243 409.352 462.338 403.856C453.568 402.411 449.88 402.798 447.177 407.259C445.695 416.295 449.962 422.421 454.294 428.609C458.625 434.797 453.365 446.246 453.365 446.246L455.841 450.268C459.477 448.5 461.303 448.995 464.504 450.268C466.526 458.572 466.239 462.911 464.504 470.38C470.121 473.874 473.723 473.009 479.975 472.546L484.926 474.093V476.259L474.096 478.115C475.153 480.894 475.104 482.454 474.096 485.232L470.693 487.707L470.701 487.725C472.796 492.464 473.974 495.126 480.594 497.609C491.323 493.173 497.835 489.911 510.298 482.757L511.845 468.833C512.247 463.242 512.955 460.613 516.796 458.622C512.615 453.665 511.747 450.611 514.32 444.389L521.437 437.582C521.003 435.668 520.704 433.329 522.365 431.703C524.652 429.466 527.006 434.797 530.41 433.25C533.813 431.703 529.407 429.371 533.813 427.062C538.22 424.753 540.443 424.83 544.024 427.062C544.024 427.062 545.257 430.46 547.118 430.775C549.315 431.146 550.958 429.235 551.45 427.062C551.999 424.635 548.131 423.97 548.356 421.492C548.663 418.121 553.485 419.282 555.472 416.542C557.538 413.693 557.948 407.878 557.948 407.878C555.63 403.348 555.029 399.527 555.472 389.932L544.024 388.694L539.073 384.363L537.217 387.766Z" fill="#F9F9F9" stroke="#676767"/>




                                <path class="pullenvale-svg text" d="M196.433 377.522C196.433 378.492 196.116 379.234 195.481 379.75C194.846 380.267 193.943 380.525 192.771 380.525H191.806V383.997H190.289V374.717H192.961C194.12 374.717 194.988 374.954 195.563 375.428C196.143 375.902 196.433 376.6 196.433 377.522ZM191.806 379.249H192.612C193.39 379.249 193.962 379.114 194.326 378.843C194.69 378.572 194.872 378.149 194.872 377.573C194.872 377.04 194.709 376.642 194.383 376.38C194.057 376.118 193.549 375.986 192.859 375.986H191.806V379.249ZM203.079 383.997L202.87 383.077H202.793C202.586 383.403 202.29 383.659 201.905 383.845C201.524 384.031 201.088 384.124 200.597 384.124C199.747 384.124 199.112 383.912 198.693 383.489C198.274 383.066 198.064 382.425 198.064 381.566V376.977H199.569V381.306C199.569 381.843 199.679 382.247 199.899 382.518C200.119 382.785 200.464 382.918 200.934 382.918C201.56 382.918 202.019 382.732 202.311 382.359C202.607 381.983 202.755 381.354 202.755 380.474V376.977H204.253V383.997H203.079ZM207.872 383.997H206.38V374.12H207.872V383.997ZM211.502 383.997H210.011V374.12H211.502V383.997ZM216.708 384.124C215.616 384.124 214.761 383.807 214.143 383.172C213.529 382.533 213.223 381.655 213.223 380.538C213.223 379.391 213.508 378.489 214.08 377.833C214.651 377.178 215.436 376.85 216.435 376.85C217.361 376.85 218.093 377.131 218.631 377.694C219.168 378.257 219.437 379.031 219.437 380.017V380.823H214.759C214.78 381.505 214.964 382.029 215.311 382.397C215.658 382.761 216.147 382.943 216.777 382.943C217.192 382.943 217.577 382.905 217.933 382.829C218.292 382.749 218.677 382.618 219.088 382.436V383.648C218.724 383.821 218.356 383.944 217.983 384.016C217.611 384.088 217.186 384.124 216.708 384.124ZM216.435 377.979C215.961 377.979 215.58 378.13 215.292 378.43C215.008 378.731 214.839 379.169 214.784 379.744H217.971C217.962 379.164 217.823 378.726 217.552 378.43C217.281 378.13 216.909 377.979 216.435 377.979ZM227.308 383.997H225.81V379.681C225.81 379.139 225.7 378.735 225.48 378.468C225.264 378.202 224.919 378.068 224.445 378.068C223.815 378.068 223.354 378.255 223.062 378.627C222.77 378.999 222.624 379.624 222.624 380.5V383.997H221.132V376.977H222.3L222.509 377.897H222.585C222.797 377.563 223.097 377.305 223.487 377.123C223.876 376.941 224.308 376.85 224.782 376.85C226.466 376.85 227.308 377.707 227.308 379.42V383.997ZM230.983 383.997L228.317 376.977H229.892L231.32 381.058C231.565 381.744 231.713 382.298 231.764 382.721H231.815C231.853 382.417 232.001 381.862 232.259 381.058L233.688 376.977H235.274L232.596 383.997H230.983ZM240.733 383.997L240.435 383.02H240.384C240.046 383.447 239.705 383.739 239.362 383.896C239.02 384.048 238.579 384.124 238.042 384.124C237.352 384.124 236.813 383.938 236.423 383.565C236.038 383.193 235.846 382.666 235.846 381.985C235.846 381.261 236.114 380.715 236.652 380.347C237.189 379.979 238.008 379.778 239.108 379.744L240.321 379.706V379.332C240.321 378.883 240.215 378.549 240.003 378.329C239.796 378.104 239.472 377.992 239.032 377.992C238.673 377.992 238.328 378.045 237.998 378.151C237.667 378.257 237.35 378.382 237.045 378.525L236.563 377.459C236.944 377.26 237.361 377.11 237.813 377.008C238.266 376.903 238.694 376.85 239.096 376.85C239.989 376.85 240.661 377.044 241.114 377.434C241.571 377.823 241.8 378.434 241.8 379.268V383.997H240.733ZM238.512 382.981C239.053 382.981 239.487 382.831 239.813 382.531C240.143 382.226 240.308 381.801 240.308 381.255V380.646L239.407 380.684C238.704 380.709 238.192 380.827 237.871 381.039C237.553 381.246 237.395 381.566 237.395 381.998C237.395 382.311 237.488 382.554 237.674 382.728C237.86 382.897 238.139 382.981 238.512 382.981ZM245.374 383.997H243.882V374.12H245.374V383.997ZM250.579 384.124C249.487 384.124 248.632 383.807 248.014 383.172C247.401 382.533 247.094 381.655 247.094 380.538C247.094 379.391 247.379 378.489 247.951 377.833C248.522 377.178 249.307 376.85 250.306 376.85C251.232 376.85 251.965 377.131 252.502 377.694C253.039 378.257 253.308 379.031 253.308 380.017V380.823H248.63C248.651 381.505 248.835 382.029 249.182 382.397C249.529 382.761 250.018 382.943 250.648 382.943C251.063 382.943 251.448 382.905 251.804 382.829C252.163 382.749 252.549 382.618 252.959 382.436V383.648C252.595 383.821 252.227 383.944 251.854 384.016C251.482 384.088 251.057 384.124 250.579 384.124ZM250.306 377.979C249.832 377.979 249.451 378.13 249.163 378.43C248.88 378.731 248.71 379.169 248.655 379.744H251.842C251.833 379.164 251.694 378.726 251.423 378.43C251.152 378.13 250.78 377.979 250.306 377.979Z" fill="#262626"/>
                                <path class="gap-svg text" d="M348.646 299.998H347.129V292.019H344.4V290.717H351.376V292.019H348.646V299.998ZM358.822 299.998H357.324V295.681C357.324 295.14 357.214 294.735 356.994 294.469C356.778 294.202 356.433 294.069 355.959 294.069C355.333 294.069 354.871 294.257 354.575 294.634C354.283 295.006 354.137 295.633 354.137 296.513V299.998H352.646V290.121H354.137V292.628C354.137 293.03 354.112 293.46 354.061 293.917H354.156C354.359 293.578 354.641 293.316 355 293.13C355.364 292.943 355.788 292.85 356.27 292.85C357.971 292.85 358.822 293.707 358.822 295.421V299.998ZM363.963 300.125C362.872 300.125 362.017 299.807 361.399 299.172C360.785 298.533 360.479 297.655 360.479 296.538C360.479 295.391 360.764 294.49 361.335 293.834C361.907 293.178 362.692 292.85 363.69 292.85C364.617 292.85 365.349 293.132 365.887 293.694C366.424 294.257 366.693 295.032 366.693 296.018V296.824H362.015C362.036 297.505 362.22 298.03 362.567 298.398C362.914 298.762 363.403 298.944 364.033 298.944C364.448 298.944 364.833 298.906 365.188 298.83C365.548 298.749 365.933 298.618 366.344 298.436V299.649C365.98 299.822 365.612 299.945 365.239 300.017C364.867 300.089 364.442 300.125 363.963 300.125ZM363.69 293.98C363.216 293.98 362.836 294.13 362.548 294.431C362.264 294.731 362.095 295.169 362.04 295.745H365.227C365.218 295.165 365.078 294.727 364.808 294.431C364.537 294.13 364.164 293.98 363.69 293.98ZM375.719 294.964H379.134V299.623C378.576 299.805 378.038 299.934 377.522 300.01C377.01 300.087 376.456 300.125 375.859 300.125C374.454 300.125 373.371 299.71 372.609 298.88C371.847 298.047 371.466 296.873 371.466 295.358C371.466 293.864 371.896 292.696 372.755 291.854C373.614 291.007 374.797 290.584 376.303 290.584C377.272 290.584 378.191 290.77 379.058 291.143L378.525 292.406C377.772 292.059 377.018 291.885 376.265 291.885C375.275 291.885 374.492 292.196 373.917 292.818C373.341 293.441 373.053 294.291 373.053 295.37C373.053 296.504 373.311 297.368 373.828 297.96C374.348 298.548 375.095 298.842 376.068 298.842C376.559 298.842 377.084 298.781 377.643 298.658V296.265H375.719V294.964ZM385.603 299.998L385.304 299.02H385.253C384.915 299.448 384.574 299.74 384.231 299.896C383.889 300.048 383.449 300.125 382.911 300.125C382.221 300.125 381.682 299.938 381.292 299.566C380.907 299.194 380.715 298.667 380.715 297.985C380.715 297.262 380.984 296.716 381.521 296.348C382.058 295.98 382.877 295.779 383.978 295.745L385.19 295.707V295.332C385.19 294.884 385.084 294.549 384.873 294.329C384.665 294.105 384.341 293.993 383.901 293.993C383.542 293.993 383.197 294.046 382.867 294.151C382.537 294.257 382.219 294.382 381.915 294.526L381.432 293.46C381.813 293.261 382.23 293.11 382.683 293.009C383.135 292.903 383.563 292.85 383.965 292.85C384.858 292.85 385.531 293.045 385.983 293.434C386.44 293.824 386.669 294.435 386.669 295.269V299.998H385.603ZM383.381 298.982C383.923 298.982 384.356 298.832 384.682 298.531C385.012 298.227 385.177 297.801 385.177 297.255V296.646L384.276 296.684C383.573 296.71 383.061 296.828 382.74 297.04C382.422 297.247 382.264 297.567 382.264 297.998C382.264 298.311 382.357 298.555 382.543 298.728C382.729 298.897 383.008 298.982 383.381 298.982ZM392.312 300.125C391.423 300.125 390.734 299.805 390.243 299.166H390.154C390.213 299.759 390.243 300.118 390.243 300.245V303.121H388.751V292.977H389.957C389.991 293.108 390.061 293.422 390.167 293.917H390.243C390.708 293.206 391.406 292.85 392.337 292.85C393.213 292.85 393.895 293.168 394.381 293.802C394.872 294.437 395.118 295.328 395.118 296.475C395.118 297.622 394.868 298.517 394.369 299.16C393.874 299.803 393.188 300.125 392.312 300.125ZM391.95 294.069C391.358 294.069 390.924 294.242 390.649 294.589C390.378 294.936 390.243 295.491 390.243 296.253V296.475C390.243 297.33 390.378 297.95 390.649 298.335C390.92 298.715 391.362 298.906 391.976 298.906C392.492 298.906 392.89 298.694 393.169 298.271C393.448 297.848 393.588 297.245 393.588 296.462C393.588 295.675 393.448 295.08 393.169 294.678C392.894 294.272 392.488 294.069 391.95 294.069Z" fill="#262626"/>
                                <path class="enoggera-svg text" d="M399.001 245.998H393.656V236.718H399.001V238.33H395.624V240.368H398.766V241.98H395.624V244.373H399.001V245.998ZM407.342 245.998H405.406V241.853C405.406 241.341 405.315 240.958 405.133 240.704C404.951 240.446 404.661 240.317 404.263 240.317C403.722 240.317 403.33 240.499 403.089 240.863C402.848 241.222 402.727 241.821 402.727 242.659V245.998H400.791V238.901H402.27L402.53 239.809H402.638C402.854 239.466 403.15 239.208 403.527 239.035C403.908 238.857 404.339 238.768 404.822 238.768C405.647 238.768 406.273 238.992 406.701 239.441C407.128 239.885 407.342 240.528 407.342 241.371V245.998ZM410.877 242.437C410.877 243.139 410.992 243.671 411.22 244.03C411.453 244.39 411.83 244.57 412.35 244.57C412.866 244.57 413.237 244.392 413.461 244.037C413.689 243.677 413.804 243.144 413.804 242.437C413.804 241.735 413.689 241.208 413.461 240.856C413.232 240.505 412.858 240.33 412.337 240.33C411.821 240.33 411.449 240.505 411.22 240.856C410.992 241.203 410.877 241.73 410.877 242.437ZM415.784 242.437C415.784 243.592 415.479 244.496 414.87 245.147C414.261 245.799 413.412 246.125 412.325 246.125C411.643 246.125 411.042 245.977 410.522 245.681C410.001 245.38 409.602 244.951 409.322 244.392C409.043 243.833 408.903 243.182 408.903 242.437C408.903 241.278 409.206 240.376 409.811 239.733C410.416 239.09 411.267 238.768 412.363 238.768C413.044 238.768 413.645 238.916 414.166 239.212C414.686 239.509 415.086 239.934 415.365 240.488C415.645 241.043 415.784 241.692 415.784 242.437ZM423.56 238.901V239.885L422.449 240.171C422.652 240.488 422.754 240.844 422.754 241.237C422.754 241.999 422.487 242.594 421.954 243.021C421.425 243.444 420.689 243.656 419.745 243.656L419.396 243.637L419.11 243.605C418.911 243.757 418.812 243.927 418.812 244.113C418.812 244.392 419.167 244.532 419.878 244.532H421.084C421.863 244.532 422.456 244.699 422.862 245.033C423.272 245.368 423.478 245.858 423.478 246.506C423.478 247.335 423.131 247.979 422.437 248.436C421.747 248.893 420.754 249.121 419.459 249.121C418.469 249.121 417.712 248.948 417.187 248.601C416.667 248.258 416.406 247.775 416.406 247.153C416.406 246.726 416.54 246.368 416.806 246.081C417.073 245.793 417.464 245.588 417.98 245.465C417.782 245.38 417.608 245.243 417.46 245.052C417.312 244.858 417.238 244.652 417.238 244.437C417.238 244.166 417.316 243.941 417.473 243.764C417.629 243.582 417.856 243.404 418.152 243.23C417.779 243.07 417.483 242.812 417.263 242.456C417.047 242.101 416.939 241.682 416.939 241.199C416.939 240.425 417.191 239.826 417.695 239.403C418.198 238.98 418.918 238.768 419.853 238.768C420.052 238.768 420.287 238.787 420.558 238.825C420.833 238.859 421.008 238.884 421.084 238.901H423.56ZM418.082 247.001C418.082 247.268 418.209 247.477 418.463 247.629C418.721 247.782 419.081 247.858 419.542 247.858C420.236 247.858 420.78 247.763 421.173 247.572C421.567 247.382 421.764 247.122 421.764 246.792C421.764 246.525 421.647 246.341 421.415 246.239C421.182 246.138 420.822 246.087 420.335 246.087H419.333C418.977 246.087 418.679 246.169 418.438 246.334C418.201 246.504 418.082 246.726 418.082 247.001ZM418.787 241.225C418.787 241.61 418.873 241.914 419.047 242.139C419.225 242.363 419.493 242.475 419.853 242.475C420.217 242.475 420.484 242.363 420.653 242.139C420.822 241.914 420.907 241.61 420.907 241.225C420.907 240.37 420.556 239.942 419.853 239.942C419.142 239.942 418.787 240.37 418.787 241.225ZM430.911 238.901V239.885L429.8 240.171C430.003 240.488 430.104 240.844 430.104 241.237C430.104 241.999 429.838 242.594 429.305 243.021C428.776 243.444 428.039 243.656 427.096 243.656L426.747 243.637L426.461 243.605C426.262 243.757 426.163 243.927 426.163 244.113C426.163 244.392 426.518 244.532 427.229 244.532H428.435C429.214 244.532 429.806 244.699 430.212 245.033C430.623 245.368 430.828 245.858 430.828 246.506C430.828 247.335 430.481 247.979 429.787 248.436C429.097 248.893 428.105 249.121 426.81 249.121C425.82 249.121 425.062 248.948 424.538 248.601C424.017 248.258 423.757 247.775 423.757 247.153C423.757 246.726 423.89 246.368 424.157 246.081C424.423 245.793 424.815 245.588 425.331 245.465C425.132 245.38 424.959 245.243 424.811 245.052C424.662 244.858 424.588 244.652 424.588 244.437C424.588 244.166 424.667 243.941 424.823 243.764C424.98 243.582 425.206 243.404 425.502 243.23C425.13 243.07 424.834 242.812 424.614 242.456C424.398 242.101 424.29 241.682 424.29 241.199C424.29 240.425 424.542 239.826 425.045 239.403C425.549 238.98 426.268 238.768 427.204 238.768C427.403 238.768 427.637 238.787 427.908 238.825C428.183 238.859 428.359 238.884 428.435 238.901H430.911ZM425.433 247.001C425.433 247.268 425.56 247.477 425.813 247.629C426.072 247.782 426.431 247.858 426.893 247.858C427.587 247.858 428.13 247.763 428.524 247.572C428.917 247.382 429.114 247.122 429.114 246.792C429.114 246.525 428.998 246.341 428.765 246.239C428.532 246.138 428.173 246.087 427.686 246.087H426.683C426.328 246.087 426.029 246.169 425.788 246.334C425.551 246.504 425.433 246.726 425.433 247.001ZM426.137 241.225C426.137 241.61 426.224 241.914 426.397 242.139C426.575 242.363 426.844 242.475 427.204 242.475C427.568 242.475 427.834 242.363 428.003 242.139C428.173 241.914 428.257 241.61 428.257 241.225C428.257 240.37 427.906 239.942 427.204 239.942C426.493 239.942 426.137 240.37 426.137 241.225ZM435.024 240.146C434.613 240.146 434.292 240.277 434.059 240.539C433.826 240.797 433.693 241.165 433.659 241.644H436.376C436.368 241.165 436.243 240.797 436.001 240.539C435.76 240.277 435.434 240.146 435.024 240.146ZM435.297 246.125C434.154 246.125 433.261 245.81 432.618 245.179C431.975 244.549 431.653 243.656 431.653 242.5C431.653 241.311 431.95 240.393 432.542 239.746C433.139 239.094 433.962 238.768 435.011 238.768C436.014 238.768 436.795 239.054 437.354 239.625C437.912 240.196 438.191 240.986 438.191 241.993V242.932H433.615C433.636 243.482 433.799 243.912 434.104 244.221C434.408 244.53 434.836 244.684 435.386 244.684C435.813 244.684 436.217 244.64 436.598 244.551C436.979 244.462 437.377 244.32 437.792 244.125V245.624C437.453 245.793 437.091 245.918 436.706 245.998C436.321 246.083 435.851 246.125 435.297 246.125ZM443.727 238.768C443.989 238.768 444.207 238.787 444.38 238.825L444.234 240.641C444.078 240.598 443.887 240.577 443.663 240.577C443.045 240.577 442.563 240.736 442.216 241.053C441.873 241.371 441.702 241.815 441.702 242.386V245.998H439.766V238.901H441.232L441.518 240.095H441.613C441.833 239.697 442.129 239.377 442.501 239.136C442.878 238.891 443.286 238.768 443.727 238.768ZM450.176 245.998L449.801 245.033H449.75C449.425 245.444 449.088 245.729 448.741 245.89C448.398 246.047 447.95 246.125 447.396 246.125C446.714 246.125 446.177 245.93 445.783 245.541C445.394 245.152 445.199 244.597 445.199 243.878C445.199 243.125 445.462 242.57 445.986 242.215C446.515 241.855 447.311 241.656 448.373 241.618L449.604 241.58V241.269C449.604 240.55 449.236 240.19 448.5 240.19C447.933 240.19 447.266 240.361 446.5 240.704L445.859 239.396C446.676 238.969 447.582 238.755 448.576 238.755C449.528 238.755 450.258 238.963 450.766 239.377C451.274 239.792 451.528 240.423 451.528 241.269V245.998H450.176ZM449.604 242.71L448.855 242.735C448.293 242.752 447.874 242.854 447.599 243.04C447.324 243.226 447.186 243.51 447.186 243.891C447.186 244.437 447.499 244.709 448.125 244.709C448.574 244.709 448.932 244.58 449.198 244.322C449.469 244.064 449.604 243.721 449.604 243.294V242.71Z" fill="#262626"/>
                                <path class="mcdowall-svg text" d="M471.559 206.998L468.867 199.248H468.816C468.888 200.399 468.924 201.478 468.924 202.485V206.998H467.547V197.718H469.686L472.263 205.1H472.301L474.955 197.718H477.1V206.998H475.64V202.409C475.64 201.948 475.651 201.347 475.672 200.606C475.697 199.866 475.718 199.417 475.735 199.261H475.685L472.898 206.998H471.559ZM482.216 207.125C481.154 207.125 480.346 206.816 479.792 206.199C479.241 205.577 478.966 204.686 478.966 203.526C478.966 202.346 479.254 201.438 479.83 200.803C480.409 200.168 481.245 199.851 482.337 199.851C483.077 199.851 483.744 199.988 484.336 200.264L483.886 201.463C483.255 201.218 482.735 201.095 482.324 201.095C481.11 201.095 480.502 201.901 480.502 203.514C480.502 204.301 480.653 204.893 480.953 205.291C481.258 205.684 481.702 205.881 482.286 205.881C482.951 205.881 483.579 205.716 484.171 205.386V206.687C483.905 206.844 483.619 206.956 483.314 207.024C483.014 207.092 482.648 207.125 482.216 207.125ZM493.528 202.269C493.528 203.801 493.103 204.974 492.252 205.786C491.401 206.594 490.176 206.998 488.577 206.998H485.98V197.718H488.85C490.326 197.718 491.475 198.116 492.296 198.911C493.117 199.707 493.528 200.826 493.528 202.269ZM491.928 202.32C491.928 200.099 490.889 198.988 488.812 198.988H487.498V205.723H488.577C490.811 205.723 491.928 204.588 491.928 202.32ZM501.596 203.475C501.596 204.622 501.302 205.517 500.713 206.161C500.125 206.804 499.306 207.125 498.257 207.125C497.601 207.125 497.021 206.977 496.518 206.681C496.014 206.385 495.627 205.96 495.356 205.405C495.085 204.851 494.95 204.208 494.95 203.475C494.95 202.337 495.242 201.448 495.826 200.809C496.41 200.17 497.233 199.851 498.295 199.851C499.311 199.851 500.115 200.179 500.707 200.835C501.299 201.487 501.596 202.367 501.596 203.475ZM496.486 203.475C496.486 205.096 497.085 205.907 498.282 205.907C499.467 205.907 500.06 205.096 500.06 203.475C500.06 201.872 499.463 201.07 498.27 201.07C497.643 201.07 497.188 201.277 496.905 201.692C496.625 202.106 496.486 202.701 496.486 203.475ZM509.073 206.998L508.166 203.723C508.056 203.376 507.857 202.57 507.569 201.305H507.512C507.266 202.447 507.072 203.258 506.928 203.736L505.995 206.998H504.344L502.376 199.978H503.9L504.795 203.437C504.998 204.292 505.142 205.024 505.227 205.634H505.265C505.307 205.325 505.37 204.971 505.455 204.574C505.544 204.172 505.62 203.871 505.684 203.672L506.75 199.978H508.388L509.422 203.672C509.486 203.88 509.564 204.197 509.657 204.624C509.755 205.052 509.812 205.384 509.829 205.621H509.879C509.943 205.1 510.091 204.373 510.324 203.437L511.231 199.978H512.729L510.749 206.998H509.073ZM518.334 206.998L518.036 206.021H517.985C517.647 206.448 517.306 206.74 516.963 206.897C516.621 207.049 516.181 207.125 515.643 207.125C514.953 207.125 514.414 206.939 514.024 206.567C513.639 206.194 513.447 205.668 513.447 204.986C513.447 204.263 513.715 203.717 514.253 203.349C514.79 202.98 515.609 202.779 516.709 202.745L517.922 202.707V202.333C517.922 201.884 517.816 201.55 517.604 201.33C517.397 201.106 517.073 200.994 516.633 200.994C516.274 200.994 515.929 201.046 515.599 201.152C515.269 201.258 514.951 201.383 514.646 201.527L514.164 200.46C514.545 200.261 514.962 200.111 515.415 200.01C515.867 199.904 516.295 199.851 516.697 199.851C517.59 199.851 518.263 200.046 518.715 200.435C519.172 200.824 519.401 201.436 519.401 202.269V206.998H518.334ZM516.113 205.983C516.654 205.983 517.088 205.833 517.414 205.532C517.744 205.227 517.909 204.802 517.909 204.256V203.647L517.008 203.685C516.305 203.71 515.793 203.829 515.472 204.04C515.154 204.248 514.996 204.567 514.996 204.999C514.996 205.312 515.089 205.555 515.275 205.729C515.461 205.898 515.74 205.983 516.113 205.983ZM522.975 206.998H521.483V197.121H522.975V206.998ZM526.605 206.998H525.114V197.121H526.605V206.998Z" fill="#262626"/>
                                <path class="bracken-svg text" d="M506.549 68.7197H509.304C510.582 68.7197 511.504 68.9059 512.071 69.2783C512.643 69.6507 512.928 70.2389 512.928 71.043C512.928 71.5846 512.789 72.0353 512.509 72.395C512.23 72.7547 511.828 72.9811 511.303 73.0742V73.1377C511.955 73.2604 512.433 73.5037 512.738 73.8677C513.047 74.2274 513.201 74.7161 513.201 75.334C513.201 76.1676 512.909 76.8215 512.325 77.2954C511.745 77.7651 510.937 78 509.9 78H506.549V68.7197ZM508.066 72.5537H509.526C510.161 72.5537 510.624 72.4543 510.916 72.2554C511.208 72.0522 511.354 71.7095 511.354 71.2271C511.354 70.7912 511.195 70.4759 510.878 70.2812C510.565 70.0866 510.065 69.9893 509.38 69.9893H508.066V72.5537ZM508.066 73.7852V76.7241H509.678C510.313 76.7241 510.791 76.6035 511.113 76.3623C511.439 76.1169 511.602 75.7318 511.602 75.207C511.602 74.7246 511.437 74.367 511.106 74.1343C510.776 73.9015 510.275 73.7852 509.602 73.7852H508.066ZM518.533 70.8525C518.834 70.8525 519.081 70.8737 519.276 70.916L519.13 72.3062C518.918 72.2554 518.698 72.23 518.47 72.23C517.873 72.23 517.389 72.4246 517.016 72.814C516.648 73.2033 516.464 73.709 516.464 74.3311V78H514.972V70.9795H516.14L516.337 72.2173H516.413C516.646 71.7983 516.948 71.4661 517.321 71.2207C517.697 70.9753 518.102 70.8525 518.533 70.8525ZM524.976 78L524.678 77.0225H524.627C524.288 77.4499 523.948 77.7419 523.605 77.8984C523.262 78.0508 522.822 78.127 522.285 78.127C521.595 78.127 521.055 77.9408 520.666 77.5684C520.281 77.196 520.088 76.6691 520.088 75.9878C520.088 75.2642 520.357 74.7183 520.895 74.3501C521.432 73.9819 522.251 73.7809 523.351 73.7471L524.563 73.709V73.3345C524.563 72.8859 524.458 72.5516 524.246 72.3315C524.039 72.1073 523.715 71.9951 523.275 71.9951C522.915 71.9951 522.57 72.048 522.24 72.1538C521.91 72.2596 521.593 72.3844 521.288 72.5283L520.806 71.4619C521.187 71.263 521.603 71.1128 522.056 71.0112C522.509 70.9054 522.936 70.8525 523.338 70.8525C524.231 70.8525 524.904 71.0472 525.357 71.4365C525.814 71.8258 526.042 72.4373 526.042 73.271V78H524.976ZM522.754 76.9844C523.296 76.9844 523.73 76.8341 524.056 76.5337C524.386 76.229 524.551 75.8037 524.551 75.2578V74.6484L523.649 74.6865C522.947 74.7119 522.435 74.8304 522.113 75.042C521.796 75.2493 521.637 75.5688 521.637 76.0005C521.637 76.3136 521.73 76.557 521.917 76.7305C522.103 76.8997 522.382 76.9844 522.754 76.9844ZM530.956 78.127C529.893 78.127 529.085 77.818 528.531 77.2002C527.981 76.5781 527.706 75.6873 527.706 74.5278C527.706 73.3472 527.993 72.4395 528.569 71.8047C529.149 71.1699 529.984 70.8525 531.076 70.8525C531.817 70.8525 532.483 70.9901 533.076 71.2651L532.625 72.4648C531.994 72.2194 531.474 72.0967 531.063 72.0967C529.849 72.0967 529.242 72.9028 529.242 74.5151C529.242 75.3022 529.392 75.8947 529.692 76.2925C529.997 76.686 530.441 76.8828 531.025 76.8828C531.69 76.8828 532.318 76.7178 532.911 76.3877V77.689C532.644 77.8455 532.358 77.9577 532.054 78.0254C531.753 78.0931 531.387 78.127 530.956 78.127ZM536.002 74.293L536.846 73.2393L538.966 70.9795H540.687L537.862 73.9946L540.864 78H539.112L536.859 74.9214L536.04 75.5942V78H534.561V68.123H536.04V72.9409L535.964 74.293H536.002ZM545.066 78.127C543.975 78.127 543.12 77.8096 542.502 77.1748C541.888 76.5358 541.582 75.6577 541.582 74.5405C541.582 73.3937 541.867 72.4924 542.438 71.8364C543.01 71.1805 543.795 70.8525 544.793 70.8525C545.72 70.8525 546.452 71.134 546.99 71.6968C547.527 72.2596 547.796 73.034 547.796 74.02V74.8262H543.118C543.139 75.5075 543.323 76.0322 543.67 76.4004C544.017 76.7643 544.506 76.9463 545.136 76.9463C545.551 76.9463 545.936 76.9082 546.292 76.832C546.651 76.7516 547.036 76.6204 547.447 76.4385V77.6509C547.083 77.8244 546.715 77.9471 546.342 78.019C545.97 78.091 545.545 78.127 545.066 78.127ZM544.793 71.9824C544.319 71.9824 543.939 72.1326 543.651 72.4331C543.367 72.7336 543.198 73.1715 543.143 73.7471H546.33C546.321 73.1673 546.181 72.7293 545.911 72.4331C545.64 72.1326 545.267 71.9824 544.793 71.9824ZM555.667 78H554.169V73.6836C554.169 73.1419 554.059 72.7378 553.839 72.4712C553.623 72.2046 553.278 72.0713 552.804 72.0713C552.174 72.0713 551.712 72.2575 551.42 72.6299C551.128 73.0023 550.982 73.6265 550.982 74.5024V78H549.491V70.9795H550.659L550.868 71.8999H550.944C551.156 71.5656 551.456 71.3075 551.846 71.1255C552.235 70.9435 552.667 70.8525 553.141 70.8525C554.825 70.8525 555.667 71.7095 555.667 73.4233V78ZM516.356 86.0361H517.41C518.116 86.0361 518.628 85.9049 518.946 85.6426C519.263 85.3802 519.422 84.9909 519.422 84.4746C519.422 83.9499 519.25 83.5732 518.908 83.3447C518.565 83.1162 518.049 83.002 517.359 83.002H516.356V86.0361ZM516.356 87.293V91H514.839V81.7197H517.46C518.658 81.7197 519.545 81.944 520.12 82.3926C520.696 82.8411 520.983 83.5182 520.983 84.4238C520.983 85.5791 520.382 86.4022 519.181 86.8931L521.802 91H520.076L517.854 87.293H516.356ZM524.487 91H522.996V83.9795H524.487V91ZM522.907 82.1196C522.907 81.853 522.979 81.6478 523.123 81.5039C523.271 81.36 523.48 81.2881 523.751 81.2881C524.013 81.2881 524.216 81.36 524.36 81.5039C524.508 81.6478 524.583 81.853 524.583 82.1196C524.583 82.3735 524.508 82.5745 524.36 82.7227C524.216 82.8665 524.013 82.9385 523.751 82.9385C523.48 82.9385 523.271 82.8665 523.123 82.7227C522.979 82.5745 522.907 82.3735 522.907 82.1196ZM528.994 91.127C528.118 91.127 527.435 90.8096 526.944 90.1748C526.453 89.54 526.208 88.6493 526.208 87.5024C526.208 86.3514 526.455 85.4564 526.95 84.8174C527.45 84.1742 528.139 83.8525 529.02 83.8525C529.942 83.8525 530.645 84.1932 531.127 84.8745H531.203C531.131 84.3709 531.095 83.9731 531.095 83.6812V81.123H532.593V91H531.425L531.165 90.0796H531.095C530.617 90.7778 529.917 91.127 528.994 91.127ZM529.394 89.9209C530.008 89.9209 530.454 89.7495 530.733 89.4067C531.013 89.0597 531.157 88.499 531.165 87.7246V87.5151C531.165 86.6307 531.021 86.0023 530.733 85.6299C530.446 85.2575 529.995 85.0713 529.381 85.0713C528.857 85.0713 528.452 85.285 528.169 85.7124C527.885 86.1356 527.744 86.7407 527.744 87.5278C527.744 88.3065 527.881 88.901 528.156 89.3115C528.431 89.7178 528.844 89.9209 529.394 89.9209ZM540.655 83.9795V84.7983L539.455 85.0205C539.565 85.1686 539.656 85.3506 539.728 85.5664C539.8 85.7822 539.836 86.0107 539.836 86.252C539.836 86.9756 539.586 87.5448 539.087 87.9595C538.588 88.3742 537.9 88.5815 537.024 88.5815C536.8 88.5815 536.597 88.5646 536.415 88.5308C536.093 88.7297 535.932 88.9624 535.932 89.229C535.932 89.3898 536.006 89.5104 536.154 89.5908C536.307 89.6712 536.584 89.7114 536.986 89.7114H538.211C538.985 89.7114 539.574 89.8765 539.976 90.2065C540.378 90.5366 540.579 91.0127 540.579 91.6348C540.579 92.4303 540.251 93.0439 539.595 93.4756C538.939 93.9072 537.991 94.123 536.751 94.123C535.795 94.123 535.065 93.9538 534.561 93.6152C534.057 93.2767 533.806 92.7943 533.806 92.168C533.806 91.7363 533.941 91.3724 534.212 91.0762C534.487 90.7842 534.87 90.5811 535.361 90.4668C535.162 90.3822 534.997 90.2467 534.866 90.0605C534.739 89.8701 534.675 89.6712 534.675 89.4639C534.675 89.2015 534.749 88.9793 534.897 88.7974C535.046 88.6154 535.266 88.4355 535.558 88.2578C535.194 88.1012 534.897 87.8473 534.669 87.4961C534.445 87.1406 534.333 86.7259 534.333 86.252C534.333 85.4902 534.572 84.8999 535.05 84.481C535.532 84.062 536.218 83.8525 537.106 83.8525C537.305 83.8525 537.513 83.8674 537.729 83.897C537.949 83.9224 538.114 83.9499 538.224 83.9795H540.655ZM535.139 92.0918C535.139 92.4134 535.283 92.661 535.57 92.8345C535.862 93.008 536.271 93.0947 536.795 93.0947C537.608 93.0947 538.213 92.9784 538.611 92.7456C539.009 92.5129 539.208 92.2039 539.208 91.8188C539.208 91.5142 539.097 91.2962 538.877 91.165C538.662 91.0381 538.257 90.9746 537.665 90.9746H536.535C536.108 90.9746 535.767 91.0741 535.513 91.2729C535.264 91.4761 535.139 91.749 535.139 92.0918ZM535.78 86.252C535.78 86.6921 535.892 87.0306 536.116 87.2676C536.345 87.5046 536.671 87.623 537.094 87.623C537.957 87.623 538.389 87.1618 538.389 86.2393C538.389 85.7822 538.281 85.431 538.065 85.1855C537.853 84.9359 537.53 84.811 537.094 84.811C536.662 84.811 536.334 84.9338 536.11 85.1792C535.89 85.4246 535.78 85.7822 535.78 86.252ZM545.028 91.127C543.937 91.127 543.082 90.8096 542.464 90.1748C541.85 89.5358 541.543 88.6577 541.543 87.5405C541.543 86.3937 541.829 85.4924 542.4 84.8364C542.972 84.1805 543.757 83.8525 544.755 83.8525C545.682 83.8525 546.414 84.134 546.952 84.6968C547.489 85.2596 547.758 86.034 547.758 87.02V87.8262H543.08C543.101 88.5075 543.285 89.0322 543.632 89.4004C543.979 89.7643 544.468 89.9463 545.098 89.9463C545.513 89.9463 545.898 89.9082 546.253 89.832C546.613 89.7516 546.998 89.6204 547.409 89.4385V90.6509C547.045 90.8244 546.677 90.9471 546.304 91.019C545.932 91.091 545.507 91.127 545.028 91.127ZM544.755 84.9824C544.281 84.9824 543.901 85.1326 543.613 85.4331C543.329 85.7336 543.16 86.1715 543.105 86.7471H546.292C546.283 86.1673 546.143 85.7293 545.873 85.4331C545.602 85.1326 545.229 84.9824 544.755 84.9824Z" fill="#262626"/>
                                <path class="deagon-svg text" d="M578.266 125.271C578.266 126.803 577.84 127.975 576.99 128.788C576.139 129.596 574.914 130 573.314 130H570.718V120.72H573.587C575.064 120.72 576.213 121.118 577.034 121.913C577.855 122.709 578.266 123.828 578.266 125.271ZM576.666 125.322C576.666 123.1 575.627 121.989 573.549 121.989H572.235V128.724H573.314C575.549 128.724 576.666 127.59 576.666 125.322ZM583.172 130.127C582.081 130.127 581.226 129.81 580.608 129.175C579.994 128.536 579.688 127.658 579.688 126.541C579.688 125.394 579.973 124.492 580.544 123.836C581.116 123.181 581.901 122.853 582.899 122.853C583.826 122.853 584.558 123.134 585.096 123.697C585.633 124.26 585.902 125.034 585.902 126.02V126.826H581.224C581.245 127.507 581.429 128.032 581.776 128.4C582.123 128.764 582.612 128.946 583.242 128.946C583.657 128.946 584.042 128.908 584.397 128.832C584.757 128.752 585.142 128.62 585.553 128.438V129.651C585.189 129.824 584.821 129.947 584.448 130.019C584.076 130.091 583.651 130.127 583.172 130.127ZM582.899 123.982C582.425 123.982 582.045 124.133 581.757 124.433C581.473 124.734 581.304 125.172 581.249 125.747H584.436C584.427 125.167 584.287 124.729 584.017 124.433C583.746 124.133 583.373 123.982 582.899 123.982ZM591.989 130L591.691 129.022H591.64C591.302 129.45 590.961 129.742 590.618 129.898C590.275 130.051 589.835 130.127 589.298 130.127C588.608 130.127 588.069 129.941 587.679 129.568C587.294 129.196 587.102 128.669 587.102 127.988C587.102 127.264 587.37 126.718 587.908 126.35C588.445 125.982 589.264 125.781 590.364 125.747L591.577 125.709V125.334C591.577 124.886 591.471 124.552 591.259 124.332C591.052 124.107 590.728 123.995 590.288 123.995C589.928 123.995 589.583 124.048 589.253 124.154C588.923 124.26 588.606 124.384 588.301 124.528L587.819 123.462C588.2 123.263 588.617 123.113 589.069 123.011C589.522 122.905 589.95 122.853 590.352 122.853C591.244 122.853 591.917 123.047 592.37 123.437C592.827 123.826 593.056 124.437 593.056 125.271V130H591.989ZM589.768 128.984C590.309 128.984 590.743 128.834 591.069 128.534C591.399 128.229 591.564 127.804 591.564 127.258V126.648L590.663 126.687C589.96 126.712 589.448 126.83 589.126 127.042C588.809 127.249 588.65 127.569 588.65 128C588.65 128.314 588.743 128.557 588.93 128.73C589.116 128.9 589.395 128.984 589.768 128.984ZM601.066 122.979V123.798L599.867 124.021C599.977 124.169 600.068 124.351 600.14 124.566C600.212 124.782 600.248 125.011 600.248 125.252C600.248 125.976 599.998 126.545 599.499 126.959C598.999 127.374 598.312 127.582 597.436 127.582C597.211 127.582 597.008 127.565 596.826 127.531C596.505 127.73 596.344 127.962 596.344 128.229C596.344 128.39 596.418 128.51 596.566 128.591C596.718 128.671 596.995 128.711 597.397 128.711H598.623C599.397 128.711 599.985 128.876 600.387 129.207C600.789 129.537 600.99 130.013 600.99 130.635C600.99 131.43 600.662 132.044 600.006 132.476C599.35 132.907 598.403 133.123 597.163 133.123C596.206 133.123 595.476 132.954 594.973 132.615C594.469 132.277 594.217 131.794 594.217 131.168C594.217 130.736 594.353 130.372 594.624 130.076C594.899 129.784 595.282 129.581 595.772 129.467C595.574 129.382 595.409 129.247 595.277 129.061C595.15 128.87 595.087 128.671 595.087 128.464C595.087 128.201 595.161 127.979 595.309 127.797C595.457 127.615 595.677 127.436 595.969 127.258C595.605 127.101 595.309 126.847 595.081 126.496C594.856 126.141 594.744 125.726 594.744 125.252C594.744 124.49 594.983 123.9 595.461 123.481C595.944 123.062 596.629 122.853 597.518 122.853C597.717 122.853 597.924 122.867 598.14 122.897C598.36 122.922 598.525 122.95 598.635 122.979H601.066ZM595.55 131.092C595.55 131.413 595.694 131.661 595.982 131.834C596.274 132.008 596.682 132.095 597.207 132.095C598.02 132.095 598.625 131.978 599.022 131.746C599.42 131.513 599.619 131.204 599.619 130.819C599.619 130.514 599.509 130.296 599.289 130.165C599.073 130.038 598.669 129.975 598.077 129.975H596.947C596.519 129.975 596.179 130.074 595.925 130.273C595.675 130.476 595.55 130.749 595.55 131.092ZM596.191 125.252C596.191 125.692 596.304 126.031 596.528 126.268C596.756 126.505 597.082 126.623 597.505 126.623C598.369 126.623 598.8 126.162 598.8 125.239C598.8 124.782 598.692 124.431 598.477 124.186C598.265 123.936 597.941 123.811 597.505 123.811C597.074 123.811 596.746 123.934 596.521 124.179C596.301 124.425 596.191 124.782 596.191 125.252ZM608.601 126.477C608.601 127.624 608.307 128.519 607.719 129.162C607.131 129.805 606.312 130.127 605.262 130.127C604.606 130.127 604.027 129.979 603.523 129.683C603.019 129.386 602.632 128.961 602.361 128.407C602.09 127.852 601.955 127.209 601.955 126.477C601.955 125.339 602.247 124.45 602.831 123.811C603.415 123.172 604.238 122.853 605.3 122.853C606.316 122.853 607.12 123.181 607.712 123.836C608.305 124.488 608.601 125.368 608.601 126.477ZM603.491 126.477C603.491 128.098 604.09 128.908 605.288 128.908C606.472 128.908 607.065 128.098 607.065 126.477C607.065 124.873 606.468 124.071 605.275 124.071C604.649 124.071 604.194 124.279 603.91 124.693C603.631 125.108 603.491 125.703 603.491 126.477ZM616.498 130H615V125.684C615 125.142 614.889 124.738 614.669 124.471C614.454 124.205 614.109 124.071 613.635 124.071C613.004 124.071 612.543 124.257 612.251 124.63C611.959 125.002 611.813 125.626 611.813 126.502V130H610.321V122.979H611.489L611.699 123.9H611.775C611.986 123.566 612.287 123.307 612.676 123.125C613.066 122.944 613.497 122.853 613.971 122.853C615.655 122.853 616.498 123.709 616.498 125.423V130Z" fill="#262626"/>
                                <path class="northgate-svg text" d="M577.21 206.998H575.351L570.787 199.603H570.736L570.768 200.016C570.827 200.803 570.856 201.523 570.856 202.174V206.998H569.479V197.718H571.32L575.871 205.075H575.909C575.901 204.978 575.884 204.624 575.858 204.015C575.833 203.401 575.82 202.923 575.82 202.58V197.718H577.21V206.998ZM585.729 203.475C585.729 204.622 585.435 205.517 584.847 206.161C584.258 206.804 583.44 207.125 582.39 207.125C581.734 207.125 581.154 206.977 580.651 206.681C580.147 206.385 579.76 205.96 579.489 205.405C579.218 204.851 579.083 204.208 579.083 203.475C579.083 202.337 579.375 201.448 579.959 200.809C580.543 200.17 581.366 199.851 582.428 199.851C583.444 199.851 584.248 200.179 584.84 200.835C585.433 201.487 585.729 202.367 585.729 203.475ZM580.619 203.475C580.619 205.096 581.218 205.907 582.416 205.907C583.6 205.907 584.193 205.096 584.193 203.475C584.193 201.872 583.596 201.07 582.403 201.07C581.777 201.07 581.322 201.277 581.038 201.692C580.759 202.106 580.619 202.701 580.619 203.475ZM591.01 199.851C591.311 199.851 591.558 199.872 591.753 199.914L591.607 201.305C591.395 201.254 591.175 201.228 590.947 201.228C590.35 201.228 589.866 201.423 589.493 201.812C589.125 202.202 588.941 202.707 588.941 203.329V206.998H587.449V199.978H588.617L588.814 201.216H588.89C589.123 200.797 589.425 200.465 589.798 200.219C590.174 199.974 590.579 199.851 591.01 199.851ZM595.676 205.919C596.04 205.919 596.404 205.862 596.768 205.748V206.871C596.603 206.943 596.389 207.003 596.126 207.049C595.868 207.1 595.6 207.125 595.32 207.125C593.907 207.125 593.2 206.381 593.2 204.891V201.108H592.242V200.448L593.27 199.902L593.778 198.416H594.698V199.978H596.698V201.108H594.698V204.866C594.698 205.225 594.787 205.492 594.965 205.665C595.147 205.835 595.384 205.919 595.676 205.919ZM604.353 206.998H602.855V202.682C602.855 202.14 602.745 201.736 602.525 201.47C602.309 201.203 601.964 201.07 601.49 201.07C600.864 201.07 600.403 201.258 600.106 201.635C599.814 202.007 599.668 202.633 599.668 203.514V206.998H598.177V197.121H599.668V199.629C599.668 200.031 599.643 200.46 599.592 200.917H599.688C599.891 200.579 600.172 200.316 600.532 200.13C600.896 199.944 601.319 199.851 601.801 199.851C603.502 199.851 604.353 200.708 604.353 202.422V206.998ZM612.357 199.978V200.797L611.158 201.019C611.268 201.167 611.359 201.349 611.431 201.565C611.503 201.781 611.539 202.009 611.539 202.25C611.539 202.974 611.289 203.543 610.79 203.958C610.29 204.373 609.603 204.58 608.727 204.58C608.502 204.58 608.299 204.563 608.117 204.529C607.796 204.728 607.635 204.961 607.635 205.227C607.635 205.388 607.709 205.509 607.857 205.589C608.009 205.67 608.286 205.71 608.688 205.71H609.914C610.688 205.71 611.276 205.875 611.678 206.205C612.08 206.535 612.281 207.011 612.281 207.633C612.281 208.429 611.953 209.042 611.297 209.474C610.641 209.906 609.694 210.121 608.454 210.121C607.497 210.121 606.767 209.952 606.264 209.614C605.76 209.275 605.508 208.793 605.508 208.166C605.508 207.735 605.644 207.371 605.915 207.075C606.19 206.783 606.573 206.579 607.063 206.465C606.865 206.381 606.7 206.245 606.568 206.059C606.441 205.869 606.378 205.67 606.378 205.462C606.378 205.2 606.452 204.978 606.6 204.796C606.748 204.614 606.968 204.434 607.26 204.256C606.896 204.1 606.6 203.846 606.372 203.495C606.147 203.139 606.035 202.724 606.035 202.25C606.035 201.489 606.274 200.898 606.752 200.479C607.235 200.06 607.92 199.851 608.809 199.851C609.008 199.851 609.215 199.866 609.431 199.895C609.651 199.921 609.816 199.948 609.926 199.978H612.357ZM606.841 208.09C606.841 208.412 606.985 208.659 607.273 208.833C607.565 209.006 607.973 209.093 608.498 209.093C609.311 209.093 609.916 208.977 610.313 208.744C610.711 208.511 610.91 208.202 610.91 207.817C610.91 207.513 610.8 207.295 610.58 207.163C610.364 207.036 609.96 206.973 609.368 206.973H608.238C607.81 206.973 607.47 207.072 607.216 207.271C606.966 207.474 606.841 207.747 606.841 208.09ZM607.482 202.25C607.482 202.69 607.595 203.029 607.819 203.266C608.047 203.503 608.373 203.621 608.796 203.621C609.66 203.621 610.091 203.16 610.091 202.238C610.091 201.781 609.983 201.429 609.768 201.184C609.556 200.934 609.232 200.809 608.796 200.809C608.365 200.809 608.037 200.932 607.812 201.178C607.592 201.423 607.482 201.781 607.482 202.25ZM618.058 206.998L617.759 206.021H617.708C617.37 206.448 617.029 206.74 616.687 206.897C616.344 207.049 615.904 207.125 615.366 207.125C614.676 207.125 614.137 206.939 613.748 206.567C613.362 206.194 613.17 205.668 613.17 204.986C613.17 204.263 613.439 203.717 613.976 203.349C614.514 202.98 615.332 202.779 616.433 202.745L617.645 202.707V202.333C617.645 201.884 617.539 201.55 617.328 201.33C617.12 201.106 616.797 200.994 616.356 200.994C615.997 200.994 615.652 201.046 615.322 201.152C614.992 201.258 614.674 201.383 614.37 201.527L613.887 200.46C614.268 200.261 614.685 200.111 615.138 200.01C615.59 199.904 616.018 199.851 616.42 199.851C617.313 199.851 617.986 200.046 618.438 200.435C618.896 200.824 619.124 201.436 619.124 202.269V206.998H618.058ZM615.836 205.983C616.378 205.983 616.811 205.833 617.137 205.532C617.467 205.227 617.632 204.802 617.632 204.256V203.647L616.731 203.685C616.028 203.71 615.516 203.829 615.195 204.04C614.877 204.248 614.719 204.567 614.719 204.999C614.719 205.312 614.812 205.555 614.998 205.729C615.184 205.898 615.464 205.983 615.836 205.983ZM623.821 205.919C624.185 205.919 624.549 205.862 624.913 205.748V206.871C624.748 206.943 624.534 207.003 624.272 207.049C624.014 207.1 623.745 207.125 623.466 207.125C622.052 207.125 621.346 206.381 621.346 204.891V201.108H620.387V200.448L621.416 199.902L621.923 198.416H622.844V199.978H624.843V201.108H622.844V204.866C622.844 205.225 622.933 205.492 623.11 205.665C623.292 205.835 623.529 205.919 623.821 205.919ZM629.388 207.125C628.296 207.125 627.442 206.808 626.824 206.173C626.21 205.534 625.903 204.656 625.903 203.539C625.903 202.392 626.189 201.491 626.76 200.835C627.332 200.179 628.117 199.851 629.115 199.851C630.042 199.851 630.774 200.132 631.312 200.695C631.849 201.258 632.118 202.032 632.118 203.018V203.825H627.439C627.461 204.506 627.645 205.031 627.992 205.399C628.339 205.763 628.827 205.945 629.458 205.945C629.873 205.945 630.258 205.907 630.613 205.83C630.973 205.75 631.358 205.619 631.769 205.437V206.649C631.405 206.823 631.036 206.946 630.664 207.017C630.292 207.089 629.866 207.125 629.388 207.125ZM629.115 200.981C628.641 200.981 628.26 201.131 627.973 201.432C627.689 201.732 627.52 202.17 627.465 202.745H630.651C630.643 202.166 630.503 201.728 630.232 201.432C629.962 201.131 629.589 200.981 629.115 200.981Z" fill="#262626"/>
                                <path class="hamilton-svg text" d="M623.889 245.998H622.366V241.815H618.087V245.998H616.57V236.718H618.087V240.514H622.366V236.718H623.889V245.998ZM630.567 245.998L630.269 245.021H630.218C629.879 245.448 629.539 245.74 629.196 245.896C628.853 246.049 628.413 246.125 627.875 246.125C627.186 246.125 626.646 245.939 626.257 245.566C625.872 245.194 625.679 244.667 625.679 243.986C625.679 243.262 625.948 242.716 626.485 242.348C627.023 241.98 627.842 241.779 628.942 241.745L630.154 241.707V241.333C630.154 240.884 630.049 240.55 629.837 240.33C629.63 240.105 629.306 239.993 628.866 239.993C628.506 239.993 628.161 240.046 627.831 240.152C627.501 240.258 627.184 240.382 626.879 240.526L626.396 239.46C626.777 239.261 627.194 239.111 627.647 239.009C628.1 238.903 628.527 238.851 628.929 238.851C629.822 238.851 630.495 239.045 630.948 239.435C631.405 239.824 631.633 240.435 631.633 241.269V245.998H630.567ZM628.345 244.982C628.887 244.982 629.321 244.832 629.646 244.532C629.977 244.227 630.142 243.802 630.142 243.256V242.646L629.24 242.685C628.538 242.71 628.026 242.828 627.704 243.04C627.387 243.247 627.228 243.567 627.228 243.999C627.228 244.312 627.321 244.555 627.507 244.729C627.694 244.898 627.973 244.982 628.345 244.982ZM639.631 245.998H638.133V241.669C638.133 241.132 638.032 240.732 637.829 240.469C637.625 240.203 637.308 240.069 636.876 240.069C636.301 240.069 635.878 240.258 635.607 240.634C635.34 241.007 635.207 241.629 635.207 242.5V245.998H633.715V238.978H634.883L635.093 239.898H635.169C635.364 239.564 635.645 239.306 636.013 239.124C636.386 238.942 636.794 238.851 637.238 238.851C638.317 238.851 639.033 239.219 639.384 239.955H639.485C639.693 239.608 639.985 239.337 640.361 239.143C640.738 238.948 641.17 238.851 641.656 238.851C642.494 238.851 643.104 239.062 643.484 239.485C643.869 239.909 644.062 240.554 644.062 241.421V245.998H642.57V241.669C642.57 241.132 642.467 240.732 642.259 240.469C642.056 240.203 641.739 240.069 641.307 240.069C640.727 240.069 640.302 240.251 640.031 240.615C639.765 240.975 639.631 241.529 639.631 242.278V245.998ZM647.636 245.998H646.144V238.978H647.636V245.998ZM646.055 237.118C646.055 236.851 646.127 236.646 646.271 236.502C646.419 236.358 646.629 236.286 646.899 236.286C647.162 236.286 647.365 236.358 647.509 236.502C647.657 236.646 647.731 236.851 647.731 237.118C647.731 237.372 647.657 237.573 647.509 237.721C647.365 237.865 647.162 237.937 646.899 237.937C646.629 237.937 646.419 237.865 646.271 237.721C646.127 237.573 646.055 237.372 646.055 237.118ZM651.267 245.998H649.775V236.121H651.267V245.998ZM656.021 244.919C656.385 244.919 656.749 244.862 657.113 244.748V245.871C656.948 245.943 656.734 246.002 656.472 246.049C656.214 246.1 655.945 246.125 655.666 246.125C654.252 246.125 653.545 245.38 653.545 243.891V240.107H652.587V239.447L653.615 238.901L654.123 237.416H655.043V238.978H657.043V240.107H655.043V243.865C655.043 244.225 655.132 244.492 655.31 244.665C655.492 244.834 655.729 244.919 656.021 244.919ZM664.749 242.475C664.749 243.622 664.455 244.517 663.867 245.16C663.278 245.803 662.46 246.125 661.41 246.125C660.754 246.125 660.174 245.977 659.671 245.681C659.167 245.384 658.78 244.959 658.509 244.405C658.238 243.85 658.103 243.207 658.103 242.475C658.103 241.337 658.395 240.448 658.979 239.809C659.563 239.17 660.386 238.851 661.448 238.851C662.464 238.851 663.268 239.179 663.86 239.834C664.453 240.486 664.749 241.366 664.749 242.475ZM659.639 242.475C659.639 244.096 660.238 244.906 661.436 244.906C662.62 244.906 663.213 244.096 663.213 242.475C663.213 240.871 662.616 240.069 661.423 240.069C660.797 240.069 660.342 240.277 660.058 240.691C659.779 241.106 659.639 241.701 659.639 242.475ZM672.646 245.998H671.147V241.682C671.147 241.14 671.037 240.736 670.817 240.469C670.602 240.203 670.257 240.069 669.783 240.069C669.152 240.069 668.691 240.256 668.399 240.628C668.107 241 667.961 241.625 667.961 242.5V245.998H666.469V238.978H667.637L667.847 239.898H667.923C668.134 239.564 668.435 239.306 668.824 239.124C669.214 238.942 669.645 238.851 670.119 238.851C671.803 238.851 672.646 239.708 672.646 241.421V245.998Z" fill="#262626"/>
                                <path class="central-svg text" d="M524.233 307.885C523.361 307.885 522.676 308.194 522.176 308.812C521.677 309.43 521.427 310.283 521.427 311.37C521.427 312.508 521.666 313.37 522.145 313.954C522.627 314.538 523.323 314.83 524.233 314.83C524.626 314.83 525.007 314.792 525.375 314.715C525.744 314.635 526.127 314.533 526.524 314.411V315.712C525.797 315.987 524.971 316.125 524.049 316.125C522.69 316.125 521.647 315.714 520.919 314.893C520.192 314.068 519.828 312.889 519.828 311.357C519.828 310.393 520.003 309.548 520.354 308.825C520.71 308.101 521.222 307.547 521.891 307.162C522.559 306.777 523.344 306.584 524.246 306.584C525.194 306.584 526.069 306.783 526.874 307.181L526.328 308.444C526.014 308.296 525.682 308.167 525.331 308.057C524.984 307.942 524.618 307.885 524.233 307.885ZM531.431 316.125C530.339 316.125 529.485 315.807 528.867 315.172C528.253 314.533 527.946 313.655 527.946 312.538C527.946 311.391 528.232 310.49 528.803 309.834C529.375 309.178 530.16 308.85 531.158 308.85C532.085 308.85 532.817 309.132 533.354 309.694C533.892 310.257 534.161 311.032 534.161 312.018V312.824H529.482C529.504 313.505 529.688 314.03 530.035 314.398C530.382 314.762 530.87 314.944 531.501 314.944C531.916 314.944 532.301 314.906 532.656 314.83C533.016 314.749 533.401 314.618 533.812 314.436V315.648C533.448 315.822 533.079 315.945 532.707 316.017C532.335 316.089 531.909 316.125 531.431 316.125ZM531.158 309.98C530.684 309.98 530.303 310.13 530.016 310.431C529.732 310.731 529.563 311.169 529.508 311.745H532.694C532.686 311.165 532.546 310.727 532.275 310.431C532.005 310.13 531.632 309.98 531.158 309.98ZM542.032 315.998H540.534V311.681C540.534 311.139 540.424 310.735 540.204 310.469C539.988 310.202 539.643 310.069 539.169 310.069C538.538 310.069 538.077 310.255 537.785 310.627C537.493 311 537.347 311.624 537.347 312.5V315.998H535.855V308.977H537.023L537.233 309.897H537.309C537.521 309.563 537.821 309.305 538.21 309.123C538.6 308.941 539.031 308.85 539.505 308.85C541.19 308.85 542.032 309.707 542.032 311.421V315.998ZM546.723 314.918C547.087 314.918 547.451 314.861 547.814 314.747V315.871C547.649 315.943 547.436 316.002 547.173 316.048C546.915 316.099 546.646 316.125 546.367 316.125C544.954 316.125 544.247 315.38 544.247 313.89V310.107H543.289V309.447L544.317 308.901L544.825 307.416H545.745V308.977H547.745V310.107H545.745V313.865C545.745 314.224 545.834 314.491 546.012 314.665C546.194 314.834 546.431 314.918 546.723 314.918ZM552.785 308.85C553.085 308.85 553.333 308.871 553.527 308.914L553.381 310.304C553.17 310.253 552.95 310.228 552.721 310.228C552.125 310.228 551.64 310.422 551.268 310.812C550.899 311.201 550.715 311.707 550.715 312.329V315.998H549.224V308.977H550.392L550.588 310.215H550.665C550.897 309.796 551.2 309.464 551.572 309.218C551.949 308.973 552.353 308.85 552.785 308.85ZM559.228 315.998L558.929 315.02H558.878C558.54 315.447 558.199 315.739 557.856 315.896C557.514 316.048 557.074 316.125 556.536 316.125C555.846 316.125 555.307 315.938 554.917 315.566C554.532 315.194 554.34 314.667 554.34 313.985C554.34 313.262 554.609 312.716 555.146 312.348C555.683 311.979 556.502 311.778 557.603 311.745L558.815 311.707V311.332C558.815 310.883 558.709 310.549 558.498 310.329C558.29 310.105 557.966 309.993 557.526 309.993C557.167 309.993 556.822 310.046 556.492 310.151C556.162 310.257 555.844 310.382 555.54 310.526L555.057 309.459C555.438 309.261 555.855 309.11 556.308 309.009C556.76 308.903 557.188 308.85 557.59 308.85C558.483 308.85 559.156 309.045 559.608 309.434C560.065 309.823 560.294 310.435 560.294 311.269V315.998H559.228ZM557.006 314.982C557.548 314.982 557.981 314.832 558.307 314.531C558.637 314.227 558.802 313.801 558.802 313.255V312.646L557.901 312.684C557.198 312.709 556.686 312.828 556.365 313.04C556.047 313.247 555.889 313.566 555.889 313.998C555.889 314.311 555.982 314.555 556.168 314.728C556.354 314.897 556.633 314.982 557.006 314.982ZM563.868 315.998H562.376V306.121H563.868V315.998Z" fill="#262626"/>
                                <path class="morningside-svg text" d="M589.506 322.064L586.815 314.313H586.764C586.836 315.465 586.872 316.544 586.872 317.551V322.064H585.494V312.784H587.634L590.211 320.166H590.249L592.902 312.784H595.048V322.064H593.588V317.475C593.588 317.013 593.598 316.412 593.619 315.672C593.645 314.931 593.666 314.483 593.683 314.326H593.632L590.845 322.064H589.506ZM603.56 318.541C603.56 319.688 603.266 320.583 602.677 321.226C602.089 321.869 601.27 322.191 600.221 322.191C599.565 322.191 598.985 322.043 598.482 321.747C597.978 321.45 597.591 321.025 597.32 320.471C597.049 319.916 596.914 319.273 596.914 318.541C596.914 317.403 597.206 316.514 597.79 315.875C598.374 315.236 599.197 314.917 600.259 314.917C601.275 314.917 602.079 315.244 602.671 315.9C603.264 316.552 603.56 317.432 603.56 318.541ZM598.45 318.541C598.45 320.162 599.049 320.972 600.246 320.972C601.431 320.972 602.024 320.162 602.024 318.541C602.024 316.937 601.427 316.135 600.234 316.135C599.607 316.135 599.152 316.343 598.869 316.757C598.59 317.172 598.45 317.767 598.45 318.541ZM608.841 314.917C609.142 314.917 609.389 314.938 609.584 314.98L609.438 316.37C609.226 316.319 609.006 316.294 608.778 316.294C608.181 316.294 607.696 316.489 607.324 316.878C606.956 317.267 606.772 317.773 606.772 318.395V322.064H605.28V315.043H606.448L606.645 316.281H606.721C606.954 315.862 607.256 315.53 607.629 315.285C608.005 315.039 608.409 314.917 608.841 314.917ZM617.068 322.064H615.57V317.748C615.57 317.206 615.46 316.802 615.24 316.535C615.024 316.269 614.679 316.135 614.205 316.135C613.574 316.135 613.113 316.321 612.821 316.694C612.529 317.066 612.383 317.69 612.383 318.566V322.064H610.891V315.043H612.059L612.269 315.964H612.345C612.557 315.63 612.857 315.371 613.246 315.189C613.636 315.007 614.067 314.917 614.541 314.917C616.226 314.917 617.068 315.773 617.068 317.487V322.064ZM620.635 322.064H619.143V315.043H620.635V322.064ZM619.054 313.184C619.054 312.917 619.126 312.712 619.27 312.568C619.418 312.424 619.628 312.352 619.899 312.352C620.161 312.352 620.364 312.424 620.508 312.568C620.656 312.712 620.73 312.917 620.73 313.184C620.73 313.438 620.656 313.639 620.508 313.787C620.364 313.931 620.161 314.002 619.899 314.002C619.628 314.002 619.418 313.931 619.27 313.787C619.126 313.639 619.054 313.438 619.054 313.184ZM628.95 322.064H627.452V317.748C627.452 317.206 627.342 316.802 627.122 316.535C626.906 316.269 626.562 316.135 626.088 316.135C625.457 316.135 624.996 316.321 624.704 316.694C624.412 317.066 624.266 317.69 624.266 318.566V322.064H622.774V315.043H623.942L624.152 315.964H624.228C624.439 315.63 624.74 315.371 625.129 315.189C625.518 315.007 625.95 314.917 626.424 314.917C628.108 314.917 628.95 315.773 628.95 317.487V322.064ZM636.955 315.043V315.862L635.755 316.084C635.865 316.233 635.956 316.415 636.028 316.63C636.1 316.846 636.136 317.075 636.136 317.316C636.136 318.04 635.886 318.609 635.387 319.023C634.888 319.438 634.2 319.646 633.324 319.646C633.1 319.646 632.897 319.629 632.715 319.595C632.393 319.794 632.232 320.026 632.232 320.293C632.232 320.454 632.306 320.574 632.454 320.655C632.607 320.735 632.884 320.775 633.286 320.775H634.511C635.285 320.775 635.874 320.94 636.276 321.271C636.678 321.601 636.879 322.077 636.879 322.699C636.879 323.494 636.551 324.108 635.895 324.54C635.239 324.971 634.291 325.187 633.051 325.187C632.095 325.187 631.365 325.018 630.861 324.679C630.358 324.341 630.106 323.858 630.106 323.232C630.106 322.8 630.241 322.436 630.512 322.14C630.787 321.848 631.17 321.645 631.661 321.531C631.462 321.446 631.297 321.311 631.166 321.125C631.039 320.934 630.975 320.735 630.975 320.528C630.975 320.265 631.049 320.043 631.198 319.861C631.346 319.679 631.566 319.5 631.858 319.322C631.494 319.165 631.198 318.911 630.969 318.56C630.745 318.205 630.633 317.79 630.633 317.316C630.633 316.554 630.872 315.964 631.35 315.545C631.832 315.126 632.518 314.917 633.406 314.917C633.605 314.917 633.813 314.931 634.029 314.961C634.249 314.986 634.414 315.014 634.524 315.043H636.955ZM631.439 323.156C631.439 323.477 631.583 323.725 631.87 323.898C632.162 324.072 632.571 324.159 633.095 324.159C633.908 324.159 634.513 324.042 634.911 323.81C635.309 323.577 635.508 323.268 635.508 322.883C635.508 322.578 635.398 322.36 635.177 322.229C634.962 322.102 634.558 322.039 633.965 322.039H632.835C632.408 322.039 632.067 322.138 631.813 322.337C631.564 322.54 631.439 322.813 631.439 323.156ZM632.08 317.316C632.08 317.756 632.192 318.095 632.416 318.332C632.645 318.569 632.971 318.687 633.394 318.687C634.257 318.687 634.689 318.226 634.689 317.303C634.689 316.846 634.581 316.495 634.365 316.25C634.153 316 633.83 315.875 633.394 315.875C632.962 315.875 632.634 315.998 632.41 316.243C632.19 316.489 632.08 316.846 632.08 317.316ZM642.979 320.064C642.979 320.75 642.729 321.277 642.23 321.645C641.73 322.009 641.015 322.191 640.084 322.191C639.149 322.191 638.398 322.049 637.831 321.766V320.477C638.656 320.858 639.424 321.048 640.135 321.048C641.053 321.048 641.512 320.771 641.512 320.217C641.512 320.039 641.462 319.891 641.36 319.772C641.259 319.654 641.091 319.531 640.859 319.404C640.626 319.277 640.302 319.133 639.887 318.973C639.079 318.66 638.531 318.346 638.243 318.033C637.96 317.72 637.818 317.314 637.818 316.814C637.818 316.214 638.059 315.748 638.542 315.418C639.028 315.084 639.689 314.917 640.522 314.917C641.347 314.917 642.128 315.084 642.865 315.418L642.382 316.542C641.625 316.228 640.988 316.072 640.471 316.072C639.684 316.072 639.291 316.296 639.291 316.745C639.291 316.965 639.392 317.151 639.595 317.303C639.803 317.456 640.251 317.665 640.941 317.932C641.521 318.156 641.942 318.361 642.204 318.547C642.467 318.734 642.661 318.949 642.788 319.195C642.915 319.436 642.979 319.726 642.979 320.064ZM646.089 322.064H644.597V315.043H646.089V322.064ZM644.509 313.184C644.509 312.917 644.58 312.712 644.724 312.568C644.872 312.424 645.082 312.352 645.353 312.352C645.615 312.352 645.818 312.424 645.962 312.568C646.11 312.712 646.184 312.917 646.184 313.184C646.184 313.438 646.11 313.639 645.962 313.787C645.818 313.931 645.615 314.002 645.353 314.002C645.082 314.002 644.872 313.931 644.724 313.787C644.58 313.639 644.509 313.438 644.509 313.184ZM650.596 322.191C649.72 322.191 649.037 321.874 648.546 321.239C648.055 320.604 647.809 319.713 647.809 318.566C647.809 317.415 648.057 316.52 648.552 315.881C649.051 315.238 649.741 314.917 650.621 314.917C651.544 314.917 652.246 315.257 652.729 315.938H652.805C652.733 315.435 652.697 315.037 652.697 314.745V312.187H654.195V322.064H653.027L652.767 321.144H652.697C652.219 321.842 651.518 322.191 650.596 322.191ZM650.996 320.985C651.609 320.985 652.056 320.813 652.335 320.471C652.615 320.124 652.758 319.563 652.767 318.789V318.579C652.767 317.695 652.623 317.066 652.335 316.694C652.047 316.321 651.597 316.135 650.983 316.135C650.458 316.135 650.054 316.349 649.771 316.776C649.487 317.2 649.345 317.805 649.345 318.592C649.345 319.37 649.483 319.965 649.758 320.375C650.033 320.782 650.446 320.985 650.996 320.985ZM659.394 322.191C658.302 322.191 657.447 321.874 656.829 321.239C656.216 320.6 655.909 319.722 655.909 318.604C655.909 317.458 656.195 316.556 656.766 315.9C657.337 315.244 658.122 314.917 659.121 314.917C660.048 314.917 660.78 315.198 661.317 315.761C661.855 316.324 662.123 317.098 662.123 318.084V318.89H657.445C657.466 319.571 657.65 320.096 657.997 320.464C658.344 320.828 658.833 321.01 659.464 321.01C659.878 321.01 660.263 320.972 660.619 320.896C660.979 320.816 661.364 320.684 661.774 320.502V321.715C661.41 321.888 661.042 322.011 660.67 322.083C660.297 322.155 659.872 322.191 659.394 322.191ZM659.121 316.046C658.647 316.046 658.266 316.197 657.978 316.497C657.695 316.798 657.525 317.236 657.47 317.811H660.657C660.649 317.231 660.509 316.793 660.238 316.497C659.967 316.197 659.595 316.046 659.121 316.046Z" fill="#262626"/>
                                <path class="toowong-svg text" d="M431.781 349.046H430.264V341.067H427.535V339.765H434.511V341.067H431.781V349.046ZM442.008 345.523C442.008 346.67 441.713 347.565 441.125 348.208C440.537 348.851 439.718 349.173 438.669 349.173C438.013 349.173 437.433 349.024 436.929 348.728C436.426 348.432 436.039 348.007 435.768 347.452C435.497 346.898 435.362 346.255 435.362 345.523C435.362 344.384 435.654 343.496 436.238 342.857C436.822 342.218 437.645 341.898 438.707 341.898C439.722 341.898 440.526 342.226 441.119 342.882C441.711 343.534 442.008 344.414 442.008 345.523ZM436.898 345.523C436.898 347.143 437.497 347.954 438.694 347.954C439.879 347.954 440.471 347.143 440.471 345.523C440.471 343.919 439.875 343.117 438.681 343.117C438.055 343.117 437.6 343.324 437.317 343.739C437.037 344.154 436.898 344.748 436.898 345.523ZM449.955 345.523C449.955 346.67 449.661 347.565 449.073 348.208C448.484 348.851 447.665 349.173 446.616 349.173C445.96 349.173 445.38 349.024 444.877 348.728C444.373 348.432 443.986 348.007 443.715 347.452C443.444 346.898 443.309 346.255 443.309 345.523C443.309 344.384 443.601 343.496 444.185 342.857C444.769 342.218 445.592 341.898 446.654 341.898C447.67 341.898 448.474 342.226 449.066 342.882C449.659 343.534 449.955 344.414 449.955 345.523ZM444.845 345.523C444.845 347.143 445.444 347.954 446.641 347.954C447.826 347.954 448.419 347.143 448.419 345.523C448.419 343.919 447.822 343.117 446.629 343.117C446.002 343.117 445.547 343.324 445.264 343.739C444.985 344.154 444.845 344.748 444.845 345.523ZM457.432 349.046L456.525 345.77C456.415 345.423 456.216 344.617 455.928 343.352H455.871C455.625 344.494 455.431 345.305 455.287 345.783L454.354 349.046H452.703L450.736 342.025H452.259L453.154 345.485C453.357 346.339 453.501 347.072 453.586 347.681H453.624C453.666 347.372 453.73 347.019 453.814 346.621C453.903 346.219 453.979 345.918 454.043 345.719L455.109 342.025H456.747L457.781 345.719C457.845 345.927 457.923 346.244 458.016 346.672C458.114 347.099 458.171 347.431 458.188 347.668H458.239C458.302 347.148 458.45 346.42 458.683 345.485L459.591 342.025H461.089L459.108 349.046H457.432ZM468.528 345.523C468.528 346.67 468.234 347.565 467.646 348.208C467.058 348.851 466.239 349.173 465.189 349.173C464.533 349.173 463.954 349.024 463.45 348.728C462.946 348.432 462.559 348.007 462.288 347.452C462.017 346.898 461.882 346.255 461.882 345.523C461.882 344.384 462.174 343.496 462.758 342.857C463.342 342.218 464.165 341.898 465.227 341.898C466.243 341.898 467.047 342.226 467.639 342.882C468.232 343.534 468.528 344.414 468.528 345.523ZM463.418 345.523C463.418 347.143 464.017 347.954 465.215 347.954C466.399 347.954 466.992 347.143 466.992 345.523C466.992 343.919 466.395 343.117 465.202 343.117C464.576 343.117 464.121 343.324 463.837 343.739C463.558 344.154 463.418 344.748 463.418 345.523ZM476.425 349.046H474.927V344.729C474.927 344.188 474.816 343.783 474.596 343.517C474.381 343.25 474.036 343.117 473.562 343.117C472.931 343.117 472.47 343.303 472.178 343.676C471.886 344.048 471.74 344.672 471.74 345.548V349.046H470.248V342.025H471.416L471.626 342.946H471.702C471.913 342.611 472.214 342.353 472.603 342.171C472.993 341.989 473.424 341.898 473.898 341.898C475.582 341.898 476.425 342.755 476.425 344.469V349.046ZM484.429 342.025V342.844L483.229 343.066C483.339 343.214 483.43 343.396 483.502 343.612C483.574 343.828 483.61 344.056 483.61 344.298C483.61 345.021 483.36 345.59 482.861 346.005C482.362 346.42 481.674 346.627 480.798 346.627C480.574 346.627 480.371 346.61 480.189 346.576C479.867 346.775 479.706 347.008 479.706 347.275C479.706 347.435 479.78 347.556 479.928 347.636C480.081 347.717 480.358 347.757 480.76 347.757H481.985C482.76 347.757 483.348 347.922 483.75 348.252C484.152 348.582 484.353 349.058 484.353 349.68C484.353 350.476 484.025 351.09 483.369 351.521C482.713 351.953 481.765 352.169 480.525 352.169C479.569 352.169 478.839 351.999 478.335 351.661C477.832 351.322 477.58 350.84 477.58 350.214C477.58 349.782 477.715 349.418 477.986 349.122C478.261 348.83 478.644 348.627 479.135 348.512C478.936 348.428 478.771 348.292 478.64 348.106C478.513 347.916 478.449 347.717 478.449 347.51C478.449 347.247 478.524 347.025 478.672 346.843C478.82 346.661 479.04 346.481 479.332 346.303C478.968 346.147 478.672 345.893 478.443 345.542C478.219 345.186 478.107 344.772 478.107 344.298C478.107 343.536 478.346 342.946 478.824 342.527C479.306 342.108 479.992 341.898 480.881 341.898C481.08 341.898 481.287 341.913 481.503 341.943C481.723 341.968 481.888 341.996 481.998 342.025H484.429ZM478.913 350.137C478.913 350.459 479.057 350.707 479.344 350.88C479.636 351.054 480.045 351.14 480.57 351.14C481.382 351.14 481.987 351.024 482.385 350.791C482.783 350.559 482.982 350.25 482.982 349.865C482.982 349.56 482.872 349.342 482.652 349.211C482.436 349.084 482.032 349.02 481.439 349.02H480.309C479.882 349.02 479.541 349.12 479.287 349.319C479.038 349.522 478.913 349.795 478.913 350.137ZM479.554 344.298C479.554 344.738 479.666 345.076 479.89 345.313C480.119 345.55 480.445 345.669 480.868 345.669C481.731 345.669 482.163 345.207 482.163 344.285C482.163 343.828 482.055 343.477 481.839 343.231C481.628 342.982 481.304 342.857 480.868 342.857C480.436 342.857 480.108 342.979 479.884 343.225C479.664 343.47 479.554 343.828 479.554 344.298Z" fill="#262626"/>
                                <path class="gabba-svg text" d="M516.826 365.997H515.309V358.018H512.58V356.717H519.556V358.018H516.826V365.997ZM527.001 365.997H525.503V361.681C525.503 361.139 525.393 360.735 525.173 360.468C524.958 360.202 524.613 360.068 524.139 360.068C523.512 360.068 523.051 360.257 522.755 360.633C522.463 361.006 522.317 361.632 522.317 362.512V365.997H520.825V356.12H522.317V358.627C522.317 359.029 522.292 359.459 522.241 359.916H522.336C522.539 359.577 522.82 359.315 523.18 359.129C523.544 358.943 523.967 358.85 524.45 358.85C526.151 358.85 527.001 359.707 527.001 361.42V365.997ZM532.143 366.124C531.051 366.124 530.196 365.807 529.579 365.172C528.965 364.533 528.658 363.655 528.658 362.538C528.658 361.391 528.944 360.489 529.515 359.833C530.086 359.178 530.871 358.85 531.87 358.85C532.797 358.85 533.529 359.131 534.066 359.694C534.604 360.257 534.873 361.031 534.873 362.017V362.823H530.194C530.215 363.505 530.4 364.029 530.747 364.397C531.094 364.761 531.582 364.943 532.213 364.943C532.628 364.943 533.013 364.905 533.368 364.829C533.728 364.749 534.113 364.618 534.523 364.436V365.648C534.16 365.821 533.791 365.944 533.419 366.016C533.047 366.088 532.621 366.124 532.143 366.124ZM531.87 359.979C531.396 359.979 531.015 360.13 530.728 360.43C530.444 360.731 530.275 361.169 530.22 361.744H533.406C533.398 361.164 533.258 360.726 532.987 360.43C532.716 360.13 532.344 359.979 531.87 359.979ZM543.899 360.963H547.314V365.623C546.755 365.805 546.218 365.934 545.702 366.01C545.19 366.086 544.635 366.124 544.039 366.124C542.634 366.124 541.55 365.709 540.789 364.88C540.027 364.046 539.646 362.872 539.646 361.357C539.646 359.863 540.076 358.695 540.935 357.853C541.794 357.007 542.976 356.583 544.483 356.583C545.452 356.583 546.37 356.77 547.238 357.142L546.705 358.405C545.951 358.058 545.198 357.885 544.445 357.885C543.455 357.885 542.672 358.196 542.096 358.818C541.521 359.44 541.233 360.291 541.233 361.37C541.233 362.504 541.491 363.367 542.007 363.959C542.528 364.548 543.275 364.842 544.248 364.842C544.739 364.842 545.264 364.78 545.822 364.658V362.265H543.899V360.963ZM553.782 365.997L553.484 365.02H553.433C553.095 365.447 552.754 365.739 552.411 365.896C552.068 366.048 551.628 366.124 551.091 366.124C550.401 366.124 549.861 365.938 549.472 365.565C549.087 365.193 548.895 364.666 548.895 363.985C548.895 363.261 549.163 362.715 549.701 362.347C550.238 361.979 551.057 361.778 552.157 361.744L553.37 361.706V361.332C553.37 360.883 553.264 360.549 553.052 360.329C552.845 360.104 552.521 359.992 552.081 359.992C551.721 359.992 551.376 360.045 551.046 360.151C550.716 360.257 550.399 360.382 550.094 360.525L549.612 359.459C549.993 359.26 550.41 359.11 550.862 359.008C551.315 358.903 551.743 358.85 552.145 358.85C553.037 358.85 553.71 359.044 554.163 359.434C554.62 359.823 554.849 360.434 554.849 361.268V365.997H553.782ZM551.561 364.981C552.102 364.981 552.536 364.831 552.862 364.531C553.192 364.226 553.357 363.801 553.357 363.255V362.646L552.456 362.684C551.753 362.709 551.241 362.827 550.919 363.039C550.602 363.246 550.443 363.566 550.443 363.998C550.443 364.311 550.536 364.554 550.723 364.728C550.909 364.897 551.188 364.981 551.561 364.981ZM560.517 358.85C561.393 358.85 562.074 359.167 562.561 359.802C563.052 360.437 563.297 361.327 563.297 362.474C563.297 363.625 563.05 364.522 562.555 365.166C562.06 365.805 561.372 366.124 560.492 366.124C559.603 366.124 558.913 365.805 558.422 365.166H558.321L558.048 365.997H556.931V356.12H558.422V358.469C558.422 358.642 558.414 358.9 558.397 359.243C558.38 359.586 558.367 359.804 558.359 359.897H558.422C558.896 359.199 559.595 358.85 560.517 358.85ZM560.13 360.068C559.529 360.068 559.095 360.246 558.829 360.602C558.566 360.953 558.431 361.543 558.422 362.373V362.474C558.422 363.329 558.558 363.949 558.829 364.334C559.099 364.715 559.542 364.905 560.155 364.905C560.684 364.905 561.084 364.696 561.355 364.277C561.63 363.858 561.768 363.253 561.768 362.461C561.768 360.866 561.222 360.068 560.13 360.068ZM568.617 358.85C569.493 358.85 570.174 359.167 570.661 359.802C571.152 360.437 571.397 361.327 571.397 362.474C571.397 363.625 571.149 364.522 570.654 365.166C570.159 365.805 569.472 366.124 568.591 366.124C567.703 366.124 567.013 365.805 566.522 365.166H566.42L566.147 365.997H565.03V356.12H566.522V358.469C566.522 358.642 566.514 358.9 566.497 359.243C566.48 359.586 566.467 359.804 566.458 359.897H566.522C566.996 359.199 567.694 358.85 568.617 358.85ZM568.229 360.068C567.629 360.068 567.195 360.246 566.928 360.602C566.666 360.953 566.53 361.543 566.522 362.373V362.474C566.522 363.329 566.657 363.949 566.928 364.334C567.199 364.715 567.641 364.905 568.255 364.905C568.784 364.905 569.184 364.696 569.455 364.277C569.73 363.858 569.867 363.253 569.867 362.461C569.867 360.866 569.321 360.068 568.229 360.068ZM577.522 365.997L577.224 365.02H577.173C576.835 365.447 576.494 365.739 576.151 365.896C575.809 366.048 575.368 366.124 574.831 366.124C574.141 366.124 573.602 365.938 573.212 365.565C572.827 365.193 572.635 364.666 572.635 363.985C572.635 363.261 572.903 362.715 573.441 362.347C573.978 361.979 574.797 361.778 575.897 361.744L577.11 361.706V361.332C577.11 360.883 577.004 360.549 576.792 360.329C576.585 360.104 576.261 359.992 575.821 359.992C575.462 359.992 575.117 360.045 574.787 360.151C574.457 360.257 574.139 360.382 573.834 360.525L573.352 359.459C573.733 359.26 574.15 359.11 574.603 359.008C575.055 358.903 575.483 358.85 575.885 358.85C576.778 358.85 577.451 359.044 577.903 359.434C578.36 359.823 578.589 360.434 578.589 361.268V365.997H577.522ZM575.301 364.981C575.842 364.981 576.276 364.831 576.602 364.531C576.932 364.226 577.097 363.801 577.097 363.255V362.646L576.196 362.684C575.493 362.709 574.981 362.827 574.66 363.039C574.342 363.246 574.184 363.566 574.184 363.998C574.184 364.311 574.277 364.554 574.463 364.728C574.649 364.897 574.928 364.981 575.301 364.981Z" fill="#262626"/>
                                <path class="holland-svg text" d="M569.612 399.997H568.088V395.814H563.81V399.997H562.293V390.717H563.81V394.512H568.088V390.717H569.612V399.997ZM578.124 396.474C578.124 397.621 577.83 398.516 577.242 399.159C576.653 399.802 575.835 400.124 574.785 400.124C574.129 400.124 573.549 399.976 573.046 399.679C572.542 399.383 572.155 398.958 571.884 398.404C571.613 397.849 571.478 397.206 571.478 396.474C571.478 395.336 571.77 394.447 572.354 393.808C572.938 393.169 573.761 392.849 574.823 392.849C575.839 392.849 576.643 393.177 577.235 393.833C577.828 394.485 578.124 395.365 578.124 396.474ZM573.014 396.474C573.014 398.095 573.613 398.905 574.811 398.905C575.995 398.905 576.588 398.095 576.588 396.474C576.588 394.87 575.991 394.068 574.798 394.068C574.172 394.068 573.717 394.275 573.433 394.69C573.154 395.105 573.014 395.699 573.014 396.474ZM581.336 399.997H579.844V390.12H581.336V399.997ZM584.967 399.997H583.475V390.12H584.967V399.997ZM591.499 399.997L591.2 399.019H591.149C590.811 399.447 590.47 399.739 590.127 399.895C589.785 400.048 589.345 400.124 588.807 400.124C588.117 400.124 587.578 399.938 587.188 399.565C586.803 399.193 586.611 398.666 586.611 397.985C586.611 397.261 586.88 396.715 587.417 396.347C587.954 395.979 588.773 395.778 589.874 395.744L591.086 395.706V395.331C591.086 394.883 590.98 394.548 590.769 394.328C590.561 394.104 590.237 393.992 589.797 393.992C589.438 393.992 589.093 394.045 588.763 394.151C588.433 394.256 588.115 394.381 587.811 394.525L587.328 393.459C587.709 393.26 588.126 393.11 588.579 393.008C589.031 392.902 589.459 392.849 589.861 392.849C590.754 392.849 591.427 393.044 591.879 393.433C592.336 393.823 592.565 394.434 592.565 395.268V399.997H591.499ZM589.277 398.981C589.819 398.981 590.252 398.831 590.578 398.531C590.908 398.226 591.073 397.801 591.073 397.255V396.645L590.172 396.683C589.469 396.709 588.957 396.827 588.636 397.039C588.318 397.246 588.16 397.566 588.16 397.997C588.16 398.31 588.253 398.554 588.439 398.727C588.625 398.897 588.904 398.981 589.277 398.981ZM600.823 399.997H599.325V395.68C599.325 395.139 599.215 394.735 598.995 394.468C598.779 394.201 598.434 394.068 597.96 394.068C597.33 394.068 596.869 394.254 596.577 394.627C596.285 394.999 596.139 395.623 596.139 396.499V399.997H594.647V392.976H595.815L596.024 393.897H596.101C596.312 393.562 596.613 393.304 597.002 393.122C597.391 392.94 597.823 392.849 598.297 392.849C599.981 392.849 600.823 393.706 600.823 395.42V399.997ZM605.267 400.124C604.391 400.124 603.707 399.806 603.216 399.172C602.725 398.537 602.48 397.646 602.48 396.499C602.48 395.348 602.728 394.453 603.223 393.814C603.722 393.171 604.412 392.849 605.292 392.849C606.215 392.849 606.917 393.19 607.399 393.871H607.476C607.404 393.368 607.368 392.97 607.368 392.678V390.12H608.866V399.997H607.698L607.438 399.076H607.368C606.889 399.775 606.189 400.124 605.267 400.124ZM605.667 398.918C606.28 398.918 606.727 398.746 607.006 398.404C607.285 398.057 607.429 397.496 607.438 396.721V396.512C607.438 395.628 607.294 394.999 607.006 394.627C606.718 394.254 606.267 394.068 605.654 394.068C605.129 394.068 604.725 394.282 604.441 394.709C604.158 395.132 604.016 395.738 604.016 396.525C604.016 397.303 604.154 397.898 604.429 398.308C604.704 398.715 605.116 398.918 605.667 398.918ZM578.575 406.522C578.575 407.491 578.257 408.234 577.623 408.75C576.988 409.267 576.084 409.525 574.912 409.525H573.947V412.997H572.43V403.717H575.103C576.262 403.717 577.13 403.954 577.705 404.427C578.285 404.901 578.575 405.6 578.575 406.522ZM573.947 408.249H574.753C575.532 408.249 576.103 408.113 576.467 407.843C576.831 407.572 577.013 407.149 577.013 406.573C577.013 406.04 576.85 405.642 576.524 405.38C576.199 405.117 575.691 404.986 575.001 404.986H573.947V408.249ZM584.662 412.997L584.364 412.019H584.313C583.974 412.447 583.634 412.739 583.291 412.895C582.948 413.048 582.508 413.124 581.971 413.124C581.281 413.124 580.741 412.938 580.352 412.565C579.967 412.193 579.774 411.666 579.774 410.985C579.774 410.261 580.043 409.715 580.581 409.347C581.118 408.979 581.937 408.778 583.037 408.744L584.25 408.706V408.331C584.25 407.883 584.144 407.548 583.932 407.328C583.725 407.104 583.401 406.992 582.961 406.992C582.601 406.992 582.256 407.045 581.926 407.151C581.596 407.256 581.279 407.381 580.974 407.525L580.492 406.459C580.873 406.26 581.289 406.11 581.742 406.008C582.195 405.902 582.622 405.849 583.024 405.849C583.917 405.849 584.59 406.044 585.043 406.433C585.5 406.823 585.729 407.434 585.729 408.268V412.997H584.662ZM582.44 411.981C582.982 411.981 583.416 411.831 583.742 411.531C584.072 411.226 584.237 410.801 584.237 410.255V409.645L583.335 409.683C582.633 409.709 582.121 409.827 581.799 410.039C581.482 410.246 581.323 410.566 581.323 410.997C581.323 411.31 581.416 411.554 581.603 411.727C581.789 411.897 582.068 411.981 582.44 411.981ZM591.372 405.849C591.672 405.849 591.92 405.871 592.114 405.913L591.968 407.303C591.757 407.252 591.537 407.227 591.308 407.227C590.711 407.227 590.227 407.421 589.854 407.811C589.486 408.2 589.302 408.706 589.302 409.328V412.997H587.811V405.976H588.979L589.175 407.214H589.251C589.484 406.795 589.787 406.463 590.159 406.218C590.536 405.972 590.94 405.849 591.372 405.849ZM594.863 409.29L595.707 408.236L597.827 405.976H599.547L596.723 408.991L599.725 412.997H597.973L595.72 409.918L594.901 410.591V412.997H593.422V403.12H594.901V407.938L594.825 409.29H594.863Z" fill="#262626"/>
                                <path class="wishart-svg text" d="M620.894 476.996H619.244L617.669 471.461C617.602 471.22 617.517 470.873 617.416 470.42C617.314 469.963 617.253 469.646 617.231 469.468C617.189 469.739 617.119 470.09 617.022 470.522C616.929 470.953 616.851 471.275 616.787 471.486L615.251 476.996H613.601L612.401 472.35L611.182 467.716H612.731L614.058 473.124C614.265 473.992 614.413 474.758 614.502 475.422C614.549 475.062 614.618 474.66 614.711 474.216C614.805 473.772 614.889 473.412 614.965 473.137L616.476 467.716H617.98L619.529 473.162C619.677 473.666 619.834 474.419 619.999 475.422C620.062 474.817 620.215 474.047 620.456 473.111L621.776 467.716H623.312L620.894 476.996ZM625.966 476.996H624.474V469.976H625.966V476.996ZM624.385 468.116C624.385 467.849 624.457 467.644 624.601 467.5C624.749 467.356 624.959 467.284 625.229 467.284C625.492 467.284 625.695 467.356 625.839 467.5C625.987 467.644 626.061 467.849 626.061 468.116C626.061 468.37 625.987 468.571 625.839 468.719C625.695 468.863 625.492 468.935 625.229 468.935C624.959 468.935 624.749 468.863 624.601 468.719C624.457 468.571 624.385 468.37 624.385 468.116ZM632.821 474.997C632.821 475.682 632.572 476.209 632.072 476.577C631.573 476.941 630.858 477.123 629.927 477.123C628.992 477.123 628.24 476.981 627.673 476.698V475.409C628.499 475.79 629.267 475.981 629.978 475.981C630.896 475.981 631.355 475.703 631.355 475.149C631.355 474.971 631.304 474.823 631.203 474.705C631.101 474.586 630.934 474.464 630.701 474.337C630.468 474.21 630.145 474.066 629.73 473.905C628.922 473.592 628.374 473.279 628.086 472.965C627.802 472.652 627.661 472.246 627.661 471.747C627.661 471.146 627.902 470.68 628.384 470.35C628.871 470.016 629.531 469.849 630.365 469.849C631.19 469.849 631.971 470.016 632.707 470.35L632.225 471.474C631.467 471.161 630.83 471.004 630.314 471.004C629.527 471.004 629.133 471.228 629.133 471.677C629.133 471.897 629.235 472.083 629.438 472.235C629.645 472.388 630.094 472.597 630.784 472.864C631.363 473.088 631.785 473.293 632.047 473.48C632.309 473.666 632.504 473.882 632.631 474.127C632.758 474.368 632.821 474.658 632.821 474.997ZM640.616 476.996H639.118V472.68C639.118 472.138 639.008 471.734 638.788 471.467C638.572 471.201 638.227 471.068 637.753 471.068C637.127 471.068 636.666 471.256 636.37 471.632C636.078 472.005 635.932 472.631 635.932 473.511V476.996H634.44V467.119H635.932V469.627C635.932 470.029 635.906 470.458 635.855 470.915H635.951C636.154 470.577 636.435 470.314 636.795 470.128C637.159 469.942 637.582 469.849 638.064 469.849C639.766 469.849 640.616 470.706 640.616 472.42V476.996ZM647.084 476.996L646.786 476.019H646.735C646.397 476.446 646.056 476.738 645.713 476.895C645.371 477.047 644.931 477.123 644.393 477.123C643.703 477.123 643.164 476.937 642.774 476.565C642.389 476.192 642.197 475.665 642.197 474.984C642.197 474.26 642.465 473.714 643.003 473.346C643.54 472.978 644.359 472.777 645.459 472.743L646.672 472.705V472.331C646.672 471.882 646.566 471.548 646.354 471.328C646.147 471.103 645.823 470.991 645.383 470.991C645.024 470.991 644.679 471.044 644.349 471.15C644.019 471.256 643.701 471.381 643.396 471.525L642.914 470.458C643.295 470.259 643.712 470.109 644.165 470.007C644.617 469.902 645.045 469.849 645.447 469.849C646.34 469.849 647.013 470.043 647.465 470.433C647.922 470.822 648.151 471.434 648.151 472.267V476.996H647.084ZM644.863 475.981C645.404 475.981 645.838 475.83 646.164 475.53C646.494 475.225 646.659 474.8 646.659 474.254V473.645L645.758 473.683C645.055 473.708 644.543 473.827 644.222 474.038C643.904 474.246 643.746 474.565 643.746 474.997C643.746 475.31 643.839 475.553 644.025 475.727C644.211 475.896 644.49 475.981 644.863 475.981ZM653.794 469.849C654.094 469.849 654.342 469.87 654.537 469.912L654.391 471.302C654.179 471.252 653.959 471.226 653.73 471.226C653.134 471.226 652.649 471.421 652.277 471.81C651.909 472.2 651.725 472.705 651.725 473.327V476.996H650.233V469.976H651.401L651.598 471.214H651.674C651.907 470.795 652.209 470.462 652.582 470.217C652.958 469.971 653.362 469.849 653.794 469.849ZM658.459 475.917C658.823 475.917 659.187 475.86 659.551 475.746V476.869C659.386 476.941 659.173 477 658.91 477.047C658.652 477.098 658.383 477.123 658.104 477.123C656.691 477.123 655.984 476.378 655.984 474.889V471.106H655.025V470.445L656.054 469.9L656.562 468.414H657.482V469.976H659.481V471.106H657.482V474.863C657.482 475.223 657.571 475.49 657.749 475.663C657.931 475.832 658.167 475.917 658.459 475.917Z" fill="#262626"/>
                                <path class="macgregor-svg text" d="M588.683 529.996L585.992 522.245H585.941C586.013 523.396 586.049 524.476 586.049 525.483V529.996H584.671V520.716H586.811L589.388 528.098H589.426L592.079 520.716H594.225V529.996H592.765V525.406C592.765 524.945 592.775 524.344 592.796 523.604C592.822 522.863 592.843 522.415 592.86 522.258H592.809L590.022 529.996H588.683ZM600.902 529.996L600.604 529.018H600.553C600.215 529.446 599.874 529.738 599.531 529.894C599.188 530.047 598.748 530.123 598.211 530.123C597.521 530.123 596.982 529.937 596.592 529.564C596.207 529.192 596.015 528.665 596.015 527.984C596.015 527.26 596.283 526.714 596.821 526.346C597.358 525.978 598.177 525.777 599.277 525.743L600.49 525.705V525.33C600.49 524.882 600.384 524.547 600.172 524.327C599.965 524.103 599.641 523.991 599.201 523.991C598.841 523.991 598.497 524.044 598.167 524.15C597.836 524.255 597.519 524.38 597.214 524.524L596.732 523.458C597.113 523.259 597.53 523.109 597.982 523.007C598.435 522.901 598.863 522.848 599.265 522.848C600.158 522.848 600.83 523.043 601.283 523.432C601.74 523.822 601.969 524.433 601.969 525.267V529.996H600.902ZM598.681 528.98C599.222 528.98 599.656 528.83 599.982 528.53C600.312 528.225 600.477 527.8 600.477 527.254V526.644L599.576 526.682C598.873 526.708 598.361 526.826 598.04 527.038C597.722 527.245 597.563 527.565 597.563 527.996C597.563 528.309 597.657 528.553 597.843 528.726C598.029 528.896 598.308 528.98 598.681 528.98ZM606.882 530.123C605.82 530.123 605.011 529.814 604.457 529.196C603.907 528.574 603.632 527.683 603.632 526.524C603.632 525.343 603.92 524.435 604.495 523.801C605.075 523.166 605.911 522.848 607.002 522.848C607.743 522.848 608.41 522.986 609.002 523.261L608.551 524.461C607.921 524.215 607.4 524.093 606.99 524.093C605.775 524.093 605.168 524.899 605.168 526.511C605.168 527.298 605.318 527.891 605.619 528.288C605.923 528.682 606.368 528.879 606.952 528.879C607.616 528.879 608.244 528.714 608.837 528.384V529.685C608.57 529.841 608.285 529.954 607.98 530.021C607.68 530.089 607.313 530.123 606.882 530.123ZM616.416 522.975V523.794L615.216 524.016C615.326 524.164 615.417 524.346 615.489 524.562C615.561 524.778 615.597 525.007 615.597 525.248C615.597 525.971 615.347 526.541 614.848 526.955C614.349 527.37 613.661 527.577 612.785 527.577C612.561 527.577 612.358 527.56 612.176 527.527C611.854 527.726 611.693 527.958 611.693 528.225C611.693 528.386 611.767 528.506 611.916 528.587C612.068 528.667 612.345 528.707 612.747 528.707H613.972C614.747 528.707 615.335 528.872 615.737 529.202C616.139 529.532 616.34 530.009 616.34 530.631C616.34 531.426 616.012 532.04 615.356 532.471C614.7 532.903 613.752 533.119 612.512 533.119C611.556 533.119 610.826 532.95 610.322 532.611C609.819 532.273 609.567 531.79 609.567 531.164C609.567 530.732 609.702 530.368 609.973 530.072C610.248 529.78 610.631 529.577 611.122 529.463C610.923 529.378 610.758 529.243 610.627 529.056C610.5 528.866 610.437 528.667 610.437 528.46C610.437 528.197 610.511 527.975 610.659 527.793C610.807 527.611 611.027 527.431 611.319 527.254C610.955 527.097 610.659 526.843 610.43 526.492C610.206 526.136 610.094 525.722 610.094 525.248C610.094 524.486 610.333 523.896 610.811 523.477C611.293 523.058 611.979 522.848 612.868 522.848C613.067 522.848 613.274 522.863 613.49 522.893C613.71 522.918 613.875 522.946 613.985 522.975H616.416ZM610.9 531.088C610.9 531.409 611.044 531.657 611.332 531.83C611.624 532.004 612.032 532.091 612.557 532.091C613.369 532.091 613.974 531.974 614.372 531.741C614.77 531.509 614.969 531.2 614.969 530.815C614.969 530.51 614.859 530.292 614.639 530.161C614.423 530.034 614.019 529.97 613.426 529.97H612.296C611.869 529.97 611.528 530.07 611.274 530.269C611.025 530.472 610.9 530.745 610.9 531.088ZM611.541 525.248C611.541 525.688 611.653 526.026 611.877 526.263C612.106 526.5 612.432 526.619 612.855 526.619C613.718 526.619 614.15 526.158 614.15 525.235C614.15 524.778 614.042 524.427 613.826 524.181C613.615 523.932 613.291 523.807 612.855 523.807C612.423 523.807 612.095 523.93 611.871 524.175C611.651 524.42 611.541 524.778 611.541 525.248ZM621.285 522.848C621.585 522.848 621.833 522.87 622.027 522.912L621.881 524.302C621.67 524.251 621.45 524.226 621.221 524.226C620.625 524.226 620.14 524.42 619.768 524.81C619.399 525.199 619.215 525.705 619.215 526.327V529.996H617.724V522.975H618.892L619.088 524.213H619.165C619.397 523.794 619.7 523.462 620.072 523.217C620.449 522.971 620.853 522.848 621.285 522.848ZM626.401 530.123C625.309 530.123 624.454 529.805 623.836 529.171C623.223 528.532 622.916 527.654 622.916 526.536C622.916 525.39 623.202 524.488 623.773 523.832C624.344 523.176 625.129 522.848 626.128 522.848C627.055 522.848 627.787 523.13 628.324 523.693C628.862 524.255 629.13 525.03 629.13 526.016V526.822H624.452C624.473 527.503 624.657 528.028 625.004 528.396C625.351 528.76 625.84 528.942 626.471 528.942C626.885 528.942 627.271 528.904 627.626 528.828C627.986 528.747 628.371 528.616 628.781 528.434V529.647C628.417 529.82 628.049 529.943 627.677 530.015C627.304 530.087 626.879 530.123 626.401 530.123ZM626.128 523.978C625.654 523.978 625.273 524.128 624.985 524.429C624.702 524.729 624.533 525.167 624.478 525.743H627.664C627.656 525.163 627.516 524.725 627.245 524.429C626.974 524.128 626.602 523.978 626.128 523.978ZM636.754 522.975V523.794L635.554 524.016C635.664 524.164 635.755 524.346 635.827 524.562C635.899 524.778 635.935 525.007 635.935 525.248C635.935 525.971 635.685 526.541 635.186 526.955C634.687 527.37 633.999 527.577 633.123 527.577C632.899 527.577 632.696 527.56 632.514 527.527C632.192 527.726 632.031 527.958 632.031 528.225C632.031 528.386 632.105 528.506 632.253 528.587C632.406 528.667 632.683 528.707 633.085 528.707H634.31C635.084 528.707 635.673 528.872 636.075 529.202C636.477 529.532 636.678 530.009 636.678 530.631C636.678 531.426 636.35 532.04 635.694 532.471C635.038 532.903 634.09 533.119 632.85 533.119C631.894 533.119 631.164 532.95 630.66 532.611C630.157 532.273 629.905 531.79 629.905 531.164C629.905 530.732 630.04 530.368 630.311 530.072C630.586 529.78 630.969 529.577 631.46 529.463C631.261 529.378 631.096 529.243 630.965 529.056C630.838 528.866 630.774 528.667 630.774 528.46C630.774 528.197 630.848 527.975 630.997 527.793C631.145 527.611 631.365 527.431 631.657 527.254C631.293 527.097 630.997 526.843 630.768 526.492C630.544 526.136 630.432 525.722 630.432 525.248C630.432 524.486 630.671 523.896 631.149 523.477C631.631 523.058 632.317 522.848 633.206 522.848C633.404 522.848 633.612 522.863 633.828 522.893C634.048 522.918 634.213 522.946 634.323 522.975H636.754ZM631.238 531.088C631.238 531.409 631.382 531.657 631.669 531.83C631.961 532.004 632.37 532.091 632.895 532.091C633.707 532.091 634.312 531.974 634.71 531.741C635.108 531.509 635.307 531.2 635.307 530.815C635.307 530.51 635.197 530.292 634.977 530.161C634.761 530.034 634.357 529.97 633.764 529.97H632.634C632.207 529.97 631.866 530.07 631.612 530.269C631.363 530.472 631.238 530.745 631.238 531.088ZM631.879 525.248C631.879 525.688 631.991 526.026 632.215 526.263C632.444 526.5 632.77 526.619 633.193 526.619C634.056 526.619 634.488 526.158 634.488 525.235C634.488 524.778 634.38 524.427 634.164 524.181C633.952 523.932 633.629 523.807 633.193 523.807C632.761 523.807 632.433 523.93 632.209 524.175C631.989 524.42 631.879 524.778 631.879 525.248ZM644.289 526.473C644.289 527.62 643.994 528.515 643.406 529.158C642.818 529.801 641.999 530.123 640.95 530.123C640.294 530.123 639.714 529.975 639.21 529.678C638.707 529.382 638.32 528.957 638.049 528.403C637.778 527.848 637.643 527.205 637.643 526.473C637.643 525.335 637.935 524.446 638.519 523.807C639.103 523.168 639.926 522.848 640.988 522.848C642.003 522.848 642.807 523.176 643.4 523.832C643.992 524.484 644.289 525.364 644.289 526.473ZM639.179 526.473C639.179 528.094 639.778 528.904 640.975 528.904C642.16 528.904 642.752 528.094 642.752 526.473C642.752 524.869 642.156 524.067 640.962 524.067C640.336 524.067 639.881 524.274 639.598 524.689C639.318 525.104 639.179 525.698 639.179 526.473ZM649.57 522.848C649.87 522.848 650.118 522.87 650.312 522.912L650.167 524.302C649.955 524.251 649.735 524.226 649.506 524.226C648.91 524.226 648.425 524.42 648.053 524.81C647.685 525.199 647.5 525.705 647.5 526.327V529.996H646.009V522.975H647.177L647.374 524.213H647.45C647.682 523.794 647.985 523.462 648.357 523.217C648.734 522.971 649.138 522.848 649.57 522.848Z" fill="#262626"/>
                                <path class="moorooka-svg text" d="M508.548 501.996L505.856 494.246H505.806C505.878 495.397 505.914 496.476 505.914 497.483V501.996H504.536V492.716H506.675L509.252 500.098H509.291L511.944 492.716H514.089V501.996H512.629V497.407C512.629 496.945 512.64 496.345 512.661 495.604C512.687 494.863 512.708 494.415 512.725 494.258H512.674L509.887 501.996H508.548ZM522.602 498.473C522.602 499.62 522.307 500.515 521.719 501.158C521.131 501.801 520.312 502.123 519.263 502.123C518.607 502.123 518.027 501.975 517.523 501.679C517.02 501.382 516.633 500.957 516.362 500.403C516.091 499.848 515.956 499.205 515.956 498.473C515.956 497.335 516.248 496.446 516.832 495.807C517.416 495.168 518.239 494.849 519.301 494.849C520.316 494.849 521.12 495.177 521.713 495.833C522.305 496.484 522.602 497.364 522.602 498.473ZM517.492 498.473C517.492 500.094 518.09 500.904 519.288 500.904C520.473 500.904 521.065 500.094 521.065 498.473C521.065 496.869 520.469 496.067 519.275 496.067C518.649 496.067 518.194 496.275 517.911 496.689C517.631 497.104 517.492 497.699 517.492 498.473ZM530.549 498.473C530.549 499.62 530.255 500.515 529.667 501.158C529.078 501.801 528.259 502.123 527.21 502.123C526.554 502.123 525.974 501.975 525.471 501.679C524.967 501.382 524.58 500.957 524.309 500.403C524.038 499.848 523.903 499.205 523.903 498.473C523.903 497.335 524.195 496.446 524.779 495.807C525.363 495.168 526.186 494.849 527.248 494.849C528.264 494.849 529.068 495.177 529.66 495.833C530.253 496.484 530.549 497.364 530.549 498.473ZM525.439 498.473C525.439 500.094 526.038 500.904 527.235 500.904C528.42 500.904 529.013 500.094 529.013 498.473C529.013 496.869 528.416 496.067 527.223 496.067C526.596 496.067 526.141 496.275 525.858 496.689C525.579 497.104 525.439 497.699 525.439 498.473ZM535.83 494.849C536.131 494.849 536.378 494.87 536.573 494.912L536.427 496.302C536.215 496.251 535.995 496.226 535.767 496.226C535.17 496.226 534.685 496.421 534.313 496.81C533.945 497.199 533.761 497.705 533.761 498.327V501.996H532.269V494.976H533.437L533.634 496.213H533.71C533.943 495.794 534.245 495.462 534.618 495.217C534.994 494.971 535.398 494.849 535.83 494.849ZM544.107 498.473C544.107 499.62 543.813 500.515 543.225 501.158C542.637 501.801 541.818 502.123 540.769 502.123C540.113 502.123 539.533 501.975 539.029 501.679C538.526 501.382 538.139 500.957 537.868 500.403C537.597 499.848 537.461 499.205 537.461 498.473C537.461 497.335 537.753 496.446 538.337 495.807C538.921 495.168 539.744 494.849 540.807 494.849C541.822 494.849 542.626 495.177 543.219 495.833C543.811 496.484 544.107 497.364 544.107 498.473ZM538.998 498.473C538.998 500.094 539.596 500.904 540.794 500.904C541.979 500.904 542.571 500.094 542.571 498.473C542.571 496.869 541.975 496.067 540.781 496.067C540.155 496.067 539.7 496.275 539.417 496.689C539.137 497.104 538.998 497.699 538.998 498.473ZM552.055 498.473C552.055 499.62 551.761 500.515 551.172 501.158C550.584 501.801 549.765 502.123 548.716 502.123C548.06 502.123 547.48 501.975 546.977 501.679C546.473 501.382 546.086 500.957 545.815 500.403C545.544 499.848 545.409 499.205 545.409 498.473C545.409 497.335 545.701 496.446 546.285 495.807C546.869 495.168 547.692 494.849 548.754 494.849C549.77 494.849 550.574 495.177 551.166 495.833C551.758 496.484 552.055 497.364 552.055 498.473ZM546.945 498.473C546.945 500.094 547.544 500.904 548.741 500.904C549.926 500.904 550.519 500.094 550.519 498.473C550.519 496.869 549.922 496.067 548.729 496.067C548.102 496.067 547.647 496.275 547.364 496.689C547.084 497.104 546.945 497.699 546.945 498.473ZM555.216 498.289L556.06 497.235L558.18 494.976H559.9L557.076 497.991L560.078 501.996H558.326L556.073 498.917L555.254 499.59V501.996H553.775V492.119H555.254V496.937L555.178 498.289H555.216ZM565.607 501.996L565.309 501.019H565.258C564.919 501.446 564.579 501.738 564.236 501.895C563.893 502.047 563.453 502.123 562.916 502.123C562.226 502.123 561.686 501.937 561.297 501.564C560.912 501.192 560.719 500.665 560.719 499.984C560.719 499.26 560.988 498.714 561.525 498.346C562.063 497.978 562.882 497.777 563.982 497.743L565.194 497.705V497.331C565.194 496.882 565.089 496.548 564.877 496.328C564.67 496.103 564.346 495.991 563.906 495.991C563.546 495.991 563.201 496.044 562.871 496.15C562.541 496.256 562.224 496.381 561.919 496.524L561.437 495.458C561.817 495.259 562.234 495.109 562.687 495.007C563.14 494.902 563.567 494.849 563.969 494.849C564.862 494.849 565.535 495.043 565.988 495.433C566.445 495.822 566.673 496.433 566.673 497.267V501.996H565.607ZM563.385 500.98C563.927 500.98 564.361 500.83 564.687 500.53C565.017 500.225 565.182 499.8 565.182 499.254V498.645L564.28 498.683C563.578 498.708 563.066 498.826 562.744 499.038C562.427 499.245 562.268 499.565 562.268 499.997C562.268 500.31 562.361 500.553 562.547 500.727C562.734 500.896 563.013 500.98 563.385 500.98Z" fill="#262626"/>
                                <path class="parkinson-svg text" d="M480.866 599.521C480.866 600.49 480.549 601.232 479.914 601.749C479.279 602.265 478.376 602.523 477.204 602.523H476.239V605.995H474.722V596.715H477.394C478.554 596.715 479.421 596.952 479.997 597.426C480.576 597.9 480.866 598.598 480.866 599.521ZM476.239 601.247H477.045C477.824 601.247 478.395 601.112 478.759 600.841C479.123 600.57 479.305 600.147 479.305 599.571C479.305 599.038 479.142 598.64 478.816 598.378C478.49 598.116 477.982 597.984 477.292 597.984H476.239V601.247ZM486.954 605.995L486.655 605.018H486.604C486.266 605.445 485.925 605.737 485.583 605.894C485.24 606.046 484.8 606.122 484.262 606.122C483.572 606.122 483.033 605.936 482.644 605.563C482.258 605.191 482.066 604.664 482.066 603.983C482.066 603.259 482.335 602.713 482.872 602.345C483.41 601.977 484.228 601.776 485.329 601.742L486.541 601.704V601.33C486.541 600.881 486.435 600.547 486.224 600.327C486.016 600.102 485.693 599.99 485.252 599.99C484.893 599.99 484.548 600.043 484.218 600.149C483.888 600.255 483.57 600.38 483.266 600.523L482.783 599.457C483.164 599.258 483.581 599.108 484.034 599.006C484.486 598.901 484.914 598.848 485.316 598.848C486.209 598.848 486.882 599.042 487.334 599.432C487.792 599.821 488.02 600.432 488.02 601.266V605.995H486.954ZM484.732 604.979C485.274 604.979 485.707 604.829 486.033 604.529C486.363 604.224 486.528 603.799 486.528 603.253V602.644L485.627 602.682C484.924 602.707 484.412 602.826 484.091 603.037C483.773 603.244 483.615 603.564 483.615 603.996C483.615 604.309 483.708 604.552 483.894 604.726C484.08 604.895 484.36 604.979 484.732 604.979ZM493.663 598.848C493.964 598.848 494.211 598.869 494.406 598.911L494.26 600.301C494.048 600.25 493.828 600.225 493.6 600.225C493.003 600.225 492.518 600.42 492.146 600.809C491.778 601.198 491.594 601.704 491.594 602.326V605.995H490.102V598.975H491.27L491.467 600.212H491.543C491.776 599.793 492.078 599.461 492.451 599.216C492.827 598.97 493.231 598.848 493.663 598.848ZM497.154 602.288L497.999 601.234L500.119 598.975H501.839L499.014 601.99L502.017 605.995H500.265L498.011 602.917L497.192 603.589V605.995H495.713V596.118H497.192V600.936L497.116 602.288H497.154ZM504.645 605.995H503.153V598.975H504.645V605.995ZM503.064 597.115C503.064 596.848 503.136 596.643 503.28 596.499C503.428 596.355 503.637 596.283 503.908 596.283C504.171 596.283 504.374 596.355 504.518 596.499C504.666 596.643 504.74 596.848 504.74 597.115C504.74 597.369 504.666 597.57 504.518 597.718C504.374 597.862 504.171 597.934 503.908 597.934C503.637 597.934 503.428 597.862 503.28 597.718C503.136 597.57 503.064 597.369 503.064 597.115ZM512.96 605.995H511.462V601.679C511.462 601.137 511.352 600.733 511.132 600.466C510.916 600.2 510.571 600.066 510.097 600.066C509.467 600.066 509.005 600.253 508.713 600.625C508.421 600.997 508.275 601.622 508.275 602.498V605.995H506.784V598.975H507.952L508.161 599.895H508.237C508.449 599.561 508.749 599.303 509.139 599.121C509.528 598.939 509.96 598.848 510.434 598.848C512.118 598.848 512.96 599.705 512.96 601.418V605.995ZM519.752 603.996C519.752 604.681 519.502 605.208 519.003 605.576C518.504 605.94 517.788 606.122 516.857 606.122C515.922 606.122 515.171 605.98 514.604 605.697V604.408C515.429 604.789 516.197 604.979 516.908 604.979C517.826 604.979 518.286 604.702 518.286 604.148C518.286 603.97 518.235 603.822 518.133 603.704C518.032 603.585 517.865 603.462 517.632 603.335C517.399 603.208 517.075 603.065 516.661 602.904C515.852 602.591 515.304 602.278 515.017 601.964C514.733 601.651 514.591 601.245 514.591 600.746C514.591 600.145 514.833 599.679 515.315 599.349C515.802 599.015 516.462 598.848 517.295 598.848C518.121 598.848 518.901 599.015 519.638 599.349L519.155 600.473C518.398 600.16 517.761 600.003 517.245 600.003C516.458 600.003 516.064 600.227 516.064 600.676C516.064 600.896 516.166 601.082 516.369 601.234C516.576 601.387 517.025 601.596 517.714 601.863C518.294 602.087 518.715 602.292 518.978 602.479C519.24 602.665 519.435 602.881 519.562 603.126C519.688 603.367 519.752 603.657 519.752 603.996ZM527.598 602.472C527.598 603.619 527.304 604.514 526.715 605.157C526.127 605.8 525.308 606.122 524.259 606.122C523.603 606.122 523.023 605.974 522.52 605.678C522.016 605.382 521.629 604.956 521.358 604.402C521.087 603.847 520.952 603.204 520.952 602.472C520.952 601.334 521.244 600.445 521.828 599.806C522.412 599.167 523.235 598.848 524.297 598.848C525.312 598.848 526.117 599.176 526.709 599.832C527.301 600.483 527.598 601.363 527.598 602.472ZM522.488 602.472C522.488 604.093 523.087 604.903 524.284 604.903C525.469 604.903 526.062 604.093 526.062 602.472C526.062 600.868 525.465 600.066 524.271 600.066C523.645 600.066 523.19 600.274 522.907 600.688C522.627 601.103 522.488 601.698 522.488 602.472ZM535.494 605.995H533.996V601.679C533.996 601.137 533.886 600.733 533.666 600.466C533.45 600.2 533.105 600.066 532.631 600.066C532.001 600.066 531.54 600.253 531.248 600.625C530.956 600.997 530.81 601.622 530.81 602.498V605.995H529.318V598.975H530.486L530.695 599.895H530.771C530.983 599.561 531.284 599.303 531.673 599.121C532.062 598.939 532.494 598.848 532.968 598.848C534.652 598.848 535.494 599.705 535.494 601.418V605.995Z" fill="#262626"/>
                                <path class="richlands-svg text" d="M385.996 531.032H387.049C387.756 531.032 388.268 530.901 388.585 530.638C388.903 530.376 389.062 529.987 389.062 529.47C389.062 528.946 388.89 528.569 388.547 528.34C388.205 528.112 387.688 527.998 386.999 527.998H385.996V531.032ZM385.996 532.289V535.996H384.479V526.715H387.1C388.298 526.715 389.184 526.94 389.76 527.388C390.335 527.837 390.623 528.514 390.623 529.42C390.623 530.575 390.022 531.398 388.82 531.889L391.442 535.996H389.715L387.494 532.289H385.996ZM394.127 535.996H392.635V528.975H394.127V535.996ZM392.546 527.115C392.546 526.849 392.618 526.644 392.762 526.5C392.91 526.356 393.12 526.284 393.391 526.284C393.653 526.284 393.856 526.356 394 526.5C394.148 526.644 394.222 526.849 394.222 527.115C394.222 527.369 394.148 527.57 394 527.718C393.856 527.862 393.653 527.934 393.391 527.934C393.12 527.934 392.91 527.862 392.762 527.718C392.618 527.57 392.546 527.369 392.546 527.115ZM399.097 536.123C398.035 536.123 397.227 535.814 396.672 535.196C396.122 534.574 395.847 533.683 395.847 532.524C395.847 531.343 396.135 530.435 396.71 529.8C397.29 529.166 398.126 528.848 399.218 528.848C399.958 528.848 400.625 528.986 401.217 529.261L400.767 530.461C400.136 530.215 399.616 530.092 399.205 530.092C397.991 530.092 397.383 530.899 397.383 532.511C397.383 533.298 397.534 533.89 397.834 534.288C398.139 534.682 398.583 534.879 399.167 534.879C399.831 534.879 400.46 534.714 401.052 534.383V535.685C400.786 535.841 400.5 535.953 400.195 536.021C399.895 536.089 399.529 536.123 399.097 536.123ZM408.879 535.996H407.381V531.679C407.381 531.138 407.271 530.734 407.051 530.467C406.835 530.2 406.49 530.067 406.016 530.067C405.39 530.067 404.929 530.255 404.632 530.632C404.34 531.004 404.194 531.631 404.194 532.511V535.996H402.703V526.119H404.194V528.626C404.194 529.028 404.169 529.458 404.118 529.915H404.213C404.417 529.576 404.698 529.314 405.058 529.128C405.422 528.941 405.845 528.848 406.327 528.848C408.028 528.848 408.879 529.705 408.879 531.419V535.996ZM412.446 535.996H410.955V526.119H412.446V535.996ZM418.978 535.996L418.68 535.018H418.629C418.29 535.446 417.95 535.738 417.607 535.894C417.264 536.047 416.824 536.123 416.287 536.123C415.597 536.123 415.057 535.936 414.668 535.564C414.283 535.192 414.09 534.665 414.09 533.984C414.09 533.26 414.359 532.714 414.896 532.346C415.434 531.978 416.253 531.777 417.353 531.743L418.565 531.705V531.33C418.565 530.882 418.46 530.547 418.248 530.327C418.041 530.103 417.717 529.991 417.277 529.991C416.917 529.991 416.572 530.044 416.242 530.15C415.912 530.255 415.595 530.38 415.29 530.524L414.808 529.458C415.188 529.259 415.605 529.109 416.058 529.007C416.511 528.901 416.938 528.848 417.34 528.848C418.233 528.848 418.906 529.043 419.359 529.432C419.816 529.822 420.044 530.433 420.044 531.267V535.996H418.978ZM416.756 534.98C417.298 534.98 417.732 534.83 418.058 534.529C418.388 534.225 418.553 533.799 418.553 533.254V532.644L417.651 532.682C416.949 532.708 416.437 532.826 416.115 533.038C415.798 533.245 415.639 533.565 415.639 533.996C415.639 534.309 415.732 534.553 415.918 534.726C416.105 534.895 416.384 534.98 416.756 534.98ZM428.303 535.996H426.805V531.679C426.805 531.138 426.695 530.734 426.475 530.467C426.259 530.2 425.914 530.067 425.44 530.067C424.809 530.067 424.348 530.253 424.056 530.626C423.764 530.998 423.618 531.622 423.618 532.498V535.996H422.126V528.975H423.294L423.504 529.896H423.58C423.792 529.561 424.092 529.303 424.481 529.121C424.871 528.939 425.302 528.848 425.776 528.848C427.461 528.848 428.303 529.705 428.303 531.419V535.996ZM432.746 536.123C431.87 536.123 431.187 535.805 430.696 535.171C430.205 534.536 429.959 533.645 429.959 532.498C429.959 531.347 430.207 530.452 430.702 529.813C431.201 529.17 431.891 528.848 432.771 528.848C433.694 528.848 434.396 529.189 434.879 529.87H434.955C434.883 529.367 434.847 528.969 434.847 528.677V526.119H436.345V535.996H435.177L434.917 535.075H434.847C434.369 535.774 433.669 536.123 432.746 536.123ZM433.146 534.917C433.76 534.917 434.206 534.745 434.485 534.402C434.765 534.055 434.909 533.495 434.917 532.72V532.511C434.917 531.626 434.773 530.998 434.485 530.626C434.198 530.253 433.747 530.067 433.133 530.067C432.609 530.067 432.204 530.281 431.921 530.708C431.637 531.131 431.496 531.736 431.496 532.524C431.496 533.302 431.633 533.897 431.908 534.307C432.183 534.714 432.596 534.917 433.146 534.917ZM443.194 533.996C443.194 534.682 442.945 535.209 442.445 535.577C441.946 535.941 441.231 536.123 440.3 536.123C439.365 536.123 438.613 535.981 438.046 535.697V534.409C438.872 534.79 439.64 534.98 440.351 534.98C441.269 534.98 441.728 534.703 441.728 534.149C441.728 533.971 441.677 533.823 441.576 533.704C441.474 533.586 441.307 533.463 441.074 533.336C440.841 533.209 440.518 533.065 440.103 532.904C439.295 532.591 438.747 532.278 438.459 531.965C438.175 531.652 438.034 531.246 438.034 530.746C438.034 530.145 438.275 529.68 438.757 529.35C439.244 529.015 439.904 528.848 440.738 528.848C441.563 528.848 442.344 529.015 443.08 529.35L442.598 530.473C441.84 530.16 441.203 530.004 440.687 530.004C439.9 530.004 439.506 530.228 439.506 530.676C439.506 530.896 439.608 531.083 439.811 531.235C440.018 531.387 440.467 531.597 441.157 531.863C441.736 532.088 442.158 532.293 442.42 532.479C442.682 532.665 442.877 532.881 443.004 533.127C443.131 533.368 443.194 533.658 443.194 533.996Z" fill="#262626"/>
                                <path class="jamboree-svg text" d="M372.304 478.586C371.889 478.586 371.542 478.533 371.263 478.427V477.151C371.619 477.24 371.928 477.285 372.19 477.285C373.019 477.285 373.434 476.76 373.434 475.711V466.716H374.958V475.66C374.958 476.608 374.731 477.331 374.278 477.831C373.83 478.334 373.172 478.586 372.304 478.586ZM381.597 475.996L381.299 475.019H381.248C380.91 475.446 380.569 475.738 380.226 475.895C379.883 476.047 379.443 476.123 378.906 476.123C378.216 476.123 377.676 475.937 377.287 475.565C376.902 475.192 376.709 474.665 376.709 473.984C376.709 473.26 376.978 472.714 377.516 472.346C378.053 471.978 378.872 471.777 379.972 471.743L381.185 471.705V471.331C381.185 470.882 381.079 470.548 380.867 470.328C380.66 470.103 380.336 469.991 379.896 469.991C379.536 469.991 379.191 470.044 378.861 470.15C378.531 470.256 378.214 470.381 377.909 470.525L377.427 469.458C377.808 469.259 378.224 469.109 378.677 469.007C379.13 468.902 379.557 468.849 379.959 468.849C380.852 468.849 381.525 469.043 381.978 469.433C382.435 469.822 382.664 470.434 382.664 471.267V475.996H381.597ZM379.375 474.981C379.917 474.981 380.351 474.83 380.677 474.53C381.007 474.225 381.172 473.8 381.172 473.254V472.645L380.271 472.683C379.568 472.708 379.056 472.827 378.734 473.038C378.417 473.246 378.258 473.565 378.258 473.997C378.258 474.31 378.351 474.553 378.538 474.727C378.724 474.896 379.003 474.981 379.375 474.981ZM390.662 475.996H389.164V471.667C389.164 471.13 389.062 470.73 388.859 470.467C388.656 470.201 388.338 470.068 387.907 470.068C387.331 470.068 386.908 470.256 386.637 470.632C386.371 471.005 386.237 471.627 386.237 472.499V475.996H384.746V468.976H385.914L386.123 469.896H386.199C386.394 469.562 386.675 469.304 387.043 469.122C387.416 468.94 387.824 468.849 388.269 468.849C389.348 468.849 390.063 469.217 390.414 469.953H390.516C390.723 469.606 391.015 469.335 391.392 469.141C391.768 468.946 392.2 468.849 392.687 468.849C393.524 468.849 394.134 469.06 394.515 469.484C394.9 469.907 395.092 470.552 395.092 471.42V475.996H393.601V471.667C393.601 471.13 393.497 470.73 393.29 470.467C393.086 470.201 392.769 470.068 392.337 470.068C391.758 470.068 391.332 470.249 391.062 470.613C390.795 470.973 390.662 471.527 390.662 472.276V475.996ZM400.761 468.849C401.637 468.849 402.318 469.166 402.805 469.801C403.296 470.436 403.541 471.326 403.541 472.473C403.541 473.624 403.293 474.521 402.798 475.165C402.303 475.804 401.616 476.123 400.735 476.123C399.847 476.123 399.157 475.804 398.666 475.165H398.564L398.292 475.996H397.174V466.119H398.666V468.468C398.666 468.641 398.658 468.9 398.641 469.242C398.624 469.585 398.611 469.803 398.603 469.896H398.666C399.14 469.198 399.838 468.849 400.761 468.849ZM400.374 470.068C399.773 470.068 399.339 470.245 399.072 470.601C398.81 470.952 398.674 471.542 398.666 472.372V472.473C398.666 473.328 398.801 473.948 399.072 474.333C399.343 474.714 399.785 474.904 400.399 474.904C400.928 474.904 401.328 474.695 401.599 474.276C401.874 473.857 402.011 473.252 402.011 472.461C402.011 470.865 401.465 470.068 400.374 470.068ZM411.501 472.473C411.501 473.62 411.207 474.515 410.619 475.158C410.03 475.802 409.212 476.123 408.162 476.123C407.506 476.123 406.926 475.975 406.423 475.679C405.919 475.383 405.532 474.957 405.261 474.403C404.99 473.849 404.855 473.205 404.855 472.473C404.855 471.335 405.147 470.446 405.731 469.807C406.315 469.168 407.138 468.849 408.2 468.849C409.216 468.849 410.02 469.177 410.612 469.833C411.205 470.484 411.501 471.365 411.501 472.473ZM406.391 472.473C406.391 474.094 406.99 474.904 408.188 474.904C409.372 474.904 409.965 474.094 409.965 472.473C409.965 470.869 409.368 470.068 408.175 470.068C407.549 470.068 407.094 470.275 406.81 470.69C406.531 471.104 406.391 471.699 406.391 472.473ZM416.782 468.849C417.083 468.849 417.33 468.87 417.525 468.912L417.379 470.302C417.167 470.252 416.947 470.226 416.719 470.226C416.122 470.226 415.638 470.421 415.265 470.81C414.897 471.2 414.713 471.705 414.713 472.327V475.996H413.221V468.976H414.389L414.586 470.214H414.662C414.895 469.795 415.197 469.462 415.57 469.217C415.946 468.971 416.351 468.849 416.782 468.849ZM421.898 476.123C420.807 476.123 419.952 475.806 419.334 475.171C418.72 474.532 418.414 473.654 418.414 472.537C418.414 471.39 418.699 470.489 419.271 469.833C419.842 469.177 420.627 468.849 421.625 468.849C422.552 468.849 423.284 469.13 423.822 469.693C424.359 470.256 424.628 471.03 424.628 472.016V472.822H419.95C419.971 473.504 420.155 474.028 420.502 474.397C420.849 474.761 421.338 474.943 421.968 474.943C422.383 474.943 422.768 474.904 423.124 474.828C423.483 474.748 423.868 474.617 424.279 474.435V475.647C423.915 475.821 423.547 475.943 423.174 476.015C422.802 476.087 422.377 476.123 421.898 476.123ZM421.625 469.979C421.152 469.979 420.771 470.129 420.483 470.429C420.199 470.73 420.03 471.168 419.975 471.743H423.162C423.153 471.164 423.014 470.726 422.743 470.429C422.472 470.129 422.099 469.979 421.625 469.979ZM429.389 476.123C428.297 476.123 427.442 475.806 426.824 475.171C426.211 474.532 425.904 473.654 425.904 472.537C425.904 471.39 426.189 470.489 426.761 469.833C427.332 469.177 428.117 468.849 429.116 468.849C430.042 468.849 430.775 469.13 431.312 469.693C431.849 470.256 432.118 471.03 432.118 472.016V472.822H427.44C427.461 473.504 427.645 474.028 427.992 474.397C428.339 474.761 428.828 474.943 429.458 474.943C429.873 474.943 430.258 474.904 430.614 474.828C430.973 474.748 431.359 474.617 431.769 474.435V475.647C431.405 475.821 431.037 475.943 430.665 476.015C430.292 476.087 429.867 476.123 429.389 476.123ZM429.116 469.979C428.642 469.979 428.261 470.129 427.973 470.429C427.69 470.73 427.52 471.168 427.465 471.743H430.652C430.643 471.164 430.504 470.726 430.233 470.429C429.962 470.129 429.59 469.979 429.116 469.979Z" fill="#262626"/>
                                <path class="tennyson-svg text" d="M467.5 444.996H465.983V437.017H463.253V435.716H470.229V437.017H467.5V444.996ZM474.565 445.123C473.473 445.123 472.618 444.806 472 444.171C471.387 443.532 471.08 442.654 471.08 441.537C471.08 440.39 471.366 439.489 471.937 438.833C472.508 438.177 473.293 437.849 474.292 437.849C475.219 437.849 475.951 438.13 476.488 438.693C477.026 439.256 477.294 440.03 477.294 441.016V441.823H472.616C472.637 442.504 472.821 443.029 473.168 443.397C473.515 443.761 474.004 443.943 474.635 443.943C475.049 443.943 475.435 443.905 475.79 443.828C476.15 443.748 476.535 443.617 476.945 443.435V444.647C476.581 444.821 476.213 444.944 475.841 445.016C475.468 445.087 475.043 445.123 474.565 445.123ZM474.292 438.979C473.818 438.979 473.437 439.129 473.149 439.43C472.866 439.73 472.697 440.168 472.642 440.744H475.828C475.82 440.164 475.68 439.726 475.409 439.43C475.138 439.129 474.766 438.979 474.292 438.979ZM485.166 444.996H483.667V440.68C483.667 440.138 483.557 439.734 483.337 439.468C483.122 439.201 482.777 439.068 482.303 439.068C481.672 439.068 481.211 439.254 480.919 439.626C480.627 439.999 480.481 440.623 480.481 441.499V444.996H478.989V437.976H480.157L480.367 438.896H480.443C480.654 438.562 480.955 438.304 481.344 438.122C481.734 437.94 482.165 437.849 482.639 437.849C484.323 437.849 485.166 438.706 485.166 440.42V444.996ZM493.417 444.996H491.919V440.68C491.919 440.138 491.809 439.734 491.589 439.468C491.374 439.201 491.029 439.068 490.555 439.068C489.924 439.068 489.463 439.254 489.171 439.626C488.879 439.999 488.733 440.623 488.733 441.499V444.996H487.241V437.976H488.409L488.619 438.896H488.695C488.906 438.562 489.207 438.304 489.596 438.122C489.986 437.94 490.417 437.849 490.891 437.849C492.575 437.849 493.417 438.706 493.417 440.42V444.996ZM494.427 437.976H496.052L497.48 441.956C497.696 442.523 497.84 443.056 497.912 443.556H497.962C498 443.323 498.07 443.041 498.172 442.711C498.273 442.377 498.811 440.799 499.784 437.976H501.396L498.394 445.93C497.848 447.39 496.938 448.12 495.665 448.12C495.334 448.12 495.013 448.084 494.7 448.012V446.831C494.924 446.882 495.18 446.907 495.468 446.907C496.187 446.907 496.693 446.49 496.985 445.657L497.245 444.996L494.427 437.976ZM507.179 442.997C507.179 443.682 506.93 444.209 506.43 444.578C505.931 444.941 505.216 445.123 504.285 445.123C503.349 445.123 502.598 444.982 502.031 444.698V443.41C502.856 443.79 503.625 443.981 504.335 443.981C505.254 443.981 505.713 443.704 505.713 443.149C505.713 442.972 505.662 442.823 505.561 442.705C505.459 442.586 505.292 442.464 505.059 442.337C504.826 442.21 504.503 442.066 504.088 441.905C503.28 441.592 502.732 441.279 502.444 440.966C502.16 440.653 502.019 440.246 502.019 439.747C502.019 439.146 502.26 438.681 502.742 438.35C503.229 438.016 503.889 437.849 504.723 437.849C505.548 437.849 506.329 438.016 507.065 438.35L506.583 439.474C505.825 439.161 505.188 439.004 504.672 439.004C503.885 439.004 503.491 439.229 503.491 439.677C503.491 439.897 503.593 440.083 503.796 440.236C504.003 440.388 504.452 440.598 505.142 440.864C505.721 441.088 506.142 441.294 506.405 441.48C506.667 441.666 506.862 441.882 506.989 442.127C507.116 442.369 507.179 442.658 507.179 442.997ZM515.025 441.474C515.025 442.62 514.731 443.515 514.143 444.159C513.554 444.802 512.736 445.123 511.686 445.123C511.03 445.123 510.45 444.975 509.947 444.679C509.443 444.383 509.056 443.958 508.785 443.403C508.514 442.849 508.379 442.206 508.379 441.474C508.379 440.335 508.671 439.446 509.255 438.807C509.839 438.168 510.662 437.849 511.724 437.849C512.74 437.849 513.544 438.177 514.136 438.833C514.729 439.485 515.025 440.365 515.025 441.474ZM509.915 441.474C509.915 443.094 510.514 443.905 511.711 443.905C512.896 443.905 513.489 443.094 513.489 441.474C513.489 439.87 512.892 439.068 511.699 439.068C511.072 439.068 510.618 439.275 510.334 439.69C510.055 440.105 509.915 440.699 509.915 441.474ZM522.921 444.996H521.423V440.68C521.423 440.138 521.313 439.734 521.093 439.468C520.877 439.201 520.533 439.068 520.059 439.068C519.428 439.068 518.967 439.254 518.675 439.626C518.383 439.999 518.237 440.623 518.237 441.499V444.996H516.745V437.976H517.913L518.123 438.896H518.199C518.41 438.562 518.711 438.304 519.1 438.122C519.489 437.94 519.921 437.849 520.395 437.849C522.079 437.849 522.921 438.706 522.921 440.42V444.996Z" fill="#262626"/>
                                <path class="wynnum-svg text" d="M719.965 271.998H718.315L716.741 266.463C716.673 266.222 716.588 265.875 716.487 265.422C716.385 264.965 716.324 264.647 716.303 264.47C716.26 264.74 716.191 265.092 716.093 265.523C716 265.955 715.922 266.277 715.858 266.488L714.322 271.998H712.672L711.472 267.351L710.253 262.718H711.802L713.129 268.126C713.336 268.993 713.484 269.759 713.573 270.424C713.62 270.064 713.69 269.662 713.783 269.218C713.876 268.773 713.96 268.414 714.037 268.139L715.547 262.718H717.052L718.601 268.164C718.749 268.668 718.905 269.421 719.07 270.424C719.134 269.819 719.286 269.048 719.527 268.113L720.848 262.718H722.384L719.965 271.998ZM722.479 264.977H724.104L725.532 268.957C725.748 269.524 725.892 270.058 725.964 270.557H726.015C726.053 270.324 726.123 270.043 726.224 269.713C726.326 269.378 726.863 267.8 727.836 264.977H729.449L726.446 272.931C725.9 274.391 724.991 275.121 723.717 275.121C723.387 275.121 723.065 275.085 722.752 275.013V273.832C722.976 273.883 723.232 273.909 723.52 273.909C724.239 273.909 724.745 273.492 725.037 272.658L725.297 271.998L722.479 264.977ZM736.691 271.998H735.193V267.682C735.193 267.14 735.083 266.736 734.863 266.469C734.647 266.203 734.303 266.069 733.829 266.069C733.198 266.069 732.737 266.255 732.445 266.628C732.153 267 732.007 267.624 732.007 268.5V271.998H730.515V264.977H731.683L731.893 265.898H731.969C732.18 265.564 732.481 265.305 732.87 265.123C733.259 264.941 733.691 264.85 734.165 264.85C735.849 264.85 736.691 265.707 736.691 267.421V271.998ZM744.943 271.998H743.445V267.682C743.445 267.14 743.335 266.736 743.115 266.469C742.899 266.203 742.555 266.069 742.081 266.069C741.45 266.069 740.989 266.255 740.697 266.628C740.405 267 740.259 267.624 740.259 268.5V271.998H738.767V264.977H739.935L740.145 265.898H740.221C740.432 265.564 740.733 265.305 741.122 265.123C741.511 264.941 741.943 264.85 742.417 264.85C744.101 264.85 744.943 265.707 744.943 267.421V271.998ZM751.97 271.998L751.761 271.078H751.685C751.477 271.403 751.181 271.659 750.796 271.846C750.415 272.032 749.979 272.125 749.488 272.125C748.638 272.125 748.003 271.913 747.584 271.49C747.165 271.067 746.956 270.426 746.956 269.567V264.977H748.46V269.307C748.46 269.844 748.57 270.248 748.79 270.519C749.01 270.786 749.355 270.919 749.825 270.919C750.451 270.919 750.91 270.733 751.202 270.36C751.498 269.984 751.646 269.355 751.646 268.475V264.977H753.145V271.998H751.97ZM761.187 271.998H759.689V267.669C759.689 267.131 759.587 266.731 759.384 266.469C759.181 266.203 758.864 266.069 758.432 266.069C757.857 266.069 757.433 266.258 757.163 266.634C756.896 267.007 756.763 267.629 756.763 268.5V271.998H755.271V264.977H756.439L756.648 265.898H756.725C756.919 265.564 757.201 265.305 757.569 265.123C757.941 264.941 758.35 264.85 758.794 264.85C759.873 264.85 760.588 265.219 760.939 265.955H761.041C761.248 265.608 761.54 265.337 761.917 265.142C762.294 264.948 762.725 264.85 763.212 264.85C764.05 264.85 764.659 265.062 765.04 265.485C765.425 265.908 765.618 266.554 765.618 267.421V271.998H764.126V267.669C764.126 267.131 764.022 266.731 763.815 266.469C763.612 266.203 763.294 266.069 762.863 266.069C762.283 266.069 761.858 266.251 761.587 266.615C761.32 266.975 761.187 267.529 761.187 268.278V271.998ZM767.09 269.148V267.878H770.353V269.148H767.09ZM726.542 284.998L723.85 277.247H723.799C723.871 278.398 723.907 279.478 723.907 280.485V284.998H722.53V275.718H724.669L727.246 283.1H727.284L729.938 275.718H732.083V284.998H730.623V280.409C730.623 279.947 730.634 279.346 730.655 278.606C730.68 277.865 730.701 277.417 730.718 277.26H730.667L727.881 284.998H726.542ZM738.761 284.998L738.462 284.02H738.412C738.073 284.448 737.732 284.74 737.39 284.896C737.047 285.049 736.607 285.125 736.069 285.125C735.38 285.125 734.84 284.939 734.451 284.566C734.066 284.194 733.873 283.667 733.873 282.986C733.873 282.262 734.142 281.716 734.679 281.348C735.217 280.98 736.035 280.779 737.136 280.745L738.348 280.707V280.332C738.348 279.884 738.242 279.55 738.031 279.329C737.823 279.105 737.5 278.993 737.06 278.993C736.7 278.993 736.355 279.046 736.025 279.152C735.695 279.258 735.377 279.382 735.073 279.526L734.59 278.46C734.971 278.261 735.388 278.111 735.841 278.009C736.294 277.903 736.721 277.85 737.123 277.85C738.016 277.85 738.689 278.045 739.142 278.434C739.599 278.824 739.827 279.435 739.827 280.269V284.998H738.761ZM736.539 283.982C737.081 283.982 737.514 283.832 737.84 283.532C738.17 283.227 738.335 282.802 738.335 282.256V281.646L737.434 281.684C736.732 281.71 736.22 281.828 735.898 282.04C735.581 282.247 735.422 282.567 735.422 282.998C735.422 283.312 735.515 283.555 735.701 283.728C735.887 283.898 736.167 283.982 736.539 283.982ZM748.085 284.998H746.587V280.682C746.587 280.14 746.477 279.736 746.257 279.469C746.042 279.203 745.697 279.069 745.223 279.069C744.592 279.069 744.131 279.255 743.839 279.628C743.547 280 743.401 280.624 743.401 281.5V284.998H741.909V277.977H743.077L743.287 278.898H743.363C743.574 278.564 743.875 278.305 744.264 278.123C744.653 277.941 745.085 277.85 745.559 277.85C747.243 277.85 748.085 278.707 748.085 280.421V284.998ZM751.653 284.998H750.161V275.121H751.653V284.998ZM752.726 277.977H754.351L755.779 281.957C755.995 282.524 756.139 283.058 756.21 283.557H756.261C756.299 283.324 756.369 283.043 756.471 282.713C756.572 282.378 757.11 280.8 758.083 277.977H759.695L756.693 285.931C756.147 287.391 755.237 288.121 753.963 288.121C753.633 288.121 753.312 288.085 752.999 288.013V286.832C753.223 286.883 753.479 286.909 753.767 286.909C754.486 286.909 754.992 286.492 755.284 285.658L755.544 284.998L752.726 277.977Z" fill="#262626"/>
                                <path class="chandler-svg text" d="M696.615 435.884C695.743 435.884 695.058 436.193 694.559 436.811C694.059 437.429 693.81 438.282 693.81 439.369C693.81 440.507 694.049 441.369 694.527 441.953C695.009 442.537 695.705 442.829 696.615 442.829C697.009 442.829 697.39 442.791 697.758 442.714C698.126 442.634 698.509 442.532 698.907 442.41V443.711C698.179 443.986 697.354 444.124 696.431 444.124C695.073 444.124 694.03 443.713 693.302 442.892C692.574 442.067 692.21 440.888 692.21 439.356C692.21 438.392 692.386 437.547 692.737 436.824C693.092 436.1 693.604 435.546 694.273 435.161C694.942 434.776 695.727 434.583 696.628 434.583C697.576 434.583 698.452 434.782 699.256 435.18L698.71 436.443C698.397 436.295 698.065 436.166 697.713 436.056C697.366 435.941 697 435.884 696.615 435.884ZM706.924 443.997H705.426V439.68C705.426 439.139 705.316 438.734 705.096 438.468C704.88 438.201 704.535 438.068 704.061 438.068C703.435 438.068 702.973 438.256 702.677 438.633C702.385 439.005 702.239 439.632 702.239 440.512V443.997H700.748V434.12H702.239V436.627C702.239 437.029 702.214 437.458 702.163 437.916H702.258C702.461 437.577 702.743 437.315 703.103 437.128C703.466 436.942 703.89 436.849 704.372 436.849C706.073 436.849 706.924 437.706 706.924 439.42V443.997ZM713.392 443.997L713.094 443.019H713.043C712.704 443.446 712.364 443.738 712.021 443.895C711.678 444.047 711.238 444.124 710.701 444.124C710.011 444.124 709.471 443.937 709.082 443.565C708.697 443.193 708.504 442.666 708.504 441.984C708.504 441.261 708.773 440.715 709.311 440.347C709.848 439.979 710.667 439.778 711.767 439.744L712.979 439.706V439.331C712.979 438.882 712.874 438.548 712.662 438.328C712.455 438.104 712.131 437.992 711.691 437.992C711.331 437.992 710.986 438.045 710.656 438.15C710.326 438.256 710.009 438.381 709.704 438.525L709.222 437.458C709.603 437.26 710.019 437.109 710.472 437.008C710.925 436.902 711.352 436.849 711.754 436.849C712.647 436.849 713.32 437.044 713.773 437.433C714.23 437.822 714.458 438.434 714.458 439.268V443.997H713.392ZM711.17 442.981C711.712 442.981 712.146 442.831 712.472 442.53C712.802 442.226 712.967 441.8 712.967 441.254V440.645L712.065 440.683C711.363 440.708 710.851 440.827 710.529 441.039C710.212 441.246 710.053 441.565 710.053 441.997C710.053 442.31 710.146 442.554 710.333 442.727C710.519 442.896 710.798 442.981 711.17 442.981ZM722.717 443.997H721.219V439.68C721.219 439.139 721.109 438.734 720.889 438.468C720.673 438.201 720.328 438.068 719.854 438.068C719.223 438.068 718.762 438.254 718.47 438.626C718.178 438.999 718.032 439.623 718.032 440.499V443.997H716.541V436.976H717.708L717.918 437.896H717.994C718.206 437.562 718.506 437.304 718.896 437.122C719.285 436.94 719.716 436.849 720.19 436.849C721.875 436.849 722.717 437.706 722.717 439.42V443.997ZM727.16 444.124C726.284 444.124 725.601 443.806 725.11 443.171C724.619 442.537 724.374 441.646 724.374 440.499C724.374 439.348 724.621 438.453 725.116 437.814C725.616 437.171 726.305 436.849 727.186 436.849C728.108 436.849 728.811 437.19 729.293 437.871H729.369C729.297 437.368 729.261 436.97 729.261 436.678V434.12H730.759V443.997H729.591L729.331 443.076H729.261C728.783 443.774 728.083 444.124 727.16 444.124ZM727.56 442.917C728.174 442.917 728.62 442.746 728.899 442.403C729.179 442.056 729.323 441.496 729.331 440.721V440.512C729.331 439.627 729.187 438.999 728.899 438.626C728.612 438.254 728.161 438.068 727.547 438.068C727.023 438.068 726.618 438.282 726.335 438.709C726.051 439.132 725.91 439.737 725.91 440.524C725.91 441.303 726.047 441.898 726.322 442.308C726.597 442.714 727.01 442.917 727.56 442.917ZM734.384 443.997H732.892V434.12H734.384V443.997ZM739.589 444.124C738.497 444.124 737.642 443.806 737.024 443.171C736.411 442.532 736.104 441.654 736.104 440.537C736.104 439.39 736.39 438.489 736.961 437.833C737.532 437.177 738.317 436.849 739.316 436.849C740.243 436.849 740.975 437.131 741.512 437.693C742.05 438.256 742.318 439.031 742.318 440.017V440.823H737.64C737.661 441.504 737.845 442.029 738.192 442.397C738.539 442.761 739.028 442.943 739.659 442.943C740.073 442.943 740.458 442.905 740.814 442.829C741.174 442.748 741.559 442.617 741.969 442.435V443.647C741.605 443.821 741.237 443.944 740.865 444.016C740.492 444.088 740.067 444.124 739.589 444.124ZM739.316 437.979C738.842 437.979 738.461 438.129 738.173 438.43C737.89 438.73 737.721 439.168 737.666 439.744H740.852C740.844 439.164 740.704 438.726 740.433 438.43C740.162 438.129 739.79 437.979 739.316 437.979ZM747.574 436.849C747.875 436.849 748.122 436.87 748.317 436.913L748.171 438.303C747.959 438.252 747.739 438.227 747.511 438.227C746.914 438.227 746.43 438.421 746.057 438.811C745.689 439.2 745.505 439.706 745.505 440.328V443.997H744.013V436.976H745.181L745.378 438.214H745.454C745.687 437.795 745.989 437.463 746.362 437.217C746.738 436.972 747.143 436.849 747.574 436.849Z" fill="#262626"/>
                                <path class="chermside-svg text" d="M521.669 168.888C520.797 168.888 520.111 169.197 519.612 169.814C519.113 170.432 518.863 171.285 518.863 172.373C518.863 173.511 519.102 174.372 519.58 174.956C520.063 175.54 520.759 175.832 521.669 175.832C522.062 175.832 522.443 175.794 522.811 175.718C523.179 175.637 523.562 175.536 523.96 175.413V176.714C523.232 176.989 522.407 177.127 521.485 177.127C520.126 177.127 519.083 176.716 518.355 175.896C517.627 175.07 517.263 173.892 517.263 172.36C517.263 171.395 517.439 170.551 517.79 169.827C518.146 169.104 518.658 168.549 519.326 168.164C519.995 167.779 520.78 167.586 521.681 167.586C522.629 167.586 523.505 167.785 524.309 168.183L523.763 169.446C523.45 169.298 523.118 169.169 522.767 169.059C522.42 168.945 522.054 168.888 521.669 168.888ZM531.977 177H530.479V172.684C530.479 172.142 530.369 171.738 530.149 171.471C529.933 171.205 529.588 171.071 529.114 171.071C528.488 171.071 528.027 171.26 527.731 171.636C527.439 172.009 527.293 172.635 527.293 173.515V177H525.801V167.123H527.293V169.63C527.293 170.032 527.267 170.462 527.216 170.919H527.312C527.515 170.58 527.796 170.318 528.156 170.132C528.52 169.946 528.943 169.853 529.425 169.853C531.127 169.853 531.977 170.709 531.977 172.423V177ZM537.119 177.127C536.027 177.127 535.172 176.81 534.554 176.175C533.941 175.536 533.634 174.658 533.634 173.541C533.634 172.394 533.92 171.492 534.491 170.836C535.062 170.181 535.847 169.853 536.846 169.853C537.773 169.853 538.505 170.134 539.042 170.697C539.58 171.26 539.848 172.034 539.848 173.02V173.826H535.17C535.191 174.507 535.375 175.032 535.722 175.4C536.069 175.764 536.558 175.946 537.189 175.946C537.603 175.946 537.988 175.908 538.344 175.832C538.704 175.752 539.089 175.62 539.499 175.438V176.651C539.135 176.824 538.767 176.947 538.395 177.019C538.022 177.091 537.597 177.127 537.119 177.127ZM536.846 170.982C536.372 170.982 535.991 171.133 535.703 171.433C535.42 171.734 535.25 172.172 535.195 172.747H538.382C538.374 172.167 538.234 171.729 537.963 171.433C537.692 171.133 537.32 170.982 536.846 170.982ZM545.104 169.853C545.405 169.853 545.652 169.874 545.847 169.916L545.701 171.306C545.489 171.255 545.269 171.23 545.041 171.23C544.444 171.23 543.959 171.425 543.587 171.814C543.219 172.203 543.035 172.709 543.035 173.331V177H541.543V169.979H542.711L542.908 171.217H542.984C543.217 170.798 543.519 170.466 543.892 170.221C544.268 169.975 544.672 169.853 545.104 169.853ZM553.07 177H551.572V172.671C551.572 172.133 551.471 171.734 551.268 171.471C551.065 171.205 550.747 171.071 550.316 171.071C549.74 171.071 549.317 171.26 549.046 171.636C548.779 172.009 548.646 172.631 548.646 173.502V177H547.154V169.979H548.322L548.532 170.9H548.608C548.803 170.566 549.084 170.307 549.452 170.125C549.825 169.944 550.233 169.853 550.677 169.853C551.756 169.853 552.472 170.221 552.823 170.957H552.924C553.132 170.61 553.424 170.339 553.8 170.145C554.177 169.95 554.609 169.853 555.095 169.853C555.933 169.853 556.543 170.064 556.923 170.487C557.309 170.91 557.501 171.556 557.501 172.423V177H556.009V172.671C556.009 172.133 555.906 171.734 555.698 171.471C555.495 171.205 555.178 171.071 554.746 171.071C554.166 171.071 553.741 171.253 553.47 171.617C553.204 171.977 553.07 172.531 553.07 173.28V177ZM564.299 175C564.299 175.686 564.05 176.213 563.55 176.581C563.051 176.945 562.336 177.127 561.405 177.127C560.47 177.127 559.719 176.985 559.152 176.702V175.413C559.977 175.794 560.745 175.984 561.456 175.984C562.374 175.984 562.833 175.707 562.833 175.153C562.833 174.975 562.782 174.827 562.681 174.708C562.579 174.59 562.412 174.467 562.179 174.34C561.947 174.213 561.623 174.069 561.208 173.909C560.4 173.596 559.852 173.282 559.564 172.969C559.281 172.656 559.139 172.25 559.139 171.75C559.139 171.15 559.38 170.684 559.862 170.354C560.349 170.02 561.009 169.853 561.843 169.853C562.668 169.853 563.449 170.02 564.185 170.354L563.703 171.478C562.945 171.164 562.308 171.008 561.792 171.008C561.005 171.008 560.611 171.232 560.611 171.681C560.611 171.901 560.713 172.087 560.916 172.239C561.124 172.392 561.572 172.601 562.262 172.868C562.842 173.092 563.263 173.297 563.525 173.483C563.787 173.67 563.982 173.885 564.109 174.131C564.236 174.372 564.299 174.662 564.299 175ZM567.41 177H565.918V169.979H567.41V177ZM565.829 168.12C565.829 167.853 565.901 167.648 566.045 167.504C566.193 167.36 566.403 167.288 566.673 167.288C566.936 167.288 567.139 167.36 567.283 167.504C567.431 167.648 567.505 167.853 567.505 168.12C567.505 168.374 567.431 168.575 567.283 168.723C567.139 168.867 566.936 168.938 566.673 168.938C566.403 168.938 566.193 168.867 566.045 168.723C565.901 168.575 565.829 168.374 565.829 168.12ZM571.917 177.127C571.041 177.127 570.357 176.81 569.866 176.175C569.375 175.54 569.13 174.649 569.13 173.502C569.13 172.351 569.378 171.456 569.873 170.817C570.372 170.174 571.062 169.853 571.942 169.853C572.865 169.853 573.567 170.193 574.049 170.875H574.126C574.054 170.371 574.018 169.973 574.018 169.681V167.123H575.516V177H574.348L574.088 176.08H574.018C573.54 176.778 572.839 177.127 571.917 177.127ZM572.317 175.921C572.93 175.921 573.377 175.75 573.656 175.407C573.935 175.06 574.079 174.499 574.088 173.725V173.515C574.088 172.631 573.944 172.002 573.656 171.63C573.368 171.257 572.917 171.071 572.304 171.071C571.779 171.071 571.375 171.285 571.091 171.712C570.808 172.136 570.666 172.741 570.666 173.528C570.666 174.306 570.804 174.901 571.079 175.312C571.354 175.718 571.766 175.921 572.317 175.921ZM580.714 177.127C579.623 177.127 578.768 176.81 578.15 176.175C577.536 175.536 577.23 174.658 577.23 173.541C577.23 172.394 577.515 171.492 578.087 170.836C578.658 170.181 579.443 169.853 580.442 169.853C581.368 169.853 582.1 170.134 582.638 170.697C583.175 171.26 583.444 172.034 583.444 173.02V173.826H578.766C578.787 174.507 578.971 175.032 579.318 175.4C579.665 175.764 580.154 175.946 580.784 175.946C581.199 175.946 581.584 175.908 581.94 175.832C582.299 175.752 582.684 175.62 583.095 175.438V176.651C582.731 176.824 582.363 176.947 581.99 177.019C581.618 177.091 581.193 177.127 580.714 177.127ZM580.442 170.982C579.968 170.982 579.587 171.133 579.299 171.433C579.015 171.734 578.846 172.172 578.791 172.747H581.978C581.969 172.167 581.83 171.729 581.559 171.433C581.288 171.133 580.916 170.982 580.442 170.982Z" fill="#262626"/>
                                <path class="lytton-svg text" d="M679.285 346V336.72H680.802V344.699H684.732V346H679.285ZM685.106 338.979H686.731L688.159 342.959C688.375 343.527 688.519 344.06 688.591 344.559H688.642C688.68 344.326 688.75 344.045 688.851 343.715C688.953 343.381 689.49 341.802 690.464 338.979H692.076L689.073 346.933C688.527 348.393 687.618 349.123 686.344 349.123C686.014 349.123 685.692 349.087 685.379 349.015V347.834C685.603 347.885 685.859 347.911 686.147 347.911C686.867 347.911 687.372 347.494 687.664 346.66L687.924 346L685.106 338.979ZM695.757 344.921C696.121 344.921 696.485 344.864 696.849 344.75V345.873C696.684 345.945 696.471 346.004 696.208 346.051C695.95 346.102 695.681 346.127 695.402 346.127C693.989 346.127 693.282 345.382 693.282 343.893V340.109H692.323V339.449L693.352 338.903L693.86 337.418H694.78V338.979H696.779V340.109H694.78V343.867C694.78 344.227 694.869 344.493 695.047 344.667C695.228 344.836 695.465 344.921 695.757 344.921ZM700.874 344.921C701.238 344.921 701.602 344.864 701.965 344.75V345.873C701.8 345.945 701.587 346.004 701.324 346.051C701.066 346.102 700.797 346.127 700.518 346.127C699.105 346.127 698.398 345.382 698.398 343.893V340.109H697.44V339.449L698.468 338.903L698.976 337.418H699.896V338.979H701.896V340.109H699.896V343.867C699.896 344.227 699.985 344.493 700.163 344.667C700.345 344.836 700.582 344.921 700.874 344.921ZM709.602 342.477C709.602 343.624 709.308 344.519 708.719 345.162C708.131 345.805 707.312 346.127 706.263 346.127C705.607 346.127 705.027 345.979 704.524 345.683C704.02 345.386 703.633 344.961 703.362 344.407C703.091 343.852 702.956 343.209 702.956 342.477C702.956 341.339 703.248 340.45 703.832 339.811C704.416 339.172 705.239 338.853 706.301 338.853C707.317 338.853 708.121 339.181 708.713 339.836C709.305 340.488 709.602 341.368 709.602 342.477ZM704.492 342.477C704.492 344.098 705.091 344.908 706.288 344.908C707.473 344.908 708.066 344.098 708.066 342.477C708.066 340.873 707.469 340.071 706.276 340.071C705.649 340.071 705.194 340.279 704.911 340.693C704.631 341.108 704.492 341.703 704.492 342.477ZM717.498 346H716V341.684C716 341.142 715.89 340.738 715.67 340.471C715.454 340.205 715.109 340.071 714.635 340.071C714.005 340.071 713.544 340.257 713.252 340.63C712.96 341.002 712.814 341.626 712.814 342.502V346H711.322V338.979H712.49L712.699 339.9H712.776C712.987 339.566 713.288 339.307 713.677 339.125C714.066 338.944 714.498 338.853 714.972 338.853C716.656 338.853 717.498 339.709 717.498 341.423V346Z" fill="#262626"/>
                                <path class="calamvale-svg text" d="M579.957 600.888C579.085 600.888 578.4 601.197 577.901 601.814C577.401 602.432 577.152 603.285 577.152 604.373C577.152 605.511 577.391 606.372 577.869 606.956C578.351 607.54 579.047 607.832 579.957 607.832C580.351 607.832 580.732 607.794 581.1 607.718C581.468 607.637 581.851 607.536 582.249 607.413V608.714C581.521 608.989 580.696 609.127 579.773 609.127C578.415 609.127 577.372 608.716 576.644 607.896C575.916 607.07 575.552 605.892 575.552 604.36C575.552 603.395 575.728 602.551 576.079 601.827C576.434 601.104 576.946 600.549 577.615 600.164C578.283 599.779 579.068 599.586 579.97 599.586C580.918 599.586 581.794 599.785 582.598 600.183L582.052 601.446C581.739 601.298 581.407 601.169 581.055 601.059C580.708 600.945 580.342 600.888 579.957 600.888ZM588.482 609L588.184 608.022H588.133C587.794 608.45 587.454 608.742 587.111 608.898C586.768 609.051 586.328 609.127 585.791 609.127C585.101 609.127 584.561 608.941 584.172 608.568C583.787 608.196 583.594 607.669 583.594 606.988C583.594 606.264 583.863 605.718 584.401 605.35C584.938 604.982 585.757 604.781 586.857 604.747L588.069 604.709V604.334C588.069 603.886 587.964 603.552 587.752 603.332C587.545 603.107 587.221 602.995 586.781 602.995C586.421 602.995 586.076 603.048 585.746 603.154C585.416 603.26 585.099 603.384 584.794 603.528L584.312 602.462C584.693 602.263 585.109 602.113 585.562 602.011C586.015 601.905 586.442 601.853 586.844 601.853C587.737 601.853 588.41 602.047 588.863 602.437C589.32 602.826 589.548 603.437 589.548 604.271V609H588.482ZM586.26 607.984C586.802 607.984 587.236 607.834 587.562 607.534C587.892 607.229 588.057 606.804 588.057 606.258V605.648L587.155 605.687C586.453 605.712 585.941 605.83 585.619 606.042C585.302 606.249 585.143 606.569 585.143 607C585.143 607.314 585.236 607.557 585.422 607.73C585.609 607.9 585.888 607.984 586.26 607.984ZM593.122 609H591.631V599.123H593.122V609ZM599.654 609L599.356 608.022H599.305C598.966 608.45 598.626 608.742 598.283 608.898C597.94 609.051 597.5 609.127 596.963 609.127C596.273 609.127 595.733 608.941 595.344 608.568C594.959 608.196 594.766 607.669 594.766 606.988C594.766 606.264 595.035 605.718 595.572 605.35C596.11 604.982 596.929 604.781 598.029 604.747L599.241 604.709V604.334C599.241 603.886 599.136 603.552 598.924 603.332C598.717 603.107 598.393 602.995 597.953 602.995C597.593 602.995 597.248 603.048 596.918 603.154C596.588 603.26 596.271 603.384 595.966 603.528L595.484 602.462C595.864 602.263 596.281 602.113 596.734 602.011C597.187 601.905 597.614 601.853 598.016 601.853C598.909 601.853 599.582 602.047 600.035 602.437C600.492 602.826 600.72 603.437 600.72 604.271V609H599.654ZM597.432 607.984C597.974 607.984 598.408 607.834 598.734 607.534C599.064 607.229 599.229 606.804 599.229 606.258V605.648L598.327 605.687C597.625 605.712 597.113 605.83 596.791 606.042C596.474 606.249 596.315 606.569 596.315 607C596.315 607.314 596.408 607.557 596.594 607.73C596.781 607.9 597.06 607.984 597.432 607.984ZM608.718 609H607.22V604.671C607.22 604.133 607.119 603.734 606.916 603.471C606.713 603.205 606.395 603.071 605.964 603.071C605.388 603.071 604.965 603.26 604.694 603.636C604.427 604.009 604.294 604.631 604.294 605.502V609H602.802V601.979H603.97L604.18 602.9H604.256C604.451 602.566 604.732 602.307 605.1 602.125C605.473 601.944 605.881 601.853 606.325 601.853C607.404 601.853 608.12 602.221 608.471 602.957H608.572C608.78 602.61 609.072 602.339 609.448 602.145C609.825 601.95 610.257 601.853 610.743 601.853C611.581 601.853 612.191 602.064 612.571 602.487C612.957 602.91 613.149 603.556 613.149 604.423V609H611.657V604.671C611.657 604.133 611.554 603.734 611.346 603.471C611.143 603.205 610.826 603.071 610.394 603.071C609.814 603.071 609.389 603.253 609.118 603.617C608.852 603.977 608.718 604.531 608.718 605.28V609ZM616.831 609L614.165 601.979H615.739L617.167 606.061C617.413 606.747 617.561 607.301 617.611 607.724H617.662C617.7 607.419 617.848 606.865 618.107 606.061L619.535 601.979H621.122L618.443 609H616.831ZM626.581 609L626.282 608.022H626.232C625.893 608.45 625.552 608.742 625.21 608.898C624.867 609.051 624.427 609.127 623.889 609.127C623.2 609.127 622.66 608.941 622.271 608.568C621.886 608.196 621.693 607.669 621.693 606.988C621.693 606.264 621.962 605.718 622.499 605.35C623.037 604.982 623.855 604.781 624.956 604.747L626.168 604.709V604.334C626.168 603.886 626.062 603.552 625.851 603.332C625.643 603.107 625.32 602.995 624.88 602.995C624.52 602.995 624.175 603.048 623.845 603.154C623.515 603.26 623.197 603.384 622.893 603.528L622.41 602.462C622.791 602.263 623.208 602.113 623.661 602.011C624.114 601.905 624.541 601.853 624.943 601.853C625.836 601.853 626.509 602.047 626.962 602.437C627.419 602.826 627.647 603.437 627.647 604.271V609H626.581ZM624.359 607.984C624.901 607.984 625.334 607.834 625.66 607.534C625.99 607.229 626.155 606.804 626.155 606.258V605.648L625.254 605.687C624.552 605.712 624.04 605.83 623.718 606.042C623.401 606.249 623.242 606.569 623.242 607C623.242 607.314 623.335 607.557 623.521 607.73C623.707 607.9 623.987 607.984 624.359 607.984ZM631.221 609H629.729V599.123H631.221V609ZM636.426 609.127C635.334 609.127 634.479 608.81 633.861 608.175C633.248 607.536 632.941 606.658 632.941 605.541C632.941 604.394 633.227 603.492 633.798 602.836C634.369 602.181 635.154 601.853 636.153 601.853C637.08 601.853 637.812 602.134 638.349 602.697C638.887 603.26 639.155 604.034 639.155 605.02V605.826H634.477C634.498 606.507 634.682 607.032 635.029 607.4C635.376 607.764 635.865 607.946 636.496 607.946C636.91 607.946 637.296 607.908 637.651 607.832C638.011 607.752 638.396 607.62 638.806 607.438V608.651C638.442 608.824 638.074 608.947 637.702 609.019C637.329 609.091 636.904 609.127 636.426 609.127ZM636.153 602.982C635.679 602.982 635.298 603.133 635.01 603.433C634.727 603.734 634.558 604.172 634.503 604.747H637.689C637.681 604.167 637.541 603.729 637.27 603.433C636.999 603.133 636.627 602.982 636.153 602.982Z" fill="#262626"/>
                                <path class="lucia-svg text" d="M437.199 388C437.199 388.686 436.95 389.213 436.45 389.581C435.951 389.945 435.236 390.127 434.305 390.127C433.37 390.127 432.618 389.985 432.051 389.702V388.413C432.877 388.794 433.645 388.984 434.356 388.984C435.274 388.984 435.733 388.707 435.733 388.153C435.733 387.975 435.682 387.827 435.581 387.708C435.479 387.59 435.312 387.467 435.079 387.34C434.846 387.213 434.523 387.069 434.108 386.909C433.3 386.596 432.752 386.282 432.464 385.969C432.18 385.656 432.039 385.25 432.039 384.75C432.039 384.15 432.28 383.684 432.762 383.354C433.249 383.02 433.909 382.853 434.743 382.853C435.568 382.853 436.349 383.02 437.085 383.354L436.603 384.478C435.845 384.164 435.208 384.008 434.692 384.008C433.905 384.008 433.511 384.232 433.511 384.681C433.511 384.901 433.613 385.087 433.816 385.239C434.023 385.392 434.472 385.601 435.162 385.868C435.742 386.092 436.163 386.297 436.425 386.483C436.687 386.67 436.882 386.885 437.009 387.131C437.136 387.372 437.199 387.662 437.199 388ZM441.433 388.921C441.797 388.921 442.161 388.864 442.525 388.75V389.873C442.36 389.945 442.146 390.004 441.884 390.051C441.626 390.102 441.357 390.127 441.078 390.127C439.664 390.127 438.958 389.382 438.958 387.893V384.109H437.999V383.449L439.027 382.903L439.535 381.418H440.456V382.979H442.455V384.109H440.456V387.867C440.456 388.227 440.545 388.493 440.722 388.667C440.904 388.836 441.141 388.921 441.433 388.921ZM447.47 390V380.72H448.987V388.699H452.916V390H447.47ZM459.308 390L459.099 389.08H459.023C458.815 389.405 458.519 389.661 458.134 389.848C457.753 390.034 457.317 390.127 456.826 390.127C455.976 390.127 455.341 389.915 454.922 389.492C454.503 389.069 454.294 388.428 454.294 387.569V382.979H455.798V387.309C455.798 387.846 455.908 388.25 456.128 388.521C456.348 388.788 456.693 388.921 457.163 388.921C457.789 388.921 458.248 388.735 458.54 388.362C458.836 387.986 458.985 387.357 458.985 386.477V382.979H460.483V390H459.308ZM465.44 390.127C464.378 390.127 463.57 389.818 463.015 389.2C462.465 388.578 462.19 387.687 462.19 386.528C462.19 385.347 462.478 384.439 463.053 383.805C463.633 383.17 464.469 382.853 465.561 382.853C466.301 382.853 466.968 382.99 467.56 383.265L467.11 384.465C466.479 384.219 465.958 384.097 465.548 384.097C464.333 384.097 463.726 384.903 463.726 386.515C463.726 387.302 463.876 387.895 464.177 388.292C464.482 388.686 464.926 388.883 465.51 388.883C466.174 388.883 466.803 388.718 467.395 388.388V389.689C467.129 389.846 466.843 389.958 466.538 390.025C466.238 390.093 465.872 390.127 465.44 390.127ZM470.537 390H469.046V382.979H470.537V390ZM468.957 381.12C468.957 380.853 469.029 380.648 469.172 380.504C469.321 380.36 469.53 380.288 469.801 380.288C470.063 380.288 470.266 380.36 470.41 380.504C470.558 380.648 470.632 380.853 470.632 381.12C470.632 381.374 470.558 381.575 470.41 381.723C470.266 381.867 470.063 381.938 469.801 381.938C469.53 381.938 469.321 381.867 469.172 381.723C469.029 381.575 468.957 381.374 468.957 381.12ZM477.069 390L476.771 389.022H476.72C476.381 389.45 476.041 389.742 475.698 389.898C475.355 390.051 474.915 390.127 474.378 390.127C473.688 390.127 473.148 389.941 472.759 389.568C472.374 389.196 472.181 388.669 472.181 387.988C472.181 387.264 472.45 386.718 472.987 386.35C473.525 385.982 474.344 385.781 475.444 385.747L476.656 385.709V385.334C476.656 384.886 476.551 384.552 476.339 384.332C476.132 384.107 475.808 383.995 475.368 383.995C475.008 383.995 474.663 384.048 474.333 384.154C474.003 384.26 473.686 384.384 473.381 384.528L472.899 383.462C473.279 383.263 473.696 383.113 474.149 383.011C474.602 382.905 475.029 382.853 475.431 382.853C476.324 382.853 476.997 383.047 477.45 383.437C477.907 383.826 478.135 384.437 478.135 385.271V390H477.069ZM474.847 388.984C475.389 388.984 475.823 388.834 476.149 388.534C476.479 388.229 476.644 387.804 476.644 387.258V386.648L475.742 386.687C475.04 386.712 474.528 386.83 474.206 387.042C473.889 387.249 473.73 387.569 473.73 388C473.73 388.314 473.823 388.557 474.009 388.73C474.196 388.9 474.475 388.984 474.847 388.984Z" fill="#262626"/>
                            </svg>
                        </div>
                        <div class="area-text">
                            <h3>Enoggera</h3>
                            <p class="description">Enoggera has a great community feel, with a mix of "old timers" and
                                families
                                discovering the area
                                because of the proximity to the CBD, and easy access to schools, shops, transport – all
                                fairly
                                well within walking distance.</p>
                            <p class="text--big">Distance to nearest train - <span>Gaythorne</span></p>
                            <div class="distance">
                                <div class="icon-wrapper"><img
                                            src="https://conversionratestore.github.io/projects/hantergalloway/img/car.svg"
                                            alt="car">
                                    <p>2 mins</p></div>
                                <div class="icon-wrapper"><img
                                            src="https://conversionratestore.github.io/projects/hantergalloway/img/train.svg"
                                            alt="train">
                                    <p>12 mins</p></div>
                                <div class="icon-wrapper"><img
                                            src="https://conversionratestore.github.io/projects/hantergalloway/img/walk.svg"
                                            alt="walk">
                                    <p>12 mins</p></div>
                                <div class="icon-wrapper"><img
                                            src="https://conversionratestore.github.io/projects/hantergalloway/img/bicycle.svg"
                                            alt="bicycle">
                                    <p>4 mins</p></div>
                            </div>
                            <div class="benefits">
                                <div class="benefit">
                                    <div>
                                        <img src="https://conversionratestore.github.io/projects/hantergalloway/img/price.svg"
                                             alt="price">
                                    </div>
                                    <div>
                                        <p class="orange_color">$900k</p>
                                        <p>Median home price</p>
                                    </div>
                                </div>
                                <div class="benefit">
                                    <div>
                                        <img src="https://conversionratestore.github.io/projects/hantergalloway/img/roi.svg"
                                             alt="roi">
                                    </div>
                                    <div>
                                        <p class="orange_color"></p>
                                        <p>Median Price Change (1 yr)</p>
                                    </div>
                                </div>
                                <div class="benefit">
                                    <div>
                                        <img src="https://conversionratestore.github.io/projects/hantergalloway/img/roi.svg"
                                             alt="roi">
                                    </div>
                                    <div>
                                        <p class="orange_color"></p>
                                        <p>Median Gross Yield</p>
                                    </div>
                                </div>
                                <div class="benefit">
                                    <div>
                                        <img src="https://conversionratestore.github.io/projects/hantergalloway/img/cafes.svg"
                                             alt="cafes">
                                    </div>
                                    <div>
                                        <p class="orange_color">24</p>
                                        <p>Cafes in the area</p>
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-black">Get More Info</button>
                            <img class="modal__close" src="<?php echo get_template_directory_uri(); ?>/images/close-x.svg" alt="close">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="free-assessment">
            <div class="free-assessment__inner container ">
                <p>We can find you the perfect home loan solution</p>
                <button class="btn btn--yellow" onclick="getCLick">Get a Free Assessment</button>
            </div>
        </div>
        <section class="suburb-loan container">
            <h2>Brisbane's <span class="orange_color">Top 10 Suburbs</span> Compared</h2>
            <div class="suburb-loan__wrapper">
                <table class="suburb-loan__table">
                    <tr class="table-headers">
                        <th class="th--active">Suburb name</th>
                        <th>Distance from CBD</th>
                        <th>Median house price</th>
                        <th>Number of house sales in past 12 mths</th>
                        <th>Schools</th>
                        <th>Green Zones</th>
                        <th>Cafes/Bars</th>
                        <th>Get more info</th>
                    </tr>
                </table>
            </div>

        </section>
        <div class="map_page_get_a_loan">
            <div class="container">
                <div class="small_title black">Calculate my borrowing capacity<br>for buying a property in <span class="orange_color">Brisbane</span></div>
                <div class="map_page_form">
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
                <div class="answer_new">
                    <div class="data">
                        <div>
                            <p>Your annual income<br><span class="income_r">$ 50, 000</span></p>
                            <p>Where are you buying?<br><span class="place_a">Enoggera</span></p>
                            <p>Your deposit<br><span class="deposit_a">$ 50, 000</span></p>
                            <p>Current situation<br><span class="situation_a">Single</span></p>
                            <p>You are a first home buyer<br><span class="fho_a">Yes</span></p>
                            <p>Do you have any dependents?<br><span class="dependents_a">0</span></p>
                        </div>
                        <button class="recalc" onclick="recalculate()">Recalculate</button>
                    </div>
                    <div class="result">
                        <p>You can get a loan of<br><span>up to $378,947.</span></p>
                        <p>However, considering your available deposit you can buy a <b>$320,000</b> home.</p>
                        <p>(your deposit should cover at least 8% of your home price)</p>
                        <p>Great! What’s next? Discuss these figures with our mortgage broker and find out how to get the best deal.</p>
                        <button class="btn_yellow popup_show" onclick="popupShow()">Secure This Loan</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="map_page_pb_prize">
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
                    <p class="text_bigger">Get a loan on a property <span class="orange_color">in Enogerra</span></p>
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
    </main>

    <script>
        document.querySelectorAll('.map path').forEach(item => {
            item.addEventListener('mouseover', function () {
                document.querySelectorAll(`.map path.${item.classList[0]}:not(.text)`).forEach(i => {
                    i.style.fill = '#FDB948'
                })
            })
            item.addEventListener('mouseout', function () {
                document.querySelectorAll(`.map path.${item.classList[0]}:not(.text)`).forEach(i => {
                    i.style.fill = ''
                })
            })
        })


        document.querySelector('.free-assessment button').addEventListener('click', function() {
            document.querySelector('.header_wrapper a.btn_yellow.rc_open').click()
        })

        document.querySelector('.dark_bg').addEventListener('click', function () {
            this.style.display = 'none'
        })

        const suburbs = [
            ['CHANDLER', '18km', '$1,600,000', 137, 9, 9, 4, 'https://hgstagingsite.wpengine.com/district/?chandler'],
            ['HAMILTON', '8km', '$1,560,500', 60, 2, 7, 18, 'https://hgstagingsite.wpengine.com/district/?hamilton'],
            ['ST LUCIA', '7km', '$1,500,000', 110, 4, 9, 2, 'https://hgstagingsite.wpengine.com/district/?lucia'],
            ['PULLENVALE', '18km', '$1,370,000', 60, 12, 7, 2, 'https://hgstagingsite.wpengine.com/district/?pullenvale'],
            ['THE GABBA', '3km', '$1,300,000', 81, 1, 9, 7, 'https://hgstagingsite.wpengine.com/district/?gabba'],
            ['CENTRAL', '0km', '$1,100,000', 95, 8, 5, 10, 'https://hgstagingsite.wpengine.com/district/?central'],
            ['TOOWONG', '6km', '$1,025,000', 112, 4, 9, 7, 'https://hgstagingsite.wpengine.com/district/?toowong'],
            ['TENNYSON', '8km', '$970,500', 10, 5, 2, 2, 'https://hgstagingsite.wpengine.com/district/?tennyson'],
            ['MORNINGSIDE', '8km', '$891,000', 110, 6, 9, 7, 'https://hgstagingsite.wpengine.com/district/?morningside'],
            ['HOLLAND PARK', '9km', '$878,000', 204, 7, 9, 5, 'https://hgstagingsite.wpengine.com/district/?holland'],
        ];

        const dataMain = {
            'pullenvale': {
                title: 'Pullenvale',
                descr: 'Pullenvale is happily nestled into the southern foothills of Mount Elphinstone, about 15 kilometres from the Brisbane CBD',
                dist: ['Pinjarra Hills', '3', '27', '27', '9'],
                other: ['$1.37M', '22.14%', '3.8%', '2']
            },
            'enoggera': {
                title: 'Enoggera',
                descr: 'Enoggera has a great community feel, with a mix of "old timers" and families discovering the area because of the proximity to the CBD, and easy access to schools, shops, transport – all fairly well within walking distance',
                dist: ['Gaythorne', '2', '12', '12', '4'],
                other: ['$775k', '10.71%', '3.4%', '3']
            },
            'gap': {
                title: 'The Gap',
                descr: 'The Gap — Brisbane\'s most lush suburb. Its safe and very friendly — the kind of neighbourhood where children play in the street and many of the people who live there grow their own herb gardens, sharing their produce with their neighbours. Its quite an affluent suburb with many residents being business owners',
                dist: ['Keperra', '8', '56', '56', '12'],
                other: ['$815k', '8.68%', '3.5%', '4']
            },
            'mcdowall': {
                title: 'McDowall',
                descr: 'McDowall, a residential suburb, is immediately east of the Bunyaville State Forest Park and 11 km north-west of central Brisbane. It was named after an early farmer in the adjoining suburb of Everton Park',
                dist: ['Bridgeman Downs', '5', '7', '35', '10'],
                other: ['$730k', '7.22%', '3.9%', '2']
            },
            'bracken': {
                title: 'Bracken Ridge',
                descr: 'Bracken Ridge is mainly residential suburb, popular with families, good access to the beach at Redcliffe and the Sunshine Coast. Bracken Ridge is made up predominantly of single unit dwellings (houses) with relatively few unit/townhouse developments',
                dist: ['Fitzgibbon', '3', '22', '22', '6'],
                other: ['$570k', '9.66%', '4.3%', '6']
            },
            'deagon': {
                title: 'Deagon',
                descr: 'Deagon, a residential suburb on the Sandgate railway line, is 16 km north of central Brisbane. It is partly separated from Sandgate by a series of lagoons and former water reserves, and is bounded on the south by the Cabbage Tree Creek',
                dist: ['Sandgate', '3', '9', '16', '6'],
                other: ['$554k', '13.21%', '3.9%', '1']
            },
            'northgate': {
                title: 'Northgate',
                descr: 'Northgate, a residential and industrial suburb on the Sandgate railway line, is 10 km north-east of central Brisbane. Northgate is located 9 kilometres (5.6 mi) north of the Brisbane CBD',
                dist: ['Toombul', '6', '28', '28', '8'],
                other: ['$810k', '16.69%', '3.2%', '4']
            },
            'central': {
                title: 'Central',
                descr: `Central, an inner Brisbane suburb, is immediately north and north-west of the city centre. The dividing boundary between Central and the city is Wickham Terrace which, incidentally, is the suburb's most notable thoroughfare`,
                dist: ['Fortitude Valley', '5', '14', '14', '4'],
                other: ['$1.1M', '8.86%', '2.8%', '10']
            },
            'toowong': {
                title: 'Toowong',
                descr: '"Part built-up commercial and residential precinct, part hilly heritage haven – Toowong is a harmonious inner-city duet. Less than five kilometres from the city and with an enviable range of serqldes and facilities, Toowong is a handy home for professionals, families and students"',
                dist: ['Taringa', '3', '15', '15', '10'],
                other: ['$1.025M', '5.15%', '3%', '7']
            },
            'lucia': {
                title: 'St Lucia',
                descr: 'St Lucia (or Walter Taylor), a residential suburb with the University of Queensland occupying its eastern end, is four km south-west of central Brisbane',
                dist: ['Taringa', '7', '28', '36', '16'],
                other: ['$1.5M', '21.09%', '1.9%', '2']
            },
            'jamboree': {
                title: 'Jamboree',
                descr: 'Jamboree, a residential suburb developed during the 1960s-70s, is 12 km south-west of central Brisbane',
                dist: ['Mount Ommaney', '4', '18', '18', '8'],
                other: ['$582k', '13.13%', '4%', '2']
            },
            'richlands': {
                title: 'Richlands',
                descr: 'Richlands, a predominantly industrial suburb adjoining Wacol and Inala, is 16 km south-west of central Brisbane',
                dist: ['Inala', '4', '30', '30', '9'],
                other: ['$444k', '0.97%', '5.1%', '1']
            },
            'parkinson': {
                title: 'Parkinson',
                descr: 'Parkinson is a residential suburb on the southern municipal boundary of the City of Brisbane',
                dist: ['Algester', '4', '10', '40', '11'],
                other: ['$720k', '6.97%', '3.7%', '4']
            },
            'moorooka': {
                title: 'Moorooka',
                descr: '"Once known only as the home of Brisbane’s Magic Mile of car dealerships, Moorooka is now a comfortable and welcoming residential neighbourhood. The well-worn streets of this older suburb have been rejuvenated by an influx of families from near and far"',
                dist: ['Annerley', '5', '11', '31', '10'],
                other: ['$762k', '15.38%', '3.1%', '8']
            },
            'tennyson': {
                title: 'Tennyson',
                descr: 'Tennyson, a river-side suburb, is seven km south-west of central Brisbane',
                dist: ['Yeerongpilly', '2', '15', '15', '5'],
                other: ['$970k', '2.47%', '3.6%', '2']
            },
            'holland': {
                title: 'Holland Park',
                descr: 'Holland Park and Holland Park West lie north-east and south-west of Logan Road respectively, 6 km south-east of central Brisbane',
                dist: ['Holland Park West', '2', '9', '11', '4'],
                other: ['$878k', '12.72%', '3.1%', '5']
            },
            'morningside': {
                title: 'Morningside',
                descr: 'Morningside, a residential suburb on Wynnum Road, is five km east of central Brisbane. There are many older-style weatherboard and chamferboard homes in this area as well as modern units and townhouses',
                dist: ['Seven Hills', '4', '19', '19', '7'],
                other: ['$891k', '2.45%', '3.3%', '7']
            },
            'chandler': {
                title: 'Chandler',
                descr: 'Chandler, a sparsely settled suburb, is 14 km south-east of central Brisbane. Originally part of Belmont and the western edge of Capalaba, Chandler was gazetted as a suburb in 1975',
                dist: ['Gumdale', '4', '37', '37', '11'],
                other: ['$1.6M', '2.24%', '-', '4']
            },
            'wishart': {
                title: 'Wishart',
                descr: 'Wishart, a residential suburb between Upper Mount Gravatt and the Bulimba Creek, is 12 km south-east of central Brisbane',
                dist: ['Mackenzie', '3', '25', '25', '8'],
                other: ['$823k', '14.42%', '3.4%', '3']
            },
            'macgregor': {
                title: 'Macgregor',
                descr: 'MacGregor, one of a group of residential suburbs around Mount Gravatt named after Queensland public figures, is 13 km south-east of central Brisbane',
                dist: ['Stretton', '4', '26', '34', '12'],
                other: ['$745k', '-1.97%', '3.4%', '5']
            },
            'calamvale': {
                title: 'Calamvale',
                descr: 'Calamvale, a residential suburb, is 17 km south of central Brisbane. It has a relatively youthful population, the median age being 31 years (2011 census) compared with 37 years for Australia',
                dist: ['Stretton', '4', '26', '34', '12'],
                other: ['$655k', '1.16%', '3.8%', '3']
            },
            'chermside': {
                title: 'Chermside',
                descr: `Chermside, a residential suburb on Gympie Road, is 11 km north of central Brisbane. The area was originally known as Downfall Creek, the suburb's present northern boundary`,
                dist: ['Chermside South', '4', '7', '7', '2'],
                other: ['$700k', '14.61%', '3%', '2']
            },
            'gabba': {
                title: 'The Gabba',
                descr: 'The Gabba, an inner Brisbane suburb, is two km south-east of the city centre and overlooks the St Lucia Reach of the Brisbane River',
                dist: ['Dutton Park', '2', '8', '17', '5'],
                other: ['$1.3M', '11.51%', '2.2%', '7']
            },
            'hamilton': {
                title: 'Hamilton',
                descr: 'Hamilton is an industrial and residential suburb on the north side of the Brisbane River near its entry to Moreton Bay, is 11 km north-east of Central Brisbane',
                dist: ['Eagle Farm', '9', '36', '36', '10'],
                other: ['$1.56M', '29.71%', '2.1%', '18']
            },
            'wynnum': {
                title: 'Wynnum-Manly',
                descr: 'Wynnum-Manly, a post World War II suburb, is 13 km east of central Brisbane',
                dist: ['Manly West', '6', '38', '38', '12'],
                other: ['$600k', '14.42%', '3.5%', '3']
            },
            'lytton': {
                title: 'Lytton',
                descr: 'Lytton, an industrial suburb, is on the south-east bank of the Brisbane River at its seaward end. It is 13 km north-east of central Brisbane, but considerably further by road or railway',
                dist: ['Hemmant', '5', '43', '43', '11'],
                other: ['$600k', '-', '-', '6']
            },

        }

        /* START Table */

        // draw table on the page
        const table = document.querySelector('.suburb-loan__table');
        for (let row of suburbs) {
            table.insertRow();

            for (let cell of row) {
                let newCell = table.rows[table.rows.length - 1].insertCell();

                newCell.textContent = cell;
            }
        }

        // change last cell with link
        for (let i = 1; i < table.rows.length; i++) {
            table.rows[i].cells[table.rows[i].cells.length - 1].innerHTML = `<a href="${table.rows[i].cells[table.rows[i].cells.length - 1].innerText.toLowerCase()}">Explore the suburb</a>`;
        }

        // sorting table logic
        const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

        const comparer = (idx, asc) => (a, b) => ((v1, v2) =>
                v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
        )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

        table.querySelectorAll('th').forEach((th, index, array) => th.addEventListener('click', (function() {
            if (index !== (array.length - 1)) {
                Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
                    .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
                    .forEach(tr => table.appendChild(tr));

                document.querySelectorAll('.th--active').forEach(th => {
                    th.classList.remove('th--active')
                })
                this.classList.add('th--active');
            }
        })));

        /* END Table */

        document.querySelectorAll('.answer').forEach(item => {
            item.addEventListener('click', () => {
                item.querySelector('input').click();
            });
        });



        document.querySelectorAll('.map svg path').forEach(area => {
            area.addEventListener('click', () => {
                document.querySelector('.modal').style.display = 'block';

                // area.closest('.map').style.display = 'none'

                let areaName = area.classList[0].split('-')[0];
                let map = document.querySelector('.area-image svg');

                function goToDistrict() {
                    window.location.href = `https://hgstagingsite.wpengine.com/district/?${areaName}`
                }

                document.querySelectorAll(`.modal .${areaName}-svg:not(.text)`).forEach(i => {
                    i.style.fill = '#FDB948';
                })

                document.querySelector('.modal .area-text h3').innerText = dataMain[areaName].title
                document.querySelector('.modal .area-text .description').innerText = dataMain[areaName].descr
                document.querySelector('.modal .area-text .text--big span').innerText = dataMain[areaName].dist[0]
                document.querySelectorAll('.modal .area-text .distance .icon-wrapper p').forEach((item, i) => {
                    item.innerText = `${dataMain[areaName].dist[i+1]} mins`
                })

                document.querySelectorAll('.modal .area-text .benefits .orange_color').forEach((item, i) => {
                    item.innerText = dataMain[areaName].other[i]
                })

                document.querySelector('.modal__inner .btn-black').addEventListener('click', goToDistrict)

                switch (areaName) {
                    case 'pullenvale':
                        map.style.cssText = 'left: 7%; top: -7%; transform: scale(1.1);';
                        break;
                    case 'gap':
                        map.style.cssText = 'left: -4%; top: 10%; transform: scale(1.5);';
                        break;
                    case 'enoggera':
                        map.style.cssText = 'left: -18%; top: 30%; transform: scale(2.5);';
                        break;
                    case 'mcdowall':
                        map.style.cssText = 'left: -35%; top: 65%; transform: scale(2.5);';
                        break;
                    case 'bracken':
                        map.style.cssText = 'left: -45%; top: 95%; transform: scale(2.5);';
                        break;
                    case 'deagon':
                        map.style.cssText = 'left: -60%; top: 85%; transform: scale(2.5);';
                        break;
                    case 'chermside':
                        map.style.cssText = 'left: -45%; top: 50%; transform: scale(2.5);';
                        break;
                    case 'northgate':
                        map.style.cssText = 'left: -62%; top: 55%; transform: scale(2.5);';
                        break;
                    case 'central':
                        map.style.cssText = 'left: -47%; top: 15%; transform: scale(2);';
                        break;
                    case 'toowong':
                        map.style.cssText = 'left: -26%; top: 0%; transform: scale(2);';
                        break;
                    case 'lucia':
                        map.style.cssText = 'left: -30%; top: -25%; transform: scale(2);';
                        break;
                    case 'jamboree':
                        map.style.cssText = 'left: -13%; top: -55%; transform: scale(2);';
                        break;
                    case 'hamilton':
                        map.style.cssText = 'left: -55%; top: 30%; transform: scale(2);';
                        break;
                    case 'wynnum':
                        map.style.cssText = 'left: -60%; top: 30%; transform: scale(2);';
                        break;
                    case 'lytton':
                        map.style.cssText = 'left: -60%; top: 0%; transform: scale(2);';
                        break;
                    case 'morningside':
                        map.style.cssText = 'left: -45%; top: 0%; transform: scale(2);';
                        break;
                    case 'gabba':
                        map.style.cssText = 'left: -30%; top: 0%; transform: scale(2);';
                        break;
                    case 'chandler':
                        map.style.cssText = 'left: -60%; top: -45%; transform: scale(2);';
                        break;
                    case 'wishart':
                        map.style.cssText = 'left: -55%; top: -45%; transform: scale(2);';
                        break;
                    case 'holland':
                        map.style.cssText = 'left: -45%; top: -45%; transform: scale(2);';
                        break;
                    case 'macgregor':
                        map.style.cssText = 'left: -55%; top: -60%; transform: scale(2);';
                        break;
                    case 'calamvale':
                        map.style.cssText = 'left: -55%; top: -80%; transform: scale(2);';
                        break;
                    case 'parkinson':
                        map.style.cssText = 'left: -30%; top: -80%; transform: scale(2);';
                        break;
                    case 'richlands':
                        map.style.cssText = 'left: -13%; top: -80%; transform: scale(2);';
                        break;
                    case 'moorooka':
                        map.style.cssText = 'left: -35%; top: -70%; transform: scale(2);';
                        break;
                    case 'tennyson':
                        map.style.cssText = 'left: -25%; top: -45%; transform: scale(2);';
                        break;
                    default:
                        break;
                }
            });
        });

        document.querySelector('.modal__close').addEventListener('click', () => {
            document.querySelector('.modal').style.display = 'none';
            document.querySelectorAll('.modal svg path').forEach(area => {
                if (area.classList[0]) {
                    area.style.fill = '';
                }
            });
            document.querySelector('.modal__inner .btn-black').removeEventListener('click', goToDistrict)

        });

        /* START Only numeric input  */

        // Restricts input for the given textbox to the given inputFilter function.
        function setInputFilter(textbox, inputFilter) {
            ['input', 'keydown', 'keyup', 'mousedown', 'mouseup', 'select', 'contextmenu', 'drop'].forEach(function (event) {
                textbox.forEach(item => {
                    item.addEventListener(event, function () {
                        if (inputFilter(this.value)) {
                            this.oldValue = this.value;
                            this.oldSelectionStart = this.selectionStart;
                            this.oldSelectionEnd = this.selectionEnd;
                        } else if (this.hasOwnProperty('oldValue')) {
                            this.value = this.oldValue;
                            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                        } else {
                            this.value = '';
                        }
                    });
                });
            });
        }

        setInputFilter(document.querySelectorAll('.number-input'), function (value) {
            return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
        });

        /* END Only numeric input*/
    </script>

<?php

get_footer();
