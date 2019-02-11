<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="oldDefault.aspx.cs" Inherits="SRN_Top10.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"/>
    <link href="Content/bowstyles.css" rel="stylesheet" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"></script>
    <script src="script.js" type="text/javascript"></script>
    <title>SRN - TOP 10</title>
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
                                        <a href="wobDefault.aspx"><img class="bigLogo white" src="Logos/Mightymouth_SRN.jpg" alt="SRN Logo" /></a>
                                    </div>
                                    <div id="container-header-top10" class="hidden">
                                        <img class="headerImage white" src="Headers/top10%20full%20size.png" alt="SRN TOP 10 - TE TEKAU O RUNGA" />
                                    </div>
                                    <div id="top10Container">

                                    </div>
                                    
                                    <div id="page-divider"></div>

                                    <div id="container-header-hitPicks" class="hidden">
                                        <img class="headerImage white" src="Headers/hitPicks%20full%20size.png" alt="HIT PICKS" />
                                    </div>
                                    <div id="hitPicksContainer">

                                    </div>
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
        <div class="container-footer hidden">
            <img class="footer float-right white" src="Footers/buildingsa.png" alt="Footer Art" />
        </div>
    </body>
</html>
