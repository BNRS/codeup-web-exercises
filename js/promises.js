"use strict";

const wait = (timer) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Your promise resolved after " + timer + " milliseconds.");
        }, timer);
    });
};

wait(1000).then((data) => console.log(data));
wait(2500).then((data) => console.log(data));
wait(3300).then((data) => console.log(data));

function getDateOfLastCommit(username) {
    let dates = [];

    fetch('https://api.github.com/users/' + username + "/events/public", {headers: {'Authorization': 'token 1f656338837a0df49c62dee66f0f09b0fc643a5a'}})
        .then(response => response.json())
        .then(repositories => {
            repositories.map(repo => {
                dates.push(repo.created_at);
            });
            dates.sort();
            document.querySelector('span').innerText = new Date(dates[dates.length -1]);
            console.log(dates)
        });
}

getDateOfLastCommit("BNRS");
