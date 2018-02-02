(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    console.log(planetsString);
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    var planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */

    var newPlanetsString = planetsArray.join('<br>');
    console.log(newPlanetsString);

    //use slice
    var slice = planetsArray.slice(2, 4);
    console.log(slice);

    // code block //
    var indexJupiter = planetsArray.indexOf("Jupiter");
    console.log(indexJupiter);
    //use splice
    var afterMars = planetsArray.splice(indexJupiter +1, 1);
    console.log(afterMars);
    //Using splice to add back the planet after "Earth"
    var addBack = planetsArray.splice(indexJupiter, 2);
    console.log(addBack);

    /**
     // * BONUS:
     // * Create another string that would display your planets in an undordered
     // * list. You will need an opening AND closing <ul> tags around the entire
     // * string, and <li> tags around each planet.
     // */


// long way

        // <ul>
        //     <li>Mercury</li>
        //     <li>Venus</li>
        //     <li>Earth</li>
        // </ul>

        // var outputString = "";
        // outputString += "<ul><li>";
        //
        // outputString += "Mercury";
        // outputString += "</li><li>";
        // outputString += "Venus";
        // outputString += "</li><li>";
        // outputString += "Earth";
        // outputString += "</li><li>";
        // outputString += "Mars";
        // outputString += "</li><li>";
        // outputString += "Jupiter";
        // outputString += "</li><li>";
        // outputString += "Saturn";
        // outputString += "</li><li>";
        // outputString += "Uranus";
        // outputString += "</li><li>";
        // outputString += "Neptune";
        // outputString += "</li></ul>";
        //
        // console.log(outputString);
        //
        // document.write(outputString);


        // With join

    var outputString = "";
    planetsArray = planetsString.split("|");
    outputString += "<ul><li>";
    outputString += planetsArray.join("</li><li>");
    outputString += "</li></ul>";

    console.log(outputString);

    document.write(outputString);


    // With looping
    var planetsHTML = "<ul>";

    planetsArray.forEach(function(planet) {
        planetsHTML += "<li>" + planet + "</li>";
    });

    planetsHTML += "</ul>";

    console.log(planetsHTML);

    document.write(planetsHTML);

})();



