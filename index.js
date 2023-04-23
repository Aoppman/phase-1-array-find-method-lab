

    function superbowlWin(record){
        const findVictory = record.find(record => record.result === "W")
            return findVictory ? findVictory.year : undefined
    };