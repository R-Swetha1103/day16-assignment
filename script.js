function countdown(number, callback) {
    if (number < 1) {
        callback();
        return;
    }
    document.getElementById('countdown').textContent = number;
    setTimeout(() => {
        countdown(number - 1, function() {
            setTimeout(() => {
                countdown(number - 2, function() {
                    setTimeout(() => {
                        countdown(number - 3, function() {
                            setTimeout(() => {
                                countdown(number - 4, function() {
                                    setTimeout(() => {
                                        countdown(number - 5, function() {
                                            setTimeout(() => {
                                                countdown(number - 6, function() {
                                                    setTimeout(() => {
                                                        countdown(number - 7, function() {
                                                            setTimeout(() => {
                                                                countdown(number - 8, function() {
                                                                    setTimeout(() => {
                                                                        countdown(number - 9, function() {
                                                                            document.getElementById('countdown').textContent = 'Happy Independence!';
                                                                        });
                                                                    }, 1000);
                                                                });
                                                            }, 1000);
                                                        });
                                                    }, 1000);
                                                });
                                            }, 1000);
                                        });
                                    }, 1000);
                                });
                            }, 1000);
                        });
                    }, 1000);
                });
            }, 1000);
        });
    }, 1000);
}

countdown(10, function() {
    
});
