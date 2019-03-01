var color = 'white';
var altColor = 'black';
var duration = 2.5;
const transitionType = 'ease';

var debugCounter = 0;

//Scroll Variables
var scrollRatio;
var transitionHeight;
var scrollDistPastTop;

var aboutSectionVisible = false;

$(window).scroll(function () {
    if (checkScrollRatio()) {
        updateElementLightness(scrollRatio);
        fadeElements(altColor, scrollRatio);
        fadeElements(color, 1 - scrollRatio);
    }
});

$(window).on('resize', function () {
    //when screen changes size, update height to transition at, and size of radio station logos
    updateTransitionHeight();
    updateLogoHeight();
});

function updateTransitionHeight() {
    const firstDiv = '#top10Container';

    const transition_position = ($(firstDiv).offset().top + ($(firstDiv).height())) - document.documentElement.clientHeight * (1 / 2);
    const body = document.body,
        html = document.documentElement;
    const alt_transition_position = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight) - document.documentElement.clientHeight;

    transitionHeight = Math.min(transition_position, alt_transition_position);
}

function updateLogoHeight() {
    const box = ".row.row-listing .text-left.column-logo .container-logo .logo";
    
    $(box).each(function () {

        $(this).removeAttr('style');//reset style before messing about
        $(this).parent().removeAttr('style');
        $(this).parent().parent().removeAttr('style');
        $(this).parent().parent().parent().removeAttr('style');

        const newSize = $(this).parent().parent().parent().parent().height();
        const oldSize = $(this).parent().height();

        $(this).parent().parent().parent().css({
            //row-listing
            "height": newSize
        });
        $(this).parent().parent().css({
            //column
            "height": newSize
        });
        $(this).parent().css({
            //container
            "height": newSize
        });
        
        //add padding for logo to vertically center it
        const paddingSize = Math.abs(newSize - oldSize) / 2;
        $(this).css({
            //logo
            "height": Math.floor(Math.min(oldSize, newSize)),
            "margin-top": Math.floor(paddingSize)
        });
    });
}

function checkScrollRatio() {
    /*
    y_scroll_position = window.pageYOffset;
    scrollDistPastTop = y_scroll_position - transition_top;
    scrollRatio = scrollDistPastTop / transitionHeight;
    scrollRatio = stayInDomain(scrollRatio, 0, 1);*/
    const old = scrollRatio;

    if (window.pageYOffset < transitionHeight) {
        scrollRatio = 0;
    } else {
        scrollRatio = 1;
    }

    if (old == scrollRatio) {
        return false;
    } else {
        return true;
    }

    //const factor = 0.2;
    //---------------------(x,      midpoint,                steepness,         maxvalue,                   offset)
    //y = (1 + factor*(5/4)) / (1 + exp(-2 * ln(1 / factor) * (x - 0.5))) - (factor * (5 / 8) + factor/1000)
    //scrollRatio = rampValue(scrollRatio, 0.5, 2 * Math.log(1 / (factor/2)), 1 + factor * (5 / 4), -(factor * (5 / 8) + factor/1000));
    //scrollRatio = stayInDomain(scrollRatio, 0, 1);
}

function rampValue(x, midpoint, steepness, maxvalue, offset) {
    //sigmoid function
    return (maxvalue / (1 + Math.exp(-steepness * (x - midpoint)))) + offset;
    //return (1 / steepness) * Math.log(x / (maxvalue - x)) + midpoint;
}

function stayInDomain(value, start, end) {
    if (value > end) {
        return end;
    } else if (value < start) {
        return start;
    } else {
        return value;
    }
}

function updateElementLightness(lightness) {
    /* changes background color, text color and row border color */
    input = color == 'black' ? lightness : 1 - lightness;
    $("body").css({
        "background-color": float2color(input)
    });
    $(".row.row-listing .text-left.column-rank").css({
        "color": float2color(1 - input)
    });
    $(".row.row-listing .text-left.column-track .artist").css({
        "color": float2color(1 - input)
    });
    $(".row.row-listing").css({
        "border-color": float2color(0.35 - input * (1 - 0.35))
    });
    $(".myShadow").css({
        "box-shadow": "1px 1px 2px " + float2color(0.8 - (1-input) * (0.8))
    });
    /*
    $(".row.row-listing").css({
        "background-color": 'rgba(0, 0, 0, ' + (0.35 - input * (1 - 0.35)).toFixed(2) + ')'
    });*/
}

