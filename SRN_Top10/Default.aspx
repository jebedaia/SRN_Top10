<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"/>
    <link href="Content/styles.css" rel="stylesheet" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"></script>
    <script src="script.js" type="text/javascript"></script>
    <title>SRN - TOP 10</title>
    <link rel="shortcut icon" type="image/png" href="Logos/Mightymouth_SRN_icon.png"/>
</head>
    <body onload="writeTop10()">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-1"></div>
                <div class="col-md-1"></div>
                <div class="col-md">
                    <div class="row">
                        <div class="col-xl-1"></div>
                        <div class="col-sm-1"></div>
                        <div class="col-sm">
                            
                            <div class="row">
                                <div class="col-xs-1"></div>
                                <div class="col-xs-10">
                                    <div class="container-bigLogo">
                                        <span class="container-helper-bigLogo">
                                            <a href="bowDefault.aspx" class="logoButton"><img class="bigLogo black" src="Logos/Mightymouth_SRN_clipped_c.png" alt="SRN Logo" /></a>
                                        </span>
                                        <span class="container-helper-bigLogo">
                                            <a href="bowDefault.aspx" class="logoButton"><img class="bigLogo black" src="Logos/Mightymouth_SRN_clipped_c.png" alt="SRN Logo" /></a>
                                        </span>
                                        <span class="container-helper-bigLogo">
                                            <a href="bowDefault.aspx" class="logoButton"><img class="bigLogo black" src="Logos/Mightymouth_SRN_clipped_c.png" alt="SRN Logo" /></a>
                                        </span>
                                        <span class="container-helper-bigLogo">
                                            <a href="bowDefault.aspx" class="logoButton"><img class="bigLogo black" src="Logos/Mightymouth_SRN_clipped_c.png" alt="SRN Logo" /></a>
                                        </span>
                                        <span class="container-helper-bigLogo">
                                            <a href="bowDefault.aspx" class="logoButton"><img class="bigLogo black" src="Logos/Mightymouth_SRN_clipped_c.png" alt="SRN Logo" /></a>
                                        </span>
                                    </div>
                                </div>
                                <div class="col-xs-1"></div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12">
                                    <div id="container-header-top10" class="hidden">
                                        <span id="lolAnotherContainer-top10">
                                            <img class="headerImage SRN white" src="Headers/top10 bevel.png" alt="SRN TOP 10 - TE TEKAU O RUNGA" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-1"></div>
                                <div class="col-xs-10">
                                    <div id="top10Container">

                                    </div>
                                </div>
                                <div class="col-xs-1"></div>
                            </div>

                            <div id="page-divider"></div>

                            <div class="row">
                                <div class="col-xs-12">
                                    <div id="container-header-hitPicks" class="hidden">
                                        <div id="lolAnotherContainer-hitPicks">
                                            <img class="headerImage HitPicks white" src="Headers/hitPicks bevel.png" alt="HIT PICKS" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-1"></div>
                                <div class="col-xs-10">
                                    <div id="hitPicksContainer">

                                    </div>
                                </div>
                                <div class="col-xs-1"></div>
                            </div>
                            <div class="row">
                                <div class="col-xs-1"></div>
                                <div class="col-xs-10 text-right hidden">
                                    <div class="aboutButton"><a class="aboutButtonText text" onclick="aboutButtonClick()">WHO ARE THE SRN?</a></div>
                                </div>
                                <div class="col-xs-1"></div>
                            </div>
                            

                        </div>
                        <div class="col-sm-1"></div>
                        <div class="col-xl-1"></div>
                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="col-xl-1"></div>
            </div>
        </div>
        <div class="container-footer black hidden">
            <img class="footer float-right black" src="Footers/graph.png" alt="Footer Art" />
        </div>
    </body>
</html>
