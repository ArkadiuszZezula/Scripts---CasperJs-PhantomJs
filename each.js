var links = [
    'http://google.com/',
    'http://yahoo.com/',
    'http://bing.com/'
];
var casper = require('casper').create();

casper.start().each(links, function(self, link) {
    self.thenOpen(link, function() {
        this.echo(this.getTitle());
    });
});

casper.run();