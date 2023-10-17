module.exports.home = (req, res) => {
    res.render('home-list', {
        title: 'Welcome to Weather Forcast!!',
        pageHeader: {
            title: 'Welcome to Weather Forcast',
        },
        categories: [{
            name: 'Todays Weather',
            href: '/style1'
        }, {
            name: 'Air Quality',
            href: '/style2'
        }, {
            name: 'Hourly',
            href: '/style3'
        }],
    });
};

module.exports.styleinfo1=(req,res)=>{
    res.render('west',{
        title:'Todays Weather',
        contents:[{
            Date:'17-10-2023',
            imghref:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKrPJ-b9UZmwum0cWHdhfkAA-lubs6LPMKg&usqp=CAU',
        },{
            Date:'17-10-2023',
            imghref:'https://cms.accuweather.com/wp-content/uploads/2023/10/BolavenAKImpacts.jpg?w=632',
        }
    ]
    });
};
module.exports.styleinfo2=(req,res)=>{
    res.render('indi',{
        title:'Air Quality',
        contents:[{
            Date:'17-10-2023',
            imghref:"https://bazallergy.com/wp-content/uploads/2022/02/air-quality-description-2.png"
            
        },{
            Date:'17-10-2023',
            imghref:'https://4.bp.blogspot.com/-iVGn_3zbI8c/UpFcE1t3EXI/AAAAAAAADHY/RvCCeDh2tFg/s1600/AQI+Color+Codes.jpg'
        
        }
    ]
    });
};
module.exports.styleinfo3=(req,res)=>{
    res.render('indowest',{
        title:'Hourly',
        contents:[{
            Date:'17-10-2023',
            imghref:'https://media.raven.news/images/wx/bn9/WSI/Forecasts/Hourly_Brooksville.jpg'
        },{
            Date:'17-10-2023',
            imghref:'https://www.weather.gov/images/unr/news/HWF-Thumb.PNG'
        }
    ]
    });
};