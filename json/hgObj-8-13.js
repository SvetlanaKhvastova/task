let districts = {
    'central': {
        title: 'Central (Spring Hill)',
        descr: `Spring Hill (or Central), an inner Brisbane suburb, is immediately north and north-west of the city centre. The dividing boundary between Spring Hill and the city is Wickham Terrace which, incidentally, is the suburb's most notable thoroughfare. The rising landscape was a source of spring water, and an example is to be found in the Roma Street Parklands`,
        params: ['1,100,000','5.45','','','10'],
        lifestyle: `The great thing about Spring Hill is that there is always something going on there is such a massive range of people. You have a little run down cottage on your left and a million dollar prestige property on your right. Cafes, Restaurants, Bars, Clubs, Pubs, Parks and Shops are all at your finger tips.`,
        schools: [
            {
                name: 'Brisbane Central State School ',
                type: 'Government',
                age: 'Prep-6',
                edu: 'CoEd',
                address: 'Spring Hill 4000'
            },
            {
                name: 'Brisbane Grammar School',
                type: 'Combined',
                age: ' 5-12',
                edu: 'CoEd',
                address: 'Spring Hill 4000'
            },
            {
                name: 'Somerville House',
                type: 'Combined',
                age: ' 5-12',
                edu: 'CoEd',
                address: 'South Brisbane 4101'
            },
            {
                name: `St Joseph's College`,
                type: 'Combined',
                age: '5-12',
                edu: 'CoEd',
                address: 'Spring Hill 4000'
            },
            {
                name: `All Hallows' School`,
                type: 'Combined',
                age: '5-12',
                edu: 'CoEd',
                address: 'Brisbane 4000'
            },
            {
                name: `St James College `,
                type: 'Private',
                age: '7-12',
                edu: 'CoEd',
                address: 'Spring Hill 4000'
            },
            {
                name: `Brisbane Girls Grammar School`,
                type: 'Private',
                age: '7-12',
                edu: 'CoEd',
                address: 'Spring Hill 4000'
            },
            {
                name: ` Albert Park Flexible Learning Centre`,
                type: 'Special',
                age: '10-12',
                edu: 'CoEd',
                address: 'Petrie Terrace 4000'
            },
        ],
        parks:[
            {
                name: 'Observatory Park',
                address: '230 Wickham Terrace',
                descr: 'Cultural heritage site (Tower Mill precinct — Spring Hill Windmill Tower and Spring Hill Reserviors)',
                imgs: []
            },
            {
                name: 'Terrace Street Park',
                address: '60 Sedgebrook Street',
                descr: 'Playground — fully fenced, seating, water (bubbler)',
                imgs: []
            },
            {
                name: 'Victoria Park (Barrambbin, Gregory Grove, Yorks Hollow)',
                address: '454 Gregory Terrace',
                descr: 'Centenary Pool, Multicultural Community Centre, Victoria Park golf administration and function venues, access & car parking (Gregory Terrace, Gilchrist Avenue), accessible toilet, cricket & soccer facility (Gilchrist Avenue), dog off leash area etc',
                imgs: []
            },
            {
                name: 'Wickham Park',
                address: '330 Wickham Terrace',
                descr: 'Wickham Park Escarpment, shared pathway water (bubblers/taps), Wi-Fi',
                imgs: []
            },
            {
                name: 'Bedford Playground Park',
                address: '33 Quarry Street',
                descr: 'Lady Gowrie Child Centre, Communify Qld Spring Hill Hall, barbecue (electric), cricket field, fitness station, half court, picnic area, playground — fully fenced, tennis courts',
                imgs: []
            },
        ],
        transport: {
            'Fortitude Valley': ['5 mins', '14 mins', '14 mins', '4 mins'],
            'Brisbane City': ['8 mins', '15 mins', '17 mins', '5 mins'],
            'Petrie Terrace:': [' 6 mins', '19 mins', '24 mins', '10 mins'],
            'Red Hill': ['7 mins', '23 mins', '35 mins', 'bicycle — 13 mins'],
            'Kelvin Grove': ['6 mins', '37 mins', '33 mins', '11 mins'],
            'Herston': ['5 mins', '25 mins', '26 mins', '9 mins'],
            'Bowen Hills:': ['5 mins', '11 mins', '24 mins', '7 mins'],
        },
        places: [
            ['Fortitude Valley', '925,000'],
            ['Toowong', '71,025,000'],
            ['New Farm', '2,125,000'],
        ],
    },
    'toowong': {
        title: 'Toowong',
        descr: `Part built-up commercial and residential precinct, part hilly heritage haven – Toowong is a harmonious inner-city duet.`,
        params: ['1,025,000','2.46','','','7'],
        lifestyle: `Close to the city, universities, hospitals and some of Brisbane’s best schools, Toowong is ultra-convenient for professionals, students and families alike. With easy access to the Brisbane River, if you love to ride or walk to work (or anywhere really), Toowong is for you. City Cats on the River, plus frequent buses and trains – Toowong is serqlded by public transport like no other location in Brisbane. Hugely popular bikeways and walkways run both to the City along the river and towards the Western suburbs, perfect for fitness fans and family rides. The two main watering holes, the Regatta Hotel and the Royal Exchange (RE) Hotel, are not just pubs – they are Brisbane landmarks in their own right, with histories almost as long and varied as Brisbane itself. The heritage-heavy western side of Toowong has family-friendly neighbourhood feel, which can be rare for a suburb so close to the city`,
        schools: [
            {
                name: 'Toowong State School',
                type: 'Government',
                age: 'Prep-6',
                edu: 'CoEd',
                address: 'Toowong 4066'
            },
            {
                name: 'St Ignatius School ',
                type: 'Private',
                age: ' Prep-6',
                edu: 'CoEd',
                address: 'Toowong 4066'
            },
            {
                name: `Brisbane Boys' College `,
                type: 'Combined',
                age: 'Prep-12',
                edu: 'CoEd',
                address: 'Toowong 4066'
            },
            {
                name: `Queensland Academy for Science Mathematics and Technology`,
                type: 'Combined',
                age: '10-12',
                edu: 'CoEd',
                address: 'Toowong 4066'
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
                imgs: []
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
                imgs: []
            },
            {
                name: 'Richer Street Park',
                address: '316 Birdwood Road',
                descr: 'Pathway',
                imgs: []
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
                imgs: []
            },
        ],
        transport: {
            'Taringa': ['3 mins', '15 mins', '15 mins', '10 mins'],
            'St Lucia': ['8 mins', '27 mins', '38 mins', '14 mins'],
            'West End': ['14 mins', '38 mins', '59 mins', '20 mins'],
            'Mount Coot-Tha': ['3 mins', '22 mins', '22 mins', '9 mins'],
            'Auchenflower': ['4 mins', '21 mins', '21 mins', '9 mins'],
            'Bardon': ['6 mins', '46 mins', '46 mins', '18 mins'],
        },
        places: [
            ['Morningside', '891,000'],
            ['Newmarket', '940,000'],
            ['Taringa', '1,117,500'],
        ],
    },
    'walter': {
        title: 'Walter Taylor (St Lucia)',
        descr: `St Lucia (or Walter Taylor), a residential suburb with the University of Queensland occupying its eastern end, is four km south-west of central Brisbane. Travel via Coronation Drive, the Brisbane River CityCat or by ferry from West End is considerably further. The western part of St Lucia includes the locality of Ironside`,
        params: ['1,500,000','21.03','','','2'],
        lifestyle: `There is a numerous amount of things you can entertain yourself with in St Lucia. Including Hawken Drive which has the local IGA and serves a diverse range of restaurants, from Persian to Thai to Italian there is a great selection of restaurants to choose from all on one little strip! Hawken drive is with-in walking distance from anywhere in St Lucia, and if you don't want to walk the numerous amount of bus services will get to you there in no time! There is also the well-known St Lucia Golf Club, the food there is also amazing. There is also the Famous University of Queensland which contains Tennis Courts, Olympic swimming pools, Running courses, Many clubs for people of any age to join and many more. These facilities are also available to anyone but beware a small fee is involved. If you want to go shopping there is the ginormous Indooroopilly shopping centre and Toowong Village that are a short 5-minute drive or bus ride away. St Lucia is also a very safe suburb. With a council patrol car always driving around you can always have a piece of mind`,
        schools: [
        {
            name: 'Ironside State School ',
            type: 'Government',
            age: 'Prep-6',
            edu: 'CoEd',
            address: 'St Lucia 4067'
        },
        {
            name: 'Holy Family Primary School ',
            type: 'Private',
            age: ' Prep-6',
            edu: 'CoEd',
            address: 'Indooroopilly 4068'
        },
        {
            name: `Indooroopilly State High School `,
            type: 'Government',
            age: '7-12',
            edu: 'CoEd',
            address: 'Indooroopilly 4068'
        },
        {
            name: `Brigidine College`,
            type: 'Private',
            age: '7-12',
            edu: '',
            address: 'Indooroopilly 4068'
        },
    ],
        parks: [
        {
            name: 'Acacia Park',
            address: '299 Carmody Road',
            descr: 'UQ Weight Lifting Centre, barbecue, picnic area, playground, water (bubbler)',
            imgs: []
        },
        {
            name: 'Banksia Park',
            address: '40 Sixth Avenue',
            descr: 'Seating',
            imgs: []
        },
        {
            name: 'Bellevue Terrace Park',
            address: '43 Sir Fred Schonell Drive',
            descr: 'Playground and seating',
            imgs: []
        },
        {
            name: 'Carawa Street Park',
            address: '5 Carawa Street',
            descr: 'Picnic area',
            imgs: []
        },
        {
            name: 'Guyatt Park',
            address: '19 Hiron Street',
            descr: 'Accessible toilet, barbecue (electric), ferry terminal, picnic area, barbecue, outdoor fitness/exercise equipment, playground, public toilet, shared pathway network, Wi-Fi, table tennis tables',
            imgs: []
        },
        {
            name: 'Ironside Park',
            address: '85 Carmody Road',
            descr: 'Guides Queensland, Meals on Wheels, Scout Association of Australia, bikeway network',
            imgs: []
        },
        {
            name: 'Lex Ord Park',
            address: '224 Indooroopilly Road',
            descr: 'Picnic area, playground, water',
            imgs: []
        },
        {
            name: 'Rotary International Presidents Park (Rotary Park)',
            address: '37 Keith Street',
            descr: `Keith Street Peace Grove, St Thomas' Riverview Kindergarten, Toowong Rowing Club, access & car parking, bikeway, picnic area, playground, rowing facility`,
            imgs: []
        },
        {
            name: 'The Esplanade Park (road reserve)',
            address: '1 The Esplanade',
            descr: 'Brisbane River Walk, Habitat Brisbane Group, shared pathway, seating and water (bubbler/tap)',
            imgs: []
        },

    ],
        transport: {
            'Taringa': ['7 mins', '28 mins', '36 mins', '16 mins'],
            'Yeronga': ['19 mins', '1 hour 12 mins,', '1 hour 14 mins', '23 mins'],
            'Indooroopilly': ['7 mins', '19 mins', '38 mins', '14 mins'],
            'Fairfield': ['20 mins', '54 mins', '57 mins', '20 mins'],
            'Dutton Park': ['17 mins', '49 mins', '48 mins', '18 mins'],
            'Highgate Hill': ['16 mins', '50 mins', '37 mins', '17 mins'],
            'West End': ['15 mins', '44 mins', '38 mins', '16 mins'],
            'Toowong': ['7 mins', '29 mins', '39 mins', '15 mins'],
        },
        places: [
            ['Kelvin Grove', '943,500'],
            ['Spring Hill', '1,150,000'],
            ['Paddington', '1,300,000'],
        ],
    },
    'jamboree': {
        title: 'Jamboree (Jindalee)',
        descr: `Jindalee, a residential suburb developed during the 1960s-70s, is 12 km south-west of central Brisbane. The area was known as Seventeen Mile Rocks, a rural locality with a narrow bridge over the Brisbane River leading to an unnamed road leading to Fig Tree Pocket Road. It is thought that the name (1963) derived from an Aboriginal expression meaning bare hills`,
        params: ['582,000','12.12','','','2'],
        lifestyle: `There's a police station, plenty of parkland, good cafes, restaurants, doctors, pharmacies, swimming pools, fuel stations, and of course the highway going north and south. Also, it is a great place to live if you love nature with two seperate bush walks and and the Jindalee boat ramp with it's own area for the dog lovers too. Very easy access to everywhere, and you have a huge shopping centre right next to you (Mt Ommaney), or if you want to eat out really good vietnamese or catch the train to the city you are 2 minutes from Darra. The suburb is very quiet with nice decent people living in it`,
        schools: [
            {
                name: 'Jamboree Heights State School ',
                type: 'Government',
                age: 'Prep-6',
                edu: 'CoEd',
                address: 'Jamboree Heights 4074'
            },
            {
                name: 'Middle Park State School',
                type: 'Government',
                age: ' Prep-6',
                edu: 'CoEd',
                address: 'Middle Park 4074'
            },
            {
                name: `Jindalee State School`,
                type: 'Government',
                age: 'Prep-6',
                edu: 'CoEd',
                address: 'Jindalee 4074'
            },
            {
                name: `Mount Ommaney Special School`,
                type: 'Special',
                age: 'Prep-12',
                edu: 'Co-Ed',
                address: 'Mount Ommaney 4074'
            },
            {
                name: `Good News Lutheran School`,
                type: 'Private',
                age: 'Prep-6',
                edu: 'CoEd',
                address: 'Middle Park 4074'
            },
            {
                name: `Centenary State High School `,
                type: 'Government',
                age: '7-12',
                edu: 'Co-Ed',
                address: 'Jindalee 4074'
            },
        ],
        parks: [
            {
                name: 'Jamboree Park',
                address: '18 Guide Street',
                descr: 'Barbecue (electric), picnic area/shelter, playground, shelter, water (bubbler/tap)',
                imgs: []
            },
            {
                name: 'Phil Denman Park',
                address: '56 Loffs Road',
                descr: 'Barbecue (electric), basketball half court, junior cycle-training track, dog off-leash area with dog exercise equipment, picnic area/shelter, practice cricket net, rebound wall, shelter, water (bubblers/taps/dog bowl), car park and shelter',
                imgs: []
            },
            {
                name: 'Pioneer Belz Park (previously Kooringal Drive Park)',
                address: '47 Kooringal Drive',
                descr: 'Car park (Centenary Highway), shared pathway, picnic area/shelter and water (bubbler/tap)',
                imgs: []
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
                imgs: []
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
            'Mount Ommaney': ['4 mins', '18 mins', '18 mins', '8 mins'],
            'Sinnamon Park': ['4 mins', '33 mins,', '33 mins', '12 mins'],
            'Pinjarra Hills': ['15 mins', '32 mins,', '2 hour  7 mins', '45 mins'],
            'Fig Tree Pocket': ['8 mins', '57 mins,', '57 mins', '25 mins'],
            'Kenmore': ['12 mins', '28 mins,', '1 hour 8 mins', '32 mins'],
        },
        places: [
            ['Algester', '550,000'],
            ['Brighton', '650,000'],
            ['Virginia', '720,150'],
        ],
    },
    'richlands': {
        title: 'Richlands',
        descr: `Richlands, a predominantly industrial suburb adjoining Wacol and Inala, is 16 km south-west of central Brisbane. Richlands' small residential area is in its north-east, near Inala. Richlands proved to be well positioned for the demand for outer-urban industrial and warehouse land`,
        params: ['444,000','3.13','','','1'],
        lifestyle: `Good access by motorways and public transport. Next door to Inala, which is a green and quiet suburb, with many parks and playgrounds, schools, childcare, medical centres, authentic restaurants and fresh affordable produce at the numerous shops at Inala Civic. A good suburb with an extensive new development. Affordable, green, with parks and recreational facilities. Good shopping options in Richlands and in Inala next door. Many affordable eating-out places. Very good access via motorways and public transport, including the new train station. Doctors, schools, childcare — all nearby either in Richlands or in Inala. Inala also has three post offices, TAFE, gym at PCYC, sports ovals, and old parks with beautiful big trees`,
        schools: [
            {
                name: ' Richlands East State School',
                type: 'Government',
                age: 'Prep-6',
                edu: 'CoEd',
                address: 'Inala 4077'
            },
            {
                name: 'Forest Lake State School ',
                type: 'Government',
                age: ' Prep-6',
                edu: 'CoEd',
                address: 'Forest Lake 4078'
            },
            {
                name: 'Serviceton South State School ',
                type: 'Government',
                age: ' Prep-6',
                edu: 'CoEd',
                address: 'Inala 4077'
            },
            {
                name: 'Inala State School ',
                type: 'Government',
                age: ' Prep-6',
                edu: 'CoEd',
                address: 'Inala 4077'
            },
            {
                name: 'Carole Park State School',
                type: 'Government',
                age: ' Prep-6',
                edu: 'CoEd',
                address: 'Wacol 4076'
            },
            {
                name: 'Western Suburbs State Special School ',
                type: 'Special',
                age: 'Prep-12',
                edu: 'Co-Ed',
                address: 'Inala 4077'
            },
            {
                name: `St Mark's School `,
                type: 'Private',
                age: ' Prep-6',
                edu: 'CoEd',
                address: 'Inala 4077'
            },
            {
                name: `Glenala State High School `,
                type: 'Government',
                age: ' 7-12',
                edu: 'CoEd',
                address: 'Durack 4077'
            },
            {
                name: 'Inala Flexible Learning Centre ',
                type: 'Special',
                age: ' 7-12',
                edu: 'CoEd',
                address: ''
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
                imgs: []
            },
            {
                name: 'Eugenia Street Park',
                address: '35 Razark Street',
                descr: 'Playground',
                imgs: []
            },
            {
                name: 'Kathleen Street Park',
                address: '26 Kathleen Street',
                descr: '',
                imgs: []
            },
            {
                name: 'Rory Street Park',
                address: '4 Rory Street',
                descr: 'Picnic area, playground',
                imgs: []
            },

        ],
        transport: {
            'Inala': ['4 mins', '30  mins', '30  mins', '9 mins'],
            'Forest Lake': ['12 mins', '41 mins', '1 hour 6 mins', '26 mins'],
            'Wacol': ['5 mins', '50 mins', '50 mins', '14 mins'],
            'Darra': ['5 mins', '34 mins', '34 mins', '10 mins'],
            'Oxley': ['8 mins', '13 mins', '1 hour 1 mins mins', '17 mins'],
        },
        places: [
            ['Loganlea', '405,000'],
            ['Rocklea', '470,000'],
            ['Runcorn', '607,000'],
        ],
    },
    'parkinson': {
        title: 'Parkinson',
        descr: `Parkinson is a residential suburb on the southern municipal boundary of the City of Brisbane. Immediately south of the boundary is Logan City's suburbs of Browns Plains and Hillcrest. Parkinson was formally named in 1972 after Henry Parkinson, a railway engineer`,
        params: ['720,000','6.97','','','4'],
        lifestyle: `Shopping options are great with close proximity to Browns Plains, Calamvale, & Sunnybank, with Garden City not much further afield. With numerous parks and reserves, Karrawatha forest and the new Swim centre there is plenty to keep you occupied. Its a great place to raise kids, good neighbours. Parkinson has a friendly community spirit where neighbours catch up at the letterbox or for street barbecues. Everyone is willing to lend a hand if one is needed and strangers will greet you while a smile and a "G'day". There are plenty of parks to walk the dog or take the kids to play with purpose built bike tracks and picturesque pathways through bushland and parks`,
        schools: [
            {
                name: 'Calamvale Special School ',
                type: 'Special',
                age: 'Prep-12',
                edu: 'CoEd',
                address: 'Calamvale 4116'
            },
            {
                name: 'Calamvale Community College',
                type: 'Combined',
                age: ' Prep-12',
                edu: 'CoEd',
                address: 'Calamvale 4116'
            },
            {
                name: 'Stretton State College',
                type: 'Combined',
                age: ' Prep-12',
                edu: 'CoEd',
                address: 'Stretton 4116'
            },
            {
                name: 'Wisdom College',
                type: 'Combined',
                age: ' Prep-9',
                edu: 'CoEd',
                address: 'Calamvale 4116'
            },
            {
                name: `St Stephen's School `,
                type: 'Private',
                age: ' Prep-6',
                edu: 'CoEd',
                address: 'Algester 4115'
            },

        ],
        parks: [
            {
                name: 'Algester Road Park (no. 515)',
                address: '515 Algester Road',
                descr: 'Barbecue (electric), picnic area and shelter, playground, water (bubbler/tap) and shared pathway',
                imgs: []
            },
            {
                name: 'Beaudesert Road Park (no. 2911)',
                address: '2939 Beaudesert Road',
                descr: '',
                imgs: []
            },
            {
                name: 'Blairmount Street Park',
                address: '16 Killarney Place',
                descr: '',
                imgs: []
            },
            {
                name: 'Daintree Drive Park (no. 65)',
                address: '65 Daintree Drive',
                descr: '',
                imgs: []
            },
            {
                name: 'Greenways Esplanade Park',
                address: '30 Greenways Esplanade',
                descr: 'Activity space (BMX track, basketball half court, rebound wall, cricket practice net), barbecues (electric), car park, dog off-leash area, outdoor fitness/exercise station, path & bikeway network,picnic areas (Pinedale Crescent), playground (Greenways Esplanade), water (bubbler/tap), table tennis tables',
                imgs: []
            },
            {
                name: 'Lakewood Avenue Park',
                address: '26 Argyle Place',
                descr: 'Lakewood Avenue Lagoon, barbecue (electric), outdoor fitness/exercise station, picnic area (Argyle Place), playground (Lagoon), shared pathway network and water (bubbler/tap/dog bowl)',
                imgs: []
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
                imgs: []
            },

        ],
        transport: {
            'Algester': ['4 mins', '10 mins', '40 mins', '11 mins'],
            'Browns Plains': ['9 mins', '44 mins', '1 hour 38 mins', '19 mins'],
            'Hillcrest': ['9 mins', '47 mins', '2 hour 17 mins', '23 mins'],
            'Forestdale': ['10 mins', '7 hour 10 mins', '2 hour 1 mins', '32 mins'],
            'Larapinta': ['9 mins', '1 hour 25 mins', '', '21 mins'],
            'Drewvale': ['6 mins', '58 mins', '1 hour 39 mins', '15 mins'],
            'Pallara': ['12 mins', '1 hour 59 mins', '2 hour 9 mins', '34 mins'],
            'Calamvale': ['4 mins', '21 mins', '40 mins', '12 mins'],
        },
        places: [
            ['Glenella', '490,000'],
            ['Heathwood', '593,000'],
            ['Eatons Hill', '715,000'],
        ],
    },
}