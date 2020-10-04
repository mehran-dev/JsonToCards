var jsonData = {
    "events":
    {
        "selecteddate": "18 / 06 / 1399",
        "Meetings": [

            {
                "meetingid": "12354648887",
                "joinUrl": "https://us04web.zoom.us/j/71007897907?pwd=R0lONWU1YkkxYkZMcWloUFlXRmE3Zz09",
                "meetingPass": "",
                "meetingname": "Clean Code: to be or not to be",
                "organizer": "Robert C Martin",
                "time": "16:30-18:30",
                "isfree": "yes",
                "subscriptionneeded": "no",

            },
            {
                "meetingid": "1287648887",
                "meetingname": "میت آپ کنتیکو در گذر زمان",
                "organizer": "محمد فرامرزی",
                "time": "11:30-13:30",
                "isfree": "yes",
                "subscriptionneeded": "yes",
                'subsLink': "subscribe_link"
            },
            {
                "meetingid": "951546481787",
                "meetingname": "جلسه کارگروه مبارزه با پولشویی",
                "organizer": "بابک زنجانی - اکبر طبری",
                "time": "14:00-15:30",
                "isfree": "no",
                "subscriptionneeded": "yes",
                "subscribed": "yes"
            }
        ],
        "Webinars": [

            {
                "wid": "951546481787",
                "wname": "مبانی اختلاس 1",
                "presenter": "محمود رضا خاوری",
                "time": "14:00-15:30",
                "isfree": "yes",
                "subscriptionneeded": "yes",
                "subscribed": "yes"
            },
            {
                "wid": "951546481787",
                "wname": "Wirtschaft im Gesselschaft",
                "presenter": "Karl Marx",
                "time": "18:00-19:30",
                "isfree": "no",
                "subscriptionneeded": "yes"
            }
        ],
        "Podcasts": [

            { "id": "5555648464641", "nm": "پادکست سکه - اپیزود 33", "host": "Dr. Mehdi Naji", "place": "University of Tehran - Faculty of Economics" },
            { "id": "5555648464641", "nm": "Never without Mashayi", "host": "Dr. Mamooti Ahmadi nejad", "place": "Naarmak", "hazards": "lebas shakhsi ha" }
        ],
        "برخورد نزدیک از نوع سوم": [

            { "id": "98465132131654", "race": "Worgs", "mission": "Invade and destroy", "receivingparty": "Potus and Co." },
            { "id": "75569846681659", "race": "Angels", "mission": "message of peace", "receivingparty": "Pope, Dalai Lama and Richard Dawkins" }
        ]
    }
}






console.log(jsonData);

window.onload = parser();


function parser() {
    Doer(jsonData);

}

function Doer(Data) {
    console.log(Data.events);
    console.log("Meetings", Data.events.Meetings);
    console.log("Webinars", Data.events.Webinars);

    const meetings = Data.events.Meetings;
    const webinars = Data.events.Webinars;


    /* ============================================================= */
    /*    meetings   meetings   meetings   meetings   meetings   meetings */
    /* ============================================================= */
    meetings.forEach(m => {
        const div = document.createElement("div");
        const s1 = document.createElement("span");
        const s2 = document.createElement("span");

        s1.innerHTML = m.meetingname;
        s1.classList.add("mn")

        s2.innerHTML = m.organizer + "</br>" + "   زمان   " + m.time;
        s2.classList.add("desc")
        let s3;
        if (m.isfree == "yes") {
            s3 = document.createElement("span");
            s3.innerHTML = "پیوستن";
            s3.classList.add("Button");
            s3.classList.add("targetButton");


            s3.dataset.joinUrl = m.joinUrl;
            s3.dataset.joinerName = "A Hard Coded Name";

        } else {

            s3 = document.createElement("a");
            s3.innerHTML = "ثبت نام";
            s3.classList.add("Button");
            s3.href = m.subsLink;
        }
        if (m.subscriptionneeded == "yes" && m.subscribed == "yes") {
            s3.classList.add("disabled");
            //disable not working
            s3.disabled = true;
            s3.href = "#";



        }
        //        s3.innerHTML = m.isfree == "yes" ? "پیوستن" : "ثبت نام"
        //      s3.classList.add("button")

        div.classList.add("singleLink");

        div.appendChild(s1);
        div.appendChild(s2);
        div.appendChild(s3);

        const ctr = document.getElementById("meetings")
        if (ctr) {

            ctr.appendChild(div);
        }
    });

    /* -================================================================= */
    /* webinars  webinars  webinars   webinars  webinars  webinars         */
    /* ==================================================================== */
    webinars.forEach(w => {
        const div = document.createElement("div");
        div.classList.add("wCtr");

        const s1 = document.createElement("span");
        s1.classList.add("wn");
        const s2 = document.createElement("span");
        s2.classList.add("wDesc");
        //const s3 = document.createElement("span");
        //s3.classList.add("wButton");


        s1.innerHTML = w.wname;
        s2.innerHTML = w.presenter + "</br>" + "   زمان  " + w.time;

        let s3;
        if (w.isfree == "yes") {
            s3 = document.createElement("span");
            s3.innerHTML = "پیوستن";
            s3.classList.add("wButton");
            s3.classList.add("targetButton");

            s3.dataset.joinUrl = w.joinUrl;
            s3.dataset.joinerName = "A Hard Coded Name";




        } else {
            s3 = document.createElement("a");
            s3.innerHTML = "ثبت نام";
            s3.href = w.subsLink;
            s3.classList.add("wButton")
        }

        if (w.subscriptionneeded == "yes" && w.subscribed == "yes") {
            s3.classList.add("disabled");
            s3.disabled = true;
            s3.href = "#";
        }

        //s3.innerHTML = w.isfree == "yes" ? "پیوستن" : "ثبت نام"

        div.appendChild(s1);
        div.appendChild(s2);
        div.appendChild(s3);

        const wCtr = document.getElementById("webinars");
        if (wCtr) {

            wCtr.appendChild(div);
        }


    })


    const mt = document.getElementById("meetingTitle");
    const wt = document.getElementById("webinarTitle");
    console.log(mt, wt);
    if (mt) { mt.innerHTML = "میتینگ های " + Data.events.selecteddate }
    if (wt) { wt.innerHTML = "وبینار های " + Data.events.selecteddate }



}//Doer func