function float2color(percentage) {
    var color_part_dec;
    color_part_dec = 255 * percentage;
    var color_part_hex = Number(parseInt(color_part_dec, 10)).toString(16);
    if (color_part_dec >= 16) {
        return "#" + color_part_hex + color_part_hex + color_part_hex;
    } else {
        return "#" + "0" + color_part_hex + "0" + color_part_hex + "0" + color_part_hex;
    }
}

function fadeElements(color, opacity) {
    fadeElement("headerImage.SRN", color, opacity);
    fadeElement("headerImage.HitPicks", color, opacity);
    /*fadeElement("footer.float-right", color, opacity);*/
}

function fadeElement(element, color, opacity) {
    $("." + element + "." + color).each(function () {
        $(this).css({
            "opacity": opacity.toFixed(1)
        });
    });
}

function addAltElements() {
    $("img.headerImage.SRN.white").each(function () {
        $(this).wrap('<span></span>');
        var $overlay = $('<span><img class="headerImage SRN black" src="Headers/top10 too big glow.png"></img></span>');
        $overlay.css('position', 'absolute');
        $overlay.css('top', 0);
        $overlay.css('left', 0);
        $(this).parent().append($overlay);
    });
    $("img.headerImage.HitPicks.white").each(function () {
        $(this).wrap('<span></span>');
        var $overlay = $('<span><img class="headerImage HitPicks black" src="Headers/hitPicks too big glow.png"></img></span>');
        $overlay.css('position', 'absolute');
        $overlay.css('top', 0);
        $overlay.css('left', 0);
        $(this).parent().append($overlay);
    });
}

function addOneTransitionCSS(element, attribute, dur = duration, trans = transitionType) {
    $(element).css({
        transition: attribute + ' ' + dur.toString() + 's ' + trans
    });
}

function addTransitionCSS() {
    addOneTransitionCSS("body", "background-color");
    addOneTransitionCSS(".row.row-listing .text-left.column-rank", "color");
    addOneTransitionCSS(".row.row-listing .text-left.column-track .artist", "color");
    addOneTransitionCSS(".row.row-listing", "border-color");
    addOneTransitionCSS(".myShadow", "box-shadow");
    /*addOneTransitionCSS(".row.row-listing", "background-color");*/
    addOneTransitionCSS(".headerImage.SRN.black", "opacity");
    addOneTransitionCSS(".headerImage.SRN.white", "opacity");
    addOneTransitionCSS(".headerImage.HitPicks.black", "opacity");
    addOneTransitionCSS(".headerImage.HitPicks.white", "opacity");
    /*addOneTransitionCSS(".footer.float-right.black", "opacity");*/
}

const writeTop10 = async () => {
    var srnTop10 = await fetch('http://mame.cab/srn/srn-top10.json')//
        .then(response => response.json())
        .catch(() => {
            return undefined;
        });

    if (!srnTop10) {
        /*$('#top10Container').addClass("hidden");*/
        $('#hitPicksContainer').addClass("hidden");
        addErrorMessage('The SRN Top 10 is unavailable at this time.', '#top10Container');
        return;
    }

    const { top10, hitPicks } = srnTop10;
    
    top10.forEach(entry => {
        const { rank, artist, track} = entry;
        
        add_html_row_listing(rank, track, artist, '#top10Container')
    });
    
    const insertHitpickRow = (station, logo, hitpick, link) => {
        add_html_row_hitpick(station, 'Logos/' + logo, hitpick.track, hitpick.artist, '#hitPicksContainer', link)
    };

    insertHitpickRow("Radio Active", "RadioActive886_Stack_pos.jpg", hitPicks.radioActive, 'http://www.radioactive.fm/');
    insertHitpickRow("Radio Control", "Radio Control Logo.png", hitPicks.radioControl, 'http://radiocontrol.org.nz/');
    insertHitpickRow("Radio One", "R1 Logo Web.jpg", hitPicks.radioOne, 'https://www.r1.co.nz/');
    insertHitpickRow("95b", "bFM_colour.jpg", hitPicks.ninetyFiveB, 'http://95bfm.com/');
    insertHitpickRow("RDU", "RDU40_logo_BW_large.jpg", hitPicks.rdu, 'http://www.rdu.org.nz/');

    $('.hidden').removeClass("hidden");
    addAltElements();

    const oldDuration = duration;
    duration = 0.01;
    updateElementLightness(0);
    fadeElements(altColor, 0);
    fadeElements(color, 1);
    duration = oldDuration;

    updateTransitionHeight();
    updateLogoHeight();
    addTransitionCSS();
};

