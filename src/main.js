global.print = console.log;

const done = function(err, window) {

    let $ = window.$

    let teams = []
    let rows = window.$('table > tbody > tr').toArray()
    for (let i = 0; i < rows.length; i++) {
        if (i % 2 == 1) {
            let row = $(rows[i]).find('td').toArray()
            for (let td of row.slice(1,4)) {
                global.td = td
                let team = {}
                let status
                for (child of $(td).children().toArray()) {
                    if (child.tagName.toLowerCase() == 'b') {
                        status = child.textContent.slice(0,-1).toLowerCase()
                        team[status] = []
                    } else if (child.tagName.toLowerCase() == 'a') {
                        team[status].push(child.textContent)
                    }
                }
                teams.push(team)
            }
        }
    }
    global.teams = teams
}

jsdom.env({
    url: "http://www.espn.com/fantasy/baseball/flb/story?page=REcloserorgchart",
    scripts: ["http://code.jquery.com/jquery.js"],
    done
});
