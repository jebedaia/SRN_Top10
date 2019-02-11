<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="oldDefault.aspx.cs" Inherits="SRN_Top10.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"/>
    <link href="Content/bstyles.css" rel="stylesheet" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"></script>
    <script src="bscript.js" type="text/javascript"></script>
    <title>SRN - TOP 10</title>
</head>
    <body onload="writeTop10()">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-1" style="background-color:yellow;">.</div>
                <div class="col-lg-2" style="background-color:orange;">.</div>
                <div class="col">
                    <div class="row">
                        <div class="col-md-1" style="background-color:orange;">.</div>
                        <div class="col-md">
                            <h2>SRN TOP 10 (<a href="http://mame.cab/srn/rss.xml">RSS</a>)</h2>
                            <div id="top10Container">

                                <div class="row row-listing">
                                    <div class="col-1 text-left column-rank">
                                        <div>1</div>
                                    </div>
                                    <div class="col-11 text-left column-track">
                                        <div class="track">1953 (FEAT. SIOBHAN LEILANI)</div>
                                        <div class="artist">MEER</div>
                                    </div>
                                </div>

                                <div class="row row-listing">
                                    <div class="col-1 text-left column-logo">
                                        <img class="logo" src="Logos/RadioActive886_Stack_pos.jpg" alt="Radio Active" />
                                    </div>
                                    <div class="col-11 text-left column-track">
                                        <div class="track">FIND YOUR WAY</div>
                                        <div class="artist">FLAMINGO PIER</div>
                                    </div>
                                </div>

                                <table id="top10Table" class="table">
                                    <thead>
                                    <tr>
                                        <th>Rank</th>
                                        <th>Artist</th>
                                        <th>Track</th>
                                    </tr>
                                    </thead>
                                </table>
                                <h2>HIT PICKS</h2>
                                <table id="hitPicksTable" class="table" style="border-color: black">
                                    <thead>
                                    <tr>
                                        <th>Station</th>
                                        <th>Artist</th>
                                        <th>Track</th>
                                    </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                        <div class="col-md-1" style="background-color:orange;">.</div>
                    </div>
                </div>
                <div class="col-lg-2" style="background-color:orange;">.</div>
                <div class="col-xl-1" style="background-color:yellow;">.</div>
            </div>
        </div>
    </body>
</html>