function addErrorMessage(errorMessage, html_parent) {
    row = $('<div class="text-center error text">').html(errorMessage);
    $(html_parent).append(row);
}

/*
 * Equivalent HTML:
<div class="row row-listing">
    <div class="col-1 text-left column-rank">
        <div>1</div>
    </div>
    <div class="col-11 text-left column-track">
        <div class="track">1953 (FEAT. SIOBHAN LEILANI)</div>
        <div class="artist">MEER</div>
    </div>
</div>
*/
function add_html_row_listing(rank, track, artist, html_parent) {
    row = $('<div class="row row-listing myShadow">');

    leftColumn = $('<div class="column-thin text-left column-rank">').html(rank);
    row.append(leftColumn);
    
    rightColumn = $('<div class="text-left column-track text">');
    rightColumn.append($('<div class="artist">').html(artist));
    rightColumn.append($('<div class="track">').html(track));
    row.append(rightColumn);

    $(html_parent).append(row);
}

/*
 * Equivalent HTML:
<div class="row row-listing">
    <div class="col-1 text-left column-logo">
        <div class="container-logo">
            <a href="http://www.radioactive.fm/" class="logoButton"><img class="logo" src="Logos/RadioActive886_Stack_pos.jpg" alt="Radio Active" /></a>
        </div>
    </div>
    <div class="text-left column-track">
        <div class="track">FIND YOUR WAY</div>
        <div class="artist">FLAMINGO PIER</div>
    </div>
</div>
*/
function add_html_row_hitpick(station, logo, track, artist, html_parent, link) {
    //whole row
    row = $('<div class="row row-listing myShadow">');

    //left column
    logoImage = $('<img class="logo" src="' + logo + '" alt="' + station + '" />');
    logoContainer = $('<div class="container-logo">').append(logoImage);
    logoLink = $('<a class="logoButton" href="' + link + '"/>').append(logoContainer);
    leftColumn = $('<div class="column-thin text-left column-logo">').append(logoLink);
    row.append(leftColumn);

    //right column
    rightColumn = $('<div class="text-left column-track text">');
    rightColumn.append($('<div class="artist">').html(artist));
    rightColumn.append($('<div class="track">').html(track));
    row.append(rightColumn);

    $(html_parent).append(row);
}

/*
 * Equivalent HTML:
<div class="row row-listing aboutSection text myShadow">
    <div class="col-12">
        <div class="aboutText text">
            "Comment or statement about what the SRN is and what the goals/function of the Top 10 is"
        </div>
    </div>
</div>
*/
function aboutButtonClick() {
    if (aboutSectionVisible) {
        $(".aboutSection").remove();
        aboutSectionVisible = false;

    } else {

        row = $('<div class="row row-listing aboutSection text myShadow">');

        column = $('<div class="col-12">');
        column.append($('<div class="aboutText text">').html("The Student Radio Network (SRN) are the undisputed arbiters of independent New Zealand music, culture and opinion, representing the freshest content, the savviest people, a volunteer staff of hundreds, and engaged audience of 10’s of thousands.The SRN is a network of established radio stations that represent the heart and conscience of a contemporary alternative community.A deliverer of innovation and invention, of music and thought, and of connection and culture."));
        row.append(column);

        $(".aboutButton").append(row);
        aboutSectionVisible = true;
        updateElementLightness(scrollRatio);
        fadeElements(altColor, scrollRatio);
        fadeElements(color, 1 - scrollRatio);
    }
    /*if (aboutSectionVisible) {
        $(".aboutSection").addClass("aboutHidden");
        aboutSectionVisible = false;

    } else {

        $('.aboutHidden').removeClass("aboutHidden");
        aboutSectionVisible = true;
    }*/
}