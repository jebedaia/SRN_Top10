/*
const printTrend = trend => {
    return trend === undefined
        ? '*NEW*'
        : trend > 0
            ? `â–² ${trend}`
            : trend < 0
                ? `â–¼ ${Math.abs(trend)}`
                : '';
};
*/

function createDummyData() {
    var obj = {
        top10: [],
        hitPicks: {
            radioActive: { artist: "FLAMINGO PIER", track: "FIND YOUR WAY" },
            radioControl: { artist: "CUT OFF YOUR HANDS", track: "ON THE SEA" },
            radioOne: { artist: "BEDIQUETTE", track: "DRIVE SLOW" },
            ninetyFiveB: { artist: "POLAROIDS OF POLARBEARS", track: "WE CHOOSE TO SINK HAPPILY" },
            rdu: { artist: "TOYOTA", track: "DRIVE (KEANU RAVES REMIX)" }
        }
    };
    const t10tr = {
        ranks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        artists: ["MEER", "SAME NAME CONFUSION", "ASTRO CHILDREN", "BAITERCELL", "FRUIT JUICE PARADE", "PICKLE DARLING", "SALMONELLA DUB", "SORRENTO", "HORN", "LADI6"],
        tracks: ["1953 (FEAT. SIOBHAN LEILANI)", "MUST BE LUCKY", "MILK", "HINE RURU (FEAT. HUIA)", "CICADAS", "MOUTHFUL", "RE- IGNITE DUB 7 MIX", "LOOK UP (FEAT. TROY KINGI)", "GREEDY BITCH", "DIAGONALS"]
        //regions = [],
        //trend = []
    };

    for (i = 0; i < t10tr.ranks.length; i++) {
        obj.top10.push({
            rank: t10tr.ranks[i].toString(),
            artist: t10tr.artists[i], 
            track: t10tr.tracks[i]
        });
    }

    return obj;
}

const writeTop10 = async () => {
    var srnTop10 = await fetch('http://mame.cab/srn/srn-top10.json') //http://mame.cab/srn/srn-top10.json
        .then(response => response.json())
        .catch(() => {
            return undefined;
        });

    if (!srnTop10) {
        //document.getElementById('top10Container').innerText = 'Top 10 unavailable at this time.';
        //return;
        srnTop10 = createDummyData();
    }

    const { top10, hitPicks } = srnTop10;

    const insertCell = (r, data) => {
        r.insertCell().innerText = data;
    };

    const top10Table = document.getElementById('top10Table');
    top10.forEach(entry => {
        const { rank, artist, track, region, trend } = entry;
        const t10tr = top10Table.insertRow();

        insertCell(t10tr, rank);
        insertCell(t10tr, artist);
        insertCell(t10tr, track);
        //insertCell(t10tr, region);
        //insertCell(t10tr, printTrend(trend));
    });

    const hitPickTable = document.getElementById('hitPicksTable');

    const insertHitpickRow = (t, station, hitpick) => {
        const r = t.insertRow();
        insertCell(r, station);
        insertCell(r, hitpick.artist);
        insertCell(r, hitpick.track);
        //insertCell(r, hitpick.region);
    };

    insertHitpickRow(hitPickTable, "Radio Active", hitPicks.radioActive);
    insertHitpickRow(hitPickTable, "Radio Control", hitPicks.radioControl);
    insertHitpickRow(hitPickTable, "Radio One", hitPicks.radioOne);
    insertHitpickRow(hitPickTable, "95b", hitPicks.ninetyFiveB);
    insertHitpickRow(hitPickTable, "RDU", hitPicks.rdu);
};