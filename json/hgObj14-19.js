let districts = {
     'moorooka': {
        title: 'Moorooka',
        descr: 'Once known only as the home of Brisbane’s Magic Mile of car dealerships, Moorooka is now a comfortable and welcoming residential neighbourhood. The well-worn streets of this older suburb have been rejuvenated by an influx of families from near and far',
        params: ['762,000','8.77','','','8'],
        lifestyle:
            `Families and professional couples are flocking to Moorooka to enjoy the magic mix of generous backyards and proximity to the city. It’s also the new home of recently-arrived families from East Africa who are making a vibrant contribution to this growing community. It’s not just the homes that have been renovated here — Moorooka itself feels fresh and new. Dogs are walked along the tree-lined streets and the suburb is peppered with small local parks, ultimately backing onto Toohey Forest Park on its Western edge. With 100 businesses located in the Moorvale shopping area on Beaudesert Road, it’s easy to shop and eat locally. The African community has left its mark here too, with grocery stores, hairdressers and Halal butchers meeting the needs of the new locals. New cafes are popping up on street corners to make sure that this neighbourhood is well fed and caffeinated, without having to jump in the car`,
        schools: [
            {
                name: 'Moorooka State School',
                type: 'government',
                age: '0-6',
                edu: 'CoEd',
                address: 'Moorooka 4105',
                filter: ['primary', '', '']
            },
             {
                name: 'Rocklea State School',
                type: 'government',
                age: '0-6',
                edu: 'CoEd',
                address: 'Rocklea 4106',
                filter: ['primary', '', '']
            },
              {
                name: `St Brendan's Primary School`,
                type: 'private',
                age: '0-6',
                edu: 'CoEd',
                address: 'Moorooka 4105',
                filter: ['primary', '', 'private']
            },
        ],
        parks:[
            {
                name: 'Alexander Park (Moorooka Recreation Reserve)',
                address: '334 Beaudesert Road',
                descr: 'Australian Rules facility and playground (Currey Avenue), car parking, seating, water (bubbler/tap)',
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/moorooka/moorooka_alexander_park.jpg',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/moorooka/moorooka_alexander_park1.jpg']
            },
              {
                name: 'Clifton Street Park',
                address: '2 Fleurs Street',
                descr: 'Bikeway',
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/moorooka/moorooka_clifton_street_park.jpg',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/moorooka/moorooka_clifton_street_park1.jpg']
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
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/moorooka/moorooka_john_bright_street_park.jpg',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/moorooka/moorooka_john_bright_street_park1.jpg']
            },
             {
                name: 'Koala Park (Peggs Park)',
                address: '114 Vendale Avenue',
                descr: 'Moorooka Bowls Club, car park (Vendale Avenue), picnic area/shelter, community garden with wheelchair accessible water bubbler, habitat restoration site (Moorooka Greening Group), shared pathway',
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/moorooka/moorooka_koala_park_peggs_park.jpg',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/moorooka/moorooka_koala_park_peggs_park1.jpg']
            },
              {
                name: 'Mayfield Gardens',
                address: '311 Tarragindi Road',
                descr: 'Habitat restoration site (Moorooka Greening Group), seat, shared pathway',
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/moorooka/moorooka_mayfield_gardens.jpg',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/moorooka/moorooka_mayfield_gardens1.jpg']
            },
               {
                name: 'Moorooka Playground Park',
                address: '25 Nettleton Crescent',
                descr: 'Playground — shaded, picnic area/shelter, shared pathway',
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/moorooka/moorooka_moorooka_playground_park.jpg',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/moorooka/moorooka_moorooka_playground_park1.jpg']
            },
                {
                name: 'Stimpson Park',
                address: '904 Ipswich Road',
                descr: 'Cultural heritage site — memorial and toilet (Beaudesert Road), seating, water (drinking fountain)',
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/moorooka/moorooka_stimpson_park.jpg',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/moorooka/moorooka_stimpson_park1.jpg']
            },
                 {
                name: 'Veterans Park',
                address: '48 Anson Street',
                descr: 'Picnic area/shelter, outdoor fitness/exercise equipment, playground, shared pathway, water (bubbler)',
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/moorooka/moorooka_veterans_park.jpg',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/moorooka/moorooka_veterans_park1.jpg']
            }
        ],
        transport: {
            'Annerley': ['5 mins', '11 mins', '31 mins', '10 mins'],
            'Rocklea': ['9 mins', '58 mins', '58 mins', '15 mins'], 
            'Salisbury': ['5 mins', '18 mins', '39 mins', '12 mins'],
            'Tarragindi': ['5 mins', '35 mins', '33 mins', '15 mins'],
            'Yeerongpilly': ['6 mins', '37 mins', '37 mins', '11 mins'],
            'Yeronga': ['7 mins', '30 mins', '37 mins', '12 mins']
        },
        places: [
            ['Mount Gravatt', '740,000'],
            ['Northgate', '810,000'],
            ['Corinda', '920,000']
        ]
    },
     'tennyson': {
        title: 'Tennyson',
        descr: `Tennyson, a river-side suburb, is seven km south-west of central Brisbane. The stretch of river adjoining Tennyson is known as Canoe Reach, a name that arose from European contact pre-dating by a few months John Oxley's settlement at Redcliffe`,
        params: ['970,000','2.09','','','2'],
        lifestyle:
            `Only 8km's from the city, close to transport, parks, swimming pool and tennis court (local school), shops, Woolworths at Moorooka and Coles at Fairfield. Views to Tennyson Tennis Courts and Brisbane Golf Course. Close to Rocklea Markets and Ipswich motorway. Gym available at TAFE which is located very close by. TAFE walking distance. Close to Yeronga RSL and local restaurants. Lifestyle in this suburb are quiet and leafy, it is also within walking distance to the finest cafe and bakery in Brisbane. Also a short walk to riverside playgrounds. The Tennis centre is a world class venue and a great asset to this community and the organistaion works very closely to residents to ensure community input is upheld`,
        schools: [
            {
                name: 'Yeronga State School',
                type: 'government',
                age: 'Prep-6',
                edu: 'CoEd',
                address: 'Yeronga 4104',
                filter: ['primary', '', '']
            },
             {
                name: 'Sherwood State School',
                type: 'government',
                age: 'Prep-6',
                edu: 'CoEd',
                address: 'Sherwood 4075',
                filter: ['primary', '', '']
            },
              {
                name: `Graceville State School`,
                type: 'private',
                age: 'Prep-6',
                edu: 'CoEd',
                address: 'Graceville 4075',
                filter: ['primary', '', '']
            },
              {
                name: `St Sebastian's Primary School`,
                type: 'private',
                age: 'Prep-6',
                edu: 'CoEd',
                address: 'Yeronga 4104',
                filter: ['primary', '', 'private']
            },
              {
                name: `Barrett Adolescent Centre Special School`,
                type: 'special',
                age: '7-12',
                edu: 'CoEd',
                address: 'Tennyson 4105',
                filter: ['', 'secondary', '']
            }
        ],
        parks:[
            {
                name: 'Myla Terrace Park (road reserve)',
                address: '52 Myla Terrace',
                descr: 'Cultural heritage site (RSL memorial) and seating',
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/tennyson/tennyson_myla_terrace_park.jpg']
            },
              {
                name: 'Ken Fletcher Park',
                address: '167 King Arthur Terrace',
                descr: 'Amphitheatre, barbecue (electric), booking site, bus drop-off area, car park, playground, interpretive signage with braille, picnic area, plaza, public art, public pontoon, seating, shade, toilets (including accessible toilets and accessible adult changing facilities), shared pathway, bike rack, water',
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/tennyson/tennyson_ken_fletcher_park.jpg',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/tennyson/tennyson_ken_fletcher_park1.jpg']
            }
        ],
        transport: {
            'Yeerongpilly': ['2 mins', '15 mins', '15 mins', '5 mins'],
            'Rocklea': ['8 mins', '1 hour 3 mins', '1 hour 2 mins', '17 mins'], 
            'Sherwood': ['6 mins', '38 mins', '38 mins', '11 mins'],
            'Graceville': ['3 mins', '31 mins', '31 mins', '8 mins'],
            'Indooroopilly': ['8 mins', '1 hour 5 mins', '1 hour 1 mins', '18 mins']      
        },
        places: [
            ['Fairfield', '860,000'],
            ['Camp Hill', '1,079,000'],
            ['Ashgrove', '1,200,000']
        ]
    },
      'hollandpark': {
        title: 'Holland Park',
        descr: `Holland Park and Holland Park West lie north-east and south-west of Logan Road respectively, 6 km south-east of central Brisbane. Until 1967 both were known as Holland Park, and their boundary extended across the South East Freeway into Tarragindi nearly as far as Wellers Hill`,
        params: ['878,000','10.64','','','5'],
        lifestyle:
            `Holland Park is a wonderful suburb, great easy access to Brisbane City and surrounded by amazing parklands, excellent schools, charming cafe's, bars and restaurants. No matter where you are in the suburb you are never far from everything you could possibly need. There are enough restaurants for a good way of lifestyle, cafes and bars along both Holland Road and Logan Road to keep us entertained and good bus access into town or South Bank (only ~6km away). Still plenty of units with a mix of heritage listed queenslanders, post-war and modern homes. Up towards Cav Road many of these are on elevated spots that catch great breezes and city or suburban views`,
        schools: [
            {
                name: 'Holland Park State School',
                type: 'government',
                age: 'Prep-6',
                edu: 'CoEd',
                address: 'Holland Park 4121',
                filter: ['primary', '', '']
            },
             {
                name: 'Seville Road State School',
                type: 'government',
                age: 'Prep-6',
                edu: 'CoEd',
                address: 'Holland Park 4121',
                filter: ['primary', '', '']
            },
              {
                name: `Marshall Road State School`,
                type: 'government',
                age: 'Prep-6',
                edu: 'CoEd',
                address: 'Holland Park West 4121',
                filter: ['primary', '', '']
            },
               {
                name: `Mount Gravatt State School`,
                type: 'government',
                age: 'Prep-6',
                edu: 'CoEd',
                address: 'Mount Gravatt 4122',
                filter: ['primary', '', '']
            },
                {
                name: `St Joachim's School`,
                type: 'private',
                age: 'Prep-6',
                edu: 'CoEd',
                address: 'Holland Park West 4121',
                filter: ['primary', '', 'private']
            },
                {
                name: `St Agnes School`,
                type: 'private',
                age: 'Prep-6',
                edu: 'CoEd',
                address: 'Mount Gravatt 4122',
                filter: ['primary', '', 'private']
            },
                {
                name: `Loreto College Coorparoo`,
                type: 'private',
                age: '7-12',
                edu: '',
                address: 'Coorparoo 4151',
                filter: ['', 'secondary', 'private']
            }
        ],
        parks:[
            {
                name: 'C.B. Mott Park (Mott Park, Yowar-Bool)',
                address: '49 Abbotsleigh Street',
                descr: 'Holland Park Meals on Wheels, barbecues (electric), booking site, water (bubblers/taps), Canna beds, picnic area/shelter (Abbotsleigh Street, Logan Road), playground (Abbotsleigh Street section, Logan Road section), toilet, Goori Gulwadin - Indigenous games trail, outdoor fitness/exercise equipment and shared pathway',
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/holland_park/holland_park_cb_mott_park_mott_park_yowar-bool.jpg',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/holland_park/holland_park_cb_mott_park_mott_park_yowar-bool1.jpg']
            },
              {
                name: 'Coonara Street Park',
                address: '31 Coonara Street',
                descr: 'Playground, picnic area/shelter and pathway',
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/holland_park/holland_park_coonara_street_park.jpg',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/holland_park/holland_park_coonara_street_park.png']
            },
                {
                name: 'Glenalwyn Street Park',
                address: '103 Pine Mountain Road',
                descr: 'Playground and seat',
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/holland_park/holland_park_glenalwyn_street_park.jpg',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/holland_park/holland_park_glenalwyn_street_park1.jpg']
            },
            {
                name: 'Glindemann Drive Park',
                address: '31 Holland Road',
                descr: 'Bikeway',
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/holland_park/holland_park_glindemann_drive_park.png',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/holland_park/holland_park_glindemann_drive_park1.jpg']
            },
             {
                name: 'Ray Lynch Park',
                address: '90 Halsey Street',
                descr: 'Barbecue (electric), lighting, outdoor fitness/exercise equipment, picnic shelter, playground, seating, shared pathways (some accessible)',
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/holland_park/holland_park_ray_lynch_park.jpg',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/holland_park/holland_park_ray_lynch_park1.jpg']
            },
              {
                name: 'Seville Park',
                address: '5 Elgar Street',
                descr: 'Basketball/netball facility, cricket pitch and field, picnic area/shelter, playground and shared pathway',
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/holland_park/holland_park_seville_park.png',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/holland_park/holland_park_seville_park1.png']
            },
               {
                name: 'W. J. Scott Park',
                address: '125 Harold Street',
                descr: 'Car park (Arnold Street, Rita Street), memorial (RSL Remembrance Day 90th Anniversary), picnic area/shelter, playground (Arabilia Street), water (bubbler)',
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/holland_park/holland_park_w_j_scott_park.png',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/holland_park/holland_park_w_j_scott_park1.png']
            },
                {
                name: 'Wollombi Park',
                address: '31 Hector Road',
                descr: 'Playground and seating',
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/holland_park/holland_park_wollombi_park.jpg',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/holland_park/holland_park_wollombi_park1.jpg']
            },
                 {
                name: 'Wyncroft Street',
                address: 'Wyncroft Street',
                descr: '',
                imgs: []
            }
        ],
        transport: {
            'Holland Park West': ['2 mins', '9 mins', '11 mins', '4 mins'],
            'Mount Gravatt': ['6 mins', '25 mins', '37 mins', '12 mins'], 
            'Mount Gravatt East': ['5 mins', '11 mins', '38 mins', '14 mins'],
            'Greenslopes': ['5 mins', '7 mins', '30 mins', '9 mins'],
            'Carina Heights': ['6 mins', '33 mins', '53 mins', '19 mins'],
            'Coorparoo': ['5 mins', '44 mins', '29 mins', '10 mins'],
            'Camp Hill': ['4 mins', '37 mins', '34 mins', '11 mins']
        },
        places: [
            ['Mitchelton', '750,000'],
            ['Holland Park West', '865,000'],
            ['Camp Hill', '1,079,000']
        ]
    },
      'morningside': {
        title: 'Morningside',
        descr: `Morningside, a residential suburb on Wynnum Road, is five km east of central Brisbane. Travel by road or rail is considerably further. The inspiration for the name was apparently the sight of nearby hills catching the rising sun, or the locality being on the morning (eastern) side of Brisbane`,
        params: ['891,000','2.17','','','7'],
        lifestyle:
            `Lifestyle here is multifaceted. Access to boarding blue chip suburbs such as Hawthorne and Bulimba and the many lifestyle options that both provide, fantastic public transport into the CBD via bus or train, quick and easy access south via Wynnum Road and easy access to Westfield Carindale. All the while it seems to provide that perfect balance between modern and urban inner city suburb and quiet and green family location. And if you get bored you can watch an AFL game on the weekend. Great cafe's/restaurants are also there`,
        schools: [
             {
                name: 'Seven Hills State School',
                type: 'government',
                age: 'Prep-6',
                edu: 'CoEd',
                address: 'Seven Hills 4170',
                filter: ['primary', '', '']
            },
             {
                name: 'Norman Park State School',
                type: 'government',
                age: 'Prep-6',
                edu: 'CoEd',
                address: 'Norman Park 4170',
                filter: ['primary', '', '']
            },
              {
                name: 'Bulimba State School',
                type: 'government',
                age: 'Prep-6',
                edu: 'CoEd',
                address: 'Bulimba 4171',
                filter: ['primary', '', '']
            },
               {
                name: `Sts Peter and Paul's School`,
                type: 'private',
                age: 'Prep-6',
                edu: 'CoEd',
                address: 'Balmoral 4171',
                filter: ['primary', '', 'private']
            },
                {
                name: 'Balmoral State High School',
                type: 'government',
                age: '7-12',
                edu: 'CoEd',
                address: 'Balmoral 4171',
                filter: ['', 'secondary', '']
            },
                {
                name: 'Lourdes Hill College',
                type: 'private',
                age: '7-12',
                edu: 'CoEd',
                address: 'Hawthorne 4171',
                filter: ['', 'secondary', 'private']
            }
        ],
        parks:[
            {
                name: 'Algoori Street Park',
                address: '121 Algoori Street',
                descr: 'Water (bubbler/tap), playground (Beverley Street), picnic area/shelter',
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/morningside/morningside_algoori_street_park.jpg',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/morningside/morningside_algoori_street_park1.jpg']
            },
            {
                name: 'Austin Uhlmann Park',
                address: '191 Richmond Road',
                descr: 'Picnic area/shelter, water (bubbler/tap), playground',
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/morningside/morningside_austin_uhlmann_park.jpg',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/morningside/morningside_austin_uhlmann_park1.jpg']
            },
            {
                name: 'Barwon Street Park',
                address: '175 Beverley Street',
                descr: 'Cannon Hill Anglican College sporting fields, car park',
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/morningside/morningside_barwon_street_park.jpg',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/morningside/morningside_barwon_street_park1.jpg']
            },
            {
                name: `Bennett's Bushland Park (previously known as Fitzgerald Street Park)`,
                address: '329 Bennetts Road',
                descr: `Greening Australia Centre, meeting space/picnic area/shelter (D'Arcy Road), playground (Agnew Street), rehabilitation site (Bennetts Bush Defenders), water (bubbler/taps/dog bowl)`,
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/morningside/morningside_bennett_s_bushland_park.jpg',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/morningside/morningside_bennett_s_bushland_park1.jpg']
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
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/morningside/morningside_jeremiah_o_toole_park.jpg',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/morningside/morningside_jeremiah_o_toole_park1.jpg']
            },
            {
                name: 'Joyce White Park (previously known as Rogoona Street Park)',
                address: '47 Thynne Road',
                descr: 'Water (bubbler/tap), picnic area/shelter, playground (Ragoona Street)',
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/morningside/morningside_joyce_white_park.jpg',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/morningside/morningside_joyce_white_park1.jpg']
            },
            {
                name: 'Keralgerie Park',
                address: '191 Richmond Road',
                descr: 'Water (bubblers/taps/dog bowl), car park, dog off-leash area, picnic area/shelter, playground, shared pathway',
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/morningside/morningside_keralgerie_park1.jpg',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/morningside/morningsidec_keralgerie_park.jpg']
            },
            {
                name: 'York Street Park (Beelerong Farm)',
                address: '60 York Street',
                descr: 'Beerlerong Community Farm, picnic area/shelter, water (bubbler/tap)',
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/morningside/morningside_york_street_park_beelerong_farm.jpg',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/morningside/morningside_york_street_park_beelerong_farm1.jpg']
            }
        ],
        transport: {
            'Seven Hills': ['4 mins', '19 mins', '19 mins', '7 mins'],
            'Norman Park': ['4 mins', '19 mins', '29 mins', '9 mins'], 
            'Cannon Hill': ['5 mins', '21 mins', '30 mins', '8 mins'],
            'Hawthorne': ['4 mins', '19 mins', '19 mins', '7 mins'],
            'Balmoral': ['4 mins', '24 mins', '24 mins', '10 mins'],
            'Bulimba': ['5 mins', '40 mins', '40 mins', '12 mins'],
            'Murarrie': ['6 mins', '45 mins', '48 mins', '14 mins'],
            'Hamilton': ['11 mins', '1 hour 8 mins', '58 mins', '20 mins'],
            'Eagle Farm': ['8 mins', '1 hour 31 mins', '58 mins', '20 mins']
        },
        places: [
            ['Greenslopes', '887,500'],
            ['Alderley', '950,000'],
            ['Coorparoo', '1,075,000']
        ]
    },
      'chandler': {
        title: 'Chandler',
        descr: `Chandler, a sparsely settled suburb, is 14 km south-east of central Brisbane. Originally part of Belmont and the western edge of Capalaba, Chandler was gazetted as a suburb in 1975. It was named after Sir John Chandler, Lord Mayor of Brisbane (1940-52), founder of Brisbane's first radio 4BC (1930) and chair of the Chandler electrical-goods retail chain. Sir John's mayoral career is described in John Cole's Shaping a City (1984)`,
        params: ['1,600,000','4.58','','','4'],
        lifestyle:
            `Chandler has a real rural flavour yet it's so close to the CBD. It's a part of town without bad traffic making commutes easy. Despite the acreage layout it's also close to everything. The airport is less than 15mins away, the Gateway Motorway is on your doorstep with easy access to both the Gold Coast and Sunshine Coast, the Bay is minutes down the road, Westfield Carindale is also right there along with all the shops and industry to be found in Capalaba. For connectedness I don't know how you could top it. To live there you have to be keen on the acreage lifestyle — there's barely a block smaller than 10,000sqm/2.5 acres with many double that or larger. The homes are huge to match the land and the whole area feels enormously spacious and open. Wildlife is abundant. There is not a lot of community activity. Being so well located it is obviously quite an expensive area, though prices have plateaued since the acreage lifestyle went a little out of fashion. There are many very good private schools throughout the eastern part of Brisbane and the local state schools (like Gumdale) are quite good`,
        schools: [
             {
                name: 'Gumdale State School ',
                type: 'government',
                age: 'Prep-6',
                edu: 'CoEd',
                address: 'Gumdale 4154',
                filter: ['primary', '', '']
            },
            {
                name: 'Belmont State School',
                type: 'government',
                age: 'Prep-6',
                edu: 'CoEd',
                address: 'Carindale 4152',
                filter: ['primary', '', '']
            },
            {
                name: 'Mackenzie State Primary School',
                type: 'government',
                age: 'Prep-6',
                edu: 'CoEd',
                address: 'Mackenzie 4156',
                filter: ['primary', '', '']
            },
               {
                name: 'Mackenzie State Special School',
                type: 'special',
                age: 'Prep-12',
                edu: 'CoEd',
                address: 'Mackenzie 4156',
                filter: ['primary', '', '']
            }, 
               {
                name: 'Sinai College ',
                type: 'private',
                age: 'Prep-6',
                edu: 'CoEd',
                address: 'Burbank 4156',
                filter: ['primary', '', 'private']
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
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/chandler/chandler_bacton_road_park.jpg',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/chandler/chandler_bacton_road_park1.jpg']
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
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/chandler/chandler_bushland_reserve.jpg',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/chandler/chandler_bushland_reserve1.jpeg']
            },
            {
                name: 'Sunnydene Road Park',
                address: '227 Sunnydene Road',
                descr: '',
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/chandler/chandler_sunnydene_road_park.jpg',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/chandler/chandler_sunnydene_road_park1.jpeg']
            },
            {
                name: 'Tilley Road Park (no. 727)',
                address: '727 Tilley Road',
                descr: 'Walking track',
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/chandler/chandler_tilley_road_park.jpg',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/chandler/chandler_tilley_road_park1_.jpg']
            },
            {
                name: 'Tingalpa Creek Reserve',
                address: '99 Chelsea Road',
                descr: 'Water (bubbler/tap), bushland, car park, canoe facility, creek access, equestrian trail, fishing facility, picnic area/shelter and barbecue (electric)',
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/chandler/chandler_tingalpa_creek_reserve.jpg',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/chandler/chandler_tingalpa_creek_reserve1.jpg']
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
            'Gumdale': ['4 mins', '37 mins', '37 mins', '11 mins'],
            'Burbank': ['7 mins', '6 hour 33 mins', '1 hour 24 mins', '22 mins'], 
            'Capalaba': ['8 mins', '35 mins', '1 hour 18 mins', '21 mins'],
            'Belmont': ['5 mins', '23 mins', '43 mins', '11 mins'],
            'Birkdale': ['13 mins', '1 hour 16 mins', '2 hour 1 mins', '32 mins'],
            'Aquatic Paradise': ['12 mins', '1 hour 22 mins', '1 hour 50 mins', '30 mins'],
            'Ransome': ['6 mins', '1 hour 30 mins', '1 hour 2 mins', '17 mins']
        },
        places: [
            ['Willow Vale', '875,000'],
            ['Wongawallan', '950,000'],
            ['Samford Valley', '1,215,000']
        ]
    },
      'wishart': {
        title: 'Wishart',
        descr: `Wishart, a residential suburb between Upper Mount Gravatt and the Bulimba Creek, is 12 km south-east of central Brisbane. Originally known as Mount Gravatt South, in the mid 1960s the emerging suburb was defined by a few streets near the Mount Gravatt South primary school (1964, renamed Wishart) and a few more streets running between the Capalaba Road and Bulimba Creek (Coora to Greenwood Streets)`,
        params: ['823,000','12.11','','','3'],
        lifestyle:
            `There is a good neighbourhood spirit. Everything is just a few minutes drive away. The massive (just extended) Garden City shopping centre provides lots of shopping and eating options. And there are some of the best public schools around this area (Mansfield, McGregor, Wishart). Quite close the both the Gateway and the Pacific Highway. Great schools to chose from and easy access to many places. Garden City and Carindale are only minutes away for fantastic shopping and working in the City there are a load of buses that take you there pronto. Great local restaurants located in Coorparoo which is only a 5 minute drive away`,
        schools: [
             {
                name: 'Mansfield State School',
                type: 'government',
                age: 'Prep-6',
                edu: 'CoEd',
                address: 'Mansfield 4122',
                filter: ['primary', '', '']
            },
            {
                name: 'Wishart State School',
                type: 'government',
                age: 'Prep-6',
                edu: 'CoEd',
                address: 'Wishart 4122',
                filter: ['primary', '', '']
            },
            {
                name: 'MMount Gravatt East State School',
                type: 'government',
                age: 'Prep-6',
                edu: 'CoEd',
                address: 'Mount Gravatt East 4122',
                filter: ['primary', '', '']
            },
            {
                name: `St Catherine's Catholic Primary School`,
                type: 'private',
                age: 'Prep-6',
                edu: 'CoEd',
                address: 'Upper Mount Gravatt 4122',
                filter: ['primary', '', 'private']
            },
            {
                name: 'Brisbane Adventist College',
                type: 'combined',
                age: 'Prep-12',
                edu: 'CoEd',
                address: 'Mansfield 4122',
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
                name: 'Seton College',
                type: 'secondary',
                age: '7-12',
                edu: 'CoEd',
                address: 'Mount Gravatt East 4122',
                filter: ['', 'secondary', 'private']
            },
            {
                name: 'Mansfield State High School',
                type: 'government',
                age: '7-12',
                edu: 'CoEd',
                address: 'Mansfield 4122',
                filter: ['', 'secondary', '']
            }
        ],
        parks:[
            {
                name: 'Berkshire Crescent Park',
                address: '17 Berkshire Crescent',
                descr: 'Basketball half court, water (bubblers/taps), barbecue, car park, dog off-leash area, pathway, picnic area/shelter, playground, seats',
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/wishart/wishart_berkshire_crescent_park.jpg',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/wishart/wishart_berkshire_crescent_park1.jpg']
            },
             {
                name: 'Boorabbin Picnic Ground',
                address: '677A Mt Gravatt-Capalaba Road',
                descr: 'Barbecue (electric), basketball half court, car park, dog off-leash area (with agility equipment), picnic shelter/area, playground, rebound wall, shared pathway, toilets - accessible with adult carer, wheelchair accessible, water (bubbler/tap)',
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/wishart/wishart_boorabbin_picnic_ground.jpg',
                       'https://conversionratestore.github.io/projects/hantergalloway/img/wishart/wishart_boorabbin_picnic_ground1.jpg']
            },
              {
                name: 'Catania Street Park',
                address: '39 Catania Street S',
                descr: 'Car park, playground',
                imgs: ['https://conversionratestore.github.io/projects/hantergalloway/img/wishart/wishart_catania_street_park.jpg']
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
                address: 'Frinton Street Park (also known as McCarron Park)',
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
            }
        ],
        transport: {
            'Mackenzie': ['3 mins', '25 mins', '25 mins', '8 mins'],
            'Eight Mile Plains': ['7 mins', '31 mins', '51 mins', '19 mins'], 
            'Rochedale': ['6 mins', '54 mins', '54 mins', '18 mins'],
            'Upper Mount Gravatt': ['6 mins', '18 mins', '39 mins', '14 mins'],
            'Mansfield': ['5 mins', '11 mins', '40 mins', '13 mins'],
            'Mount Gravatt East': ['8 mins', '19 mins', '56 mins', '21 mins'],
        },
        places: [
            ['Sunnybank Hills', '675,000'],
            ['Mansfield', '783,500'],
            ['Sinnamon Park', '835,000']
        ]    }
}