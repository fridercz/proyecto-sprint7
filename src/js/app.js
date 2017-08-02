var template = Handlebars.templates["index"];
        var data = {};

        Handlebars.registerHelper("linkto", function(url,name){
            var name = Handlebars.Utils.escapeExpression(name),
                url= Handlebars.Utils.escapeExpression(url),
                link = "<a href=\'" + location.protocol + "//" + location.host + "/" + url + ".html\'>" + name + "</a>"
                return new Handlebars.SafeString(link);
            });
        document.getElementById('menu').innerHTML += template(data);

/*COMPILAR EL HANDLEBAR SI NO NO CORRE CON PUG
script(type="text/javascript" src="template.js")*/