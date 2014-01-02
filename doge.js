/*
Doge.js (Get your own at https://github.com/xxyy/doge.js/)
Copyright (C) 2014 Philipp Nowak / xxyy (xxyy.github.io)

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/

var doges = ["wow", "such doge.js", "many add ur own doge swag pls"];
var colors = ["#0040FF", "#2EFEF7", "#DF0101", "#088A08", "#CC2EFA", "#FFBF00"];

function buildDoge() {
    return "<div class='doge' style='color: "
            + colors[Math.floor(Math.random() * colors.length)]
            + "; left: "
            + Math.floor(Math.random() * 95) //don't want overflow
            + "%; top: "
            + Math.floor(Math.random() * 95) //don't want overflow
            + "%;'>"
            + doges[Math.floor(Math.random() * doges.length)]
            + "</div>";
}

function showDoge() {
    $(".wow").append(buildDoge);
    $(".doge").fadeIn(2000, function() {
        $(".doge").fadeOut(2000, function() {
            $(".doge").remove();
            showDoge(); // wow such recurse
        });
    });
}

$(window).on("load", function() {
    showDoge();
});